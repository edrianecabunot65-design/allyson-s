import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <h1 className="font-display text-5xl md:text-7xl font-light mb-8">Our <span className="italic text-gradient">Story</span></h1>
        <p className="font-sans text-lg text-mar-sand/70 font-light leading-relaxed">
          Allyson's began with a simple question: Why settle for ordinary refreshment when you can experience a journey in every sip?
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl md:text-4xl mb-6 font-light">Crafted for the <br/><span className="italic text-mar-gold">Modern Explorer</span></h2>
          <div className="space-y-6 font-sans text-mar-sand/70 font-light leading-relaxed">
            <p>
              Founded in 2024, we set out to disrupt the beverage industry by introducing a product that prioritizes both aesthetic brilliance and functional wellness.
            </p>
            <p>
              We source our ingredients from exotic locales globally—using only verified organic botanicals, natural nectars, and ocean-derived minerals. No artificial colors. No excessive sugars. Just pure, elevated taste.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1595981267035-7b04d9b4b9b9?auto=format&fit=crop&q=80&w=1000" 
            alt="Founding story"
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
}
