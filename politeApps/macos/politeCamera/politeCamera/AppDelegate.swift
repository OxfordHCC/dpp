//
//  AppDelegate.swift
//  politeCamera
//
//  Created by Alex Zugravu on 19/05/2020.
//  Copyright © 2020 me. All rights reserved.
//

import Cocoa
import SwiftUI
import AVFoundation
import Vision
import NIO
import NIOHTTP1

let UDP_BEACON = "{\"pManifest\":{\"uuid\":\"not-uuid-polite-cam\",\"name\":\"Alex's Polite Camera\",\"url\":\"https://192.168.43.35\"}}"


@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {

    var window: NSWindow!
    var previewLayer: AVCaptureVideoPreviewLayer!
    var photoOutput: AVCapturePhotoOutput!
    var capturePhotoDelegate: PhotoCaptureProcessor!
    //var contentView: ContentView!
    var captureView: NSView!
    var resultView: NSView!
    var hide:Bool!

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Create the SwiftUI view that provides the window contents.
        let contentView = ContentView(controller: self)
        hide = false
        // Create the window and set the content view. 
        window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 480, height: 300),
            styleMask: [.titled, .closable, .miniaturizable, .resizable, .fullSizeContentView],
            backing: .buffered, defer: false)
        window.center()
        window.setFrameAutosaveName("Main Window")
        window.contentView = NSHostingView(rootView: contentView)
        window.makeKeyAndOrderFront(nil)
        
        capturePhotoDelegate = PhotoCaptureProcessor(controller: self)
        startCamera()
        startUDPBroadcasts()
        startHTTPServer()
        //startTCPServer()
    }
    
    
    func startHTTPServer(){
        func childChannelInitializer(channel: Channel) -> EventLoopFuture<Void> {
            return channel.pipeline.configureHTTPServerPipeline(withErrorHandling: true).flatMap {
                channel.pipeline.addHandler(HTTPHandler(controller: self))
            }
        }
        DispatchQueue(label: "http server").async{
            do{
                let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
                let bootstrap = ServerBootstrap(group: group)
                    // Specify backlog and enable SO_REUSEADDR for the server itself
                    .serverChannelOption(ChannelOptions.backlog, value: 256)
                    .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)

                    // Set the handlers that are applied to the accepted Channels
                    .childChannelInitializer(childChannelInitializer(channel:))

                    // Enable SO_REUSEADDR for the accepted Channels
                    .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
                    .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 1)
                    //.childChannelOption(ChannelOptions.allowRemoteHalfClosure, value: true)
                let channel = try bootstrap.bind(host: "0.0.0.0", port:9099).wait()
            }catch{
                print("error in http server init")
            }
        }
    }
    
    func setHideStatus(status: Bool){
        print("set hide status: ", status)
        self.hide = status
    }
    
    
    func startTCPServer(){
        DispatchQueue(label: "tcp server").async{
            let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
            let bootstrap = ServerBootstrap(group: group)
            // Specify backlog and enable SO_REUSEADDR for the server itself
            .serverChannelOption(ChannelOptions.backlog, value: 256)
            .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)

            // Set the handlers that are appled to the accepted Channels
            .childChannelInitializer { channel in
                // Ensure we don't read faster than we can write by adding the BackPressureHandler into the pipeline.
                channel.pipeline.addHandler(BackPressureHandler()).flatMap { v in
                    channel.pipeline.addHandler(TCPHandler(controller: self))
                }
            }

            // Enable SO_REUSEADDR for the accepted Channels
            .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
            .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 16)
            .childChannelOption(ChannelOptions.recvAllocator, value: AdaptiveRecvByteBufferAllocator())
            
            let channel = bootstrap.bind(host:"0.0.0.0", port: 9090)
        }
    }

    
    func startUDPBroadcasts(){
        DispatchQueue(label: "udp loop").async{
            do{
                let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
                let bootstrap = DatagramBootstrap(group: group)
                    .channelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
                    .channelInitializer { channel in
                        channel.pipeline.addHandler(EchoHandler(data: UDP_BEACON, remoteAddressInitializer:{ () -> SocketAddress in
                            return try SocketAddress.makeAddressResolvingHost("127.0.0.1", port: 9000)}))
                }
                defer {
                    try! group.syncShutdownGracefully()
                }

                let channel = try bootstrap.bind(host: "127.0.0.1", port: 9001).wait()
              }catch{
                  print("some error happened: \(error)")
              }
        }
    }
    
    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
        print("bye")
    }
    
    func startCamera(){
        let captureSession = AVCaptureSession()
        captureSession.beginConfiguration()
        guard let videoDevice = AVCaptureDevice.default(for: .video)
        else { return }
        
        do{
            captureSession.sessionPreset = .photo
            //input
            let photoInput = try AVCaptureDeviceInput(device: videoDevice)
            if captureSession.canAddInput(photoInput){
                captureSession.addInput(photoInput)
            }
            //output
            photoOutput = AVCapturePhotoOutput()
            if captureSession.canAddOutput(photoOutput){
                captureSession.addOutput(photoOutput)
            }
        }catch{
            //Config failed
        }
        captureSession.commitConfiguration()
        
        previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
        let viewLayer: CALayer = CALayer()
        viewLayer.frame = CGRect(x: 0, y: 0, width: 500, height: 500)
        viewLayer.addSublayer(previewLayer)
        viewLayer.sublayerTransform = CATransform3DMakeScale(-1, 1, 1)
        window.contentView!.layer = previewLayer
        captureSession.startRunning()
        captureView = window.contentView
    }
    
    func capturePhoto(){
        print("Called capture photo")
        let photoSettings = AVCapturePhotoSettings(format: [AVVideoCodecKey: AVVideoCodecType.jpeg])
        photoOutput.capturePhoto(with: photoSettings, delegate: capturePhotoDelegate)
       
    }
    
    // MARK: - Vision - copied heavily from basic vision example from Apple
    fileprivate func performVisionRequest(image: CGImage, orientation: CGImagePropertyOrientation) {
        
        // Fetch desired requests based on switch status.
        let requests = createVisionRequests()
        // Create a request handler.
        let imageRequestHandler = VNImageRequestHandler(cgImage: image,
                                                        orientation: orientation,
                                                        options: [:])
        
        // Send the requests to the request handler.
        DispatchQueue.global(qos: .userInitiated).async {
            do {
                try imageRequestHandler.perform(requests)
            } catch let error as NSError {
                print("Failed to perform image request: \(error)")
                return
            }
        }
    }
        
    
    lazy var faceDetectionRequest = VNDetectFaceRectanglesRequest(completionHandler: self.handleDetectedFaces)
    
    /// - Tag: CreateRequests
    fileprivate func createVisionRequests() -> [VNRequest] {
        // Create an array to collect all desired requests.
        var requests: [VNRequest] = []
        requests.append(self.faceDetectionRequest)
        // Return grouped requests as a single array.
        return requests
    }
    
    fileprivate func handleDetectedFaces(request: VNRequest?, error: Error?) {
        if (error as NSError?) != nil {
            print("Face detection error.")
            return
        }
        // Perform drawing on the main thread.
        DispatchQueue.main.async {
            guard let drawLayer = self.resultView.layer,
                let results = request?.results as? [VNFaceObservation] else {
                    return
            }
            self.draw(faces: results, onImageWithBounds: drawLayer.bounds)
            drawLayer.setNeedsDisplay()
        }
    }
    
    // MARK: - Path-Drawing

    fileprivate func boundingBox(forRegionOfInterest: CGRect, withinImageBounds bounds: CGRect) -> CGRect {
        
        let imageWidth = bounds.width
        let imageHeight = bounds.height
        
        // Begin with input rect.
        var rect = forRegionOfInterest
        
        // Reposition origin.
        rect.origin.x *= imageWidth
        rect.origin.x += bounds.origin.x
        rect.origin.y = (1 - rect.origin.y) * imageHeight + bounds.origin.y
        
        // Rescale normalized coordinates.
        rect.size.width *= imageWidth
        rect.size.height *= imageHeight
        
        return rect
    }
    
    fileprivate func shapeLayer(color: NSColor, frame: CGRect) -> CAShapeLayer {
        // Create a new layer.
        let layer = CAShapeLayer()
        
        // Configure layer's appearance.
        if(hide){
            layer.backgroundColor = .black
            layer.borderColor = color.cgColor
            layer.borderWidth = 2
        }
        layer.shadowOpacity = 0
        layer.shadowRadius = 0
        
        
        // Locate the layer.
        layer.anchorPoint = .zero
        layer.frame = frame
        layer.masksToBounds = true
        
        // Transform the layer to have same coordinate system as the imageView underneath it.
        layer.transform = CATransform3DMakeScale(1, -1, 1)
        
        return layer
    }
    
    // Faces are YELLOW.
    /// - Tag: DrawBoundingBox
    fileprivate func draw(faces: [VNFaceObservation], onImageWithBounds bounds: CGRect) {
        CATransaction.begin()
        for observation in faces {
            let faceBox = boundingBox(forRegionOfInterest: observation.boundingBox, withinImageBounds: bounds)
            let faceLayer = shapeLayer(color: .yellow, frame: faceBox)
            
            // Add to pathLayer on top of image.
            self.resultView.layer?.addSublayer(faceLayer)
        }
        CATransaction.commit()
    }
    
    func goToCaptureView(){
        window.contentView = captureView
    }
}

class PhotoCaptureProcessor: NSObject, AVCapturePhotoCaptureDelegate {
    let controller: AppDelegate
    
    init(controller: AppDelegate) {
        self.controller = controller
    }
//    func setController(ctrl: AppDelegate){
//        self.controller = ctrl
//    }
    
    func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingPhoto photo:AVCapturePhoto, error:Error?){
        if(error != nil){
            print("some error happened in photo capture delegate")
            return
        }
        
        print("Capture photo delegate success")
        
        // Convert from UIImageOrientation to CGImagePropertyOrientation.
        
        let cgOrientation = CGImagePropertyOrientation.up
        let cgImage = photo.cgImageRepresentation()!.takeUnretainedValue()
        
        let resultView = CaptureResultView(controller: controller, image:cgImage)
        
        controller.resultView = NSHostingView(rootView: resultView)
        controller.window.contentView = controller.resultView
        
        controller.performVisionRequest(image: cgImage, orientation: cgOrientation)
    }
}



private final class EchoHandler: ChannelInboundHandler {
    typealias OutboundIn = AddressedEnvelope<ByteBuffer>
    public typealias InboundIn = AddressedEnvelope<ByteBuffer>
    public typealias OutboundOut = AddressedEnvelope<ByteBuffer>
    private var numBytes = 0
    var data: String
    
    private let remoteAddressInitializer: () throws -> SocketAddress
    
    init(data: String, remoteAddressInitializer: @escaping () throws -> SocketAddress) {
        self.remoteAddressInitializer = remoteAddressInitializer
        self.data = data
    }

    
    public func channelActive(context: ChannelHandlerContext) {
        do {
            print("inside channelActive")
            // Channel is available. It's time to send the message to the server to initialize the ping-pong sequence.
            
            // Get the server address.
            let remoteAddress = try self.remoteAddressInitializer()
            
            while(true){
                // Set the transmission data.
                var buffer = context.channel.allocator.buffer(capacity: self.data.utf8.count)
                buffer.writeString(self.data)
                self.numBytes = buffer.readableBytes
                
                // Forward the data.
                let envolope = AddressedEnvelope<ByteBuffer>(remoteAddress: remoteAddress, data: buffer)
                
                context.writeAndFlush(self.wrapOutboundOut(envolope), promise: nil)
                sleep(2)
            }

        } catch {
            print("Could not resolve remote address")
        }
    }
    
    public func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let envelope = self.unwrapInboundIn(data)
        let byteBuffer = envelope.data

        self.numBytes -= byteBuffer.readableBytes

        if self.numBytes <= 0 {
            let string = String(buffer: byteBuffer)
            print("Received: '\(string)' back from the server, closing channel.")
            context.close(promise: nil)
        }
    }
    
    public func errorCaught(context: ChannelHandlerContext, error: Error) {
        print("error: ", error)
        
        // As we are not really interested getting notified on success or failure we just pass nil as promise to
        // reduce allocations.
        context.close(promise: nil)
    }
}


private final class TCPHandler: ChannelInboundHandler {
    
    public typealias InboundIn = ByteBuffer
    public typealias OutboundOut = ByteBuffer
    let controller: AppDelegate

    init(controller: AppDelegate){
        self.controller = controller
    }

    public func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        // As we are not really interested getting notified on success or failure we just pass nil as promise to
        // reduce allocations.
        var byteBuffer = unwrapInboundIn(data)
        let reqString = byteBuffer.readString(length: byteBuffer.readableBytes)!

        print("length of request string", reqString.count)
        print("reqString at 0", reqString.prefix(4))
        if(reqString.prefix(4) == "true"){
            controller.setHideStatus(status: true)
        }else{
            controller.setHideStatus(status: false)
        }
        //context.write(data, promise: nil)
        print("received!")
    }

    // Flush it out. This can make use of gathering writes if multiple buffers are pending
    public func channelReadComplete(context: ChannelHandlerContext) {
        context.flush()
    }

    public func errorCaught(context: ChannelHandlerContext, error: Error) {
        print("error: ", error)

        // As we are not really interested getting notified on success or failure we just pass nil as promise to
        // reduce allocations.
        context.close(promise: nil)
    }
}

class HTTPHandler: ChannelInboundHandler {
    public typealias InboundIn = HTTPServerRequestPart
    public typealias OutboundOut = HTTPServerResponsePart
    var controller: AppDelegate
    
    init(controller: AppDelegate){
        self.controller = controller
    }
    private enum State {
        case idle
        case waitingForRequestBody
        case sendingResponse
        
        mutating func requestReceived() {
            precondition(self == .idle, "Invalid state for request received: \(self)")
            self = .waitingForRequestBody
        }
        
        mutating func requestComplete() {
            precondition(self == .waitingForRequestBody, "Invalid state for request complete: \(self)")
            self = .sendingResponse
        }
        
        mutating func responseComplete() {
            precondition(self == .sendingResponse, "Invalid state for response complete: \(self)")
            self = .idle
        }
    }
    
    private var buffer: ByteBuffer! = nil
    private var keepAlive = false
    private var state = State.idle
    
    private var infoSavedRequestHead: HTTPRequestHead?
    private var infoSavedBodyBytes: Int = 0
    
    private var continuousCount: Int = 0
    
    private var handler: ((ChannelHandlerContext, HTTPServerRequestPart) -> Void)?
    private var handlerFuture: EventLoopFuture<Void>?
    
    private func completeResponse(_ context: ChannelHandlerContext, trailers: HTTPHeaders?,     promise: EventLoopPromise<Void>?) {
        self.state.responseComplete()

        let promise = self.keepAlive ? promise : (promise ?? context.eventLoop.makePromise())
        if !self.keepAlive {
            promise!.futureResult.whenComplete { (_: Result<Void, Error>) in     context.close(promise: nil) }
        }
        self.handler = nil

        context.writeAndFlush(self.wrapOutboundOut(.end(trailers)), promise: promise)
    }
    
    func handleInfo(context: ChannelHandlerContext, request: HTTPServerRequestPart) {
        print("called handle info")
        switch request {
        case .head(let request):
            self.infoSavedRequestHead = request
            self.infoSavedBodyBytes = 0
            self.keepAlive = request.isKeepAlive
            self.state.requestReceived()
        case .body(buffer: let buf):
            self.infoSavedBodyBytes += buf.readableBytes
        case .end:
            self.state.requestComplete()
            let response = """
            HTTP method: \(self.infoSavedRequestHead!.method)\r
            URL: \(self.infoSavedRequestHead!.uri)\r
            body length: \(self.infoSavedBodyBytes)\r
            headers: \(self.infoSavedRequestHead!.headers)\r
            client: \(context.remoteAddress?.description ?? "zombie")\r
            IO: SwiftNIO Electric Boogaloo™️\r\n
            """
            self.buffer.clear()
            self.buffer.writeString(response)
            var headers = HTTPHeaders()
            headers.add(name: "Content-Length", value: "\(response.utf8.count)")
            context.write(self.wrapOutboundOut(.head(httpResponseHead(request: self.infoSavedRequestHead!, status: .ok, headers: headers))), promise: nil)
            context.write(self.wrapOutboundOut(.body(.byteBuffer(self.buffer))), promise: nil)
            self.completeResponse(context, trailers: nil, promise: nil)
        }
    }

    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        print("http channel read")
        let reqPart = self.unwrapInboundIn(data)
        if let handler = self.handler {
            handler(context, reqPart)
            return
        }
        
        switch reqPart {
        case .head(let request):
            if request.uri.unicodeScalars.starts(with: "/info".unicodeScalars) {
                self.handler = self.handleInfo
                self.handler!(context, reqPart)
                return
            }
            if request.uri.unicodeScalars.starts(with: "/show".unicodeScalars) {
                self.controller.setHideStatus(status: false)
            }
            
            if request.uri.unicodeScalars.starts(with: "/hide".unicodeScalars) {
                self.controller.setHideStatus(status: true)
            }
            
            self.keepAlive = request.isKeepAlive
            self.state.requestReceived()
            
            var responseHead = HTTPResponseHead(version: request.version, status: HTTPResponseStatus.ok)
            self.buffer.clear()
            self.buffer.writeString("Hello World")
            responseHead.headers.add(name: "content-length", value: "\(self.buffer!.readableBytes)")
            responseHead.headers.add(name: "content-length", value: "12")
            let response = HTTPServerResponsePart.head(responseHead)
            context.write(self.wrapOutboundOut(response), promise: nil)
        case .body:
            break
        case .end:
            self.state.requestComplete()
            let content = HTTPServerResponsePart.body(.byteBuffer(buffer!.slice()))
            context.write(self.wrapOutboundOut(content), promise: nil)
            self.completeResponse(context, trailers: nil, promise: nil)
        }
    }
    
    func channelReadComplete(context: ChannelHandlerContext) {
        print("channel read complete")
        context.flush()
    }
    
    func handlerAdded(context: ChannelHandlerContext) {
        print("handler added")
        self.buffer = context.channel.allocator.buffer(capacity: 0)
    }
    
    func userInboundEventTriggered(context: ChannelHandlerContext, event: Any) {
        print("user inbound event triggered")
        switch event {
        case let evt as ChannelEvent where evt == ChannelEvent.inputClosed:
            // The remote peer half-closed the channel. At this time, any
            // outstanding response will now get the channel closed, and
            // if we are idle or waiting for a request body to finish we
            // will close the channel immediately.
            switch self.state {
            case .idle, .waitingForRequestBody:
                context.close(promise: nil)
            case .sendingResponse:
                self.keepAlive = false
            }
        default:
            context.fireUserInboundEventTriggered(event)
        }
    }
}

extension String {
    func chopPrefix(_ prefix: String) -> String? {
        if self.unicodeScalars.starts(with: prefix.unicodeScalars) {
            return String(self[self.index(self.startIndex, offsetBy: prefix.count)...])
        } else {
            return nil
        }
    }

    func containsDotDot() -> Bool {
        for idx in self.indices {
            if self[idx] == "." && idx < self.index(before: self.endIndex) && self[self.index(after: idx)] == "." {
                return true
            }
        }
        return false
    }
}

private func httpResponseHead(request: HTTPRequestHead, status: HTTPResponseStatus, headers: HTTPHeaders = HTTPHeaders()) -> HTTPResponseHead {
    var head = HTTPResponseHead(version: request.version, status: status, headers: headers)
    let connectionHeaders: [String] = head.headers[canonicalForm: "connection"].map { $0.lowercased() }

    if !connectionHeaders.contains("keep-alive") && !connectionHeaders.contains("close") {
        // the user hasn't pre-set either 'keep-alive' or 'close', so we might need to add headers

        switch (request.isKeepAlive, request.version.major, request.version.minor) {
        case (true, 1, 0):
            // HTTP/1.0 and the request has 'Connection: keep-alive', we should mirror that
            head.headers.add(name: "Connection", value: "keep-alive")
        case (false, 1, let n) where n >= 1:
            // HTTP/1.1 (or treated as such) and the request has 'Connection: close', we should mirror that
            head.headers.add(name: "Connection", value: "close")
        default:
            // we should match the default or are dealing with some HTTP that we don't support, let's leave as is
            ()
        }
    }
    return head
}
