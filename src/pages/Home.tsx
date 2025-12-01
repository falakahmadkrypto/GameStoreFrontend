import Hero from '../components/home/Hero';
import Banner from '../components/home/Banner';
import ProductCard from '../components/products/ProductCard';
import { products, bestsellerProducts } from '../data/products';
import { categories } from '../constants/categories';
import { platforms } from '../constants/platforms';
import { 
  TrendingUp, 
  Trophy, 
  Zap, 
  Gamepad2, 
  ArrowRight,
  Coins,
  Gift,
  Sword,
  Shield,
} from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recommended for You</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Banner
              title="Windows 11 Pro"
              subtitle="Upgrade Now"
              description="More Speed. More Security."
              buttonText="Get Deal"
              variant="primary"
            />
            <div className="md:col-span-2">
              <Banner
                title="Call of Duty: Black Ops 7"
                subtitle="New Release"
                description="UP TO 32% OFF"
                buttonText="Buy Now"
                variant="secondary"
                image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop"
              />
            </div>
          </div>

          {/* Platform Showcase */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Platforms</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {platforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <div 
                    key={platform.name} 
                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors cursor-pointer group border border-gray-100 hover:border-blue-200"
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                    <div className="text-xs font-semibold text-gray-700 group-hover:text-blue-600">{platform.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mega Deal Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-8 h-8" />
                <h3 className="text-3xl md:text-4xl font-bold">MEGA DEAL! UP TO 90% OFF</h3>
                <Zap className="w-8 h-8" />
              </div>
              <p className="text-xl mb-8 opacity-90">Hack the savings on top games and software</p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['Windows 11 Pro', 'Xbox Game Pass', 'Adobe Creative', 'Bitdefender'].map((item) => (
                  <div key={item} className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 font-semibold border border-white/30">
                    {item}
                  </div>
                ))}
              </div>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl">
                Explore Deals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bestsellers</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors group">
              View All
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* In-Game Deals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">In-Game Items & Currencies</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                {[
                  { icon: Coins, label: 'Game Coins', desc: 'Virtual Currency' },
                  { icon: Gift, label: 'Items', desc: 'Rare Collectibles' },
                  { icon: Sword, label: 'Weapons', desc: 'Power Upgrades' },
                  { icon: Shield, label: 'Armor', desc: 'Defense Items' },
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors border border-white/20">
                      <IconComponent className="w-12 h-12 mx-auto mb-3 text-white" />
                      <div className="font-bold mb-1">{item.label}</div>
                      <div className="text-sm opacity-75">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6" />
                Browse Items
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
            <button className="pb-2 px-4 border-b-2 border-blue-600 font-bold text-blue-600 text-lg">
              New Releases
            </button>
            <button className="pb-2 px-4 text-gray-600 hover:text-blue-600 font-semibold transition-colors">
              Pre-Orders
            </button>
            <button className="pb-2 px-4 text-gray-600 hover:text-blue-600 font-semibold transition-colors">
              Random Keys
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.slice(4, 10).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mx-auto transition-colors group">
              Show More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
            <button className="pb-2 px-4 border-b-2 border-blue-600 font-bold text-blue-600 text-lg">
              Browse by Genre
            </button>
            <button className="pb-2 px-4 text-gray-600 hover:text-blue-600 font-semibold transition-colors">
              Platforms
            </button>
            <button className="pb-2 px-4 text-gray-600 hover:text-blue-600 font-semibold transition-colors">
              Software
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white text-center cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold">{category.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;



