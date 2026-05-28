import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useBooking } from '../context/BookingContext';

export default function Home() {
  const { openBooking } = useBooking();
  
  return (
    <div className="min-h-screen bg-don-oat text-don-ink font-sans selection:bg-don-ink selection:text-don-oat">
      <Helmet>
        <title>Don of Detail | Mobile Detailing Reno NV</title>
        <meta name="description" content="Reno's premier mobile auto detailing service. We specialize in paint correction, ceramic coatings, and interior resets. Detailing done the right way, not the easy way." />
      </Helmet>
      <Header />

      <main id="main" className="focus:outline-none" tabIndex={-1}>
        {/* Above the fold wrapper */}
        <div className="min-h-[85vh] flex flex-col">
          {/* Section 1 - Hero */}
          <section className="relative flex-1 flex flex-col justify-center pt-24 pb-20 px-6 lg:px-12 bg-don-oat">
          <div className="max-w-[1400px] mx-auto w-full text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-don-ink mb-8 md:mb-12">
              Mobile Detailing | Reno, NV
            </p>
            <h1 className="text-[12vw] sm:text-8xl md:text-[9rem] lg:text-[11rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase max-w-full break-words">
              Obsessive<br/>By Nature.
            </h1>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button onClick={openBooking} className="inline-block bg-don-ink text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-don-ink/90 transition-colors">
                Get a Quote
              </button>
              <a href="#work" className="text-sm font-bold uppercase tracking-[0.2em] text-don-clay hover:text-don-ink transition-colors flex items-center gap-2 group">
                See the work <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 2 - Ticker strip */}
        <div className="w-full bg-don-ink py-4 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[ticker_20s_linear_infinite]">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-oat mx-8">
                AUTO DETAILING &mdash; CERAMIC COATING &mdash; PAINT CORRECTION &mdash; BOAT DETAILING &mdash; RV DETAILING &mdash; <span className="text-don-red">NOW BOOKING</span>
              </span>
            ))}
          </div>
        </div>

        </div>

        {/* Section 3 - Work / Gallery */}
        <section id="work" className="bg-don-oat">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: '/porsche-911-foam-wash-detailing-reno.webp', title: 'Classic Porsche 911', service: 'Auto Detailing' },
              { img: '/classic-truck-car-show-reno.webp', title: 'Custom Classic Truck', service: 'Paint Correction' },
              { img: '/range-rover-headlight-restoration.webp', title: 'Range Rover', service: 'Headlight Restoration' },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-don-bark">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.8] contrast-110" loading="lazy" />
                <div className="absolute inset-0 bg-don-ink/0 group-hover:bg-don-ink/90 transition-colors duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-don-clay mb-2">{item.service}</p>
                    <p className="text-2xl font-display uppercase tracking-[-1px] text-don-oat">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 - Services */}
        <section id="services" className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 lg:gap-x-8 lg:gap-y-32">
            {[
              { num: '01', title: 'Ceramic Coating', desc: 'Permanent hydrophobic barrier against UV and oxidation.', price: 'From $800', link: '/ceramic-coating-reno-nv' },
              { num: '02', title: 'Paint Correction', desc: 'Multi-stage machine polishing to level defects and swirl marks.', price: 'From $400', link: '/paint-correction-reno-nv' },
              { num: '03', title: 'Auto Detailing', desc: 'Comprehensive interior and exterior preservation.', price: 'From $250', link: '/auto-detailing-reno-nv' },
              { num: '04', title: 'RV Detailing', desc: 'Heavy oxidation removal and multi-stage gelcoat restoration.', price: 'Quote Required', link: '/rv-detailing-reno-nv' },
              { num: '05', title: 'Boat Detailing', desc: 'Marine acid washing and specialized gelcoat sealing.', price: 'Quote Required', link: '/boat-detailing-reno-nv' },
            ].map((svc) => (
              <a href={svc.link} key={svc.num} className="flex flex-col group cursor-pointer hover:bg-don-ink/10 p-6 -m-6 rounded-md transition-colors h-full">
                <span className="text-7xl md:text-8xl font-display text-don-clay/20 leading-none mb-6 select-none group-hover:text-don-clay/40 transition-colors">
                  {svc.num}
                </span>
                <h3 className="text-3xl md:text-4xl font-display uppercase tracking-[-2px] mb-4 text-don-oat group-hover:text-don-clay transition-colors flex items-center gap-3">
                  {svc.title}
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    className="text-don-red transition-transform duration-300 md:group-hover:translate-x-2"
                  >
                    &rarr;
                  </motion.span>
                </h3>
                <p className="text-sm font-light text-don-clay mb-8 max-w-sm">
                  {svc.desc}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mt-auto pt-6 border-t border-don-clay/10 group-hover:border-don-clay/30 transition-colors">
                  {svc.price}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Section 5 - About */}
        <section className="bg-don-oat text-don-ink py-32 lg:py-48 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-3px] mb-8">
              The standard isn't optional.
            </h2>
            <p className="text-lg md:text-xl font-light text-don-ink/70 leading-relaxed max-w-2xl mx-auto">
              We bring the equipment, the chemicals, and the discipline directly to your driveway. Paint correction, ceramic coatings, and anything auto detailing. No filler products. No shortcuts. The work shows.
            </p>
          </div>
        </section>

        {/* Section 6 - Booking CTA */}
        <section id="book" className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12 text-center flex flex-col justify-center items-center">
          <h2 className="text-6xl md:text-8xl font-display uppercase tracking-[-4px] mb-12">
            Get a Quote.
          </h2>
          <button onClick={openBooking} className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-12 py-5 rounded hover:bg-don-red/90 transition-transform hover:scale-105 active:scale-95 mb-8">
            Request Quote
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-don-clay">
            Call or text: <a href="tel:+17752307035" className="hover:text-don-oat transition-colors">(775) 230-7035</a>
          </p>
        </section>

      </main>

      <Footer />

      {/* Inline styles for the ticker animation since it's one-off */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
