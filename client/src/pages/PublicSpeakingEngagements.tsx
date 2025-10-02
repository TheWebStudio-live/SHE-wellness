import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Users, Star, Calendar, Clock, Quote, CheckCircle } from 'lucide-react';
import speakingImage from '@assets/generated_images/Public_speaking_empowerment_botanical_background_a956513f.png';

const upcomingEvents = [
  "March 1st-3rd, 2026 - Women's Leadership and Empowerment Conference, Bangkok, Thailand", 
  // "Date - Event Name, Location",
  // "Date - Event Name, Location",
  // "Date - Event Name, Location",
  // "Date - Event Name, Location"
];

export default function PublicSpeakingEngagements() {
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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-speaking-engagements">
            Public Speaking Engagements
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4" data-testid="text-speaking-title">
            Inspire. Empower. Transform.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6" data-testid="text-speaking-description">
            Powerful keynotes and workshops that inspire audiences to embrace their authentic selves, 
            break through limitations, and create meaningful change in their lives and communities.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild data-testid="button-book-speaking">
              <a href="mailto:petawilliams@yes2wellnessfl.com">Book a Speaking Engagement</a>
            </Button>
          </div>
        </div>
      </section>
      {/* Upcoming Speaking Engagements */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3" data-testid="text-upcoming-speaking-title">
              Upcoming Speaking Engagements
            </h2>
            <p className="text-base text-muted-foreground mb-6" data-testid="text-upcoming-speaking-description">
              Join Peta Williams as she shares powerful insights on empowerment, healing, and transformation.
            </p>
            
            <ul className="space-y-3 mb-6 text-left max-w-xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="flex items-start" data-testid={`text-upcoming-event-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{event}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="outline" 
              asChild 
              data-testid="button-email-upcoming-info"
            >
              <a href="mailto:petawilliams@yes2wellnessfl.com">
                Email me for more information
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* Speaking Topics */}
      <section className="py-16 relative overflow-hidden">
        {/* Public Speaking Empowerment Background Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={speakingImage} 
            alt="Inspiring public speaking empowerment with botanical elements" 
            className="w-full h-full object-cover opacity-20"
            data-testid="img-speaking-background"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-topics-title">Peta Williams - International Speaker</h2>
            <p className="text-muted-foreground/80 max-w-3xl mx-auto mb-8 italic font-normal text-[12px]" data-testid="text-credentials">
              Licensed mental health counselor, certified sex & intimacy coach, and transformational speaker with international experience inspiring women, students, and professionals.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-topics-description">Your audience is struggling with heartbreak, self-doubt, or burnout. Peta delivers actionable strategies they can use immediately — leaving them empowered, confident, and ready to take control of their lives and careers.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-topic-women-heal-rise">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Empowering Women to Heal & Rise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Audience:</strong> Domestic violence organizations, women's shelters, women's empowerment groups
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Keynote/Workshop:</strong> "The Breakthrough Experience – I Choose Me to Break Free"
                  </p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Reclaim personal power</li>
                  <li>• Feel seen, supported, and understood</li>
                  <li>• Gain tools to step into joy, clarity, and self-love</li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  60–120 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-next-generation-leaders">
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Inspiring the Next Generation of Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Audience:</strong> HBCUs, colleges, universities, student leadership groups
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Keynote/Workshop:</strong> "Finding Your Authentic Self: Lead, Thrive, and Rise"
                  </p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Walk away with clarity and courage</li>
                  <li>• Build confidence to create healthy relationships</li>
                  <li>• Gain actionable steps to lead with authenticity and purpose</li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  60–120 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-resilience-wellbeing">
              <CardHeader>
                <Mic className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Resilience & Well-Being for Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Audience:</strong> Healthcare providers, addiction treatment staff, mental health professionals, nonprofit care teams
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Keynote/Workshop:</strong> "Resilience as Resistance: Thriving in High-Stress Roles"
                  </p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Reduce stress and prevent professional burnout</li>
                  <li>• Strengthen emotional resilience for sustainable success</li>
                  <li>• Leave equipped to provide high-quality care with confidence</li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  60–120 minutes
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Book Peta for Your Event */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-booking-peta-title">Why Book Peta For Your Event?</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                Practical, research-backed strategies for real-world impact
              </div>
              
              <div className="flex items-start text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                Expertise across women's empowerment, student development, and professional resilience
              </div>
              
              <div className="flex items-start text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                Deeply personal storytelling combined with actionable tools
              </div>
              
              <div className="flex items-start text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                Engages audiences with clarity, energy, and inspiration
              </div>
            </div>
            <Button size="lg" asChild data-testid="button-book-peta">
              <a href="mailto:petawilliams@yes2wellnessfl.com">Book Peta Williams</a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
