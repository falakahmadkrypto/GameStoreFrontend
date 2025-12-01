import { ArrowRight } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  image?: string;
  variant?: 'primary' | 'secondary';
}

const Banner = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  image,
  variant = 'primary'
}: BannerProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className={`relative rounded-2xl overflow-hidden p-8 md:p-12 ${
      isPrimary 
        ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white' 
        : 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
    } group hover:shadow-2xl transition-shadow duration-300`}>
      {image && (
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="relative z-10">
        {subtitle && (
          <p className="text-sm md:text-base mb-3 font-semibold opacity-90">{subtitle}</p>
        )}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-lg md:text-xl mb-6 font-semibold opacity-95">
            {description}
          </p>
        )}
        <button className={`${
          isPrimary 
            ? 'bg-white text-blue-600 hover:bg-gray-50' 
            : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
        } px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 group/btn`}>
          <span>{buttonText}</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Banner;



