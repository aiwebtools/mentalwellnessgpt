
/// <reference types="vite/client" />

// Add custom element type definition for ElevenLabs Convai widget
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'agent-id'?: string;
      'api-key'?: string;
    }, HTMLElement>;
  }
}
