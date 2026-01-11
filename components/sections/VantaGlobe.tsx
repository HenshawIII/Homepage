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
        }

        // Load Vanta.js
        if (!window.VANTA) {
          await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js");
        }

        // Initialize Vanta
        if (window.VANTA && vantaRef.current) {
          vantaEffect.current = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x000000,
            color2: 0x3038cf,
            backgroundColor: 0xfaf9f9,
          });
          hasLoadedRef.current = true;
          setHasLoaded(true);
        } else {
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
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      {/* Fallback Image - shown when Vanta fails to load or hasn't loaded yet */}
      {(!hasLoaded || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#faf9f9]">
          <Image
            src={fallbackImage}
            alt="Globe visualization"
            fill
            className="object-contain p-8"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      )}
      
      {/* Vanta Globe - hidden if error, shown when loaded */}
      <div
        ref={vantaRef}
        className={`w-full h-full min-h-[400px] rounded-lg ${hasError ? 'hidden' : ''}`}
        style={{ backgroundColor: "#faf9f9" }}
      />
    </div>
  );
}

