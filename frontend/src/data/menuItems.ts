import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: 1,
    name: 'Nepali Breakfast Platter',
    description: 'Traditional Nepali breakfast with sel roti, eggs, aloo tama, and masala tea.',
    price:400,
    category: 'breakfast',
    image: 'https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Local Specialty'],
    featured: true
  },
  {
    id: 2,
    name: 'Continental Breakfast',
    description: 'Selection of pastries, fresh fruit, yogurt, and coffee or tea.',
    price: 450,
    category: 'breakfast',
    image: 'https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian Option']
  },
  {
    id: 3,
    name: 'Eggs Benedict',
    description: 'Poached eggs, ham, and hollandaise sauce on English muffins.',
    price: 250,
    category: 'breakfast',
    image: 'https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Avocado Toast',
    description: 'Smashed avocado on artisanal bread with poached eggs and microgreens.',
    price: 300,
    category: 'breakfast',
    image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian']
  },

  // Appetizers
  {
    id: 5,
    name: 'Momos',
    description: 'Traditional Nepali dumplings filled with spiced chicken or vegetables, served with tomato chutney.',
    price: 250,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Local Specialty'],
    featured: true
  },
  {
    id: 6,
    name: 'Samosa Chaat',
    description: 'Crispy samosas topped with yogurt, chutneys, and spices.',
    price: 150,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian']
  },
  {
    id: 7,
    name: 'Paneer Tikka',
    description: 'Marinated and grilled cottage cheese with bell peppers and onions.',
    price:350,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 8,
    name: 'Sekuwa',
    description: 'Nepali-style grilled meat skewers marinated in traditional spices.',
    price: 500,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Local Specialty']
  },

  // Main Courses
  {
    id: 9,
    name: 'Dal Bhat Tarkari',
    description: 'Traditional Nepali meal with lentil soup, rice, vegetable curry, pickle, and papadum.',
    price: 450,
    category: 'main',
    image: 'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Local Specialty', 'Vegetarian Option'],
    featured: true
  },
  {
    id: 10,
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato sauce, served with naan and rice.',
    price: 500,
    category: 'main',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 11,
    name: 'Thakali Thali',
    description: 'Authentic Thakali cuisine featuring rice, lentils, meat, vegetables, and pickles.',
    price: 350,
    category: 'main',
    image: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Local Specialty']
  },
  {
    id: 12,
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices.',
    price: 299,
    category: 'main',
    image: 'https://images.pexels.com/photos/7625071/pexels-photo-7625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 13,
    name: 'Grilled Trout',
    description: 'Fresh Himalayan trout grilled with herbs, served with sautéed vegetables.',
    price: 450,
    category: 'main',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Gluten-Free']
  },

  // Desserts
  {
    id: 14,
    name: 'Sikarni',
    description: 'Traditional Nepali dessert made with strained yogurt, nuts, and cardamom.',
    price: 150,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/8285550/pexels-photo-8285550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian', 'Local Specialty'],
    featured: true
  },
  {
    id: 15,
    name: 'Kheer',
    description: 'Rice pudding flavored with cardamom, saffron, and topped with nuts.',
    price: 100,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian']
  },
  {
    id: 16,
    name: 'Gulab Jamun',
    description: 'Sweet milk dumplings soaked in rose-flavored syrup.',
    price: 120,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian']
  },

  // Beverages
  {
    id: 17,
    name: 'Masala Chai',
    description: 'Traditional spiced tea with milk.',
    price: 396,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/5946970/pexels-photo-5946970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegetarian']
  },
  {
    id: 18,
    name: 'Fresh Fruit Juice',
    description: 'Seasonal fresh-pressed fruit juice.',
    price: 528,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegan', 'Gluten-Free']
  },
  {
    id: 19,
    name: 'Himalayan Herbal Tea',
    description: 'Blend of traditional Himalayan herbs and spices.',
    price: 528,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Vegan', 'Local Specialty']
  },
  {
    id: 20,
    name: 'Raksi',
    description: 'Traditional Nepali rice wine (served to adults only).',
    price: 1000,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/5379876/pexels-photo-5379876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dietaryInfo: ['Local Specialty']
  }
];

export default menuItems;