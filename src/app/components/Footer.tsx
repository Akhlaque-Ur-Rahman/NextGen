import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
                <span className="text-white font-['Unbounded'] font-semibold text-sm">N</span>
              </div>
              <span className="font-['Unbounded'] font-semibold text-lg">NexGen</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              Empowering businesses with intelligent solutions for the modern era. Transform your operations and accelerate growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-['Unbounded'] font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors">Video KYC</Link></li>
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors">E-Sign</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">OCR</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Fintech CRM</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Sales CRM</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Legal Tech</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Unbounded'] font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Website Development</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Ecommerce Development</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Shopify Development</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Fintech App Development</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Unbounded'] font-semibold mb-6">SUBSCRIBE NEXTBIGBOX</h4>
            <div className="flex gap-2 mb-8">
               <input type="email" placeholder="Enter your email" className="bg-white/10 border-none rounded-l-md px-4 py-2 text-white placeholder-neutral-400 w-full focus:ring-1 focus:ring-[#7C3AED] outline-none" />
               <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-r-md transition-colors"><Mail className="w-5 h-5" /></button>
            </div>
            
            <h5 className="font-bold text-white mb-2">New Delhi</h5>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              2nd Floor, Property No.67A & 68,<br/> Hari Vihar, Kakrola,<br/> New Delhi 110078
            </p>
            <div className="flex flex-col gap-2 text-neutral-400 text-sm">
               <div className="flex items-center gap-2">
                 <span>📞</span> <span>1800-123-120555</span>
               </div>
               <div className="flex items-center gap-2">
                 <span>✉️</span> <span>info@nextbigbox.in</span>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 NexGen. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}