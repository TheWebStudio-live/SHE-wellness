const sheWords = [
  { text: 'Self-love Healing Evolution', size: 'text-4xl', font: 'font-serif', opacity: 'opacity-90', layer: 'z-10' },
  { text: 'Sacred Healing Energy', size: 'text-2xl', font: 'font-sans', opacity: 'opacity-40', layer: 'z-0' },
  { text: 'Shifting Her Energy', size: 'text-3xl', font: 'font-serif', opacity: 'opacity-70', layer: 'z-20' },
  { text: 'Self-centered Healthy Empowerment', size: 'text-lg', font: 'font-sans', opacity: 'opacity-30', layer: 'z-0' },
  { text: 'Self Healing Empowerment', size: 'text-5xl', font: 'font-serif', opacity: 'opacity-80', layer: 'z-30' },
  { text: 'Soul Healing Era', size: 'text-xl', font: 'font-sans', opacity: 'opacity-50', layer: 'z-10' },
  { text: 'Self-honor Healing Empowerment', size: 'text-sm', font: 'font-sans', opacity: 'opacity-25', layer: 'z-0' },
  { text: 'Stand Heal Elevate', size: 'text-6xl', font: 'font-serif', opacity: 'opacity-95', layer: 'z-40' }
];

export default function SHEWordCollage() {
  return (
    <section className="py-16 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-collage-title">
            What S.H.E. Means
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-collage-description">
            Explore the powerful meanings behind S.H.E. - each one representing a different aspect of your journey to empowerment and healing.
          </p>
        </div>
        
        {/* Horizontal Word Collage */}
        <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {sheWords.map((word, index) => (
              <div
                key={index}
                className={`relative ${word.size} ${word.font} ${word.opacity} ${word.layer} text-primary hover:opacity-100 transition-all duration-500 cursor-default select-none whitespace-nowrap`}
                style={{
                  transform: `rotate(${Math.random() * 6 - 3}deg) translateY(${Math.random() * 20 - 10}px)`,
                  animationDelay: `${index * 0.2}s`
                }}
                data-testid={`text-collage-word-${index}`}
              >
                {word.text}
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/20 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/20 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Central S.H.E. */}
        <div className="text-center mt-8">
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2" data-testid="text-central-she">
            S.H.E.
          </h3>
          <p className="text-base md:text-lg text-muted-foreground font-medium" data-testid="text-central-tagline">
            Self-love • Healing • Evolution
          </p>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-collage-footer">
            Every woman's journey is unique, and S.H.E. encompasses all the ways you can embrace your power, 
            heal your heart, and evolve into your most authentic self.
          </p>
        </div>
      </div>
    </section>
  );
}