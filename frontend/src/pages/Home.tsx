import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';
import RoomCard from '../components/RoomCard';
import TestimonialCard from '../components/TestimonialCard';
import FoodMenuItem from '../components/FoodMenuItem';
import { rooms } from '../data/rooms';
import { menuItems } from '../data/menuItems';
import { testimonials } from '../data/testimonials';
import { Bed, UtensilsCrossed, Users, Award, Wifi, Coffee } from 'lucide-react';

const Home: React.FC = () => {
  const featuredRooms = rooms.filter(room => room.featured).slice(0, 3);
  const featuredMenuItems = menuItems.filter(item => item.featured);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Experience Luxury at Hotel Ashraya"
        subtitle="Discover comfort, elegance, and authentic Nepali hospitality in the heart of Dang."
        image="ashraya.jpeg"
        showBookNow={true}
        height="h-screen"
      />

      {/* Booking Form */}
      <div className="container mx-auto px-4 relative -mt-20 z-20">
        <BookingForm />
      </div>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <SectionTitle
                title="Welcome to Hotel Aashraya"
                subtitle="Your Home Away From Home in Lamahai, Dang"
              />
              <p className="text-gray-600 mb-6">
                Nestled in the serene landscapes of Dang, Hotel Aashraya offers a perfect blend of traditional Nepali hospitality and modern luxury. Our hotel is designed to provide you with a comfortable and memorable stay, whether you're traveling for business or pleasure.
              </p>
              <p className="text-gray-600 mb-6">
                At Hotel Ashraya, we believe in creating experiences that reflect the rich cultural heritage of Nepal while providing all the conveniences expected by modern travelers. From our elegantly appointed rooms to our authentic cuisine, every aspect of your stay is crafted to delight your senses.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#152B68] transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="./pic1.jpeg"
                alt="Hotel Exterior"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
              <img
                src="./pic2.jpeg"
                alt="Hotel Lobby"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
              <img
                src="./pic4.jpeg"
                alt="Swimming Pool"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
              <img
                src="./pic5.jpeg"
                alt="Restaurant"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Discover what makes Hotel Aashraya special"
            center={true}
            light={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Bed size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Luxurious Rooms</h3>
              <p className="text-gray-600">
                Enjoy our spacious, elegantly designed rooms with premium amenities and stunning views.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <UtensilsCrossed size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Exquisite Dining</h3>
              <p className="text-gray-600">
                Savor authentic Nepali cuisine and international dishes prepared by our expert chefs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Exceptional Service</h3>
              <p className="text-gray-600">
                Experience our warm hospitality and attentive service throughout your stay.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every aspect of our hotel experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Wifi size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Modern Amenities</h3>
              <p className="text-gray-600">
                Enjoy high-speed WiFi, smart TVs, and other modern conveniences throughout your stay.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Complimentary Breakfast</h3>
              <p className="text-gray-600">
                Start your day with our delicious breakfast featuring local and international options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Rooms & Suites"
            subtitle="Experience luxury and comfort in our handpicked accommodations"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block bg-[#D4AF37] text-white px-6 py-3 rounded hover:bg-[#BF9E30] transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Dining Experience"
            subtitle="Savor the authentic flavors of Nepal and international cuisine"
            center={true}
          />
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Restaurant"
                className="rounded-lg w-full h-80 object-cover"
              />
              <div className="mt-8 space-y-6">
                {featuredMenuItems.map(item => (
                  <FoodMenuItem key={item.id} item={item} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/menus"
                  className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded hover:bg-[#152B68] transition-colors"
                >
                  Explore Our Menu
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#1E3A8A] mb-4">Our Restaurant</h3>
                <p className="text-gray-600 mb-4">
                  At Hotel Aashraya's restaurant, we offer a culinary journey through Nepal's diverse flavors while also serving international favorites. Our experienced chefs use fresh, locally sourced ingredients to create dishes that delight the palate.
                </p>
                <p className="text-gray-600 mb-4">
                  The elegant dining space provides a perfect setting for romantic dinners, family gatherings, or business meals. With attentive service and a carefully curated menu, we ensure a memorable dining experience for all our guests.
                </p>
                <p className="text-gray-600">
                  Don't miss our special thematic dinners featuring live cultural performances that showcase Nepal's rich heritage.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Food"
                  className="rounded-lg h-40 w-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Food"
                  className="rounded-lg h-40 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Guest Testimonials"
            subtitle="What our guests say about their experience"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/4652070/pexels-photo-4652070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready to Experience Hotel Ashraya?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book your stay now and discover the perfect blend of luxury, comfort, and authentic Nepali hospitality.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#BF9E30] transition-colors"
          >
            Book Your Stay Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;