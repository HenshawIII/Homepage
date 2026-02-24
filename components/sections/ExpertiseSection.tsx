import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ExpertiseSection() {
  return (
    <section className="relative bg-gradient-to-bl from-[#faf9f9] to-blue-50 py-12 sm:py-16 lg:py-10 w-[95%] mx-auto rounded-xl mb-6 overflow-hidden">
     <div className="absolute -bottom-30 -left-[5%] -z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[400px]">
      <Image src={'/shape6.svg'} alt="rand" fill className="object-contain opacity-[0.8]"/>
     </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="mt-12 relative z-10">
            {/* Sub-heading */}
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
              HIC TECH EXPERTISE
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-normal text-gray-900 font-heading mt-12 leading-tight">
              Discover our
              <br />
              commitment to
              <br />
              excellence
            </h2>

            {/* Body Paragraph */}
            <p className="text-base sm:text-md font-medium text-gray-700 font-body leading-normal lg:my-12 mt-8 max-w-lg">
              With many years of experience, we provide the complete digital infrastructure businesses need to start, run, and scale successfully.

From laying the right foundation, to building intelligent systems, to positioning your brand on a global stage , we design solutions that are practical, scalable, and future-ready.

            </p>

            {/* Learn More Button */}
            <div className="pt-6">
              <Button href="/services" variant="primary" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[700px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* Replace /placeholder-expertise.jpg with your actual image path */}
              <Image
                src="/expert.png"
                alt="Expert team member"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

