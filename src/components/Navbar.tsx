
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Globe, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-brand-blue" />
          <span className="text-xl font-bold text-gray-800">MargaDarshi</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-brand-blue font-medium">Home</Link>
          <Link to="/search" className="text-gray-600 hover:text-brand-blue font-medium">Packages</Link>
          <Link to="/about" className="text-gray-600 hover:text-brand-blue font-medium">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-brand-blue font-medium">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">Sign Up</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-600 hover:text-brand-blue py-2 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/search" className="text-gray-600 hover:text-brand-blue py-2 font-medium" onClick={toggleMenu}>Packages</Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-blue py-2 font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-brand-blue py-2 font-medium" onClick={toggleMenu}>Contact</Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-brand-blue text-brand-blue">Login</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
