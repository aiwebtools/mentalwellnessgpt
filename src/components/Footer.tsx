
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
    { name: 'Terms of Service', href: 'https://aiwebtools.ai/terms-of-services' },
  ];

  return (
    <footer className="relative bg-cyberpunk-darkPurple border-t border-white/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] bg-gradient-radial from-cyberpunk-cyan/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-gradient-radial from-cyberpunk-pink/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-white/70 max-w-md">
              Mental Wellness GPT provides AI-powered CBT counseling, creating a safe space for emotional expression and mental health support.
            </p>
            <div className="space-y-2">
              <a href="tel:4758008096" className="flex items-center gap-2 text-white/70 hover:text-cyberpunk-cyan transition-colors">
                <Phone size={16} />
                <span>(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center gap-2 text-white/70 hover:text-cyberpunk-cyan transition-colors">
                <Mail size={16} />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-display font-medium mb-4 text-gradient-cyan">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-cyberpunk-cyan transition-colors flex items-center gap-1"
                  >
                    {link.href.startsWith('http') && <ExternalLink size={14} />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-display font-medium mb-4 text-gradient-pink">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-cyberpunk-pink transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* More AI Tools Button */}
            <a 
              href="https://www.aiwebtools.ai" 
              className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink text-white font-medium shadow-neon-pink hover:shadow-none transition-all duration-300 btn-glow"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 text-center md:text-left">
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-white/70 hover:text-white transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
