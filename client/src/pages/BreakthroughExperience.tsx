import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Target, Zap, Clock, Users, CheckCircle } from 'lucide-react';

export default function BreakthroughExperience() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 min-h-[70vh] flex items-center bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-amber-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15% 40%, rgba(255, 165, 0, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 85% 30%, rgba(255, 215, 0, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 50% 80%, rgba(255, 140, 0, 0.04) 0%, transparent 50%)`
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-breakthrough-experience">
            The Breakthrough Experience
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6" data-testid="text-breakthrough-title">
            Transform Your Life in 90 Days
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-breakthrough-description">
            An intensive, life-changing program designed to help you break through limitations, 
            discover your authentic self, and create lasting transformation in every area of your life.
          </p>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-enroll-now">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-overview-title">
              What You'll Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-overview-description">
              A comprehensive journey of self-discovery, healing, and empowerment designed 
              to create lasting change in your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate" data-testid="card-self-discovery">
              <CardHeader>
                <Lightbulb className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl font-serif">Deep Self-Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Uncover your authentic self, identify limiting beliefs, and discover 
                  your true passions and purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-goal-setting">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl font-serif">Strategic Goal Setting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn powerful goal-setting techniques and create a clear roadmap 
                  for achieving your dreams.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-transformation">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl font-serif">Rapid Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experience breakthrough moments and rapid shifts that create 
                  lasting change in your mindset and behavior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-structure-title">
              90-Day Journey Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-structure-description">
              A carefully designed progression that takes you from where you are 
              to where you want to be.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-phase-1">
              <CardHeader>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20" data-testid="badge-phase-1">
                  Days 1-30
                </Badge>
                <CardTitle className="text-xl font-serif">Foundation Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Self-assessment and awareness building
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Identifying limiting beliefs and patterns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Creating your vision and goals
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Building daily empowerment practices
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-phase-2">
              <CardHeader>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20" data-testid="badge-phase-2">
                  Days 31-60
                </Badge>
                <CardTitle className="text-xl font-serif">Breakthrough Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Deep healing and release work
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Breakthrough sessions and exercises
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Developing new empowering beliefs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Creating momentum and confidence
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-phase-3">
              <CardHeader>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20" data-testid="badge-phase-3">
                  Days 61-90
                </Badge>
                <CardTitle className="text-xl font-serif">Integration Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Integrating new patterns and habits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Strategic action planning
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Building sustainable success systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                    Celebrating transformation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-included-title">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-included-description">
              Everything you need for a complete transformation experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate" data-testid="card-included-1">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Weekly Live Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  12 live group coaching sessions (90 minutes each) for guidance, 
                  breakthrough work, and community support.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Interactive group coaching</li>
                  <li>• Q&A and personalized guidance</li>
                  <li>• Breakthrough exercises</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-included-2">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Private Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Access to our exclusive online community for ongoing support, 
                  accountability, and connection with like-minded women.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 24/7 community support</li>
                  <li>• Daily check-ins and accountability</li>
                  <li>• Resource sharing and insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-included-3">
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Comprehensive Workbook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A beautifully designed 200+ page workbook with exercises, 
                  assessments, and tools for your transformation journey.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Daily reflection prompts</li>
                  <li>• Goal-setting templates</li>
                  <li>• Progress tracking tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-included-4">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl font-serif">Bonus Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Additional guided meditations, affirmation cards, and exclusive 
                  content to support your ongoing growth.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Guided meditation library</li>
                  <li>• Daily affirmation deck</li>
                  <li>• Exclusive video content</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-cta-title">
            Ready to Create Your Breakthrough?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Join the next cohort of women who are ready to step into their power and 
            create extraordinary transformation in their lives.
          </p>
          <div className="mb-8">
            <div className="text-center">
              <span className="text-3xl font-bold text-primary">$2,997</span>
              <span className="text-lg text-muted-foreground ml-2">or 3 payments of $1,099</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-enroll-breakthrough">
              Enroll in The Breakthrough Experience
            </Button>
            <Button variant="outline" size="lg" data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}