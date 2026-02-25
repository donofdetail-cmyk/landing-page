import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Snowflake, Droplets, Shield, Star, CheckCircle, Phone, ChevronDown, Award, Instagram } from 'lucide-react';

const Logo = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/logo.png"
    alt="Don of Detail logo"
    className={className}
    style={{ mixBlendMode: 'lighten', ...style }}
  />
);

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-don-black/50 via-don-black/80 to-don-black" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-don-gold/10 border border-don-gold/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-don-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-don-gold"></span>
              </span>
              <span className="text-don-gold text-xs font-bold tracking-widest uppercase">Now Booking</span>
            </div>
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
          <div id="quote" className="relative bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 p-8 lg:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Ambient luxury glow inside the card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-don-gold opacity-10 blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-don-gold/50 to-transparent" />

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-[400px] text-center animate-in fade-in zoom-in duration-500 relative z-10">
                <div className="w-20 h-20 bg-don-gold/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <CheckCircle className="w-10 h-10 text-don-gold" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-3 tracking-tight">Request Received</h3>
                <p className="text-don-cream/60 font-light text-lg">We will be in touch with you shortly.</p>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-10 text-center sm:text-left">
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-white tracking-tight">Request a Quote</h2>
                  <p className="text-don-cream/50 text-sm font-light tracking-wide">Serving Reno &amp; Sparks — we'll come to you. Most quotes answered within the hour.</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-don-cream/40 mb-2.5 transition-colors group-focus-within:text-don-gold/80">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="James"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-don-cream text-sm placeholder:text-don-cream/20 focus:outline-none focus:ring-1 focus:ring-don-gold/50 focus:border-don-gold/50 hover:border-white/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-don-cream/40 mb-2.5 transition-colors group-focus-within:text-don-gold/80">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Bond"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-don-cream text-sm placeholder:text-don-cream/20 focus:outline-none focus:ring-1 focus:ring-don-gold/50 focus:border-don-gold/50 hover:border-white/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-don-cream/40 mb-2.5 transition-colors group-focus-within:text-don-gold/80">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(775) 230-7035"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-don-cream text-sm placeholder:text-don-cream/20 focus:outline-none focus:ring-1 focus:ring-don-gold/50 focus:border-don-gold/50 hover:border-white/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-don-cream/40 mb-2.5 transition-colors group-focus-within:text-don-gold/80">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="james@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-don-cream text-sm placeholder:text-don-cream/20 focus:outline-none focus:ring-1 focus:ring-don-gold/50 focus:border-don-gold/50 hover:border-white/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-don-cream/40 mb-2.5 transition-colors group-focus-within:text-don-gold/80">Vehicle Make/Model</label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      placeholder="e.g. 2018 Toyota Tacoma"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-don-cream text-sm placeholder:text-don-cream/20 focus:outline-none focus:ring-1 focus:ring-don-gold/50 focus:border-don-gold/50 hover:border-white/20 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-don-cream/40 mb-2.5 transition-colors group-focus-within:text-don-gold/80">Primary Concern</label>
                    <div className="relative">
                      <select required name="service" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-don-cream text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-don-gold/50 focus:border-don-gold/50 hover:border-white/20 focus:bg-white/10 transition-all duration-300 cursor-pointer">
                        <option value="" disabled className="text-don-black">Select a service...</option>
                        <option value="interior" className="text-don-black">Interior Detail</option>
                        <option value="exterior" className="text-don-black">Exterior Detail</option>
                        <option value="interior-exterior" className="text-don-black">Interior &amp; Exterior Detail</option>
                        <option value="paint-correction" className="text-don-black">Paint Correction</option>
                        <option value="ceramic-coating" className="text-don-black">Ceramic Coating</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-don-gold/70 group-hover:text-don-gold transition-colors pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#D4AF37] cursor-pointer"
                      />
                      <span className="text-[11px] text-don-cream/40 leading-relaxed font-light">
                        By submitting this form, I authorize Don of Detail LLC to contact me via phone and/or SMS text message at the number provided regarding my quote and services. Message &amp; data rates may apply. View our{' '}
                        <Link to="/terms" className="text-white hover:text-don-gold transition-colors">Terms of Service</Link>{' '}and{' '}
                        <Link to="/privacy" className="text-white hover:text-don-gold transition-colors">Privacy Policy</Link>.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full bg-don-gold text-don-black font-bold text-[11px] uppercase tracking-[0.2em] py-5 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-[#F9E29C] hover:-translate-y-0.5 flex items-center justify-center gap-3 group relative overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                      <span className="relative z-10 flex items-center gap-2">CLAIM MY FREE QUOTE <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" /></span>
                    </button>
                    <p className="text-center text-[9px] text-don-cream/30 uppercase tracking-[0.2em] mt-5 flex items-center justify-center gap-2">
                      <Shield className="w-3 h-3 text-don-gold/50" /> 100% Free · No Obligation
                    </p>
                  </div>
                </form>
              </div>
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
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="relative w-16 h-16 rounded-full mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full border border-don-gold/40 bg-don-gold/5 group-hover:bg-don-gold/10 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm" />
                <Sun className="w-8 h-8 text-don-gold relative z-10" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">300 Days of UV Burn</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                At 4,500+ feet, UV radiation is significantly stronger. The high-elevation sun bakes clear coats, "chalks" paint, and cracks premium leather dashboards at an accelerated rate.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="relative w-16 h-16 rounded-full mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full border border-don-gold/40 bg-don-gold/5 group-hover:bg-don-gold/10 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm" />
                <Wind className="w-8 h-8 text-don-gold relative z-10" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">The 'Washoe Zephyr' Grit</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                Desert wind turns dust into sandpaper. Every time you drive through a dusty valley, micro-abrasions cut into your clear coat, permanently dulling the finish if left unprotected.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="relative w-16 h-16 rounded-full mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full border border-don-gold/40 bg-don-gold/5 group-hover:bg-don-gold/10 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm" />
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
                        <img src="/ig-avatar.jpg" alt="Don of Detail Instagram" className="w-full h-full object-cover rounded-full" />
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
                    <img src="/ig1.jpg" alt="Mobile auto detailing Reno NV - paint correction on Porsche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </a>
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig2.jpg" alt="Ceramic coating service Reno Nevada - BMW detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </a>
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig3.jpg" alt="Don of Detail mobile car detailing Reno - Mercedes exterior treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </a>
                  <a href="https://instagram.com/donofdetail" target="_blank" rel="noopener noreferrer" className="aspect-square relative group overflow-hidden block">
                    <img src="/ig4.jpg" alt="Paint protection and full detail Reno NV - Range Rover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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

              <div className="absolute -bottom-6 -right-6 bg-don-black border border-don-gold/30 p-6 rounded-xl shadow-2xl hidden md:block z-10">
                <Logo className="w-12 h-12 object-contain mb-2" />
                <p className="text-lg font-serif font-bold text-don-cream">Your Car. Our Obsession.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
                The Reno Mobile Detailing Standard.
              </h2>
              <p className="text-don-cream/70 text-lg mb-12 font-light">
                We don't just wash cars; we engineer preservation systems designed specifically for the high desert climate.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-don-gold/10 border border-don-gold/30 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-don-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-2 text-don-cream">Zero Scratches. Zero Swirls.</h4>
                    <p className="text-don-cream/70 font-light leading-relaxed">We use a strict two-bucket hand wash method with pH-neutral, paint-safe soaps — no automated brushes, no harsh chemicals. Every surface is treated with microfiber cloths to leave your finish flawless, not damaged.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-don-gold/10 border border-don-gold/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-don-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-2 text-don-cream">Protection That Actually Lasts</h4>
                    <p className="text-don-cream/70 font-light leading-relaxed">We apply professional-grade ceramic coatings and sealants that bond to your paint — not just sit on top of it. The result is months or years of UV, water, and contaminant resistance, not the weeks you get from a dealership detail.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-don-gold/10 border border-don-gold/30 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-don-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-2 text-don-cream">We Come to You — Always</h4>
                    <p className="text-don-cream/70 font-light leading-relaxed">No drop-offs, no waiting rooms, no wasted time. We bring a fully self-contained setup — water, power, and everything needed — directly to your home, office, or job site. Premium results delivered to your door, on your schedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & FAQ Section */}
      <section className="py-24 bg-don-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-7 h-7 text-don-gold fill-don-gold" />
                ))}
              </div>
              <span className="text-don-cream/50 text-xs uppercase tracking-widest">5.0 · Google Reviews</span>
            </div>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-don-cream leading-snug mb-8">
              "Been using them since my last vehicle. Always amazing results. Love how convenient it is coming to my work. Very responsive with scheduling which makes it easy to work around my busy life."
            </blockquote>
            <cite className="text-don-cream/60 uppercase tracking-widest text-sm not-italic font-semibold">
              — Lisa G., Reno, NV
            </cite>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-don-cream">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-serif font-bold mb-3 text-don-gold">Do I need to be home for the mobile detailing service?</h4>
                <p className="text-don-cream/70 font-light leading-relaxed">Not at all. As long as we have access to the vehicle and the keys (if interior work is requested), you can be at work, running errands, or relaxing inside. We are 100% self-sustained with our own power and water.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-serif font-bold mb-3 text-don-gold">What areas in Reno &amp; Sparks do you service?</h4>
                <p className="text-don-cream/70 font-light leading-relaxed">We provide mobile auto detailing to Reno, Sparks, Spanish Springs, South Meadows, Montrêux, and Verdi.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-serif font-bold mb-3 text-don-gold">Why do you use deionized water for car detailing?</h4>
                <p className="text-don-cream/70 font-light leading-relaxed">Reno has notoriously hard water. Washing a car with tap water leaves mineral deposits that etch into the clear coat. Our deionized water is purified to 0 PPM, ensuring a perfect, spot-free finish that preserves your paint.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-don-gold text-don-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gold-texture.jpg')] opacity-10 mix-blend-overlay bg-cover bg-center" />
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
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-don-black to-transparent z-50 md:hidden pointer-events-none">
        <a href="tel:+17752307035" className="w-full bg-don-gold text-don-black font-bold uppercase tracking-widest py-4 rounded-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] pointer-events-auto">
          <Phone className="w-5 h-5" />
          Tap to Call Now
        </a>
      </div>
    </div>
  );
}
