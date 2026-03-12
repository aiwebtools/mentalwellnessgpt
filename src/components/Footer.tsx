import React from 'react';
import { ExternalLink, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Mental Wellness GPT - Free AI Therapy', href: 'https://chatgpt.com/g/g-n6tK0Sc1u-mental-wellness-gpt' },
    { name: 'Doctor GPT - AI Healthcare Assistant', href: 'https://aidoctorgpt.lovable.app/' },
    { name: 'PetCare GPT - AI Pet Health Tool', href: 'https://petcaregpt.lovable.app/' },
    { name: 'AI Tools FAQ', href: '#faq' },
    { name: 'AI Tools Disclaimer', href: '#disclaimer' },
    { name: 'More Free AI Tools - AIWEBTOOLS.AI', href: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', href: 'https://aiwebtools.lovable.app/disclaimers' },
  ];

  return (
    <footer className="relative bg-cyberpunk-darkPurple border-t border-white/10 overflow-hidden">
      {/* Enhanced background decorative elements - removed problematic floating squares */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cyberpunk-cyan/5 via-cyberpunk-purple/3 to-transparent pointer-events-none animate-divine-glow"></div>
      
      {/* Magical floating particles - smaller and more refined */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-cyberpunk-cyan rounded-full animate-float opacity-60"></div>
        <div className="absolute top-[60%] left-[80%] w-0.5 h-0.5 bg-cyberpunk-pink rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-1 h-1 bg-cyberpunk-yellow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[80%] left-[30%] w-0.5 h-0.5 bg-cyberpunk-purple rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Enhanced Educational Disclaimer with SEO keywords */}
        <div className="text-center mb-12">
          <div className="glass-card p-6 rounded-xl border border-cyberpunk-cyan/30 shadow-neon-cyan/30 max-w-4xl mx-auto divine-glow">
            <p className="text-white/90 text-sm leading-relaxed">
              <strong className="text-cyberpunk-cyan">Educational Notice:</strong> <strong>AIWEBTOOLS.AI</strong> provides <strong>free AI tools</strong> for informational, educational, and research purposes only. Our <strong>artificial intelligence</strong> platform including Mental Wellness GPT, Doctor GPT, and PetCare GPT are designed to supplement, not replace, professional healthcare advice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Company Info with SEO enhancement */}
          <div className="space-y-8">
            <div className="transform hover:scale-105 transition-all duration-500">
              <Logo />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-cyberpunk-cyan mb-3">AI Web Tools LLC - AIWEBTOOLS.AI</h3>
              <p className="text-lg text-white/90 max-w-md leading-relaxed font-light">
                Leading provider of <strong>free AI tools</strong> including Mental Wellness GPT for AI-powered CBT counseling, Doctor GPT for healthcare consultations, and PetCare GPT for pet health guidance. Professional <strong>artificial intelligence</strong> solutions available 24/7.
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="tel:4758008096" className="flex items-center gap-4 text-white/90 hover:text-cyberpunk-cyan transition-all duration-300 group">
                <div className="p-3 rounded-xl glass-card group-hover:shadow-neon-cyan/50 transition-all duration-300 divine-glow">
                  <Phone size={20} />
                </div>
                <span className="font-medium text-lg">(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center gap-4 text-white/90 hover:text-cyberpunk-cyan transition-all duration-300 group">
                <div className="p-3 rounded-xl glass-card group-hover:shadow-neon-cyan/50 transition-all duration-300 divine-glow">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Navigation with SEO-enhanced titles */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-gradient-cyan">Free AI Tools & Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative inline-flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:glass-card-hover text-white/80 hover:text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 divine-glow"
                    aria-label={`Access ${link.name} - Professional AI Tools`}
                  >
                    {link.href.startsWith('http') && <ExternalLink size={16} className="group-hover:animate-pulse text-cyberpunk-cyan" />}
                    <span className="font-medium text-sm">{link.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyberpunk-cyan/10 via-cyberpunk-purple/10 to-cyberpunk-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & More Tools with enhanced SEO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-gradient-pink">Legal & AI Resources</h3>
            <ul className="space-y-4 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:glass-card-hover text-white/80 hover:text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 divine-glow"
                  >
                    <ExternalLink size={16} className="group-hover:animate-pulse text-cyberpunk-pink" />
                    <span className="font-medium">{link.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyberpunk-pink/10 via-cyberpunk-purple/10 to-cyberpunk-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Enhanced More AI Tools Button with SEO focus */}
            <div className="relative">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full py-6 px-8 rounded-2xl bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-pink to-cyberpunk-cyan text-white font-bold text-lg shadow-neon-pink hover:shadow-neon-cyan transition-all duration-700 btn-glow transform hover:scale-110 hover:-translate-y-2 border border-white/30 overflow-hidden"
                aria-label="Explore More Free AI Tools at AIWEBTOOLS.AI - Artificial Intelligence Platform"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  More Free AI Tools - AIWEBTOOLS.AI
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-cyan via-cyberpunk-yellow to-cyberpunk-pink opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>
            
            {/* Additional SEO content */}
            <div className="mt-6 p-4 glass-card rounded-lg">
              <h4 className="text-sm font-semibold text-cyberpunk-yellow mb-2">🏆 Top AI Tools 2025</h4>
              <p className="text-white/70 text-xs leading-relaxed">
                Discover the best <strong>free AI tools</strong> at <strong>AIWEBTOOLS.AI</strong>. Our platform features cutting-edge <strong>artificial intelligence</strong> solutions including AI mental health support, AI healthcare consultations, and AI pet care guidance. Join thousands of users who trust our professional <strong>AI web tools</strong> for reliable, innovative artificial intelligence assistance.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced footer bottom with SEO keywords */}
        <div className="pt-16 mt-16 border-t border-white/20 text-center">
          <div className="mb-4">
            <p className="text-white/60 text-sm mb-2">
              🌟 <strong>AIWEBTOOLS.AI</strong> - Your trusted source for professional <strong>free AI tools</strong> and <strong>artificial intelligence</strong> solutions
            </p>
            <p className="text-white/50 text-xs">
              Keywords: AI tools, free AI tools, artificial intelligence, AI web tools, Mental Wellness GPT, Doctor GPT, PetCare GPT, AI therapy, AI healthcare, AI counseling, CBT AI, mental health AI, AIWEBTOOLS.AI
            </p>
          </div>
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all duration-300 text-xl font-medium hover:text-gradient-multi"
          >
            © 2025 AI WEB TOOLS LLC - AIWEBTOOLS.AI All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
