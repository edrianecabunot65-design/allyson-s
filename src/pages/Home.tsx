import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    desc: 'Coconut, Blue Spirulina & Lime',
    img: 'https://images.unsplash.com/photo-1544145945-f9042538a7f5?auto=format&fit=crop&q=80&w=800',
    color: '#0F3843'
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    desc: 'Mango, Passionfruit & Hibiscus',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    color: '#E07A5F'
  },
  {
    id: 'midnight-oasis',
    name: 'Midnight Oasis',
    desc: 'Blackberry, Mint & Activated Charcoal',
    img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800',
    color: '#070B14'
  }
];

export function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000" 
            alt="Ocean background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mar-dark via-mar-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-mar-dark/30 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center text-center mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-mar-gold mb-6"
          >
            Premium Tropical Beverages
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif italic text-5xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.95] text-white max-w-5xl mb-8"
          >
            Every sip <br/>
            <span className="not-italic font-sans font-extralight text-white">feels like a</span> <br/>
            <span className="text-gradient">journey.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-base md:text-lg text-mar-sand/70 max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            Crafted with exotic botanicals and pristine adaptogens. 
            Escape the ordinary and taste the horizon.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Link to="/products" className="bg-white text-black px-10 py-4 rounded-full font-semibold uppercase text-xs tracking-widest hover:bg-mar-gold hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Explore Flavors <ArrowRight size={16} />
            </Link>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-mar-sand/50 uppercase tracking-tighter">Available in</span>
              <span className="text-sm text-white font-medium">24 Global Regions</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="font-sans text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-mar-sand to-transparent" />
        </motion.div>
      </section>

      {/* BRAND STORY PREVIEW */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full"
            >
              <div className="absolute inset-0 border border-mar-sand/20 rounded-[200px] transform translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Tropical leaf casting shadow" 
                className="w-full h-full object-cover rounded-[200px] grayscale-[20%] sepia-[10%] opacity-90"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 glass-panel rounded-full flex flex-col items-center justify-center text-center p-6 border border-mar-sand/10 shadow-2xl">
                <span className="font-display tracking-tight text-3xl text-mar-gold mb-1">100%</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-mar-sand/80">Natural<br/>Ingredients</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-serif text-sm uppercase tracking-[0.2em] text-mar-sand/50 mb-4">Born from the Ocean</h2>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] font-light">
                A getaway in <br/><span className="text-mar-gold font-medium italic">every bottle.</span>
              </h3>
              <p className="font-sans text-mar-sand/70 text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
                Allyson's was born from a desire to capture the essence of the world's most pristine beaches. We blend exotic nectars, oceanic minerals, and rare botanicals to create a beverage that elevates your spirit and refreshes your soul.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-mar-gold hover:text-mar-sand transition-colors pb-2 border-b border-mar-gold/30 hover:border-mar-sand">
                Discover our origin <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (HORIZONTAL SCROLL OR GRID) */}
      <section className="py-32 bg-mar-teal/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">The <span className="italic font-medium text-gradient">Collection</span></h2>
          <p className="font-sans text-mar-sand/60 max-w-2xl mx-auto font-light">
            Formulated for the modern palate. Low sugar, high function, unbelievable taste.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center">
                    <button className="px-6 py-3 rounded-full bg-white text-black font-sans text-xs uppercase tracking-widest hover:bg-mar-gold transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h4 className="font-display text-2xl font-medium mb-2">{product.name}</h4>
                  <p className="font-sans text-sm text-mar-sand/60 font-light tracking-wide">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <Link to="/products" className="px-10 py-4 border border-mar-sand/20 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-mar-sand hover:text-mar-dark transition-all duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* LIFESTYLE / SOCIAL PROOF */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl lg:text-5xl font-light mb-6">Loved by the <span className="italic text-gradient">Explorers</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-6 text-mar-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-xl italic leading-relaxed mb-8 text-mar-sand/90">
                  {i === 0 && "\"The Ocean Breeze flavor literally tastes like a luxury vacation. It's become a staple at our beach club.\""}
                  {i === 1 && "\"Incredible branding, but the taste exceeds expectations. We sell out every weekend.\""}
                  {i === 2 && "\"Finally, a premium non-alcoholic option that feels special. Sunset Glow is my new go-to.\""}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-mar-sand/20" />
                  <div>
                    <h5 className="font-sans text-sm font-medium">
                      {i === 0 && "Elena R."}
                      {i === 1 && "Café owner, Miami"}
                      {i === 2 && "Marcus T."}
                    </h5>
                    <p className="font-sans text-xs text-mar-sand/50">Verified Buyer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574850346083-efce9b29bed0?auto=format&fit=crop&q=80&w=2000" 
            alt="Bar/Cafe texture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-mar-dark/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-mar-teal/90 to-mar-dark/50" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light mb-8">
            Stock <span className="italic font-medium text-mar-gold">Allyson's.</span>
          </h2>
          <p className="font-sans text-lg text-mar-sand/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Elevate your offering. We partner with premium cafes, restaurants, hotels, and select retailers to bring the journey to your guests.
          </p>
          <Link to="/distributor" className="px-10 py-5 rounded-full bg-mar-gold text-mar-dark font-sans text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
            Wholesale Inquiries <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
