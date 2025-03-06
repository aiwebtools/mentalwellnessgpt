
import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div 
      className={cn(
        "border-b border-white/10 py-6 transition-all duration-300",
        isOpen ? "pb-6" : "",
        index === 0 ? "border-t" : ""
      )}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium pr-8">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <MinusCircle size={20} className="text-cyberpunk-cyan" />
          ) : (
            <PlusCircle size={20} className="text-white/70" />
          )}
        </div>
      </button>
      
      <div className={cn(
        "mt-4 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "Is Mental Wellness GPT a replacement for professional therapy?",
    answer: "No, Mental Wellness GPT is designed as a supportive tool, not a replacement for professional therapy. While Bean uses evidence-based approaches like CBT, it should be considered a complement to professional care for those with diagnosed mental health conditions."
  },
  {
    question: "How does Bean use Cognitive Behavioral Therapy (CBT)?",
    answer: "Bean incorporates CBT principles by helping you identify negative thought patterns, challenging unhelpful beliefs, and suggesting practical exercises to reframe your thinking. These techniques are woven naturally into conversations to help you develop healthier cognitive habits."
  },
  {
    question: "Is my conversation with Bean private and secure?",
    answer: "Yes, privacy is a top priority. Your conversations with Bean are confidential and secured with encryption technology. We do not share your personal information or conversation details with third parties."
  },
  {
    question: "Can I use Mental Wellness GPT for emergency mental health situations?",
    answer: "Mental Wellness GPT is not designed for emergency situations. If you're experiencing a mental health emergency or having thoughts of harming yourself or others, please contact your local emergency services, call a crisis hotline, or go to your nearest emergency room immediately."
  },
  {
    question: "How does Bean learn and improve over time?",
    answer: "Bean utilizes advanced machine learning algorithms that help it better understand emotional nuances and provide more personalized support over time. The system is regularly updated with the latest research in mental health approaches and natural language processing."
  },
  {
    question: "Can I use Mental Wellness GPT on any device?",
    answer: "Yes, Mental Wellness GPT is accessible through OpenAI's ChatGPT platform on any device with internet access, including smartphones, tablets, and computers, making mental wellness support available wherever you are."
  },
  {
    question: "Are there any costs associated with using Mental Wellness GPT?",
    answer: "Access to Mental Wellness GPT requires a ChatGPT Plus subscription. Please check OpenAI's current pricing for details on subscription costs and any usage limitations."
  },
  {
    question: "How does Bean differ from other mental health chatbots?",
    answer: "Bean is distinguished by its implementation of genuine CBT techniques, its focus on maintaining ongoing dialogue rather than concluding conversations prematurely, and its ability to provide personalized, empathetic responses tailored to your specific emotional needs and circumstances."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/90 font-medium inline-block mb-4">
            Questions & Answers
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Frequently Asked <span className="text-gradient-multi">Questions</span>
          </h2>
          
          <p className="text-white/70">
            Find answers to common questions about Mental Wellness GPT and how it can support your emotional well-being.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
