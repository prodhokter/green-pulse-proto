import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Green Strategy</h3>
                <p className="text-sm text-muted-foreground">Clean Energy Indonesia</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading Indonesia's transition to sustainable clean energy through innovative programs, 
              strategic partnerships, and comprehensive monitoring systems.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Dashboard', href: '/programs/government' },
                { name: 'Innovation Hub', href: '/programs/innovation' },
                { name: 'News & Updates', href: '/news' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Our Programs</h4>
            <nav className="space-y-2">
              {[
                'Karunia Green Government',
                'Green Innovation Hub',
                'Green Skilling & Upskilling',
                'Direct Cash Assistance',
              ].map((item) => (
                <div key={item} className="text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@greenstrategy.gov.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Green Strategy for Clean Energy. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;