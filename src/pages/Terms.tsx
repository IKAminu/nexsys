import Container from "@/components/ui/Container"

export default function Terms() {
  return (
    <section className="pt-20 pb-32 md:pt-28">
      <Container narrow>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1769FF" }}>
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Use</h1>

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
            {/* TODO: ADD CLIENT-APPROVED TERMS OF USE */}
            Legal Content to be created by nexora systems limited legal team
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
            The terms of use for Nexora Systems Limited are currently being prepared. This page will contain the full, approved terms of use once they have been reviewed and authorised. Please contact us at{" "}
            <a
              href="mailto:info@nexorasys.ng"
              className="text-white underline underline-offset-2"
            >
              info@nexorasys.ng
            </a>{" "}
            for any questions regarding use of this site.
          </p>
        </div>
      </Container>
    </section>
  )
}
