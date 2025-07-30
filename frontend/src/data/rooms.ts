import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Deluxe King Room',
    description: 'Spacious room with a king-sized bed, offering elegant decor and modern amenities for a comfortable stay.',
    longDescription: 'Our Deluxe King Room offers a perfect blend of comfort and elegance. The spacious 400 sq ft room features a plush king-sized bed with premium linens, a cozy seating area, and large windows that bathe the room in natural light. The modern bathroom includes a rain shower, premium toiletries, and plush bathrobes. Guests can enjoy the 50-inch Smart TV, high-speed WiFi, and a minibar stocked with select beverages and snacks. Perfect for couples or business travelers seeking comfort and style.',
    price: 2500,
    discount: 0,
    capacity: 2,
    size: 231,
    bed: 'King',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    amenities: [
      'Free WiFi',
      'Flat-screen TV',
      'Air conditioning',
      'Mini bar',
      'Room service',
      'Coffee maker',
      'Safe',
      'Premium bedding',
      'Rain shower',
      'Workspace'
    ],
    featured: true
  },
  {
    id: 2,
    name: 'Premium Twin Room',
    description: 'Comfortable room with two twin beds, perfect for friends or family traveling together.',
    longDescription: 'The Premium Twin Room is thoughtfully designed for shared accommodation. With 450 sq ft of space, it features two comfortable twin beds with premium linens, ensuring a restful night\'s sleep. The room includes a seating area, work desk, and large windows with scenic views. The modern bathroom offers a shower/tub combination, premium toiletries, and plush bathrobes. Guests can enjoy amenities including a 45-inch Smart TV, high-speed WiFi, and a mini refrigerator. Ideal for friends, colleagues, or family members traveling together.',
    price: 235,
    discount: 10,
    capacity: 2,
    size: 450,
    bed: 'Twin',
    images: [
      'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    amenities: [
      'Free WiFi',
      'Flat-screen TV',
      'Air conditioning',
      'Mini refrigerator',
      'Room service',
      'Coffee maker',
      'Safe',
      'Work desk',
      'Shower/tub combination',
      'Daily housekeeping'
    ]
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area, premium amenities, and stunning views of the surrounding landscape.',
    longDescription: 'Experience the height of luxury in our Executive Suite. This spacious 650 sq ft suite features a separate bedroom with a king-sized bed and a tastefully furnished living area, creating a truly indulgent retreat. The suite offers large panoramic windows with breathtaking views of the surrounding landscape. The luxurious bathroom includes a deep soaking tub, separate rain shower, and premium toiletries. Additional amenities include a 55-inch Smart TV in both the bedroom and living area, high-speed WiFi, a fully stocked minibar, and a Nespresso coffee machine. Perfect for extended stays or guests seeking extra space and comfort.',
    price: 300,
    discount: 0,
    capacity: 2,
    size: 650,
    bed: 'King',
    images: [
      'https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6186815/pexels-photo-6186815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6186613/pexels-photo-6186613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    amenities: [
      'Free high-speed WiFi',
      'Two flat-screen TVs',
      'Separate living area',
      'Air conditioning',
      'Mini bar',
      'Room service',
      'Nespresso coffee machine',
      'Safe',
      'Premium bedding',
      'Deep soaking tub',
      'Separate rain shower',
      'Bathrobe and slippers',
      'Executive work desk',
      'Turndown service'
    ],
    featured: true
  },
  {
    id: 4,
    name: 'Family Room',
    description: 'Spacious room designed for families, with a king-sized bed and additional twin beds for children.',
    longDescription: 'Our Family Room is specially designed to accommodate families comfortably. The generous 550 sq ft space features a king-sized bed for parents and two twin beds for children, all fitted with premium linens. The room includes a cozy seating area, a smart TV with child-friendly programming options, and a spacious bathroom with a bathtub and shower combination. Additional amenities include a mini-refrigerator, microwave, coffee maker, and high-speed WiFi. The room\'s thoughtful layout ensures both togetherness and privacy, making it the perfect choice for family vacations.',
    price:2700,
    discount: 15,
    capacity: 4,
    size: 550,
    bed: 'King + Twin',
    images: [
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    amenities: [
      'Free WiFi',
      'Flat-screen TV',
      'Air conditioning',
      'Mini refrigerator',
      'Microwave',
      'Room service',
      'Coffee maker',
      'Safe',
      'Bathtub and shower',
      'Family toiletries',
      'Extra towels',
      'Daily housekeeping'
    ]
  },
  {
    id: 5,
    name: 'Presidential Suite',
    description: 'Our most luxurious accommodation with multiple bedrooms, a grand living area, and exclusive amenities.',
    longDescription: 'The Presidential Suite represents the pinnacle of luxury at Hotel Aashrya. This opulent 1200 sq ft suite features a master bedroom with a premium king-sized bed, a second bedroom with a queen bed, and a grand living and dining area. The suite offers floor-to-ceiling windows showcasing panoramic views of the surrounding landscape. The marble bathrooms include deep soaking tubs, separate rain showers, and premium toiletries. Guests can enjoy exclusive amenities including a private butler service, a fully stocked premium bar, a dining area for six, a Nespresso coffee machine, and a 65-inch Smart TV in each room. The Presidential Suite promises an unforgettable stay with unparalleled luxury and comfort.',
    price: 8000,
    discount: 0,
    capacity: 4,
    size: 1200,
    bed: 'King + Queen',
    images: [
      'https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4917176/pexels-photo-4917176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    amenities: [
      'Private butler service',
      'Multiple bedrooms',
      'Separate living and dining areas',
      'Free high-speed WiFi',
      'Multiple flat-screen TVs',
      'Premium bar',
      'Dining table for six',
      'Air conditioning',
      'Nespresso coffee machine',
      'Safe',
      'Premium bedding',
      'Deep soaking tubs',
      'Separate rain showers',
      'Luxury bathrobes and slippers',
      'Executive work desk',
      'Turndown service',
      'Welcome amenities',
      'Concierge service'
    ],
    featured: true
  },
  {
    id: 6,
    name: 'Mountain View Room',
    description: 'Comfortable room with breathtaking views of the mountains, perfect for nature lovers.',
    longDescription: 'Our Mountain View Room offers a tranquil retreat with spectacular views of the surrounding mountain landscape. The 420 sq ft room features a comfortable queen-sized bed with premium linens, a cozy seating area positioned by the large windows to maximize the panoramic views, and a modern bathroom with a rain shower. Guests can enjoy amenities including a 45-inch Smart TV, high-speed WiFi, and a minibar with select beverages. The room\'s natural-inspired decor creates a peaceful atmosphere, making it the perfect choice for those seeking a connection with nature without compromising on comfort.',
    price: 3600,
    discount: 5,
    capacity: 2,
    size: 420,
    bed: 'Queen',
    images: [
      'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    amenities: [
      'Mountain views',
      'Free WiFi',
      'Flat-screen TV',
      'Air conditioning',
      'Mini bar',
      'Room service',
      'Coffee maker',
      'Safe',
      'Premium bedding',
      'Rain shower',
      'Daily housekeeping'
    ]
  }
];

export default rooms;