"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Particles from "@/components/effects/particles-effect";

export default function HeroSection({ loading }: { loading: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.fromTo(
          containerRef.current,
          { opacity: 0, y: "100vh" },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          }
        );

        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );

        tl.fromTo(
          paraRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );
      });

      if (paraRef.current) {
        const words = paraRef.current.querySelectorAll("span");

        gsap.fromTo(
          words,
          {
            opacity: 1,
            y: 0,
            rotation: 0,
          },
          {
            opacity: 0,
            y: 100,
            rotation: gsap.utils.random(-90, 90, 1),
            stagger: 0.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: paraRef.current,
              start: "top center+=100",
              end: "bottom top",
              toggleActions: "play none none none",
            },
          }
        );
      }

      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-svh px-6 py-20 flex flex-col items-center justify-center text-center opacity-0 translate-y-10 bg-black text-white"
    >
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={700}
        particleSpread={20}
        speed={0.25}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute inset-0 z-0 "
      />
      <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I&apos;m{" "}
        <span className="text-teal-400 inline-block">Lagbalu Lateef,</span>{" "}
        <br /> but you can call me
        <br />
        <span className="text-white">Deevoe</span>.
      </h1>
      <p ref={paraRef} className="text-xl max-w-3xl text-gray-200">
        I&apos;m a full-stack engineer with over {yearsOfExperience} years of
        hands-on experience building scalable web apps, real-time systems, and
        sleek user interfaces. I thrive at the intersection of frontend finesse
        and backend performance — turning ideas and Figma designs into polished,
        production-ready products.
      </p>
    </div>
  );
}
