"use client";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/Videos/HomePageVideoClips.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay removed */}
      </div>

      <div className="absolute bottom-10 left-10 z-10 text-left max-w-xl px-4">
        <p
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Leave it to us, We know the right way forward.
        </p>
      </div>

      {/* Scroll Indicator */}
      {/*<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">*/}
      {/*  <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">*/}
      {/*    <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce" />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
}
