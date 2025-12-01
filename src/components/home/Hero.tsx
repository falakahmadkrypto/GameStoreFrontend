import { ArrowRight, Play, TrendingUp, Star } from 'lucide-react';
import heroSvg from '../../assets/herosvg.svg';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <TrendingUp className="w-4 h-4" />
              <span>New Releases Every Week</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Your Ultimate
              <span className="block text-gradient">Gaming Marketplace</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover premium games, exclusive deals, and digital products from trusted sellers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 group">
                Explore Games
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">500K+</div>
                <div className="text-gray-600 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">10K+</div>
                <div className="text-gray-600 text-sm">Games Available</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-gradient">4.8</span>
                  <Star className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero SVG */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-lg hero-svg-wrapper">
              <img 
                src={heroSvg} 
                alt="Gaming Hero" 
                className="w-full h-auto object-contain animate-float"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
