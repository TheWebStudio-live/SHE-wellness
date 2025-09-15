import { Button } from '@/components/ui/button';
import heroBackground from '@assets/generated_images/Wellness_background_woman_positioned_right_5624fb3f.png';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6" data-testid="text-hero-title">
          S.H.E.
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light opacity-90" data-testid="text-hero-subtitle">
          Self-love • Healing • Evolution
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-80" data-testid="text-hero-description">
          Empowering women to reclaim their power, heal from heartbreak, and create lives filled with purpose, confidence, and joy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg"
            data-testid="button-start-journey"
          >
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/20 backdrop-blur border-white/30 text-white hover:bg-white/30 px-8 py-3 text-lg"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}