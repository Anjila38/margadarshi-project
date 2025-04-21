
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: "We'll get back to you as soon as possible.",
    });
    // In a real app, we would send the message to a server
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  
  // FAQ items
  const faqItems = [
    {
      question: 'How do I book a package?',
      answer: 'You can book a package by browsing our available options, selecting the one you like, and clicking on "Book Now". Follow the instructions to complete your booking.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, bank transfers, and popular digital payment platforms like eSewa and Khalti for secure and convenient transactions.'
    },
    {
      question: 'Can I customize a package?',
      answer: 'Yes! Many of our packages can be customized. Contact us with your requirements, and we\'ll work with our partner agencies to create a personalized itinerary for you.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellation policies vary by package and agency. Generally, full refunds are available for cancellations made 30 days before departure, with partial refunds available for cancellations made 15-29 days before departure.'
    },
    {
      question: 'How do I become a partner agency?',
      answer: 'We\'re always looking for reputable travel agencies to join our platform. Contact us through our Partner Registration form, and our team will guide you through the verification process.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-brand-blue-light to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you plan your next adventure.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <MapPin className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Travel Street<br />
                  Thamel, Kathmandu<br />
                  Nepal
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Phone className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  Phone: +977 1234567890
                </p>
                <p className="text-gray-600">
                  Toll-free: 1800-123-4567
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Mail className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  General: info@margadarshi.com
                </p>
                <p className="text-gray-600">
                  Support: help@margadarshi.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="booking">Booking Question</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                  />
                </div>
                
                <Button type="submit" className="bg-brand-blue hover:bg-brand-blue-dark">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Business Hours & Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Clock size={20} className="text-brand-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Monday - Friday</h3>
                    <p className="text-gray-600">9:00 AM - 6:00 PM NPT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-brand-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Saturday</h3>
                    <p className="text-gray-600">10:00 AM - 4:00 PM NPT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-brand-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Sunday</h3>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              
              {/* This would be replaced with an actual map in a real app */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <MapPin size={36} className="mx-auto text-brand-blue mb-2" />
                  <p className="text-gray-600">Interactive map would be here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your question here?</p>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
