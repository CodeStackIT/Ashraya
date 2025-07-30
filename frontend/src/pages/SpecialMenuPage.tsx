import React from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  isSpecial?: boolean;
}

const SpecialMenuPage: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
    name: "Local Badiya Chicken",
    description: "Authentic local chicken dish, prepared with traditional spices for a rich and flavorful taste unique to Lamahi, Dang.",
    image: "/bhalespecial.jpg",
    category: "meat",
    isSpecial: true,
    },
    {
     id: 2,
    name: "Sekuwa By Kilo & Jheer",
    description: "A variety of grilled (Sekuwa) and fried (Jheer) meat options, including chicken, buff, pork, and mutton, served in generous portions for sharing and enjoying classic Nepali flavors.",
    image: "/sekurwspecial.jpeg",
    category: "meat",
    isSpecial: true,
    },
   
  ];

  // Show only special items
  const specialItems = menuItems.filter((item) => item.isSpecial);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans pb-7">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/special-hero-bg.jpg')] bg-cover bg-center blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-4 drop-shadow-lg text-yellow-400">
            Special Menu
          </h1>
          <p className="text-lg md:text-xl text-yellow-200 font-light tracking-wide">
            Discover our chef’s exclusive selections crafted for a memorable dining experience.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full">
  {specialItems.length === 0 ? (
    <p className="text-center text-yellow-300 col-span-full">
      No special menu items available at the moment.
    </p>
  ) : (
    specialItems.map((item) => (
      <div
        key={item.id}
        className="relative bg-gray-800 rounded-xl shadow-2xl border-2 border-yellow-600 hover:shadow-yellow-500 transition-shadow duration-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="rounded-t-xl object-cover w-full h-auto"  // Increased height here
          loading="lazy"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.name}</h3>
          <p className="text-yellow-200 mb-4 text-sm">{item.description}</p>
          {item.isSpecial && (
            <span className="inline-block bg-yellow-600 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Special
            </span>
          )}
        </div>
      </div>
    ))
  )}
</section>


      {/* Call to Action */}
      {/* <section className="max-w-4xl mx-auto mt-20 text-center px-6 py-12 bg-yellow-600 rounded-3xl shadow-lg text-gray-900">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Experience the Special?</h2>
        <p className="mb-6 font-light text-lg max-w-xl mx-auto">
          Book your table now and indulge in our exclusive special menu crafted just for you.
        </p>
        <button className="bg-gray-900 text-yellow-400 px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Reserve a Table
        </button>
      </section> */}
    </div>
  );
};

export default SpecialMenuPage;
