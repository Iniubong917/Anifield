import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Chocolates", href: "#chocolates" },
  { label: "Gummies", href: "#gummies" },
  { label: "Hard Candies", href: "#hard-candies" },
  { label: "Gift Boxes", href: "#gifts" },
];

const featuredProducts = [
  {
    name: "Artisan Dark Chocolate",
    description: "Rich 70% cocoa with sea salt",
    price: "$24.99",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Rainbow Gummy Bears",
    description: "Fruity and chewy perfection",
    price: "$12.99",
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Vintage Hard Candies",
    description: "Classic flavors in beautiful jars",
    price: "$18.99",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 min-h-screen w-full">
      <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Sweet Delights
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-gray-700 hover:text-pink-600 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 hover:from-pink-600 hover:to-purple-700 transition-all duration-200 h-auto px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Order Now
          </Button>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Indulge in Sweet Perfection
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our handcrafted collection of premium chocolates, gummies, and confections made with the finest ingredients and lots of love.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg transition-all duration-200">
              Learn More
            </Button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Featured Treats
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
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
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
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
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Sweet Deal Alert! 🍭
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get 20% off your first order when you spend $50 or more
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Claim Offer
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Crafted with Love Since 1985
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Sweet Delights, we believe every moment deserves a touch of sweetness. Our master confectioners use traditional techniques combined with innovative flavors to create unforgettable treats that bring joy to every bite. From our family to yours, we're committed to delivering the highest quality confections that make life a little sweeter.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Sweet Delights
              </h3>
              <p className="text-gray-400">
                Premium confections made with love and the finest ingredients.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Chocolates</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Gummies</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Hard Candies</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Gift Boxes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sweet Delights. All rights reserved. Made with 💖 and lots of sugar.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};