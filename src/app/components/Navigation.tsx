import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
              <span className="text-white font-['Unbounded'] font-semibold text-sm">N</span>
            </div>
            <span className="font-['Unbounded'] font-semibold text-lg text-neutral-900">NexGen</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Who we are
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Blog
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors ${isActive('/portfolio') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="group px-6 py-2.5 bg-[#C4B5FD] text-white rounded-full hover:bg-[#7C3AED] transition-colors flex items-center gap-2 font-bold uppercase text-sm btn-shine relative overflow-hidden group/btn">
              Contact <span className="bg-white rounded-full p-1 group-hover/btn:translate-x-1 transition-transform duration-300"><svg className="w-2.5 h-2.5 transition-transform -rotate-45 group-hover:rotate-0 group-hover/btn:stroke-black/90" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </Link>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Who we are
              </Link>
              <Link 
                to="/products" 
                className={`transition-colors ${isActive('/products') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${isActive('/services') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${isActive('/blog') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/portfolio" 
                className={`transition-colors ${isActive('/portfolio') ? 'text-[#7C3AED] font-medium' : 'text-neutral-600 hover:text-neutral-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link to="/contact" className="px-6 py-2.5 bg-[#C4B5FD] text-white rounded-full hover:bg-[#A78BFA] transition-colors text-center font-bold uppercase text-sm btn-shine relative overflow-hidden">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
