import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";

import heroimage from "/menupageKohomeimage.jpg";
import kidscombo from "/kids-combo.png";
import soupitems from "/soup-items.png";
import indianSet from "/indian-Set-Food.png";
import RoyalThali from "/Royal-Thali-Set.png";
import BurgerPizzaSandwich from "/burger-pizza-sandwich.png";
import IndianAndAmericanBreakfast from "/indian-and-american-breakfast-package.png";
import HotelAshrayaWine from "/hotel-ashraya-wine.png";
import HotelAshrayaVodka from "/Hotel-Ashraya-vodka.png";
import HukkaAndCigrettee from "/HukkaAndCigrettee.png";
import HotelAshrayaWhiskeyPrice from "/HotelAshrayaWhiskeyPrice.png";
import BeerPrice from "/BeerDrinks.png";
import LocalChickenAndSoftDrinks from "/LocalChickenAndSoftDrink.png";
import MuttonBuffPork from "/MuttonBuffPork.png";
import SaladAndChickenSnacks from "/SaladAndChickenSnacks.png";
import QrMenuSection from "../components/HotelMenuQrSection";

const menuItems = [
  {
    title: "Breakfast Menu",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="font-semibold text-lg">Kids Combo Set (Rs.375/-):</span>
          <br />
          Comes with crispy French fries, tangy sauces, juicy chicken nuggets, a cheese ball, and refreshing juice. Served with classic ketchup and creamy sauce, a favorite among kids!
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Tandoori Options:</span>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium">Tandoori Chicken Full:</span> Rs.1000/-</li>
            <li><span className="font-medium">Half:</span> Rs.550/-</li>
            <li><span className="font-medium">Chicken Tikka:</span> Rs.400/-</li>
            <li><span className="font-medium">Chicken Malai Tikka:</span> Rs.450/-</li>
            <li><span className="font-medium">Fish Tikka:</span> Rs.450/-</li>
          </ul>
        </div>
        <div>
          <em className="text-orange-700">
            The Tandoori dishes look absolutely mouthwatering, especially the whole roasted chicken with lemon and herbs. Rich, flavorful, and perfect for sharing!
          </em>
        </div>
      </div>
    ),
    image: kidscombo,
  },
  {
    title: "Soups Menu",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Creamy Soups</span>
          <div>Try Cream of Chicken (Rs.200), Mushroom (Rs.200), or Veg Soup (Rs.150) for a smooth start.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Tomyum Flavors</span>
          <div>Enjoy the spicy Prawn Tomyum (Rs.350) or Chicken Tomyum (Rs.300), full of bold flavor.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Hot and Sour</span>
          <div>Go for Chicken (Rs.250) or Veg Hot and Sour (Rs.150) if you love a tangy kick.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Clear Soups</span>
          <div>Keep it light with Chicken Clear (Rs.225) or Veg Clear Soup (Rs.150).</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Thukpa</span>
          <div>Warm up with Chicken Thukpa (Rs.250) or Veg Thukpa (Rs.200), perfect for any time.</div>
        </div>
      </div>
    ),
    image: soupitems,
  },
  {
    title: "Indian Cuisine",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Curries & Sabji</span>
          <div>
            Enjoy Dal Tadka or Fry (Rs.200), Mutter Paneer (Rs.400), and Kadhai Sabji Miloni (Rs.350) for rich vegetarian flavors.
          </div>
          <div>
            Try Chicken Curry (Rs.400), Mutton Rara Ghost (Rs.450), Dhaba Mutton Curry (Rs.450), Fish Curry (Rs.400), or Prawn Curry (Rs.800) for a classic non-veg taste.
          </div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Indian Set</span>
          <div>
            Choose from Plain Rice (Rs.200), Fried Rice (Rs.250), or Kashmiri Pulao (Rs.300) to complete your meal.
          </div>
          <div>
            Pair your curry with Plain Naan (Rs.75), Butter Naan (Rs.100), Garlic Naan (Rs.120), Tandoori Roti (Rs.50), or Tawa Roti (Rs.25), fresh and hot from the tandoor.
          </div>
        </div>
      </div>
    ),
    image: indianSet,
  },
  {
    title: "Royal Thali Set",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Veg Khana (Rs.350)</span>
          <div>Rice, daal, mutter paneer, mix veg, saag, achar, chatni, papad, salad, and dahi.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Chicken Khana (Rs.400)</span>
          <div>Rice, daal, chicken curry, mix veg, saag, achar, chatni, papad, salad, and dahi.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Local Chicken Khana (Rs.500)</span>
          <div>Rice, daal, local chicken curry, mix veg, saag, achar, chatni, papad, salad, and dahi.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Fish Khana (Rs.500)</span>
          <div>Rice, daal, fish curry, mix veg, saag, achar, chatni, papad, salad, and dahi.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Mutton Khana (Rs.550)</span>
          <div>Rice, daal, mutton curry, mix veg, saag, achar, chatni, papad, salad, and dahi.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Ashraya Special (Rs.650)</span>
          <div>Rice, daal, badhiya chicken curry, mix veg, saag, achar, chatni, papad, salad, dahi, and Lalmon.</div>
        </div>
      </div>
    ),
    image: RoyalThali,
  },
  {
    title: "Burgers, Pizza & Sandwiches",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Burgers</span>
          <div>Veg Burger (Rs.300) and Chicken Burger (Rs.400).</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Pizza</span>
          <div>Veg Pizza (Rs.450), Chicken Pizza (Rs.500), Mix Pizza (Rs.550), and Margherita Pizza (Rs.400).</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Sandwiches</span>
          <div>Veg Sandwich (Rs.200), Chicken Sandwich (Rs.300), and Non Veg Club Sandwich (Rs.400).</div>
        </div>
      </div>
    ),
    image: BurgerPizzaSandwich,
  },
  {
    title: "Indian Breakfast",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Jeri, Puri & Tarkari (Rs.275)</span>
          <div>Traditional combo of sweet Jeri, crispy Puri, and flavorful Tarkari.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Chole Bhature (Rs.250)</span>
          <div>Spicy chickpea curry served with fluffy fried Bhature.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Aalu Paratha with Pickle & Curd (Rs.300)</span>
          <div>Stuffed potato flatbread served with tangy pickle and fresh curd.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Mix Paratha with Pickle & Curd (Rs.350)</span>
          <div>Mixed vegetable stuffed paratha with pickle and curd.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Paneer Paratha with Pickle & Curd (Rs.350)</span>
          <div>Soft flatbread stuffed with spiced paneer, served with pickle and curd.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">American Breakfast Package (Rs.400)</span>
          <div>Toast bread, hash brown potato, cut fruits or juice, sausages, and choice of milk tea, black tea, or green tea, plus egg (boiled, omelette, or pouch).</div>
        </div>
      </div>
    ),
    image: IndianAndAmericanBreakfast,
  },
  {
    title: "Hotel Ashraya Wine",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">J.P Chienet Red or White</span>
          <div>Rs.2450</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Robertson Red or White</span>
          <div>Rs.2050</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Bigmaster Red or White</span>
          <div>Rs.975</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Hinwa Red or White</span>
          <div>Rs.975</div>
        </div>
      </div>
    ),
    image: HotelAshrayaWine,
  },
  {
    title: "Hotel Ashraya Vodka",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-4">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Absolute Vodka 1000 ml</span>
          <div>Rs.555 (60 ml), Rs.1620 (180 ml), Rs.3150 (360 ml), Rs.8500 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">8848 Vodka 750 ml</span>
          <div>Rs.235 (60 ml), Rs.675 (180 ml), Rs.1300 (360 ml), Rs.2600 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Ruslan Premium Vodka 750 ml</span>
          <div>Rs.225 (60 ml), Rs.660 (180 ml), Rs.1285 (360 ml), Rs.2570 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Nude Vodka 750 ml</span>
          <div>Rs.225 (60 ml), Rs.655 (180 ml), Rs.1275 (360 ml), Rs.2550 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Seto Badh 750 ml</span>
          <div>Rs.220 (60 ml), Rs.645 (180 ml), Rs.1225 (360 ml), Rs.2450 (Full Bottle)</div>
        </div>
      </div>
    ),
    image: HotelAshrayaVodka,
  },
  {
    title: "Hukka & Cigarette",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-3">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Iced Cloud Hukka (Rs.700)</span>
          <div>Mint, Thousand 1, Double Apple flavors.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Cloud Hukka (Rs.600)</span>
          <div>Mint, Thousand 1, Double Apple flavors.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Normal Hukka (Rs.350)</span>
          <div>Mint, Thousand 1, Double Apple flavors.</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Surya Gold (Rs.35)</span>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Shikhar Ice (Rs.25)</span>
        </div>
      </div>
    ),
    image: HukkaAndCigrettee,
  },
  {
    title: "Hotel Ashraya Whiskey",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-3">
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Gold Level 1000 ml</span>
          <div>Rs.1050 (60 ml), Rs.3100 (180 ml), Rs.6100 (360 ml), Rs.16500 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Double Black 1000 ml</span>
          <div>Rs.805 (60 ml), Rs.2400 (180 ml), Rs.4750 (360 ml), Rs.13400 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Black Level 1000 ml</span>
          <div>Rs.750 (60 ml), Rs.2150 (180 ml), Rs.4250 (360 ml), Rs.11500 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Chivas 1000 ml</span>
          <div>Rs.750 (60 ml), Rs.2150 (180 ml), Rs.4250 (360 ml), Rs.11500 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">J.D Regular/Honey 1000 ml</span>
          <div>Rs.700 (60 ml), Rs.2000 (180 ml), Rs.3900 (360 ml), Rs.10500 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Jameson 1000 ml</span>
          <div>Rs.635 (60 ml), Rs.1850 (180 ml), Rs.3600 (360 ml), Rs.9700 (Full Bottle)</div>
        </div>
        <div>
          <span className="text-lg font-semibold underline underline-offset-4">Red Level 1000 ml</span>
          <div>Rs.600 (60 ml), Rs.1700 (180 ml), Rs.3300 (360 ml), Rs.9000 (Full Bottle)</div>
        </div>
        <div>And So On..</div>
      </div>
    ),
    image: HotelAshrayaWhiskeyPrice,
  },
  {
    title: "Beer",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-2">
        <div><span className="font-semibold underline underline-offset-4">Carlsberg (650 ml):</span> Rs.575</div>
        <div><span className="font-semibold underline underline-offset-4">Tuborg Gold (650 ml):</span> Rs.525</div>
        <div><span className="font-semibold underline underline-offset-4">Tuborg Strong (650 ml):</span> Rs.485</div>
        <div><span className="font-semibold underline underline-offset-4">Tuborg Gold Can (500 ml):</span> Rs.400</div>
        <div><span className="font-semibold underline underline-offset-4">Gorkha Premium (650 ml):</span> Rs.500</div>
        <div><span className="font-semibold underline underline-offset-4">Gorkha Strong (650 ml):</span> Rs.415</div>
        <div><span className="font-semibold underline underline-offset-4">Gorkha Extra (330 ml):</span> Rs.215</div>
        <div><span className="font-semibold underline underline-offset-4">Dragon Strong (650 ml):</span> Rs.345</div>
        <div><span className="font-semibold underline underline-offset-4">Dragon Extra (330 ml):</span> Rs.195</div>
        <div><span className="font-semibold underline underline-offset-4">Barasinghe Premium (650 ml):</span> Rs.500</div>
        <div><span className="font-semibold underline underline-offset-4">Apple Cider:</span> Rs.245</div>
      </div>
    ),
    image: BeerPrice,
  },
  {
    title: "Local Chicken & Soft Drinks",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-2">
        <div>
          <span className="font-semibold underline underline-offset-4">Local Whole Chicken:</span> Katnesi, Sekuwa & Curry - Rs.3500;{" "}
          <span className="font-semibold underline underline-offset-4">Badhiya Whole Chicken:</span> Katnesi, Sadheko & Curry - Rs.5500
        </div>
        <div>
          <span className="font-semibold underline underline-offset-4">Soft Drinks:</span> Coke, Fanta, Sprite, Mountain Dew (250 ml) Rs.65; Slice (250 ml) Rs.80; Real Juice (1 Ltr) Rs.395; Real Juice (P.G.) Rs.125;
        </div>
        <div>
          Redbull Blue Rs.250; Badam Juice Rs.105; Fresh Lemon Soda Rs.65; Seasonal Fresh Juice Rs.195; Seasonal Fresh Mix Juice Rs.295
        </div>
        <div>
          <span className="font-semibold underline underline-offset-4">Lassi & Milk Shake:</span> Plain Lassi Rs.100; Sweet Lassi Rs.125; Banana Lassi Rs.150; Milk Shake Rs.150
        </div>
      </div>
    ),
    image: LocalChickenAndSoftDrinks,
  },
  {
    title: "Mutton, Buff & Pork Snacks",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-2">
        <div>
          <span className="font-semibold underline underline-offset-4">Mutton Snacks:</span> Katnesi Rs.500; Taas Rs.550; Sekuwa Rs.600; Sadheko Rs.500
        </div>
        <div>
          <span className="font-semibold underline underline-offset-4">Buff Snacks:</span> Sukuti Rs.300; Sukuti Sadheko Rs.400
        </div>
        <div>
          <span className="font-semibold underline underline-offset-4">Pork Snacks:</span> Sekuwa Rs.375; Fry Rs.350; Sadheko Rs.350
        </div>
      </div>
    ),
    image: MuttonBuffPork,
  },
  {
    title: "Salad & Chicken Snacks",
    description: (
      <div className="text-gray-800 text-[16px] leading-relaxed space-y-2">
        <div>
          <span className="font-semibold underline underline-offset-4">Salads:</span> Garden Green Rs.125; Nepali Green Rs.150; Fruit Rs.300; Russian Rs.350
        </div>
        <div>
          <span className="font-semibold underline underline-offset-4">Chicken Snacks:</span> Sekuwa Rs.450; Sadheko Rs.400; Chau-Chau Sadheko Rs.450; Fry Rs.375; Choila Rs.400;
        </div>
        <div>
          Chilly with Bone Rs.375; Chilly Boneless Rs.400; Sausage Fry Rs.300; Garlic Nuggets Rs.400; Pangra Fry Rs.350; Duck Choila Rs.450
        </div>
      </div>
    ),
    image: SaladAndChickenSnacks,
  },
];

const MenusPage = () => {
  return (
    <>
      <HeroSection
        title="Our Menus"
        subtitle="Discover the best food behind Hotel Aashrya"
        image={heroimage}
        height="h-[70vh]"
      />
          <QrMenuSection/>

      <div className="container mx-auto px-4 py-8">
        {menuItems.map((item, index) => (
          <MenuSection
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default MenusPage;