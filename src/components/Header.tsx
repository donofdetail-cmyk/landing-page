import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export const Header = ({ hideQuote = false }: { hideQuote?: boolean }) => {
  const { openBooking } = useBooking();

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-don-ink focus:text-don-oat focus:font-bold focus:uppercase focus:text-xs">
        Skip to content
      </a>
      <header className="w-full z-50 py-6 px-6 lg:px-12 border-b border-don-clay/30 bg-don-oat">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" aria-label="Home">
          <Logo className="text-xl lg:text-2xl" />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8 lg:gap-12">
          <a href="/#work" className="hidden md:block text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-ink transition-colors font-semibold">Work</a>
          <a href="/#services" className="hidden md:block text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-ink transition-colors font-semibold">Services</a>
          {!hideQuote && (
            <button onClick={openBooking} className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat bg-don-red hover:bg-don-red/90 px-6 py-2.5 rounded transition-colors">Get Quote</button>
          )}
        </nav>
      </div>
      </header>
    </>
  );
};
