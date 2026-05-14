import React, { useState } from 'react';

const features = [
  {
    icon: 'avg_pace',
    title: 'Fast Reporting',
    description:
      'Report postal security incidents promptly through a structured and guided digital workflow.'
  },
  {
    icon: 'browse_activity',
    title: 'Real-Time Tracking',
    description:
      'Monitor every submission with live status updates and case progress visibility.'
  },
  {
    icon: 'lock_reset',
    title: 'Secure & Compliant',
    description:
      'Built with role-based access, data protection, and complete audit traceability.'
  }
];

export function FeatureCards({ isDarkMode }: { isDarkMode: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
        {features.map((feature, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              tabIndex={0}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(null)}
              className={`group cursor-pointer rounded-md border p-6 md:p-7 min-h-[280px] flex flex-col justify-between transition-all duration-300 ease-out outline-none ${
                isDarkMode
                  ? isHovered
                    ? 'bg-black border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.38)] -translate-y-1'
                    : 'bg-black/40 backdrop-blur-md border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
                  : isHovered
                    ? 'bg-white border-white/10 shadow-[0_18px_50px_rgba(255,255,255,0.14)] -translate-y-1'
                    : 'bg-white/10 backdrop-blur-md border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
              }`}>
              <div
                className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mb-8 shadow-inner transition-all duration-300 ${
                  isDarkMode
                    ? isHovered
                      ? 'bg-[#D0D0D040] scale-105'
                      : 'bg-black/20'
                    : isHovered
                      ? 'bg-black scale-105'
                      : 'bg-black/20'
                }`}>
                <span
                  className="material-symbols-outlined font-[300] transition-colors duration-300 text-white"
                  style={{
                    fontSize: '40px'
                  }}>
                  {feature.icon}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className={`font-semibold text-[20px] leading-tight transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : isHovered ? 'text-black' : 'text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className={`md:text-[20px] transition-colors duration-300 text-[18px] ${
                  isDarkMode ? 'text-white' : isHovered ? 'text-gray-700' : 'text-[#D8D8D8]'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}