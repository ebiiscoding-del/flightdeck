//
//  FlightDeckApp.swift
//  FlightDeck
//
//  Native wrapper around the ESP32 FlightDeck panel.
//  Loads http://192.168.1.100 in a full-screen WKWebView and keeps
//  the display awake for the entire session — no iOS PWA quirks.
//

import SwiftUI

@main
struct FlightDeckApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(.dark)
                .persistentSystemOverlays(.hidden)
        }
    }
}
