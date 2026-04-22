import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wind, Snowflake, Shield, Star, CheckCircle, Phone, ChevronDown, Award, Instagram, Mail, Clock, MapPin, Quote } from 'lucide-react';

const Logo = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <picture>
    <source srcSet="/logo.webp" type="image/webp" />
    <img
      src="/logo.png"
      alt="Don of Detail logo"
      className={className}
      loading="eager"
      decoding="sync"
      style={{ mixBlendMode: 'lighten', ...style }}
    />
  </picture>
);

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (!stepsRef.current) return;

      const rect = stepsRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // animate while section top travels from 85% to 15% of viewport height
      const start = windowH * 0.85;
      const end = windowH * 0.15;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setLineProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const testimonials = [
    {
      quote: "Been using them since my last vehicle. Always amazing results. Love how convenient it is coming to my work. Very responsive with scheduling which makes it easy to work around my busy life.",
      author: "Lisa G.",
      location: "Reno, NV",
    },
    {
      quote: "Logan knocked it out of the park with the detail and ceramic job on my triple black metallic F350. Looks better today than the day I brought it home from the dealer! I highly recommend Don of Detail's services for your vehicles.",
      author: "Andrew R.",
      location: "Reno, NV",
    },
    {
      quote: "Logan went above and beyond on my truck. Even with the mountain of yellow lab hair in my back seat that I could never get out no matter how hard I tried he took the time to get all of it out and get it looking brand new. If you live in the Reno area and need your car cleaned he is worth every penny. Will be having them clean my car from now on.",
      author: "Alex C.",
      location: "Reno, NV",
    },
    {
      quote: "Great communication and great service. They did an exceptional job with the interior especially with all the dog hair. Would recommend to anyone.",
      author: "Debbie E.",
      location: "Sparks, NV",
    },
    {
      quote: "Logan was super friendly, knowledgeable, punctual, and thorough. I’ve booked Don of Detail for family members as gifts and myself. I even have monthly follow ups scheduled so I can keep up on my dog taxi haha. I would highly recommend to anyone and everyone.",
      author: "Quinn T.",
      location: "Reno, NV",
    },
  ];



  const faqs = [
    {
      q: 'How much does mobile auto detailing cost in Reno, NV?',
      a: 'Mobile auto detailing in Reno typically costs between $200 and $400 depending on vehicle size and the service selected. Exterior-only packages start at $200+. For a full interior & exterior detail, most clients spend $250 to $400. Because every vehicle is different, we provide custom quotes after you submit a brief form.',
    },
    {
      q: 'Is ceramic coating worth it in Reno\'s climate?',
      a: 'Yes. Ceramic coating is one of the best investments for vehicles in Reno\'s high-desert climate. Reno gets 300+ days of intense UV at 4,500+ feet of elevation, road salt from Tahoe trips, and constant desert dust. Ceramic coating provides years of hydrophobic protection, UV resistance, and keeps your paint looking factory-fresh.',
    },
    {
      q: 'What areas in Reno & Sparks do you service?',
      a: 'We provide mobile auto detailing throughout the greater Reno-Sparks metro area including Reno, Sparks, Spanish Springs, South Meadows, Montrêux, Verdi, Sun Valley, Washoe Valley, Fernley, Dayton, and Carson City. Not sure if we cover your area? Give us a call. We\'re flexible.',
    },
    {
      q: 'How long does ceramic coating last?',
      a: '2 to 5 years, depending on how you maintain it. Regular hand washes with pH-balanced shampoo and the occasional ceramic booster go a long way, especially out here with the UV and dust. After every install, we\'ll show you exactly how to take care of it.',
    },
    {
      q: 'Can mobile detailers apply ceramic coatings on-site?',
      a: 'Yes. Our fully-equipped mobile unit carries everything needed for a professional ceramic coating installation, including paint correction, decontamination tools, and a controlled curing setup. We perform the entire process at your home or office in Reno or Sparks. The vehicle simply needs to remain sheltered (garage or covered area) during the 24-hour initial cure.',
    },
    {
      q: 'What is paint correction and does my car need it?',
      a: 'Paint correction is a multi-stage machine polishing process that removes swirl marks, scratches, water spots, and oxidation from your vehicle\'s clear coat. If your paint looks dull, hazy, or covered in fine scratches, especially under direct sunlight, your car will benefit from paint correction. It\'s also a required step before applying ceramic coating, since the coating locks in whatever condition the paint is in.',
    },
    {
      q: 'Do you detail boats and RVs in Reno?',
      a: 'Yes. We offer full mobile detailing for boats, RVs, travel trailers, and motorhomes throughout Reno, Sparks, and Northern Nevada. Services include exterior wash and wax, oxidation removal, hull cleaning, interior deep clean, and ceramic coating for long-term protection against Reno\'s intense UV and desert conditions.',
    },
    {
      q: 'How much does ceramic coating cost in Reno?',
      a: 'Professional ceramic coating in Reno typically ranges from $800 to $2,500 depending on vehicle size, paint condition, and the level of coating selected. This includes full paint decontamination, paint correction (to remove swirls and scratches before sealing), and the ceramic coating application itself. Because every vehicle is unique, we provide custom quotes after reviewing photos of your vehicle.',
    },
  ];

  // -- Google Sheets - paste your Apps Script Web App URL below --------------
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzjliWvpaLq1Lzo9Y_Wyq8q0URwRRhPXwAUw3JTvrubtlAqRYB3BaCgUdGZG93_gAzD/exec';
  // --------------------------------------------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        // text/plain avoids a CORS preflight that Apps Script doesn't handle
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data),
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-don-black text-don-cream font-sans selection:bg-don-gold/30 relative">
      {/* Ambient Lighting for Premium Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_60%)] animate-float will-change-transform" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)] animate-float-delayed will-change-transform" />
        <div className="absolute top-[30%] left-[50%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(245,245,220,0.08)_0%,transparent_60%)] animate-float will-change-transform" />
      </div>

      {/* Global Noise Overlay for premium film grain effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-[0.06] will-change-transform translate-z-0"></div>

      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'bg-don-black/95 backdrop-blur-md py-0' : 'bg-transparent py-4 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-28 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-16 md:h-24 w-auto" />
          </div>
          <nav aria-label="Primary">
            <a href="tel:+17752307035" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-don-black bg-don-gold hover:bg-don-gold/90 px-6 py-2.5 rounded-none transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a href="tel:+17752307035" className="md:hidden flex items-center justify-center w-10 h-10 bg-don-gold text-don-black rounded-none" aria-label="Call Don of Detail">
              <Phone className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main>

        {/* Hero Section */}
        <section id="hero" aria-label="Hero - Mobile Auto Detailing Reno NV" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <img
            src="/ceramic-coating-reno-nv.webp"
            alt="Ceramic-coated vehicle with mirror-finish paint - Don of Detail mobile auto detailing Reno NV"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-don-black/60 via-don-black/90 to-don-black" />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">

              <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-don-cream">
                Reno's Premier <span className="text-don-gold-gradient italic">Mobile Auto Detailing</span>
              </h1>
              <p className="text-lg lg:text-xl text-don-cream/80 font-light leading-relaxed mb-10">
                We show up at your driveway with everything we need. Water, power, the works. You hand us the keys. A few hours later, your car looks better than the day you bought it.
              </p>
              <div className="flex items-center gap-6 text-sm font-medium text-don-cream/90 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-don-gold" />
                  <span>Award-Winning Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-don-gold" />
                  <span>Ceramic Coating Certified</span>
                </div>
              </div>

            </div>

            {/* Lead Form - Glassmorphism */}
            <div id="quote" className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-none shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-don-gold to-transparent opacity-50 rounded-none" />

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-don-gold/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-don-gold" />
                  </div>
                  <h3 className="text-3xl font-serif text-don-gold mb-3">Request Received</h3>
                  <p className="text-don-cream/80 font-light text-lg">We will be in touch with you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-serif font-bold mb-2 text-don-gold">Request a Quote</h2>
                  <p className="text-don-cream/60 text-sm mb-8 font-light tracking-wide">Serving Reno & Sparks. We'll come to you. Most quotes answered within the hour.</p>

                  <form className="space-y-4" onSubmit={handleSubmit} aria-label="Request a free auto detailing quote">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">First Name</label>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          required
                          placeholder="First Name"
                          className="w-full bg-don-black/50 border border-white/10 rounded-none px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Last Name</label>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          required
                          placeholder="Last Name"
                          className="w-full bg-don-black/50 border border-white/10 rounded-none px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder="(775) 000-0000"
                          className="w-full bg-don-black/50 border border-white/10 rounded-none px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          placeholder="you@email.com"
                          className="w-full bg-don-black/50 border border-white/10 rounded-none px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Vehicle Make/Model</label>
                      <input
                        id="vehicle"
                        type="text"
                        name="vehicle"
                        required
                        placeholder="Year, Make, Model"
                        className="w-full bg-don-black/50 border border-white/10 rounded-none px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Primary Concern</label>
                      <div className="relative">
                        <select id="service" required name="service" defaultValue="" className="w-full bg-don-black/50 border border-white/10 rounded-none px-4 py-3 text-don-cream appearance-none focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all">
                          <option value="" disabled className="text-don-black">Select a service...</option>
                          <option value="interior" className="text-don-black">Interior Detail</option>
                          <option value="exterior" className="text-don-black">Exterior Detail</option>
                          <option value="interior-exterior" className="text-don-black">Interior & Exterior Detail</option>
                          <option value="paint-correction" className="text-don-black">Paint Correction</option>
                          <option value="ceramic-coating" className="text-don-black">Ceramic Coating</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-don-gold pointer-events-none" />
                      </div>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#D4AF37] cursor-pointer"
                      />
                      <span className="text-xs text-don-cream/50 leading-relaxed">
                        By submitting this form, I authorize Don of Detail LLC to contact me via phone and/or SMS text message at the number provided regarding my quote and services. Message &amp; data rates may apply. View our{' '}
                        <Link to="/terms" className="text-don-gold hover:underline">Terms of Service</Link>{' '}and{' '}
                        <Link to="/privacy" className="text-don-gold hover:underline">Privacy Policy</Link>.
                      </span>
                    </label>
                    <button type="submit" className="w-full bg-don-gold hover:bg-don-gold/90 text-don-black font-bold uppercase tracking-widest py-4 rounded-none mt-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 group cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                      <span className="relative z-10">CLAIM MY FREE QUOTE</span>
                    </button>

                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Product Trust Badges Banner */}
        <div className="w-full bg-[#0a0a0a] border-t border-white/5 py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-don-cream/30 mb-6">Premium Products Used & Trusted</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
              <span className="font-sans font-black uppercase tracking-[0.2em] text-don-cream text-lg md:text-xl flex flex-col items-center justify-center leading-none">
                <span className="w-4/5 h-[3px] bg-don-cream mb-1 opacity-90 self-end mr-1"></span>
                CARPRO
              </span>
              <span className="font-sans font-black tracking-tighter text-don-cream text-3xl md:text-4xl">3M</span>
              <span className="font-sans font-bold uppercase tracking-widest text-don-cream text-xl md:text-2xl">STARKE</span>
              <span className="font-sans text-don-cream text-xl md:text-2xl tracking-tight"><span className="font-black">Koch</span><span className="font-medium">Chemie</span></span>
              <span className="font-sans font-black tracking-tighter text-don-cream text-3xl md:text-4xl">P&amp;S</span>
            </div>
          </div>
        </div>

        {/* Agitation Section */}
        <section id="why-protection" aria-label="Why your vehicle needs protection in Reno" className="py-24 bg-don-black border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
                What Reno Does to Your Paint
              </h2>
              <div className="w-24 h-1 bg-don-gold mx-auto mb-6"></div>
              <p className="text-don-cream/70 text-lg font-light">
                Drive-through car washes strip wax and grind swirl marks into your clear coat. That's bad enough anywhere, but out here, the desert is doing its own damage every single day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-10 rounded-none">
                <Flame className="w-14 h-14 text-don-gold mx-auto mb-8 animate-flicker" strokeWidth={1} />
                <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream text-center">300 Days of UV Burn</h3>
                <p className="text-don-cream/70 font-light leading-relaxed">
                  At 4,500+ feet, UV hits harder. The high-desert sun bakes clear coats, chalks paint, and cracks leather dashboards faster than most owners realize.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-none">
                <Wind className="w-14 h-14 text-don-gold mx-auto mb-8 animate-sway" strokeWidth={1} />
                <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream text-center">The Washoe Zephyr Grit</h3>
                <p className="text-don-cream/70 font-light leading-relaxed">
                  That fine dust caked on your hood? It's silica. Wipe it off with a rag or a gas-station squeegee and you've just dragged sandpaper across your clear coat.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-none">
                <Snowflake className="w-14 h-14 text-don-gold mx-auto mb-8 animate-spin-slow" strokeWidth={1} />
                <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream text-center">Sierra Road Salt</h3>
                <p className="text-don-cream/70 font-light leading-relaxed">
                  Every trip up to Tahoe coats your undercarriage in magnesium chloride. That salt sits there for weeks, corroding metal and staining paint from the bottom up.
                </p>
              </div>
            </div>

            {/* Mid-page CTA */}
            <div className="text-center mt-16">
              <p className="text-don-cream/60 text-sm uppercase tracking-widest mb-4">Don't let the desert win.</p>
              <a href="#quote" className="group inline-flex items-center gap-2 bg-don-gold text-don-black font-bold uppercase tracking-widest px-8 py-4 rounded-none transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Get a Free Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* Service Showcase Section */}
        <section id="services-showcase" aria-label="Our detailing services" className="py-20 lg:py-28 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
              What We Do <span className="text-don-gold-gradient italic">Best</span>
            </h2>
            <div className="w-24 h-1 bg-don-gold mx-auto mb-14"></div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
              {[
                { title: 'Detailing\nServices', img: '/showcase-detailing.webp', alt: 'Full auto detailing services Reno NV' },
                { title: 'Ceramic\nCoating', img: '/showcase-ceramic.webp', alt: 'Professional ceramic coating application Reno NV' },
                { title: 'Paint\nCorrection', img: '/showcase-paint.webp', alt: 'Paint correction and swirl removal Reno NV' },
                { title: 'RV\nDetailing', img: '/showcase-rv.webp', alt: 'RV and motorhome detailing Reno NV' },
                { title: 'Marine\nDetailing', img: '/showcase-marine.webp', alt: 'Boat and marine detailing Reno Lake Tahoe NV' },
              ].map(({ title, img, alt }, i) => (
                <a
                  key={title}
                  href="#quote"
                  className="group relative aspect-[3/4] overflow-hidden rounded-none block cursor-pointer"
                >
                  {/* Background image */}
                  <img
                    src={img}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-don-black/80 via-don-black/20 to-don-black/10 group-hover:from-don-black/90 transition-all duration-500" />
                  {/* Gold top accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-don-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  {/* Title */}
                  <div className="absolute inset-0 flex items-end p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-don-cream leading-tight tracking-wide whitespace-pre-line drop-shadow-lg">
                      {title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="how-it-works" aria-label="How mobile auto detailing works" className="py-24 bg-[#0f0f0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                {/* Instagram Feed Embed Simulation */}
                <div className="bg-don-black border border-white/10 rounded-none overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                        <div className="w-full h-full rounded-full bg-don-black flex items-center justify-center overflow-hidden">
                          <img src="/ig-avatar.jpg" alt="Don of Detail Instagram" className="w-full h-full object-cover rounded-full" loading="lazy" decoding="async" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-don-cream">donofdetail</p>
                        <p className="text-xs text-don-cream/60">Reno, Nevada</p>
                      </div>
                    </div>
                    <a
                      href="https://instagram.com/donofdetail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-don-gold text-don-black text-xs font-bold px-4 py-1.5 rounded-none hover:bg-don-gold/90 transition-colors"
                    >
                      Follow
                    </a>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-0.5 bg-don-black">
                    <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                      <img src="/ig1.webp" alt="Award-winning classic car detailing Reno NV - show-quality purple hot rod" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" width="600" height="600" />
                    </a>
                    <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                      <img src="/ig2.webp" alt="Porsche GT3 RS detailing and ceramic coating Reno Nevada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" width="600" height="600" />
                    </a>
                    <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                      <img src="/ig3.webp" alt="Honda Accord full exterior detail with mirror-finish paint correction Reno NV" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" width="600" height="600" />
                    </a>
                    <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                      <img src="/ig4.webp" alt="Boat detailing and ceramic coating Reno Sparks NV - Sea Ray hull restoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" width="600" height="600" />
                      <div className="absolute inset-0 bg-don-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-don-cream font-bold text-xs uppercase tracking-widest border-b border-don-gold pb-1">View Feed</span>
                      </div>
                    </a>
                  </div>

                  {/* Footer */}
                  <div className="p-3 bg-white/5 border-t border-white/10 flex justify-between items-center text-xs text-don-cream/60">
                    <span>Latest Posts</span>
                    <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-don-gold transition-colors">
                      <Instagram className="w-3 h-3" />
                      <span>@donofdetail</span>
                    </a>
                  </div>
                </div>


              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
                  How It Works
                </h2>
                <div className="w-24 h-1 bg-don-gold mb-6"></div>
                <p className="text-don-cream/70 text-lg mb-12 font-light">
                  Three steps. Zero hassle. You don't even have to be there.
                </p>

                {/* Scroll-driven Animated Steps */}
                <div ref={stepsRef} className="space-y-16 relative z-10 mt-12">
                  {[
                    { num: 1, title: 'Request a Quote', body: 'Drop your vehicle info into the form. Year, make, model, what you need done. We\'ll get back to you with a price, usually within the hour.' },
                    { num: 2, title: 'Schedule & Confirm', body: "Once you approve the quote, we'll find a time that works perfectly with your schedule. No need to clear your whole day. We bring our fully-equipped mobile unit directly to your home or office." },
                    { num: 3, title: 'Sit Back', body: 'Hand us the keys and go about your day. When you come back, it\'ll look like a different car.' },
                  ].map(({ num, title, body }, i) => {
                    const threshold = i / 2; // 0, 0.5, 1.0
                    const isActive = lineProgress >= threshold;
                    return (
                      <div 
                        key={title} 
                        className={`group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 transition-all duration-1000 ease-out will-change-transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                      >
                        {/* Giant Number */}
                        <div className="flex-shrink-0">
                          <span
                            className={`block text-8xl md:text-[10rem] font-serif font-black leading-none transition-all duration-1000 ${isActive ? 'text-don-gold-gradient drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-100' : 'text-white/5 scale-75'}`}
                          >
                            {num}.
                          </span>
                        </div>
                        
                        {/* Text Content */}
                        <div className={`transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                          <h3 className="text-3xl font-serif font-bold mb-4 text-don-cream">{title}</h3>
                          <p className="text-don-cream/70 font-light leading-relaxed text-lg">{body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof & FAQ Section */}
        <section id="reviews-faq" aria-label="Customer reviews and frequently asked questions" className="py-24 bg-don-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">

            {/* Testimonials Carousel */}
            <div className="mb-24 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-10">
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: 'Google', color: '#4285F4' },
                  ].map(({ name, color }) => (
                    <div key={name} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-none px-4 py-2.5">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{name}</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(s => (
                          <Star key={s} className="w-3.5 h-3.5 text-don-gold fill-don-gold" />
                        ))}
                      </div>
                      <span className="text-don-cream/60 text-xs font-light">5.0</span>
                    </div>
                  ))}
                </div>
                <span className="text-don-cream/50 text-xs uppercase tracking-widest">80+ Google Reviews</span>
              </div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-none text-center overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-sm grid">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-don-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                <Quote className="absolute -top-6 -left-6 w-48 h-48 text-white/[0.02] -rotate-12 pointer-events-none z-0" />
                
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`col-start-1 row-start-1 transition-all duration-700 flex flex-col items-center justify-center px-4 py-8 md:p-12 will-change-transform will-change-opacity ${i === activeTestimonial ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'
                      }`}
                  >
                    <div className="flex gap-1.5 mb-8">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 text-don-gold fill-don-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />)}
                    </div>
                    <blockquote className="text-xl md:text-3xl font-serif italic text-don-cream leading-relaxed mb-10 max-w-2xl relative z-10">
                      <span className="text-don-gold/30 text-4xl absolute -top-4 -left-6 md:-left-8 select-none">"</span>
                      {t.quote}
                      <span className="text-don-gold/30 text-4xl absolute -bottom-6 -right-4 md:-right-6 select-none">"</span>
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full border border-don-gold/30 bg-don-black flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        <span className="font-serif font-bold text-don-gold text-lg">{t.author.charAt(0)}</span>
                      </div>
                      <div className="text-left">
                        <p className="text-don-cream font-bold tracking-wide uppercase text-sm md:text-base">{t.author}</p>
                        <p className="text-don-gold/80 text-[10px] md:text-xs uppercase tracking-widest font-semibold">{t.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <button
                  onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-don-cream/60 hover:text-don-gold hover:border-don-gold transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === activeTestimonial ? 'bg-don-gold w-6' : 'bg-don-cream/30 hover:bg-don-cream/60'
                        }`}
                      aria-label={`Review ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-don-cream/60 hover:text-don-gold hover:border-don-gold transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-6 text-don-cream">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-don-gold mx-auto mb-12"></div>

              <div className="divide-y divide-white/10 border border-white/10 rounded-none overflow-hidden">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 hover:bg-white/[0.07] transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left cursor-pointer"
                      aria-expanded={openFaq === i}
                    >
                      <h3 className="text-lg font-serif font-bold text-don-gold leading-snug">{faq.q}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-don-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <p className="text-don-cream/70 font-light leading-relaxed px-8 pb-6">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" aria-label="Get a free auto detailing quote" className="relative py-28 lg:py-36 text-center overflow-hidden">
          {/* Background image with dark overlay */}
          <img
            src="/ceramic-coating-reno-nv.webp"
            alt="Professional ceramic coating and paint correction results - Don of Detail Reno NV"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-don-black via-don-black/95 to-don-black" />

          {/* Animated gold accent line at top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-don-gold to-transparent opacity-60" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-5 h-5 text-don-gold fill-don-gold" />
              ))}
            </div>
            <p className="text-don-cream/50 text-xs uppercase tracking-[0.3em] mb-8 font-semibold">80+ Five-Star Google Reviews</p>

            <h2 className="text-4xl lg:text-7xl font-serif font-bold tracking-tight mb-6 text-don-cream">
              Quit driving a <span className="text-don-gold-gradient italic">dirty car.</span>
            </h2>
            <p className="text-lg lg:text-xl text-don-cream/70 font-light mb-12 max-w-2xl mx-auto">
              We come to you, fully equipped. Your driveway, your office, your schedule. Reno & Sparks.
            </p>

            <a
              href="#quote"
              className="group inline-flex items-center justify-center bg-don-gold text-don-black font-bold uppercase tracking-widest px-12 py-5 rounded-none transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 w-full sm:w-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">GET MY FREE QUOTE</span>
            </a>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-don-black border-t border-white/10 text-don-cream/40 text-sm font-light tracking-wide pb-24 md:pb-12">
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">

            {/* Business Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-14">
              {/* Email */}
              <div className="flex flex-col items-center text-center gap-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-don-cream/50 mb-1">Email</p>
                <a href="mailto:contact@donofdetail.com" className="text-don-cream/80 hover:text-don-gold transition-colors text-sm">
                  contact@donofdetail.com
                </a>
              </div>

              {/* Business Hours */}
              <div className="flex flex-col items-center text-center gap-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-don-cream/50 mb-1">Business Hours</p>
                <p className="text-don-cream/80 text-sm">8 AM - 7 PM</p>
                <p className="text-don-cream/50 text-xs mt-0.5">7 Days a Week</p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center gap-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-don-cream/50 mb-1">Location</p>
                <p className="text-don-cream/80 text-sm">Reno, NV</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-8" />

            {/* Logo + Copyright + Legal */}
            <div className="flex flex-col items-center gap-4">
              <Logo className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-70" />
              <p>&copy; {new Date().getFullYear()} Don of Detail. All rights reserved.</p>
              <div className="flex justify-center gap-6 text-xs">
                <Link to="/terms" className="hover:text-don-gold transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="hover:text-don-gold transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
