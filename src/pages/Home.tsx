import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeatureCards } from '../components/FeatureCards';
import { Footer } from '../components/Footer';
export function Home({
  onSignInClick,
  isDarkMode,
  onToggleTheme
}: {
  onSignInClick: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <div
      className={`min-h-screen font-sans flex flex-col relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-white' : 'bg-[#F4F1EA] text-[#111111]'
      }`}>
      {/* Background Image Wrapper */}
      <div className="absolute top-0 left-0 w-full h-[1900px] md:h-[1200px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
            'url("https://cdn.magicpatterns.com/patterns/figma-images/1QvTC7WT49vchGFrOIOq6C/250-381.png")'
          }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-[1440px] mx-auto">
        <Header isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

        <main className="flex-1 flex flex-col px-6 md:px-24 pt-24 md:pt-[180px] pb-24 w-full">
          <Hero onSignInClick={onSignInClick} isDarkMode={isDarkMode} />

          <div className="mt-24 md:mt-[160px]">
            <FeatureCards isDarkMode={isDarkMode} />
          </div>
        </main>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>);

}