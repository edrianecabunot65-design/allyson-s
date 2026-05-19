import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const NAV_LINKS = [
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Distributors', path: '/distributor' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-4 bg-mar-dark/80 backdrop-blur-3xl border-b border-white/5' : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="relative z-50 flex items-center group">
            <span className="font-sans text-2xl font-light tracking-[0.4em] text-white uppercase group-hover:text-mar-gold transition-colors duration-300">
              Allyson's
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans text-[11px] uppercase tracking-widest font-medium text-mar-sand/60 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="px-6 py-2 rounded-full border border-white/20 text-white font-sans text-[11px] uppercase tracking-widest font-medium hover:bg-white transition-all duration-300 hover:text-black"
            >
              Shop Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-mar-sand hover:text-mar-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-mar-dark/95 backdrop-blur-3xl px-6 flex flex-col justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-display text-4xl text-mar-sand hover:text-mar-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  to="/products"
                  className="inline-block px-8 py-4 rounded-full border border-mar-gold text-mar-gold font-sans text-sm uppercase tracking-widest hover:bg-mar-gold hover:text-mar-dark transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
