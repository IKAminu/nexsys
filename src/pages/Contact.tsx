import Container from "@/components/ui/Container"
import ContactForm from "@/components/contact/ContactForm"
import { siteConfig } from "@/data/site"

function ContactDetail({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: "#1769FF" }}>
        {label}
      </p>
      <div className="text-sm" style={{ color: "#E8ECF2" }}>
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  const { contact } = siteConfig

  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-16 md:pt-28 md:pb-20"
        style={{ borderBottom: "1px solid #1E3048" }}
        aria-labelledby="contact-hero-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1769FF" }}>
              Contact
            </p>
            <h1
              id="contact-hero-heading"
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.06] mb-4"
            >
              Let's Build Something Useful.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#8BA3BC" }}>
              We are building an ecosystem. We are open to conversations about partnership, collaboration and how Nexora can support your business.
            </p>
          </div>
        </Container>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24" aria-label="Contact information and form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: contact details */}
            <div className="lg:col-span-4">
              <div className="space-y-8 sticky top-28">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "#1769FF" }}>
                    Contact Details
                  </p>
                  <div className="space-y-6">
                    <ContactDetail label="Email">
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:text-white transition-colors"
                      >
                        {contact.email}
                      </a>
                    </ContactDetail>
                    <ContactDetail label="Phone">
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="hover:text-white transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </ContactDetail>
                    <ContactDetail label="Address">
                      <address className="not-italic leading-relaxed">
                        {contact.address.street}
                        <br />
                        {contact.address.city}, {contact.address.state}
                        <br />
                        {contact.address.country}
                      </address>
                    </ContactDetail>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="rounded-[4px] border overflow-hidden"
                  style={{ borderColor: "#1E3048" }}
                >
                  <div
                    className="aspect-[4/3] flex flex-col items-center justify-center p-6 text-center"
                    style={{ background: "#0D1B2A" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="mb-3">
                      <circle cx="14" cy="12" r="5" stroke="#1E3048" strokeWidth="1.5"/>
                      <path d="M14 27C14 27 4 19.5 4 12a10 10 0 0120 0c0 7.5-10 15-10 15z"
                        stroke="#1E3048" strokeWidth="1.5"/>
                    </svg>
                    <p
                      className="text-[10px] font-mono tracking-widest uppercase leading-relaxed"
                      style={{ color: "#1E3048" }}
                    >
                      {/* TODO: CONFIGURE MAP */}
                      MAP INTEGRATION —<br />CONNECT AFTER EXPORT
                    </p>
                    <p className="text-xs mt-2" style={{ color: "#8BA3BC" }}>
                      176 Azikiwe Road, Aba
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send a message.</h2>
                <p className="text-sm" style={{ color: "#8BA3BC" }}>
                  Fill in the form below and we will get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
