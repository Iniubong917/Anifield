import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";

const products = [
  {
    id: "1",
    name: "Coconut Candy (Agbon)",
    description: "Traditional Nigerian coconut sweets made with fresh coconut and palm sugar",
    price: 2500,
    category: "traditional",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "2",
    name: "Premium Dark Chocolate",
    description: "Rich 70% cocoa chocolate made from Nigerian cocoa beans",
    price: 4800,
    category: "chocolate",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "3",
    name: "Zobo Gummies",
    description: "Hibiscus-flavored chewy treats with natural fruit extracts",
    price: 1800,
    category: "gummies",
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "4",
    name: "Chin Chin Bites",
    description: "Sweet crunchy Nigerian snacks, perfect for any occasion",
    price: 1200,
    category: "traditional",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "5",
    name: "Plantain Chips (Sweet)",
    description: "Caramelized plantain chips with a perfect balance of sweet and crispy",
    price: 900,
    category: "traditional",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "6",
    name: "Kuli Kuli Candy",
    description: "Groundnut-based sweet treats with honey and spices",
    price: 800,
    category: "traditional",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "7",
    name: "Milk Chocolate Bars",
    description: "Creamy milk chocolate made with fresh Nigerian milk",
    price: 3500,
    category: "chocolate",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "8",
    name: "Fruit Gummies Mix",
    description: "Assorted fruit-flavored gummies with tropical Nigerian fruits",
    price: 2200,
    category: "gummies",
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "9",
    name: "Gift Hamper Deluxe",
    description: "Premium selection of our best sweets in a beautiful gift box",
    price: 8500,
    category: "gifts",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "traditional", name: "Traditional Sweets" },
  { id: "chocolate", name: "Chocolates" },
  { id: "gummies", name: "Gummies" },
  { id: "gifts", name: "Gift Hampers" }
];

export const Shop = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { dispatch } = useCart();

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: typeof products[0]) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Sweet Shop
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Discover our complete collection of traditional Nigerian sweets, premium chocolates, 
          and international treats. All made with love and delivered fresh to your door.
        </p>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={selectedCategory === category.id 
                ? "bg-gradient-to-r from-green-500 to-green-700 text-white" 
                : "border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-blue-700">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-blue-200 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-400">₦{product.price.toLocaleString()}</span>
                  <Button 
                    onClick={() => addToCart(product)}
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-blue-200">No products found in this category.</p>
          <Button 
            onClick={() => setSelectedCategory("all")}
            className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white"
          >
            View All Products
          </Button>
        </div>
      )}

      {/* Delivery Info */}
      <section className="mt-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Free Delivery Across Nigeria! 🚚
        </h2>
        <p className="text-lg mb-4 opacity-90">
          Free delivery for orders above ₦5,000 • Same-day delivery in Lagos & Abuja
        </p>
        <div className="flex justify-center items-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>All 36 States Coverage</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Fresh Guarantee</span>
          </div>
        </div>
      </section>
    </div>
  );
};