"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  includes: string[];
  slug: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ServicesPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const services: ServiceCard[] = [
    {
      title: "Product & Brand Foundation",
      description:
        "We help businesses start right by building clear brands and solid digital foundations. From identity and product strategy to websites and early-stage digital tools, we ensure your business launches with clarity, structure, and direction.",
      image: "/prod.png",
      backgroundColor: "bg-[#b5d1fa]/50",
      includes: [
        "Brand identity & digital branding",
        "Product strategy & product management",
        "Website design & development",
        "Business digital setup & tools",
      ],
      slug: "product-brand-foundation",
    },
    {
      title: "Digital Presence & Media",
      description:
        "We help businesses present themselves professionally on a global stage. Through strategic media, storytelling, and high-quality digital campaigns, we ensure your brand looks credible, confident, and competitive — across any platform.",
      image: "/createve.svg",
      backgroundColor: "bg-[#eaf1fe]",
      includes: [
        "Media strategy & creative direction",
        "High-end digital advertisements",
        "Brand storytelling & content systems",
        "Campaign assets for web and social platforms",
      ],
      slug: "digital-presence-media",
    },
    {
      title: "Intelligent Systems & Software",
      description:
        "We design and build the systems that power modern businesses. From custom software and mobile applications to automation, integrations, and emerging technology, we create solutions that scale as your business grows.",
      image: "/tech.avif",
      backgroundColor: "bg-[#e3e4fa]",
      includes: [
        "End-to-end software & app development",
        "Frontend, backend & mobile applications",
        "System integrations & deployment",
        "Automation & workflow optimization",
        "Blockchain & stablecoin integration",
        "SEO, performance & infrastructure optimization",
      ],
      slug: "intelligent-systems-software",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "What Services Do You Offer?",
      answer:
        "We offer three core service areas: Product & Brand Foundation (branding, product strategy, websites), Digital Presence & Media (media strategy, creative campaigns, content systems), and Intelligent Systems & Software (custom software, mobile apps, automation, integrations). Each service is designed to help businesses at different stages of growth.",
    },
    {
      question: "What Is the Project Timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Typically, brand foundation projects take 4-8 weeks, digital presence campaigns range from 2-6 weeks, and software development projects can take 8-16 weeks or more depending on requirements. We provide detailed timelines during the initial consultation and keep you updated throughout the project.",
    },
    {
      question: "Do You Offer Ongoing Support?",
      answer:
        "Yes, we offer ongoing support and maintenance packages for all our services. This includes technical support, content updates, performance monitoring, and strategic consulting. We believe in building long-term partnerships with our clients to ensure continued success and growth.",
    },
    {
      question: "How Do You Ensure Quality?",
      answer:
        "Quality is at the core of everything we do. We follow industry best practices, conduct thorough testing, and maintain clear communication throughout the project. Our team includes experienced professionals who stay updated with the latest technologies and design trends. We also involve clients in review processes to ensure deliverables meet expectations.",
    },
    {
      question: "Can I Request Custom Features?",
      answer:
        "Absolutely! We specialize in custom solutions tailored to your specific needs. Whether it's a unique feature for your software, a custom design element, or a specialized integration, we work with you to understand your requirements and deliver solutions that fit your business perfectly.",
    },
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

      {/* Service Cards Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.backgroundColor} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  {/* Image */}
                  <div className="relative w-full h-[200px] sm:h-[250px] rounded-xl overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-base text-gray-700 font-body leading-relaxed">
                      {service.description}
                    </p>

                    {/* Includes List */}
                    <div className="space-y-3 pt-4">
                      <h3 className="text-sm font-semibold text-gray-900 font-body uppercase tracking-wide">
                        Includes
                      </h3>
                      <ul className="space-y-2">
                        {service.includes.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-700 font-body text-sm sm:text-base flex items-start"
                          >
                            <span className="text-[#216299] mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold uppercase tracking-wide rounded-xl px-6 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              {faqItems.map((item, index) => {
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

