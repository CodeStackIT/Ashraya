export interface Room {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  discount: number;
  capacity: number;
  size: number;
  bed: string;
  images: string[];
  amenities: string[];
  featured?: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  dietaryInfo?: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}