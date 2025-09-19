import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Star, Sparkles } from 'lucide-react';

export default function SHECollection() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 min-h-[70vh] flex items-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(186, 85, 211, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 40%, rgba(138, 43, 226, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 40% 70%, rgba(255, 20, 147, 0.04) 0%, transparent 50%)`
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-she-collection">
            S.H.E. Collection
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6" data-testid="text-collection-title">
            Stand. Heal. Elevate.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-collection-description">
            Wear your strength with empowering apparel designed to remind you of your journey and inspire 
            confidence every day. Each piece is crafted with intention and love for your healing process.
          </p>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-shop-now">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-features-title">
              Empowerment Through Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
              Every piece in the S.H.E. Collection is thoughtfully designed to remind you of your power, 
              your journey, and your limitless potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-products-title">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-description">
              Discover our most popular pieces designed to inspire and empower your daily journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-elevate" data-testid="card-product-tshirt">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Empowerment Tee</h3>
                  <p className="text-muted-foreground mb-4">
                    Soft, comfortable tee with inspiring affirmations to carry you through your day.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$35</span>
                    <Button size="sm" data-testid="button-add-to-cart-tee">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate" data-testid="card-product-hoodie">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Healing Hoodie</h3>
                  <p className="text-muted-foreground mb-4">
                    Cozy hoodie designed to embrace you during your healing journey.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$65</span>
                    <Button size="sm" data-testid="button-add-to-cart-hoodie">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate" data-testid="card-product-tank">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Star className="w-16 h-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Elevation Tank</h3>
                  <p className="text-muted-foreground mb-4">
                    Lightweight tank top perfect for workouts and daily motivation.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$28</span>
                    <Button size="sm" data-testid="button-add-to-cart-tank">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-cta-title">
            Join the S.H.E. Movement
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Be part of a community of women who choose to stand in their power, heal with intention, 
            and elevate their lives every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-explore-collection">
              Explore Full Collection
            </Button>
            <Button variant="outline" size="lg" data-testid="button-join-community">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}