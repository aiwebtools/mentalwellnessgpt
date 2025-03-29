
import React, { useEffect, useRef } from 'react';

const HeyGenAvatar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing content
    containerRef.current.innerHTML = '';
    
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.allowFullscreen = false;
    iframe.title = "Bean AI Assistant";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = "https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJBbm5fVGhlcmFwaXN0X3B1YmxpYyIsInBy%0D%0AZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzc1ZTBhODdiN2Zk%0D%0AOTRmMDk4MWZmMzk4YjU5M2RkNDdmXzQ1NTcwL3ByZXZpZXdfdGFsa180LndlYnAiLCJuZWVkUmVt%0D%0Ab3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImRmNDAxMmY5Mjk1NjQwYjdi%0D%0ANWJmMmJhNTY3NjAxMDI3IiwidXNlcm5hbWUiOiI5ZDY3MTY1OGYxZjk0YjcxOWIyZTU4ODYzNWQw%0D%0AMWY3YiJ9&inIFrame=1";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    
    // Append the iframe to the container
    containerRef.current.appendChild(iframe);
  }, []);

  return (
    <section className="py-16 bg-cyberpunk-darkPurple/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient-multi">Meet Bean</span> - Your AI Mental Health Assistant
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Interact directly with Bean's AI avatar. Click to start a conversation and experience 
            personalized mental health support.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden glass-card"
          style={{ 
            minHeight: "400px",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)"
          }}
        >
          {/* The iframe will be inserted here by the useEffect */}
        </div>
        
        <div className="mt-6 text-center text-sm text-white/60">
          Click to speak with Bean. Allow microphone access for the best experience.
        </div>
      </div>
    </section>
  );
};

export default HeyGenAvatar;
