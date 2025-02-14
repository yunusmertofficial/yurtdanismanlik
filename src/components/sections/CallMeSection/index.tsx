"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import InfoSection from "@/components/InfoSection";

const CallMeSection = () => {
  return (
    <AnimatedSection>
      <section aria-label="Bize Ulaşın">
        <InfoSection
          title="Yurt Danışmanlık Kurumsal Çözümleri"
          description="Bazı sorunların çözümleri kanun ve yönetmeliklerde yazmaz, bu gibi durumlarda Yurt Danışmanlık Kurumsal tecrübesine güvenebilirsiniz."
        >
          <ButtonLink
            href="tel:+905495656868"
            text="Bize Ulaşın"
            additionalClass="animate-bounce"
          />
        </InfoSection>
      </section>
    </AnimatedSection>
  );
};

export default CallMeSection;
