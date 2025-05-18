"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "React Hook Form",
  "Firebase",
  "Socket.IO",
  "Go (Gin, SQLC)",
  "PostgreSQL",
  "Python",
  "Selenium",
  "Cloudinary",
  "GSAP",
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".skill-item");

    gsap.from(items, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 md:px-20 bg-[#0e0e0e] text-white"
    >
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item text-center py-4 px-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm shadow-sm hover:scale-105 transition-transform duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
