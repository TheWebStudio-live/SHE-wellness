import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home', testId: 'home' },
    { path: '/tools', label: 'Centering Tools', testId: 'centering-tools' },
    { path: '/she-collection', label: 'S.H.E. Collection', testId: 'she-collection' },
    { path: '/breakthrough-experience', label: 'The Breakthrough Experience', testId: 'breakthrough-experience' },
    { path: '/speaking-engagements', label: 'Public Speaking Engagements', testId: 'speaking-engagements' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center hover-elevate rounded-md px-2 py-1" data-testid="link-home">
              <span className="text-2xl font-serif font-bold text-primary">S.H.E.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-foreground hover:text-primary transition-colors cursor-pointer ${
                    location === item.path ? 'text-primary font-medium' : ''
                  }`}
                  data-testid={`link-${item.testId}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Button variant="default" data-testid="button-book-session">
              Book a Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-4 py-2 text-foreground hover:text-primary transition-colors cursor-pointer ${
                      location === item.path ? 'text-primary font-medium' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-link-${item.testId}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="px-4">
                <Button variant="default" className="w-full" data-testid="mobile-button-book-session">
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}