
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

// Sample product data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: '1',
    name: 'AI-Enhanced Smart Casual Shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men\'s Clothing',
    hasAIFeatures: true,
    rating: 4.8,
    isNew: true
  },
  {
    id: '2',
    name: 'Sustainable Denim Jeans with Perfect Fit Technology',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Women\'s Clothing',
    hasAIFeatures: true,
    discountPercentage: 15,
    rating: 4.5
  },
  {
    id: '3',
    name: 'Ultra-Comfort Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Footwear',
    rating: 4.6,
    discountPercentage: 10
  },
  {
    id: '4',
    name: 'Minimalist Watch with Smart Features',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    hasAIFeatures: true,
    rating: 4.9,
    isNew: true
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our handpicked selection enhanced with AI technology for a perfect fit and style.
            </p>
          </div>
          <Button 
            onClick={() => navigate('/shop')}
            variant="ghost" 
            size="sm" 
            className="flex items-center mt-4 md:mt-0"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
