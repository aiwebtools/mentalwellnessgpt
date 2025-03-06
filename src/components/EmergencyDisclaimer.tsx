
import React from 'react';
import { AlertCircle } from 'lucide-react';

const EmergencyDisclaimer: React.FC = () => {
  return (
    <div className="w-full bg-cyberpunk-pink/10 border-y border-cyberpunk-pink/30 py-3 px-4">
      <div className="container mx-auto flex items-center gap-2 text-xs sm:text-sm">
        <AlertCircle className="text-cyberpunk-pink flex-shrink-0 min-w-[16px]" size={16} />
        <p className="text-white/90 font-medium">
          <strong>IMPORTANT:</strong> Mental Wellness GPT is not a replacement for professional mental healthcare. 
          If you're experiencing a mental health emergency, please contact a healthcare professional or call 911 immediately.
        </p>
      </div>
    </div>
  );
};

export default EmergencyDisclaimer;
