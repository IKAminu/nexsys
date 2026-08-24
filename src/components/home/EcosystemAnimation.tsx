import { useRef, useState, useEffect, useCallback, type ReactElement } from "react"
import Container from "@/components/ui/Container"
import VentureMark from "@/components/logos/VentureMark"
import { ventures, parentCompany } from "@/data/ventures"

/* Venture-specific abstract media illustrations */
function VentureMediaFrame({ ventureId }: { ventureId: string }) {
  const configs: Record<string, { bg: string; accent: string; label: string; icon: ReactElement }> = {
    "nexora-systems": {
      bg: "rgba(23, 105, 255, 0.06)",
      accent: "#1769FF",
      label: "Technology & Digital Solutions",
      icon: (
        <g>
          {/* Abstract digital workflow */}
          {[0,1,2,3].map(i => (
            <rect key={i} x={160 + i * 80} y={160} width={60} height={40} rx="3"
              fill="none" stroke="#1769FF" strokeWidth="1" opacity="0.4"/>
          ))}
          {[0,1,2].map(i => (
            <line key={i} x1={220 + i*80} y1={180} x2={240 + i*80} y2={180}
              stroke="#1769FF" strokeWidth="1" opacity="0.5"/>
          ))}
          {/* Connection lines down */}
          {[0,1,2,3].map(i => (
            <line key={`d${i}`} x1={190 + i*80} y1={200} x2={190 + i*80} y2={240}
              stroke="#1769FF" strokeWidth="1" opacity="0.3"/>
          ))}
          <rect x="130" y="240" width="440" height="120" rx="4"
            fill="rgba(23,105,255,0.08)" stroke="#1769FF" strokeWidth="1" opacity="0.5"/>
          {/* Code lines */}
          {[0,1,2,3,4].map(i => (
            <rect key={`code${i}`} x={150} y={258 + i * 18} width={100 + (i%3)*60} height="6"
              rx="3" fill="#1769FF" opacity={0.2 + (i%3)*0.1}/>
          ))}
          <rect x="280" y="258" width="60" height="6" rx="3" fill="#21D4FD" opacity="0.4"/>
          <rect x="280" y="276" width="40" height="6" rx="3" fill="#21D4FD" opacity="0.3"/>
        </g>
      ),
    },
    "nexora-skillnet": {
      bg: "rgba(34, 197, 94, 0.06)",
      accent: "#22C55E",
      label: "Digital Skills & Talent",
      icon: (
        <g>
          {/* People nodes connected to learning hub */}
          {[0,1,2,3,4].map(i => {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2
            const x = 350 + Math.cos(angle) * 130
            const y = 250 + Math.sin(angle) * 120
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="22" fill="rgba(34,197,94,0.1)"
                  stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
                <circle cx={x} cy={y - 6} r="8" fill="#22C55E" opacity="0.35"/>
                <path d={`M${x-10} ${y+12} Q${x} ${y+4} ${x+10} ${y+12}`}
                  fill="#22C55E" opacity="0.35"/>
                <line x1={x} y1={y} x2="350" y2="250"
                  stroke="#22C55E" strokeWidth="0.75" opacity="0.3"/>
              </g>
            )
          })}
          {/* Central hub */}
          <circle cx="350" cy="250" r="32" fill="rgba(34,197,94,0.12)"
            stroke="#22C55E" strokeWidth="1.5" opacity="0.6"/>
          <text x="350" y="255" textAnchor="middle" fill="#22C55E"
            fontSize="11" fontWeight="600" fontFamily="Inter" opacity="0.8">LEARN</text>
        </g>
      ),
    },
    "nexora-marketplace": {
      bg: "rgba(168, 85, 247, 0.06)",
      accent: "#A855F7",
      label: "Digital Commerce",
      icon: (
        <g>
          {/* Product grid */}
          {[0,1,2,3,4,5].map(i => {
            const col = i % 3
            const row = Math.floor(i / 3)
            return (
              <rect key={i} x={160 + col * 110} y={150 + row * 100} width="80" height="70"
                rx="3" fill="rgba(168,85,247,0.1)" stroke="#A855F7"
                strokeWidth="1" opacity="0.5"/>
            )
          })}
          {/* Connection lines to buyer */}
          <circle cx="490" cy="250" r="30" fill="rgba(168,85,247,0.12)"
            stroke="#A855F7" strokeWidth="1.5" opacity="0.6"/>
          {[0,1,2].map(i => (
            <line key={i} x1="320" y1={170 + i*100} x2="462" y2="250"
              stroke="#A855F7" strokeWidth="0.75" opacity="0.3" strokeDasharray="4 3"/>
          ))}
          <text x="490" y="254" textAnchor="middle" fill="#A855F7"
            fontSize="9" fontWeight="600" fontFamily="Inter" opacity="0.7">BUYER</text>
        </g>
      ),
    },
    "enyigo-logistics": {
      bg: "rgba(249, 115, 22, 0.06)",
      accent: "#F97316",
      label: "Logistics & Fulfilment",
      icon: (
        <g>
          {/* Route network */}
          <circle cx="160" cy="200" r="16" fill="rgba(249,115,22,0.15)"
            stroke="#F97316" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="350" cy="160" r="16" fill="rgba(249,115,22,0.15)"
            stroke="#F97316" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="530" cy="220" r="16" fill="rgba(249,115,22,0.15)"
            stroke="#F97316" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="250" cy="330" r="16" fill="rgba(249,115,22,0.15)"
            stroke="#F97316" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="440" cy="340" r="16" fill="rgba(249,115,22,0.15)"
            stroke="#F97316" strokeWidth="1.5" opacity="0.6"/>
          {/* Routes */}
          {[[160,200,350,160],[350,160,530,220],[160,200,250,330],
            [350,160,250,330],[350,160,440,340],[530,220,440,340],
            [250,330,440,340]].map(([x1,y1,x2,y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#F97316" strokeWidth="1" opacity="0.3"
              strokeDasharray="6 3"/>
          ))}
          {/* Truck icon on one route */}
          <rect x="320" y="138" width="30" height="18" rx="2"
            fill="#F97316" opacity="0.5"/>
          <rect x="350" y="143" width="14" height="13" rx="1"
            fill="#F97316" opacity="0.4"/>
          <circle cx="326" cy="158" r="4" fill="#F97316" opacity="0.6"/>
          <circle cx="356" cy="158" r="4" fill="#F97316" opacity="0.6"/>
        </g>
      ),
    },
  }

  const cfg = configs[ventureId] || configs["nexora-systems"]

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center rounded-[4px] overflow-hidden"
      style={{ background: cfg.bg, border: `1px solid ${cfg.accent}30` }}
    >
      {/* Development label */}
      <div
        className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded-[2px]"
        style={{
          color: cfg.accent,
          background: cfg.accent + "18",
          border: `1px solid ${cfg.accent}30`,
        }}
      >
        ECOSYSTEM ANIMATION PLACEHOLDER
      </div>

      <svg viewBox="0 0 700 420" className="w-full h-full" aria-hidden="true">
        {cfg.icon}
        {/* TODO: INSERT FINAL ECOSYSTEM ANIMATION — Replace this SVG with the WebM/MP4 animation asset */}
      </svg>

      <p
        className="absolute bottom-4 text-xs font-medium"
        style={{ color: cfg.accent + "AA" }}
      >
        {cfg.label}
      </p>
    </div>
  )
}

type Phase = "intro" | "hierarchy" | "ventures" | "closing"

function getPhaseAndVenture(progress: number): { phase: Phase; activeVenture: number } {
  if (progress < 0.12) return { phase: "intro", activeVenture: -1 }
  if (progress < 0.28) return { phase: "hierarchy", activeVenture: -1 }
  if (progress < 0.88) {
    const ventureProgress = (progress - 0.28) / 0.6
    const activeVenture = Math.min(3, Math.floor(ventureProgress * 4))
    return { phase: "ventures", activeVenture }
  }
  return { phase: "closing", activeVenture: -1 }
}

/* Parent company card shown in hierarchy phase */
function ParentCard() {
  return (
    <div
      className="px-8 py-5 rounded-[4px] border text-center"
      style={{
        background: "rgba(23, 105, 255, 0.08)",
        borderColor: "#1769FF",
        maxWidth: 340,
      }}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M3 3v26h6.5V11.5L22.5 29H29V3h-6.5v17.5L9 3H3z" fill="#1769FF"/>
          <line x1="9.5" y1="3" x2="22.5" y2="29" stroke="#21D4FD" strokeWidth="1.5" opacity="0.7"/>
        </svg>
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-white">
          Nexora Systems Limited
        </span>
      </div>
      <p className="text-xs" style={{ color: "#8BA3BC" }}>Parent Company / Technology Group</p>
    </div>
  )
}

/* Branch line SVG for hierarchy view */
function BranchDiagram() {
  return (
    <svg viewBox="0 0 600 80" className="w-full max-w-xl mx-auto" aria-hidden="true">
      <line x1="300" y1="0" x2="300" y2="30" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="80" y1="30" x2="520" y2="30" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.5"/>
      {[80, 227, 373, 520].map((x, i) => (
        <line key={i} x1={x} y1="30" x2={x} y2="60" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.4"/>
      ))}
    </svg>
  )
}

export default function EcosystemAnimation() {
  const outerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const handleScroll = useCallback(() => {
    if (!outerRef.current) return
    const rect = outerRef.current.getBoundingClientRect()
    const totalScrollable = outerRef.current.offsetHeight - window.innerHeight
    const scrolled = -rect.top
    setScrollProgress(Math.max(0, Math.min(1, scrolled / totalScrollable)))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const { phase, activeVenture } = prefersReducedMotion
    ? { phase: "ventures" as Phase, activeVenture: 0 }
    : getPhaseAndVenture(scrollProgress)

  const showIntroText = phase === "intro"
  const showHierarchy = phase === "hierarchy"
  const showVentures = phase === "ventures"
  const showClosing = phase === "closing"

  /* Reduced motion: simple static layout */
  if (prefersReducedMotion) {
    return (
      <section id="ecosystem" className="py-24 md:py-32" style={{ borderTop: "1px solid #1E3048" }}>
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>
            Our Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            One parent company. Four connected ventures.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ventures.map((v) => (
              <div
                key={v.id}
                className="p-6 rounded-[4px] border"
                style={{ background: "#0D1B2A", borderColor: v.accentColor + "40" }}
              >
                <VentureMark venture={v} size={40} showName className="mb-3" />
                <p className="text-xs leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                  <span style={{ color: v.accentColor }}>{v.focusPhrase}</span>{" "}
                  {v.name}.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section
      id="ecosystem"
      ref={outerRef}
      style={{ height: "500vh", position: "relative" }}
      aria-label="Ecosystem overview"
    >
      {/* Sticky frame */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#07111F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderTop: "1px solid #1E3048",
          }}
          aria-hidden="true"
        />

        {/* ──── PHASE: INTRO ──── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700"
          style={{
            opacity: showIntroText ? 1 : 0,
            transform: showIntroText ? "translateY(0)" : "translateY(-20px)",
            pointerEvents: showIntroText ? "auto" : "none",
          }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#1769FF" }}>
            Our Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-2xl">
            Imagine a business...
          </h2>
          <p className="mt-4 text-base max-w-md" style={{ color: "#8BA3BC" }}>
            One that operates, learns, sells and delivers — through a connected ecosystem.
          </p>
        </div>

        {/* ──── PHASE: HIERARCHY ──── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700"
          style={{
            opacity: showHierarchy ? 1 : 0,
            transform: showHierarchy ? "translateY(0)" : "translateY(20px)",
            pointerEvents: showHierarchy ? "auto" : "none",
          }}
        >
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
            <ParentCard />
            <BranchDiagram />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {ventures.map((v, i) => (
                <div
                  key={v.id}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-[4px] border text-center transition-all duration-500"
                  style={{
                    background: v.accentColorDim,
                    borderColor: v.accentColor + "50",
                    opacity: showHierarchy ? 1 : 0,
                    transform: showHierarchy ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <VentureMark venture={v} size={32} />
                  <p className="text-[11px] font-semibold text-white leading-tight">{v.name}</p>
                  <p className="text-[10px]" style={{ color: v.accentColor }}>{v.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ──── PHASE: VENTURES ──── */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            opacity: showVentures ? 1 : 0,
            pointerEvents: showVentures ? "auto" : "none",
          }}
        >
          <div className="h-full flex flex-col md:flex-row items-stretch">

            {/* Left: venture card stack */}
            <div
              className="flex flex-col justify-center gap-2 px-6 md:pl-12 xl:pl-20 py-8 md:py-0 md:w-[360px] xl:w-[420px] flex-shrink-0"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: "#1769FF" }}>
                Nexora Systems Limited manages its business through
              </p>
              {ventures.map((venture, i) => {
                const isActive = i === activeVenture
                return (
                  <button
                    key={venture.id}
                    className="text-left rounded-[4px] border transition-all duration-500 eco-card cursor-pointer"
                    style={{
                      background: isActive ? venture.accentColorDim : "rgba(13, 27, 42, 0.5)",
                      borderColor: isActive ? venture.accentColor + "80" : "#1E3048",
                      padding: isActive ? "20px 20px" : "12px 16px",
                      opacity: isActive ? 1 : 0.55,
                      transform: isActive ? "scale(1)" : "scale(0.97)",
                    }}
                    onClick={() => {
                      /* Allow manual focus via click */
                    }}
                    aria-pressed={isActive}
                  >
                    {isActive && (
                      <p className="text-[10px] font-medium mb-3" style={{ color: venture.accentColor }}>
                        {venture.focusPhrase}
                      </p>
                    )}
                    <div className="flex items-center gap-3">
                      <VentureMark venture={venture} size={isActive ? 40 : 30} />
                      {isActive && (
                        <div>
                          <p className="text-sm font-semibold text-white">{venture.name}</p>
                          <p className="text-xs mt-0.5" style={{ color: venture.accentColor }}>
                            {venture.tagline}
                          </p>
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <p className="text-xs leading-relaxed mt-3" style={{ color: "#8BA3BC" }}>
                        {venture.description}
                      </p>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Right: media frame */}
            <div className="flex-1 p-4 md:p-8 xl:p-12 flex items-center">
              <div className="w-full h-full min-h-[280px] md:min-h-0" style={{ maxHeight: "calc(100vh - 96px)" }}>
                {ventures.map((v, i) => (
                  <div
                    key={v.id}
                    className="absolute inset-4 md:inset-8 xl:inset-12 transition-all duration-600"
                    style={{
                      opacity: i === activeVenture ? 1 : 0,
                      transform: i === activeVenture ? "translateX(0) scale(1)" : "translateX(12px) scale(0.98)",
                      pointerEvents: i === activeVenture ? "auto" : "none",
                    }}
                  >
                    <VentureMediaFrame ventureId={v.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ──── PHASE: CLOSING ──── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700"
          style={{
            opacity: showClosing ? 1 : 0,
            transform: showClosing ? "translateY(0)" : "translateY(20px)",
            pointerEvents: showClosing ? "auto" : "none",
          }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#1769FF" }}>
            The Nexora Ecosystem
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">
            That's the system.
          </h2>
          <p className="mt-6 text-base max-w-md" style={{ color: "#8BA3BC" }}>
            Four ventures. One connected ecosystem. Designed to help businesses grow.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {ventures.map((v) => (
              <div
                key={v.id}
                className="flex items-center gap-2 px-3 py-2 rounded-[3px]"
                style={{ background: v.accentColorDim, border: `1px solid ${v.accentColor}40` }}
              >
                <span className="text-xs font-semibold" style={{ color: v.accentColor }}>
                  {v.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        {(showIntroText || showHierarchy) && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
            aria-hidden="true"
          >
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "#8BA3BC" }}>
              Scroll
            </span>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <rect x="1" y="1" width="12" height="18" rx="6" stroke="#1E3048" strokeWidth="1.5"/>
              <circle cx="7" cy="6" r="2" fill="#1769FF">
                <animate attributeName="cy" values="6;13;6" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        )}

        {/* Progress bar */}
        {showVentures && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
            {ventures.map((_, i) => (
              <div
                key={i}
                className="h-[2px] rounded-full transition-all duration-300"
                style={{
                  width: i === activeVenture ? 24 : 8,
                  background: i === activeVenture ? ventures[i].accentColor : "#1E3048",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
