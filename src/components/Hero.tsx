import React from 'react';
import { ArrowRight } from 'lucide-react';
export function Hero({
  onSignInClick,
  isDarkMode
}: {
  onSignInClick: () => void;
  isDarkMode: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 max-w-[620px]">
      <h1 className="font-bold text-4xl md:text-[52px] md:leading-[62px] text-white drop-shadow-md transition-colors duration-300">
        Postal Security
        <br />
        Incident Reporting Platform
      </h1>
      <button 
        onClick={onSignInClick}
        className={`w-[180px] h-[50px] rounded-md flex items-center justify-center gap-3 transition-colors group ${isDarkMode ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-gray-100'}`}
      >
        <span className="font-inter font-semibold text-[15px]">Sign In</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>);

}