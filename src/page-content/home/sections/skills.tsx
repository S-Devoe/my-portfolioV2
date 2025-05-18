"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

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

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".skill-item") as HTMLElement[];

      items.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        tl.fromTo(
          item,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            filter: "brightness(80%)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "brightness(100%)",
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          }
        ).to(
          item,
          {
            boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            duration: 0.6,
            ease: "power1.out",
            repeat: 1,
            yoyo: true,
          },
          "-=0.6"
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 md:px-20 bg-black text-white"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index + 1}
            className="skill-item text-white text-center py-4 px-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm shadow-lg transition-all duration-500"
            style={{ transformStyle: "preserve-3d" }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
