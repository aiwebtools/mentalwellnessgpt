
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';
import EmergencyDisclaimer from '@/components/EmergencyDisclaimer';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import HeyGenAvatar from '@/components/HeyGenAvatar';
import TopDisclaimer from '@/components/TopDisclaimer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerPopup />
      <Header />
      <div className="mt-[60px]">
        <TopDisclaimer />
        <EmergencyDisclaimer />
      </div>
      <main>
        <Hero />
        <VideoSection />
        <HeyGenAvatar />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      <ElevenLabsWidget />
    </div>
  );
};

export default Index;
