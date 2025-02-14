import Commitments from "@/components/sections/Commitments";
import Solutions from "@/components/sections/Solutions";
import FaqSummary from "@/components/sections/FaqSummary";
import CallMeSection from "@/components/sections/CallMeSection";
import React from "react";
import HeroCarousel from "@/components/sections/HeroCarousel";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Commitments />
      <CallMeSection />
      <Solutions />
      <FaqSummary />
    </main>
  );
}
