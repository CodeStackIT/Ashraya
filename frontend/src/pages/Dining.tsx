import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FoodMenuItem from '../components/FoodMenuItem';
import DineInForm from '../components/DineInForm';
import { menuItems } from '../data/menuItems';

const categories = ['all', 'breakfast', 'appetizers', 'main', 'desserts', 'beverages'];

const Dining: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <HeroSection
        title="Restaurant & Dining"
        subtitle="Experience authentic Nepali cuisine and international favorites"
        image="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[70vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Restaurant"
            subtitle="A culinary journey through Nepal's diverse flavors"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Restaurant Interior"
                className="rounded-lg h-96 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-[#1E3A8A] mb-4">Aashrya Restaurant</h3>
              <p className="text-gray-600 mb-4">
                Our restaurant offers a delightful culinary experience that celebrates the rich flavors of Nepali cuisine while also providing international favorites for our guests from around the world.
              </p>
              <p className="text-gray-600 mb-4">
                Using locally sourced ingredients and traditional cooking methods, our experienced chefs create authentic dishes that showcase the diverse culinary heritage of Nepal. From the flavorful Dal Bhat to the delicious momos, every dish tells a story of Nepal's cultural diversity.
              </p>
              <p className="text-gray-600">
                With a warm and elegant ambiance, attentive service, and panoramic views of the surrounding landscapes, dining at Hotel Aashrya is more than just a meal—it's a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Menu"
            subtitle="Explore our carefully crafted selection of dishes"
            center={true}
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-[#D4AF37] text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {filteredItems.length > 0 ? (
              <div className="space-y-6">
                {filteredItems.map(item => (
                  <FoodMenuItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No items found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Reserve a Table"
                subtitle="Make a reservation for a delightful dining experience"
              />
              <p className="text-gray-600 mb-8">
                Whether you're planning a romantic dinner, a family celebration, or a business meeting, we're ready to welcome you with attentive service and delicious cuisine. Reserve your table now to ensure availability.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src="https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Food"
                  className="rounded-lg h-40 w-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Food"
                  className="rounded-lg h-40 w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Opening Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Breakfast</span>
                    <span>6:30 AM - 10:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lunch</span>
                    <span>12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dinner</span>
                    <span>6:30 PM - 10:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DineInForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;