/*
 * Nexora Systems Limited
 * Website designed and developed by Web4 Digital Solutions
 * Lead Developer: IK Aminu
 * https://web4.company.site/
 */

import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import VentureMark from "@/components/logos/VentureMark"
import { ventures, parentCompany } from "@/data/ventures"
import nexoraLogo from "@/assets/nexora-logo.svg"
import ceopic from "@/assets/ceo-pic.jpeg"

const principles = [
  {
    name: "Practical",
    description: "We build for real problems in real contexts, not theoretical solutions looking for problems.",
  },
  {
    name: "Scalable",
    description: "Our ventures are designed to grow; in users, in geography, in capability; without rebuilding from scratch.",
  },
  {
    name: "Accessible",
    description: "Technology is most powerful when more people can use it. We design for accessibility, not just technical capability.",
  },
  {
    name: "Connected",
    description: "The value of the ecosystem comes from how the ventures work together, not in isolation.",
  },
  {
    name: "Technology-driven",
    description: "We use technology as the foundation for every venture, not just as a feature, but as infrastructure.",
  },
  {
    name: "Human-centred",
    description: "We build for people; the businesses that use our systems and the individuals who depend on them.",
  },
]

const ecosystemFlow = [
  { venture: ventures[0], phrase: "Manages its operations through" },
  { venture: ventures[1], phrase: "Develops its people through" },
  { venture: ventures[2], phrase: "Reaches customers through" },
  { venture: ventures[3], phrase: "Moves products through" },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-24 md:pt-28 md:pb-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="about-hero-heading"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1769FF" }}>
              About Nexora
            </p>
            <h1
              id="about-hero-heading"
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.06] mb-6"
            >
              A technology group building the infrastructure for connected business.
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#8BA3BC" }}>
              Nexora Systems Limited builds technology solutions that make business simpler, smarter and more connected.
              <br />
              We operate across technology, commerce, logistics and digital skills, creating practical solutions to everyday business challenges.
              <br />
              Our businesses are designed to complement one another, creating a connected ecosystem of products, services and capabilities.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission + Vision */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="mission-vision-heading"
      >
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-10" style={{ color: "#1769FF" }}>
            Why We Exist
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 id="mission-vision-heading" className="text-2xl font-bold text-white mb-4">
                Vision
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#8BA3BC" }}>
                A future where technology-driven businesses are the foundation of African economic growth, where companies of every size can access the systems, skills, markets and logistics they need to compete and grow.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
              <p className="text-base leading-relaxed" style={{ color: "#8BA3BC" }}>
                To build a connected ecosystem of technology-driven ventures that enable businesses to operate better, develop their people, reach customers and move products, through practical, scalable and accessible solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Company structure */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="structure-heading"
      >
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
              Our Ecosystem
            </p>
            <h2
              id="structure-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              One parent company. Four ventures.
            </h2>
          </div>

          {/* Parent company */}
          <div
            className="p-6 md:p-8 rounded-[4px] border mb-8"
            style={{ background: "rgba(23, 105, 255, 0.06)", borderColor: "#1769FF60" }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div
                className="w-12 h-12 rounded-[4px] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(23, 105, 255, 0.15)", border: "1px solid #1769FF40" }}
              >
               <img
                src={nexoraLogo}
                alt="Nexora Systems Limited logo"
                className="w-12 h-12 object-contain"
                  />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{parentCompany.name}</h3>
                <p className="text-sm mt-0.5" style={{ color: "#8BA3BC" }}>
                  {parentCompany.tagline}
                </p>
                <p className="text-sm mt-2 max-w-xl" style={{ color: "#8BA3BC" }}>
                  {parentCompany.description} The parent company provides strategic direction and coordination across all four ventures.
                </p>
              </div>
            </div>
          </div>

          {/* Branch indicator */}
          <div className="flex justify-center mb-4" aria-hidden="true">
            <div className="flex flex-col items-center">
              <div className="w-px h-6" style={{ background: "#1E3048" }} />
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M6 8L0 0h12L6 8z" fill="#1E3048"/>
              </svg>
            </div>
          </div>

          {/* Ventures grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {ventures.map((v) => (
              <div
                key={v.id}
                className="p-5 rounded-[4px] border flex flex-col gap-3"
                style={{ background: "#0D1B2A", borderColor: v.accentColor + "40" }}
              >
                <VentureMark venture={v} size={36} showName />
                <p className="text-xs leading-relaxed" style={{ color: "#8BA3BC" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How the ecosystem connects */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="connection-heading"
      >
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
              How It Connects
            </p>
            <h2
              id="connection-heading"
              className="text-3xl md:text-4xl font-bold text-white max-w-xl"
            >
              Imagine a business using the full ecosystem.
            </h2>
          </div>

          <div className="space-y-3 max-w-2xl">
            {ecosystemFlow.map(({ venture, phrase }, i) => (
              <div
                key={venture.id}
                className="flex items-start gap-4 p-5 rounded-[4px] border"
                style={{ background: "#0D1B2A", borderColor: "#1E3048" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ background: venture.accentColor + "25", color: venture.accentColor }}
                >
                  {i + 1}
                </div>
                <div>
                  <span className="text-sm font-medium" style={{ color: "#8BA3BC" }}>
                    {phrase}{" "}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: venture.accentColor }}>
                    {venture.name}
                  </span>
                  <span className="text-sm" style={{ color: "#8BA3BC" }}>.</span>
                  <p className="text-xs mt-1" style={{ color: "#8BA3BC" }}>
                    {venture.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="principles-heading"
      >
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
              How We Work
            </p>
            <h2
              id="principles-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Our principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div
                key={p.name}
                className="p-6 rounded-[4px] border"
                style={{ background: "#0D1B2A", borderColor: "#1E3048" }}
              >
                <div
                  className="text-xs font-mono mb-3"
                  style={{ color: "#1769FF" }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CEO Placeholder */}
      <section
        className="py-24 md:py-32"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="ceo-heading"
      >
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-8" style={{ color: "#1769FF" }}>
            Leadership
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* CEO photo */}
            <div className="lg:col-span-3">
              <div
                className="aspect-[3/4] rounded-[4px] overflow-hidden border"
                style={{ background: "#0D1B2A", borderColor: "#1E3048" }}
              >
                <img
                  src={ceopic}
                  alt="Prince (Dr.) Tochukwu Christian Nnaji, Chief Executive Officer of Nexora Systems Limited"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-9">
              <h2
                id="ceo-heading"
                className="text-2xl font-bold text-white mb-1"
              >
                Prince (Dr.) Tochukwu Christian Nnaji
              </h2>
            
              <p className="text-sm mb-6" style={{ color: "#1769FF" }}>
                Chief Executive Officer, Nexora Systems Limited
              </p>
            
              <div
                className="p-5 rounded-[4px] border"
                style={{ background: "#0D1B2A", borderColor: "#1E3048" }}
              >
                <p
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: "#1769FF" }}
                >
                  Experience. Innovation. Impact.
                </p>
            
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-white">
                    With over fourteen years of professional experience, I have worked
                    across public institutions and technology-focused environments, with a
                    strong interest in digital innovation, institutional development,
                    strategy, and performance improvement.
                  </p>
            
                  <p className="text-sm leading-relaxed text-white">
                    My professional experience includes work with several federal
                    government agencies, where I have contributed to initiatives spanning
                    digital innovation, skills development, ICT regulation, strategic
                    planning, monitoring and evaluation, and institutional performance.
                  </p>
            
                  <p className="text-sm leading-relaxed text-white">
                    I am passionate about using technology, sound strategy, and effective
                    systems to solve practical problems, strengthen organisations, and
                    create measurable impact.
                  </p>
            
                  <p className="text-sm leading-relaxed text-white">
                    My approach is grounded in integrity, competence, collaboration,
                    accountability, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" aria-labelledby="about-cta-heading">
        <Container>
          <div className="max-w-xl">
            <h2
              id="about-cta-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Partner With Nexora.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#8BA3BC" }}>
              We are building the ecosystem. We are open to conversations about partnership, investment and collaboration.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
