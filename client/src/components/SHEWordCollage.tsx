const sheWords = [
  { text: 'Self-love Healing Evolution', size: 'text-3xl', rotation: 'rotate-2', position: 'top-4 left-8' },
  { text: 'Sacred Healing Energy', size: 'text-2xl', rotation: '-rotate-3', position: 'top-16 right-12' },
  { text: 'Shifting Her Energy', size: 'text-xl', rotation: 'rotate-6', position: 'top-32 left-1/4' },
  { text: 'Self-centered Healthy Empowerment', size: 'text-lg', rotation: '-rotate-2', position: 'top-48 right-1/4' },
  { text: 'Self Healing Empowerment', size: 'text-2xl', rotation: 'rotate-4', position: 'bottom-32 left-16' },
  { text: 'Soul Healing Era', size: 'text-xl', rotation: '-rotate-5', position: 'bottom-48 right-16' },
  { text: 'Self-honor Healing Empowerment', size: 'text-lg', rotation: 'rotate-3', position: 'bottom-16 left-1/3' },
  { text: 'Stand Heal Elevate', size: 'text-4xl', rotation: '-rotate-1', position: 'bottom-8 right-1/3' }
];

export default function SHEWordCollage() {
  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-collage-title">
            What S.H.E. Means
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-collage-description">
            Explore the powerful meanings behind S.H.E. - each one representing a different aspect of your journey to empowerment and healing.
          </p>
        </div>
        
        {/* Word Collage */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px]">
          {sheWords.map((word, index) => (
            <div
              key={index}
              className={`absolute ${word.position} ${word.rotation} ${word.size} font-serif font-light text-primary/60 hover:text-primary/80 transition-colors duration-300 cursor-default select-none`}
              data-testid={`text-collage-word-${index}`}
            >
              {word.text}
            </div>
          ))}
          
          {/* Central S.H.E. */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
              <h3 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-2" data-testid="text-central-she">
                S.H.E.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground font-medium" data-testid="text-central-tagline">
                Self-love • Healing • Evolution
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-collage-footer">
            Every woman's journey is unique, and S.H.E. encompasses all the ways you can embrace your power, 
            heal your heart, and evolve into your most authentic self.
          </p>
        </div>
      </div>
    </section>
  );
}