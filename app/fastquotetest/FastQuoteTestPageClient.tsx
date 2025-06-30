"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export default function FastQuoteTestPageClient() {
  const [diagnostics, setDiagnostics] = useState<any>(null)
  const [widgetStatus, setWidgetStatus] = useState({
    iframe1: "loading",
    iframe2: "loading",
    script: "loading",
    popup: "ready",
  })

  useEffect(() => {
    // Enhanced client-side diagnostics
    const runDiagnostics = () => {
      const newDiagnostics = {
        timestamp: new Date().toISOString(),
        environment: "v0-lite",
        currentURL: window.location.href,
        cspDetected: document.querySelector('meta[http-equiv="Content-Security-Policy"]') ? "Yes" : "No",
        roofleScripts: Array.from(document.querySelectorAll('script[src*="roofle"]')).map((script) => ({
          src: script.src,
          loaded: (script as HTMLScriptElement).readyState || "unknown",
        })),
        roofleIframes: Array.from(document.querySelectorAll('iframe[src*="roofle"]')).map((iframe, index) => ({
          index,
          src: iframe.src,
          accessible: checkIframeAccessibility(iframe as HTMLIFrameElement),
        })),
        embeddedDiv: document.getElementById("roof-quote-pro-embedded")
          ? {
              exists: true,
              innerHTML: document.getElementById("roof-quote-pro-embedded")!.innerHTML.substring(0, 200),
              childrenCount: document.getElementById("roof-quote-pro-embedded")!.children.length,
            }
          : { exists: false },
        roofleGlobals: {
          RoofQuotePro: typeof (window as any).RoofQuotePro !== "undefined" ? "Available" : "Not Found",
          roofleWidget: typeof (window as any).roofleWidget !== "undefined" ? "Available" : "Not Found",
        },
      }
      setDiagnostics(newDiagnostics)
    }

    const checkIframeAccessibility = (iframe: HTMLIFrameElement) => {
      try {
        // Try to access iframe content
        if (iframe.contentDocument || iframe.contentWindow) {
          return "accessible"
        }
        return "blocked"
      } catch (e) {
        return "blocked"
      }
    }

    // Run diagnostics periodically
    const interval = setInterval(runDiagnostics, 3000)
    runDiagnostics()

    return () => clearInterval(interval)
  }, [])

  const openPopupWidget = () => {
    const popup = window.open(
      "https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3",
      "roofle-widget",
      "width=900,height=700,scrollbars=yes,resizable=yes,location=yes,menubar=no,toolbar=no,status=no",
    )

    if (!popup) {
      alert("Popup blocked! Please allow popups for this site and try again.")
      setWidgetStatus((prev) => ({ ...prev, popup: "blocked" }))
    } else {
      setWidgetStatus((prev) => ({ ...prev, popup: "opened" }))
      console.log("Popup opened successfully")
    }
  }

  const openInNewTab = () => {
    window.open("https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3", "_blank")
  }

  return (
    <>
      {/* Remove CSP meta tag and use permissive inline approach */}
      <Script id="remove-csp" strategy="beforeInteractive">
        {`
          // Remove any existing CSP meta tags
          const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
          if (cspMeta) {
            cspMeta.remove();
            console.log('Removed existing CSP meta tag');
          }
        `}
      </Script>

      {/* Load Roofle scripts with enhanced error handling */}
      <Script
        src="https://app.roofle.com/roof-quote-pro-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Roofle widget script loaded successfully")
          setWidgetStatus((prev) => ({ ...prev, script: "loaded" }))
        }}
        onError={(e) => {
          console.error("Roofle widget script failed:", e)
          setWidgetStatus((prev) => ({ ...prev, script: "failed" }))
        }}
      />

      <Script
        src="https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Roofle embedded script loaded successfully")
        }}
        onError={(e) => {
          console.error("Roofle embedded script failed:", e)
        }}
      />

      <div style={{ padding: "20px", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ color: "#2e7d32", marginBottom: "20px" }}>Roofle Widget Enhanced Test</h1>

        {/* Status Dashboard */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "30px",
            border: "1px solid #dee2e6",
          }}
        >
          <h2>Widget Status Dashboard</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor:
                  widgetStatus.iframe1 === "loading"
                    ? "#fff3cd"
                    : widgetStatus.iframe1 === "working"
                      ? "#d4edda"
                      : "#f8d7da",
                borderRadius: "4px",
              }}
            >
              <strong>Direct Iframe:</strong> {widgetStatus.iframe1}
            </div>
            <div
              style={{
                padding: "10px",
                backgroundColor:
                  widgetStatus.iframe2 === "loading"
                    ? "#fff3cd"
                    : widgetStatus.iframe2 === "working"
                      ? "#d4edda"
                      : "#f8d7da",
                borderRadius: "4px",
              }}
            >
              <strong>Alt Iframe:</strong> {widgetStatus.iframe2}
            </div>
            <div
              style={{
                padding: "10px",
                backgroundColor:
                  widgetStatus.script === "loading"
                    ? "#fff3cd"
                    : widgetStatus.script === "loaded"
                      ? "#d4edda"
                      : "#f8d7da",
                borderRadius: "4px",
              }}
            >
              <strong>Script Widget:</strong> {widgetStatus.script}
            </div>
            <div
              style={{
                padding: "10px",
                backgroundColor:
                  widgetStatus.popup === "ready" ? "#d1ecf1" : widgetStatus.popup === "opened" ? "#d4edda" : "#f8d7da",
                borderRadius: "4px",
              }}
            >
              <strong>Popup:</strong> {widgetStatus.popup}
            </div>
          </div>
        </div>

        {/* Method 1: Direct iframe with enhanced error handling */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2e7d32" }}>Method 1: Direct Iframe (Enhanced)</h2>
          <p>Testing direct iframe with no CSP restrictions:</p>
          <div style={{ position: "relative", marginTop: "10px" }}>
            <iframe
              src="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
              width="100%"
              height="600"
              style={{
                border: "2px solid #2e7d32",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
              title="Roofle Quote Widget - Direct Iframe"
              loading="lazy"
              onLoad={() => {
                console.log("Direct iframe loaded successfully")
                setWidgetStatus((prev) => ({ ...prev, iframe1: "working" }))
              }}
              onError={() => {
                console.error("Direct iframe failed to load")
                setWidgetStatus((prev) => ({ ...prev, iframe1: "failed" }))
              }}
            />
          </div>
        </div>

        {/* Method 2: Script-based embed with enhanced monitoring */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2e7d32" }}>Method 2: Script-Based Embed (Enhanced)</h2>
          <p>Testing the original script-based embedding method with monitoring:</p>
          <div
            id="roof-quote-pro-embedded"
            style={{
              width: "100%",
              minHeight: "600px",
              border: "2px solid #2e7d32",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              position: "relative",
            }}
          >
            <div
              style={{
                padding: "20px",
                textAlign: "center",
                color: "#666",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div>Loading Roofle widget via script...</div>
              <div style={{ marginTop: "10px", fontSize: "14px" }}>Script Status: {widgetStatus.script}</div>
            </div>
          </div>
        </div>

        {/* Method 3: Enhanced popup options */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2e7d32" }}>Method 3: Alternative Access Methods</h2>
          <p>Multiple ways to access the Roofle widget:</p>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "15px" }}>
            <button
              onClick={openPopupWidget}
              style={{
                padding: "15px 30px",
                backgroundColor: "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              🚀 Open in Popup Window
            </button>
            <button
              onClick={openInNewTab}
              style={{
                padding: "15px 30px",
                backgroundColor: "#ffc107",
                color: "#2e7d32",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              🔗 Open in New Tab
            </button>
            <a
              href="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "15px 30px",
                backgroundColor: "#6c757d",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              📱 Direct Link
            </a>
          </div>
        </div>

        {/* Method 4: Fallback iframe without sandbox */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2e7d32" }}>Method 4: Unrestricted Iframe</h2>
          <p>Testing iframe without any restrictions:</p>
          <iframe
            src="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
            width="100%"
            height="600"
            style={{
              border: "2px solid #17a2b8",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
            title="Roofle Quote Widget - Unrestricted"
            onLoad={() => {
              console.log("Unrestricted iframe loaded")
              setWidgetStatus((prev) => ({ ...prev, iframe2: "working" }))
            }}
            onError={() => {
              console.error("Unrestricted iframe failed")
              setWidgetStatus((prev) => ({ ...prev, iframe2: "failed" }))
            }}
          />
        </div>

        {/* Enhanced Diagnostic Information */}
        <div
          style={{
            backgroundColor: "#fff3cd",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #ffc107",
            marginTop: "30px",
          }}
        >
          <h2>Enhanced Diagnostic Information</h2>
          {diagnostics ? (
            <pre style={{ fontSize: "12px", overflow: "auto", maxHeight: "400px" }}>
              {JSON.stringify(diagnostics, null, 2)}
            </pre>
          ) : (
            <p>Loading diagnostics...</p>
          )}
        </div>

        {/* Recommendations */}
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #c3e6cb",
            marginTop: "20px",
          }}
        >
          <h2>Recommendations</h2>
          <ul>
            <li>
              <strong>If iframes are blocked:</strong> Use the popup or new tab options
            </li>
            <li>
              <strong>If scripts fail to load:</strong> Check network connectivity and firewall settings
            </li>
            <li>
              <strong>For production:</strong> Consider implementing the popup method as primary option
            </li>
            <li>
              <strong>For best user experience:</strong> Provide multiple access methods as fallbacks
            </li>
          </ul>
        </div>
      </div>

      {/* Enhanced monitoring script */}
      <Script id="enhanced-monitoring" strategy="afterInteractive">
        {`
          console.log('=== ENHANCED ROOFLE MONITORING ===');
          
          // Monitor iframe loading
          const iframes = document.querySelectorAll('iframe[src*="roofle"]');
          iframes.forEach((iframe, index) => {
            iframe.addEventListener('load', () => {
              console.log('✅ Iframe', index + 1, 'loaded successfully');
            });
            
            iframe.addEventListener('error', () => {
              console.error('❌ Iframe', index + 1, 'failed to load');
            });
          });
          
          // Monitor script execution
          let scriptCheckCount = 0;
          const checkScripts = () => {
            scriptCheckCount++;
            console.log('🔍 Script check #' + scriptCheckCount);
            
            if (typeof window.RoofQuotePro !== 'undefined') {
              console.log('✅ RoofQuotePro global found');
            }
            
            const embeddedDiv = document.getElementById('roof-quote-pro-embedded');
            if (embeddedDiv && embeddedDiv.children.length > 1) {
              console.log('✅ Script widget appears to have loaded content');
            }
            
            if (scriptCheckCount < 10) {
              setTimeout(checkScripts, 2000);
            }
          };
          
          setTimeout(checkScripts, 1000);
          
          // Monitor postMessage events
          window.addEventListener('message', (event) => {
            if (event.origin.includes('roofle.com')) {
              console.log('📨 Roofle message received:', event.data);
            }
          });
          
          console.log('✅ Enhanced monitoring active');
        `}
      </Script>
    </>
  )
}
