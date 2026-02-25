import React from "react";

const Cylinder = () => {
  const brands = [
    { name: "Apple", color: "bg-gray-800" },
    { name: "Google", color: "bg-blue-600" },
    { name: "Microsoft", color: "bg-emerald-600" },
    { name: "Amazon", color: "bg-orange-500" },
    { name: "Netflix", color: "bg-red-600" },
    { name: "Tesla", color: "bg-red-700" },
    { name: "Meta", color: "bg-blue-500" },
    { name: "NVIDIA", color: "bg-green-600" },
  ];

  // Repeat brands enough times so the loop is never visible
  const repeated = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden bg-black py-20">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="marquee-track">
        {repeated.map((brand, index) => (
          <div
            key={index}
            className={`h-12 w-32 mx-8 ${brand.color} flex items-center justify-center rounded-lg opacity-60 hover:opacity-100 transition-opacity text-white font-semibold text-sm`}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cylinder;