"use client";

import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <ExperienceSection />
    </>
  );
}
