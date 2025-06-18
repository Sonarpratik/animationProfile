import React from 'react';

interface BackgroundLayerProps {
  scrollY: number;
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ scrollY }) => {
  const getBackgroundStyle = () => {
    const progress = Math.min(scrollY / (window.innerHeight * 3), 1);
    
    if (progress < 0.33) {
      // Hero to About transition
      const localProgress = progress / 0.33;
      return {
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, ${0.3 - localProgress * 0.1}) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, ${0.2 - localProgress * 0.1}) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, ${0.2 - localProgress * 0.1}) 0%, transparent 50%),
          linear-gradient(135deg, 
            hsl(${240 + localProgress * 20}, 70%, ${10 + localProgress * 5}%) 0%,
            hsl(${260 + localProgress * 30}, 80%, ${8 + localProgress * 7}%) 25%,
            hsl(${220 + localProgress * 40}, 90%, ${6 + localProgress * 9}%) 50%,
            hsl(${200 + localProgress * 20}, 85%, ${4 + localProgress * 11}%) 75%,
            hsl(${180 + localProgress * 10}, 75%, ${2 + localProgress * 13}%) 100%
          )
        `
      };
    } else if (progress < 0.66) {
      // About to Portfolio transition
      const localProgress = (progress - 0.33) / 0.33;
      return {
        background: `
          radial-gradient(circle at 60% 40%, rgba(147, 51, 234, ${0.3 + localProgress * 0.1}) 0%, transparent 50%),
          radial-gradient(circle at 20% 70%, rgba(59, 130, 246, ${0.2 + localProgress * 0.1}) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(16, 185, 129, ${0.1 + localProgress * 0.1}) 0%, transparent 50%),
          linear-gradient(135deg, 
            hsl(${260 + localProgress * 15}, 75%, ${15 - localProgress * 3}%) 0%,
            hsl(${290 + localProgress * 25}, 85%, ${13 - localProgress * 2}%) 25%,
            hsl(${260 + localProgress * 35}, 95%, ${15 - localProgress * 4}%) 50%,
            hsl(${220 + localProgress * 15}, 90%, ${15 - localProgress * 3}%) 75%,
            hsl(${190 - localProgress * 5}, 80%, ${15 - localProgress * 2}%) 100%
          )
        `
      };
    } else {
      // Portfolio to Contact transition
      const localProgress = (progress - 0.66) / 0.34;
      return {
        background: `
          radial-gradient(circle at 30% 20%, rgba(16, 185, 129, ${0.4 + localProgress * 0.1}) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(59, 130, 246, ${0.3 + localProgress * 0.1}) 0%, transparent 50%),
          radial-gradient(circle at 50% 90%, rgba(147, 51, 234, ${0.2 + localProgress * 0.1}) 0%, transparent 50%),
          linear-gradient(135deg, 
            hsl(${275 - localProgress * 20}, 80%, ${12 + localProgress * 3}%) 0%,
            hsl(${315 - localProgress * 30}, 90%, ${10 + localProgress * 5}%) 25%,
            hsl(${295 - localProgress * 40}, 100%, ${11 + localProgress * 4}%) 50%,
            hsl(${235 - localProgress * 15}, 95%, ${12 + localProgress * 3}%) 75%,
            hsl(${185 + localProgress * 10}, 85%, ${13 + localProgress * 2}%) 100%
          )
        `
      };
    }
  };

  return (
    <div 
      className="fixed inset-0 transition-all duration-1000 ease-out"
      style={getBackgroundStyle()}
    >
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-teal-300 rounded-full animate-pulse" 
             style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
      </div>
    </div>
  );
};

export default BackgroundLayer;