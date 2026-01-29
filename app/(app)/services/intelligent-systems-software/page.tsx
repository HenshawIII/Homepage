import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function IntelligentSystemsSoftwarePage() {
  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
              INTELLIGENT SYSTEMS & SOFTWARE
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-heading leading-tight max-w-4xl">
              Systems That Power Growth and Scale
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-3xl">
              We design and build intelligent software systems that help businesses operate efficiently, integrate seamlessly, and scale with confidence.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="/tech.avif"
              alt="Intelligent Systems & Software"
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
              As businesses grow, complexity increases.
              Disconnected tools, manual processes, and rigid systems slow progress.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed mt-6">
              HIC Tech builds intelligent systems that simplify operations — combining custom software, automation, and modern integrations into scalable solutions.
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
            {/* End-to-End Software */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                End-to-End Software & App Development
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We build custom software solutions tailored to business needs — from internal tools to customer-facing platforms.
              </p>
              <ul className="space-y-2 mt-4 ml-4">
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Frontend & backend development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Mobile application development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Web applications & dashboards</span>
                </li>
              </ul>
            </div>

            {/* System Architecture */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                System Architecture & Deployment
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We design systems that are reliable, secure, and scalable — handling deployment, maintenance, and performance optimization.
              </p>
            </div>

            {/* Automation */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Automation & Workflow Optimization
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We streamline operations by reducing repetitive tasks and improving efficiency through intelligent workflows.
              </p>
            </div>

            {/* Integrations */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                Integrations & Emerging Technology
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We connect systems, platforms, and services — enabling businesses to leverage modern technology without unnecessary complexity.
              </p>
            </div>

            {/* SEO & Performance */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                SEO & Performance Optimization
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-3xl">
                We ensure digital platforms are optimized for visibility, speed, and long-term performance.
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
              <span className="text-lg text-gray-700 font-body">Growing businesses with operational complexity</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Teams needing custom software or automation</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Organizations preparing to scale digitally</span>
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
              <span className="text-lg text-gray-700 font-body">Smarter operations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Scalable systems.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
              <span className="text-lg text-gray-700 font-body">Technology that works quietly and effectively in the background.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-6">
              Build Intelligent Systems
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to streamline your operations with intelligent systems? Let's discuss how we can help you scale efficiently.
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

