import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function AOMIndustriesPage() {
  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6 overflow-hidden">
        <div className="absolute -bottom-30 -right-[5%] -z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[400px]">
          <Image src={'/shape6.svg'} alt="rand" fill className="object-contain opacity-[0.8]"/>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-heading leading-tight">
              AOM Industries
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-4xl">
              AOM Industries operates across multiple sectors, requiring a clear digital structure that could communicate scale, credibility, and operational clarity.
            </p>
          </div>
          
          {/* Metadata Box */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Published
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  March 22, 2024
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Category
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  Multi-Industry Company
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Industry
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  Petroleum • Real Estate • Logistics
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Website
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  www.aomindustries.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Overview
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              AOM Industries operates across multiple sectors, requiring a clear digital structure that could communicate scale, credibility, and operational clarity.
            </p>
          </div>
        </div>
      </section>

      {/* What We Did Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#faf9f9] w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            What We Did
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              We built a corporate website that unified AOM's diverse business units under a single, coherent digital identity. To support operations, we implemented intelligent customer service systems for handling enquiries, managing email communications, tracking operational updates, and generating internal reports. We also optimized the platform for search visibility to strengthen online presence.
            </p>
            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-gray-900 font-body uppercase tracking-wide">
                Scope:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Customer Service Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Operational Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">SEO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Outcome
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              AOM Industries now operates with a clearer digital footprint, improved communication workflows, and systems that support operational oversight across its various business lines.
            </p>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <CTASectionNew />
    </div>
  );
}

