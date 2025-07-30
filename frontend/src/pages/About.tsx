import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { Star, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        subtitle="Discover the story behind Hotel Aashrya"
        image="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[70vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="From humble beginnings to a premier destination"
              />
              <p className="text-gray-600 mb-6">
                Founded in 2010, Hotel Aashrya began as a small family-run guesthouse with just 10 rooms. With a vision to create a space that combines authentic Nepali hospitality with modern comforts, we have grown into one of the premier accommodations in Dang.
              </p>
              <p className="text-gray-600 mb-6">
                The name "Aashrya" means "shelter" or "refuge" in Nepali, reflecting our commitment to providing a welcoming haven for travelers from around the world. Our architecture blends traditional Nepali design elements with contemporary aesthetics, creating a unique and memorable ambiance.
              </p>
              <p className="text-gray-600">
                Over the years, we have continuously evolved, adding new rooms, facilities, and services while maintaining our core values of exceptional hospitality, authenticity, and attention to detail. Today, Hotel Aashrya stands as a testament to our dedication to providing our guests with unforgettable experiences that showcase the best of Nepal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hotel Lobby"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hotel Exterior"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Swimming Pool"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Restaurant"
                className="rounded-lg h-48 md:h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="What drives us every day"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hospitality</h3>
              <p className="text-gray-600">
                We embrace the Nepali tradition of treating guests as gods, ensuring every visitor feels welcomed and valued.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, constantly seeking ways to improve and exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We celebrate and showcase authentic Nepali culture, cuisine, and traditions, providing a genuine local experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-white rounded-full mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices that respect our environment and support our local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the people who make your stay special"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="./Manager.jpeg"
                
                alt="Kamal Singh - General Manager"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Raj Sharma</h3>
                <p className="text-[#D4AF37] font-medium mb-4">General Manager</p>
                <p className="text-gray-600">
                  With over 15 years of experience in the hospitality industry, Raj ensures that every aspect of Hotel Aashrya meets our high standards of excellence.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src=""
                alt="Sita Adhikari - Executive Chef"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Sita Adhikari</h3>
                <p className="text-[#D4AF37] font-medium mb-4">Executive Chef</p>
                <p className="text-gray-600">
                  Chef Sita combines traditional Nepali cooking techniques with international culinary innovations to create memorable dining experiences.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src=""
                alt="Anish Thapa - Guest Relations Manager"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Anish Thapa</h3>
                <p className="text-[#D4AF37] font-medium mb-4">Guest Relations Manager</p>
                <p className="text-gray-600">
                  Anish and his team are dedicated to ensuring that every guest enjoys a personalized and memorable stay at Hotel Aashrya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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
    </div>
  );
};

export default About;