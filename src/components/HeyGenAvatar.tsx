
import React, { useEffect } from 'react';

const HeyGenAvatar: React.FC = () => {
  useEffect(() => {
    // This effect will run only on client-side after component mounts
    const script = document.createElement('script');
    script.innerHTML = `!function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJBbm5fVGhlcmFwaXN0X3B1YmxpYyIsInBy%0D%0AZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzc1ZTBhODdiN2Zk%0D%0AOTRmMDk4MWZmMzk4YjU5M2RkNDdmXzQ1NTcwL3ByZXZpZXdfdGFsa180LndlYnAiLCJuZWVkUmVt%0D%0Ab3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImRmNDAxMmY5Mjk1NjQwYjdi%0D%0ANWJmMmJhNTY3NjAxMDI3IiwidXNlcm5hbWUiOiI5ZDY3MTY1OGYxZjk0YjcxOWIyZTU4ODYzNWQw%0D%0AMWY3YiJ9&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`\\n  #heygen-streaming-embed {\\n    z-index: 9999;\\n    position: fixed;\\n    left: 40px;\\n    bottom: 40px;\\n    width: 200px;\\n    height: 200px;\\n    border-radius: 50%;\\n    border: 2px solid #fff;\\n    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);\\n    transition: all linear 0.1s;\\n    overflow: hidden;\\n\\n    opacity: 0;\\n    visibility: hidden;\\n  }\\n  #heygen-streaming-embed.show {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n  #heygen-streaming-embed.expand {\\n    \${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}\\n    border: 0;\\n    border-radius: 8px;\\n  }\\n  #heygen-streaming-container {\\n    width: 100%;\\n    height: 100%;\\n  }\\n  #heygen-streaming-container iframe {\\n    width: 100%;\\n    height: 100%;\\n    border: 0;\\n  }\\n  \`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(window);`;
    document.body.appendChild(script);

    return () => {
      // Cleanup if the component unmounts
      const existingEmbed = document.getElementById('heygen-streaming-embed');
      if (existingEmbed) {
        document.body.removeChild(existingEmbed);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HeyGenAvatar;
