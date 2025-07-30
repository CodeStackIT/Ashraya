import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us for bookings, inquiries, or feedback"
        image="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[60vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="We'd love to hear from you"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1E3A8A] p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Hotel Ashraya, Lamahi<br />
                      Dang, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1E3A8A] p-3 rounded-full mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+977-9857835415" className="hover:text-[#1E3A8A]"> +977-9857835415</a><br />
                      {/* <a href="tel:+9771234567891" className="hover:text-[#1E3A8A]">+977 1234567891</a> */}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1E3A8A] p-3 rounded-full mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@hotelaashrya.com" className="hover:text-[#1E3A8A]">ashrayahotellamahi@gmail.com</a><br />
                      {/* <a href="mailto:reservations@hotelaashrya.com" className="hover:text-[#1E3A8A]">reservations@hotelashrya.com</a> */}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1E3A8A] p-3 rounded-full mr-4">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Opening Hours</h3>
                    <p className="text-gray-600">
                      Reception: 24/7<br />
                      Restaurant: 6:30 AM - 10:30 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.2246123387246!2d82.3022366!3d28.122968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzIyLjciTiA4MsKwMTgnMDguMSJF!5e0!3m2!1sen!2snp!4v1630000000000!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Aashrya Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="We'll get back to you as soon as possible"
              />
              
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;