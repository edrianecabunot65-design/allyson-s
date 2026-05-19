import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Distributor() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6">Partner <br/>with <span className="italic text-gradient">Allyson's</span></h1>
          <p className="font-sans text-mar-sand/70 font-light leading-relaxed mb-12">
            We are actively looking for premium cafes, beach clubs, boutique hotels, and specialty retailers to join our global network of distributors.
          </p>
          
          <div className="space-y-8 mb-12">
            <div>
              <h4 className="font-sans text-sm uppercase tracking-widest text-mar-gold mb-2">Why Partner?</h4>
              <p className="font-sans text-sm text-mar-sand/60">High margins, exceptional brand loyalty, and point-of-sale marketing support.</p>
            </div>
            <div>
              <h4 className="font-sans text-sm uppercase tracking-widest text-mar-gold mb-2">Logistics</h4>
              <p className="font-sans text-sm text-mar-sand/60">Global shipping capabilities with cold-chain perfection.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <h3 className="font-display text-2xl mb-8">Wholesale Inquiry</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Business Name" className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold" />
              <input type="text" placeholder="Contact Name" className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold" />
            <select className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold text-mar-sand/80 appearance-none">
              <option value="">Business Type</option>
              <option value="cafe">Cafe / Restaurant</option>
              <option value="hotel">Hotel / Resort</option>
              <option value="retail">Retail Store</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Tell us about your venue..." rows={4} className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold"></textarea>
            
            <button type="submit" className="w-full bg-mar-gold text-mar-dark py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-mar-sand transition-colors mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
