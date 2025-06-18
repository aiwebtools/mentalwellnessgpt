
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only enable mouse tracking on desktop to prevent mobile issues
    if (isMobile) return;
    
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
  }, [isMobile]);

  const benefits = [
    "24/7 AI Mental Health Support",
    "CBT Therapy Techniques",
    "Safe & Confidential AI Tools",
    "Personalized AI Guidance",
    "No Judgment AI Zone",
    "Instant AI Availability"
  ];

  return (
    <section 
      ref={wrapperRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5'
      } as React.CSSProperties}
    >
      {/* Dynamic lighting effect - disabled on mobile */}
      {!isMobile && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: `
              radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(0, 255, 255, 0.25), transparent 30%),
              radial-gradient(circle at calc((1 - var(--mouse-x)) * 100%) calc((1 - var(--mouse-y)) * 100%), rgba(255, 0, 128, 0.2), transparent 35%)
            `
          }}
        ></div>
      )}
      
      {/* Simplified decorative elements for mobile */}
      <div className={cn(
        "absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-gradient-radial from-cyberpunk-purple/30 to-transparent blur-3xl",
        isMobile ? "" : "animate-float"
      )}></div>
      <div className={cn(
        "absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full bg-gradient-radial from-cyberpunk-blue/25 to-transparent blur-3xl",
        isMobile ? "animate-pulse" : "animate-pulse-glow"
      )}></div>
      <div className={cn(
        "absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyberpunk-cyan/10 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2",
        isMobile ? "" : "animate-rotate-slow"
      )}></div>
      
      {/* Reduced floating particles on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-40",
              i % 4 === 0 ? "w-3 h-3 bg-cyberpunk-cyan" :
              i % 4 === 1 ? "w-2 h-2 bg-cyberpunk-pink" :
              i % 4 === 2 ? "w-1.5 h-1.5 bg-cyberpunk-yellow" :
              "w-2.5 h-2.5 bg-cyberpunk-purple",
              isMobile ? "" : "animate-float"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-block">
                <span className={cn(
                  "px-6 py-3 text-sm rounded-full backdrop-blur-xl bg-white/15 border border-white/30 text-white/95 font-semibold shadow-neon-cyan/50",
                  isMobile ? "" : "divine-glow"
                )}>
                  🏆 #1 AI-Powered Mental Health Support Tools
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                Meet <span className="text-gradient-multi font-display">Bean</span>, Your Free AI Mental Wellness Counselor from <span className="text-cyberpunk-cyan">AIWEBTOOLS.AI</span>
              </h1>
              
              <p className="text-xl text-white/85 leading-relaxed font-medium">
                Access professional-grade <strong className="text-cyberpunk-cyan">free AI tools</strong> for mental wellness, healthcare, and pet care. Bean provides empathetic AI counseling using advanced <strong className="text-cyberpunk-pink">artificial intelligence</strong> and CBT techniques - available 24/7 at <strong className="text-cyberpunk-yellow">AIWEBTOOLS.AI</strong>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://chatgpt.com/g/g-n6tK0Sc1u-mental-wellness-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "py-4 px-8 rounded-xl bg-gradient-to-r from-cyberpunk-cyan via-cyberpunk-blue to-cyberpunk-purple text-black font-bold text-lg shadow-neon-cyan hover:shadow-neon-pink transition-all duration-500 flex items-center gap-3 transform hover:scale-105 hover:-translate-y-1 border border-white/20",
                  isMobile ? "" : "btn-glow"
                )}
                aria-label="Start Free AI Mental Wellness Session with Bean"
              >
                Start Your Free AI Session
                <ArrowRight size={20} className={isMobile ? "" : "animate-pulse"} />
              </a>
              
              <a 
                href="#how-it-works" 
                className={cn(
                  "py-4 px-8 rounded-xl glass-card glass-card-hover text-white/95 font-semibold text-lg transition-all duration-500",
                  isMobile ? "" : "divine-glow"
                )}
                aria-label="Learn how AI mental wellness tools work"
              >
                How AI Tools Work
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg glass-card",
                    isMobile ? "" : "divine-pulse"
                  )} 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CheckCircle size={18} className={cn("text-cyberpunk-cyan", isMobile ? "" : "animate-pulse")} />
                  <span className="text-sm text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* SEO-focused content section */}
            <div className="mt-8 p-6 glass-card rounded-xl border border-cyberpunk-cyan/30">
              <h2 className="text-lg font-display font-semibold text-cyberpunk-cyan mb-3">Why Choose AIWEBTOOLS.AI?</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong>AIWEBTOOLS.AI</strong> is the leading platform for <strong>free AI tools</strong> including Mental Wellness GPT, Doctor GPT, and PetCare GPT. Our <strong>artificial intelligence</strong> solutions provide professional-grade support for mental health, healthcare consultations, and pet care guidance. Join thousands of users who trust our <strong>AI web tools</strong> for reliable, accessible, and innovative artificial intelligence solutions.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Enhanced decorative hex grid pattern - simplified for mobile */}
              <div className={cn("absolute inset-0 opacity-40", isMobile ? "" : "cyber-grid")}></div>
              
              {/* Main visual element with conditional effects */}
              <div className={cn(
                "relative glass-card rounded-3xl p-2 overflow-hidden",
                isMobile ? "" : "divine-glow"
              )}>
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-cyberpunk-cyan/30 via-cyberpunk-purple/25 to-cyberpunk-pink/30 opacity-60",
                  isMobile ? "animate-pulse" : "animate-pulse-glow"
                )}></div>
                
                <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-cyberpunk-darkPurple/90 overflow-hidden border border-white/20">
                  {/* Chat bubbles with conditional animation */}
                  <div className="space-y-6 min-h-[450px]">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue flex items-center justify-center shadow-neon-cyan",
                        isMobile ? "" : "animate-pulse-glow"
                      )}>
                        <span className="text-sm font-bold text-black">B</span>
                      </div>
                      <div className={cn(
                        "glass-card p-4 rounded-r-2xl rounded-bl-2xl max-w-[85%] animate-fade-in",
                        isMobile ? "" : "divine-glow"
                      )}>
                        <p className="text-sm leading-relaxed">
                          Hey there! I'm Bean, your virtual mental health assistant. I'm here for you whenever you need someone to talk to. How are you feeling today?
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 justify-end">
                      <div className="p-4 rounded-l-2xl rounded-br-2xl bg-gradient-to-r from-white/15 to-white/10 max-w-[85%] animate-fade-in border border-white/20" style={{ animationDelay: '0.8s' }}>
                        <p className="text-sm leading-relaxed">
                          I've been feeling overwhelmed with work and personal responsibilities lately.
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-purple flex items-center justify-center shadow-neon-pink">
                        <span className="text-sm font-bold text-white">U</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue flex items-center justify-center shadow-neon-cyan",
                        isMobile ? "" : "animate-pulse-glow"
                      )}>
                        <span className="text-sm font-bold text-black">B</span>
                      </div>
                      <div className={cn(
                        "glass-card p-4 rounded-r-2xl rounded-bl-2xl max-w-[85%] animate-fade-in",
                        isMobile ? "" : "divine-glow"
                      )} style={{ animationDelay: '1.6s' }}>
                        <p className="text-sm leading-relaxed">
                          I understand how that feels. It's completely normal to feel overwhelmed when juggling multiple responsibilities. Let's explore some strategies that might help you manage these feelings...
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced pulsing indicator */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white/70 text-sm">
                    <div className={cn(
                      "w-3 h-3 rounded-full bg-cyberpunk-cyan shadow-neon-cyan",
                      isMobile ? "animate-pulse" : "animate-pulse-glow"
                    )}></div>
                    <span className="font-medium">Bean is here to listen...</span>
                  </div>
                </div>
              </div>
              
              {/* Simplified decorative elements for mobile */}
              <div className={cn(
                "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-radial from-cyberpunk-pink/40 to-transparent blur-2xl",
                isMobile ? "" : "animate-float"
              )}></div>
              <div className={cn(
                "absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-radial from-cyberpunk-cyan/40 to-transparent blur-2xl",
                isMobile ? "animate-pulse" : "animate-pulse-glow"
              )}></div>
              <div className={cn(
                "absolute top-1/2 -right-16 w-20 h-20 rounded-full bg-gradient-radial from-cyberpunk-yellow/30 to-transparent blur-xl",
                isMobile ? "" : "animate-float"
              )} style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
