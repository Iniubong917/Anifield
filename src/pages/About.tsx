import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

import { Search } from "lucide-react";

export const About = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const aboutContent = [
    "International confections from around the world",
    "Swiss chocolate manufacturing techniques",
    "Belgian truffle crafting traditions",
    "French macaron artistry",
    "Italian gelato making process",
    "German gummy bear production",
    "Japanese Kit Kat flavors",
    "American candy innovations",
    "British toffee heritage",
    "Austrian Mozart balls history",
    "Akwa Ibom delivery services",
    "Aniefiok Edemikoh founder story",
    "Nigerian confectionary market",
    "International import processes",
    "Quality control standards"
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = aboutContent.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Search Bar */}
      <section className="mb-12">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search about Anifield..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
            />
          </div>
          {searchResults.length > 0 && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg border border-blue-700 p-4">
              <h3 className="text-coral-400 font-semibold mb-2">Search Results:</h3>
              <ul className="space-y-1">
                {searchResults.map((result, index) => (
                  <li key={index} className="text-blue-200 text-sm">• {result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          International Flavors, Nigerian Heart
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
          Anifield started in 2020 with a simple mission: to bring the world's finest confections 
          to Akwa Ibom and every Nigerian home, celebrating international flavors with local passion.
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
              From our headquarters in Akwa Ibom, we import and distribute the world's finest confections 
              including Swiss chocolates, Belgian truffles, French macarons, and Italian gelato. Every product 
              tells a story of international craftsmanship brought to Nigerian homes.
            </p>
            <p>
              We partner with renowned confectioners across Europe, Asia, and the Americas to bring authentic 
              international flavors to Nigeria. Our cold-chain logistics ensure every product arrives fresh 
              and maintains its original quality from factory to your doorstep.
            </p>
            <p>
              Today, we're proud to serve customers across all 36 states and the FCT, bringing international 
              confectionary excellence to Nigerians everywhere, whether they're in Akwa Ibom, Lagos, Abuja, or anywhere in between.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="International chocolates and sweets"
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
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🇳🇬</span>
            </div>
            <h3 className="font-semibold text-white mb-4 text-xl">Nigerian Owned</h3>
            <p className="text-blue-200">
              Proudly Nigerian-owned business based in Akwa Ibom, supporting local employment 
              and bringing international quality to Nigerian communities.
            </p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-700">
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚚</span>
            </div>
            <h3 className="font-semibold text-white mb-4 text-xl">Nationwide Delivery</h3>
            <p className="text-blue-200">
              From Akwa Ibom to Maiduguri, we deliver to all 36 states and FCT. 
              Same-day delivery available in Uyo and major cities.
            </p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-700">
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💚</span>
            </div>
            <h3 className="font-semibold text-white mb-4 text-xl">International Quality</h3>
            <p className="text-blue-200">
              Imported fresh with temperature-controlled logistics. Authentic international 
              flavors and world-class craftsmanship in every bite.
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
            <div className="w-32 h-32 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">A</span>
            </div>
            <h3 className="font-semibold text-white mb-2 text-xl">Aniefiok Edemikoh</h3>
            <p className="text-green-400 mb-2">Founder & CEO</p>
            <p className="text-blue-200 text-sm">
              An Akwa Ibom native with a passion for preserving Nigerian culinary traditions 
              while embracing modern confectionary techniques.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">E</span>
            </div>
            <h3 className="font-semibold text-white mb-2 text-xl">Emeka Nwankwo</h3>
            <p className="text-coral-400 mb-2">Import Manager</p>
            <p className="text-blue-200 text-sm">
              International trade specialist with 15 years of experience in importing 
              premium confections and maintaining cold-chain logistics.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">F</span>
            </div>
            <h3 className="font-semibold text-white mb-2 text-xl">Fatima Aliyu</h3>
            <p className="text-coral-400 mb-2">Operations Manager</p>
            <p className="text-blue-200 text-sm">
              Ensures every order reaches customers fresh and on time, 
              managing our temperature-controlled delivery network across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-12 text-white">
      <section className="text-center bg-gradient-to-r from-coral-600 via-coral-700 to-coral-800 rounded-3xl p-12 text-white">
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Ready to Taste the World's Best?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of satisfied customers across Nigeria who trust Anifield for international confections.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/shop">
            <Button className="bg-white text-coral-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Start Shopping
            </Button>
          </Link>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-coral-700 px-8 py-3 text-lg transition-all duration-200">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};