
import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Delay showing popup slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    setIsClosing(true);
    
    // Add animation time before fully closing
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem('disclaimerAgreed', 'true');
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className={cn(
          "w-full max-w-md bg-gradient-to-br from-cyberpunk-darkPurple to-cyberpunk-black border border-cyberpunk-cyan/30 rounded-xl shadow-neon-cyan p-5 transform transition-all duration-300",
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100 animate-fade-in"
        )}
      >
        <div className="mb-2 flex justify-center">
          <div className="bg-cyberpunk-purple/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck className="w-8 h-8 text-cyberpunk-cyan" />
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl font-display font-bold text-gradient-cyan text-center mb-4">
          Important Disclaimer
        </h2>
        
        <div className="glass-card p-4 mb-5 text-white/90 text-sm md:text-base leading-relaxed">
          <p>
            Mental Wellness GPT is designed to provide support but is <span className="font-semibold text-cyberpunk-pink">not a replacement for professional mental healthcare</span>. 
            By continuing, you acknowledge that this is an AI tool and not a licensed therapist or medical professional.
          </p>
        </div>
        
        <button 
          onClick={handleAgree}
          className="w-full neo-brutalism bg-cyberpunk-cyan hover:bg-cyberpunk-blue text-cyberpunk-black font-display font-bold py-3 px-6 text-lg rounded-md flex items-center justify-center gap-2 group btn-glow transition-all"
        >
          <Check className="w-5 h-5 group-hover:animate-jelly" />
          <span className="group-hover:animate-jelly inline-block">I AGREE</span>
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
