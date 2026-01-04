import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
            Let's Build Your Business for the Future
          </h2>
          
          <p className="text-lg text-gray-700 font-body leading-relaxed max-w-2xl mx-auto">
            Whether you're starting from scratch or scaling an existing operation, HIC Tech provides the intelligence, systems, and presence needed to grow confidently in a global market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button href="#contact" variant="primary" className="w-full sm:w-auto">
              Start a Conversation
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

