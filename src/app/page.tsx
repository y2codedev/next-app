"use client";

import React, { useState, useEffect, useRef } from "react";
import { HeroSections } from "@/components";
import Review from "@/components/Review";

const Home = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const sectionRefs = useRef([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref.current === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);


  return (
    <>
      <div className="scroll-container snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth relative">
        <div
          ref={sectionRefs.current[0]}
          className="scroll-section snap-start h-screen w-full shrink-0 flex items-center justify-center transition-all duration-[800ms] ease-in-out animate-fadeIn"
        >
          <HeroSections />
        </div>
         <div
          ref={sectionRefs.current[1]}
          className="scroll-section snap-start h-screen w-full shrink-0 flex items-center justify-center transition-all duration-[800ms] ease-in-out animate-fadeIn"
        >
          <HeroSections />
        </div>
        <div
          ref={sectionRefs.current[2]}
          className="scroll-section snap-start h-screen w-full shrink-0 flex items-center justify-center transition-all duration-[800ms] ease-in-out animate-fadeIn"
        >
          <Review />
        </div>
      </div>
    </>
  );
};

export default Home;