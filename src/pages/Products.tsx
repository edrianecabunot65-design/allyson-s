import { motion } from 'motion/react';

const PRODUCTS = [
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    desc: 'Coconut, Blue Spirulina & Lime',
    img: 'https://images.unsplash.com/photo-1544145945-f9042538a7f5?auto=format&fit=crop&q=80&w=800',
    price: '$4.50'
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    desc: 'Mango, Passionfruit & Hibiscus',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    price: '$4.50'
  },
  {
    id: 'midnight-oasis',
    name: 'Midnight Oasis',
    desc: 'Blackberry, Mint & Activated Charcoal',
    img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800',
    price: '$5.00'
  },
  {
    id: 'tropic-thunder',
    name: 'Tropic Thunder',
    desc: 'Pineapple, Ginger & Turmeric',
    img: 'https://images.unsplash.com/photo-1516280440502-120d5885c3db?auto=format&fit=crop&q=80&w=800',
    price: '$4.50'
  }
];

export function Products() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-light mb-6">Our <span className="italic text-gradient">Beverages</span></h1>
          <p className="font-sans text-mar-sand/60 font-light max-w-xl mx-auto">
            Explore our range of premium, low-sugar, functional beverages. Designed to transport you to your favorite destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod, i) => (
            <motion.div 
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl glass-panel p-6">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-mar-dark to-transparent">
                  <button className="w-full py-3 bg-white text-black font-sans text-xs uppercase tracking-widest rounded-full hover:bg-mar-gold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl mb-1">{prod.name}</h3>
                  <p className="font-sans text-xs text-mar-sand/50">{prod.desc}</p>
                </div>
                <span className="font-sans font-medium">{prod.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
