//
//  ContentView.swift
//  FlightDeck
//

import SwiftUI

struct ContentView: View {
    // Change this if your ESP32's static IP is different
    private let panelURL = URL(string: "http://192.168.1.100")!

    @State private var reloadTrigger = false
    @State private var connectionFailed = false

    var body: some View {
        ZStack {
            Color(red: 0.09, green: 0.10, blue: 0.11)
                .ignoresSafeArea()

            WebView(url: panelURL,
                    reloadTrigger: $reloadTrigger,
                    connectionFailed: $connectionFailed)
                .ignoresSafeArea()

            if connectionFailed {
                VStack(spacing: 14) {
                    Image(systemName: "wifi.exclamationmark")
                        .font(.system(size: 40))
                        .foregroundColor(.orange)
                    Text("Can't reach FlightDeck")
                        .font(.headline)
                        .foregroundColor(.white)
                    Text(panelURL.absoluteString)
                        .font(.caption)
                        .foregroundColor(.gray)
                    Button(action: { reloadTrigger = true; connectionFailed = false }) {
                        Text("Retry")
                            .font(.subheadline.bold())
                            .padding(.horizontal, 24)
                            .padding(.vertical, 10)
                            .background(Color.blue)
                            .foregroundColor(.white)
                            .clipShape(Capsule())
                    }
                }
                .padding(30)
                .background(.ultraThinMaterial)
                .clipShape(RoundedRectangle(cornerRadius: 16))
            }
        }
        .statusBarHidden(true)
        .onAppear {
            UIApplication.shared.isIdleTimerDisabled = true
        }
        .onDisappear {
            UIApplication.shared.isIdleTimerDisabled = false
        }
    }
}

#Preview {
    ContentView()
}
