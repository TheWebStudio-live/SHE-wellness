import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import AboutBrand from '@/components/AboutBrand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutMe />
      <AboutBrand />
      <Footer />
    </div>
  );
}