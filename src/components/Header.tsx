import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export function Header({
  isDarkMode,
  onToggleTheme
}: {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('BM');
  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };
  return (
    <>
      {/* Load Material Symbols font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      

      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center px-6 md:px-24 pt-10 gap-6 xl:gap-0 w-full">
        <div className="flex items-center gap-5">
          <img
            src="/250-303.png"
            alt="MCMC Logo"
            className="w-[54px] h-[45px] object-contain shrink-0" />
          
          <div className="flex flex-col">
            <h1 className="font-semibold text-[16px] uppercase tracking-wide leading-tight text-white">
              Suruhanjaya Komunikasi dan Multimedia Malaysia
            </h1>
            <h2 className="font-normal text-[14px] uppercase leading-tight mt-1 text-white/90">
              Malaysian Communications and Multimedia Commission
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4 self-end xl:self-auto">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
            aria-label="Toggle dark mode">
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-white" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5 text-black" aria-hidden="true" />
            )}
          </button>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className={`flex items-center px-3 py-1.5 rounded-md shadow-sm transition-colors h-[36px] gap-[6px] pt-[12px] pb-[12px] pl-[6px] pr-[6px] ${isDarkMode ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-gray-100'}`}>
              
              <span
                className={`material-symbols-outlined ${isDarkMode ? 'text-white' : 'text-black'}`}
                style={{
                  fontSize: '18px'
                }}>
                
                language
              </span>
              <span className="font-medium text-[16px] leading-none mt-[2px]">
                {language}
              </span>
              <span
                className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${isDarkMode ? 'text-white/70' : 'text-gray-600'} ${isLanguageOpen ? 'rotate-180' : ''}`}>
                
                arrow_drop_down
              </span>
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen &&
            <div className={`absolute top-full right-0 mt-2 rounded-md shadow-lg border z-50 max-w-[85px] ${isDarkMode ? 'bg-black border-white/10' : 'bg-white border-gray-200'}`}>
                <button
                onClick={() => handleLanguageSelect('BM')}
              className={`w-full text-left px-4 py-2 transition-colors ${language === 'BM' ? (isDarkMode ? 'bg-neutral-800 font-semibold text-white' : 'bg-gray-100 font-semibold text-black') : (isDarkMode ? 'text-white/80 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-50')}`}>
                
                  BM
                </button>
                <button
                onClick={() => handleLanguageSelect('EN')}
                className={`w-full text-left px-4 py-2 transition-colors ${language === 'EN' ? (isDarkMode ? 'bg-neutral-800 font-semibold text-white' : 'bg-gray-100 font-semibold text-black') : (isDarkMode ? 'text-white/80 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-50')}`}>
                
                  EN
                </button>
              </div>
            }
          </div>
        </div>
      </header>
    </>);

}