import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import { galleryImages } from '../data/galleryImages';

const Gallery: React.FC = () => {
  const categories = ['all', 'rooms', 'dining', 'facilities', 'surroundings'];

  return (
    <div>
      <HeroSection
        title="Photo Gallery"
        subtitle="Explore Hotel Aashrya through our collection of images"
        image="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[60vh]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Gallery"
            subtitle="Take a visual journey through our hotel and surroundings"
            center={true}
          />
          
          <div className="mt-12">
            <GalleryGrid images={galleryImages} categories={categories} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;