import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BackgroundLayer from './components/BackgroundLayer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time and then show content
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Delay content appearance for smooth transition
      setTimeout(() => setShowContent(true), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <LoadingScreen isLoaded={isLoaded} />
      
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <BackgroundLayer scrollY={scrollY} />
        <ScrollProgress />
        <Navigation />
        
        <main className="relative z-10">
          <Hero scrollY={scrollY} />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;