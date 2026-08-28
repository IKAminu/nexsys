import Container from "@/components/ui/Container"

export default function Privacy() {
  return (
    <section className="pt-20 pb-32 md:pt-28">
      <Container narrow>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1769FF" }}>
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          <div
            className="p-8 rounded-[4px] border"
            style={{ background: "#0D1B2A", borderColor: "#1E3048" }}
          >
            <div className="space-y-8">
              <div>
                <p
                  className="text-[11px] font-mono tracking-widest uppercase mb-2"
                  style={{ color: "#1769FF" }}
                >
                  Effective Date: To be updated upon website launch
                </p>
                <p className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "#8BA3BC" }}>
                  Last Updated: 28th August, 2026
                </p>
              </div>
          
              <p className="text-sm leading-relaxed text-white">
                Nexora Systems Limited (“Nexora”, “we”, “our”, or “us”) respects your
                privacy and is committed to protecting your personal information.
              </p>
          
              <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                This Privacy Policy explains how we collect, use and protect information
                when you visit or interact with the Nexora Systems website (“Website”).
              </p>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  1. Information We Collect
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  We may collect information that you voluntarily provide to us,
                  including your name, email address, telephone number, organisation and
                  any information you include when contacting or communicating with us.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  We may also collect limited technical information automatically when
                  you use the Website, such as your IP address, browser type, device
                  information and general Website usage information.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  2. How We Use Your Information
                </h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#8BA3BC" }}>
                  We may use information collected to:
                </p>
                <ul
                  className="list-disc pl-5 space-y-2 text-sm leading-relaxed"
                  style={{ color: "#8BA3BC" }}
                >
                  <li>Respond to enquiries and requests;</li>
                  <li>Communicate with you regarding Nexora and its activities;</li>
                  <li>Improve our Website, services and user experience;</li>
                  <li>Maintain the security and functionality of the Website; and</li>
                  <li>Comply with applicable legal and regulatory requirements.</li>
                </ul>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  We will only use personal information for legitimate and appropriate
                  purposes and in accordance with applicable data-protection laws.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  3. Sharing of Information
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  Nexora does not sell your personal information.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  Where necessary, we may share limited information with trusted service
                  providers that support our Website, communications, technology,
                  security or other legitimate business operations. We may also disclose
                  information where required by law or a lawful regulatory request.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  4. Data Security and Retention
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  We take reasonable technical and organisational measures to protect
                  personal information against unauthorised access, loss, misuse or
                  disclosure.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  We retain personal information only for as long as reasonably
                  necessary for the purpose for which it was collected or as required by
                  applicable law.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  5. Cookies
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  The Website may use cookies and similar technologies to support
                  essential functionality, improve performance and understand how
                  visitors use the Website.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  Where required by law, appropriate consent and cookie-management
                  mechanisms will be provided.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  6. Your Rights
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  Subject to applicable law, you may have rights to access, correct,
                  delete or object to the processing of your personal information, as
                  well as other rights provided under applicable data-protection
                  legislation.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  To exercise a privacy right or raise a concern, please contact us
                  using the details below.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  7. Third-Party Websites
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  The Website may contain links to third-party websites. Nexora is not
                  responsible for the privacy practices or content of third-party
                  websites. We encourage you to review their privacy policies before
                  providing personal information.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  8. Changes to This Policy
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  We may update this Privacy Policy from time to time. Any changes will
                  be published on this page with an updated “Last Updated” date.
                </p>
              </section>
          
              <section>
                <h2 className="text-base font-semibold text-white mb-3">
                  9. Contact Us
                </h2>
                <div className="space-y-2 text-sm" style={{ color: "#8BA3BC" }}>
                  <p>
                    <span className="text-white font-medium">Nexora Systems Limited</span>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@nexorasys.ng"
                      className="text-white underline underline-offset-2"
                    >
                      info@nexorasys.ng
                    </a>
                  </p>
                  <p>Address: 176 Azikiwe Road, Aba, Abia State, Nigeria</p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://www.nexorasys.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline underline-offset-2"
                    >
                      www.nexorasys.ng
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
      </Container>
    </section>
  )
}
