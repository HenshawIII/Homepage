"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  includes: string[];
}

export function ServicesSection() {
  const services: ServiceCard[] = [
    {
      title: "Product & Brand Foundation",
      description:
        "We help businesses start right by building clear brands and solid digital foundations. From identity and product strategy to websites and early-stage digital tools, we ensure your business launches with clarity, structure, and direction.",
      image: "/prod.png", // Replace with actual image path
      backgroundColor: "bg-[#b5d1fa]/50", // Light yellow background matching the design
      includes: [
        "Brand identity & digital branding",
        "Product strategy & product management",
        "Website design & development",
        "Business digital setup & tools",
      ],
    },
    
    {
      title: "Digital Presence & Media",
      description:
        "We help businesses present themselves professionally on a global stage. Through strategic media, storytelling, and high-quality digital campaigns, we ensure your brand looks credible, confident, and competitive — across any platform.",
      image: "/createve.svg", // Replace with actual image path
      backgroundColor: "bg-[#eaf1fe]", // Light blue background
      includes: [
        "Media strategy & creative direction",
        "High-end digital advertisements",
        "Brand storytelling & content systems",
        "Campaign assets for web and social platforms",
      ],
    },
    {
      title: "Intelligent Systems & Software",
      description:
        "We design and build the systems that power modern businesses. From custom software and mobile applications to automation, integrations, and emerging technology, we create solutions that scale as your business grows.",
      image: "/tech.avif", // Replace with actual image path
      backgroundColor: "bg-[#e3e4fa]", // Light purple background matching the design
      includes: [
        "End-to-end software & app development",
        "Frontend, backend & mobile applications",
        "System integrations & deployment",
        "Automation & workflow optimization",
        "Blockchain & stablecoin integration",
        "SEO, performance & infrastructure optimization",
      ],
    }
  ];

  return (
    <section id="services" className="relative py-8 w-[95%] mx-auto rounded-t-xl  bg-[#faf9f9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
        {/* Sub-heading */}
        <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body mb-4">
          OUR SERVICES
        </p>
        {/* Main Heading */}
        <h2 className="text-lg lg:text-3xl font-normal text-gray-900 font-heading max-w-xl">
          Digital solutions to build and scale your business
        </h2>
      </div>
      {/* Container for sticky scroll effect */}
      <div className="relative">
        {services.map((service, index) => {
          const isLast = index === services.length - 1;
          return (
            <div
              key={index}
              className={` ${service.backgroundColor} sticky top-24 w-[95%] mx-auto rounded-2xl mb-12 sm:mb-8 pb-12 sm:pb-8 lg:pb-0 overflow-hidden transition-all duration-300`}
              style={{ zIndex: index + 1 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Image Column - First (left on desktop) */}
                  <div className="relative w-full h-[200px] sm:h-[250px] lg:h-full lg:min-h-[400px] order-1">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Text Content Column - Second (right on desktop) */}
                  <div className="flex flex-col space-y-4 sm:space-y-6 order-2 h-full">
                    <div className="space-y-4 sm:space-y-6">
                      <h2 className="text-lg lg:text-3xl font-normal text-gray-900 font-heading leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Includes List */}
                      <div className="space-y-3 pt-4">
                        <h3 className="text-sm font-semibold text-gray-900 font-body uppercase tracking-wide">
                          Includes
                        </h3>
                        <ul className="space-y-2">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-700 font-body text-base flex items-start">
                              <span className="text-[#216299] mr-2 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="mt-auto pt-6 lg:pt-8">
                      <div className="w-full lg:w-auto lg:flex lg:justify-end lg:-translate-y-4">
                        <Button 
                          href="#contact" 
                          variant="secondary"
                          className="w-full lg:w-auto"
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

