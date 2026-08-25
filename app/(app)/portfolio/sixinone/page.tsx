import Image from "next/image";
import Link from "next/link";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function SixInOnePage() {
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
              SIX IN ONE
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-4xl">
              SIX IN ONE Group is a talent, image, and brand development company working across entertainment, publishing, and cultural business. We designed a comprehensive visual identity and built a website that lets each part of the group show up on its own terms.
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
                  February 12, 2025
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Category
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  Brand Identity
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Industry
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  Entertainment • Publishing
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Website
                </p>
                <Link
                  href="https://www.sixinonegroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-[#3038cf] font-body hover:underline"
                >
                  www.sixinonegroup.com
                </Link>
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
              The group needed a brand that could hold several businesses together without flattening them. Entertainment, publishing, and cultural development each needed their own presence — while still reading as one house. That became the brief for both the identity and the site.
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
          <div className="max-w-4xl space-y-6">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              We designed an extensive brand system — mark, wordmark, colour, and application — built around a fused 6 and 1, with a saturated orange that carries through print and digital. The identity is bold enough for entertainment and disciplined enough for a group-level house brand.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              The website is structured around the group's real shape. Publishing and entertainment live as distinct factions, each with its own visuals, layout, and tone, rather than a single generic corporate template. We also implemented SEO so the brand can be found as clearly as it looks.
            </p>
            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-gray-900 font-body uppercase tracking-wide">
                Scope:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Brand Identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Website</span>
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

      {/* Brand & Website */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-4">
            Brand & Website
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-4xl mb-10">
            Identity lockups and the live site — the orange house brand, and a cinematic hero that introduces the group before visitors move into each faction.
          </p>

          <div className="relative w-full overflow-hidden rounded-2xl bg-black border border-gray-200 shadow-sm mb-8">
            <Image
              src="/sixinone-website.jpg"
              alt="SIX IN ONE Group website hero"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center p-8 sm:p-12 min-h-[280px]">
                <Image
                  src="/6in1.png"
                  alt="SIX IN ONE Group wordmark"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain max-h-[360px]"
                />
              </div>
              <p className="text-sm text-gray-600 font-body">Primary wordmark</p>
            </div>
            <div className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <Image
                  src="/6in12.svg"
                  alt="SIX IN ONE Group brand mark"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 font-body">Brand mark</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#faf9f9] w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Outcome
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              SIX IN ONE launched with a distinctive brand and a site that mirrors how the group actually works — publishing and entertainment as separate experiences under one identity. SEO sits alongside that design so the work is as discoverable as it is considered.
            </p>
          </div>
        </div>
      </section>

      <CTASectionNew />
    </div>
  );
}
