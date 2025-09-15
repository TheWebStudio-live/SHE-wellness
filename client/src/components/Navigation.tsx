import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = '/';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tools', label: 'Centering Tools' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center hover-elevate rounded-md px-2 py-1" 
            onClick={(e) => e.preventDefault()}
            data-testid="link-home"
          >
            <span className="text-2xl font-serif font-bold text-primary">S.H.E.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <span
                key={item.path}
                className={`text-foreground hover:text-primary transition-colors cursor-pointer ${
                  location === item.path ? 'text-primary font-medium' : ''
                }`}
                onClick={(e) => e.preventDefault()}
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </span>
            ))}
            <Button 
              variant="default" 
              onClick={(e) => e.preventDefault()}
              data-testid="button-book-session"
            >
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
                <span
                  key={item.path}
                  className={`block px-4 py-2 text-foreground hover:text-primary transition-colors cursor-pointer ${
                    location === item.path ? 'text-primary font-medium' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                  }}
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </span>
              ))}
              <div className="px-4">
                <Button 
                  variant="default" 
                  className="w-full" 
                  onClick={(e) => e.preventDefault()}
                  data-testid="mobile-button-book-session"
                >
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