import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { Menu, X, Phone } from 'lucide-react';

const PHONE = '+17752307035';

const navLinks: { label: string; to: string; hash?: boolean }[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/#work', hash: true },
  { label: 'Journal', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Auto Detailing', to: '/auto-detailing-reno-nv' },
  { label: 'Ceramic Coating', to: '/ceramic-coating-reno-nv' },
  { label: 'Paint Correction', to: '/paint-correction-reno-nv' },
  { label: 'Boat Detailing', to: '/boat-detailing-reno-nv' },
  { label: 'RV Detailing', to: '/rv-detailing-reno-nv' },
];

export const Header = ({ hideQuote = false }: { hideQuote?: boolean }) => {
  const { openBooking } = useBooking();
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  const quote = () => { close(); openBooking(); };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-don-ink focus:text-don-oat focus:font-bold focus:uppercase focus:text-xs">
        Skip to content
      </a>

      <header className="w-full z-50 py-6 px-6 lg:px-12 bg-don-oat">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link to="/" aria-label="Home">
            <Logo className="text-xl lg:text-2xl text-don-ink" />
          </Link>

          <div className="flex items-center gap-5 lg:gap-6">
            {!hideQuote && (
              <button
                onClick={openBooking}
                className="hidden md:inline-block text-xs font-bold uppercase tracking-[0.2em] text-don-oat bg-don-red hover:bg-don-red/90 px-6 py-2.5 rounded transition-colors"
              >
                Get Quote
              </button>
            )}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex items-center gap-2 text-don-ink hover:text-don-red transition-colors p-1 -mr-1"
            >
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.2em]">Menu</span>
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay (mobile + desktop) */}
      <div
        className={`fixed inset-0 z-[70] bg-don-ink text-don-oat transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div className="h-full flex flex-col">
          <div className="py-6 px-6 lg:px-12 flex items-center justify-between shrink-0">
            <Link to="/" aria-label="Home" onClick={close}>
              <Logo className="text-xl lg:text-2xl text-don-oat" />
            </Link>
            <button onClick={close} aria-label="Close menu" className="flex items-center gap-2 text-don-oat hover:text-don-red transition-colors p-1 -mr-1">
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.2em]">Close</span>
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav aria-label="Primary" className="flex-1 overflow-y-auto px-6 lg:px-12 pb-10">
            <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-x-16 gap-y-10 pt-4">
              <div className="flex flex-col">
                {navLinks.map((l) => (
                  l.hash ? (
                    <a key={l.label} href={l.to} onClick={close} className="text-4xl md:text-6xl font-display uppercase tracking-[-2px] text-don-oat hover:text-don-red transition-colors py-2">
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} to={l.to} onClick={close} className="text-4xl md:text-6xl font-display uppercase tracking-[-2px] text-don-oat hover:text-don-red transition-colors py-2">
                      {l.label}
                    </Link>
                  )
                ))}
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-5">Services</p>
                <div className="flex flex-col">
                  {serviceLinks.map((s) => (
                    <Link key={s.to} to={s.to} onClick={close} className="text-lg md:text-2xl font-display uppercase tracking-[-1px] text-don-oat hover:text-don-clay transition-colors py-2 border-b border-don-clay/15">
                      {s.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <button onClick={quote} className="inline-flex items-center justify-center bg-don-red text-don-oat text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-don-red/90 transition-colors">
                    Request a Quote
                  </button>
                  <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 border border-don-oat/40 text-don-oat text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-don-oat hover:text-don-ink transition-colors">
                    <Phone className="w-4 h-4" /> Call or Text
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile sticky bottom action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-don-ink border-t border-don-clay/20 px-4 py-3 flex gap-3">
        <button onClick={openBooking} className="flex-1 bg-don-red text-don-oat text-xs font-bold uppercase tracking-[0.2em] py-3.5 rounded active:scale-95 transition-transform">
          Request Quote
        </button>
        <a href={`tel:${PHONE}`} className="flex-1 flex items-center justify-center gap-2 bg-don-oat text-don-ink text-xs font-bold uppercase tracking-[0.2em] py-3.5 rounded active:scale-95 transition-transform">
          <Phone className="w-4 h-4" /> Call
        </a>
      </div>
    </>
  );
};
