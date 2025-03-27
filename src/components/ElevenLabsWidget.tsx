
import React, { useEffect } from 'react';

const ElevenLabsWidget: React.FC = () => {
  useEffect(() => {
    // This effect ensures the script loads after the component mounts
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <elevenlabs-convai 
        agent-id="8D3nsKrt1TsE65r7GVuu"
        api-key="sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2"
      ></elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsWidget;
