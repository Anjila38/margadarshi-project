
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';
import PackageCard from '@/components/PackageCard';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const SearchResults = () => {
  // Mock packages data
  const packages = [
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
      featured: true,
      category: 'adventure'
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
      featured: false,
      category: 'cultural'
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
      featured: true,
      category: 'luxury'
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
      featured: false,
      category: 'adventure'
    },
    {
      id: '5',
      title: 'Historical Lumbini Tour',
      location: 'Lumbini, Nepal',
      price: 799,
      duration: '5 Days',
      rating: 4.5,
      reviewCount: 42,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Heritage Tours',
      featured: false,
      category: 'cultural'
    },
    {
      id: '6',
      title: 'Chitwan Safari Experience',
      location: 'Chitwan, Nepal',
      price: 650,
      duration: '4 Days',
      rating: 4.7,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      agencyName: 'Wildlife Explorers',
      featured: false,
      category: 'wildlife'
    },
  ];

  // State for filters
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredPackages, setFilteredPackages] = useState(packages);

  // Categories
  const categories = [
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'family', label: 'Family' },
  ];

  // Durations
  const durations = [
    { id: 'short', label: '1-3 Days', min: 1, max: 3 },
    { id: 'medium', label: '4-7 Days', min: 4, max: 7 },
    { id: 'long', label: '8-14 Days', min: 8, max: 14 },
    { id: 'extended', label: '15+ Days', min: 15, max: 100 },
  ];

  // Handle category selection
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  // Apply filters
  const applyFilters = () => {
    let results = packages.filter(pkg => {
      // Price filter
      if (pkg.price < priceRange[0] || pkg.price > priceRange[1]) {
        return false;
      }
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(pkg.category)) {
        return false;
      }
      
      // Duration filter
      if (selectedDuration) {
        const duration = parseInt(pkg.duration.split(' ')[0]);
        const selectedDurationObj = durations.find(d => d.id === selectedDuration);
        if (selectedDurationObj && (duration < selectedDurationObj.min || duration > selectedDurationObj.max)) {
          return false;
        }
      }
      
      return true;
    });
    
    // Sorting
    if (sortBy === 'price-low') {
      results = results.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      results = results.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      results = results.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredPackages(results);
  };

  // Reset filters
  const resetFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedCategories([]);
    setSelectedDuration('');
    setSortBy('popular');
    setFilteredPackages(packages);
  };

  // Apply filters when any filter changes
  React.useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceRange, selectedCategories, selectedDuration, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Search Packages</h1>
          <SearchForm className="mb-8" />
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="w-full lg:w-1/4">
              <Card className="p-4 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Filters</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={resetFilters}
                      className="w-full"
                    >
                      Reset All Filters
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Price Range (USD)</h3>
                    <div className="mb-4 flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={2000}
                      step={50}
                      className="mb-6"
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div className="flex items-center space-x-2" key={category.id}>
                          <Checkbox
                            id={`category-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={(checked) => 
                              handleCategoryChange(category.id, !!checked)
                            }
                          />
                          <Label 
                            htmlFor={`category-${category.id}`}
                            className="text-sm"
                          >
                            {category.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Duration</h3>
                    <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any duration</SelectItem>
                        {durations.map(duration => (
                          <SelectItem key={duration.id} value={duration.id}>
                            {duration.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Results */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-medium">{filteredPackages.length}</span> packages
                </p>
                
                <div className="flex items-center space-x-2">
                  <Label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort" className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map(pkg => (
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
              
              {filteredPackages.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No packages found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to find more options.</p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
