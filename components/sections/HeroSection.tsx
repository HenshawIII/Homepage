import { Button } from "@/components/ui/Button";
import { VantaGlobe } from "./VantaGlobe";

export function HeroSection() {
  return (
    <section className="relative mt-6 py-12 xl:bg-gradient-to-tr md:bg-gradient-to-bl bg-gradient-to-tl from-[#faf9f9] via-[#faf9f9] to-blue-50 sm:py-12 mb-4 lg:py-12 w-[95%] mx-auto rounded-xl overflow-hidden min-h-[85vh]">
      {/* Background - Vanta Globe Animation (md: and above) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <VantaGlobe />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 md:translate-y-1/4">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-8 md:gap-8 lg:gap-12 items-center md:items-end md:justify-end">
          {/* Left Column - Text Content */}
          <div className="space-y-4 md:col-span-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-normal text-gray-900 font-heading leading-tight max-w-sm md:max-w-xl lg:max-w-md xl:max-w-xl [text-shadow:2px_2px_8px_#faf9f9,0_0_12px_#faf9f9]">
              Building Intelligent Businesses for the Global Market
            </h1>
            
            <p className="text-base sm:text-base lg:text-lg xl:text-base [text-shadow:8px_8px_32px_#ffffff,4px_4px_32px_#ffffff] text-gray-800 font-body max-w-lg leading-tight">
              We help businesses start strong, scale smart, and compete globally through  modern software, intelligent systems and strategic digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start items-start sm:items-center pt-2 sm:pt-4">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto text-base sm:text-base">
                Book a Consultation
              </Button>
              <Button href="#services" variant="secondary" className="w-full sm:w-auto text-base sm:text-base">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column - Vanta Globe Animation (Mobile only) */}
          <div className="w-full h-full min-h-[400px] md:hidden">
            <VantaGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}

