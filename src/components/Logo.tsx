
import React from 'react';
import { Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, withText = true }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative">
        <Brain size={32} className="text-cyberpunk-cyan animate-pulse-glow" />
        <div className="absolute inset-0 blur-md bg-cyberpunk-cyan/30 rounded-full animate-pulse-glow" />
      </div>
      
      {withText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-wide text-gradient-cyan">
            Mental Wellness GPT
          </span>
          <span className="text-xs opacity-70 tracking-wider">
            Presented by AiWebTools.Ai
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
