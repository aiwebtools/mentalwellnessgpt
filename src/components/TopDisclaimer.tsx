
import React from 'react';
import { Info } from 'lucide-react';

const TopDisclaimer: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-cyberpunk-purple/20 to-cyberpunk-pink/20 border-b border-white/10 py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-xs">
        <Info className="text-cyberpunk-cyan flex-shrink-0" size={14} />
        <p className="text-white/90 text-center">
          <strong>AI Tool Disclaimer:</strong> This is an AI assistant for mental wellness support, not a licensed therapist or medical professional.
        </p>
      </div>
    </div>
  );
};

export default TopDisclaimer;
