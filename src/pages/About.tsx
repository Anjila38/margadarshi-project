
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, CheckCircle, Award, Smile, Heart } from 'lucide-react';

const About = () => {
  // Mock team members data
  const teamMembers = [
    {
      name: 'Aarav Sharma',
      position: 'Founder & CEO',
      bio: 'Passionate travel enthusiast with 15+ years of experience in the travel industry.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Priya Patel',
      position: 'Head of Operations',
      bio: 'Expert in travel logistics and customer experience with a focus on sustainability.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Rahul Gupta',
      position: 'Lead Developer',
      bio: 'Tech enthusiast creating seamless digital experiences for travelers worldwide.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Aanya Singh',
      position: 'Marketing Director',
      bio: 'Creative strategist connecting travelers with their dream destinations.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=200&q=80'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-brand-blue-light to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MargaDarshi</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Connecting travelers with trusted local operators to create memorable experiences across South Asia.
          </p>
          <Link to="/contact">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MargaDarshi, which means "guide" in Sanskrit, was born from a simple observation: while South Asia offers incredible travel experiences, finding trustworthy travel agencies and comparing packages was a fragmented and confusing process.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2023 by a group of travel enthusiasts and tech professionals, MargaDarshi set out to create a platform that bridges the gap between travelers and quality local travel operators throughout Nepal, India, Bhutan, and beyond.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a trusted marketplace connecting thousands of travelers with verified agencies offering hundreds of curated travel packages. Our mission is to make authentic local travel experiences accessible, transparent, and hassle-free.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80" 
                alt="Mountain landscape" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80" 
                alt="Colorful temple" 
                className="rounded-lg h-64 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80" 
                alt="River landscape" 
                className="rounded-lg h-64 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80" 
                alt="Animals in nature" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold flex items-center mb-6">
                <MapPin className="mr-2 text-brand-blue" /> Our Mission
              </h3>
              <p className="text-gray-600">
                To create a transparent and reliable platform that connects travelers with the best local travel agencies, ensuring authentic experiences while supporting local economies and sustainable tourism practices.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold flex items-center mb-6">
                <Calendar className="mr-2 text-brand-blue" /> Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted travel marketplace in South Asia, known for curating exceptional travel experiences that create lasting memories while respecting local communities and environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                    <CheckCircle className="text-brand-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
                  <p className="text-gray-600">
                    We verify all our partner agencies and provide honest reviews and clear pricing to build trust with our users.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-earth-green/30 flex items-center justify-center mb-4">
                    <Award className="text-brand-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality Experience</h3>
                  <p className="text-gray-600">
                    We curate only the best travel packages that deliver exceptional value and memorable experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-earth-yellow/30 flex items-center justify-center mb-4">
                    <Smile className="text-brand-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                  <p className="text-gray-600">
                    Our travelers' satisfaction is our top priority, with support available throughout their journey.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-earth-orange/30 flex items-center justify-center mb-4">
                    <Heart className="text-brand-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                  <p className="text-gray-600">
                    We promote responsible tourism that benefits local communities and preserves cultural heritage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" 
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey with Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover amazing destinations and create unforgettable memories with MargaDarshi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/search">
              <Button className="bg-white text-brand-blue hover:bg-gray-100">
                Explore Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
