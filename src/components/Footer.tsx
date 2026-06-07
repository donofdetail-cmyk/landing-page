import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export const Footer = () => {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-don-ink text-don-oat">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" aria-label="Home" className="text-don-oat">
              <Logo className="text-3xl text-don-oat" />
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay max-w-xs text-center md:text-left">
              DETAILING DONE THE RIGHT WAY, NOT THE EASY WAY.
            </p>
            <address className="not-italic text-[10px] uppercase tracking-[0.2em] text-don-clay/60 text-center md:text-left mt-2">
              <p className="text-don-oat font-bold mb-1">Don of Detail LLC</p>
              <p>Mobile Service | Reno, NV</p>
              <a href="tel:+17752307035" className="hover:text-don-oat transition-colors block mt-1">(775) 230-7035</a>
            </address>
            <div className="mt-4 flex flex-col items-center md:items-start gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay">Service Areas</p>
              <nav aria-label="Service Areas" className="flex flex-wrap gap-4">
                <Link to="/" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Reno, NV</Link>
                <Link to="/mobile-detailing-sparks-nv" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Sparks, NV</Link>
              </nav>
            </div>
          </div>
          
          <nav aria-label="Footer" className="flex items-center gap-8">
            <Link to="/about" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">About</Link>
            <a href="/#work" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Work</a>
            <Link to="/blog" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Journal</Link>
            <button onClick={openBooking} className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Get Quote</button>
          </nav>
          
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer me" aria-label="Instagram" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Instagram</a>
            <a href="https://facebook.com/donofdetail" target="_blank" rel="noopener noreferrer me" aria-label="Facebook" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Facebook</a>
          </div>
        </div>


        
        <div className="border-t border-don-clay/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-don-clay/60">&copy; {new Date().getFullYear()} Don of Detail LLC</p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-don-clay/60">
            <Link to="/privacy" className="hover:text-don-clay transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-don-clay transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
