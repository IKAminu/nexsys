import Container from "@/components/ui/Container"

const steps = [
  { verb: "Operate better.", description: "Manage business operations through reliable technology and digital systems." },
  { verb: "Develop better.", description: "Build capable people through structured digital skills and professional learning." },
  { verb: "Reach customers better.", description: "Connect products and services to the right buyers through digital commerce." },
  { verb: "Deliver better.", description: "Move goods and fulfil orders reliably through technology-enabled logistics." },
  { verb: "Grow.", description: "The ecosystem supports growth across every dimension of a business." },
]

export default function EcosystemPrinciples() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid #1E3048" }}
      aria-labelledby="principles-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
              Why It Connects
            </p>
            <h2
              id="principles-heading"
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Complementary capabilities. Not isolated platforms.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
              Nexora is developing ventures that work together, each one addressing a different dimension of how businesses operate and grow.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="space-y-0" aria-label="Ecosystem progression">
              {steps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-px flex-1 transition-colors"
                      style={{
                        background: i === 0 ? "transparent" : "#1E3048",
                        minHeight: 24,
                      }}
                    />
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 my-2"
                      style={{
                        background: i === steps.length - 1 ? "#1769FF" : "#1E3048",
                        boxShadow: i === steps.length - 1 ? "0 0 8px #1769FF60" : "none",
                      }}
                    />
                    <div
                      className="w-px flex-1"
                      style={{
                        background: i === steps.length - 1 ? "transparent" : "#1E3048",
                        minHeight: 24,
                      }}
                    />
                  </div>
                  <div className="pb-8 pt-1">
                    <p
                      className="text-lg font-semibold text-white leading-snug"
                    >
                      {step.verb}
                    </p>
                    <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "#8BA3BC" }}>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
