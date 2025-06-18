import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isLoaded: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!showOverlay) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
      isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Overlay Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/10 rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Geometric Overlay Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400/30 rotate-12 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full animate-bounce-slow" />
        </div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center px-8">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in-scale">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              AJ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up-delayed">
            Creative Developer & Designer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="mt-8 text-gray-400 animate-pulse">
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      {/* Reveal Animation Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-all duration-1000 ${
        isLoaded ? 'translate-x-full opacity-0' : '-translate-x-full'
      }`} style={{ width: '200%', left: '-50%' }} />
    </div>
  );
};

export default LoadingScreen;