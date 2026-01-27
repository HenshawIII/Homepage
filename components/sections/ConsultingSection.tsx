"use client";

import { useState } from "react";

export function ConsultingSection() {
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);

  // Logo icons - using simple SVG icons as placeholders
  const logoIcons = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      ),
      name: "Graffiki",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      ),
      name: "FOSAN",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
      name: "AOM",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ),
      name: "Chainfren",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      ),
      name: "Galafy",
    },
  ];

  return (
    <section className="relative bg-[#f0f1f1] py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Name */}
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
            HIC TECH BUSINESS INTELLIGENCE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start mb-18 lg:mb-36">
          {/* Left Column - Main Heading */}
          <div className="space-y-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 font-body leading-normal max-w-xl">
            From brand foundation and software systems to automation, media, and emerging technology integrations, we build digital solutions that help businesses compete globally.
            </h2>
          </div>

          {/* Right Column - Client Logos */}
          <div className="relative overflow-hidden lg:justify-end">
            {/* Gradient overlay for left edge blur */}
            <div className="absolute left-0 top-0 bottom-0 w-10 lg:w-20 bg-gradient-to-r from-[#f0f1f1] via-[#f0f1f1]/30 to-transparent z-10 pointer-events-none backdrop-blur-xs"></div>
            
            {/* Scrolling container */}
            <div className="flex items-center gap-4 animate-scroll-left whitespace-nowrap">
              {/* Duplicate logos for seamless infinite scroll */}
              {[...Array(3)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex items-center gap-4 shrink-0">
                  {logoIcons.map((logo, index) => (
                    <div
                      key={`${repeatIndex}-${index}`}
                      className="flex items-center gap-2 text-gray-700 font-body text-sm sm:text-base shrink-0 whitespace-nowrap"
                    >
                      <div className="text-gray-600 shrink-0">{logo.icon}</div>
                      <span>{logo.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8 font-body">
              CLIENT SATISFACTION
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-heading">
              99%
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8 font-body">
              YEARS OF COMBINED EXPERIENCE
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-heading">
              5+
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 relative">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8 font-body">
              DIGITAL PRODUCTS DELIVERED
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-heading">
              40+
            </p>
          </div>
        </div>
      </div>

     
      
    </section>
  );
}

