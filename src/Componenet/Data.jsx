import React from "react";
import Cyclinder from "./Cyclinder";
import NoBoundaries from "./Boundires";
import Card from "./Card";
import PortfolioBar from "./Check";
import Specialization from "./Specilization";
import Last from "./last";

const Data = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-16 py-10">

      {/* ================= NAVBAR ================= */}
      <div className="flex justify-between items-center mb-32 sticky top-0 z-20 bg-black">
        <h1 className="text-[6px] font-bold tracking-wider">1085.STUDIO</h1>

        <div className="flex items-center gap-10 text-sm tracking-wide">
          <a href="#" className="hover:text-gray-400 transition">WEB</a>
          <a href="#" className="hover:text-gray-400 transition">DESIGN</a>
          <a href="#" className="hover:text-gray-400 transition">PHOTO</a>
          <a href="#" className="hover:text-gray-400 transition">CONTACT</a>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>

      {/* ================= PAGES SECTION ================= */}
      <div className="mb-40">
        <div className="flex justify-between items-center mb-16">
          <div className="w-full h-50"></div>
        </div>
      </div>

      {/* ================= WHY SECTION ================= */}
      <div className="mt-40">

        {/* Header */}
        <div className="flex justify-between items-start mb-28">
          <h2 className="text-3xl font-bold text-gray-300">WHY 1085</h2>
          <span className="text-5xl font-semibold text-gray-500">S-1</span>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-2 gap-24">

          {/* Empty left column for layout balance */}
          <div></div>

          {/* Right Content */}
          <div className="space-y-28 max-w-xl">

            {/* One Partner */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">One Partner</h3>
              <p className="text-gray-400 leading-relaxed">
                I am Alan, a Zurich-based freelance creative technologist and
                founder of 1085 Studio. I work at the intersection of brand,
                design, and technology, shaping digital identities through
                branding, UI/UX design, web development, and photography.
                My focus is on building clean, modern websites and visual
                systems that give brands direction, presence, and measurable impact.
              </p>
            </div>

            {/* One Vision */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">One Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                Strong work starts with a clear point of view. I set a single,
                guiding vision and lead projects with a decisive creative and
                technical direction. By connecting strategy, design, development,
                and AI-supported workflows, I create cohesive digital experiences
                that feel intentional, perform reliably, and remain relevant
                across platforms, products, and evolving technologies.
              </p>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-2xl font-semibold mb-14">
                Brands that trust me
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* ================= ALL SECTIONS INSIDE BLACK CONTAINER ================= */}
      <Cyclinder />
      <NoBoundaries />
      <Card />
      <PortfolioBar />
      <Specialization />
      <Last/>
      

    </div>
  );
};

export default Data;