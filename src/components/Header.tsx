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
      <header className="w-full z-50 py-6 px-6 lg:px-12 bg-don-oat">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" aria-label="Home">
          <Logo className="text-xl lg:text-2xl" />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8 lg:gap-12">
          <Link to="/about" className="hidden md:block text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-ink transition-colors font-semibold">About</Link>
          <a href="/#work" className="hidden md:block text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-ink transition-colors font-semibold">Work</a>

          {/* Services Dropdown */}
          <div className="relative group hidden md:block">
            <a href="/#services" className="text-xs uppercase tracking-[0.2em] text-don-clay hover:text-don-ink transition-colors font-semibold flex items-center gap-1.5 cursor-pointer">
              Services
              <svg className="w-3 h-3 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 pt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-don-oat shadow-2xl border border-don-clay/20 overflow-hidden">
                <Link to="/auto-detailing-reno-nv" className="block px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-don-clay hover:text-don-ink hover:bg-don-bark/5 transition-colors font-semibold border-b border-don-clay/10">Auto Detailing</Link>
                <Link to="/ceramic-coating-reno-nv" className="block px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-don-clay hover:text-don-ink hover:bg-don-bark/5 transition-colors font-semibold border-b border-don-clay/10">Ceramic Coating</Link>
                <Link to="/paint-correction-reno-nv" className="block px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-don-clay hover:text-don-ink hover:bg-don-bark/5 transition-colors font-semibold border-b border-don-clay/10">Paint Correction</Link>
                <Link to="/boat-detailing-reno-nv" className="block px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-don-clay hover:text-don-ink hover:bg-don-bark/5 transition-colors font-semibold border-b border-don-clay/10">Boat Detailing</Link>
                <Link to="/rv-detailing-reno-nv" className="block px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-don-clay hover:text-don-ink hover:bg-don-bark/5 transition-colors font-semibold">RV Detailing</Link>
              </div>
            </div>
          </div>

          {!hideQuote && (
            <button onClick={openBooking} className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat bg-don-red hover:bg-don-red/90 px-6 py-2.5 rounded transition-colors">Get Quote</button>
          )}
        </nav>
      </div>
      </header>
    </>
  );
};
