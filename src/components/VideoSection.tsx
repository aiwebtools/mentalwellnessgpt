
import React, { useRef } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium inline-block mb-4">
              Important Disclaimer
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              <span className="text-gradient-multi">Disclaimer</span>
            </h2>
            
            <p className="text-white/70 max-w-2xl mx-auto">
              This AI tool is not a substitute for professional medical advice, diagnosis, or treatment. Please consult with qualified healthcare professionals for serious mental health concerns.
            </p>
          </div>
          
          <div className="relative">
            {/* Simple video container without any overlays */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* Video embed - completely clean without any overlays */}
              <div className="relative aspect-video">
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_e6DtLUv-2Q?enablejsapi=1&autoplay=1&mute=0&vq=hd1080"
                  title="Mental Wellness GPT Inspiration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
            
            {/* Decorative glow effects */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial from-cyberpunk-cyan/20 to-transparent blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-radial from-cyberpunk-pink/20 to-transparent blur-xl"></div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/60 italic text-sm mb-4">
              "In helping others, we often find our own healing. This is the philosophy behind Mental Wellness GPT."
            </p>
            <div className="glass-card p-3 rounded-lg">
              <p className="text-white/70 text-xs">
                <strong>Disclaimer:</strong> Mental Wellness GPT is an AI assistance tool and not a replacement for professional therapy or medical treatment. If you're experiencing a mental health crisis, please contact emergency services or a qualified healthcare provider immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
