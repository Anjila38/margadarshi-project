
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Calendar, 
  Check, 
  X, 
  Info,
  ArrowRight,
  CreditCard
} from 'lucide-react';

const PackageDetail = () => {
  const { id } = useParams();
  
  // Mock data for a package (in a real app, we would fetch based on the ID)
  const packageData = {
    id: '1',
    title: 'Trek to Everest Base Camp',
    location: 'Khumbu, Nepal',
    price: 1299,
    duration: '14 Days',
    rating: 4.9,
    reviewCount: 128,
    images: [
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
    ],
    agencyName: 'Nepal Treks & Tours',
    agencyLogo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&q=80',
    description: 'Experience the adventure of a lifetime on a trek to Everest Base Camp. Follow in the footsteps of legends as you journey through breathtaking mountain scenery, charming Sherpa villages, and ultimately to the base of the world\'s tallest peak.',
    highlights: [
      'Trek to Everest Base Camp at 5,364m',
      'Spectacular views of Mt. Everest and surroundings',
      'Visit Tengboche Monastery and other cultural sites',
      'Explore Sherpa villages and experience local culture',
      'Professional English-speaking guides and porters'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrive in Kathmandu, transfer to hotel, and attend welcome dinner with trip briefing.'
      },
      {
        day: 2,
        title: 'Flight to Lukla and Trek to Phakding',
        description: 'Early morning flight to Lukla (2,840m) and trek to Phakding (2,610m). Approximately 3 hours of walking.'
      },
      {
        day: 3,
        title: 'Trek to Namche Bazaar',
        description: 'Trek from Phakding to Namche Bazaar (3,440m), the capital of the Sherpa region. Approximately 6 hours of walking.'
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Rest day in Namche for acclimatization with an optional hike to Everest View Hotel for panoramic mountain views.'
      },
      {
        day: 5,
        title: 'Trek to Tengboche',
        description: 'Trek from Namche to Tengboche (3,860m), home to the famous Buddhist monastery. Approximately 5 hours of walking.'
      }
      // More days would follow in a complete itinerary
    ],
    inclusions: [
      'Airport transfers in Kathmandu',
      'Flight to/from Lukla',
      'All accommodations during the trek (teahouses/lodges)',
      'All meals during the trek (breakfast, lunch, and dinner)',
      'Experienced English-speaking guide and porters',
      'Trekking permits and national park fees',
      'Comprehensive first aid kit'
    ],
    exclusions: [
      'International airfare to/from Kathmandu',
      'Nepal visa fees',
      'Travel insurance',
      'Personal expenses and souvenirs',
      'Tips for guides and porters',
      'Alcoholic beverages and additional drinks'
    ],
    featured: true,
    category: 'adventure'
  };
  
  // Mock data for related packages
  const relatedPackages = [
    {
      id: '2',
      title: 'Annapurna Base Camp Trek',
      location: 'Annapurna, Nepal',
      price: 999,
      duration: '11 Days',
      rating: 4.8,
      reviewCount: 96,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Nepal Treks & Tours',
      featured: false
    },
    {
      id: '3',
      title: 'Manaslu Circuit Trek',
      location: 'Manaslu, Nepal',
      price: 1450,
      duration: '16 Days',
      rating: 4.7,
      reviewCount: 63,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Nepal Treks & Tours',
      featured: true
    },
    {
      id: '4',
      title: 'Langtang Valley Trek',
      location: 'Langtang, Nepal',
      price: 850,
      duration: '9 Days',
      rating: 4.6,
      reviewCount: 47,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Nepal Treks & Tours',
      featured: false
    }
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Banner Images */}
          <div className="relative h-80 md:h-96 lg:h-[500px] mb-8 overflow-hidden rounded-xl">
            <img 
              src={packageData.images[currentImageIndex]} 
              alt={packageData.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {packageData.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold">{packageData.title}</h1>
                <div className="flex items-center">
                  <Star size={20} className="fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium mr-1">{packageData.rating}</span>
                  <span className="text-gray-500">({packageData.reviewCount} reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge className="flex items-center gap-1 text-sm py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200">
                  <MapPin size={14} /> {packageData.location}
                </Badge>
                <Badge className="flex items-center gap-1 text-sm py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200">
                  <Clock size={14} /> {packageData.duration}
                </Badge>
                <Badge className="flex items-center gap-1 text-sm py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200">
                  <Users size={14} /> Group tour
                </Badge>
                <Badge className="flex items-center gap-1 text-sm py-1.5 bg-gray-100 text-gray-800 hover:bg-gray-200">
                  <Calendar size={14} /> Available year-round
                </Badge>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={packageData.agencyLogo} 
                    alt={packageData.agencyName}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">{packageData.agencyName}</p>
                  <Badge variant="outline" className="text-xs">Verified Agency</Badge>
                </div>
              </div>
              
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="pt-6">
                  <p className="text-gray-600 mb-6">{packageData.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {packageData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="text-green-500 mr-2 mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="itinerary" className="pt-6">
                  <div className="space-y-6">
                    {packageData.itinerary.map((day) => (
                      <div key={day.day} className="relative pl-8 border-l-2 border-gray-200 pb-6">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-blue"></div>
                        <h3 className="text-lg font-semibold mb-1">Day {day.day}: {day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="inclusions" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2 mb-6">
                        {packageData.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={20} className="text-green-500 mr-2 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
                      <ul className="space-y-2 mb-6">
                        {packageData.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X size={20} className="text-red-500 mr-2 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="pt-6">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="text-4xl font-bold text-center">{packageData.rating}</div>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.round(packageData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 text-center mt-1">{packageData.reviewCount} reviews</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-1">
                        <span className="w-24 text-sm text-gray-500">5 stars</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                        </div>
                        <span className="w-12 text-right text-sm text-gray-500">85%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-24 text-sm text-gray-500">4 stars</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-500 h-2 rounded-full w-[10%]"></div>
                        </div>
                        <span className="w-12 text-right text-sm text-gray-500">10%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-24 text-sm text-gray-500">3 stars</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-500 h-2 rounded-full w-[5%]"></div>
                        </div>
                        <span className="w-12 text-right text-sm text-gray-500">5%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-24 text-sm text-gray-500">2 stars</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-500 h-2 rounded-full w-[0%]"></div>
                        </div>
                        <span className="w-12 text-right text-sm text-gray-500">0%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-24 text-sm text-gray-500">1 star</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-500 h-2 rounded-full w-[0%]"></div>
                        </div>
                        <span className="w-12 text-right text-sm text-gray-500">0%</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">No reviews available yet. Be the first to write a review after completing this journey!</p>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - Booking */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-2xl font-bold text-brand-blue">${packageData.price}</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <div className="text-gray-600">Base price</div>
                      <div className="font-medium">${packageData.price}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-gray-600">Taxes & fees</div>
                      <div className="font-medium">$99</div>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <div className="text-gray-800 font-semibold">Total</div>
                      <div className="font-bold">${packageData.price + 99}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark mb-4">
                    Book Now
                  </Button>
                  
                  <div className="text-center text-sm text-gray-500 mb-4">
                    No payment required today. Reserve your spot.
                  </div>
                  
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Info size={14} className="mr-1" />
                    <span>Free cancellation up to 30 days before departure</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Related Packages */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">You May Also Like</h2>
              <Link to="/search" className="text-brand-blue font-medium flex items-center">
                View All <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPackages.map(pkg => (
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;
