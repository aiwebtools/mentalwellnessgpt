
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Access Mental Wellness GPT', href: 'https://chatgpt.com/g/g-n6tK0Sc1u-mental-wellness-gpt' },
    { name: 'Doctor GPT', href: 'https://aidoctorgpt.lovable.app/' },
    { name: 'PetCare GPT', href: 'https://petcaregpt.lovable.app/' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        isScrolled ? 'bg-cyberpunk-black/90 backdrop-blur-md shadow-md' : 'bg-cyberpunk-black/60 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="group z-20 shrink-0">
            <Logo className="group-hover:scale-105 transition-transform" />
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-20 text-white p-2 rounded-lg glass-card active:scale-95 transition-transform duration-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center flex-wrap gap-2 lg:gap-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'text-xs lg:text-sm font-medium transition-colors duration-200 whitespace-nowrap',
                  link.name === 'Access Mental Wellness GPT' 
                    ? 'py-2 px-3 lg:px-4 rounded-lg bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black shadow-neon-cyan hover:shadow-none'
                    : 'text-white/80 hover:text-cyberpunk-cyan'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-cyberpunk-black/98 z-10 md:hidden flex flex-col justify-center items-center overflow-y-auto">
          <nav className="w-full px-6 py-8 flex flex-col items-center gap-4 max-w-sm mx-auto">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'text-lg font-medium w-full text-center py-3 rounded-lg transition-colors duration-150',
                  link.name === 'Access Mental Wellness GPT' 
                    ? 'py-4 px-6 bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black font-bold'
                    : 'text-white hover:text-cyberpunk-cyan border-b border-white/10'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
