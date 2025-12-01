import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">GameStore</span>
              <p className="text-xs text-gray-500">Premium Gaming</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search games, software, and more..."
                className="w-full px-4 py-2.5 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors group relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium text-gray-700">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-50 transition-colors group">
              <User className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mt-4 pb-2">
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Popular & Coming Soon
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            In-Game Currencies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Digital Tools
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Software
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-gray-50 rounded-lg p-4">
            <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Products</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Popular & Coming Soon</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">In-Game Currencies</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Digital Tools</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Software</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



