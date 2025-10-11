import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Star, Sparkles, BookOpen, Users } from 'lucide-react';
import SHEWordCollage from '@/components/SHEWordCollage';
import diverseWomenImage from '@assets/generated_images/Diverse_women_empowerment_botanical_design_8108153e.png';
import activismImage from '@assets/generated_images/Abstract_activism_botanical_empowerment_design_e8b28187.png';

export default function SHECollection() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-8 min-h-[40vh] sm:min-h-[60vh] flex items-center bg-gradient-to-br from-stone-50 via-stone-100 to-amber-50 dark:from-stone-950/30 dark:via-stone-900/30 dark:to-amber-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(180, 150, 120, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 80% 40%, rgba(160, 140, 110, 0.04) 0%, transparent 50%),
                           radial-gradient(circle at 40% 70%, rgba(200, 170, 140, 0.03) 0%, transparent 50%)`
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-she-collection">
            S.H.E. Collection
          </Badge>
          <div>
            <SHEWordCollage />
          </div>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-shop-now">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
      {/* Collection Features */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        {/* Diverse Women Empowerment Image - Full Background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={diverseWomenImage} 
            alt="Diverse women celebrating empowerment and unity" 
            className="w-full h-full object-cover opacity-20"
            data-testid="img-diverse-women-empowerment"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-features-title">Empowerment Through Design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
              Every piece in the S.H.E. Collection is thoughtfully designed to remind you of your power, 
              your journey, and your limitless potential.
            </p>
          </div>
          
          <div className="relative">
            {/* Activism Empowerment Image */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none hidden lg:block">
              <img 
                src={activismImage} 
                alt="Abstract symbols of activism and empowerment" 
                className="w-64 h-auto object-contain opacity-15"
                data-testid="img-activism-empowerment"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <Card className="text-center hover-elevate" data-testid="card-stand">
                <CardHeader>
                  <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-serif">Stand</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stand tall in your truth. Our designs remind you to maintain your ground 
                    and embrace your authentic self with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-heal">
                <CardHeader>
                  <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-serif">Heal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Honor your healing journey. Each piece carries the energy of transformation 
                    and self-compassion to support your growth.
                  </p>
                </CardContent>
                </Card>

              <Card className="text-center hover-elevate" data-testid="card-elevate">
                <CardHeader>
                  <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-serif">Elevate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rise to your highest potential. Our collection inspires you to reach 
                    new heights and embrace your limitless possibilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}