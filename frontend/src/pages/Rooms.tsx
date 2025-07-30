import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';

const Rooms: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400]);
  const [capacity, setCapacity] = useState<number | 'all'>('all');

  const filteredRooms = rooms.filter(room => {
    const meetsPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
    const meetsCapacity = capacity === 'all' || room.capacity === capacity;
    return meetsPrice && meetsCapacity;
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const name = e.target.name;
    
    if (name === 'minPrice') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleCapacityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCapacity(value === 'all' ? 'all' : parseInt(value));
  };

  return (
    <div>
      <HeroSection
        title="Rooms & Suites"
        subtitle="Discover our comfortable and elegant accommodations"
        image="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[70vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar / Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-6">Filter Rooms</h3>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Price Range (per night)</h4>
                  <div className="flex justify-between mb-2">
                    <span>Npr:Rs.{priceRange[0]}</span>
                    <span>Npr:Rs.{priceRange[1]}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="minPrice" className="block text-sm text-gray-600 mb-1">Min Price</label>
                      <input
                        type="range"
                        id="minPrice"
                        name="minPrice"
                        min={0}
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice" className="block text-sm text-gray-600 mb-1">Max Price</label>
                      <input
                        type="range"
                        id="maxPrice"
                        name="maxPrice"
                        min={priceRange[0]}
                        max={5000}
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Capacity */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Guests</h4>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    onChange={handleCapacityChange}
                    value={capacity === 'all' ? 'all' : capacity}
                  >
                    <option value="all">All</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                
                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setPriceRange([0, 400]);
                    setCapacity('all');
                  }}
                  className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Room Listings */}
            <div className="lg:w-3/4">
              <SectionTitle
                title="Our Accommodations"
                subtitle="Choose from our selection of comfortable and luxurious rooms"
              />
              
              {filteredRooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {filteredRooms.map(room => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-100 p-8 rounded-lg text-center mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No Rooms Found</h3>
                  <p className="text-gray-600">
                    Please adjust your filters to see available rooms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;