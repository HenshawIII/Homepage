import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}

export default function PortfolioPage() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Grafiki",
      description: "A creative agency focused on African storytelling through design and digital experiences. We designed and developed a modern, responsive website that reflected Grafiki's creative direction and positioned the agency professionally online, while supporting customer service communications through automation.",
      image: "/grafP.png",
      slug: "grafiki",
      category: "Software Architecture",
    },
    {
      title: "AOM Industries",
      description: "A multi-industry company operating across petroleum haulage, real estate, and logistics. We built a corporate website that unified AOM's diverse business units under a single, coherent digital identity, implemented intelligent customer service systems, and optimized the platform for search visibility.",
      image: "/aomPr.png",
      slug: "aom-industries",
      category: "Business Automation",
    },
    {
      title: "Chainfren",
      description: "A Web3 company focused on driving blockchain adoption through accessible digital products and services. We developed a modern website and built a blockchain-powered streaming platform that supports decentralized content delivery, aligning with blockchain principles while remaining usable and scalable.",
      image: "/chainPe.png",
      slug: "chainfren",
      category: "Software Development",
    },
    {
      title: "Galafy",
      description: "A mobile platform designed to digitize the cultural practice of spraying money at events — blending tradition with modern financial systems. We engineered an extensive backend infrastructure, developed a mobile application for users, and built a robust admin dashboard for managing operations and monitoring transactions.",
      image: "/galaP.png",
      slug: "galafy",
      category: "Mobile Application",
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6 overflow-hidden">
        <div className="absolute -bottom-30 -right-[5%] -z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[400px]">
      <Image src={'/shape6.svg'} alt="rand" fill className="object-contain opacity-[0.8]"/>
     </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
              PORTFOLIO
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-heading leading-tight max-w-4xl">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed max-w-3xl">
              At HIC, we believe in delivering measurable results. Here are some success stories showcasing how our tailored solutions have helped businesses overcome challenges, optimize operations, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Items Section */}
      <section className="py-12 sm:py-16 lg:py-20 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {portfolioItems.map((item, index) => (
              <Link
                key={index}
                href={`/portfolio/${item.slug}`}
                className="group block w-full"
              >
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image Section - Full Width */}
                  <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="100vw"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 sm:p-10 lg:p-12 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-semibold text-[#3038cf] uppercase tracking-wide font-body">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between md:gap-0">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight group-hover:text-[#3038cf] transition-colors">
                        {item.title}
                      </h2>
                      <span className="text-base font-semibold text-gray-900 font-body uppercase tracking-wide group-hover:text-[#3038cf] transition-colors inline-flex items-center gap-2 shrink-0">
                        View Case Study
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASectionNew />
    </div>
  );
}
