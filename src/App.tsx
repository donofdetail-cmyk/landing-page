import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Snowflake, Shield, Star, CheckCircle, Phone, ChevronDown, Award, Instagram, ClipboardList, CalendarCheck, Sparkles } from 'lucide-react';

const Logo = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/logo.png"
    alt="Don of Detail logo"
    className={className}
    loading="lazy"
    decoding="async"
    style={{ mixBlendMode: 'lighten', ...style }}
  />
);

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [lineTrackHeight, setLineTrackHeight] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;

      // Compute exact pixel height between first and last icon centers
      const first = iconRefs.current[0];
      const last = iconRefs.current[iconRefs.current.length - 1];
      if (first && last) {
        const containerTop = stepsRef.current.getBoundingClientRect().top;
        const firstCenter = first.getBoundingClientRect().top + 28 - containerTop;
        const lastCenter = last.getBoundingClientRect().top + 28 - containerTop;
        setLineTrackHeight(lastCenter - firstCenter);
      }

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
      quote: "Logan went above and beyond on my truck. Even with the mountain of yellow lab hair in my back seat that I could never get out no matter how hard I tried he took the time to get all of it out and get it looking brand new. If you live in the Reno area and need your car cleaned he is worth every penny — will be having them clean my car from now on.",
      author: "Alex C.",
      location: "Reno, NV",
    },
  ];



  const faqs = [
    {
      q: 'How much does mobile auto detailing cost in Reno, NV?',
      a: 'Pricing depends on vehicle size and the service selected. Exterior packages start at $200+. For a full interior & exterior detail, the average client should expect to spend between $250 and $400. Because every vehicle is different, we require you to submit a form to get a custom quote.',
    },
    {
      q: 'How long does a full car detail take?',
      a: 'A full interior & exterior detail typically takes 3–5 hours depending on the vehicle\'s size and condition. Ceramic coating installs take 1–2 days. We work efficiently without cutting corners — you can go about your day while we handle everything on-site.',
    },
    {
      q: 'Is ceramic coating worth it in Reno\'s climate?',
      a: 'Absolutely. Reno\'s 300+ days of intense UV, high-elevation sun, road salt from Tahoe trips, and desert dust make ceramic coating one of the best investments you can make for your vehicle. A professionally applied ceramic coating provides years of hydrophobic protection, UV resistance, and keeps your paint looking factory-fresh.',
    },
    {
      q: 'Do I need to be home during the detailing appointment?',
      a: 'No. As long as we have access to your vehicle and keys (for interior work), you don\'t need to be present. We are 100% self-sustained with our own power, water, and equipment — whether that\'s your driveway, garage, or office parking lot.',
    },
    {
      q: 'What\'s the difference between a car wash and a professional detail?',
      a: 'A car wash removes surface dirt; a professional detail restores and protects. We use pH-balanced soaps, clay bar decontamination, machine polishing, and premium protectants to eliminate swirl marks, oxidation, and embedded grime that automated washes simply cannot address. The result is a finish that lasts months, not days.',
    },
    {
      q: 'What areas in Reno & Sparks do you service?',
      a: 'We provide mobile auto detailing throughout the greater Reno-Sparks metro area including Reno, Sparks, Spanish Springs, South Meadows, Montrêux, and Verdi. Not sure if we cover your area? Give us a call — we\'re flexible.',
    },
    {
      q: 'How often should I get my car detailed?',
      a: 'For most drivers in Reno, we recommend a full detail every 3–4 months due to the harsh desert environment. Vehicles with ceramic coatings need less frequent deep cleans — a maintenance wash every 6–8 weeks keeps the coating performing at its best. Daily drivers and vehicles parked outside benefit most from regular protection.',
    },
    {
      q: 'Why do you use deionized water for car detailing?',
      a: 'Reno has notoriously hard water — tap water leaves mineral deposits that etch into clear coat over time. Our deionized water is purified to 0 PPM, delivering a completely spot-free rinse that protects your paint and leaves zero residue. It\'s one of the details that separates a professional detail from a DIY wash.',
    },
  ];

  // ── Google Sheets – paste your Apps Script Web App URL below ──────────────
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzjliWvpaLq1Lzo9Y_Wyq8q0URwRRhPXwAUw3JTvrubtlAqRYB3BaCgUdGZG93_gAzD/exec';
  // ──────────────────────────────────────────────────────────────────────────

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
    <div className="min-h-screen bg-don-black text-don-cream font-sans selection:bg-don-gold/30">
      {/* Global Noise Overlay for premium film grain effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise"></div>

      {/* Sticky Header */}
      <header className="fixed top-0 w-full z-50 bg-don-black/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-16 w-auto" />
          </div>
          <a href="tel:+17752307035" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-don-black bg-don-gold hover:bg-don-gold/90 px-6 py-2.5 rounded-sm transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a href="tel:+17752307035" className="md:hidden flex items-center justify-center w-10 h-10 bg-don-gold text-don-black rounded-sm">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-don-black/50 via-don-black/80 to-don-black" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">

            <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-don-cream">
              Reno's Premier <span className="text-don-gold italic">Mobile Auto Detailing</span>
            </h1>
            <p className="text-lg lg:text-xl text-don-cream/80 font-light leading-relaxed mb-10">
              Luxury isn't just driven. It’s preserved. Don of Detail brings the gold standard of car detailing and ceramic coating directly to your driveway in Reno, NV.
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
          <div id="quote" className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-xl shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-don-gold to-transparent opacity-50 rounded-t-xl" />

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
                <p className="text-don-cream/60 text-sm mb-8 font-light tracking-wide">Serving Reno &amp; Sparks — we'll come to you. Most quotes answered within the hour.</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="James"
                        className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Bond"
                        className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(775) 230-7035"
                        className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="james@example.com"
                        className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Vehicle Make/Model</label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      placeholder="e.g. 2018 Toyota Tacoma"
                      className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Primary Concern</label>
                    <div className="relative">
                      <select required name="service" defaultValue="" className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3 text-don-cream appearance-none focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all">
                        <option value="" disabled className="text-don-black">Select a service...</option>
                        <option value="interior" className="text-don-black">Interior Detail</option>
                        <option value="exterior" className="text-don-black">Exterior Detail</option>
                        <option value="interior-exterior" className="text-don-black">Interior &amp; Exterior Detail</option>
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
                  <button type="submit" className="w-full bg-don-gold hover:bg-don-gold/90 text-don-black font-bold uppercase tracking-widest py-4 rounded-sm mt-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10 flex items-center gap-2">CLAIM MY FREE QUOTE <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" /></span>
                  </button>
                  <p className="text-center text-[10px] text-don-cream/40 uppercase tracking-widest mt-3 flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3 text-don-gold/70" /> 100% Free · No Obligation
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-24 bg-don-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
              The Reno Toll: Is Your Investment Surviving the High Desert?
            </h2>
            <div className="w-24 h-1 bg-don-gold mx-auto mb-6"></div>
            <p className="text-don-cream/70 text-lg font-light">
              Standard car washes strip wax and induce swirl marks. In Northern Nevada, your vehicle faces a unique set of environmental hazards that demand a higher standard of care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl">
              <div className="relative w-16 h-16 rounded-full mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-don-gold/40 bg-don-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm" />
                <Sun className="w-8 h-8 text-don-gold relative z-10" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">300 Days of UV Burn</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                At 4,500+ feet, UV radiation is significantly stronger. The high-elevation sun bakes clear coats, "chalks" paint, and cracks premium leather dashboards at an accelerated rate.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl">
              <div className="relative w-16 h-16 rounded-full mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-don-gold/40 bg-don-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm" />
                <Wind className="w-8 h-8 text-don-gold relative z-10" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">The 'Washoe Zephyr' Grit</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                High-desert wind deposits fine silica grit across every panel. That dust is harmless in the air — but the moment it's wiped away with a rag, a gas-station squeegee, or even a sleeve, those particles drag across your clear coat like sandpaper, leaving micro-scratches that permanently dull the finish.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl">
              <div className="relative w-16 h-16 rounded-full mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-don-gold/40 bg-don-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm" />
                <Snowflake className="w-8 h-8 text-don-gold relative z-10" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">Sierra Road Salt</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                Winter trips to Tahoe leave corrosive magnesium chloride and road salt clinging to your undercarriage and lower panels, quietly eating away at your vehicle's value.
              </p>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-16">
            <p className="text-don-cream/60 text-sm uppercase tracking-widest mb-4">Ready to protect your investment?</p>
            <a href="#quote" className="inline-flex items-center gap-2 bg-don-gold text-don-black font-bold uppercase tracking-widest px-8 py-4 rounded-sm transition-all hover:bg-don-gold/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Instagram Feed Embed Simulation */}
              <div className="bg-don-black border border-white/10 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
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
                    className="bg-don-gold text-don-black text-xs font-bold px-4 py-1.5 rounded-sm hover:bg-don-gold/90 transition-colors"
                  >
                    Follow
                  </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-0.5 bg-don-black">
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig1.jpg" alt="Mobile auto detailing Reno NV - paint correction on Porsche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                  </a>
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig2.jpg" alt="Ceramic coating service Reno Nevada - BMW detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                  </a>
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig3.jpg" alt="Don of Detail mobile car detailing Reno - Mercedes exterior treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                  </a>
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig4.jpg" alt="Paint protection and full detail Reno NV - Range Rover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
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
              <p className="text-don-cream/70 text-lg mb-12 font-light">
                Secure your slot in three simple steps. We handle the rest.
              </p>

              {/* Scroll-driven connecting line */}
              <div ref={stepsRef} className="relative">
                {/* Track — from center of icon 1 to center of icon 3 */}
                <div
                  className="absolute left-7 top-7 w-px bg-white/10"
                  style={{ height: lineTrackHeight }}
                />
                {/* Gold fill */}
                <div
                  className="absolute left-7 top-7 w-px bg-gradient-to-b from-don-gold to-don-gold/60 transition-none"
                  style={{
                    height: lineProgress * lineTrackHeight,
                    boxShadow: lineProgress > 0 ? '0 0 8px 1px rgba(212,175,55,0.5)' : 'none',
                  }}
                />

                <div className="space-y-12 relative z-10">
                  {[
                    { Icon: ClipboardList, title: 'Request a Quote', body: 'Fill out our brief online form with your vehicle details and location. We review every request personally and typically respond with a custom quote within the hour.' },
                    { Icon: CalendarCheck, title: 'Schedule & Confirm', body: "Once you approve the quote, we'll find a time that works perfectly with your schedule. No need to clear your whole day — we bring our fully-equipped mobile unit directly to your home or office." },
                    { Icon: Sparkles, title: 'Experience the Standard', body: 'Hand us the keys and relax. We execute our meticulous detailing process, transforming your vehicle right where it sits. You get a dealership-ready finish without ever leaving your driveway.' },
                  ].map(({ Icon, title, body }, i) => {
                    const threshold = i / 2; // 0, 0.5, 1.0
                    const isActive = lineProgress >= threshold;
                    return (
                      <div key={title} className="flex items-start gap-6">
                        <div
                          ref={(el) => { iconRefs.current[i] = el; }}
                          className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-don-black transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                        >
                          <div className={`absolute inset-0 rounded-full border transition-all duration-500 ${isActive
                            ? 'border-don-gold bg-don-gold/20 shadow-[0_0_24px_4px_rgba(212,175,55,0.55)]'
                            : 'border-don-gold/30 bg-don-gold/5 shadow-[0_0_10px_rgba(212,175,55,0.1)]'
                            }`} />
                          <Icon
                            className={`w-6 h-6 relative z-10 transition-colors duration-500 ${isActive ? 'text-don-gold' : 'text-don-gold/50'}`}
                            strokeWidth={isActive ? 2 : 1.5}
                          />
                        </div>
                        <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                          <h4 className="text-2xl font-serif font-bold mb-3 text-don-cream">{title}</h4>
                          <p className="text-don-cream/70 font-light leading-relaxed text-lg">{body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & FAQ Section */}
      <section className="py-24 bg-don-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          {/* Testimonials Carousel */}
          <div className="mb-24 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Google', color: '#4285F4' },
                ].map(({ name, color }) => (
                  <div key={name} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
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
              <span className="text-don-cream/50 text-xs uppercase tracking-widest">70+ Google Reviews</span>
            </div>

            {/* Card */}
            <div className="relative bg-white/5 border border-white/10 rounded-xl p-10 text-center overflow-hidden min-h-[440px] md:min-h-[340px] flex flex-col justify-center">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-10 ${i === activeTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-don-gold fill-don-gold" />)}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-serif italic text-don-cream leading-snug mb-6">
                    "{t.quote}"
                  </blockquote>
                  <cite className="text-don-cream/60 uppercase tracking-widest text-xs not-italic font-semibold">
                    — {t.author}, {t.location}
                  </cite>
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
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-don-cream">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 hover:bg-white/[0.07] transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left cursor-pointer"
                    aria-expanded={openFaq === i}
                  >
                    <h4 className="text-lg font-serif font-bold text-don-gold leading-snug">{faq.q}</h4>
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
      <section className="py-24 bg-don-gold text-don-black text-center relative overflow-hidden">

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Quit driving a dirty car.
          </h2>
          <p className="text-xl lg:text-2xl font-medium mb-12 opacity-90 font-sans">
            Protect your resale value with the best mobile detailing in Reno.
          </p>
          <a href="#quote" className="inline-flex items-center justify-center gap-3 bg-don-black text-don-gold hover:bg-[#1a1a1a] font-bold uppercase tracking-widest px-10 py-5 rounded-sm transition-all hover:scale-105 active:scale-95 shadow-2xl w-full sm:w-auto">
            GET MY QUOTE
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-don-black py-12 border-t border-white/10 text-center text-don-cream/40 text-sm font-light tracking-wide pb-24 md:pb-12">
        <div className="flex justify-center items-center mb-4">
          <Logo className="w-12 h-12 object-contain opacity-70" />
        </div>
        <p>&copy; {new Date().getFullYear()} Don of Detail. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3 text-xs">
          <Link to="/terms" className="hover:text-don-gold transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-don-gold transition-colors">Privacy Policy</Link>
        </div>
      </footer>    </div>
  );
}
