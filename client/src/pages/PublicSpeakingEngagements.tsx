import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Users, Star, Calendar, Clock, Quote, CheckCircle } from 'lucide-react';
import speakingHeroBackground from '@assets/generated_images/Speaking_Engagements_hero_background_9aca59b5.png';

const upcomingEvents = [
  "October 15, 2025 - Women's Empowerment Summit, Atlanta, GA",
  "November 8, 2025 - Healing & Wellness Retreat, Miami, FL", 
  "December 3, 2025 - Professional Development Conference, Virtual Event"
];

export default function PublicSpeakingEngagements() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 min-h-[70vh] flex items-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${speakingHeroBackground})`
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30" data-testid="badge-speaking-engagements">
            Public Speaking Engagements
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6" data-testid="text-speaking-title">
            Inspire. Empower. Transform.
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-speaking-description">
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

      {/* Speaking Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      
      {/* Upcoming Speaking Engagements */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-upcoming-speaking-title">
              Upcoming Speaking Engagements
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-upcoming-speaking-description">
              Join Peta Williams as she shares powerful insights on empowerment, healing, and transformation 
              at conferences, retreats, and events across the country.
            </p>
            
            <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="flex items-start" data-testid={`text-upcoming-event-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-lg">{event}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              data-testid="button-email-upcoming-info"
            >
              <a href="#">
                Email me for more information
              </a>
            </Button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}