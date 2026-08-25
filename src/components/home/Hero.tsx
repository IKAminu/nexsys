import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import worldBackground from "@/assets/world-background.svg"
import nexoraLogo from "@/assets/nexora-logo.svg"

/* Abstract network of nodes with connecting lines — original digital infrastructure visual */
function NetworkVisual() {
  const nodes = [
    { id: 0, x: 290, y: 275, r: 10, isCenter: true },
    { id: 1, x: 95, y: 75, r: 3.5 }, { id: 2, x: 210, y: 140, r: 4.5 },
    { id: 3, x: 390, y: 105, r: 4 }, { id: 4, x: 505, y: 68, r: 3 },
    { id: 5, x: 550, y: 175, r: 4 }, { id: 6, x: 525, y: 305, r: 3.5 },
    { id: 7, x: 510, y: 445, r: 3 }, { id: 8, x: 415, y: 520, r: 4 },
    { id: 9, x: 270, y: 545, r: 3.5 }, { id: 10, x: 145, y: 488, r: 3 },
    { id: 11, x: 55, y: 375, r: 3.5 }, { id: 12, x: 38, y: 230, r: 3 },
    { id: 13, x: 148, y: 162, r: 4 }, { id: 14, x: 455, y: 228, r: 4.5 },
    { id: 15, x: 360, y: 422, r: 3.5 }, { id: 16, x: 175, y: 340, r: 3 },
    { id: 17, x: 360, y: 195, r: 3 },
  ]

  const edges = [
    [0, 2], [0, 3], [0, 5], [0, 14], [0, 15], [0, 16], [1, 2], [2, 3], [2, 13],
    [3, 4], [3, 17], [4, 5], [5, 6], [5, 14], [6, 14], [6, 7], [7, 8], [8, 9],
    [8, 15], [9, 15], [9, 10], [10, 11], [11, 12], [12, 13], [12, 16], [13, 2],
    [1, 12], [16, 11], [15, 10], [17, 14], [17, 0],
  ]

  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 1", maxWidth: 754 }} aria-hidden="true">
      <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(23, 105, 255, 0.06) 0%, transparent 70%)" }} />
      <svg viewBox="0 0 580 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#1769FF" stopOpacity="0.4" /><stop offset="100%" stopColor="#1769FF" stopOpacity="0" /></radialGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#21D4FD" stopOpacity="0.3" /><stop offset="100%" stopColor="#1769FF" stopOpacity="0" /></radialGradient>
          <filter id="blur-sm"><feGaussianBlur stdDeviation="2" /></filter>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        {Array.from({ length: 10 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 55 + 2.5} x2="580" y2={i * 55 + 2.5} stroke="#1E3048" strokeWidth="0.5" opacity="0.4" />)}
        {Array.from({ length: 11 }).map((_, i) => <line key={`v${i}`} x1={i * 58} y1="0" x2={i * 58} y2="550" stroke="#1E3048" strokeWidth="0.5" opacity="0.4" />)}
        {edges.map(([a, b], i) => { const na = nodes[a]; const nb = nodes[b]; const isConnectedToCenter = a === 0 || b === 0; return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke={isConnectedToCenter ? "#1769FF" : "#1E3048"} strokeWidth={isConnectedToCenter ? "1" : "0.75"} strokeOpacity={isConnectedToCenter ? "0.35" : "0.5"} /> })}
        {[[0, 14], [0, 5], [0, 15], [2, 0]].map(([a, b], i) => <circle key={`travel-${i}`} r="2" fill="#21D4FD" opacity="0.8"><animateMotion dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.6}s`}><mpath href={`#path-${i}`} /></animateMotion><animate attributeName="opacity" values="0;0.9;0" dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} /></circle>)}
        {nodes.filter((n) => !n.isCenter).map((node) => <g key={node.id}><circle cx={node.x} cy={node.y} r={node.r * 2.5} fill="url(#nodeGlow)" filter="url(#blur-sm)" opacity="0.5" /><circle cx={node.x} cy={node.y} r={node.r} fill="#0D1B2A" stroke="#1769FF" strokeWidth="1" strokeOpacity="0.7"><animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + (node.id % 4) * 0.7}s`} repeatCount="indefinite" /></circle></g>)}
        {/* Nexora logo replacement. The surrounding network, glow and pulse remain unchanged so this can be cleanly reverted. */}
        <g filter="url(#glow)">
          <circle cx={290} cy={275} r={52} fill="url(#centerGlow)" />
          <circle cx={290} cy={275} r={36} fill="#07111F" stroke="#1769FF" strokeWidth="1.5" />
          <image href={nexoraLogo} x="252" y="237" width="76" height="76" preserveAspectRatio="xMidYMid meet" />
          <circle cx={290} cy={275} r={36} fill="none" stroke="#1769FF" strokeWidth="1"><animate attributeName="r" values="36;54;36" dur="3s" repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" /></circle>
        </g>
        <line x1="0" y1="0" x2="40" y2="0" stroke="#1769FF" strokeWidth="1.5" opacity="0.3" /><line x1="0" y1="0" x2="0" y2="40" stroke="#1769FF" strokeWidth="1.5" opacity="0.3" /><line x1="580" y1="550" x2="540" y2="550" stroke="#1769FF" strokeWidth="1.5" opacity="0.3" /><line x1="580" y1="550" x2="580" y2="510" stroke="#1769FF" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#07111F" }} aria-labelledby="hero-heading">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="bg-world-background absolute inset-0" style={{ backgroundImage: `url(${worldBackground})`, backgroundSize: "cover", backgroundPosition: "right top", backgroundRepeat: "no-repeat", opacity: 0.36, mixBlendMode: "screen" }} />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(30, 48, 72, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 48, 72, 0.25) 1px, transparent 1px)", backgroundSize: "48px 48px" }} aria-hidden="true" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24 lg:py-0">
          <div className="order-2 lg:order-1"><p className="text-xs font-semibold tracking-[0.22em] uppercase mb-5 animate-fade-in-up" style={{ color: "#1769FF", animationDelay: "0ms" }}>Nexora Systems Limited</p><h1 id="hero-heading" className="text-4xl md:text-5xl xl:text-[3.6rem] font-bold leading-[1.08] text-white mb-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>Building connected technology-driven businesses.</h1><p className="text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-fade-in-up" style={{ color: "#8BA3BC", animationDelay: "160ms" }}>One parent company. Four ventures. A single ecosystem designed to help businesses operate, learn, connect and grow.</p><div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "240ms" }}><Button href="#ecosystem" variant="primary" size="md" arrow onClick={(e) => { e.preventDefault(); document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" }) }}>Discover Our Ecosystem</Button><Button href="/contact" variant="outline" size="md">Partner With Us</Button></div></div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end pt-24 lg:pt-24"><NetworkVisual /></div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(transparent, #07111F)" }} aria-hidden="true" />
    </section>
  )
}
