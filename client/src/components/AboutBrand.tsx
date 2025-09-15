import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-brand-title">
            About S.H.E.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-brand-description">
            S.H.E. is more than a wellness brand—it's a movement dedicated to empowering women to center themselves, 
            reclaim their power, and thrive both solo and in relationships. Our mission is to provide practical tools, 
            transformative experiences, and a supportive community for women ready to step into their fullest potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-mission-title">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-mission-description">
              We believe every woman deserves to live a life filled with purpose, confidence, and joy. 
              Through breakup recovery, wellness coaching, and empowerment tools, S.H.E. guides women 
              on their journey to self-discovery and authentic living. Whether you're healing from heartbreak 
              or simply ready to level up your life, we're here to support your transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}