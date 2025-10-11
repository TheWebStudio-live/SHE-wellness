import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Star, Sparkles, BookOpen, Users } from 'lucide-react';
import SHEWordCollage from '@/components/SHEWordCollage';
import diverseWomenImage from '@assets/generated_images/Diverse_women_empowerment_botanical_design_8108153e.png';
import activismImage from '@assets/generated_images/Abstract_activism_botanical_empowerment_design_e8b28187.png';

export default function SHECollection() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-8 min-h-[40vh] sm:min-h-[60vh] flex items-center bg-gradient-to-br from-stone-50 via-stone-100 to-amber-50 dark:from-stone-950/30 dark:via-stone-900/30 dark:to-amber-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(180, 150, 120, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 80% 40%, rgba(160, 140, 110, 0.04) 0%, transparent 50%),
                           radial-gradient(circle at 40% 70%, rgba(200, 170, 140, 0.03) 0%, transparent 50%)`
        }}></div>
        
        {/* Left Botanical Decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <svg width="220" height="600" viewBox="0 0 220 600" className="text-primary">
            {/* Main branches */}
            <path d="M 200 300 Q 170 240, 160 180 Q 155 150, 150 120" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 200 300 Q 180 340, 170 380 Q 165 410, 160 440" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 200 300 Q 165 310, 155 330" stroke="currentColor" fill="none" strokeWidth="1.2"/>
            
            {/* Top section leaves - very top */}
            <path d="M 200 300 Q 165 260, 155 240" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="150" cy="235" rx="24" ry="10" fill="currentColor" opacity="0.3" transform="rotate(-40 150 235)"/>
            <path d="M 200 300 Q 168 268, 160 250" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="156" cy="245" rx="20" ry="9" fill="currentColor" opacity="0.3" transform="rotate(-38 156 245)"/>
            <path d="M 200 300 Q 172 275, 165 258" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="162" cy="253" rx="18" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-35 162 253)"/>
            
            {/* Upper-middle leaves */}
            <path d="M 200 300 Q 160 280, 148 265" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="143" cy="260" rx="22" ry="9" fill="currentColor" opacity="0.3" transform="rotate(-33 143 260)"/>
            <path d="M 200 300 Q 165 285, 153 272" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="149" cy="267" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-30 149 267)"/>
            <path d="M 200 300 Q 170 290, 160 278" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="156" cy="273" rx="19" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-28 156 273)"/>
            <path d="M 200 300 Q 175 295, 168 285" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="164" cy="280" rx="17" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-25 164 280)"/>
            
            {/* Center leaves */}
            <path d="M 200 300 Q 170 305, 158 315" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="153" cy="320" rx="25" ry="11" fill="currentColor" opacity="0.3" transform="rotate(20 153 320)"/>
            <path d="M 200 300 Q 175 308, 165 318" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="160" cy="323" rx="23" ry="10" fill="currentColor" opacity="0.3" transform="rotate(22 160 323)"/>
            <path d="M 200 300 Q 180 310, 172 320" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="168" cy="325" rx="21" ry="9" fill="currentColor" opacity="0.3" transform="rotate(24 168 325)"/>
            
            {/* Lower-middle leaves */}
            <path d="M 200 300 Q 168 320, 160 335" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="156" cy="342" rx="22" ry="9" fill="currentColor" opacity="0.3" transform="rotate(28 156 342)"/>
            <path d="M 200 300 Q 172 325, 165 342" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="161" cy="348" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(30 161 348)"/>
            <path d="M 200 300 Q 176 330, 170 348" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="166" cy="354" rx="19" ry="8" fill="currentColor" opacity="0.3" transform="rotate(32 166 354)"/>
            <path d="M 200 300 Q 180 335, 175 353" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="171" cy="359" rx="18" ry="7" fill="currentColor" opacity="0.3" transform="rotate(34 171 359)"/>
            
            {/* Bottom section leaves */}
            <path d="M 200 300 Q 170 345, 164 365" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="160" cy="372" rx="21" ry="8" fill="currentColor" opacity="0.3" transform="rotate(36 160 372)"/>
            <path d="M 200 300 Q 175 350, 170 372" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="166" cy="378" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(38 166 378)"/>
            <path d="M 200 300 Q 178 355, 174 378" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="170" cy="385" rx="19" ry="7" fill="currentColor" opacity="0.3" transform="rotate(40 170 385)"/>
          </svg>
        </div>
        
        {/* Right Botanical Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <svg width="220" height="600" viewBox="0 0 220 600" className="text-primary">
            {/* Main branches */}
            <path d="M 20 300 Q 50 240, 60 180 Q 65 150, 70 120" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 20 300 Q 40 340, 50 380 Q 55 410, 60 440" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M 20 300 Q 55 310, 65 330" stroke="currentColor" fill="none" strokeWidth="1.2"/>
            
            {/* Top section leaves - very top */}
            <path d="M 20 300 Q 55 260, 65 240" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="70" cy="235" rx="24" ry="10" fill="currentColor" opacity="0.3" transform="rotate(40 70 235)"/>
            <path d="M 20 300 Q 52 268, 60 250" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="64" cy="245" rx="20" ry="9" fill="currentColor" opacity="0.3" transform="rotate(38 64 245)"/>
            <path d="M 20 300 Q 48 275, 55 258" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="58" cy="253" rx="18" ry="8" fill="currentColor" opacity="0.3" transform="rotate(35 58 253)"/>
            
            {/* Upper-middle leaves */}
            <path d="M 20 300 Q 60 280, 72 265" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="77" cy="260" rx="22" ry="9" fill="currentColor" opacity="0.3" transform="rotate(33 77 260)"/>
            <path d="M 20 300 Q 55 285, 67 272" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="71" cy="267" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(30 71 267)"/>
            <path d="M 20 300 Q 50 290, 60 278" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="64" cy="273" rx="19" ry="7" fill="currentColor" opacity="0.3" transform="rotate(28 64 273)"/>
            <path d="M 20 300 Q 45 295, 52 285" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="56" cy="280" rx="17" ry="7" fill="currentColor" opacity="0.3" transform="rotate(25 56 280)"/>
            
            {/* Center leaves */}
            <path d="M 20 300 Q 50 305, 62 315" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="67" cy="320" rx="25" ry="11" fill="currentColor" opacity="0.3" transform="rotate(-20 67 320)"/>
            <path d="M 20 300 Q 45 308, 55 318" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="60" cy="323" rx="23" ry="10" fill="currentColor" opacity="0.3" transform="rotate(-22 60 323)"/>
            <path d="M 20 300 Q 40 310, 48 320" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="52" cy="325" rx="21" ry="9" fill="currentColor" opacity="0.3" transform="rotate(-24 52 325)"/>
            
            {/* Lower-middle leaves */}
            <path d="M 20 300 Q 52 320, 60 335" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="64" cy="342" rx="22" ry="9" fill="currentColor" opacity="0.3" transform="rotate(-28 64 342)"/>
            <path d="M 20 300 Q 48 325, 55 342" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="59" cy="348" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-30 59 348)"/>
            <path d="M 20 300 Q 44 330, 50 348" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="54" cy="354" rx="19" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-32 54 354)"/>
            <path d="M 20 300 Q 40 335, 45 353" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="49" cy="359" rx="18" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-34 49 359)"/>
            
            {/* Bottom section leaves */}
            <path d="M 20 300 Q 50 345, 56 365" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="60" cy="372" rx="21" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-36 60 372)"/>
            <path d="M 20 300 Q 45 350, 50 372" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="54" cy="378" rx="20" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-38 54 378)"/>
            <path d="M 20 300 Q 42 355, 46 378" stroke="currentColor" fill="none" strokeWidth="0.8"/>
            <ellipse cx="50" cy="385" rx="19" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-40 50 385)"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-she-collection">
            S.H.E. Collection
          </Badge>
          <div>
            <SHEWordCollage />
          </div>
          <div className="flex justify-center">
            <Button size="lg" data-testid="button-shop-now">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
      {/* Collection Features */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        {/* Diverse Women Empowerment Image - Full Background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={diverseWomenImage} 
            alt="Diverse women celebrating empowerment and unity" 
            className="w-full h-full object-cover opacity-20"
            data-testid="img-diverse-women-empowerment"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4" data-testid="text-features-title">Empowerment Through Design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">The S.H.E. Collection celebrates women owning their glow-up and the community that stands with them. More than apparel—it’s glow-up energy that turns pain into purpose without ever dimming her light.</p>
          </div>
          
          <div className="relative">
            {/* Activism Empowerment Image */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none hidden lg:block">
              <img 
                src={activismImage} 
                alt="Abstract symbols of activism and empowerment" 
                className="w-64 h-auto object-contain opacity-15"
                data-testid="img-activism-empowerment"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <Card className="text-center hover-elevate" data-testid="card-stand">
                <CardHeader>
                  <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-serif">Stand</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stand tall in your truth. Our designs remind you to maintain your ground 
                    and embrace your authentic self with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate" data-testid="card-heal">
                <CardHeader>
                  <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-serif">Heal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Honor your healing journey. Each piece carries the energy of transformation 
                    and self-compassion to support your growth.
                  </p>
                </CardContent>
                </Card>

              <Card className="text-center hover-elevate" data-testid="card-elevate">
                <CardHeader>
                  <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-serif">Elevate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rise to your highest potential. Our collection inspires you to reach 
                    new heights and embrace your limitless possibilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Wear the Glow-Up Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6" data-testid="text-glowup-title">
              Wear the Glow-Up. Own Your Power.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-glowup-description">
              S.H.E. is more than apparel—it's energy that turns pain into purpose, with a community that never lets you dim your light.
            </p>
            <Button size="lg" data-testid="button-join-collective">
              Join this Collective Power Move
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}