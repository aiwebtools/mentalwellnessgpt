
import React from 'react';
import { AlertTriangle, AlertCircle } from 'lucide-react';

const EmergencyDisclaimer: React.FC = () => {
  return (
    <div className="w-full bg-cyberpunk-pink/10 border-y border-cyberpunk-pink/30 py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
        <AlertCircle className="text-cyberpunk-pink flex-shrink-0" size={20} />
        <p className="text-white/90 font-medium text-center">
          <strong>IMPORTANT:</strong> Mental Wellness GPT is not a replacement for professional mental healthcare. 
          If you're experiencing a mental health emergency, please contact a healthcare professional or call 911 immediately.
        </p>
      </div>
    </div>
  );
};

export default EmergencyDisclaimer;
