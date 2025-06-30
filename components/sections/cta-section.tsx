import { Clock } from "lucide-react"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"

export default function CTASection() {
  return (
    <section className="py-16 bg-primary" aria-labelledby="cta-heading">
      <Container>
        <div className="text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white mb-6">
            Ready to Get Started with Your Roofing Project?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact CALGREEN ROOFING today for a free, no-obligation quote. Our team of experts is ready to help with
            all your roofing needs throughout Southern California. We provide detailed estimates and transparent
            pricing.
          </p>
          <div className="flex justify-center">
            <CTAButton
              href="/fastquote"
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 flex items-center justify-center font-bold"
            >
              <Clock className="mr-2 h-5 w-5" aria-hidden="true" />
              GET INSTANT QUOTE
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
