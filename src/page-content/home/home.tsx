"use client";

import { useState } from "react";
import Loader from "@/components/loader/loader";
import Skills from "./sections/skills";
import HeroSection from "./sections/hero";
import HeaderSection from "./sections/header";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <HeaderSection />
          <HeroSection loading={loading} />
          <Skills />
          <section id="about" className="h-svh bg-black text-white">
            hdjbdwd yyb deghbhik
          </section>
        </>
      )}
    </>
  );
}
