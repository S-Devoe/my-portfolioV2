// components/Loader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Particles from "../effects/particles-effect";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Animate in the "Deevoe" text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.5, ease: "bounce.in" },
      { opacity: 1, scale: 1, duration: 5.2, ease: "power3.out" }
    );

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCounter(current);

      if (current >= 100) {
        clearInterval(interval);

        // Animate "Deevoe" text out
        gsap.to(textRef.current, {
          opacity: 0,
          scale: 8.0,
          duration: 1.8,
          ease: "power2.inOut",
        });

        // Fade out loader after short delay
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
          onComplete,
        });
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <section
      ref={loaderRef}
      className="fixed inset-0 bg-white text-black z-[100] flex flex-col items-center justify-center"
    >
      <Particles
        particleColors={["#000000", "#000000"]}
        particleCount={300}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute inset-0 z-0 "
      />
      <h1 ref={textRef} className="text-5xl font-bold tracking-tighter mb-4">
        DeeVoe
      </h1>
      <p className="text-7xl absolute bottom-4 right-4">{counter}%</p>
    </section>
  );
}
