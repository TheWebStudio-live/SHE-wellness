const sheWords = [
  { text: 'Self-love Healing Evolution', size: 'text-lg', rotation: 'rotate-1', position: 'top-4 left-2' },
  { text: 'Sacred Healing Energy', size: 'text-base', rotation: '-rotate-2', position: 'top-12 left-1/4' },
  { text: 'Shifting Her Energy', size: 'text-lg', rotation: 'rotate-3', position: 'top-4 left-1/2' },
  { text: 'Self-centered Healthy Empowerment', size: 'text-sm', rotation: '-rotate-1', position: 'top-12 right-1/4' },
  { text: 'Self Healing Empowerment', size: 'text-base', rotation: 'rotate-2', position: 'bottom-12 left-8' },
  { text: 'Soul Healing Era', size: 'text-lg', rotation: '-rotate-3', position: 'bottom-4 left-1/3' },
  { text: 'Self-honor Healing Empowerment', size: 'text-sm', rotation: 'rotate-1', position: 'bottom-12 right-1/3' },
  { text: 'Stand Heal Elevate', size: 'text-xl', rotation: '-rotate-1', position: 'bottom-4 right-8' }
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
        <div className="relative h-32 md:h-40 lg:h-48">
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
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1" data-testid="text-central-she">
                S.H.E.
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium" data-testid="text-central-tagline">
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