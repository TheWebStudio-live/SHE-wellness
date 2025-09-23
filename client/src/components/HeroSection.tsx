import { Button } from '@/components/ui/button';
import heroBackgroundUrl from '@/assets/images/hero-background.png';

export default function HeroSection() {
  return (
    <>
      <style>
        {`
          .hero-background {
            background-position: 70% center;
          }
          @media (min-width: 768px) {
            .hero-background {
              background-position: center;
            }
          }
        `}
      </style>
      <section 
        className="hero-background relative h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-no-repeat -mt-0 -mx-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroBackgroundUrl})`
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
        </div>
      </div>
    </section>
    </>
  );
}