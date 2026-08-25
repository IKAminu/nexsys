import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import NexoraLogo from "@/components/logos/NexoraLogo"
import Button from "@/components/ui/Button"
import { siteConfig } from "@/data/site"

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(7, 17, 31, 0.3)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(30, 48, 72, 0.35)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-16">
          <nav className="flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
            <Link to="/" aria-label="Nexora Systems Limited — Home">
              <NexoraLogo size="md" />
            </Link>

            <ul className="hidden md:flex items-center gap-1" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-[3px]"
                    style={{ color: isActive(item.href) ? "#F5F7FA" : "#8BA3BC" }}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                    {isActive(item.href) && <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full" style={{ background: "#1769FF" }} aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm" arrow>Partner With Us</Button>
            </div>

            <button
              className="md:hidden flex flex-col gap-[5px] p-2 rounded-[3px] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ color: "#F5F7FA" }}
            >
              <span className="block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center" style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 5px)" : "" }} />
              <span className="block w-5 h-[1.5px] bg-current transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center" style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -5px)" : "" }} />
            </button>
          </nav>
        </div>
      </header>

      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300 flex flex-col"
        style={{
          background: "rgba(7, 17, 31, 0.98)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center h-16 px-6 border-b border-[#1E3048]"><NexoraLogo size="md" /></div>
        <nav className="flex-1 flex flex-col justify-center px-8" aria-label="Mobile navigation">
          <ul className="space-y-2" role="list">
            {siteConfig.nav.map((item, i) => (
              <li key={item.href}>
                <Link to={item.href} className="flex items-center justify-between py-4 text-2xl font-semibold border-b border-[#1E3048] transition-colors" style={{ color: isActive(item.href) ? "#F5F7FA" : "#8BA3BC", animationDelay: `${i * 60}ms` }}>
                  {item.label}
                  {isActive(item.href) && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1769FF" }} />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8"><Button href="/contact" variant="primary" size="lg" arrow className="w-full justify-center">Partner With Us</Button></div>
          <div className="mt-8 text-xs" style={{ color: "#1E3048" }}><p style={{ color: "#8BA3BC" }}>{siteConfig.contact.email}</p><p style={{ color: "#8BA3BC" }}>{siteConfig.contact.phone}</p></div>
        </nav>
      </div>
    </>
  )
}
