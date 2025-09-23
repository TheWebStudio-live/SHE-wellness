import { useState, useEffect } from 'react';

const sheWords = [
  'Self-love Healing Evolution',
  'Sacred Healing Energy', 
  'Shifting Her Energy',
  'Self-centered Healthy Empowerment',
  'Self Healing Empowerment',
  'Soul Healing Era',
  'Self-honor Healing Empowerment',
  'Stand Heal Elevate'
];

export default function SHEWordCollage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sheWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-12 pb-20 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Word Carousel */}
        <div className="relative h-56 md:h-40 lg:h-48 flex items-center justify-center">
          
          {/* Rotating Words */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`text-2xl md:text-4xl lg:text-5xl font-serif font-light text-primary/70 text-center transition-all duration-300 transform ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
              }`}
              data-testid={`text-carousel-word-${currentIndex}`}
            >
              {sheWords[currentIndex]}
            </div>
          </div>
          
          {/* Central S.H.E. */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="text-center bg-background/80 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1" data-testid="text-central-she">
                S.H.E.
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium" data-testid="text-central-tagline">
                Self-love • Healing • Evolution
              </p>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sheWords.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                data-testid={`button-carousel-indicator-${index}`}
                aria-label={`Go to word ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}