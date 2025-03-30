
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ShoppingBag, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="hero-gradient absolute inset-0 opacity-90"></div>
      
      <div className="container relative z-10 px-4 py-24 sm:py-32 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Shopping Reimagined With{' '}
            <span className="relative">
              <span className="inline-block animate-float">AI</span>
              <Sparkles className="absolute -right-7 -top-2 h-6 w-6 text-yellow-300" />
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-white/90 max-w-xl">
            Experience the future of e-commerce with our AI-powered platform. 
            Personalized recommendations, virtual try-ons, and smart search that 
            understands exactly what you're looking for.
          </p>
          
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button 
              onClick={() => navigate('/shop')}
              size="lg" 
              className="bg-white text-brand-purple hover:bg-white/90"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
            <Button 
              onClick={() => navigate('/ai-features')}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Explore AI Features
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative ml-10 mt-10">
            {/* Animated search component */}
            <div className="absolute -top-20 right-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-brand-purple" />
                <div>
                  <h3 className="font-medium text-sm">Smart Visual Search</h3>
                  <p className="text-xs text-muted-foreground">Find products with your camera</p>
                </div>
              </div>
            </div>
            
            {/* Main product image */}
            <div className="rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl overflow-hidden border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Fashion Model"
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-brand-purple">AI Suggested For You</p>
                    <h3 className="font-medium text-sm">Summer Collection</h3>
                  </div>
                  <Button size="sm" className="bg-brand-purple hover:bg-brand-purple-dark">
                    View
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating style recommendation */}
            <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-[250px] animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex flex-col">
                <h3 className="font-medium text-sm flex items-center">
                  <Sparkles className="mr-1 h-4 w-4 text-brand-purple" />
                  Style Recommendations
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Our AI analyzes your preferences to suggest perfect outfits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
