
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">MargaDarshi</h3>
            <p className="text-gray-300 mb-4">Your trusted travel companion to discover the world's most beautiful destinations.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-white transition-colors">Search Packages</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-blue shrink-0 mt-1" />
                <span className="text-gray-300">123 Travel Street, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-blue shrink-0" />
                <span className="text-gray-300">+977 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-blue shrink-0" />
                <span className="text-gray-300">info@margadarshi.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for exclusive offers and updates.</p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="rounded-r-none focus-visible:ring-brand-blue focus-visible:ring-offset-brand-blue" 
              />
              <Button size="icon" className="bg-brand-blue hover:bg-brand-blue-dark rounded-l-none">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MargaDarshi Travel Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
