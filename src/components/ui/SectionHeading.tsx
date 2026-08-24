interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: "left" | "center"
  className?: string
  id?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left"
  const maxWidth = align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"

  return (
    <div className={`${textAlign} ${className}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: "#1769FF" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl md:text-4xl font-bold leading-tight text-white ${maxWidth}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 text-base leading-relaxed ${maxWidth}`}
          style={{ color: "#8BA3BC" }}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
