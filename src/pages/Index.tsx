
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AIFeatures from '@/components/AIFeatures';
import ChatAssistant from '@/components/ChatAssistant';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust badges section */}
        <section className="py-8 bg-background border-y">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-muted/50 p-3 rounded-full mb-3">
                  <ShieldCheck className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-medium">Secure Checkout</h3>
                <p className="text-sm text-muted-foreground">Your data is protected with bank-level security</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-muted/50 p-3 rounded-full mb-3">
                  <Truck className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On all orders over $50</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-muted/50 p-3 rounded-full mb-3">
                  <RotateCcw className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-medium">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day hassle-free return policy</p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedProducts />
        
        {/* AI Enhanced Shopping Banner */}
        <section className="py-12 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 max-w-xl">
                <Badge variant="secondary" className="mb-4 bg-white/20 hover:bg-white/30 text-white">
                  <Sparkles className="mr-1 h-3 w-3" />
                  AI-Enhanced
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Experience Shopping Like Never Before</h2>
                <p className="mb-6">
                  Our AI understands your unique style and helps you discover products 
                  you'll love. Get personalized recommendations, virtual try-ons, and more.
                </p>
                <Button className="bg-white text-brand-purple hover:bg-white/90">
                  Discover AI Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-slow"></div>
                  <div className="absolute inset-4 rounded-full bg-white/20"></div>
                  <div className="absolute inset-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AIFeatures />

        {/* Newsletter Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to get special offers, free giveaways, and AI-powered style recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 flex-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
                <Button className="bg-brand-purple hover:bg-brand-purple-dark">
                  Subscribe Now
                </Button>
              </div>
              
              <p className="mt-4 text-xs text-muted-foreground">
                By subscribing you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
