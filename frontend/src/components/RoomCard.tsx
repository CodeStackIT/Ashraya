import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Users, Coffee, Maximize } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-64 object-cover"
        />
        {room.discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {room.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
          <div className="text-right">
            <span className="text-lg font-bold text-[#1E3A8A]">
              NPR {room.price.toLocaleString()}
            </span>
            <p className="text-sm text-gray-500">per night</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Users size={16} className="mr-1" />
            <span>{room.capacity} Guests</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Maximize size={16} className="mr-1" />
            <span>{room.size} sqft</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Wifi size={16} className="mr-1" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Coffee size={16} className="mr-1" />
            <span>Breakfast</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/rooms/${room.id}`}
            className="text-[#1E3A8A] font-medium hover:text-[#D4AF37] transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/rooms/${room.id}`}
            className="bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#BF9E30] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;