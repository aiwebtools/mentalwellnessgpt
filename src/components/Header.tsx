
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-cyberpunk-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between">
            <a href="/" className="group z-20">
              <Logo className="group-hover:scale-105 transition-transform" />
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-20 text-white p-2 rounded-lg glass-card"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'text-sm font-medium transition-all duration-300 whitespace-nowrap',
                  link.name === 'Access Mental Wellness GPT' 
                    ? 'py-2 px-4 rounded-lg bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black shadow-neon-cyan hover:shadow-none btn-glow'
                    : 'text-white/80 hover:text-cyberpunk-cyan relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyberpunk-cyan hover:after:w-full after:transition-all after:duration-300'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className={cn(
            'fixed inset-0 bg-cyberpunk-black/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col justify-center items-center z-10',
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}>
            <div className="container px-4 py-12 flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'text-xl font-medium transition-all duration-300 w-full text-center py-3',
                    link.name === 'Access Mental Wellness GPT' 
                      ? 'py-4 px-8 rounded-lg bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-blue text-black shadow-neon-cyan'
                      : 'text-white hover:text-cyberpunk-cyan border-b border-white/10 pb-3'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
