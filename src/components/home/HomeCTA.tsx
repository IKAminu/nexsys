import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

export default function HomeCTA() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid #1E3048" }}
      aria-labelledby="home-cta-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1769FF" }}>
            Work With Us
          </p>
          <h2
            id="home-cta-heading"
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Build with Nexora.
          </h2>
          <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "#8BA3BC" }}>
            Whether you are looking to leverage technology, build talent, reach new customers or improve your logistics, we are building the ecosystem to support it.
          </p>
          <Button href="/contact" variant="primary" size="lg" arrow>
            Partner With Us
          </Button>
        </div>
      </Container>
    </section>
  )
}
