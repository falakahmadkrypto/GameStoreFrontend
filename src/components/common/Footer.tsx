import { Facebook, Twitter, Instagram, Youtube, Mail, Shield, Award, Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Trust Badge */}
        <div className="text-center mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-gray-900 font-bold text-2xl ml-2">4.6</span>
          </div>
          <p className="text-gray-600 text-sm">Based on 302,787 reviews</p>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Verified Products</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Headphones className="w-5 h-5 text-indigo-600" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <h3 className="text-gray-900 font-bold text-xl mb-2 text-center">Subscribe to our Newsletter</h3>
          <p className="text-gray-600 text-center mb-6 text-sm">Get exclusive deals and gaming updates</p>
          <div className="flex max-w-md mx-auto gap-2">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-gray-900 font-bold mb-4">GameStore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Partnership</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Become a Partner</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">API Access</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Refund Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </a>
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400" />
              </a>
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600" />
              </a>
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm mb-4 text-center">We Accept:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Visa', 'Mastercard', 'PayPal', 'Bitcoin', 'Ethereum'].map((method) => (
              <div key={method} className="bg-white px-4 py-2 rounded-lg text-xs font-semibold text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm pt-6 border-t border-gray-200">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} GameStore. All rights reserved.</p>
          <p className="text-gray-500 text-xs mt-2">Premium Gaming Marketplace</p>
        </div>
      </div>
    </footer>
  );
};

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default Footer;



