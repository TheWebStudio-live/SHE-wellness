import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import coachImage from '@assets/Screenshot 2025-09-15 at 11.25.35_1757949943995.png';

export default function AboutMe() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 md:mb-6" data-testid="text-about-title">
              About Your Coach
            </h2>
            <h3 className="text-lg md:text-xl text-primary font-semibold mb-3 md:mb-4" data-testid="text-coach-name">
              Meet Peta Williams: Your Transformation Coach
            </h3>
            <div className="prose prose-sm md:prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base" data-testid="text-coach-bio-1">
                Peta Williams is a licensed mental health counselor and certified sex and intimacy coach. As an integrative healer, she is passionate about helping people reclaim their power, break through barriers, and live fully empowered lives. With years of experience guiding individuals through life's toughest challenges, she has empowered countless people to embrace their true selves, boost their confidence, and create lives filled with joy, purpose, and clarity.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden border-none shadow-lg max-w-sm xl:max-w-xs mx-auto">
              <CardContent className="p-0">
                <img
                  src={coachImage}
                  alt="Peta Williams - Your Transformation Coach"
                  className="w-full h-auto object-cover"
                  data-testid="img-coach"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Centered text under the image */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-4 text-base" data-testid="text-coach-bio-2">
            Seeing how many of us struggle to reconnect with ourselves while giving so much to others, Peta created this experience to make personal growth accessible, practical, and deeply transformative. Whether you're navigating a relationship or thriving on your own, she understands the sacrifices, the doubts, and the longing to step fully into your potential.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-6" data-testid="text-coach-bio-3">
            With compassion and excitement, Peta is here to guide you every step of the way. This experience isn't just about learning—it's about stepping into your best self, reclaiming your power, and creating the life you deserve. Let's begin this journey together and unlock the greatness within you.
          </p>
          <Button size="lg" data-testid="button-work-with-peta">
            Work with Peta
          </Button>
        </div>
      </div>
    </section>
  );
}