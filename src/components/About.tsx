import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const skills = [
    { name: 'Frontend Development', percentage: 95, icon: Code },
    { name: 'UI/UX Design', percentage: 88, icon: Palette },
    { name: 'Performance Optimization', percentage: 92, icon: Zap },
    { name: 'Full-Stack Development', percentage: 85, icon: Globe },
  ];

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Delay skills animation
          const timer = setTimeout(() => {
            setSkillsAnimated(true);
          }, 600);
          
          // Cleanup timer if component unmounts
          return () => clearTimeout(timer);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      style={{background:"#1f2652f0"}}
      className="relative py-32 px-4 sm:px-6 lg:px-8 mt-20"
    >
      {/* Section Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating digital experiences that not only look stunning but also perform flawlessly. 
            With expertise spanning modern web technologies, I bring ideas to life through clean code and innovative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With over 5 years of experience in web development, I've worked with startups and established companies 
                to create digital solutions that drive results. My approach combines technical expertise with creative 
                problem-solving to deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I stay at the forefront of web technologies, constantly learning and adapting to new frameworks, 
                tools, and best practices. Whether it's React, Vue, Node.js, or the latest CSS features, 
                I love exploring what's possible on the web.
              </p>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1500 ease-out ${
                        skillsAnimated ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        width: skillsAnimated ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 200 + 200}ms`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;