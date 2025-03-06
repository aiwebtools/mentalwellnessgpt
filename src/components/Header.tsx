
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

  const navLinks = [
    { name: 'Access Mental Wellness GPT', href: 'https://chatgpt.com/g/g-n6tK0Sc1u-mental-wellness-gpt' },
    { name: 'Doctor GPT', href: 'https://aidoctorgpt.lovable.app/' },
    { name: 'PetCare GPT', href: 'https://petcaregpt.lovable.app/' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-cyberpunk-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="group z-10">
          <Logo className="group-hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className={cn(
                'text-sm font-medium transition-all duration-300',
                link.name === 'Access Mental Wellness GPT' 
                  ? 'py-2 px-4 rounded-lg bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black shadow-neon-cyan hover:shadow-none btn-glow'
                  : 'text-white/80 hover:text-cyberpunk-cyan relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyberpunk-cyan hover:after:w-full after:transition-all after:duration-300'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10 text-white p-2 rounded-lg glass-card"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          'fixed inset-0 bg-cyberpunk-black/90 backdrop-blur-lg transition-all duration-300 md:hidden flex flex-col justify-center items-center space-y-6',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}>
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className={cn(
                'text-lg font-medium transition-all duration-300',
                link.name === 'Access Mental Wellness GPT' 
                  ? 'py-3 px-6 rounded-lg bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black shadow-neon-cyan'
                  : 'text-white hover:text-cyberpunk-cyan'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
