
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';
import AIFeatureCard from '@/components/AIFeatureCard';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Camera, 
  Shirt, 
  Brain, 
  Bot, 
  Zap, 
  ShoppingBag, 
  ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIFeaturesPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-purple to-brand-blue py-16 md:py-24">
          <div className="container text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 inline-flex items-center justify-center">
                <Sparkles className="mr-3 h-10 w-10" />
                AI-Powered Shopping
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Experience the future of e-commerce with our innovative AI features 
                that make shopping more personalized, intuitive, and enjoyable.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-brand-purple hover:bg-white/90"
                onClick={() => navigate('/shop')}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop with AI Now
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Discover Our Unique AI Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AIFeatureCard
                title="Visual Search"
                description="Take a photo of any item you like and our AI will find similar products in our catalog instantly."
                icon={<Camera size={20} />}
                accentColor="bg-gradient-to-r from-blue-400 to-blue-600"
                linkText="Try Visual Search"
                onClick={() => navigate('/ai-features/visual-search')}
              />
              
              <AIFeatureCard
                title="Virtual Try-On"
                description="See how clothes look on you before buying. Upload your photo and visualize any outfit."
                icon={<Shirt size={20} />}
                accentColor="bg-gradient-to-r from-purple-400 to-purple-600"
                linkText="Try Virtual Fitting"
                onClick={() => navigate('/ai-features/virtual-try-on')}
              />
              
              <AIFeatureCard
                title="Style Recommendations"
                description="Get personalized outfit ideas and style suggestions based on your preferences and purchase history."
                icon={<Brain size={20} />}
                accentColor="bg-gradient-to-r from-pink-400 to-pink-600"
                linkText="View Recommendations"
                onClick={() => navigate('/ai-features/style-recommendations')}
              />
              
              <AIFeatureCard
                title="Shopping Assistant"
                description="Chat with our AI shopping assistant for help finding products, checking sizes, and getting styling advice."
                icon={<Bot size={20} />}
                accentColor="bg-gradient-to-r from-green-400 to-green-600"
                linkText="Chat with Assistant"
                onClick={() => navigate('/ai-features/shopping-assistant')}
              />
              
              <AIFeatureCard
                title="Size Prediction"
                description="Never order the wrong size again. Our AI analyzes your past purchases to recommend your perfect fit."
                icon={<Zap size={20} />}
                accentColor="bg-gradient-to-r from-orange-400 to-orange-600"
                linkText="Get Size Prediction"
                onClick={() => navigate('/ai-features/size-prediction')}
              />
              
              <AIFeatureCard
                title="Trend Forecasting"
                description="Stay ahead of fashion trends with AI-powered insights into upcoming styles based on global data."
                icon={<Sparkles size={20} />}
                accentColor="bg-gradient-to-r from-yellow-400 to-yellow-600"
                linkText="Explore Trends"
                onClick={() => navigate('/ai-features/trend-forecasting')}
              />
            </div>
          </div>
        </section>

        {/* Preview section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  How Our AI Technology Works
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our state-of-the-art AI system analyzes thousands of fashion items, user preferences, 
                  and global trends to deliver a uniquely personalized shopping experience. Here's how 
                  we're revolutionizing e-commerce:
                </p>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-4 h-8 w-8 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <span className="text-brand-purple font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Smart Data Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI processes your style preferences, browsing habits, and purchase history.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-8 w-8 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <span className="text-brand-purple font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Personalized Recommendations</h3>
                      <p className="text-sm text-muted-foreground">
                        We generate tailored product suggestions that match your unique style.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-8 w-8 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <span className="text-brand-purple font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Virtual Visualization</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced AI rendering shows how products will look on you or in your space.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-8 w-8 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <span className="text-brand-purple font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Continuous Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        The system improves over time as it learns more about your preferences.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="mt-8 bg-brand-purple hover:bg-brand-purple-dark"
                  onClick={() => {
                    // This would open the chatbot directly
                    // For demo purposes, just navigate to shop
                    navigate('/shop');
                  }}
                >
                  Start Using AI Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl bg-white">
                  <div className="aspect-video bg-gradient-to-br from-brand-purple-light/20 to-brand-blue-light/20 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Sparkles className="h-20 w-20 text-brand-purple mb-4" />
                      <span className="text-lg font-medium">AI Feature Demo</span>
                      <span className="text-sm text-muted-foreground">Interactive preview coming soon</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-purple/10 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Size Prediction</div>
                      <div className="text-xs text-muted-foreground">98% accuracy rate</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-blue/10 p-2 rounded-full">
                      <Camera className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Visual Search</div>
                      <div className="text-xs text-muted-foreground">Find any product by image</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials/Stats */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">The Power of AI Shopping</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">95%</div>
                <p className="text-muted-foreground">Customer satisfaction with AI recommendations</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">3x</div>
                <p className="text-muted-foreground">Higher conversion rate with virtual try-on</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">70%</div>
                <p className="text-muted-foreground">Reduction in returns with size prediction</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">24/7</div>
                <p className="text-muted-foreground">AI shopping assistant availability</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/shop')}
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Experience AI Shopping Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default AIFeaturesPage;
