"use client";

import { Button } from "@/components/ui/Button";
import { CTASectionNew } from "@/components/sections/CTASectionNew";
import Image from "next/image";
import { useState, useRef } from "react";

export default function AboutPage() {
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

  // Services data for the stacked cards
  const services = [
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
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Henshaw Immanuel",
      role: "CTO",
      image: "/cTnnn.png", // Placeholder - replace with actual image
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )},
        { platform: "Twitter", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        )},
        { platform: "Facebook", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        )},
        { platform: "Instagram", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        )},
      ],
    },
    {
      name: "Jane Smith",
      role: "Mobile Lead",
      image: "/expert.png", // Placeholder - replace with actual image
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )},
        { platform: "Twitter", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        )},
        { platform: "Instagram", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        )},
      ],
    },
    {
      name: "Mike Johnson",
      role: "Blockchain Lead",
      image: "/expert.png", // Placeholder - replace with actual image
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )},
        { platform: "Twitter", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        )},
        { platform: "GitHub", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )},
      ],
    },
    {
      name: "Sarah Williams",
      role: "Design Lead",
      image: "/expert.png", // Placeholder - replace with actual image
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )},
        { platform: "Instagram", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        )},
        { platform: "Dribbble", url: "#", icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.168 5.651c1.771 2.024 2.832 4.623 2.832 7.349 0 .891-.116 1.76-.323 2.587-1.053-.169-2.162-.314-3.262-.499-.218-.597-.455-1.192-.708-1.782 1.828-.348 3.376-1.043 4.518-1.947-.906-1.23-2.001-2.33-3.23-3.237-.348.455-.723.887-1.124 1.295-.304-.73-.649-1.444-1.033-2.139 1.235-.541 2.33-1.269 3.23-2.147zM12 2.4c.721 0 1.422.089 2.096.254-.826 1.318-1.487 2.729-1.96 4.208-1.165.198-2.388.333-3.648.399.747-1.568 1.712-3.028 2.865-4.356C10.312 2.456 11.15 2.4 12 2.4zM7.395 3.098c1.165 1.351 2.133 2.831 2.869 4.414-1.736.282-3.477.675-5.206 1.169.62-2.317 2.115-4.352 4.059-5.883-.237.232-.465.478-.684.735-.097-.151-.196-.3-.299-.445C8.14 2.842 7.768 2.963 7.395 3.098zm-4.49 6.8c1.787-.516 3.583-.917 5.368-1.201.253.621.492 1.248.715 1.88-1.755.195-3.483.469-5.163.817.151-.484.325-.961.522-1.431-.18-.02-.358-.045-.536-.072-.023.298-.05.596-.082.893-.005.018-.008.036-.012.054.194.047.389.097.586.15zM2.4 12c0-.788.092-1.558.266-2.298 1.781-.358 3.601-.645 5.448-.855.218.671.42 1.348.605 2.029-.006.013-.01.026-.015.039-1.782.363-3.537.803-5.253 1.314C3.172 12.556 2.4 12.307 2.4 12zm1.39 2.192c1.766-.527 3.57-.977 5.4-1.347.015.05.031.1.047.149.264.871.51 1.748.735 2.629-1.262.402-2.482.926-3.64 1.56-.729-1.029-1.35-2.142-1.85-3.33.082-.32.173-.638.273-.95.007-.006.015-.01.022-.016-.002.05-.007.099-.012.148-.04.31-.073.621-.097.935.162.06.325.117.49.172.023-.21.049-.42.077-.629.008-.056.015-.11.025-.166zm4.36 4.943c.217.722.42 1.45.608 2.182-1.401-.035-2.761-.202-4.063-.487.937-2.217 2.598-4.103 4.771-5.457.304.746.594 1.498.867 2.254.488 1.213.873 2.461 1.15 3.734-.801-.147-1.582-.346-2.333-.593-.024-.136-.048-.272-.071-.408-.081-.483-.15-.969-.206-1.457-.012-.104-.022-.209-.033-.314-.187.024-.373.051-.558.08.197.397.405.788.624 1.173.03.052.06.103.091.154zm2.328 1.856c-.262-1.225-.632-2.419-1.107-3.57.014-.009.029-.018.043-.027 1.974.98 3.651 2.418 4.87 4.151-1.196.368-2.464.583-3.776.629-.015-.056-.03-.113-.043-.17-.064-.283-.124-.567-.18-.852-.015-.075-.027-.15-.04-.225-.004-.016-.008-.033-.012-.049-.138.041-.277.08-.416.117.001.01.003.02.005.03.012.047.025.093.037.14.056.225.115.449.177.671.01.037.02.074.031.111zm6.12-1.662c.472-.119.936-.258 1.392-.416.084.877.127 1.766.127 2.665 0 .91-.048 1.802-.14 2.677-1.169-.028-2.31-.172-3.408-.424.506-1.16.878-2.354 1.114-3.57.051.027.103.053.155.078.056-.298.11-.598.161-.901.016-.091.03-.182.043-.274.016-.1.03-.2.042-.301.004-.024.01-.048.013-.072.139.017.278.037.416.059zm5.535-2.215c-1.71-.429-3.454-.795-5.222-1.094.185-.679.354-1.364.508-2.053 1.042.173 2.103.315 3.18.424.119-.586.2-1.184.241-1.791 2.398.868 4.386 2.402 5.804 4.419-.328.296-.68.574-1.054.832-.61-1.102-1.367-2.116-2.254-3.02-.015-.015-.03-.03-.046-.044-.277.34-.57.669-.88.985-.032.032-.064.064-.096.095-.453.452-.932.88-1.433 1.284-.018.014-.035.027-.053.041-.015.011-.03.022-.045.034-.324.254-.657.497-.997.731-.004.003-.007.006-.011.009-.219.154-.443.3-.671.44-.02.012-.04.024-.06.035z"/>
          </svg>
        )},
      ],
    },
  ];

  

  // Team Members Carousel Component
  type TeamMember = {
    name: string;
    role: string;
    image: string;
    socialLinks: Array<{ platform: string; url: string; icon: React.ReactElement }>;
  };
  
  function TeamMembersCarousel({ teamMembers }: { teamMembers: TeamMember[] }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToCard = (direction: 'left' | 'right') => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 24; // 1.5rem gap (gap-6)
      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        if (currentIndex === 0) {
          // Go to last
          const lastIndex = teamMembers.length - 1;
          container.scrollTo({
            left: lastIndex * scrollAmount,
            behavior: 'smooth'
          });
          setCurrentIndex(lastIndex);
        } else {
          container.scrollTo({
            left: (currentIndex - 1) * scrollAmount,
            behavior: 'smooth'
          });
          setCurrentIndex(currentIndex - 1);
        }
      } else {
        if (currentIndex === teamMembers.length - 1) {
          // Go to first
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
          setCurrentIndex(0);
        } else {
          container.scrollTo({
            left: (currentIndex + 1) * scrollAmount,
            behavior: 'smooth'
          });
          setCurrentIndex(currentIndex + 1);
        }
      }
    };

    return (
      <div className="relative">
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-12 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="group relative w-full rounded-2xl overflow-hidden bg-gray-200 aspect-[3/4]">
                {/* Member Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Overlay with Social Links */}
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-4 px-4">
                    {member.socialLinks.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-colors duration-200"
                        aria-label={social.platform}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Member Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 font-heading">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-body mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scrollToCard('left')}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-200"
            aria-label="Previous member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollToCard('right')}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-200"
            aria-label="Next member"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f1f1]">
      {/* Intro Section */}
      <section className="py-12 sm:py-16  bg-gradient-to-tr from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <p className="text-xs sm:text-sm font-semibold mb-6 text-gray-600 uppercase tracking-wider font-body">
              ABOUT HIC TECH
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-gray-900 font-heading leading-tight">
              WHY WE EXIST
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
              <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed text-left ">
                Across Africa, talented entrepreneurs and growing businesses are building powerful ideas — yet many struggle to access the technology needed to scale. Complex systems, disconnected tools, and high costs often stand in the way of progress. Branding, software, automation, and media are treated as separate efforts, leading to inefficiency and slow growth.
              </p>
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center">
                <Image
                  src="/TA.png"
                  alt="Globe illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] flex lg:justify-start justify-center order-2 lg:order-1">
                <Image
                  src="/purpp.svg"
                  alt="Icon illustration"
                  width={400}
                  height={400}
                  className="object-contain w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-lg sm:text-xl text-gray-700 font-body leading-relaxed text-left lg:-translate-y-4 xl:translate-y-0 order-1 lg:order-2">
                HIC Tech was founded to solve this.

                We exist to bring advanced technology closer to home — simplifying innovation and making it accessible to businesses of all sizes. Our role is to bridge the gap between ideas and execution, between local ambition and global opportunity.
              </p>
            </div>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-12 mt-8 md:mt-0 lg:mt-8 xl:mt-16 mx-auto lg:max-w-7xl md:translate-x-8 xl:translate-x-16">
              {/* Card 1 */}
              <div className="bg-transparent rounded-2xl p-6 sm:p-8 border-b border-gray-200 md:border-b-0 md:border-r text-center md:text-left">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8 font-body">
                  CLIENT SATISFACTION
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-heading">
                  99%
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-transparent rounded-2xl p-6 sm:p-8 border-b border-gray-200 md:border-b-0 md:border-r text-center md:text-left">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8 font-body">
                  YEARS OF EXPERIENCE
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-heading">
                  5+
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-transparent rounded-2xl p-6 sm:p-8 text-center md:text-left">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8 font-body">
                  PRODUCTS DELIVERED
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-heading">
                  40+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#faf9f9] via-[#faf9f9] to-blue-50 w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Sub-heading */}
              <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
                OUR APPROACH
              </p>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading leading-tight">
                Your Success, Our Priority.
              </h2>

              {/* Descriptive Paragraph */}
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed">
                We're dedicated to empowering African businesses with intelligent systems, strategic insight, and modern digital tools. We believe in clarity, collaboration, and delivering solutions that enable sustainable growth.
              </p>

              {/* Four Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-normal text-gray-900 font-heading mb-2">
                    Start with Clarity
                  </h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">
                    Build strong foundations with clear brand identity, product direction, and digital structure.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-normal text-gray-900 font-heading mb-2">
                    Scale with Intelligence
                  </h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">
                    Design systems that power operations and grow seamlessly as your business expands.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-normal text-gray-900 font-heading mb-2">
                    Engage with Purpose
                  </h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">
                    Build meaningful relationships through strategic media and authentic brand storytelling.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-normal text-gray-900 font-heading mb-2">
                    Compete Globally
                  </h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">
                    Position your brand on the global stage with tools and presence that match international standards.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                  Start a Project
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 85%, 100% 100%, 27% 100%, 27% 73%, 0 73%)',
                  borderRadius: '2rem'
                }}
              >
                <Image
                  src="/expert.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Trusted Partners Section */}
       <section className="py-16 bg-gradient-to-tr from-[#eaf1fe] via-[#faf9f9] to-[#d7e5f9] w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-6 text-center">
              <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-6 shadow-sm">
                <p className="text-sm sm:text-base font-semibold text-gray-700 font-body">
                  Trusted Partners Worldwide for Success
                </p>
              </div>
            </div>

            {/* Scrolling Logos */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling container */}
              <div className="flex items-center gap-6 lg:gap-8 animate-scroll-left whitespace-nowrap">
                {/* Duplicate logos for seamless infinite scroll */}
                {[...Array(3)].map((_, repeatIndex) => (
                  <div key={repeatIndex} className="flex items-center gap-6 lg:gap-8 shrink-0">
                    {logoIcons.map((logo, index) => (
                      <div key={`${repeatIndex}-${index}`} className="flex items-center gap-6 lg:gap-8 shrink-0">
                        <div className="flex items-center gap-3 text-gray-700 font-body text-base sm:text-lg lg:text-xl shrink-0 whitespace-nowrap">
                          <div className="text-gray-600 shrink-0">{logo.icon}</div>
                          <span className="font-medium">{logo.name}</span>
                        </div>
                        {/* Separator dot - show between all logos */}
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-white w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading text-center mb-4">
              Discover what sets us apart
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-body text-center max-w-2xl mx-auto">
              Explore the unique features and advantages that distinguish us from the competition, delivering exceptional value and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#3038cf] rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section with Stacked Cards */}
      <section className="relative py-8 w-[95%] mx-auto rounded-t-xl bg-[#faf9f9] mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
          {/* Sub-heading */}
          <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body mb-4">
            OUR SERVICES
          </p>
          {/* Main Heading */}
          <h2 className="text-lg lg:text-3xl font-normal text-gray-900 text-center md:text-left font-heading max-w-xl">
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
                className={`${service.backgroundColor} sticky top-24 w-[95%] mx-auto rounded-2xl mb-12 sm:mb-8 pb-12 sm:pb-8 lg:pb-0 pt-8 md:pt-0 overflow-hidden transition-all duration-300`}
                style={{ zIndex: index + 1 }}
              >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Image Column - First (left on desktop) */}
                    <div className="relative w-full h-[200px] sm:h-[250px] lg:h-full lg:min-h-[400px] order-2 md:order-1">
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
                    <div className="flex flex-col space-y-4 sm:space-y-6 order-1 md:order-2 h-full">
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

      {/* Team Members Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white w-[95%] mx-auto rounded-xl mb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider font-body">
                Team Members
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-heading">
              Meet Our Expert Members
            </h2>
          </div>

          <TeamMembersCarousel teamMembers={teamMembers} />
        </div>
      </section>

      
      <CTASectionNew />
    </div>
  );
}
