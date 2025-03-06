
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  stars: number;
  index: number;
  accent?: 'cyan' | 'pink' | 'purple';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  title, 
  stars, 
  index,
  accent = 'cyan'
}) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 relative overflow-hidden"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Accent glow */}
      <div className={cn(
        "absolute -right-10 -top-10 w-20 h-20 rounded-full blur-xl opacity-30",
        accent === 'cyan' ? 'bg-cyberpunk-cyan' : 
        accent === 'pink' ? 'bg-cyberpunk-pink' : 
        'bg-cyberpunk-purple'
      )}></div>
      
      <Quote 
        size={40} 
        className={cn(
          "opacity-20 absolute top-4 right-4",
          accent === 'cyan' ? 'text-cyberpunk-cyan' : 
          accent === 'pink' ? 'text-cyberpunk-pink' : 
          'text-cyberpunk-purple'
        )} 
      />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < stars ? "text-cyberpunk-yellow fill-cyberpunk-yellow" : "text-gray-500"} 
          />
        ))}
      </div>
      
      <p className="text-white/80 mb-6">{quote}</p>
      
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center font-medium",
          accent === 'cyan' ? 'bg-cyberpunk-cyan/20 text-cyberpunk-cyan' : 
          accent === 'pink' ? 'bg-cyberpunk-pink/20 text-cyberpunk-pink' : 
          'bg-cyberpunk-purple/20 text-cyberpunk-purple'
        )}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-white/60">{title}</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Bean helped me through a really difficult time in my life. The conversations feel so natural and understanding, it's like talking to a friend who's also a therapist.",
    name: "Sarah K.",
    title: "Graduate Student",
    stars: 5,
    accent: 'cyan' as const
  },
  {
    quote: "I was skeptical about AI therapy, but Bean surprised me. It's available whenever I need support, and the CBT techniques have genuinely improved how I handle stress.",
    name: "Michael R.",
    title: "Software Engineer",
    stars: 5,
    accent: 'pink' as const
  },
  {
    quote: "As someone who struggles with traditional therapy settings, Bean has been a game-changer. I can express myself without feeling judged, and the guidance is actually helpful.",
    name: "Jamie T.",
    title: "Healthcare Worker",
    stars: 4,
    accent: 'purple' as const
  },
  {
    quote: "The personalized approach Bean takes to my anxiety issues has given me practical tools I use daily. It's like having a pocket therapist whenever dark thoughts creep in.",
    name: "Alex P.",
    title: "Marketing Professional",
    stars: 5,
    accent: 'pink' as const
  },
  {
    quote: "Bean helped me identify thought patterns I didn't even realize were contributing to my depression. The regular check-ins and follow-up questions show a level of care I didn't expect.",
    name: "Taylor J.",
    title: "Retail Manager",
    stars: 5,
    accent: 'cyan' as const
  },
  {
    quote: "As a busy parent, finding time for mental health care seemed impossible. Bean fits into my chaotic schedule and has taught me coping mechanisms that work in real life.",
    name: "Jordan W.",
    title: "Parent & Entrepreneur",
    stars: 4,
    accent: 'purple' as const
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-[300px] left-0 w-[600px] h-[600px] bg-gradient-radial from-cyberpunk-blue/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium inline-block mb-4">
            Success Stories
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Real People, Real <span className="text-gradient-multi">Results</span>
          </h2>
          
          <p className="text-white/70">
            Hear from individuals who have experienced meaningful support and growth through their conversations with Bean.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              stars={testimonial.stars}
              accent={testimonial.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
