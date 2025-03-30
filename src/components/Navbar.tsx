
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  User, 
  Menu, 
  X, 
  Heart,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight gradient-text">
            UniqueCommerce<span className="ml-1 inline-flex items-center text-brand-blue"><Sparkles size={16} className="mr-1" />AI</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/shop" className="text-sm font-medium transition-colors hover:text-brand-purple">
            Shop
          </NavLink>
          <NavLink to="/collections" className="text-sm font-medium transition-colors hover:text-brand-purple">
            Collections
          </NavLink>
          <NavLink to="/ai-features" className="text-sm font-medium relative">
            <span className="transition-colors hover:text-brand-purple">AI Features</span>
            <span className="absolute -top-2 -right-8 text-xs px-2 py-0.5 rounded-full bg-brand-purple text-white animate-pulse-slow">
              New
            </span>
          </NavLink>
          <NavLink to="/about" className="text-sm font-medium transition-colors hover:text-brand-purple">
            About
          </NavLink>
        </div>

        {/* Search, Cart, and User */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search size={20} />
          </Button>
          <NavLink to="/wishlist" className="inline-flex">
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Heart size={20} />
            </Button>
          </NavLink>
          <NavLink to="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                  {cartItems}
                </span>
              )}
            </Button>
          </NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="User account">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NavLink to="/profile" className="w-full">Profile</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/orders" className="w-full">Orders</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/settings" className="w-full">Settings</NavLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NavLink to="/login" className="w-full">Login</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <NavLink to="/cart" className="relative mr-2">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                  {cartItems}
                </span>
              )}
            </Button>
          </NavLink>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-4 py-4">
            <NavLink 
              to="/shop" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/collections" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </NavLink>
            <NavLink 
              to="/ai-features" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-muted flex items-center"
              onClick={() => setIsOpen(false)}
            >
              AI Features
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-brand-purple text-white">
                New
              </span>
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/profile" 
              className="text-sm font-medium px-2 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="search"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 outline-none text-sm"
              />
              <Button size="icon" variant="ghost">
                <Search size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
