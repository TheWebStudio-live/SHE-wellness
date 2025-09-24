import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Users, Star, Calendar, Clock, Quote, CheckCircle } from 'lucide-react';
import speakingImage from '@assets/generated_images/Public_speaking_empowerment_botanical_background_a956513f.png';

const upcomingEvents = [
  "March 1st-3rd, 2026 - Women's Leadership and Empowerment Conference, Bangkok, Thailand",
  // Add more events below (up to 5 total):
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
            <Button size="lg" data-testid="button-book-speaking">
              Book a Speaking Engagement
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
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-topics-title">
              Signature Speaking Topics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-topics-description">
              Transformative presentations designed to empower, inspire, and create lasting impact 
              in the lives of your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-topic-authentic-self">
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Finding Your Authentic Self</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A journey of self-discovery that helps participants uncover their true identity, 
                  embrace their uniqueness, and live authentically.
                </p>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  45-90 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-breakthrough">
              <CardHeader>
                <Mic className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Breaking Through Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Practical strategies for identifying and overcoming the barriers that hold us back 
                  from achieving our full potential.
                </p>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  60-120 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-empowerment">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Women's Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Inspiring women to stand in their power, heal from past wounds, 
                  and elevate their lives and communities.
                </p>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  45-90 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-leadership">
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Authentic Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developing leadership skills rooted in authenticity, empathy, 
                  and genuine connection with others.
                </p>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  90-180 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-resilience">
              <CardHeader>
                <Mic className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Building Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tools and techniques for developing emotional resilience and 
                  bouncing back stronger from life's challenges.
                </p>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  60-90 minutes
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-topic-transformation">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Personal Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A comprehensive approach to creating lasting change and 
                  transformation in all areas of life.
                </p>
                <div className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  120-240 minutes
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
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-booking-peta-title">
              Book Peta for Your Event
            </h3>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-booking-peta-description">
              Whether you're planning a corporate event, wellness retreat, conference, or workshop, 
              Peta brings powerful, transformative content that resonates with audiences and creates 
              lasting impact. Available for both virtual and in-person engagements.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                Keynote presentations
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                Panel discussions and interviews
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                Virtual and in-person availability
              </div>
            </div>
            <Button size="lg" data-testid="button-book-peta">
              Book Peta Williams
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
