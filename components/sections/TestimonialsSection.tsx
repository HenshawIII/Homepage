"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  personImage: string;
  companyLogo?: string;
  companyName?: string;
  backgroundColor: string;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Their team seamlessly integrated with ours, listening closely and adapting to our unique challenges. Their ability to align with our goals and respond with tailored strategies made the entire process smooth and impactful, leading to real progress and lasting improvements.",
      authorName: "Jean Harris",
      authorTitle: "Ops, NovaCore",
      authorImage: "/testimonial-author-1.jpg",
      personImage: "/testP.avif",
      companyLogo: "/lgo.svg",
      companyName: "NovaCore",
      backgroundColor: "bg-[#e3e4fa]", // Light blue - matching Product & Brand Foundation
    },
    {
      quote:
        "Working with HIC Tech transformed our digital infrastructure. Their expertise in intelligent systems and strategic planning helped us scale efficiently. The team's attention to detail and commitment to our success was evident throughout the entire project.",
      authorName: "Michael Chen",
      authorTitle: "CTO, TechFlow Solutions",
      authorImage: "/testimonial-author-2.jpg",
      personImage: "/testP.avif",
      companyLogo: "/lgo.svg",
      companyName: "TechFlow",
      backgroundColor: "bg-[#fef9e7]", // Light yellow - matching Digital Presence & Media
    },
    // {
    //   quote:
    //     "The brand foundation they built for us was exceptional. From identity design to digital presence, every aspect was carefully crafted. Our brand now stands out in the global market, and we've seen significant growth in our digital engagement.",
    //   authorName: "Sarah Johnson",
    //   authorTitle: "Founder, Global Ventures",
    //   authorImage: "/testimonial-author-3.jpg",
    //   personImage: "/testP.avif",
    //   companyLogo: "/logo.avif",
    //   companyName: "Global Ventures",
    // },
    {
      quote:
        "Their automation solutions streamlined our operations dramatically. What used to take days now takes hours. The team's innovative approach to problem-solving and their deep understanding of our industry made all the difference.",
      authorName: "David Martinez",
      authorTitle: "Operations Director, InnovateCorp",
      authorImage: "/testimonial-author-4.jpg",
      personImage: "/testP.avif",
      companyLogo: "/lgo.svg",
      companyName: "InnovateCorp",
      backgroundColor: "bg-[#b5d1fa]/50", // Light purple - matching Intelligent Systems & Software
    },
  ];

  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-8 sm:py-12 lg:py-16 bg-[#faf9f9] rounded-b-xl w-[95%] mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 8-column grid system */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-12 items-center justify-center">
          {/* Left Column - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sub-heading */}
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body text-center lg:text-left">
              TESTIMONIALS
            </p>

            {/* Main Title */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-heading leading-tight text-center lg:text-left">
              What they say
              <br />
              about Us?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Here's what they shared about their experience working with our team.
            </p>

            {/* About Us Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="primary" href="/">
                ABOUT US
              </Button>
            </div>

            {/* Navigation Arrows - Desktop only */}
            <div className="hidden lg:flex items-center gap-3 pt-4">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - 6 columns */}
          <div className="lg:col-span-6">
            <TestimonialCard testimonial={currentTestimonial} />
            
            {/* Navigation Arrows - Mobile only */}
            <div className="flex lg:hidden items-center justify-center gap-3 pt-6">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

