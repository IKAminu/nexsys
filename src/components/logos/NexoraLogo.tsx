import nexoraLogo from "@/assets/nexora-logo.svg"

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
    sm: { width: 138, height: 41 },
    md: { width: 166, height: 47 },
    lg: { width: 202, height: 58 },
  }

  const s = sizes[size]
  const width = variant === "mark" ? s.height : s.width

  return (
    <img
      src={nexoraLogo}
      alt="Nexora Systems Limited"
      width={width}
      height={s.height}
      className={`object-contain object-left ${className}`}
      style={{ width, height: s.height, objectFit: "contain", objectPosition: "left center" }}
    />
  )
}
