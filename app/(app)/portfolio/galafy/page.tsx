import Image from "next/image";
import Link from "next/link";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function GalafyPage() {
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
              Galafy
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-4xl">
              Galafy is a live fintech product that digitises event gifting — spraying money at celebrations — through wallets, transfers, and real-time participation. We built the mobile app for hosts and guests, and an admin portal to run the platform day to day.
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
                  September 5, 2024
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Category
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  Mobile Application
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  Industry
                </p>
                <p className="text-base sm:text-lg text-gray-900 font-body">
                  FinTech • Cultural Services
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide font-body">
                  App Stores
                </p>
                <div className="flex flex-col gap-1">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.galafy.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-[#3038cf] font-body hover:underline"
                  >
                    Google Play
                  </Link>
                  <Link
                    href="https://apps.apple.com/app/my-galafy/id6755791850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-[#3038cf] font-body hover:underline"
                  >
                    App Store
                  </Link>
                </div>
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
              Galafy turns a familiar celebration ritual into a trusted digital experience. Hosts run events, guests gift in real time, and the platform handles onboarding, wallets, and settlements behind the scenes — with an operations portal for the team running it.
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
              We owned the product from discovery through launch: the consumer mobile app, a NestJS backend with banking-provider integrations, and an admin portal for KYC, events, users, and transaction monitoring. The stack supports wallet funding, transfers, real-time event activity, and the operational workflows needed to keep a live fintech product compliant and running.
            </p>
            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-gray-900 font-body uppercase tracking-wide">
                Scope:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Mobile Application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Admin Portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Backend Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#216299] mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700 font-body">Financial Integrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Portal Screenshots */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight mb-4">
            Admin Portal
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-4xl mb-10">
            The operations dashboard for secure access, platform metrics, events, and transaction oversight.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-2xl bg-gray-200 border border-gray-200 shadow-sm">
                <Image
                  src="/galafy-admin-login.png"
                  alt="Galafy admin login"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 font-body">Admin login</p>
            </div>
            <div className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-2xl bg-gray-200 border border-gray-200 shadow-sm">
                <Image
                  src="/galafy-admin-dashboard.png"
                  alt="Galafy admin dashboard"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 font-body">Admin dashboard</p>
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
              Galafy launched as a live product on the App Store and Google Play, with a secure admin portal for day-to-day operations. The platform supports real-time digital gifting while remaining culturally familiar — and gives the team the tools to monitor activity, users, and transactions at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASectionNew />
    </div>
  );
}
