import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      <Container>
        <div className="max-w-md">
          <p
            className="text-7xl font-bold mb-4 font-mono"
            style={{ color: "#1E3048" }}
            aria-hidden="true"
          >
            404
          </p>
          <h1 className="text-3xl font-bold text-white mb-3">Page not found.</h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#8BA3BC" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Button href="/" variant="primary" arrow>
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  )
}
