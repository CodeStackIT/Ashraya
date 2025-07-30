import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Wifi, Coffee, Check } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';
import Button from '../components/Button';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';
import { Room } from '../types';

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [similarRooms, setSimilarRooms] = useState<Room[]>([]);

  useEffect(() => {
    if (id) {
      const foundRoom = rooms.find(r => r.id === parseInt(id));
      if (foundRoom) {
        setRoom(foundRoom);
        
        // Find similar rooms (excluding the current one)
        const similar = rooms
          .filter(r => r.id !== foundRoom.id && r.capacity === foundRoom.capacity)
          .slice(0, 2);
        setSimilarRooms(similar);
      }
    }
  }, [id]);

  const nextImage = () => {
    if (room) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === room.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (room) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? room.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (!room) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Room not found</h2>
        <p className="text-gray-600 mt-4">The room you're looking for doesn't exist.</p>
        <Link to="/rooms" className="mt-8 inline-block bg-[#D4AF37] text-white px-6 py-3 rounded hover:bg-[#BF9E30] transition-colors">
          Browse All Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Room Images Gallery */}
      <div className="relative h-[70vh]">
        <img
          src={room.images[currentImageIndex]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-between px-6">
          <button
            onClick={prevImage}
            className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="absolute bottom-4  left-1/2 transform -translate-x-1/2 flex space-x-2">
          {room.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`View image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Room Details */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-[#1E3A8A]">{room.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-gray-600 mr-4">
                    <Coffee size={18} className="mr-1" />
                    <span>Breakfast Included</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Wifi size={18} className="mr-1" />
                    <span>Free WiFi</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                {room.discount > 0 && (
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                    {room.discount}% OFF
                  </div>
                )}
                <div className="text-2xl font-bold text-[#1E3A8A]">
                  NPR {room.price.toLocaleString()}
                </div>
                <p className="text-sm text-gray-500">per night</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Room Description</h2>
              <p className="text-gray-600 mb-6">
                {room.longDescription || room.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="font-medium mr-2">Room Size:</span>
                  <span>{room.size} sq ft</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium mr-2">Bed Type:</span>
                  <span>{room.bed}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium mr-2">Capacity:</span>
                  <span>{room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium mr-2">Breakfast:</span>
                  <span>Included</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={18} className="text-[#D4AF37] mr-2" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Policies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800">Check-in/Check-out</h3>
                  <p className="text-gray-600">Check-in: 2:00 PM - 10:00 PM</p>
                  <p className="text-gray-600">Check-out: By 12:00 PM</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Cancellation Policy</h3>
                  <p className="text-gray-600">Free cancellation up to 24 hours before check-in. Cancellations made less than 24 hours before check-in are subject to a one-night charge.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Children and Extra Beds</h3>
                  <p className="text-gray-600">Children of all ages are welcome. Children under 12 years stay free when using existing beds.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Pets</h3>
                  <p className="text-gray-600">Pets are not allowed.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#1E3A8A] text-white p-4">
                  <h3 className="text-xl font-bold">Book This Room</h3>
                  <p className="text-sm">Best price guaranteed</p>
                </div>
                <BookingForm room={room} isRoomDetail={true} />
              </div>
              
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-bold text-yellow-800">Why Book Direct?</h4>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-start text-sm text-yellow-700">
                    <Check size={16} className="mr-1 mt-0.5 flex-shrink-0" />
                    <span>Best rate guarantee</span>
                  </li>
                  <li className="flex items-start text-sm text-yellow-700">
                    <Check size={16} className="mr-1 mt-0.5 flex-shrink-0" />
                    <span>Free Wi-Fi throughout your stay</span>
                  </li>
                  <li className="flex items-start text-sm text-yellow-700">
                    <Check size={16} className="mr-1 mt-0.5 flex-shrink-0" />
                    <span>Complimentary welcome drink</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Rooms */}
        {similarRooms.length > 0 && (
          <div className="mt-16">
            <SectionTitle
              title="Similar Rooms"
              subtitle="You might also be interested in these accommodations"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {similarRooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Rooms */}
        <div className="mt-12 text-center">
          <Button to="/rooms" variant="outline">
            Back to All Rooms
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;