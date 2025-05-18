"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import clsx from "clsx";
import ShinyBtn from "@/components/effects/shiny-btn";

gsap.registerPlugin(ScrollTrigger);

const sections = ["about", "skills"];

export default function HeaderSection() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Animate header in on first mount (after loader)
    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Scroll-triggered hide/show based on scroll direction
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      gsap.to(header, {
        y: scrollingDown ? "-100%" : "0%",
        duration: 0.4,
        ease: "power2.out",
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Highlight active nav link
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md text-white px-6 py-5"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-xl tracking-tighter font-normal">DEEVOE</span>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link
              href="#about"
              className={clsx(
                "transition-all duration-300",
                activeSection === "about" && "underline underline-offset-4"
              )}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={clsx(
                "transition-all duration-300",
                activeSection === "skills" && "underline underline-offset-4"
              )}
            >
              Skills
            </Link>
          </li>
          <li>
            <ShinyBtn text="Contact Me" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
