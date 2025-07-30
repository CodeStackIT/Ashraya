import React from 'react';
import { Star } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  // price: number;
  image: string;
  category: string;
  isSignature?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
  featured?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, featured = false }) => {
  return (
    <div className={`flex flex-col h-full bg-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${featured ? 'lg:col-span-1' : ''}`}>
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Signature Badge */}
        {item.isSignature && (
          <div className="absolute top-4 left-4 bg-amber-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star size={14} fill="currentColor" />
            Signature
          </div>
        )}
        
        {/* Price Badge */}
        {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full font-semibold">
          ${item.price}
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
            {item.name}
          </h3>
        </div>
        
        <p className="text-slate-600 leading-relaxed mb-4 text-sm">
          {item.description}
        </p>

        {/* Category Tag */}
        <div className="flex items-center justify-between mt-auto">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full capitalize">
            {item.category.replace('_', ' ')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
