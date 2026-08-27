import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"

const areas = [
  {
    name: "Nexora Systems",
    description: "Digital solutions, software, systems and technology infrastructure.",
    accent: "#1769FF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 7l2 2-2 2M11 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Nexora Marketplace",
    description: "Digital marketplaces and digital commerce platforms.",
    accent: "#A855F7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 5h14l-1.5 7H4.5L3 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="7" cy="16" r="1.5" fill="currentColor"/>
        <circle cx="13" cy="16" r="1.5" fill="currentColor"/>
        <path d="M3 5L2 2H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Enyigo Logistics",
    description: "Technology-enabled movement, delivery and fulfilment.",
    accent: "#F97316",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="8" width="11" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 10h3l2 3v2h-5V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="5.5" cy="16.5" r="1.5" fill="currentColor"/>
        <circle cx="14.5" cy="16.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Nexora SkillNet",
    description: "Digital learning, professional development and talent development.",
    accent: "#22C55E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3L2 7l8 4 8-4-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 7v5c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 7v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function WhatNexoraDoes() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid #1E3048" }}
      aria-labelledby="what-nexora-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What We Build"
              heading="Building connected technology-driven businesses."
              subheading="Nexora Systems Limited is developing a portfolio of complementary ventures, each addressing a different dimension of how businesses operate and grow in a digital economy."
              id="what-nexora-heading"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="p-6 rounded-[4px] border group transition-all duration-200 hover:border-opacity-60"
                  style={{
                    background: "#0D1B2A",
                    borderColor: "#1E3048",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = area.accent + "60"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1E3048"
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-[3px] mb-4"
                    style={{ background: area.accent + "18", color: area.accent }}
                  >
                    {area.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {area.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8BA3BC" }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
