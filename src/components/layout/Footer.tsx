import { Link } from "react-router"
import NexoraLogo from "@/components/logos/NexoraLogo"
import { siteConfig } from "@/data/site"

function SocialIcon({ name }: { name: string }) {
  return (
    <a
      href="#"
      aria-label={`${name} — TODO: ADD OFFICIAL SOCIAL LINKS`}
      className="w-8 h-8 flex items-center justify-center rounded-[3px] border border-[#1E3048] text-[#8BA3BC] hover:border-[#1769FF] hover:text-white transition-colors text-xs font-mono"
      onClick={(e) => e.preventDefault()}
    >
      {name[0]}
    </a>
  )
}

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "#1E3048", background: "#07111F" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <NexoraLogo size="md" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "#8BA3BC" }}>
              Building a connected ecosystem of technology-driven ventures across technology, commerce, logistics and digital skills.
            </p>
            <div className="flex gap-2 mt-6">
              <SocialIcon name="LinkedIn" />
              <SocialIcon name="Twitter" />
              <SocialIcon name="Facebook" />
              <SocialIcon name="Instagram" />
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#1769FF" }}>
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "#8BA3BC" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#1769FF" }}>
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm" style={{ color: "#8BA3BC" }}>
              <p>{siteConfig.contact.address.full}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-12 pt-8 border-t text-xs"
          style={{ borderColor: "#1E3048", color: "#8BA3BC" }}
        >
          <p>{siteConfig.copyright}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
