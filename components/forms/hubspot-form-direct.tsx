"use client"

export default function HubspotFormDirect() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[480px] mx-auto w-full min-h-[400px]">
      {/* HubSpot Form Container */}
      <div id="hubspot-form-container" className="hubspot-form-container">
        {/* The form will be loaded here by the script */}
      </div>

      {/* Inline script to load HubSpot form */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = '//js.hsforms.net/forms/embed/v2.js';
              script.charset = 'utf-8';
              script.type = 'text/javascript';
              script.defer = true;
              script.onload = function() {
                if (window.hbspt) {
                  window.hbspt.forms.create({
                    region: "na1",
                    portalId: "46287623",
                    formId: "59626411-1555-48e1-9b0c-393446963b03",
                    target: "#hubspot-form-container"
                  });
                }
              };
              document.head.appendChild(script);
            })();
          `,
        }}
      />
    </div>
  )
}

declare global {
  interface Window {
    hbspt: any
  }
}
