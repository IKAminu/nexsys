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
          role="status"
          aria-label="Content pending"
        >
          <p
            className="text-[11px] font-mono tracking-widest uppercase mb-4"
            style={{ color: "#1769FF" }}
          >
            {/* TODO: ADD CLIENT-APPROVED PRIVACY POLICY */}
            Legal Content to be created by Nexora systems limited legal team.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
            The privacy policy for Nexora Systems Limited is currently being prepared. This page will contain the full, approved privacy policy once it has been reviewed and authorised. Please check back or contact us at{" "}
            <a
              href="mailto:info@nexorasys.ng"
              className="text-white underline underline-offset-2"
            >
              info@nexorasys.ng
            </a>{" "}
            for any privacy-related enquiries.
          </p>
        </div>
      </Container>
    </section>
  )
}
