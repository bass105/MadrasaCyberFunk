import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import GallerySection from "@/components/GallerySection";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen" data-testid="home-page">
      {/* Matrix Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute w-full h-full">
          <div className="animate-matrix text-cyber-blue opacity-20 text-xs font-mono">
            01010101 11001100 10101010 01010101 11001100 10101010
          </div>
        </div>
      </div>

      <Navigation />
      <HeroSection />
      <ProfileSection />
      <GallerySection />
      <ProgramsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
