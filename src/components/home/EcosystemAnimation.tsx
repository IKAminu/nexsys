import { useRef, useState, useEffect, useCallback, type ReactElement } from "react"
import Container from "@/components/ui/Container"
import VentureMark from "@/components/logos/VentureMark"
import { ventures, parentCompany } from "@/data/ventures"
import venturesAnimation from "@/assets/ventures_animation.mp4"
import nexoraLogo from "@/assets/nexora-logo.svg"

/* Venture-specific abstract media illustrations kept as a fallback/reference. */
function VentureMediaFrame({ ventureId }: { ventureId: string }) {
  const configs: Record<string, { bg: string; accent: string; label: string; icon: ReactElement }> = {
    "nexora-systems": { bg: "rgba(23, 105, 255, 0.06)", accent: "#1769FF", label: "Technology & Digital Solutions", icon: <g /> },
    "nexora-skillnet": { bg: "rgba(34, 197, 94, 0.06)", accent: "#22C55E", label: "Digital Skills & Talent", icon: <g /> },
    "nexora-marketplace": { bg: "rgba(168, 85, 247, 0.06)", accent: "#A855F7", label: "Digital Commerce", icon: <g /> },
    "enyigo-logistics": { bg: "rgba(249, 115, 22, 0.06)", accent: "#F97316", label: "Logistics & Fulfilment", icon: <g /> },
  }
  const cfg = configs[ventureId] || configs["nexora-systems"]
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center rounded-[4px] overflow-hidden" style={{ background: cfg.bg, border: `1px solid ${cfg.accent}30` }}>
      <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded-[2px]" style={{ color: cfg.accent, background: cfg.accent + "18", border: `1px solid ${cfg.accent}30` }}>
        ECOSYSTEM ANIMATION PLACEHOLDER
      </div>
      <svg viewBox="0 0 700 420" className="w-full h-full" aria-hidden="true">{cfg.icon}</svg>
      <p className="absolute bottom-4 text-xs font-medium" style={{ color: cfg.accent + "AA" }}>{cfg.label}</p>
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

function ParentCard() {
  return (
    <div className="px-8 py-5 rounded-[4px] border text-center" style={{ background: "rgba(23, 105, 255, 0.08)", borderColor: "#1769FF", maxWidth: 340 }}>
      <div className="flex items-center justify-center gap-2 mb-2">
          <img
            src={nexoraLogo}
            alt="Nexora Systems Limited logo"
            className="w-10 h-10 object-contain"
            />
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-white">Nexora Systems Limited</span>
      </div>
      <p className="text-xs" style={{ color: "#8BA3BC" }}>Parent Company / Technology Group</p>
    </div>
  )
}

function BranchDiagram() {
  return (
    <svg viewBox="0 0 600 80" className="w-full max-w-xl mx-auto" aria-hidden="true">
      <line x1="300" y1="0" x2="300" y2="30" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="80" y1="30" x2="520" y2="30" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.5"/>
      {[80, 227, 373, 520].map((x, i) => <line key={i} x1={x} y1="30" x2={x} y2="60" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.4"/>)}
    </svg>
  )
}

export default function EcosystemAnimation() {
  const outerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const animationFrameRef = useRef<number | null>(null)
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

  /* Smoothly play each two-second segment when the active venture changes. */
  useEffect(() => {
    const video = videoRef.current
    if (!video || prefersReducedMotion || !showVentures) return
    if (!Number.isFinite(video.duration) || video.duration <= 0) return

    const segmentDuration = video.duration / 4
    const startTime = activeVenture * segmentDuration
    const endTime = Math.min(video.duration, (activeVenture + 1) * segmentDuration)

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    const beginSegment = () => {
      if (!videoRef.current) return
      videoRef.current.currentTime = startTime
      videoRef.current.play().catch(() => {})

      const monitor = () => {
        const currentVideo = videoRef.current
        if (!currentVideo) return
        if (currentVideo.currentTime >= endTime - 0.02) {
          currentVideo.currentTime = endTime
          currentVideo.pause()
          animationFrameRef.current = null
          return
        }
        animationFrameRef.current = requestAnimationFrame(monitor)
      }
      animationFrameRef.current = requestAnimationFrame(monitor)
    }

    if (video.readyState >= 1) {
      beginSegment()
    } else {
      video.addEventListener("loadedmetadata", beginSegment, { once: true })
    }

    return () => {
      video.removeEventListener("loadedmetadata", beginSegment)
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [activeVenture, showVentures, prefersReducedMotion])

  useEffect(() => {
    if (!showVentures && videoRef.current) {
      videoRef.current.pause()
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [showVentures])

  if (prefersReducedMotion) {
    return (
      <section id="ecosystem" className="py-24 md:py-32" style={{ borderTop: "1px solid #1E3048" }}>
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#1769FF" }}>Our Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">One parent company. Four connected ventures.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ventures.map((v) => (
              <div key={v.id} className="p-6 rounded-[4px] border" style={{ background: "#0D1B2A", borderColor: v.accentColor + "40" }}>
                <VentureMark venture={v} size={40} showName className="mb-3" />
                <p className="text-xs leading-relaxed mt-3" style={{ color: "#8BA3BC" }}><span style={{ color: v.accentColor }}>{v.focusPhrase}</span>{" "}{v.name}.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="ecosystem" ref={outerRef} className="mt-20" style={{ height: "500vh", position: "relative" }} aria-label="Ecosystem overview">
      <div className="sticky top-[80px] h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center" style={{ background: "#07111F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ borderTop: "1px solid #1E3048" }} aria-hidden="true" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700" style={{ opacity: showIntroText ? 1 : 0, transform: showIntroText ? "translateY(0)" : "translateY(-20px)", pointerEvents: showIntroText ? "auto" : "none" }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#1769FF" }}>Our Ecosystem</p>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-2xl">Imagine a business...</h2>
          <p className="mt-4 text-base max-w-md" style={{ color: "#8BA3BC" }}>One that operates, learns, sells and delivers, through a connected ecosystem.</p>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700" style={{ opacity: showHierarchy ? 1 : 0, transform: showHierarchy ? "translateY(0)" : "translateY(20px)", pointerEvents: showHierarchy ? "auto" : "none" }}>
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
            <ParentCard />
            <BranchDiagram />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {ventures.map((v, i) => (
                <div key={v.id} className="flex flex-col items-center gap-2 px-3 py-4 rounded-[4px] border text-center transition-all duration-500" style={{ background: v.accentColorDim, borderColor: v.accentColor + "50", opacity: showHierarchy ? 1 : 0, transform: showHierarchy ? "translateY(0)" : "translateY(10px)", transitionDelay: `${i * 80}ms` }}>
                  <VentureMark venture={v} size={32} />
                  <p className="text-[11px] font-semibold text-white leading-tight">{v.name}</p>
                  <p className="text-[10px]" style={{ color: v.accentColor }}>{v.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-[16px] border border-[#1E3048] overflow-hidden transition-all duration-700" style={{ opacity: showVentures ? 1 : 0, pointerEvents: showVentures ? "auto" : "none" }}>
          <video ref={videoRef} src={venturesAnimation} className="absolute inset-0 w-full h-full object-cover object-center" style={{ pointerEvents: "none" }} muted playsInline preload="auto" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#07111F]/50 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 h-full flex flex-col md:flex-row items-stretch">
            <div className="flex flex-col justify-center gap-2 px-6 md:pl-12 xl:pl-20 py-8 md:py-0 md:w-[360px] xl:w-[420px] flex-shrink-0">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: "#1769FF" }}>Imagine a business...</p>
              {ventures.map((venture, i) => {
                const isActive = i === activeVenture
                return (
                  <button key={venture.id} className="text-left rounded-[4px] border transition-all duration-500 eco-card cursor-pointer" style={{ background: isActive ? `color-mix(in srgb, ${venture.accentColor} 50%, transparent)` : "rgba(13, 27, 42, 0.5)", borderColor: isActive ? venture.accentColor + "80" : "#1E3048", padding: isActive ? "20px 20px" : "12px 16px", opacity: isActive ? 1 : 0.55, transform: isActive ? "scale(1)" : "scale(0.97)" }} onClick={() => {}} aria-pressed={isActive}>
                    {isActive && <p className="text-[10px] font-medium mb-3" style={{ color: "#EAF4FF" }}>{venture.focusPhrase}</p>}
                    <div className="flex items-center gap-3">
                      <VentureMark venture={venture} size={isActive ? 40 : 30} />
                      {isActive && <div><p className="text-sm font-semibold text-white">{venture.name}</p><p className="text-xs mt-0.5" style={{ color: "#EAF4FF" }}>{venture.tagline}</p></div>}
                    </div>
                    {isActive && <p className="text-xs leading-relaxed mt-3" style={{ color: "#FFFFFF" }}>{venture.description}</p>}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700" style={{ opacity: showClosing ? 1 : 0, transform: showClosing ? "translateY(0)" : "translateY(20px)", pointerEvents: showClosing ? "auto" : "none" }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "#1769FF" }}>The Nexora Ecosystem</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">That's the system.</h2>
          <p className="mt-6 text-base max-w-md" style={{ color: "#8BA3BC" }}>Four ventures. One connected ecosystem. Designed to help businesses grow.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {ventures.map((v) => <div key={v.id} className="flex items-center gap-2 px-3 py-2 rounded-[3px]" style={{ background: v.accentColorDim, border: `1px solid ${v.accentColor}40` }}><span className="text-xs font-semibold" style={{ color: v.accentColor }}>{v.name}</span></div>)}
          </div>
        </div>

        {showVentures && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
            {ventures.map((_, i) => <div key={i} className="h-[2px] rounded-full transition-all duration-300" style={{ width: i === activeVenture ? 24 : 8, background: i === activeVenture ? ventures[i].accentColor : "#1E3048" }} />)}
          </div>
        )}
      </div>
    </section>
  )
}
