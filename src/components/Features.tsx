
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
    title: "CBT Techniques",
    description: "Bean uses cognitive behavioral therapy methods to help you identify and reframe negative thought patterns.",
    color: "cyan"
  },
  {
    icon: <Heart size={24} />,
    title: "Empathetic Understanding",
    description: "Experience genuine empathy through advanced natural language processing that recognizes emotional cues.",
    color: "pink"
  },
  {
    icon: <Shield size={24} />,
    title: "Safe & Confidential",
    description: "All conversations are private and secure, creating a safe space for you to express your feelings openly.",
    color: "purple"
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Ongoing Dialogue",
    description: "Bean keeps the conversation flowing naturally with thoughtful questions that build trust and connection.",
    color: "blue"
  },
  {
    icon: <Zap size={24} />,
    title: "Immediate Support",
    description: "Access Bean anytime, day or night, for immediate emotional support without waiting for appointments.",
    color: "yellow"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Personalized Guidance",
    description: "Receive tailored advice and coping strategies based on your unique situation and emotional needs.",
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
            How Bean Works
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Advanced AI Technology With a <span className="text-gradient-multi">Human Touch</span>
          </h2>
          
          <p className="text-white/70">
            Bean combines cutting-edge artificial intelligence with evidence-based therapeutic approaches to provide meaningful mental wellness support.
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
      </div>
    </section>
  );
};

export default Features;
