import { type ButtonHTMLAttributes, type ReactNode } from "react"
import { Link } from "react-router"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
  children: ReactNode
  arrow?: boolean
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  arrow = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"

  const variants = {
    primary:
      "bg-[#1769FF] text-white hover:bg-[#0F50CC] active:bg-[#0A3FA3] border border-[#1769FF] hover:border-[#0F50CC]",
    secondary:
      "bg-[#1B2430] text-[#F5F7FA] hover:bg-[#243244] border border-[#1E3048] hover:border-[#2A4060]",
    ghost:
      "bg-transparent text-[#F5F7FA] hover:bg-[#1B2430] border border-transparent",
    outline:
      "bg-transparent text-[#F5F7FA] border border-[#1E3048] hover:border-[#1769FF] hover:text-[#1769FF]",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-[3px]",
    md: "px-6 py-3 text-sm rounded-[4px]",
    lg: "px-8 py-4 text-base rounded-[4px]",
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 7h10M7 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} className={classes}>
          {content}
        </Link>
      )
    }
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
