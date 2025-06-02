
import React from 'react';
import { ExternalLink, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Access Mental Wellness GPT', href: 'https://chatgpt.com/g/g-n6tK0Sc1u-mental-wellness-gpt' },
    { name: 'Doctor GPT', href: 'https://aidoctorgpt.lovable.app/' },
    { name: 'PetCare GPT', href: 'https://petcaregpt.lovable.app/' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', href: 'https://aiwebtools.lovable.app/disclaimers' },
  ];

  return (
    <footer className="relative bg-cyberpunk-darkPurple border-t border-white/10 overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-gradient-radial from-cyberpunk-cyan/20 via-cyberpunk-purple/15 to-transparent pointer-events-none animate-rotate-slow"></div>
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-gradient-radial from-cyberpunk-pink/20 via-cyberpunk-blue/15 to-transparent pointer-events-none animate-float"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyberpunk-yellow/5 to-transparent pointer-events-none animate-pulse-glow transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Magical floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-cyberpunk-cyan rounded-full animate-float opacity-60"></div>
        <div className="absolute top-[60%] left-[80%] w-1 h-1 bg-cyberpunk-pink rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-1.5 h-1.5 bg-cyberpunk-yellow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[80%] left-[30%] w-1 h-1 bg-cyberpunk-purple rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Educational Disclaimer */}
        <div className="text-center mb-12">
          <div className="glass-card p-4 rounded-xl border border-cyberpunk-cyan/30 shadow-neon-cyan/30 max-w-4xl mx-auto">
            <p className="text-white/80 text-sm">
              <strong>Educational Notice:</strong> This platform is designed for informational, educational, and research purposes only. All content and AI interactions are intended to supplement, not replace, professional healthcare advice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="transform hover:scale-105 transition-all duration-500">
              <Logo />
            </div>
            <p className="text-base text-white/80 max-w-md leading-relaxed">
              Mental Wellness GPT provides AI-powered CBT counseling, creating a safe space for emotional expression and mental health support.
            </p>
            <div className="space-y-4">
              <a href="tel:4758008096" className="flex items-center gap-3 text-white/80 hover:text-cyberpunk-cyan transition-all duration-300 group">
                <div className="p-2 rounded-lg glass-card group-hover:shadow-neon-cyan/50 transition-all duration-300">
                  <Phone size={18} />
                </div>
                <span className="font-medium">(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center gap-3 text-white/80 hover:text-cyberpunk-cyan transition-all duration-300 group">
                <div className="p-2 rounded-lg glass-card group-hover:shadow-neon-cyan/50 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="font-medium">Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-gradient-cyan">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-cyberpunk-cyan transition-all duration-300 flex items-center gap-2 group"
                  >
                    {link.href.startsWith('http') && <ExternalLink size={14} className="group-hover:animate-pulse" />}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-gradient-pink">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-cyberpunk-pink transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="group-hover:animate-pulse" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Enhanced More AI Tools Button */}
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-8 rounded-xl bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-pink to-cyberpunk-cyan text-white font-semibold shadow-neon-pink hover:shadow-neon-cyan transition-all duration-500 btn-glow transform hover:scale-105 hover:-translate-y-1 border border-white/20"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="pt-12 mt-12 border-t border-white/20 text-center md:text-left">
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 text-lg font-medium"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
