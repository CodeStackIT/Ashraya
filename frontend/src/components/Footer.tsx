import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Hotel Info */}
            <div>
              <h3 className="text-3xl font-serif font-bold mb-5">
                Hotel Aashrya
              </h3>
              <p className="mb-6 text-gray-300 max-w-xs">
                Experience luxury and comfort in the heart of Lamahai, Dang,
                Nepal.
              </p>
              <div className="flex space-x-6 mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61578106592741"
                  aria-label="Facebook"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/hotelashrayapvt.ltd?igsh=cW4wZjFxeG10bHJl"
                  aria-label="Instagram"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@hotel.ashraya.pvt?_t=ZS-8y1CucnXifh&_r=1"
                  aria-label="TikTok"
                  className="hover:text-yellow-400 transition-colors duration-300 ml-4"
                >
                  <SiTiktok size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rooms"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    Rooms & Suites
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dining"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    Restaurant & Dining
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <MapPin size={24} className="text-yellow-400" />
                  <span>Lamahai, Dang, Nepal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={24} className="text-yellow-400" />
                  <a
                    href="tel:+9771234567890"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    +977-9857835415
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={24} className="text-yellow-400" />
                  <a
                    href="mailto:info@hotelaashrya.com"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    ashrayahotellamahi@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400 mt-12 pt-6 text-center text-sm text-yellow-300">
          <p>
            &copy; {new Date().getFullYear()} Hotel Aashrya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
