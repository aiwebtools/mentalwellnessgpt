
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerPopup />
      <Header />
      <div className="mt-[60px]">
        <EmergencyDisclaimer />
      </div>
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
