import Image from "next/image";
import Link from "next/link";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function FosanPage() {
  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      <section className="relative py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6 overflow-hidden">
        <div className="absolute -bottom-30 -right-[5%] -z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[400px]">
          <Image src={'/shape6.svg'} alt="rand" fill className="object-contain opacity-[0.8]"/>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-heading leading-tight">
              FoSAN
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-4xl">
              The Food Safety Ambassadors Network is a Nigerian NGO promoting science-based food safety education, awareness, and advocacy from farm to fork. We built them a professional website with a clean design, SEO, and the operational systems they need to stay in touch with partners and volunteers.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Published
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  May 20, 2025
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Category
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  Website
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Industry
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  NGO • Public Health
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Website
                </p>
                <Link
                  href="https://www.foodsafetyambassadors.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-[#3038cf] font-body hover:underline break-all"
                >
                  www.foodsafetyambassadors.org
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Overview
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              FoSAN needed a digital home that matched the seriousness of their mission — clear, professional, and easy for partners, sponsors, and volunteers to find and act on. The brief was a clean website, strong search visibility, and practical technical support around how the organisation communicates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-[#faf9f9] w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            What We Did
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              We designed and developed a professional website with a clean layout that presents FoSAN&apos;s programmes, stakeholders, and calls to action without clutter. SEO was implemented so the organisation can be found by people looking for food safety education and partners in Nigeria. We also set up automated communications and provided ongoing technical assistance so enquiries, follow-ups, and day-to-day operations run more smoothly.
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
                  <span className="text-base text-gray-700 font-body">SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Automated Communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Technical Assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Outcome
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              FoSAN now has a professional public presence that is easy to navigate, discoverable through search, and supported by automated communication and technical assistance — so the team can focus on education, advocacy, and community work.
            </p>
          </div>
        </div>
      </section>

      <CTASectionNew />
    </div>
  );
}
