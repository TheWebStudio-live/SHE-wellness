import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Star, Sparkles, BookOpen, Users } from 'lucide-react';

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4 mr-2" />
              Premium quality materials
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Heart className="w-4 h-4 mr-2" />
              Empowering designs
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-2" />
              Supporting women's growth
            </div>
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


      {/* Collection Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-collection-philosophy-title">
              S.H.E. Collection — Stand. Heal. Elevate.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-collection-philosophy-description">
              Wear your strength with empowering apparel designed to remind you of your journey and inspire 
              confidence every day. Each piece is crafted with intention and love for your healing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4 mr-2" />
                Premium quality materials
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Heart className="w-4 h-4 mr-2" />
                Empowering designs
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="w-4 h-4 mr-2" />
                Supporting women's growth
              </div>
            </div>
            <Button size="lg" data-testid="button-shop-collection-philosophy">Shop S.H.E. Collection</Button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}