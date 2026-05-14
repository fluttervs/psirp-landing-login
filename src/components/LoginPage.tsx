import React, { useState } from 'react';
import { Eye, EyeOff, Moon, Sun } from 'lucide-react';

type LoginPageProps = {
  onBack?: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

export function LoginPage({ onBack, isDarkMode, onToggleTheme }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', {
      email,
      password,
      rememberMe,
      robotChecked
    });
    alert(
      `Login submitted:\nEmail: ${email}\nPassword: ${password}\nRemember me: ${rememberMe}\nRobot check: ${robotChecked}`
    );
  };
  return (
    <div className={`min-h-screen w-full relative overflow-hidden ${isDarkMode ? 'bg-[#0F1115]' : 'bg-[#DFDFDF]'}`}>
      {onBack && (
        <div className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 pt-4">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-colors font-poppins font-medium ${
              isDarkMode
                ? 'bg-black/70 text-white hover:bg-black'
                : 'bg-white/90 text-black hover:bg-white'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Landing Page
          </button>
        </div>
      )}
      {/* Background Image Wrapper */}
      <div className="absolute top-0 left-0 w-full h-[1200px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
            'url("https://cdn.magicpatterns.com/patterns/figma-images/1QvTC7WT49vchGFrOIOq6C/250-381.png")'
          }}
        />
      </div>
      

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 py-16">
      {/* Login Card */}
      <div className={`w-full max-w-[483px] rounded-xl p-8 flex flex-col items-center gap-9 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#1A1F29]/95' : 'bg-[#F4F4F4]'
      }`}>
        {/* Logo */}
        <img
          src="./250-200.png"
          alt="MCMC Logo"
          className="w-[90px] h-[74px]" />
        

        {/* Title */}
        <h1 className={`text-[32px] leading-[38.4px] font-bold text-center font-poppins ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Postal Security Incident Reporting Platform
        </h1>

        {/* Form Container */}
        <div className={`relative w-full max-w-[392px] rounded-lg p-4 pt-12 transition-colors duration-300 ${
          isDarkMode ? 'bg-[#111827]' : 'bg-white'
        }`}>
          <button
            type="button"
            onClick={onToggleTheme}
            className={`absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              isDarkMode
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-black/5 text-black hover:bg-black/10'
            }`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              {/* User Login Heading */}
              <h2 className={`text-xl font-semibold text-center font-poppins ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                User Login
              </h2>

              <div className="flex flex-col gap-5">
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className={`text-[11px] leading-3 tracking-[0.3px] font-poppins px-4 ${isDarkMode ? 'text-gray-200' : 'text-[#333333]'}`}>
                    
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@gmail.com"
                      className={`w-full h-12 px-4 border-[0.5px] rounded-md text-[15px] leading-5 font-poppins focus:outline-none focus:ring-2 focus:ring-[#0074C8] focus:border-transparent ${
                        isDarkMode
                          ? 'bg-[#0B1220] border-[#334155] text-white placeholder:text-gray-400'
                          : 'bg-[#F2F2F2] border-[#E5E5E5] text-[#808080] placeholder:text-[#808080]'
                      }`} />
                    
                  </div>
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className={`text-[11px] leading-3 tracking-[0.3px] font-poppins px-4 ${isDarkMode ? 'text-gray-200' : 'text-[#333333]'}`}>
                    
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className={`w-full h-12 px-4 pr-12 border-[0.5px] rounded-md text-[15px] leading-5 font-poppins focus:outline-none focus:ring-2 focus:ring-[#0074C8] focus:border-transparent ${
                        isDarkMode
                          ? 'bg-[#0B1220] border-[#334155] text-white placeholder:text-gray-400'
                          : 'bg-[#F2F2F2] border-[#E5E5E5] text-[#808080] placeholder:text-[#808080]'
                      }`} />
                    
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 transition-colors ${
                        isDarkMode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-[#4D4D4D] hover:text-[#1A1A1A]'
                      }`}
                      aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                      }>
                      
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`relative w-10 h-5 rounded-full transition-colors ${rememberMe ? 'bg-[#0074C8]' : 'bg-[#F2F2F2]'} border-[0.5px] border-[#E5E5E5]`}
                    role="switch"
                    aria-checked={rememberMe}
                    aria-label="Remember me">
                    
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-[1px_1px_2px_-1px_rgba(51,51,51,0.3)] transition-transform ${rememberMe ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    
                  </button>
                  <label
                    htmlFor="remember-me"
                    className={`text-xs leading-5 tracking-[0.3px] font-poppins cursor-pointer ${isDarkMode ? 'text-gray-100' : 'text-[#1A1A1A]'}`}
                    onClick={() => setRememberMe(!rememberMe)}>
                    
                    Remember me
                  </label>
                </div>
              </div>

              {/* reCAPTCHA Mock */}
              <div className={`flex items-center justify-between border rounded-sm shadow-[0px_1px_2px_rgba(0,0,0,0.1)] p-2.5 h-[73px] ${
                isDarkMode ? 'bg-[#0B1220] border-[#334155]' : 'bg-[#FAFAFA] border-[#D6D6D6]'
              }`}>
                <div className="flex items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setRobotChecked(!robotChecked)}
                    className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center transition-colors ${robotChecked ? 'border-[#0074C8] bg-[#0074C8]' : 'border-[#C1C1C1] bg-white'}`}
                    role="checkbox"
                    aria-checked={robotChecked}
                    aria-label="I'm not a robot">
                    
                    {robotChecked &&
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none">
                      
                        <path
                        d="M1 5L5 9L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                      
                      </svg>
                    }
                  </button>
                  <span className={`text-sm font-medium leading-none font-roboto ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    I'm not a robot
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img
                    src="./250-286.svg"
                    alt="reCAPTCHA"
                    className="w-12 h-[46px]" />
                  
                  <span className="text-[8px] font-medium leading-none text-[#A6A6A6] font-roboto">
                    Privacy - Terms
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 bg-[#0074C8] hover:bg-[#005a9e] active:bg-[#004a82] rounded-md text-white text-[15px] leading-5 tracking-[0.3px] font-bold font-roboto transition-colors">
                
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>);

}