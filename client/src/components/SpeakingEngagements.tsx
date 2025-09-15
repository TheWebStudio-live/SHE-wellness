import { Button } from '@/components/ui/button';

const upcomingEvents = [
  "October 15, 2025 - Women's Empowerment Summit, Atlanta, GA",
  "November 8, 2025 - Healing & Wellness Retreat, Miami, FL", 
  "December 3, 2025 - Professional Development Conference, Virtual Event"
];

export default function SpeakingEngagements() {
  return (
    <>
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
          
          <div className="mb-16">
            <ul className="space-y-4 max-w-2xl">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="flex items-start" data-testid={`text-event-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-lg">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
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
      </section>
    </>
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