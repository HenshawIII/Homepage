"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";
import { ServicesSection } from "@/components/sections/ServicesSection";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ServicesPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What type of businesses do you work with?",
      answer:
        "We work with businesses of all sizes across different industries, tailoring our approach to each business stage.",
    },
    {
      question: "How long do projects usually take?",
      answer:
        "Timelines depend on scope. Smaller projects may take a few weeks, while more complex work takes longer. We define timelines clearly before starting.",
    },
    {
      question: "Do I need to have everything figured out before starting?",
      answer:
        "No. Many clients come with an idea or challenge. We help clarify direction, scope, and the right next steps before building.",
    },
    {
      question: "Can you work with existing tools or systems?",
      answer:
        "Yes. We often improve, integrate, or build on existing platforms rather than starting from scratch.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Intro Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <p className="text-xs sm:text-sm font-semibold mb-6 text-gray-600 uppercase tracking-wider font-body">
              OUR SERVICES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gray-900 font-heading leading-tight">
              Digital Solutions That Drive Growth
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed text-left">
                We provide comprehensive digital solutions designed to help businesses start strong, scale smart, and compete globally. From brand foundation to intelligent systems, our services work together to create a cohesive digital strategy that drives measurable results.
              </p>
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center">
                <Image
                  src="/TA.png"
                  alt="Services illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <ServicesSection />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - CTA Card */}
            <div className="bg-gray-100 rounded-2xl p-8 sm:p-10 lg:p-12 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 font-heading leading-tight">
                Still Have More Questions?
              </h2>
              <div className="h-px bg-gray-300"></div>
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed">
                If you're curious or need more info, feel free to reach out—we're here to help!
              </p>
              <div className="pt-4">
                <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                  Contact Us Now
                </Button>
              </div>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-2">
              {faqItems.map((item: FAQItem, index: number) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between py-4 text-left group hover:text-gray-900 transition-colors"
                    >
                      <span
                        className={`${
                          isOpen ? "text-gray-900" : "text-gray-400"
                        } text-sm sm:text-base font-semibold group-hover:text-gray-900 uppercase tracking-wide font-body transition-colors`}
                      >
                        {item.question}
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
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASectionNew />
    </div>
  );
}

