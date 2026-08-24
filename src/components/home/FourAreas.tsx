import Container from "@/components/ui/Container"
import { ventures } from "@/data/ventures"

const areas = [
  {
    name: "Technology",
    description: "Digital solutions and technology infrastructure for businesses.",
    venture: ventures[0],
  },
  {
    name: "Skills",
    description: "Digital learning, skills development and professional talent programmes.",
    venture: ventures[1],
  },
  {
    name: "Commerce",
    description: "Digital marketplace and commerce platforms connecting buyers and sellers.",
    venture: ventures[2],
  },
  {
    name: "Logistics",
    description: "Technology-enabled delivery, movement and fulfilment of goods.",
    venture: ventures[3],
  },
]

export default function FourAreas() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid #1E3048" }}
      aria-labelledby="four-areas-heading"
    >
      <Container>
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
            Four Areas
          </p>
          <h2
            id="four-areas-heading"
            className="text-3xl md:text-4xl font-bold text-white max-w-lg"
          >
            What the ecosystem is building.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {areas.map((area) => {
            const v = area.venture
            return (
              <div
                key={area.name}
                className="relative p-6 rounded-[4px] border flex flex-col group transition-all duration-200"
                style={{
                  background: "#0D1B2A",
                  borderColor: "#1E3048",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = v.accentColor + "60"
                  e.currentTarget.style.background = v.accentColorDim
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1E3048"
                  e.currentTarget.style.background = "#0D1B2A"
                }}
              >
                {/* Accent line at top */}
                <div
                  className="absolute top-0 left-6 right-6 h-[1px]"
                  style={{ background: v.accentColor + "60" }}
                  aria-hidden="true"
                />

                <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#8BA3BC" }}>
                  {area.description}
                </p>

                <div
                  className="flex items-center gap-2 pt-4"
                  style={{ borderTop: "1px solid #1E3048" }}
                >
                  <div
                    className="w-4 h-4 rounded-[2px] flex items-center justify-center text-[8px] font-bold"
                    style={{ background: v.accentColor + "25", color: v.accentColor }}
                  >
                    {v.letter[0]}
                  </div>
                  <span className="text-[10px] font-medium" style={{ color: v.accentColor }}>
                    {v.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
