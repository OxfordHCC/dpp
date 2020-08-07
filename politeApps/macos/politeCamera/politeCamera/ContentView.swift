//
//  ContentView.swift
//  politeCamera
//
//  Created by Alex Zugravu on 19/05/2020.
//  Copyright © 2020 me. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    let controller: AppDelegate //todo: yikes
    
    var body: some View {
        VStack {
            
            Spacer().frame(width:800, height: 500)
//            Text("")
//                .font(.title)
//                .frame(maxWidth: .infinity, maxHeight: .infinity)
            //NavigationLink(destination: CaptureResultView()) {
                Button(action: {
                    self.controller.capturePhoto()
                }) {
                    Text("Capture")
                }
            //}
        }
    }
}


//struct ContentView_Previews: PreviewProvider {
//    static var previews: some View {
//        ContentView(controller: )
//    }
//}
