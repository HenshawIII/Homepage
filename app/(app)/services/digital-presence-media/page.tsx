import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function DigitalPresenceMediaPage() {
  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
              DIGITAL PRESENCE & MEDIA
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-heading leading-tight max-w-4xl">
              Position Your Business for a Global Audience
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-3xl">
              We help businesses present themselves professionally through strategic media, storytelling, and digital campaigns built to perform across platforms.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="/createve.svg"
              alt="Digital Presence & Media"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed">
              Visibility is no longer optional.
              How a business looks, communicates, and shows up digitally directly impacts trust, growth, and opportunity.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed mt-6">
              HIC Tech helps businesses build a digital presence that reflects credibility, confidence, and global readiness — regardless of size.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#faf9f9] w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-12">
            What We Do
          </h2>
          
          <div className="space-y-12">
            {/* Media Strategy */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Media Strategy & Creative Direction
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We define how your brand communicates visually and strategically across digital channels.
              </p>
            </div>

            {/* Digital Advertising */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Digital Advertising & Campaign Assets
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We produce high-quality digital adverts and campaign assets designed to perform across web and social platforms.
              </p>
            </div>

            {/* Brand Storytelling */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Brand Storytelling & Content Systems
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We help businesses tell coherent, compelling stories — building content systems that reinforce identity and trust.
              </p>
            </div>

            {/* Multi-Platform */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Multi-Platform Digital Presence
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We design assets and strategies optimized for global platforms, ensuring consistency and reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Who This Is For
          </h2>
          
          <ul className="space-y-4 max-w-3xl">
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Businesses looking to improve visibility and credibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Brands entering new markets or platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Teams needing professional digital representation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#faf9f9] w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-8">
            Outcome
          </h2>
          
          <ul className="space-y-4 max-w-3xl">
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">A stronger presence.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Clear messaging.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">A brand that looks confident anywhere in the world.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-6">
              Strengthen Your Presence
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to build a professional digital presence? Let's discuss how we can help you stand out globally.
            </p>
            <Button href="#contact" variant="primary" className="w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <CTASectionNew />
    </div>
  );
}

