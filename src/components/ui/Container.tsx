import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "main" | "article" | "header" | "footer"
  narrow?: boolean
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full px-6 md:px-12 xl:px-16 ${narrow ? "max-w-3xl" : "max-w-7xl"} ${className}`}
    >
      {children}
    </Tag>
  )
}
