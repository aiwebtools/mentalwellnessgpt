
import React, { useRef, useState } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current && !isPlaying) {
      // Update the YouTube iframe src to start playing at 1080p quality
      const baseUrl = videoRef.current.src.split('?')[0];
      videoRef.current.src = `${baseUrl}?enablejsapi=1&autoplay=1&mute=0&vq=hd1080`;
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium inline-block mb-4">
              Our Inspiration
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              The Story Behind <span className="text-gradient-multi">Mental Wellness GPT</span>
            </h2>
            
            <p className="text-white/70 max-w-2xl mx-auto">
              My inspiration for this tool is based on a true story. We must help others to help ourselves.
            </p>
          </div>
          
          <div className="relative">
            {/* Video container with fancy border */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-xl p-[2px] pointer-events-none z-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyberpunk-cyan via-cyberpunk-purple to-cyberpunk-pink opacity-50 animate-rotate-slow"></div>
              </div>
              
              {/* Video embed */}
              <div className="relative aspect-video">
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer z-20"
                    onClick={handlePlayVideo}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                        <svg className="w-8 h-8 text-cyberpunk-purple" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_e6DtLUv-2Q?enablejsapi=1"
                  title="Mental Wellness GPT Inspiration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Decorative glow effects */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial from-cyberpunk-cyan/20 to-transparent blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-radial from-cyberpunk-pink/20 to-transparent blur-xl"></div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/60 italic text-sm">
              "In helping others, we often find our own healing. This is the philosophy behind Mental Wellness GPT."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
