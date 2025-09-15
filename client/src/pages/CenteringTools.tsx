import Navigation from '@/components/Navigation';
import CourseModules from '@/components/CourseModules';
import SpeakingEngagements from '@/components/SpeakingEngagements';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, BookOpen, Users } from 'lucide-react';

export default function CenteringTools() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center bg-gradient-to-br from-amber-50 via-green-50 to-orange-50 dark:from-amber-950/20 dark:via-green-950/20 dark:to-orange-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(34, 139, 34, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(160, 82, 45, 0.06) 0%, transparent 50%)`
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-centering-tools">
            Centering Tools
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6" data-testid="text-tools-title">
            Practical Tools for Self-Centering
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-tools-description">
            Discover evidence-based techniques and transformative practices designed to help you stay grounded, 
            connected to your authentic self, and empowered in every aspect of your life.
          </p>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-start-tools">
              Explore Tools
            </Button>
          </div>
        </div>
      </section>
      {/* Shop S.H.E. Collection CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-collection-title">
              S.H.E. Collection — Stand. Heal. Elevate.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-collection-description">
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
            <Button size="lg" data-testid="button-shop-collection">Shop S.H.E. Collection</Button>
          </div>
        </div>
      </section>
      <CourseModules />
      <SpeakingEngagements />
      <Footer />
    </div>
  );
}