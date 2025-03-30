
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ChatAssistant from '@/components/ChatAssistant';

// Sample data - in a real app this would come from an API
const products = [
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
  },
  {
    id: '5',
    name: 'Eco-Friendly Activewear Set',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Women\'s Clothing',
    rating: 4.7
  },
  {
    id: '6',
    name: 'Smart Backpack with USB Charging',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    hasAIFeatures: true,
    rating: 4.8
  },
  {
    id: '7',
    name: 'Lightweight Breathable Running Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Men\'s Clothing',
    discountPercentage: 20,
    rating: 4.3
  },
  {
    id: '8',
    name: 'Wireless Bluetooth Earbuds',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    hasAIFeatures: true,
    rating: 4.7,
    isNew: true
  }
];

const categories = [
  "All Categories",
  "Men's Clothing",
  "Women's Clothing",
  "Footwear",
  "Accessories",
  "Electronics"
];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showAIOnly, setShowAIOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [collapsedSections, setCollapsedSections] = useState({
    categories: false,
    price: false,
    features: false,
  });
  
  const toggleSection = (section: keyof typeof collapsedSections) => {
    setCollapsedSections({
      ...collapsedSections,
      [section]: !collapsedSections[section],
    });
  };
  
  // Filter products
  const filteredProducts = products.filter((product) => {
    // Search query filter
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    
    // Price range filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // AI features filter
    const matchesAI = showAIOnly ? product.hasAIFeatures : true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesAI;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-8">
          {/* Shop Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
              <p className="text-muted-foreground">
                Discover our collection of AI-enhanced products
              </p>
            </div>
            
            {/* Search bar */}
            <div className="mt-4 md:mt-0 w-full md:w-auto">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 md:w-80"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full"
                >
                  <Search size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                {sortedProducts.length} products
              </span>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center"
              >
                <SlidersHorizontal size={16} className="mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            {/* Filters sidebar */}
            <div className={`
              ${showFilters ? 'block' : 'hidden'} 
              lg:block w-full lg:w-1/4 xl:w-1/5
            `}>
              <div className="bg-background rounded-lg border p-4 sticky top-20">
                <div className="flex justify-between items-center mb-4 lg:mb-6">
                  <h3 className="font-semibold">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(false)}
                  >
                    <X size={16} />
                  </Button>
                </div>
                
                {/* Categories filter */}
                <div className="mb-6 border-b pb-4">
                  <div 
                    className="flex justify-between items-center mb-3 cursor-pointer"
                    onClick={() => toggleSection('categories')}
                  >
                    <h4 className="font-medium">Categories</h4>
                    {collapsedSections.categories ? 
                      <ChevronDown size={16} /> : 
                      <ChevronUp size={16} />
                    }
                  </div>
                  
                  {!collapsedSections.categories && (
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={category}
                            name="category"
                            className="mr-2"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                          <label htmlFor={category} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Price range filter */}
                <div className="mb-6 border-b pb-4">
                  <div 
                    className="flex justify-between items-center mb-3 cursor-pointer"
                    onClick={() => toggleSection('price')}
                  >
                    <h4 className="font-medium">Price Range</h4>
                    {collapsedSections.price ? 
                      <ChevronDown size={16} /> : 
                      <ChevronUp size={16} />
                    }
                  </div>
                  
                  {!collapsedSections.price && (
                    <div>
                      <div className="mb-4">
                        <Slider
                          defaultValue={[0, 200]}
                          max={200}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="my-4"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded">
                          <span className="pl-2 text-sm text-muted-foreground">$</span>
                          <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                            className="w-16 p-1 text-sm border-0 focus:outline-none"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">to</span>
                        <div className="flex items-center border rounded">
                          <span className="pl-2 text-sm text-muted-foreground">$</span>
                          <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="w-16 p-1 text-sm border-0 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Features filter */}
                <div className="mb-6 border-b pb-4">
                  <div 
                    className="flex justify-between items-center mb-3 cursor-pointer"
                    onClick={() => toggleSection('features')}
                  >
                    <h4 className="font-medium">Features</h4>
                    {collapsedSections.features ? 
                      <ChevronDown size={16} /> : 
                      <ChevronUp size={16} />
                    }
                  </div>
                  
                  {!collapsedSections.features && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="ai-features" 
                          checked={showAIOnly}
                          onCheckedChange={(checked) => setShowAIOnly(!!checked)}
                        />
                        <label
                          htmlFor="ai-features"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          AI Enhanced Products
                          <Sparkles className="ml-1 h-3 w-3 text-brand-purple" />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                    setPriceRange([0, 200]);
                    setShowAIOnly(false);
                    setSortOption('');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Products grid */}
            <div className="w-full lg:w-3/4 xl:w-4/5">
              {/* Sort options and product count */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-muted-foreground">
                  {sortedProducts.length} products
                </span>
                <div className="flex items-center">
                  <span className="text-sm mr-2 hidden sm:inline">Sort by:</span>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Recommended</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filter options
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Categories');
                      setPriceRange([0, 200]);
                      setShowAIOnly(false);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
              
              {/* Load more button */}
              {sortedProducts.length > 0 && (
                <div className="mt-12 text-center">
                  <Button variant="outline" className="px-8">
                    Load More Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Shop;
