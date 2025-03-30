
import React from 'react';
import { Heart, ShoppingCart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  hasAIFeatures?: boolean;
  discountPercentage?: number;
  rating?: number;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  hasAIFeatures = false,
  discountPercentage,
  rating,
  isNew = false,
}) => {
  const navigate = useNavigate();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const discountedPrice = discountPercentage
    ? price - (price * (discountPercentage / 100))
    : price;

  return (
    <Card className="product-card group overflow-hidden h-full flex flex-col">
      <div 
        onClick={() => navigate(`/product/${id}`)}
        className="relative overflow-hidden cursor-pointer"
      >
        {/* Product image with zoom effect */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge variant="default" className="bg-brand-blue hover:bg-brand-blue-dark">
              New
            </Badge>
          )}
          {discountPercentage && (
            <Badge variant="destructive">
              -{discountPercentage}%
            </Badge>
          )}
        </div>
        
        {/* AI Features Badge */}
        {hasAIFeatures && (
          <div className="absolute top-2 right-2">
            <span className="ai-badge">
              <Sparkles size={10} className="mr-1" />
              AI Enhanced
            </span>
          </div>
        )}
      </div>

      <CardContent className="flex-grow pt-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h3 
          className="font-medium text-base line-clamp-2 mb-1 leading-tight cursor-pointer hover:text-brand-purple"
          onClick={() => navigate(`/product/${id}`)}
        >
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            {formatPrice(discountedPrice)}
          </span>
          {discountPercentage && (
            <span className="text-muted-foreground text-xs line-through">
              {formatPrice(price)}
            </span>
          )}
        </div>
        
        {rating && (
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-muted-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 pb-4 flex justify-between">
        <Button 
          size="sm" 
          variant="outline"
          className="w-9 px-0"
        >
          <Heart size={16} className="text-muted-foreground hover:text-red-500 transition-colors" />
        </Button>
        <Button 
          size="sm" 
          className="bg-brand-purple hover:bg-brand-purple-dark flex-1 ml-2"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
