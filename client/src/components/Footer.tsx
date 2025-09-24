import { Heart } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'S.H.E. Collection', href: '/she-collection' },
    { label: 'The Breakthrough Experience', href: '/breakthrough-experience' },
    { label: 'Public Speaking Engagements', href: '/speaking-engagements' }
  ],
  'Support': [
    { label: 'Contact Us', href: 'mailto:petawilliams@yes2wellnessfl.com' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-serif font-bold text-primary" data-testid="text-footer-brand">
                S.H.E.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Self-love • Healing • Evolution
              </p>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-footer-description">
              Empowering women to reclaim their power, heal from heartbreak, and create lives filled 
              with purpose, confidence, and joy. Your journey to self-love and empowerment starts here.
            </p>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4" data-testid={`text-footer-section-${title.toLowerCase().replace(' ', '-')}`}>
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center" data-testid="text-copyright">
            © 2025 S.H.E. Empowerment. Made with 
            <Heart className="w-4 h-4 mx-1 text-primary" /> 
            for women's healing and growth.
          </p>
        </div>
      </div>
    </footer>
  );
}