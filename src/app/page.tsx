"use client";

import React, {  } from "react";
import { HeroSections } from "@/components";
import Review from "@/components/Review";

const Home = () => {
  return (
    <>
      <div className="scroll-container relative">
        <div  className="scroll-section">
          <HeroSections />
        </div>

        <div className="scroll-section">
          <Review />
        </div>
      </div>
    </>
  );
};

export default Home;