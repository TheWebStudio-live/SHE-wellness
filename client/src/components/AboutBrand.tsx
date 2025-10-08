import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Users, Zap } from 'lucide-react';

const brandValues = [
  {
    icon: Heart,
    title: 'Self-Love First',
    description: 'Learning to love and center yourself is the foundation of all healthy relationships and personal growth.'
  },
  {
    icon: Sparkles,
    title: 'Healing Journey',
    description: 'Transform pain into power through intentional healing practices and compassionate self-discovery.'
  },
  {
    icon: Zap,
    title: 'Empowered Living',
    description: 'Step into your authentic power and create a life that reflects your true values and desires.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a sisterhood of women committed to growth, healing, and supporting each other\'s evolution.'
  }
];

export default function AboutBrand() {
  return (
    <section id="about-she" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-brand-title">
            Coaching Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-brand-description">
            Tired of toxic cycles holding you back? Reclaim your heart, career, and life. 1:1 coaching—$99 accessible rate, $150 standard. The new season is your invitation: end toxic patterns, feel true success, and step into your unbothered era.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-foreground font-medium mb-4" data-testid="text-booking-instruction">
            Book your 1:1 coaching session below
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-book-accessible" className="flex-1 sm:flex-none" asChild>
              <a href="https://peta.podia.com/transformational-coaching-accessible-rate/buy" target="_blank" rel="noopener noreferrer">
                🌱 Book with Accessible Rate
              </a>
            </Button>
            <Button size="lg" data-testid="button-book-standard" className="flex-1 sm:flex-none" asChild>
              <a href="https://peta.podia.com/the-soul-shift-with-s-h-e/buy" target="_blank" rel="noopener noreferrer">
                🌟 Book with Standard Rate
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}