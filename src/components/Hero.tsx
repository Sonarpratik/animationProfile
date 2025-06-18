import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  // const [displayText, setDisplayText] = useState('');
  // const [isTyping, setIsTyping] = useState(true);
  // const fullText = "Creative Developer & Designer";

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const typingInterval = setInterval(() => {
  //     if (currentIndex <= fullText.length) {
  //       setDisplayText(fullText.slice(0, currentIndex));
  //       currentIndex++;
  //     } else {
  //       setIsTyping(false);
  //       clearInterval(typingInterval);
  //     }
  //   }, 100);

  //   return () => clearInterval(typingInterval);
  // }, []);

  // const parallaxOffset = scrollY * 0.5;

const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Creative Developer & Designer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here (lower = faster)

    return () => clearInterval(typingInterval);
  }, [fullText]); // Add fullText as dependency

  const parallaxOffset = scrollY * 0.5;

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ transform: `translateY(${parallaxOffset}px)`,  top: 0  }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
            <span className="block">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Alex Johnson
            </span>
          </h1>
          
          {/* <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light min-h-[1.5em]">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
           */}



 <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light min-h-[1.5em]">
        {displayText}
        <span className={`inline-block w-1 h-8 ml-1 bg-white ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
      </div>




          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with cutting-edge technology. 
            Specialized in modern web development and interactive design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60 w-8 h-8" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-float" />
      <div className="absolute top-40 right-16 w-6 h-6 bg-purple-400/30 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-teal-400/30 rounded-full animate-float-slow" />
    </section>
  );
};

export default Hero;