import nexoraSystemsLogo from "@/assets/nexora-systems-logo.svg"
import nexoraSkillNetLogo from "@/assets/nexora-skillnet-logo.svg"
import nexoraMarketplaceLogo from "@/assets/nexora-marketplace-logo.svg"
import enyigoLogisticsLogo from "@/assets/enyigo-logistics-logo.svg"
import type { Venture } from "@/data/ventures"

interface VentureMarkProps {
  venture: Venture
  size?: number
  showName?: boolean
  className?: string
}

const ventureLogos: Record<string, string> = {
  "nexora-systems": nexoraSystemsLogo,
  "nexora-skillnet": nexoraSkillNetLogo,
  "nexora-marketplace": nexoraMarketplaceLogo,
  "enyigo-logistics": enyigoLogisticsLogo,
}

export default function VentureMark({
  venture,
  size = 44,
  showName = false,
  className = "",
}: VentureMarkProps) {
  const logo = ventureLogos[venture.id]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt=""
        width={size}
        height={size}
        className="shrink-0 object-contain"
        style={{ width: size, height: size, objectFit: "contain" }}
        aria-hidden="true"
      />

      {showName && (
        <div className="flex flex-col leading-none">
          <span
            className="font-semibold text-text text-sm"
            style={{ color: "#F5F7FA" }}
          >
            {venture.name}
          </span>
          <span
            className="text-xs mt-0.5 font-medium"
            style={{ color: venture.accentColor, fontSize: 10 }}
          >
            {venture.tagline}
          </span>
        </div>
      )}
    </div>
  )
}
