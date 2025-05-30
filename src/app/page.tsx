"use client";

import React from "react";
import { HeroSections } from "@/components";
import Review from "@/components/Review";

const Home = () => {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
      <div className="h-screen w-full snap-start">
        <HeroSections />
      </div>
      <div className="h-screen w-full snap-start">
        <Review />
      </div>
      <div className="h-screen w-full snap-start">
        <HeroSections />
      </div>
    </div>
  );
};

export default Home;
