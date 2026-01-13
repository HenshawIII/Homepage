"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-40 bg-white backdrop-blur-sm border-b border-gray-200 w-[95%] mx-auto rounded-xl">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/HIClogo.png" 
              alt="HIC Tech" 
              width={120} 
              height={40}
              className="h-auto w-auto object-contain scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-[600] translate-y-1">
            <Link
              href="#services"
              className="text-gray-700 hover:text-[#3038cf] transition-colors font-body"
            >
              SERVICES
            </Link>
            <Link
              href="#case-studies"
              className="text-gray-700 hover:text-[#3038cf] transition-colors font-body"
            >
              CASE STUDIES
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-[#3038cf] transition-colors font-body"
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#3038cf] transition-colors font-body"
            >
              BLOG
            </Link>
            
          </div>

<div className=" items-center space-x-4 hidden lg:flex">
            <Button href="#contact" variant="primary">
              CONTACT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <Link
              href="#services"
              className="block text-gray-700 hover:text-[#3038cf] transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="#case-studies"
              className="block text-gray-700 hover:text-[#3038cf] transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              CASE STUDIES
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-[#3038cf] transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-[#3038cf] transition-colors font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Button href="#contact" variant="primary" className="w-full">
              CONTACT
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

