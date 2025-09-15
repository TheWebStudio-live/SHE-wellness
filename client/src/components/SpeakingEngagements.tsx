import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

// todo: remove mock functionality - replace with real data
const upcomingEvents = [
  {
    id: 1,
    title: 'Women\'s Empowerment Summit',
    description: 'Keynote on \'Reclaiming Your Power After Heartbreak\'',
    date: '2025-10-15',
    time: '2:00 PM EST',
    location: 'Atlanta, GA',
    venue: 'Georgia Convention Center',
    attendees: '500+',
    type: 'Keynote'
  },
  {
    id: 2,
    title: 'Healing & Wellness Retreat',
    description: 'Interactive workshop on self-love and boundary setting',
    date: '2025-11-08',
    time: '10:00 AM EST',
    location: 'Miami, FL',
    venue: 'Wellness Resort & Spa',
    attendees: '150',
    type: 'Workshop'
  },
  {
    id: 3,
    title: 'Professional Development Conference',
    description: 'Panel discussion on women leadership and authenticity',
    date: '2025-12-03',
    time: '3:30 PM EST',
    location: 'Virtual Event',
    venue: 'Online Platform',
    attendees: '1000+',
    type: 'Panel'
  }
];

const speakingTopics = [
  'Breaking Through Barriers: From Heartbreak to Empowerment',
  'The Art of Self-Love: Practical Tools for Daily Life',
  'Setting Boundaries That Protect Your Peace',
  'Authentic Leadership for Women',
  'Transforming Pain into Purpose',
  'Building Unshakeable Self-Confidence'
];

export default function SpeakingEngagements() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-speaking-title">
            Upcoming Speaking Engagements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-speaking-description">
            Join Peta Williams as she shares powerful insights on empowerment, healing, and transformation 
            at conferences, retreats, and events across the country.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover-elevate" data-testid={`card-event-${event.id}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" data-testid={`badge-event-type-${event.id}`}>
                    {event.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <CardTitle className="text-lg" data-testid={`text-event-title-${event.id}`}>
                  {event.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm" data-testid={`text-event-description-${event.id}`}>
                  {event.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span data-testid={`text-event-date-${event.id}`}>
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span data-testid={`text-event-time-${event.id}`}>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span data-testid={`text-event-location-${event.id}`}>
                    {event.venue}, {event.location}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span data-testid={`text-event-attendees-${event.id}`}>{event.attendees} attendees</span>
                </div>
                <Button variant="outline" className="w-full mt-4" data-testid={`button-learn-more-${event.id}`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/20 rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6" data-testid="text-speaking-topics-title">
              Popular Speaking Topics
            </h3>
            <ul className="space-y-3">
              {speakingTopics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground" data-testid={`text-topic-${index}`}>
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-booking-title">
              Book Peta for Your Event
            </h3>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-booking-description">
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
        </div>
      </div>
    </section>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}