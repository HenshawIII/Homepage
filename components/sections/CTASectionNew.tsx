import Image from "next/image";
import Link from "next/link";

export function CTASectionNew() {
  return (
    <section className="relative py-6 sm:py-12 lg:py-32 bg-[#D7E5F9] w-[95%] mx-auto rounded-xl mb-6 overflow-hidden">
      <div className="absolute -bottom-[60%] left-[10%] -z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[1000px] lg:h-[400px]">
      <Image src={'/shape4.svg'} alt="rand" fill className="object-contain opacity-[0.1] scale-200"/>
     </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sub-heading */}
            <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider font-body">
              JOIN US
            </p>

            {/* Main Question */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-xl font-normal text-gray-900 font-heading leading-tight">
              Ready to elevate your business?
            </h2>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-gray-600 font-body leading-relaxed max-w-lg">
              Partner with us to take your digital presence to the next level.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold uppercase tracking-wide rounded-xl px-8 py-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                GET STARTED
              </Link>
            </div>
          </div>

          {/* Right Column - Image (1/3 width) */}
          <div className="lg:col-span-1 relative w-full h-full min-h-[300px] lg:min-h-[400px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/ladies.png" // Replace with actual image path
                alt="Team collaboration"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

