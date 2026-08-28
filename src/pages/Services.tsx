import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { serviceAreas, processSteps, outcomes } from "@/data/services"

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-24 md:pt-28 md:pb-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="services-hero-heading"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1769FF" }}>
              Services
            </p>
            <h1
              id="services-hero-heading"
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.06] mb-6"
            >
              Solutions & Capabilities.
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mb-8" style={{ color: "#8BA3BC" }}>
              Nexora builds and connects solutions that help businesses operate better across our domains, reach more customers, move products efficiently and develop the skills needed to grow.
            </p>
            <Button href="/contact" variant="primary" size="md" arrow>
              Discuss a Partnership
            </Button>
          </div>
        </Container>
      </section>

      {/* Four core areas */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="capabilities-heading"
      >
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
              Core Areas
            </p>
            <h2
              id="capabilities-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Four capability domains.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                className="p-7 rounded-[4px] border"
                style={{ background: "#0D1B2A", borderColor: area.ventureColor + "30" }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div
                      className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                      style={{ color: area.ventureColor }}
                    >
                      {area.venture}
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.name}</h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-[3px] flex-shrink-0 flex items-center justify-center font-bold text-sm"
                    style={{
                      background: area.ventureColor + "20",
                      color: area.ventureColor,
                      border: `1px solid ${area.ventureColor}40`,
                    }}
                  >
                    {area.name[0]}
                  </div>
                </div>

                <ul className="space-y-2" aria-label={`${area.name} capabilities`}>
                  {area.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: area.ventureColor }}
                        aria-hidden="true"
                      />
                      <span className="text-sm" style={{ color: "#8BA3BC" }}>
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="outcomes-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
                What Changes
              </p>
              <h2
                id="outcomes-heading"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                What the ecosystem enables.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {outcomes.map((o, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-[4px] border"
                    style={{ background: "#0D1B2A", borderColor: "#1E3048" }}
                  >
                    <p className="text-lg font-bold text-white">
                      {o.verb}
                    </p>
                    {o.adverb && (
                      <p className="text-base font-semibold" style={{ color: "#1769FF" }}>
                        {o.adverb}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="process-heading"
      >
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
              How We Work
            </p>
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Our approach.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex flex-col sm:items-center text-left sm:text-center p-5"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-[38px] left-[calc(50%+16px)] right-0 h-px"
                    style={{ background: "#1E3048" }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-4 flex-shrink-0"
                  style={{
                    background: i === processSteps.length - 1
                      ? "rgba(23, 105, 255, 0.2)"
                      : "#162233",
                    color: i === processSteps.length - 1 ? "#1769FF" : "#8BA3BC",
                    border: `1px solid ${i === processSteps.length - 1 ? "#1769FF60" : "#1E3048"}`,
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8BA3BC" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" aria-labelledby="services-cta-heading">
        <Container>
          <div className="max-w-xl">
            <h2
              id="services-cta-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Have a business challenge worth solving?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#8BA3BC" }}>
              We are building the ecosystem. We are open to conversations about how Nexora can support your business objectives.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
