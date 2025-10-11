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
        
        {/* Left Botanical Line Art */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 animate-[sway_8s_ease-in-out_infinite]">
          <svg width="100" height="400" viewBox="0 0 100 400" className="text-foreground md:w-[140px] md:h-[500px]">
            {/* Main stem */}
            <path d="M 50 400 Q 48 300, 45 200 Q 43 100, 40 20" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            
            {/* Leaves - elegant curved shapes */}
            <path d="M 40 80 Q 15 70, 10 50 Q 8 40, 15 35 Q 25 32, 35 45 Q 38 55, 40 70" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 42 120 Q 70 110, 78 90 Q 82 80, 75 72 Q 65 68, 52 82 Q 46 92, 44 110" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 44 160 Q 12 155, 5 135 Q 2 122, 10 115 Q 22 110, 38 128 Q 42 140, 44 155" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 46 200 Q 75 195, 85 175 Q 90 162, 82 152 Q 70 145, 52 165 Q 47 180, 46 195" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 47 250 Q 18 248, 8 228 Q 4 215, 12 205 Q 24 198, 42 218 Q 46 232, 47 245" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 48 300 Q 78 298, 88 278 Q 93 265, 85 255 Q 73 248, 54 268 Q 49 282, 48 295" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 49 350 Q 22 350, 12 330 Q 7 317, 15 307 Q 27 300, 44 320 Q 48 334, 49 345" stroke="currentColor" fill="none" strokeWidth="1.5"/>
          </svg>
        </div>
        
        {/* Right Botanical Line Art */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 animate-[sway_8s_ease-in-out_infinite_1.5s]">
          <svg width="100" height="400" viewBox="0 0 100 400" className="text-foreground md:w-[140px] md:h-[500px]">
            {/* Main stem */}
            <path d="M 50 400 Q 52 300, 55 200 Q 57 100, 60 20" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            
            {/* Leaves - elegant curved shapes mirrored */}
            <path d="M 60 80 Q 85 70, 90 50 Q 92 40, 85 35 Q 75 32, 65 45 Q 62 55, 60 70" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 58 120 Q 30 110, 22 90 Q 18 80, 25 72 Q 35 68, 48 82 Q 54 92, 56 110" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 56 160 Q 88 155, 95 135 Q 98 122, 90 115 Q 78 110, 62 128 Q 58 140, 56 155" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 54 200 Q 25 195, 15 175 Q 10 162, 18 152 Q 30 145, 48 165 Q 53 180, 54 195" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 53 250 Q 82 248, 92 228 Q 96 215, 88 205 Q 76 198, 58 218 Q 54 232, 53 245" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 52 300 Q 22 298, 12 278 Q 7 265, 15 255 Q 27 248, 46 268 Q 51 282, 52 295" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 51 350 Q 78 350, 88 330 Q 93 317, 85 307 Q 73 300, 56 320 Q 52 334, 51 345" stroke="currentColor" fill="none" strokeWidth="1.5"/>
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