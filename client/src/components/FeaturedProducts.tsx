import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, BookOpen, Mic, Star, Clock, Users } from 'lucide-react';

const products = [
  {
    id: 'apparel',
    title: 'S.H.E. Collection',
    subtitle: 'Stand. Heal. Elevate.',
    description: 'Empowering apparel that reminds you of your strength and journey every day.',
    icon: ShoppingBag,
    price: 'Starting at $25',
    features: ['Premium Quality', 'Empowering Designs', 'Sustainable Materials'],
    cta: 'Shop Collection',
    popular: false
  },
  {
    id: 'course',
    title: 'The Breakthrough Experience',
    subtitle: 'Heartache Recovery Course',
    description: 'A transformative 10-module journey designed to guide you through self-reinvention, inner strength, and emotional freedom.',
    icon: BookOpen,
    price: '$99',
    originalPrice: '$249',
    features: ['10 Comprehensive Modules', 'Lifetime Access', '14-Day Money-Back Guarantee', 'Self-Paced Learning'],
    cta: 'Start Course',
    popular: true
  },
  {
    id: 'speaking',
    title: 'Public Speaking',
    subtitle: 'Book Peta for Your Event',
    description: 'Inspiring keynotes and workshops on empowerment, healing, and women\'s wellness for your audience.',
    icon: Mic,
    price: 'Custom Pricing',
    features: ['Keynote Speeches', 'Interactive Workshops', 'Panel Discussions', 'Virtual & In-Person'],
    cta: 'Book Speaking',
    popular: false
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-products-title">
            Transform Your Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-description">
            Discover our collection of empowering tools, courses, and experiences designed to support your journey to self-love and empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className={`relative hover-elevate transition-all duration-300 ${
                  product.popular ? 'border-primary shadow-lg scale-105' : ''
                }`}
                data-testid={`card-product-${product.id}`}
              >
                {product.popular && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif" data-testid={`text-product-title-${product.id}`}>
                    {product.title}
                  </CardTitle>
                  <p className="text-primary font-medium" data-testid={`text-product-subtitle-${product.id}`}>
                    {product.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center" data-testid={`text-product-description-${product.id}`}>
                    {product.description}
                  </p>
                  
                  <div className="text-center">
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through mr-2">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-foreground" data-testid={`text-product-price-${product.id}`}>
                      {product.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={product.popular ? "default" : "outline"}
                    data-testid={`button-${product.id}-cta`}
                  >
                    {product.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to begin your transformation journey?
          </p>
          <Button size="lg" data-testid="button-explore-all">
            Explore All Tools
          </Button>
        </div>
      </div>
    </section>
  );
}