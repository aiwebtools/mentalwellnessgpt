
import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-gradient-radial from-cyberpunk-pink/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium inline-block mb-4">
            Important Information
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Legal <span className="text-gradient-multi">Disclaimer</span>
          </h2>
          
          <p className="text-white/70">
            Please review the following important information about the Mental Wellness GPT service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 space-y-6">
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} className="text-cyberpunk-pink flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Not a Substitute for Professional Care</h3>
              <p className="text-white/70">
                Mental Wellness GPT and Bean are AI tools designed to provide supportive conversation and general well-being guidance. They are NOT substitutes for professional mental health treatment, diagnosis, or advice from qualified healthcare providers. Always consult with licensed mental health professionals for clinical concerns or conditions.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} className="text-cyberpunk-pink flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Emergency Situations</h3>
              <p className="text-white/70">
                Mental Wellness GPT is not equipped to handle crisis or emergency situations. If you or someone you know is experiencing a mental health emergency, having thoughts of self-harm or suicide, or requires immediate assistance, please contact emergency services (911 in the US), go to your nearest emergency room, or contact the National Suicide Prevention Lifeline at 1-800-273-8255.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Info size={24} className="text-cyberpunk-cyan flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Limitations of AI Technology</h3>
              <p className="text-white/70">
                While Mental Wellness GPT utilizes advanced AI technology, it has inherent limitations. It may not fully understand complex human emotions or specific contexts, and responses are generated based on patterns in training data rather than personalized clinical assessment.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Info size={24} className="text-cyberpunk-cyan flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Privacy Considerations</h3>
              <p className="text-white/70">
                Your interactions with Mental Wellness GPT are subject to OpenAI's privacy policies. While we prioritize confidentiality, please be mindful of sharing sensitive personal information. For complete details on data handling, please review OpenAI's Privacy Policy.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Info size={24} className="text-cyberpunk-cyan flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">By Using This Service</h3>
              <p className="text-white/70">
                By using Mental Wellness GPT, you acknowledge and agree to these limitations and disclaimers. AI WEB TOOLS LLC and its affiliates disclaim all warranties and liabilities associated with the use of this service to the fullest extent permitted by law.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              © 2025 AI WEB TOOLS LLC. All rights reserved. Mental Wellness GPT is provided "as is" without warranties of any kind, either express or implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
