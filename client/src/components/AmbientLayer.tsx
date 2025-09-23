interface AmbientLayerProps {
  variant?: 'sage' | 'earth' | 'teal-sage' | 'amber-sage';
  intensity?: 'subtle' | 'medium' | 'enhanced';
  pattern?: 'none' | 'vignette' | 'radial' | 'weave';
  positions?: Array<{ x: number; y: number }>;
  className?: string;
}

export default function AmbientLayer({ 
  variant = 'sage',
  intensity = 'subtle',
  pattern = 'radial',
  positions = [{ x: 20, y: 30 }, { x: 80, y: 40 }, { x: 50, y: 80 }],
  className = ''
}: AmbientLayerProps) {
  
  const getVariantClass = () => {
    switch (variant) {
      case 'earth':
        return 'bg-ambient-earth';
      case 'teal-sage':
        return 'bg-ambient-teal-sage';
      case 'amber-sage':
        return 'bg-ambient-amber-sage';
      default:
        return 'bg-ambient-sage';
    }
  };

  const getIntensityClass = () => {
    switch (intensity) {
      case 'medium':
        return 'opacity-8';
      case 'enhanced':
        return 'opacity-12';
      default:
        return 'opacity-4';
    }
  };

  const getPatternOverlay = () => {
    if (pattern === 'vignette') {
      return (
        <div 
          className="absolute inset-0 pointer-events-none bg-vignette"
          style={{
            background: `radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)`
          }}
        />
      );
    }
    
    if (pattern === 'weave') {
      return (
        <div 
          className="absolute inset-0 pointer-events-none opacity-3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      );
    }

    return null;
  };

  const getRadialGradients = () => {
    if (pattern === 'none') return null;

    return positions.map((pos, index) => (
      <div
        key={index}
        className={`absolute inset-0 pointer-events-none ${getVariantClass()} ${getIntensityClass()}`}
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, var(--ambient-color) 0%, transparent 55%)`
        }}
      />
    ));
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {getRadialGradients()}
      {getPatternOverlay()}
    </div>
  );
}