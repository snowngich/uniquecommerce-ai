
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center text-xl font-bold mb-4 gradient-text">
              UniqueCommerce<span className="ml-1 inline-flex items-center"><Sparkles size={16} className="mr-1" />AI</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Revolutionizing e-commerce with AI-powered shopping experiences 
              that make finding your perfect style effortless.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" aria-label="Instagram">
                <Instagram size={18} />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Facebook">
                <Facebook size={18} />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Twitter">
                <Twitter size={18} />
              </Button>
              <Button size="icon" variant="ghost" aria-label="YouTube">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-muted-foreground hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/ai-features" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-muted-foreground hover:text-foreground transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get special offers, free giveaways, and AI-powered style recommendations.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none focus-visible:ring-brand-purple"
                />
                <Button 
                  className="rounded-l-none bg-brand-purple hover:bg-brand-purple-dark"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing you agree to our Terms and Privacy Policy.
              </p>
            </div>
            
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Mail size={14} className="mr-2" />
                support@uniquecommerce.ai
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone size={14} className="mr-2" />
                +1 (888) 555-0123
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin size={14} className="mr-2" />
                123 Fashion Street, New York, NY
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UniqueCommerce AI. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
              className="h-6 mx-1"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-6 mx-1"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className="h-6 mx-1"
            />
            <img 
              src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" 
              alt="Apple Pay" 
              className="h-8 mx-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
