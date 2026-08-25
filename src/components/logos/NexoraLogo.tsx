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
    sm: { width: 128, height: 38 },
    md: { width: 154, height: 44 },
    lg: { width: 188, height: 54 },
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
