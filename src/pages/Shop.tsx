import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";
import { products, categories } from "../data/products";

export const Shop = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch } = useCart();

  const itemsPerPage = 24;

  let filteredProducts = products;
  
  // Filter by category
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }
  
  // Filter by search query
  if (searchQuery.trim()) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const addToCart = (product: typeof products[0]) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          International Sweet Shop
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Discover our complete collection of over 1000 international confections from around the world. 
          Premium chocolates, gummies, and treats delivered fresh to Akwa Ibom and beyond.
        </p>
      </section>

      {/* Search Bar */}
      <section className="mb-8">
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={selectedCategory === category.id 
                ? "bg-gradient-to-r from-coral-500 to-coral-700 text-white" 
                : "border-coral-400 text-coral-400 hover:bg-coral-400 hover:text-blue-900"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Results Info */}
      <section className="mb-8 text-center">
        <p className="text-blue-200">
          Showing {paginatedProducts.length} of {filteredProducts.length} products
        </p>
      </section>

      {/* Products Grid */}
      <section>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
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
                <p className="text-coral-300 text-xs mb-2">From {product.origin}</p>
                <p className="text-blue-200 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.stock > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-coral-400">₦{product.price.toLocaleString()}</span>
                  <Button 
                    onClick={() => addToCart(product)}
                    size="sm"
                    disabled={product.stock === 0}
                    className="bg-gradient-to-r from-coral-500 to-coral-700 hover:from-coral-600 hover:to-coral-800 text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="border-coral-400 text-coral-400 hover:bg-coral-400 hover:text-blue-900 disabled:opacity-50"
            >
              Previous
            </Button>
            <span className="flex items-center px-4 text-white">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              className="border-coral-400 text-coral-400 hover:bg-coral-400 hover:text-blue-900 disabled:opacity-50"
            >
              Next
            </Button>
          </div>
        </section>
      )}

      {/* Empty State */}
      {paginatedProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-blue-200">No products found in this category.</p>
          <Button 
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setCurrentPage(1);
            }}
            className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white"
            className="mt-4 bg-gradient-to-r from-coral-500 to-coral-700 text-white"
          >
            View All Products
          </Button>
        </div>
      )}

      {/* Delivery Info */}
      <section className="mt-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-8 text-center text-white">
      <section className="mt-16 bg-gradient-to-r from-coral-600 via-coral-700 to-coral-800 rounded-3xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Free Delivery Across Nigeria! 🚚
        </h2>
        <p className="text-lg mb-4 opacity-90">
          Free delivery for orders above ₦5,000 • Same-day delivery in Akwa Ibom & Abuja
        </p>
        <div className="flex justify-center items-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>All 36 States Coverage</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Temperature Controlled</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>International Quality</span>
          </div>
        </div>
      </section>
    </div>
  );
};