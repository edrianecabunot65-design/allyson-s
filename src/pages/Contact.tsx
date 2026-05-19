import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-light mb-8">Get in <span className="italic text-gradient">Touch</span></h1>
        <p className="font-sans text-mar-sand/70 font-light mb-16">
          Whether you have a question about our flavors, shipping, or just want to say hello, we'd love to hear from you.
        </p>

        <div className="glass-panel p-8 md:p-12 rounded-3xl text-left">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold" />
              <input type="email" placeholder="Email Address" className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold" />
            <textarea placeholder="Your Message..." rows={6} className="w-full bg-mar-dark/50 border border-mar-sand/20 rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:border-mar-gold"></textarea>
            
            <button type="submit" className="w-full bg-white text-mar-dark py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-mar-gold transition-colors mt-6">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-mar-sand/10 pt-16">
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-mar-gold mb-2">HQ</h4>
            <p className="font-sans text-sm text-mar-sand/60">Miami, FL<br/>United States</p>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-mar-gold mb-2">Email</h4>
            <p className="font-sans text-sm text-mar-sand/60">hello@allysons.com<br/>support@allysons.com</p>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-mar-gold mb-2">Social</h4>
            <p className="font-sans text-sm text-mar-sand/60">@allysons<br/>Instagram / Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
