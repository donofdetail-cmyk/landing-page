import React from 'react';
import { useBooking } from '../context/BookingContext';

interface ServiceCTAProps {
  headline?: string;
  areas?: string;
  blurb?: string;
}

export const ServiceCTA = ({
  headline = 'Get a Quote.',
  areas = 'Reno, Sparks, Spanish Springs, Verdi, and Sun Valley',
  blurb,
}: ServiceCTAProps) => {
  const { openBooking } = useBooking();

  return (
    <section className="bg-don-ink text-don-oat py-28 lg:py-40 px-6 lg:px-12 text-center flex flex-col justify-center items-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-8">
        Mobile Service | We Come To You
      </p>
      <h2 className="text-6xl md:text-8xl font-display uppercase tracking-[-4px] mb-8">
        {headline}
      </h2>
      <p className="text-base md:text-lg font-light text-don-oat/70 max-w-2xl mb-12 leading-relaxed">
        {blurb || `Serving ${areas}. Tell us about your vehicle and we bring the full setup to your driveway, office, or storage lot.`}
      </p>
      <button
        onClick={openBooking}
        className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-12 py-5 rounded hover:bg-don-red/90 transition-transform hover:scale-105 active:scale-95 mb-8"
      >
        Request a Quote
      </button>
      <p className="text-xs uppercase tracking-[0.2em] text-don-clay">
        Call or text: <a href="tel:+17752307035" className="hover:text-don-oat transition-colors">(775) 230-7035</a>
      </p>
    </section>
  );
};
