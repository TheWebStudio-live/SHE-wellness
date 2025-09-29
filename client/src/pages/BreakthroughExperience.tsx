import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Target, Zap, Clock, Users, CheckCircle } from 'lucide-react';
import transformationImage from '@assets/generated_images/Transformation_journey_botanical_background_design_bc9764b3.png';

const modules = [
  {
    number: 1,
    title: 'Know Thyself',
    description: 'Feel in control of your emotions instead of letting them control you. Discover what you\'re truly feeling, transform challenges into growth, and set intentions that guide you toward balance, confidence, and a life you love.'
  },
  {
    number: 2,
    title: 'Own Your Power',
    description: 'Stop giving your energy away and start standing in your strength. Learn how to set boundaries, honor your needs, and make decisions that reflect the confident, unstoppable person you are.'
  },
  {
    number: 3,
    title: 'Break Free from the Past',
    description: 'Let go of lingering hurt and patterns that no longer serve you. Heal old wounds, release guilt and regret, and open the door to a future filled with freedom, joy, and self-assurance.'
  },
  {
    number: 4,
    title: 'Build Resilience',
    description: 'Life will test you—but you can rise stronger every time. Develop the emotional tools and mindset strategies that allow you to bounce back from challenges and thrive no matter what comes your way.'
  },
  {
    number: 5,
    title: 'Create Your Thriving Life',
    description: 'Step into the life you deserve. From clarity and purpose to meaningful goals and joyful habits, design a path that reflects your true potential—and live it fully, with confidence and grace.'
  },
  {
    number: 6,
    title: 'Nurture Your Inner Self',
    description: 'Reconnect with who you truly are and rebuild your self-esteem. Through empowering affirmations, self-care, and transformative practices, you\'ll embrace growth and unlock the full potential within you.'
  },
  {
    number: 7,
    title: 'From Overwhelm to Empowerment',
    description: 'Turn stress into strength. Learn to trust your inner voice, master your emotions, and use the Circle of Control to tackle life\'s challenges with clarity, confidence, and ease.'
  },
  {
    number: 8,
    title: 'Unlock Self-Love',
    description: 'Cultivate daily practices that nourish your mind, body, and soul. Discover the power of Metta meditation to build compassion, inner peace, and lasting resilience—that radiates from the inside out.'
  },
  {
    number: 9,
    title: 'Master Self-Discipline',
    description: 'Transform fleeting motivation into lasting success. Gain the tools to build self-discipline, strengthen your resilience, and unlock the consistent habits that help you reach your fullest potential.'
  },
  {
    number: 10,
    title: 'Protect Your Peace',
    description: 'Spot toxic behaviors, set strong boundaries, and safeguard your emotional well-being. This final module empowers you to reclaim your inner harmony and step confidently into a life of self-respect and freedom.'
  }
];

export default function BreakthroughExperience() {
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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-breakthrough-experience">
            The Breakthrough Experience
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4" data-testid="text-breakthrough-title">Step Into Your Unbothered Era—One module at a time</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6" data-testid="text-breakthrough-description">A self-paced 10-module experience designed to help you heal heartbreak, master your emotions, set healthier boundaries, and step fully into your unbothered era—results you’ll feel from the very first module.</p>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-enroll-now">Coming soon</Button>
          </div>
        </div>
      </section>
      {/* Program Overview */}
      <section className="py-16 relative overflow-hidden">
        {/* Transformation Background Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={transformationImage} 
            alt="Transformation journey with botanical elements representing 90-day growth" 
            className="w-full h-full object-cover opacity-20"
            data-testid="img-transformation-background"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-overview-title">
              What You'll Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-overview-description">This chapter left you confused, overwhelmed, and betrayed—but this self-paced experience will help you calm your mind and reclaim your life to live unapologetically. Step by step, you’ll get there.</p>
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
      {/* Your 10-Module Journey */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-modules-title">
              Your 10-Module Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-modules-description">
              A comprehensive roadmap to transform your healing into real, lasting change. Each module builds upon the last, 
              guiding you from self-discovery to empowered living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {modules.map((module) => (
              <Card key={module.number} className="hover-elevate transition-all duration-300" data-testid={`card-module-${module.number}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{module.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-module-title-${module.number}`}>
                        Module {module.number}: {module.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-module-description-${module.number}`}>
                        {module.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-card border rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-course-investment">
                Your Investment in Transformation
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-sm text-muted-foreground line-through">$249</span>
                <span className="text-4xl font-bold text-primary" data-testid="text-course-price">$99</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Normally, personalized coaching sessions can cost thousands. For a limited time, 
                you can access this $249 transformative experience for only $99.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  Self-paced learning
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Lifetime access
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  14-day guarantee
                </div>
              </div>
              <Button size="lg" className="px-8" data-testid="button-enroll-course">I’m Ready to Heal & Thrive</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}