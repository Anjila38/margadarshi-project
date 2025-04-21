
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const packageTypes = [
  { value: 'all', label: 'All Packages' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'holiday', label: 'Holiday' },
  { value: 'honeymoon', label: 'Honeymoon' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'wildlife', label: 'Wildlife' },
];

const SearchForm = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date>();
  const [destination, setDestination] = React.useState('');
  const [packageType, setPackageType] = React.useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would construct a query string with parameters
    navigate('/search');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn("bg-white p-6 rounded-lg shadow-lg", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Destination</label>
          <Input 
            placeholder="Where do you want to go?" 
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Travel Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Package Type</label>
          <Select 
            value={packageType}
            onValueChange={setPackageType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a package type" />
            </SelectTrigger>
            <SelectContent>
              {packageTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white">
            <Search className="mr-2 h-4 w-4" />
            Search Trips
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
