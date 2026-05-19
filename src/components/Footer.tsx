import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-mar-teal/30 border-t border-mar-sand/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="font-display text-2xl font-semibold tracking-wide text-mar-sand uppercase">Allyson's</span>
            </div>
            <p className="font-sans text-sm text-mar-sand/60 leading-relaxed mb-8 max-w-sm">
              Every sip feels like a journey. Premium tropical beverages crafted for the modern explorer.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-mar-sand/20 flex items-center justify-center text-mar-sand/60 hover:text-mar-gold hover:border-mar-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-mar-sand/20 flex items-center justify-center text-mar-sand/60 hover:text-mar-gold hover:border-mar-gold transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-mar-sand/20 flex items-center justify-center text-mar-sand/60 hover:text-mar-gold hover:border-mar-gold transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-mar-sand/40 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/products" className="font-sans text-sm text-mar-sand/80 hover:text-mar-gold transition-colors">Our Beverages</Link></li>
              <li><Link to="/about" className="font-sans text-sm text-mar-sand/80 hover:text-mar-gold transition-colors">Brand Story</Link></li>
              <li><Link to="/distributor" className="font-sans text-sm text-mar-sand/80 hover:text-mar-gold transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-mar-sand/40 mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/contact" className="font-sans text-sm text-mar-sand/80 hover:text-mar-gold transition-colors">Contact Us</Link></li>
              <li><a href="#" className="font-sans text-sm text-mar-sand/80 hover:text-mar-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="font-sans text-sm text-mar-sand/80 hover:text-mar-gold transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-mar-sand/40 mb-6">Newsletter</h4>
            <p className="font-sans text-sm text-mar-sand/60 leading-relaxed mb-4">
              Join the club. Get first access to new flavors and exclusive events.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-mar-dark/50 border border-mar-sand/20 px-4 py-3 rounded-l-md w-full focus:outline-none focus:border-mar-gold font-sans text-sm"
              />
              <button 
                type="submit" 
                className="bg-mar-gold text-mar-dark px-4 py-3 rounded-r-md hover:bg-mar-sand transition-colors flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-mar-sand/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-mar-sand/40">
            &copy; {new Date().getFullYear()} Allyson's Beverages. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-mar-sand/40 hover:text-mar-sand transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans text-xs text-mar-sand/40 hover:text-mar-sand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
