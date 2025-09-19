import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Users, Star, Calendar, Clock, Quote, CheckCircle } from 'lucide-react';

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
      <section className="relative py-20 min-h-[70vh] flex items-center bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-cyan-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 75% 50%, rgba(20, 184, 166, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 50% 75%, rgba(6, 182, 212, 0.04) 0%, transparent 50%)`
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-speaking-engagements">
            Public Speaking Engagements
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6" data-testid="text-speaking-title">
            Inspire. Empower. Transform.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-speaking-description">
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

      {/* Event Types */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-event-types-title">
              Event Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-event-types-description">
              Customized presentations for various event formats and audience sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-elevate" data-testid="card-keynote">
              <CardContent className="pt-6">
                <Mic className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-serif font-bold mb-2">Keynote Speeches</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful opening or closing presentations that set the tone and inspire action.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-workshop">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-serif font-bold mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive sessions with practical tools and hands-on learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-panel">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-serif font-bold mb-2">Panel Discussions</h3>
                <p className="text-sm text-muted-foreground">
                  Expert panel participation sharing insights on empowerment and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-corporate">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-serif font-bold mb-2">Corporate Events</h3>
                <p className="text-sm text-muted-foreground">
                  Leadership development and team empowerment for corporate audiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-testimonials-title">
              What Audiences Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
              Hear from event organizers and attendees about the transformative impact 
              of these speaking engagements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-testimonial-1">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "The most powerful keynote our conference has ever had. Every attendee left 
                  feeling inspired and equipped with practical tools for transformation."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Sarah Johnson</div>
                  <div className="text-muted-foreground">Event Director, Women's Leadership Summit</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-testimonial-2">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "Her workshop on authentic self-discovery changed my perspective completely. 
                  I finally understand who I am and what I'm capable of achieving."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Maria Rodriguez</div>
                  <div className="text-muted-foreground">Workshop Participant</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-testimonial-3">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "Our team's productivity and morale improved significantly after her corporate 
                  workshop on authentic leadership. Highly recommend!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">David Chen</div>
                  <div className="text-muted-foreground">HR Director, Tech Solutions Inc.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking Fees & Booking Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-booking-title">
              Speaking Investment & Booking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-booking-description">
              Professional speaking services tailored to your event needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate" data-testid="card-investment">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Speaking Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Keynote (45-90 min)</span>
                    <span className="font-semibold">$5,000 - $15,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Workshop (2-4 hours)</span>
                    <span className="font-semibold">$8,000 - $20,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Full-Day Program</span>
                    <span className="font-semibold">$15,000 - $35,000</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">
                    * Fees vary based on event size, location, and customization requirements
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-booking-process">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Booking Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mr-3 mt-1">1</div>
                    <div>
                      <div className="font-semibold text-sm">Initial Consultation</div>
                      <div className="text-sm text-muted-foreground">Discuss your event goals and audience</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <div className="font-semibold text-sm">Custom Proposal</div>
                      <div className="text-sm text-muted-foreground">Tailored presentation and pricing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <div className="font-semibold text-sm">Contract & Deposit</div>
                      <div className="text-sm text-muted-foreground">Secure your date with 50% deposit</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <div className="font-semibold text-sm">Pre-Event Prep</div>
                      <div className="text-sm text-muted-foreground">Content customization and logistics</div>
                    </div>
                  </div>
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
                Keynote presentations (30-90 minutes)
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                Interactive workshops (2-6 hours)
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

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-cta-title">
            Ready to Inspire Your Audience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Let's create a transformative experience that will leave your audience empowered, 
            inspired, and ready to take action in their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-book-engagement">
              Book a Speaking Engagement
            </Button>
            <Button variant="outline" size="lg" data-testid="button-download-speaker-kit">
              Download Speaker Kit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}