//
//  CaptureResultView.swift
//  politeCamera
//
//  Created by Alex Zugravu on 19/05/2020.
//  Copyright © 2020 me. All rights reserved.
//

import SwiftUI

struct CaptureResultView: View {
    let controller: AppDelegate
    let image: CGImage
    
    var body: some View {
        VStack{
            Image(image, scale: 2, label: Text("picture result"))
            Button(action: {
                self.controller.goToCaptureView()
            }){
                Text("Back")
            }
        }
    }
}

