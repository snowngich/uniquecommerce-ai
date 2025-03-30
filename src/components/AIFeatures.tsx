
import React from 'react';
import { Sparkles, Camera, Shirt, Brain, Bot, Zap } from 'lucide-react';
import AIFeatureCard from './AIFeatureCard';
import { useNavigate } from 'react-router-dom';

const AIFeatures = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center text-3xl font-bold">
            <Sparkles className="mr-2 h-6 w-6 text-brand-purple" />
            AI-Powered Shopping
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge AI technology transforms how you shop online with personalized 
            experiences that understand your unique style and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default AIFeatures;
