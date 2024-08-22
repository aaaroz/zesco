"use client";
import { FC, ReactElement } from "react";
import {
  CommunitySection,
  CompanySection,
  CtaSection,
  FeaturesSection,
  HeroSection,
} from "./sections";

export const MainModule: FC = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <FeaturesSection />
      <CommunitySection />
      <CtaSection />
    </>
  );
};
