import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Sparkles, Flame, Star, Zap, Gamepad2 } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'All Games', icon: Sparkles, highlight: false, path: '/products', exact: true },
    { name: 'Trending', icon: Flame, highlight: true, path: '/products?filter=trending', exact: false },
    { name: 'New Releases', icon: Star, highlight: false, path: '/products?filter=new', exact: false },
    { name: 'Exclusives', icon: Zap, highlight: false, path: '/products?filter=exclusive', exact: false },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActiveNavItem = (item: typeof navItems[0]) => {
    if (item.exact) {
      return location.pathname === '/products' && !location.search;
    }
    return location.pathname + location.search === item.path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'pt-2 pb-2' 
            : 'pt-0 pb-3'
        }`}
      >
        {/* Backdrop Blur Container */}
        <div className={`transition-all duration-500 relative ${isScrolled ? 'container mx-auto px-4' : 'px-0'}`}>
          <div 
            className={`relative backdrop-blur-xl border transition-all duration-500 ${
              isScrolled
                ? 'bg-white/95 border-gray-200/50 shadow-xl rounded-2xl'
                : 'bg-white/90 border-gray-200/30 rounded-none border-t-0'
            }`}
            style={{ 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            {/* Subtle Gradient Accent */}
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-blue-50/50 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
              isScrolled ? 'rounded-2xl' : 'rounded-none'
            }`} />

            <div className="relative px-6 py-3">
              <div className={`flex items-center gap-8 transition-all duration-500 ${
                isScrolled ? 'justify-between' : 'container mx-auto justify-between'
              }`}>
                {/* Logo - Refined */}
                <Link to="/" className="flex items-center space-x-3 group cursor-pointer relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border border-blue-500/30">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      GameVerse
                    </span>
                    <p className="text-xs text-gray-500 font-medium">Ultimate Gaming Hub</p>
                  </div>
                </Link>

                {/* Navigation Menu - Desktop */}
                <nav className="hidden lg:flex items-center gap-1">
                  {navItems.map((item, index) => {
                    const isActive = isActiveNavItem(item);
                    return (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                        onMouseEnter={() => setActiveMenu(index as any)}
                        onMouseLeave={() => setActiveMenu(null)}
                        className={`group relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                          activeMenu === index || isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className={`w-4 h-4 transition-all ${
                            activeMenu === index || isActive ? 'scale-110 text-blue-600' : ''
                          } ${item.highlight ? 'text-orange-500' : ''}`} />
                          {item.name}
                          {item.highlight && (
                            <span className="ml-1 px-1.5 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded">
                              HOT
                            </span>
                          )}
                        </span>
                        
                        {/* Minimal Underline */}
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                          activeMenu === index || isActive ? 'w-3/4' : 'w-0'
                        }`} />
                      </button>
                    );
                  })}
                </nav>

                {/* Search Bar - Refined */}
                <div className="hidden md:flex flex-1 max-w-md">
                  <div className="relative w-full group">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search games..."
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        className={`w-full px-5 py-2.5 pl-11 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                          searchFocused 
                            ? 'bg-white border-blue-500 shadow-lg ring-2 ring-blue-500/20' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      />
                      <Search className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors ${
                        searchFocused ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-3">
                  {/* Cart Button */}
                  <button className="hidden md:flex relative group items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                    <div className="relative">
                      <ShoppingCart className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                          {cartCount}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      Cart
                    </span>
                  </button>

                  {/* User Profile Button */}
                  <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 group">
                    <User className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </button>

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                  >
                    {isMenuOpen ? (
                      <X className="w-5 h-5 text-gray-700" />
                    ) : (
                      <Menu className="w-5 h-5 text-gray-700" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden container mx-auto px-4 transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-[600px] mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="backdrop-blur-xl bg-white/95 border border-gray-200 rounded-2xl p-5 shadow-xl">
            {/* Mobile Search */}
            <div className="mb-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full px-5 py-3 pl-11 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Mobile Nav Items */}
            <nav className="space-y-2 mb-5">
              {navItems.map((item, index) => {
                const isActive = isActiveNavItem(item);
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 group ${
                      isActive
                        ? 'bg-blue-50 border-blue-300 text-blue-600'
                        : 'bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-300 text-gray-700 group-hover:text-blue-600'
                    }`}
                  >
                    <span className="flex items-center gap-3 font-medium">
                      <item.icon className={`w-4 h-4 ${item.highlight ? 'text-orange-500' : ''}`} />
                      {item.name}
                    </span>
                    {item.highlight && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded">
                        HOT
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all">
                <ShoppingCart className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Cart ({cartCount})</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border border-transparent transition-all">
                <User className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-20 md:h-24' : 'h-12 md:h-16'}`} />
    </>
  );
};

export default Header;