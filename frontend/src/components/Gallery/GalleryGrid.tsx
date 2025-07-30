import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryGridProps {
  images: {
    src: string;
    alt: string;
    category: string;
  }[];
  categories?: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(image => image.category === activeCategory);

  const allCategories = categories || ['all', ...new Set(images.map(img => img.category))];

  return (
    <div>
      {categories && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-[#D4AF37] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37]"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;