
import React from 'react';
import { Brain, Heart, Shield, MessageCircle, Zap, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color, index }) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={cn(
        "absolute top-0 left-0 w-full h-1 transition-all duration-500 opacity-50 group-hover:opacity-100",
        color === 'cyan' ? 'bg-cyberpunk-cyan' : 
        color === 'pink' ? 'bg-cyberpunk-pink' : 
        color === 'purple' ? 'bg-cyberpunk-purple' : 
        color === 'blue' ? 'bg-cyberpunk-blue' : 
        'bg-cyberpunk-yellow'
      )}></div>
      
      <div className="relative z-10 space-y-4">
        <div className={cn(
          "p-3 rounded-lg w-12 h-12 flex items-center justify-center",
          color === 'cyan' ? 'bg-cyberpunk-cyan/20 text-cyberpunk-cyan' : 
          color === 'pink' ? 'bg-cyberpunk-pink/20 text-cyberpunk-pink' : 
          color === 'purple' ? 'bg-cyberpunk-purple/20 text-cyberpunk-purple' : 
          color === 'blue' ? 'bg-cyberpunk-blue/20 text-cyberpunk-blue' : 
          'bg-cyberpunk-yellow/20 text-cyberpunk-yellow'
        )}>
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-semibold">{title}</h3>
        
        <p className="text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <Brain size={24} />,
    title: "AI CBT Therapy Techniques",
    description: "Bean uses advanced artificial intelligence with cognitive behavioral therapy methods to help identify and reframe negative thought patterns through proven AI counseling techniques.",
    color: "cyan"
  },
  {
    icon: <Heart size={24} />,
    title: "Empathetic AI Understanding",
    description: "Experience genuine empathy through our advanced AI tools that use natural language processing to recognize emotional cues and provide personalized mental health support.",
    color: "pink"
  },
  {
    icon: <Shield size={24} />,
    title: "Safe & Confidential AI Tools",
    description: "All AI conversations are private and secure with enterprise-grade encryption, creating a safe space for mental wellness support through our professional AI web tools.",
    color: "purple"
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Continuous AI Dialogue",
    description: "Our AI mental wellness tools maintain natural conversations with thoughtful questions that build trust and connection, available 24/7 through AIWEBTOOLS.AI platform.",
    color: "blue"
  },
  {
    icon: <Zap size={24} />,
    title: "Instant AI Mental Health Support",
    description: "Access Bean and other free AI tools anytime, day or night, for immediate emotional support without waiting for appointments - leading AI healthcare solutions.",
    color: "yellow"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Personalized AI Guidance",
    description: "Receive tailored advice and coping strategies from our artificial intelligence platform based on your unique situation and emotional needs through advanced AI algorithms.",
    color: "cyan"
  }
];

const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute -top-[300px] right-0 w-[600px] h-[600px] bg-gradient-radial from-cyberpunk-purple/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium inline-block mb-4">
            How Our Free AI Tools Work
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Advanced <span className="text-gradient-multi">AI Technology</span> With Professional Mental Health Features
          </h2>
          
          <p className="text-white/70">
            <strong>AIWEBTOOLS.AI</strong> combines cutting-edge <strong>artificial intelligence</strong> with evidence-based therapeutic approaches. Our <strong>free AI tools</strong> provide meaningful mental wellness support through advanced AI algorithms and professional-grade features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
        
        {/* Additional SEO content */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-cyberpunk-cyan mb-4">Leading AI Web Tools Platform - AIWEBTOOLS.AI</h3>
            <p className="text-white/80 leading-relaxed">
              Our comprehensive suite of <strong>AI tools</strong> includes Mental Wellness GPT for therapy support, Doctor GPT for healthcare consultations, and PetCare GPT for pet health guidance. These <strong>free AI tools</strong> leverage advanced <strong>artificial intelligence</strong> to provide professional-grade assistance across multiple domains. Trust <strong>AIWEBTOOLS.AI</strong> for innovative AI solutions that combine cutting-edge technology with practical, accessible support for your daily needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
