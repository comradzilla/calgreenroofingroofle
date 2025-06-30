"use client"

export default function FastQuoteTestClient() {
  return (
    <>
      <head>
        {/* Page-specific CSP that's more permissive for Roofle */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.roofle.com https://js.hsforms.net; frame-src 'self' https://*.roofle.com; connect-src 'self' https://*.roofle.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com;"
        />
      </head>

      <div style={{ padding: "20px", minHeight: "100vh" }}>
        <h1>Roofle Widget Test Page</h1>
        <p>Testing the Roofle widgets with wildcard CSP permissions.</p>

        {/* Method 1: Direct iframe embed */}
        <div style={{ marginBottom: "40px" }}>
          <h2>Method 1: Direct Iframe</h2>
          <iframe
            src="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
            width="100%"
            height="600"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            title="Roofle Quote Widget"
            loading="lazy"
          ></iframe>
        </div>

        {/* Method 2: Script-based embed */}
        <div style={{ marginBottom: "40px" }}>
          <h2>Method 2: Script Embed</h2>
          <div
            id="roof-quote-pro-embedded"
            style={{
              width: "100%",
              minHeight: "600px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Loading Roofle widget...</div>
          </div>
        </div>

        {/* Method 3: Popup/Modal approach */}
        <div style={{ marginBottom: "40px" }}>
          <h2>Method 3: Popup Window</h2>
          <button
            onClick={() => {
              window.open(
                "https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3",
                "roofle-widget",
                "width=800,height=600,scrollbars=yes,resizable=yes",
              )
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Open Roofle Widget in Popup
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Testing multiple approaches:</strong>
          </p>
          <ul>
            <li>Direct iframe embed (should work if CSP allows)</li>
            <li>Script-based embed (original method)</li>
            <li>Popup window (bypasses CSP entirely)</li>
          </ul>
        </div>
      </div>

      {/* Original scripts */}
      <script src="https://app.roofle.com/roof-quote-pro-widget.js?id=TyenXTFKs3GstadLv13T3" async defer></script>
      <script
        src="https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=TyenXTFKs3GstadLv13T3"
        async
        defer
      ></script>

      {/* Debug script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('Test page loaded with multiple methods');
            
            // Check for CSP violations
            document.addEventListener('securitypolicyviolation', (e) => {
              console.error('CSP Violation:', e.violatedDirective, e.blockedURI);
            });
            
            setTimeout(() => {
              const embeddedDiv = document.getElementById('roof-quote-pro-embedded');
              console.log('Embedded div:', embeddedDiv);
              console.log('Embedded div innerHTML:', embeddedDiv ? embeddedDiv.innerHTML : 'not found');
              console.log('Embedded div children count:', embeddedDiv ? embeddedDiv.children.length : 'not found');
              
              // Check iframe
              const iframe = document.querySelector('iframe[src*="roofle"]');
              console.log('Direct iframe found:', iframe ? 'yes' : 'no');
              
              // Check if RoofQuotePro global is available
              if (typeof window.RoofQuotePro !== 'undefined') {
                console.log('RoofQuotePro global found:', window.RoofQuotePro);
              } else {
                console.log('RoofQuotePro global not found');
              }
            }, 5000);
          `,
        }}
      />
    </>
  )
}
