"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaGlobeProps {
  fallbackImage?: string;
}

export function VantaGlobe({ fallbackImage = "/globb.svg" }: VantaGlobeProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const hasLoadedRef = useRef(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Load scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        // Load Three.js first
        if (!window.THREE) {
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
          // Wait a bit for Three.js to fully initialize
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Load Vanta.js
        if (!window.VANTA) {
          await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js");
          // Wait for Vanta to fully initialize
          await new Promise(resolve => setTimeout(resolve, 200));
        }

        // Wait for GLOBE to be available with retries
        let retries = 10;
        while (retries > 0 && (!window.VANTA || !window.VANTA.GLOBE)) {
          await new Promise(resolve => setTimeout(resolve, 100));
          retries--;
        }

        // Initialize Vanta
        if (window.VANTA && window.VANTA.GLOBE && vantaRef.current) {
          vantaEffect.current = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale:0.5,
            scaleMobile: 0.5,
            color: 0x5d5f62,
            color2: 0x3038cf,
            backgroundColor: 0xfaf9f9,
           
          });
          hasLoadedRef.current = true;
          setHasLoaded(true);
        } else {
          console.error("VANTA.GLOBE is not available");
          setHasError(true);
        }
      } catch (error) {
        console.error("Error loading Vanta.js:", error);
        setHasError(true);
      }
    };

    // Set a timeout to show fallback if Vanta doesn't load within 5 seconds
    const timeout = setTimeout(() => {
      if (!hasLoadedRef.current) {
        setHasError(true);
      }
    }, 5000);

    initVanta();

    // Cleanup function
    return () => {
      clearTimeout(timeout);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[85vh]">
      {/* Fallback Image - shown when Vanta fails to load or hasn't loaded yet */}
      {(!hasLoaded || hasError) && (
        <div className="absolute inset-0 bg-[#faf9f9] md:bg-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:top-auto md:left-auto md:translate-x-0 bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-20 lg:right-16 xl:bottom-28 xl:right-20 p-2 md:p-8">
            <Image
              src={fallbackImage}
              alt="Globe visualization"
              width={600}
              height={600}
              className="object-contain w-[95vw] max-w-none sm:w-[400px] sm:max-w-[400px] md:w-[400px] md:max-w-[400px] lg:w-[60vw] lg:max-w-none xl:w-[400px] xl:max-w-[400px] h-auto"
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 400px, (max-width: 1536px) 60vw, 400px"
            />
          </div>
        </div>
      )}
      
      {/* Vanta Globe - hidden if error, shown when loaded */}
      <div
        ref={vantaRef}
        className={`w-full h-full ${hasError ? 'hidden' : ''}`}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}

