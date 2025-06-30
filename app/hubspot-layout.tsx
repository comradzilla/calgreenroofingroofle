import type React from "react"
export default function HubspotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
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
    </>
  )
}
