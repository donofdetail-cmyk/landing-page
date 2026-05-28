import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export const Footer = () => {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-don-ink text-don-oat">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" aria-label="Home" className="text-don-oat">
              <Logo className="text-3xl text-don-oat" />
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay max-w-xs text-center md:text-left">
              DETAILING DONE THE RIGHT WAY, NOT THE EASY WAY.
            </p>
            <div className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60 text-center md:text-left mt-2">
              <p className="text-don-oat font-bold mb-1">Don of Detail LLC</p>
              <p>Mobile Service | Reno, NV</p>
              <a href="tel:+17752307035" className="hover:text-don-oat transition-colors block mt-1">(775) 230-7035</a>
            </div>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="/#work" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Work</a>
            <a href="/#services" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Services</a>
            <a href="/blog" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Journal</a>
            <button onClick={openBooking} className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Get Quote</button>
          </nav>
          
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Instagram</a>
            <a href="https://facebook.com/donofdetail" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-oat transition-colors">Facebook</a>
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
