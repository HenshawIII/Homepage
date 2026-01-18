import { Button } from "@/components/ui/Button";
import { VantaGlobe } from "./VantaGlobe";

export function HeroSection() {
  return (
    <section className="relative mt-6 md:bg-gradient-to-bl bg-gradient-to-tl from-[#faf9f9] via-[#faf9f9] to-blue-50 py-12 sm:py-12 mb-4 lg:py-12 w-[95%] mx-auto rounded-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-normal text-gray-900 font-heading leading-tight max-w-xl">
              Building Intelligent Businesses for the Global Market
            </h1>
            
            <p className="text-base text-gray-700 font-body max-w-lg leading-tight">
              HIC Tech is an agency that helps businesses start strong, scale smart, and compete globally through  modern software, intelligent systems and strategic digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-4">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
              <Button href="#services" variant="secondary" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column - Vanta Globe Animation */}
          <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
            <VantaGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}

