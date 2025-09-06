import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export const About = (): JSX.Element => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Made in Nigeria, Loved Everywhere
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
          Anifield started in 2020 with a simple mission: to celebrate Nigeria's rich confectionary heritage 
          while bringing world-class sweets to every Nigerian home.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Sweet Story
          </h2>
          <div className="space-y-4 text-blue-200">
            <p>
              From our kitchen in Lagos, we craft traditional treats like Agbon, Chin Chin, and Kuli Kuli candy 
              alongside premium chocolates and international favorites. Every product tells a story of Nigerian 
              heritage mixed with modern innovation.
            </p>
            <p>
              We source our cocoa directly from Nigerian farms, supporting local communities while ensuring 
              the highest quality ingredients. Our traditional recipes have been passed down through generations, 
              refined and perfected to create the authentic flavors you remember from childhood.
            </p>
            <p>
              Today, we're proud to serve customers across all 36 states and the FCT, bringing the taste of 
              home to Nigerians everywhere, whether they're in Lagos, Abuja, or anywhere in between.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Nigerian cocoa and sweets"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-700">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🇳🇬</span>
            </div>
            <h3 className="font-semibold text-white mb-4 text-xl">100% Nigerian</h3>
            <p className="text-blue-200">
              Proudly supporting local farmers, traditional recipes, and Nigerian communities. 
              Every purchase helps grow our local economy.
            </p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-700">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚚</span>
            </div>
            <h3 className="font-semibold text-white mb-4 text-xl">Nationwide Delivery</h3>
            <p className="text-blue-200">
              From Lagos to Maiduguri, we deliver to all 36 states and FCT. 
              Same-day delivery available in major cities.
            </p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-700">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💚</span>
            </div>
            <h3 className="font-semibold text-white mb-4 text-xl">Fresh & Quality</h3>
            <p className="text-blue-200">
              Made fresh daily with premium ingredients. No preservatives, 
              just authentic flavors and traditional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">A</span>
            </div>
            <h3 className="font-semibold text-white mb-2 text-xl">Adunni Okafor</h3>
            <p className="text-green-400 mb-2">Founder & CEO</p>
            <p className="text-blue-200 text-sm">
              A Lagos native with a passion for preserving Nigerian culinary traditions 
              while embracing modern confectionary techniques.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">E</span>
            </div>
            <h3 className="font-semibold text-white mb-2 text-xl">Emeka Nwankwo</h3>
            <p className="text-green-400 mb-2">Head Chef</p>
            <p className="text-blue-200 text-sm">
              Master confectioner with 15 years of experience, specializing in 
              traditional Nigerian sweets and modern chocolate crafting.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">F</span>
            </div>
            <h3 className="font-semibold text-white mb-2 text-xl">Fatima Aliyu</h3>
            <p className="text-green-400 mb-2">Operations Manager</p>
            <p className="text-blue-200 text-sm">
              Ensures every order reaches customers fresh and on time, 
              managing our nationwide delivery network across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-12 text-white">
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Ready to Taste Nigeria's Best?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of satisfied customers across Nigeria who trust Anifield for their sweet cravings.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/shop">
            <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Start Shopping
            </Button>
          </Link>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 text-lg transition-all duration-200">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};