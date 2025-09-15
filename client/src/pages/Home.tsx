import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutBrand from '@/components/AboutBrand';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutBrand />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}