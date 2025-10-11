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
        
        {/* Left Botanical Decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <svg width="200" height="400" viewBox="0 0 200 400" className="text-primary">
            <path d="M 180 200 Q 150 180, 140 160" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="135" cy="155" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-30 135 155)"/>
            <path d="M 180 200 Q 150 190, 145 175" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="142" cy="170" rx="18" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-25 142 170)"/>
            <path d="M 180 200 Q 160 205, 150 215" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="145" cy="220" rx="22" ry="9" fill="currentColor" opacity="0.3" transform="rotate(20 145 220)"/>
            <path d="M 180 200 Q 155 210, 148 225" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="144" cy="232" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(25 144 232)"/>
          </svg>
        </div>
        
        {/* Right Botanical Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <svg width="200" height="400" viewBox="0 0 200 400" className="text-primary">
            <path d="M 20 200 Q 50 180, 60 160" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="65" cy="155" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(30 65 155)"/>
            <path d="M 20 200 Q 50 190, 55 175" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="58" cy="170" rx="18" ry="7" fill="currentColor" opacity="0.3" transform="rotate(25 58 170)"/>
            <path d="M 20 200 Q 40 205, 50 215" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="55" cy="220" rx="22" ry="9" fill="currentColor" opacity="0.3" transform="rotate(-20 55 220)"/>
            <path d="M 20 200 Q 45 210, 52 225" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <ellipse cx="56" cy="232" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-25 56 232)"/>
          </svg>
        </div>
        
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">The S.H.E. Collection celebrates women owning their glow-up and the community that stands with them. More than apparel—it’s glow-up energy that turns pain into purpose without ever dimming her light.</p>
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
      {/* Wear the Glow-Up Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-glowup-title">
              Wear the Glow-Up. Own Your Power.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-glowup-description">
              S.H.E. is more than apparel—it's energy that turns pain into purpose, with a community that never lets you dim your light.
            </p>
            <Button size="lg" data-testid="button-join-collective">
              Join this Collective Power Move
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}