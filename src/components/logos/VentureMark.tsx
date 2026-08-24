import type { Venture } from "@/data/ventures"

interface VentureMarkProps {
  venture: Venture
  size?: number
  showName?: boolean
  className?: string
}

export default function VentureMark({
  venture,
  size = 40,
  showName = false,
  className = "",
}: VentureMarkProps) {
  const fontSize = size * 0.36
  const smallLetter = venture.letter.length > 1

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background square with subtle border */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="3"
          fill={venture.accentColorDim}
          stroke={venture.accentColor}
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        {/* Letter mark */}
        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="central"
          fill={venture.accentColor}
          fontFamily="Inter, system-ui, sans-serif"
          fontSize={smallLetter ? fontSize * 0.75 : fontSize}
          fontWeight="700"
          letterSpacing={smallLetter ? "-0.5" : "0"}
        >
          {venture.letter}
        </text>
      </svg>

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
