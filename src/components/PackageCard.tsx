
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users } from 'lucide-react';

interface PackageCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  image: string;
  agencyName: string;
  featured?: boolean;
}

const PackageCard = ({
  id,
  title,
  location,
  price,
  duration,
  rating,
  reviewCount,
  image,
  agencyName,
  featured = false
}: PackageCardProps) => {
  return (
    <Link to={`/package/${id}`}>
      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'border-brand-blue border-2' : ''}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
          {featured && (
            <Badge className="absolute top-2 right-2 bg-brand-blue">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium line-clamp-1">{title}</h3>
            <div className="flex items-center">
              <Star size={16} className="fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-3">{location}</p>
          <div className="flex items-center text-sm text-gray-600 space-x-3 mb-3">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>By {agencyName}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-brand-blue">${price}</span>
              <span className="text-sm text-gray-500">/person</span>
            </div>
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PackageCard;
