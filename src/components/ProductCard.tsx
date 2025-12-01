import { ShoppingCart, Star, Key, User, Calendar } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  discount?: number;
  image: string;
  platform?: string;
  type?: 'key' | 'account' | 'subscription';
  rating?: number;
}

const ProductCard = ({ title, price, discount, image, platform, type, rating = 4.5 }: ProductCardProps) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 card-hover">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400&h=300&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
            -{discount}%
          </div>
        )}
        
        {platform && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
            {platform}
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-3 line-clamp-2 min-h-[2.5rem] text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div>
            {discount && (
              <span className="text-gray-400 line-through text-sm mr-2">${price.toFixed(2)}</span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-blue-600 font-bold text-xl">${discountedPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg group/btn">
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
        
        {type && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              {type === 'key' && (
                <span className="flex items-center gap-1">
                  <Key className="w-3 h-3" />
                  CD Key
                </span>
              )}
              {type === 'account' && (
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Account
                </span>
              )}
              {type === 'subscription' && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Subscription
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
