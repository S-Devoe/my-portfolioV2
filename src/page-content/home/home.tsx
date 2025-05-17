"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Loader from "@/components/loader/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();

      tl.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
      });

      tl.from(
        [headingRef.current, paraRef.current],
        {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div
          ref={containerRef}
          className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center bg-black text-white"
        >
          <h1 ref={headingRef} className="text-5xl font-bold mb-4">
            Welcome to Deevoe’s World
          </h1>
          <p ref={paraRef} className="text-xl max-w-xl text-gray-200">
            I build clean, interactive, fast, and animated web experiences using
            Next.js + GSAP.
          </p>
        </div>
      )}
    </>
  );
}
