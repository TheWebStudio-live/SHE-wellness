import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Heart, Sparkles, Gift, Shield } from 'lucide-react';
import transformationImage from '@assets/generated_images/Transformation_journey_botanical_background_design_bc9764b3.png';
import petaPhoto from '@assets/PHOTO-2025-10-26-11-02-07_1761541424301.jpg';

export default function BreakthroughExperience() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-12 min-h-[50vh] flex items-center bg-gradient-to-br from-stone-50 via-stone-100 to-amber-50 dark:from-stone-950/30 dark:via-stone-900/30 dark:to-amber-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(180, 150, 120, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 80% 40%, rgba(160, 140, 110, 0.04) 0%, transparent 50%),
                           radial-gradient(circle at 40% 70%, rgba(200, 170, 140, 0.03) 0%, transparent 50%)`
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-she-28">
            S.H.E. 28
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4" data-testid="text-hero-title">Recenter. Reclaim. Radiate. </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-hero-description">
            A 28-day journey to recenter, reclaim, and radiate your most empowered self. Each day includes a reflection, a release, and a chance to step further into your Unbothered Era.
          </p>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-join-hive">
              Join the Hive →
            </Button>
          </div>
        </div>
      </section>
      {/* Section 1: About the Journal */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={transformationImage} 
            alt="Transformation journey with meditation and botanical elements" 
            className="w-full h-full object-cover opacity-25"
            data-testid="img-transformation-background"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2" data-testid="text-section1-label">Self-Mastery Journal</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8" data-testid="text-section1-title">
              About S.H.E. 28
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <Card className="hover-elevate" data-testid="card-decenter">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Decenter & Recenter</h4>
                    <p className="text-muted-foreground">
                      Decenter unhealthy patterns and relationships. Recenter through daily intentional reflection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-release">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Release & Build</h4>
                    <p className="text-muted-foreground">
                      Release what no longer serves your growth. Build daily rituals for clarity, joy, and self-mastery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="bg-card border rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-foreground font-semibold mb-2" data-testid="text-extra-info">
                Start anytime. Continue as long as you want.
              </p>
              <p className="text-3xl font-bold text-primary" data-testid="text-price">
                $9.99/month membership
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2: Healing Hive Community */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2" data-testid="text-section2-label">
              Healing Hive Community
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-section2-title">
              Your Healing Hive
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-section2-description">Your sacred community space for journaling chaos into inner peace.</p>
          </div>
          
          <div className="grid grid-cols-5 lg:grid-cols-3 gap-3 lg:gap-8 items-stretch lg:items-center">
            <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
              <img 
                src={petaPhoto}
                alt="Coach Peta Williams"
                className="w-full h-auto rounded-lg lg:rounded-2xl shadow-lg object-cover"
                data-testid="img-coach-peta"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 col-span-3 lg:col-span-2">
              <Card className="hover-elevate flex-1" data-testid="card-connect">
                <CardContent className="p-3 md:p-6 lg:p-8 h-full flex items-center">
                  <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4">
                    <Users className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary flex-shrink-0 mt-0.5 lg:mt-1" />
                    <div>
                      <h4 className="text-sm md:text-lg lg:text-xl font-serif font-semibold text-foreground mb-1 lg:mb-2">Connect & Grow</h4>
                      <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                        Connect with Coach Peta Williams and empowered sisters on the same journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate flex-1" data-testid="card-journal-access">
                <CardContent className="p-3 md:p-6 lg:p-8 h-full flex items-center">
                  <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4">
                    <BookOpen className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary flex-shrink-0 mt-0.5 lg:mt-1" />
                    <div>
                      <h4 className="text-sm md:text-lg lg:text-xl font-serif font-semibold text-foreground mb-1 lg:mb-2">Monthly Journal Access</h4>
                      <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                        Monthly access to S.H.E. 28 journal — your daily companion for reflection and growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate flex-1" data-testid="card-safe-space">
                <CardContent className="p-3 md:p-6 lg:p-8 h-full flex items-center">
                  <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4">
                    <Heart className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary flex-shrink-0 mt-0.5 lg:mt-1" />
                    <div>
                      <h4 className="text-sm md:text-lg lg:text-xl font-serif font-semibold text-foreground mb-1 lg:mb-2">Safe Space</h4>
                      <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                        Safe, supportive, growth-focused community where your voice matters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Membership Perks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8" data-testid="text-section3-title">
              Membership Perks
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover-elevate" data-testid="card-perk-price">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Gift className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">$9.99/month</h4>
                      <p className="text-muted-foreground">
                        Full journal + community access for unlimited growth and connection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-perk-discount">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">15% off S.H.E. Apparel</h4>
                      <p className="text-muted-foreground">
                        Exclusive member discount on all S.H.E. apparel to wear your power.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-perk-selfpaced">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Self-Paced Guidance</h4>
                      <p className="text-muted-foreground">
                        Start anytime, reflect at your rhythm — your journey, your pace.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-perk-unlimited">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Unlimited Access</h4>
                      <p className="text-muted-foreground">
                        Access to all journal entries as long as your membership is active.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button size="lg" data-testid="button-join-healing-hive">
                Join the Healing Hive →
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Rise Unapologetically */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-section4-title">
              Rise Unapologetically
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-section4-description">
              Reclaim your peace. Recenter your life. Radiate unapologetically.<br />
              S.H.E. 28 is your sacred space to reflect, release, and evolve — supported by your sisters in the Healing Hive.
            </p>
            <Button size="lg" data-testid="button-start-journey">
              Start Your S.H.E. 28 Journey →
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
