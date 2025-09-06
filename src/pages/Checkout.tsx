import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export const Checkout = (): JSX.Element => {
  const navigate = useNavigate();
  const { state: cartState, dispatch } = useCart();
  const { state: authState } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: authState.user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "Akwa Ibom",
    zipCode: "",
    paymentMethod: "card"
  });

  const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
    "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const deliveryFee = cartState.total >= 5000 ? 0 : 1500;
  const totalWithDelivery = cartState.total + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setOrderComplete(true);
    dispatch({ type: "CLEAR_CART" });
  };

  if (cartState.items.length === 0 && !orderComplete) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Your Cart is Empty
        </h1>
        <p className="text-blue-200 mb-8">Add some delicious treats to your cart before checking out.</p>
        <Button 
          onClick={() => navigate("/shop")}
          className="bg-gradient-to-r from-coral-500 to-coral-700 hover:from-coral-600 hover:to-coral-800 text-white"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-blue-700">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Order Confirmed!
          </h1>
          <p className="text-blue-200 mb-8">
            Thank you for your order! We'll send you a confirmation email shortly.
            Your international confections will be delivered fresh to your doorstep.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-coral-500 to-coral-700 hover:from-coral-600 hover:to-coral-800 text-white mr-4"
            >
              Continue Shopping
            </Button>
            <Button 
              variant="outline"
              className="border-coral-400 text-coral-400 hover:bg-coral-400 hover:text-blue-900"
            >
              Track Order
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-white text-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Order Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Delivery Information</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+234"
                className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  {nigerianStates.map(state => (
                    <option key={state} value={state} className="bg-blue-900 text-white">
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-4">Payment Method</label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <span className="text-white">Credit/Debit Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === "transfer"}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <span className="text-white">Bank Transfer</span>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-coral-500 to-coral-700 hover:from-coral-600 hover:to-coral-800 text-white py-4 text-lg font-semibold disabled:opacity-50"
            >
              {isProcessing ? "Processing Order..." : `Pay ₦${totalWithDelivery.toLocaleString()}`}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            {cartState.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-white">{item.name}</h3>
                  <p className="text-blue-200 text-sm">Quantity: {item.quantity}</p>
                </div>
                <p className="text-coral-400 font-semibold">₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-blue-700 pt-6 space-y-3">
            <div className="flex justify-between text-blue-200">
              <span>Subtotal:</span>
              <span>₦{cartState.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>Delivery Fee:</span>
              <span>{deliveryFee === 0 ? 'Free' : `₦${deliveryFee.toLocaleString()}`}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-coral-400 border-t border-blue-700 pt-3">
              <span>Total:</span>
              <span>₦{totalWithDelivery.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-coral-500/20 rounded-lg border border-coral-500">
            <p className="text-coral-200 text-sm">
              🚚 {deliveryFee === 0 ? 'Free delivery included!' : 'Add ₦' + (5000 - cartState.total).toLocaleString() + ' more for free delivery'}
            </p>
            <p className="text-coral-200 text-sm mt-1">
              📍 Delivering to {formData.state || 'your location'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};