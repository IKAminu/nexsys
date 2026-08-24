interface NexoraLogoProps {
  variant?: "full" | "mark"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function NexoraLogo({
  variant = "full",
  size = "md",
  className = "",
}: NexoraLogoProps) {
  const sizes = {
    sm: { mark: 24, wordmarkHeight: 28 },
    md: { mark: 32, wordmarkHeight: 36 },
    lg: { mark: 44, wordmarkHeight: 48 },
  }

  const s = sizes[size]

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* N mark */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Geometric N letterform */}
        <path
          d="M3 3v26h6.5V11.5L22.5 29H29V3h-6.5v17.5L9 3H3z"
          fill="#1769FF"
        />
        {/* Cyan highlight on diagonal */}
        <line
          x1="9.5"
          y1="3"
          x2="22.5"
          y2="29"
          stroke="#21D4FD"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      {variant === "full" && (
        <div
          className="flex flex-col leading-none"
          style={{ height: s.wordmarkHeight }}
        >
          <span
            className="font-bold tracking-widest text-white uppercase"
            style={{
              fontSize: size === "sm" ? 11 : size === "md" ? 13 : 17,
              letterSpacing: "0.18em",
            }}
          >
            Nexora
          </span>
          <span
            className="text-text-muted tracking-widest uppercase font-medium mt-px"
            style={{
              fontSize: size === "sm" ? 7 : size === "md" ? 8 : 10,
              letterSpacing: "0.22em",
              color: "#8BA3BC",
            }}
          >
            Systems Limited
          </span>
        </div>
      )}
    </div>
  )
}
