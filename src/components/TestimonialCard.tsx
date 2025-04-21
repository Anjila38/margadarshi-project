
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
}

const TestimonialCard = ({
  name,
  location,
  rating,
  comment,
  image
}: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
        
        <p className="text-gray-600 flex-grow mb-4">&ldquo;{comment}&rdquo;</p>
        
        <div className="flex items-center mt-auto">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
