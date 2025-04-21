
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';
import PackageCard from '@/components/PackageCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { MapPin, CheckCircle, CreditCard, Search, ArrowRight } from 'lucide-react';

const Home = () => {
  // Mock data for featured packages
  const featuredPackages = [
    {
      id: '1',
      title: 'Trek to Everest Base Camp',
      location: 'Khumbu, Nepal',
      price: 1299,
      duration: '14 Days',
      rating: 4.9,
      reviewCount: 128,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Nepal Treks & Tours',
      featured: true
    },
    {
      id: '2',
      title: 'Golden Triangle Tour',
      location: 'Delhi, Agra, Jaipur',
      price: 899,
      duration: '7 Days',
      rating: 4.7,
      reviewCount: 86,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
      agencyName: 'India Expeditions',
      featured: false
    },
    {
      id: '3',
      title: 'Tropical Maldives Resort',
      location: 'Maldives',
      price: 1899,
      duration: '5 Days',
      rating: 4.8,
      reviewCount: 154,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Beach Paradise Tours',
      featured: true
    },
    {
      id: '4',
      title: 'Annapurna Circuit Trek',
      location: 'Nepal',
      price: 1150,
      duration: '12 Days',
      rating: 4.6,
      reviewCount: 73,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Nepal Treks & Tours',
      featured: false
    },
  ];

  // Mock data for top destinations
  const topDestinations = [
    {
      id: '1',
      name: 'Kathmandu Valley',
      country: 'Nepal',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
      price: 699
    },
    {
      id: '2',
      name: 'New Delhi',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      price: 849
    },
    {
      id: '3',
      name: 'Paro',
      country: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
      price: 1249
    },
    {
      id: '4',
      name: 'Pokhara',
      country: 'Nepal',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      price: 549
    },
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'USA',
      rating: 5,
      comment: 'Our trek to Everest Base Camp was the adventure of a lifetime! Our guide was knowledgeable and the views were breathtaking.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'The cultural tour in Kathmandu was amazing. Every detail was taken care of and we felt welcomed everywhere.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Priya Sharma',
      location: 'India',
      rating: 4,
      comment: 'Great service and accommodations throughout our trip. Would recommend MargaDarshi to anyone planning a visit to Nepal.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&q=80'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-24 text-white relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your Journey Begins Here</h1>
            <p className="text-xl mb-8">Discover new places with the best travel packages from trusted agencies.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/search">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white text-lg px-6 py-6">
                  Explore Packages
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800 text-lg px-6 py-6">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <SearchForm />
      </section>
      
      {/* Top Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Top Destinations</h2>
            <Link to="/search" className="text-brand-blue font-medium flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topDestinations.map(destination => (
              <Link to="/search" key={destination.id} className="group">
                <div className="relative rounded-lg overflow-hidden h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-medium">{destination.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">{destination.country}</p>
                      <p className="text-white font-bold">From ${destination.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto mb-4">
                <Search className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">Find your perfect trip from hundreds of packages offered by trusted agencies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-earth-yellow/30 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare</h3>
              <p className="text-gray-600">Compare different options, read reviews, and choose what best suits your needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-earth-green/30 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book</h3>
              <p className="text-gray-600">Easily book and pay online with secure payment options and instant confirmation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-brand-blue bg-opacity-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <CheckCircle className="text-brand-blue mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Trusted Travel Agencies</h3>
                    <p className="text-gray-600">We partner only with verified and reliable travel agencies to ensure quality service.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <CheckCircle className="text-brand-blue mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personalized Packages</h3>
                    <p className="text-gray-600">Find packages that match your preferences, budget, and travel style.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <CheckCircle className="text-brand-blue mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Easy & Secure Payments</h3>
                    <p className="text-gray-600">Book with confidence using our secure and transparent payment system.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Travel Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Travel Packages</h2>
            <Link to="/search" className="text-brand-blue font-medium flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map(pkg => (
              <PackageCard 
                key={pkg.id}
                id={pkg.id}
                title={pkg.title}
                location={pkg.location}
                price={pkg.price}
                duration={pkg.duration}
                rating={pkg.rating}
                reviewCount={pkg.reviewCount}
                image={pkg.image}
                agencyName={pkg.agencyName}
                featured={pkg.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 testimonial-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="p-1 h-full">
                    <TestimonialCard
                      name={testimonial.name}
                      location={testimonial.location}
                      rating={testimonial.rating}
                      comment={testimonial.comment}
                      image={testimonial.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">Get exclusive travel deals, insider tips, and updates straight to your inbox.</p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md"
              />
              <Button className="bg-white text-brand-blue hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
