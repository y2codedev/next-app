"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { HeroSections, BottomNav, MockJsonData } from "@/components";
import Review from "@/components/Review";

const Home = () => {
  const firstFixture = MockJsonData[0];
  const defaultFixture = firstFixture.thumbnail;
  const defaultColor = firstFixture.item_variants[0]?.color[0] || "";
  const [selectedFixture, setSelectedFixture] = useState(defaultFixture);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [activeSection, setActiveSection] = useState(0);

  const sectionRefs = useRef([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setActiveSection(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);


  const sectionFixture =
    MockJsonData[activeSection]?.thumbnail || defaultFixture;
  const fallbackColor =
    MockJsonData[activeSection]?.item_variants[0]?.color[0] || defaultColor;

  useEffect(() => {
    setSelectedFixture(sectionFixture);
    setSelectedColor(fallbackColor);
  }, [sectionFixture, fallbackColor]);

  const { product, variant } = useMemo(() => {
    const product = MockJsonData.find((p) =>
      p.item_variants.some((v) => v.thumbnail === selectedFixture),
    );

    const variant =
      product?.item_variants.find(
        (v) =>
          v.thumbnail === selectedFixture && v.color.includes(selectedColor),
      ) || product?.item_variants.find((v) => v.thumbnail === selectedFixture);

    return { product, variant };
  }, [selectedFixture, selectedColor]);

  const title = variant?.title || product?.title || "";
  const description = variant?.description || product?.description || "";
  const price = variant?.price || product?.item_variants[0]?.price || 0;

  return (
    <>
      <div className="scroll-container relative">
        <div ref={sectionRefs.current[0]} className="scroll-section">
          <HeroSections
            selectedFixture={selectedFixture}
            selectedColor={selectedColor}
            title={title}
            description={description}
          />
        </div>
        <div ref={sectionRefs.current[0]} className="scroll-section">
          <Review />
        </div>
        <div ref={sectionRefs.current[0]} className="scroll-section">
          <HeroSections
            selectedFixture={selectedFixture}
            selectedColor={selectedColor}
            title={title}
            description={description}
          />
        </div>
      </div>

      <BottomNav
        onFixtureChange={setSelectedFixture}
        onColorChange={setSelectedColor}
        selectedColor={selectedColor}
        selectedFixture={selectedFixture}
        price={price}
      />
    </>
  );
};

export default Home;
