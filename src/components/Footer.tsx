import React from 'react';
export function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <footer className="w-full z-20 relative bg-black transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto py-8 px-6 md:px-24 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[16px] text-white">
              Contact us: 03 8688 8000
            </p>
            <p className="font-inter font-medium text-[16px] text-white">
              Email: psirp-support@mcmc.gov.my
            </p>
          </div>
          <p className="font-medium text-[14px] text-white/90">
            Copyright ©2026 Malaysian Communications and Multimedia Commission. All Rights Reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 md:gap-8">
          {['FAQ', 'Privacy Policy', 'Security Policy', 'Legal Disclaimer'].map(
            (link) =>
            <a
              key={link}
              href="#"
              className="font-medium text-[16px] text-white hover:text-gray-300 transition-all">
              
                {link}
              </a>

          )}
        </nav>
      </div>
    </footer>);

}