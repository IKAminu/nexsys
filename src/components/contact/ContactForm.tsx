import { useState, useRef } from "react"
import Button from "@/components/ui/Button"


// The endpoint should accept POST requests with JSON body containing the fields below
// and return { success: true } or { success: false, error: string }
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

interface FormState {
  fullName: string
  company: string
  email: string
  phone: string
  subject: string
  message: string
  // Honeypot — leave blank
  _trap: string
}

type SubmitStatus = "idle" | "loading" | "success" | "error"

const REQUIRED_FIELDS: (keyof FormState)[] = [
  "fullName",
  "email",
  "subject",
  "message",
]

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!form.fullName.trim()) errors.fullName = "Full name is required."
  if (!form.email.trim()) {
    errors.email = "Email address is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!form.subject.trim()) errors.subject = "Subject is required."
  if (!form.message.trim()) errors.message = "Message is required."
  else if (form.message.trim().length < 10) errors.message = "Message is too short."
  return errors
}

const subjectOptions = [
  "Partnership enquiry",
  "Technology solutions",
  "Logistics services",
  "Digital commerce",
  "Skills development",
  "Investment enquiry",
  "General enquiry",
  "Other",
]

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    _trap: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name as keyof FormState]
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (form._trap) return

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstErrorKey = Object.keys(validationErrors)[0]
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`)
        ?.focus()
      return
    }

    setStatus("loading")

    try {
        const formData = new FormData()
      
        formData.append("access_key", WEB3FORMS_ACCESS_KEY)
        formData.append("name", form.fullName)
        formData.append("company", form.company)
        formData.append("email", form.email)
        formData.append("phone", form.phone)
        formData.append("subject", `Nexora Website Enquiry: ${form.subject}`)
        formData.append("message", form.message)
        formData.append("_trap", form._trap)
      
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        })
      
    const result = await res.json()

    if (!res.ok || !result.success) {
      throw new Error(result.error || result.message || `W3Forms error: ${res.status}`)
    }
    
    setStatus("success")
    } catch (error) {
      console.error("W3Forms submission error:", error)
      setStatus("error")
    }
  }
  
  const fieldClass = (name: keyof FormState) =>
    `w-full px-4 py-3 rounded-[3px] border text-sm text-white bg-transparent outline-none transition-colors focus:border-[#1769FF] placeholder:text-[#8BA3BC] ${
      errors[name] ? "border-red-500" : "border-[#1E3048] hover:border-[#2A4060]"
    }`

  const labelClass = "block text-xs font-medium mb-1.5"

  if (status === "success") {
    return (
      <div
        className="p-8 rounded-[4px] border flex flex-col gap-4"
        style={{ background: "rgba(23, 105, 255, 0.06)", borderColor: "#1769FF40" }}
        role="alert"
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "rgba(23, 105, 255, 0.2)" }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 9l4 4 8-8"
              stroke="#1769FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Message received.</h3>
          <p className="text-sm mt-1" style={{ color: "#8BA3BC" }}>
            Thank you for reaching out. Your enquiry has been received and we will be in touch shortly.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle")
            setForm({ fullName: "", company: "", email: "", phone: "", subject: "", message: "", _trap: "" })
          }}
          className="text-xs font-medium underline underline-offset-2 text-left w-fit"
          style={{ color: "#8BA3BC" }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <label htmlFor="_trap">Leave this field empty</label>
        <input
          id="_trap"
          name="_trap"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form._trap}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass} style={{ color: "#E8ECF2" }}>
            Full Name <span className="text-[#1769FF]" aria-label="required">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={fieldClass("fullName")}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs mt-1.5 text-red-400" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={labelClass} style={{ color: "#E8ECF2" }}>
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            className={fieldClass("company")}
            placeholder="Your company or organisation"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass} style={{ color: "#E8ECF2" }}>
            Email Address <span className="text-[#1769FF]" aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass("email")}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs mt-1.5 text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass} style={{ color: "#E8ECF2" }}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass("phone")}
            placeholder="+234 000 000 0000"
          />
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label htmlFor="subject" className={labelClass} style={{ color: "#E8ECF2" }}>
            Subject / Reason for Contact <span className="text-[#1769FF]" aria-label="required">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`${fieldClass("subject")} bg-[#0D1B2A]`}
            style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238BA3BC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
          >
            <option value="" disabled style={{ background: "#0D1B2A" }}>Select a subject</option>
            {subjectOptions.map((opt) => (
              <option key={opt} value={opt} style={{ background: "#0D1B2A" }}>
                {opt}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="text-xs mt-1.5 text-red-400" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass} style={{ color: "#E8ECF2" }}>
            Message <span className="text-[#1769FF]" aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass("message")} resize-none`}
            placeholder="Tell us about your enquiry..."
          />
          {errors.message && (
            <p id="message-error" className="text-xs mt-1.5 text-red-400" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Error state */}
      {status === "error" && (
        <div
          className="mt-5 p-4 rounded-[3px] border text-sm"
          style={{ borderColor: "#7f1d1d40", background: "rgba(127,29,29,0.1)", color: "#FCA5A5" }}
          role="alert"
        >
          Something went wrong while sending your message. Please try again or contact us directly at{" "}
          <a href="mailto:info@nexorasys.ng" className="underline underline-offset-2">
            info@nexorasys.ng
          </a>
          .
        </div>
      )}

      <div className="mt-6 flex items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "loading"}
          aria-busy={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                <path d="M7 1.5A5.5 5.5 0 0112.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
        <p className="text-xs" style={{ color: "#8BA3BC" }}>
          * Required fields
        </p>
      </div>
    </form>
  )
}
