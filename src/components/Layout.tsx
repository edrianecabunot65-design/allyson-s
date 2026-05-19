import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-mar-dark relative selection:bg-mar-gold selection:text-mar-dark">
      {/* Background gradients for atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-mar-teal blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-mar-coral blur-[150px] opacity-30" />
      </div>

      <Navbar />
      
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>

      <div className="z-10 relative">
        <Footer />
      </div>
    </div>
  );
}
