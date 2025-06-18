import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingProgrammatically, setIsScrollingProgrammatically] = useState(false);
  const scrollTimeoutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrollingProgrammatically) {
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollingProgrammatically]);

  const scrollToSection = (sectionId: string) => {
    setIsScrollingProgrammatically(true);
    setIsMobileMenuOpen(false);

    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset after scroll completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    // scrollTimeoutRef.current = setTimeout(() => {
    //   setIsScrollingProgrammatically(false);
    // }, 1000); // Match this duration with your scroll duration
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['hero', 'about', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 capitalize"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() =>{ 
                setIsScrolled(true)
                setIsMobileMenuOpen(!isMobileMenuOpen)}}
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 rounded-lg mt-2">
            {['hero', 'about', 'portfolio', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-300 capitalize w-full text-left"
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;