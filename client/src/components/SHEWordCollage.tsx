import { useState, useEffect } from 'react';

const sheWords = [
  'Self-love Healing Evolution',
  'Sacred Healing Energy', 
  'Shifting Her Energy',
  'Self Healing Empowerment',
  'Soul Healing Era',
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
    <section className="pt-4 pb-6 bg-muted/20 relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* S.H.E. Title above Word Carousel */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary" data-testid="text-static-she-title">
            S.H.E.
          </h2>
        </div>
        
        {/* Word Carousel */}
        <div className="relative min-h-20 sm:min-h-20 md:h-20 lg:h-24 flex items-center justify-center w-full overflow-hidden">
          
          {/* Rotating Words - Horizontal Layout */}
          <div className="flex items-center justify-center w-full max-w-full px-2">
            <div 
              className={`flex items-center justify-center flex-wrap md:flex-nowrap space-x-1.5 sm:space-x-2 md:space-x-4 lg:space-x-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary/80 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
              }`}
              data-testid={`text-carousel-word-${currentIndex}`}
            >
              {sheWords[currentIndex]?.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="whitespace-nowrap">
                  {word}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}