import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  showBookNow?: boolean;
  height?: string;
  overlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  image,
  showBookNow = false,
  height = 'h-screen',
  overlay = true,
}) => {
  return (
    <div
      className={`relative ${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-40"></div>
      )}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        )}
        {showBookNow && (
          <Link
            to="/rooms"
            className="bg-[#D4AF37] text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#BF9E30] transition-colors inline-block"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;