// components/Loader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Animate in the "Deevoe" text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
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
          duration: 0.8,
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
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-white text-black z-[100] flex flex-col items-center justify-center"
    >
      <h1 ref={textRef} className="text-5xl font-bold tracking-tighter mb-4">
        DeeVoe
      </h1>
      <p className="text-7xl absolute bottom-4 right-4">{counter}%</p>
    </div>
  );
}
