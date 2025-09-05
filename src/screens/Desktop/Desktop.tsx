import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Local Sweets", href: "#local-sweets" },
  { label: "Chocolates", href: "#chocolates" },
  { label: "Gummies", href: "#gummies" },
  { label: "Gift Hampers", href: "#gifts" },
  { label: "Bulk Orders", href: "#bulk" },
];

const featuredProducts = [
  {
    name: "Coconut Candy (Agbon)",
    description: "Traditional Nigerian coconut sweets",
    price: "₦2,500",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Premium Dark Chocolate",
    description: "Rich cocoa from Nigerian farms",
    price: "₦4,800",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Zobo Gummies",
    description: "Hibiscus-flavored chewy treats",
    price: "₦1,800",
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Chin Chin Bites",
    description: "Sweet crunchy Nigerian snacks",
    price: "₦1,200",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Plantain Chips (Sweet)",
    description: "Caramelized plantain chips",
    price: "₦900",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Kuli Kuli Candy",
    description: "Groundnut-based sweet treats",
    price: "₦800",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const testimonials = [
  {
    name: "Adunni Okafor",
    location: "Lagos",
    text: "Best local sweets in Nigeria! Reminds me of my childhood.",
    rating: 5
  },
  {
    name: "Emeka Nwankwo",
    location: "Abuja",
    text: "Fast delivery to FCT. Quality is always top-notch!",
    rating: 5
  },
  {
    name: "Fatima Aliyu",
    location: "Kano",
    text: "Love the traditional flavors mixed with modern packaging.",
    rating: 5
  }
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen w-full">
      <header className="w-full bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-green-100">
        <nav className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Anifield
              </div>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">🇳🇬 Nigeria-wide delivery</span>
            <Button
              variant="outline"
              className="bg-gradient-to-r from-green-600 to-green-800 text-white border-0 hover:from-green-700 hover:to-green-900 transition-all duration-200 h-auto px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Order Now
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              🇳🇬 Proudly Nigerian • Est. 2020
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Nigeria's Sweet Paradise
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From traditional Agbon and Chin Chin to premium chocolates and international treats. 
            We deliver authentic Nigerian flavors and world-class confections across all 36 states.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Shop Local Sweets
            </Button>
            <Button variant="outline" className="border-2 border-green-300 text-green-700 hover:bg-green-50 px-8 py-3 text-lg transition-all duration-200">
              View Catalog
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Free delivery in Lagos & Abuja</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Same-day delivery available</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Pay with card or transfer</span>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Signature Treats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A perfect blend of traditional Nigerian sweets and international favorites, 
            crafted with love and delivered fresh to your doorstep.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-green-100">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <Button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Naija Sweet Deal! 🍭
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get 25% off your first order when you spend ₦5,000 or more
            </p>
            <p className="text-sm mb-6 opacity-80">
              Valid for deliveries to Lagos, Abuja, Port Harcourt, Kano, and Ibadan
            </p>
            <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Claim Your Discount
            </Button>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Made in Nigeria, Loved Everywhere
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Anifield started in 2020 with a simple mission: to celebrate Nigeria's rich confectionary heritage 
              while bringing world-class sweets to every Nigerian home. From our kitchen in Lagos, we craft traditional 
              treats like Agbon, Chin Chin, and Kuli Kuli candy alongside premium chocolates and international favorites.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇳🇬</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">100% Nigerian</h3>
                <p className="text-gray-600 text-sm">Proudly supporting local farmers and traditional recipes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Nationwide Delivery</h3>
                <p className="text-gray-600 text-sm">From Lagos to Maiduguri, we deliver to all 36 states</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fresh & Quality</h3>
                <p className="text-gray-600 text-sm">Made fresh daily with premium ingredients</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Anifield
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Nigeria's premier confectionary brand, bringing you the best of local and international sweets since 2020.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 Head Office: Victoria Island, Lagos</p>
                <p>📞 WhatsApp: +234 901 234 5678</p>
                <p>✉️ hello@anifield.ng</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Local Sweets</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Chocolates</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Gummies</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Gift Hampers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Bulk Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Delivery Zones</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Lagos State</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">FCT Abuja</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Rivers State</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Kano State</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">All 36 States</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Anifield Nigeria. All rights reserved. Made with 💚 in Lagos, Nigeria.</p>
            <p className="mt-2 text-sm">Proudly Nigerian • Supporting Local Communities • Premium Quality</p>
          </div>
        </div>
      </footer>
    </div>
  );
};