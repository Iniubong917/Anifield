import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { Cart } from "./Cart";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();
  const { state: cartState } = useCart();
  const { state: authState, logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen w-full text-white">
      <header className="w-full bg-blue-900/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-700">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Anifield
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-green-400 ${
                    isActive(item.href) ? 'text-green-400 border-b-2 border-green-400 pb-1' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-green-400 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              )}
            </button>

            {/* Auth Buttons */}
            {authState.isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-400">Hello, {authState.user?.name}</span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-green-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-200 hover:text-green-400 ${
                    isActive(item.href) ? 'text-green-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-blue-950 text-white py-12 mt-20 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Anifield
                </h3>
              </div>
              <p className="text-blue-300 text-sm">
                Nigeria's premier confectionary brand, bringing you the best of local and international sweets.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Products</h4>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li>Local Sweets</li>
                <li>Chocolates</li>
                <li>Gummies</li>
                <li>Gift Hampers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Delivery</h4>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li>Lagos State</li>
                <li>FCT Abuja</li>
                <li>All 36 States</li>
                <li>Same-day delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Contact</h4>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li>📍 Lagos, Nigeria</li>
                <li>📞 +234 901 234 5678</li>
                <li>✉️ hello@anifield.ng</li>
                <li>💬 WhatsApp Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>&copy; 2025 Anifield Nigeria. Made with 💚 in Lagos.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};