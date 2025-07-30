import { useState } from "react";
import MenuCard from "../components/MenuCard";
import CategoryFilter from "../components/CategoryFilter";
import { Link } from 'react-router-dom';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  // price: number;
  image: string;
  category: string;
  isSignature?: boolean;
}

const MenuPage1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Indian Cuisine",
      description:
        "Creamy arborio rice with black truffle shavings, wild mushrooms, and aged parmesan. A luxurious comfort dish that embodies Italian elegance.",
      // price: 38,
      image: "/indian-Set-Food.png",
      category: "indian-cuisine",
      isSignature: true,
    },
    {
      id: 2,
      name: "Mutton, Buff and Pork Snacks",
      description:
        "Perfectly cooked duck breast with cherry gastrique, roasted vegetables, and rosemary jus. Served with seasonal microgreens.",
      // price: 42,
      image: "/MuttonBuffPork.png",
      category: "mutton-buff-pork-snacks",
      isSignature: true,
    },
    {
      id: 3,
      name: "Soup Items",
      description:
        "Rich and velvety soup made from fresh Maine lobster, finished with cognac and crème fraîche. A true culinary masterpiece.",
      // price: 18,
      image: "/soup-items.png",
      category: "soup",
    },
    {
      id: 4,
      name: "Salad and Chicken Snacks",
      description:
        "Hand-cut premium wagyu beef with quail egg, capers, shallots, and toasted brioche. An exquisite start to your dining experience.",
      // price: 28,
      image: "/SaladAndChickenSnacks.png",
      category: "salad-and-chicken-snacks",
      isSignature: true,
    },
    {
      id: 5,
      name: "Royal Maharaja Thali",
      description:
        "Complete traditional Indian meal with dal, sabzi, rice, roti, pickles, and sweets. A royal feast fit for kings.",
      // price: 45,
      image: "/Royal-Thali-Set.png",
      category: "royal-thali-set",
      isSignature: true,
    },
    {
      id: 6,
      name: "Indian Breakfast",
      description:
        "Crispy fermented crepe filled with spiced potato curry, served with coconut chutney and sambar.",
      // price: 12,
      image: "/indian-and-american-breakfast-package.png",
      category: "indian-breakfast",
    },
    {
      id: 7,
      name: "Burger, Pizza and Sandwiches",
      description:
        "Premium beef patty with artisan cheese, fresh vegetables, and signature sauce on a brioche bun.",
      // price: 18,
      image: "/burger-pizza-sandwich.png",
      category: "burgers-pizza-sandwiches",
    },
    {
      id: 8,
      name: "Kids Combo and Tandoori Cuising",
      description:
        "Fresh croissants, seasonal fruits, artisan coffee, and selection of jams and spreads.",
      // price: 15,
      image: "/kids-combo.png",
      category: "breakfast",
    },
    {
      id: 9,
      name: "Hotel Ashraya Wine",
      description:
        "Curated collection of fine wines from renowned vineyards around the world.",
      // price: 25,
      image: "/hotel-ashraya-wine.png",
      category: "wine",
    },
    {
      id: 10,
      name: "Hotel Ashraya Premium Vodka",
      description:
        "Top shelf vodka selection served with premium mixers and garnishes.",
      // price: 20,
      image: "/Hotel-Ashraya-vodka.png",
      category: "vodka",
    },
    {
      id: 11,
      name: "Hotel Ashraya Beer",
      description:
        "Local and international craft beers served chilled with complementary snacks.",
      // price: 8,
      image: "/BeerDrinks.png",
      category: "Beer",
    },
    {
      id: 12,
      name: "Hotel Ashraya Whiskey",
      description:
        "Aged whiskey collection from Scotland and Kentucky, served neat or on the rocks.",
      // price: 30,
      image: "/HotelAshrayaWhiskeyPrice.png",
      category: "whiskey",
    },
    {
      id: 13,
      name: "Hukka and Cigrettee",
      description:
        "Aged whiskey collection from Scotland and Kentucky, served neat or on the rocks.",
      image: "/HukkaAndCigrettee.png",
      category: "hukka-and-cigrettee",
    },
    {
      id: 14,
      name: "Local Chicken and SOft Drinks",
      description:
        "Aged whiskey collection from Scotland and Kentucky, served neat or on the rocks.",
      // price: 30,
      image: "/LocalChickenAndSoftDrink.png",
      category: "local-chicken-and-soft-drink",
    },
  ];

  const categories = [
    { key: "all", label: "All Items" },
    { key: "breakfast", label: "Breakfast" },
    { key: "soup", label: "Soup" },
    { key: "indian-cuisine", label: "Indian Cuisine" },
    { key: "royal-thali-set", label: "Royal Thali Set" },
    { key: "burgers-pizza-sandwiches", label: "Burger Pizza Sandwiches" },
    { key: "indian-breakfast", label: "Indian Breakfast" },
    { key: "wine", label: "Wine" },
    { key: "vodka", label: "Vodka" },
    { key: "hukka-and-cigrettee", label: "Hukka and Cigrettee" },
    { key: "whiskey", label: "Whiskey" },
    { key: "Beer", label: "Beer" },
    {
      key: "local-chicken-and-soft-drink",
      label: "Local Chicken and Soft Drinks",
    },
    { key: "mutton-buff-pork-snacks", label: "Mutton, Buff and Pork Snacks" },
    { key: "salad-and-chicken-snacks", label: "Salad and Chicken Snacks" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const filteredCategories = categories.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
      searchTerm.trim() !== ""
  );

  return (
    <div className="min-h-screen bg-pink-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=1200&h=600&fit=crop')",
          }}
        ></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl">
            Curated culinary experiences crafted with the finest ingredients
          </p>
        </div>
      </div>
      {/* Add a search feature of categories. when search it should show in drop down and when click the result, the menu item card should show below. */}
      <div className="relative max-w-md mx-auto my-2">
        <p className="font-bold font-serif text-white text-2xl">
          Search menu items:
        </p>
      </div>
      <div className="relative max-w-md mx-auto my-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Search category..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        {showDropdown && filteredCategories.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10 max-h-60 overflow-y-auto">
            {filteredCategories.map((cat) => (
              <li
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setSearchTerm("");
                  setShowDropdown(false);
                }}
                className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
              >
                {cat.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Signature Dishes Banner */}
        {selectedCategory === "all" && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl  font-bold text-white  mb-2">
                Chef's Signature Dishes
              </h2>
              <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems
                .filter((item) => item.isSignature)
                .map((item) => (
                  <MenuCard key={item.id} item={item} featured={true} />
                ))}
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems
            .filter((item) =>
              selectedCategory === "all" ? !item.isSignature : true
            )
            .map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-light text-slate-800 mb-4">
            Ready to Dine?
          </h3>
          <p className="text-slate-600 mb-6">
            Reserve your table for an unforgettable culinary journey
          </p>
          <Link to="/dining">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium">
            Make Reservation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage1;
