//
//  WebView.swift
//  FlightDeck
//
//  ── DIAGNOSTIC BUILD ──────────────────────────────────────────
//  Temporarily stripped of all gesture-disabling logic (text
//  selection, double-tap zoom, long-press suppression) to isolate
//  whether any of that is what's blocking rotary drag gestures.
//  If rotaries work in THIS version, we know one of those fixes
//  was the cause and can add them back one at a time. If rotaries
//  STILL don't work here, the problem is elsewhere entirely.
//

import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    let url: URL
    @Binding var reloadTrigger: Bool
    @Binding var connectionFailed: Bool

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = context.coordinator
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 0.09, green: 0.10, blue: 0.11, alpha: 1)
        webView.scrollView.backgroundColor = webView.backgroundColor

        if #available(iOS 16.4, *) {
            webView.isInspectable = true
        }

        context.coordinator.load(webView)
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
        if reloadTrigger {
            context.coordinator.retryCount = 0
            context.coordinator.load(webView)
            DispatchQueue.main.async { reloadTrigger = false }
        }
    }

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    class Coordinator: NSObject, WKNavigationDelegate {
        var parent: WebView
        var retryCount = 0
        let maxAutoRetries = 5

        init(_ parent: WebView) {
            self.parent = parent
        }

        func load(_ webView: WKWebView) {
            let request = URLRequest(url: parent.url,
                                      cachePolicy: .reloadIgnoringLocalCacheData,
                                      timeoutInterval: 8)
            webView.load(request)
        }

        private func handleFailure(_ webView: WKWebView) {
            retryCount += 1
            if retryCount <= maxAutoRetries {
                let delay = Double(retryCount) * 1.5
                DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                    self?.load(webView)
                }
            } else {
                DispatchQueue.main.async {
                    self.parent.connectionFailed = true
                }
            }
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            retryCount = 0
            DispatchQueue.main.async {
                self.parent.connectionFailed = false
            }
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            print("⚠️ didFail: \(error.localizedDescription)")
            handleFailure(webView)
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            print("⚠️ didFailProvisionalNavigation: \(error.localizedDescription)")
            handleFailure(webView)
        }

        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
            print("🔴 CONTENT PROCESS TERMINATED — reloading")
            retryCount = 0
            load(webView)
        }
    }
}
