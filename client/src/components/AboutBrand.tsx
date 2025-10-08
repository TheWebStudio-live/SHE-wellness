import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AboutBrand() {
  return (
    <section id="about-she" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-brand-title">
            Coaching Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6" data-testid="text-brand-description">
            Tired of toxic cycles holding you back? Reclaim your heart, career, and life. 1:1 coaching—$99 accessible rate, $150 standard. The new season is your invitation: end toxic patterns, feel true success, and step into your unbothered era.
          </p>
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
        
        <div className="mt-32 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-mission-title">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-mission-description"> S.H.E. empowers women of color and allies to Strengthen, Heal, and Evolve—beyond heartbreak and toxic cycles. Through evidence-based coaching and activism, S.H.E. helps women reclaim their joy, prioritize their wellbeing, and thrive in life and love.</p>
          </div>
        </div>
      </div>
    </section>
  );
}