import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function ProductBrandFoundationPage() {
  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
              PRODUCT & BRAND FOUNDATION
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-heading leading-tight max-w-4xl">
              Build the Right Foundation for Your Business
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-3xl">
              We help businesses start with clarity — defining brand identity, product direction, and digital structure that support long-term growth.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="/prod.png"
              alt="Product & Brand Foundation"
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
              Every successful business begins with a strong foundation.
              Without clarity in branding, product direction, and digital setup, growth becomes fragmented and inefficient.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed mt-6">
              At HIC Tech, we help founders and businesses lay the groundwork — aligning identity, strategy, and digital presence so everything that follows is built on purpose.
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
            {/* Brand Identity */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Brand Identity & Digital Branding
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We design brand systems that are clear, credible, and adaptable — ensuring your business communicates confidently across all platforms.
              </p>
            </div>

            {/* Product Strategy */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Product Strategy & Product Management
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We help shape ideas into viable digital products by defining scope, structure, and execution plans that reduce risk and improve outcomes.
              </p>
            </div>

            {/* Website Design */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Website Design & Development
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We build modern, high-performance websites that serve as strong digital touchpoints — designed for clarity, usability, and scale.
              </p>
            </div>

            {/* Business Digital Setup */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Business Digital Setup
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We help businesses set up essential digital tools and infrastructure, creating a seamless starting point for operations and growth.
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
              <span className="text-lg text-gray-700 font-body">Founders starting from scratch</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Businesses refining their identity or product direction</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Teams preparing to scale with structure</span>
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
              <span className="text-lg text-gray-700 font-body">A clear brand.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">A defined product direction.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">A solid digital foundation ready to scale.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-6">
              Start with Clarity
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to build a strong foundation for your business? Let's discuss how we can help you start with clarity and purpose.
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

