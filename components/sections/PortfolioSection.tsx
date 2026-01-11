"use client";

import { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  description: string;
}

export function PortfolioSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const portfolioItems: PortfolioItem[] = [
    {
      title: "E-COMMERCE PLATFORM",
      description: "Built a modern e-commerce website with integrated payment systems, inventory management, and customer dashboards that increased online sales by 45% and streamlined operations.",
    },
    {
      title: "MOBILE APPLICATION",
      description: "Developed a cross-platform mobile app with financial services integration, real-time synchronization, offline capabilities, and seamless user experience that reached 50,000+ active users within the first year.",
    },
    {
      title: "WORKFLOW AUTOMATION",
      description: "Designed and implemented automation systems that integrated multiple business tools, reducing manual processing time by 60% and eliminating human error in critical workflows.",
    },
    {
      title: "PRODUCT STRATEGY",
      description: "Led product management initiatives from concept to launch, defining roadmaps, prioritizing features, and coordinating cross-functional teams to deliver successful digital products on time and within budget.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-[#f0f1f1] w-[95%] mx-auto rounded-xl mb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="space-y-8 mb-12 lg:mb-24">
          {/* Sub-heading */}
          <p className="text-xs sm:text-sm font-semibold    text-gray-600 uppercase tracking-wider font-body">
            PORTFOLIO
          </p>

          {/* Main Description */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 font-body leading-tight">
            At HIC, we believe in delivering measurable results. Here are some success stories showcasing how our tailored consulting solutions have helped businesses overcome challenges, optimize operations, and achieve sustainable growth.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            

            {/* Accordion List */}
            <div className="space-y-2 pt-4">
              {portfolioItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between py-4 text-left group hover:text-gray-900 transition-colors"
                    >
                      <span className={`${isOpen ? 'text-gray-900' : 'text-gray-400'} text-sm sm:text-base font-semibold group-hover:text-gray-900 uppercase tracking-wide font-body transition-colors`}>
                        {item.title}
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <svg
                            className="w-5 h-5 text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                    
                    {/* Dropdown Content */}
                    {isOpen && (
                      <div className="pb-4 animate-in slide-in-from-top-2 duration-200">
                        <p className="text-base text-gray-700 font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full flex justify-center lg:justify-end h-full min-h-[200px] lg:min-h-[400px]">
            <div className="relative lg:w-[80%] w-full   h-full rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src="/hommies.png" // Replace with actual image path
                alt="Portfolio showcase"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

