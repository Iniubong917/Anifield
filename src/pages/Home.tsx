import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";

const featuredProducts = [
  {
    id: "1",
    name: "Coconut Candy (Agbon)",
    description: "Traditional Nigerian coconut sweets",
    price: 2500,
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "2",
    name: "Premium Dark Chocolate",
    description: "Rich cocoa from Nigerian farms",
    price: 4800,
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "3",
    name: "Zobo Gummies",
    description: "Hibiscus-flavored chewy treats",
    price: 1800,
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const Home = (): JSX.Element => {
  const { dispatch } = useCart();

  const addToCart = (product: typeof featuredProducts[0]) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-800/50 text-green-400 rounded-full text-sm font-medium mb-4 border border-blue-700">
            🇳🇬 Proudly Nigerian • Est. 2020
          </span>
        </div>
        <h1 className="text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Nigeria's Sweet Paradise
        </h1>
        <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          From traditional Agbon and Chin Chin to premium chocolates and international treats. 
          We deliver authentic Nigerian flavors and world-class confections across all 36 states.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/shop">
            <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Shop Local Sweets
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900 px-8 py-3 text-lg transition-all duration-200">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-blue-300">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Free delivery in Lagos & Abuja</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Same-day delivery available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Pay with card or transfer</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Our Signature Treats
        </h2>
        <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
          A perfect blend of traditional Nigerian sweets and international favorites, 
          crafted with love and delivered fresh to your doorstep.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-blue-700">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-blue-200 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-400">₦{product.price.toLocaleString()}</span>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/shop">
            <Button variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900 px-6 py-3">
              View All Products
            </Button>
          </Link>
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
          <Link to="/shop">
            <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Claim Your Discount
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};