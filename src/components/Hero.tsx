
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      
      const { left, top, width, height } = wrapperRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      wrapperRef.current.style.setProperty('--mouse-x', `${x}`);
      wrapperRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const benefits = [
    "24/7 Emotional Support",
    "CBT Techniques",
    "Safe & Confidential",
    "Personalized Guidance",
    "No Judgment Zone",
    "Instant Availability"
  ];

  return (
    <section 
      ref={wrapperRef}
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5'
      } as React.CSSProperties}
    >
      {/* Dynamic lighting effect based on mouse position */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(0, 255, 255, 0.15), transparent 30%)'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-purple/20 blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyberpunk-blue/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-block">
                <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium">
                  AI-Powered Mental Health Support
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                Meet <span className="text-gradient-multi font-display">Bean</span>, Your Virtual Mental Wellness Counselor
              </h1>
              
              <p className="text-lg text-white/80">
                A safe, judgment-free AI companion designed to provide empathetic guidance and support for your emotional well-being, anytime you need it.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://chatgpt.com/g/g-n6tK0Sc1u-mental-wellness-gpt" 
                className="py-3 px-6 rounded-lg bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black font-medium shadow-neon-cyan hover:shadow-none transition-all duration-300 flex items-center gap-2 btn-glow"
              >
                Start Your Session
                <ArrowRight size={18} />
              </a>
              
              <a 
                href="#how-it-works" 
                className="py-3 px-6 rounded-lg glass-card glass-card-hover text-white/90 font-medium transition-all duration-300"
              >
                Learn How It Works
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyberpunk-cyan" />
                  <span className="text-sm text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative hex grid pattern */}
              <div className="absolute inset-0 cyber-grid opacity-30"></div>
              
              {/* Main visual element */}
              <div className="relative glass-card rounded-2xl p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-cyan/20 via-cyberpunk-purple/20 to-cyberpunk-pink/20 opacity-50"></div>
                
                <div className="relative p-6 rounded-xl backdrop-blur-md bg-cyberpunk-darkPurple/80 overflow-hidden">
                  {/* Chat bubbles animation */}
                  <div className="space-y-4 min-h-[400px]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyberpunk-cyan/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyberpunk-cyan">B</span>
                      </div>
                      <div className="glass-card p-3 rounded-r-lg rounded-bl-lg max-w-[80%] animate-fade-in">
                        <p className="text-sm">
                          Hey there! I'm Bean, your virtual mental health assistant. I'm here for you whenever you need someone to talk to. How are you feeling today?
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="p-3 rounded-l-lg rounded-br-lg bg-white/10 max-w-[80%] animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <p className="text-sm">
                          I've been feeling overwhelmed with work and personal responsibilities lately.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xs font-bold">U</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyberpunk-cyan/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-cyberpunk-cyan">B</span>
                      </div>
                      <div className="glass-card p-3 rounded-r-lg rounded-bl-lg max-w-[80%] animate-fade-in" style={{ animationDelay: '1s' }}>
                        <p className="text-sm">
                          I understand how that feels. It's completely normal to feel overwhelmed when juggling multiple responsibilities. Let's explore some strategies that might help you manage these feelings...
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulsing indicator */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/60 text-xs">
                    <div className="w-2 h-2 rounded-full bg-cyberpunk-cyan animate-pulse"></div>
                    <span>Bean is here to listen...</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-cyberpunk-pink/30 blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-cyberpunk-cyan/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
