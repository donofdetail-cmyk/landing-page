import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Packages() {
  return (
    <div className="min-h-screen bg-don-oat text-don-ink font-sans selection:bg-don-ink selection:text-don-oat">
      <Helmet>
        <title>Detailing Packages | Don of Detail</title>
        <meta name="description" content="Explore our exclusive auto detailing packages." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header hideQuote />

      <main className="focus:outline-none" tabIndex={-1}>
        
        {/* Hero Section - Matching Home.tsx scale */}
        <section className="relative flex flex-col justify-center pt-32 pb-20 px-6 lg:px-12 bg-don-oat border-b border-don-clay/10">
          <div className="max-w-[1400px] mx-auto w-full text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-don-red mb-8 md:mb-12">
              Client Packages
            </p>
            <h1 className="text-[10vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-4px] text-don-ink mb-8 uppercase max-w-full break-words">
              Direct Pricing.
            </h1>
            <p className="text-lg md:text-xl font-light text-don-ink/70 leading-relaxed max-w-2xl">
              Below are our tiered restoration and preservation packages. 
              Review the inclusions carefully to determine the appropriate level of service for your vehicle.
            </p>
          </div>
        </section>

        {/* EXTERIOR SECTION - Dark bark background */}
        <section className="bg-don-bark text-don-oat py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-[8vw] sm:text-6xl md:text-8xl font-display uppercase tracking-[-2px] md:tracking-[-3px] text-don-oat max-w-full break-words leading-[0.85]">
                Exterior<br/>Detailing.
              </h2>
              <p className="text-don-clay mt-6 max-w-md text-lg">Select the level of exterior restoration and protection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Level 1 */}
              <div className="bg-don-oat text-don-ink rounded shadow-sm border-none p-8 lg:p-10">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Level 1 Exterior Detail</h3>
                <p className="text-don-ink/70 text-sm mt-2 mb-6 min-h-[40px]">A maintenance exterior detail to safely clean and protect your vehicle. Ideal for regularly maintained cars that need a solid refresh and added shine.</p>
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">Sedan / Coupe</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$95</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">SUV / Truck</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$145</span>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">Oversized / 3rd Row</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$195</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Hand wash</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Wheels & tires cleaned</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Tire shine applied</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Exterior glass cleaned</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Light paint protection</span></li>
                </ul>
              </div>

              {/* Level 2 (Most Popular) */}
              <div className="bg-don-ink rounded shadow-2xl border-t-4 border-t-don-red p-8 lg:p-10 transform lg:-translate-y-8 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-don-red text-don-oat px-5 py-2 rounded text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <Star size={14} fill="currentColor" /> The Standard
                </div>
                <h3 className="text-2xl font-bold text-don-oat uppercase tracking-wide">Level 2 Exterior Detail</h3>
                <p className="text-don-clay text-sm mt-2 mb-6 min-h-[40px]">A thorough exterior decontamination detail designed to remove built-up grime, contaminants, and embedded debris. This service restores a smoother finish and prepares the paint for better shine and protection.</p>
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">Sedan / Coupe</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$195</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">SUV / Truck</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$245</span>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">Oversized / 3rd Row</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$295</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-bold">Everything in Level 1, plus:</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat/90 font-medium">Iron removal treatment</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat/90 font-medium">Clay bar decontamination</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat/90 font-medium">Bug & tar removal</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat/90 font-medium">Deeper wheel cleaning</span></li>
                </ul>
              </div>

              {/* Level 3 */}
              <div className="bg-don-oat text-don-ink rounded shadow-sm border-none p-8 lg:p-10">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Level 3 Exterior Detail</h3>
                <p className="text-don-ink/70 text-sm mt-2 mb-6 min-h-[40px]">A premium exterior enhancement designed to improve gloss, clarity, and overall finish. This service includes a light machine polish to reduce minor imperfections and restore depth to the paint, followed by upgraded protection for a longer-lasting shine.</p>
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">Sedan / Coupe</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$495</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">SUV / Truck</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$545</span>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">Oversized / 3rd Row</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$595</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-bold">Everything in Level 2, plus:</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Machine polish (light swirl removal)</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Gloss enhancement</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Paint prep wipe down</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Upgraded protection</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INTERIOR SECTION - Ink background */}
        <section className="bg-don-ink text-don-oat py-24 lg:py-32 px-6 lg:px-12 border-t border-don-clay/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-[8vw] sm:text-6xl md:text-8xl font-display uppercase tracking-[-2px] md:tracking-[-3px] text-don-oat max-w-full break-words leading-[0.85]">
                Interior<br/>Detailing.
              </h2>
              <p className="text-don-clay mt-6 max-w-md text-lg">Select the level of interior deep cleaning required.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Level 1 */}
              <div className="bg-don-bark text-don-oat rounded shadow-sm border border-don-clay/10 p-8 lg:p-10">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Level 1 Interior Detail</h3>
                <p className="text-don-clay text-sm mt-2 mb-6 min-h-[40px]">A light maintenance interior detail for well-kept vehicles. This service focuses on a clean, refreshed cabin with a full vacuum, surface wipe down, and attention to the small details to keep your interior looking its best.</p>
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">Sedan / Coupe</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$95</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">SUV / Truck</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$145</span>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">Oversized / 3rd Row</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$195</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Full vacuum (seats, carpets, mats)</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Wipe down of all surfaces</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Interior glass cleaned</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Light dusting & crevices</span></li>
                </ul>
              </div>

              {/* Level 2 (Most Popular) */}
              <div className="bg-don-oat text-don-ink rounded shadow-2xl border-t-4 border-t-don-red p-8 lg:p-10 transform lg:-translate-y-8 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-don-red text-don-oat px-5 py-2 rounded text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <Star size={14} fill="currentColor" /> The Standard
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">Level 2 Interior Detail</h3>
                <p className="text-don-ink/70 text-sm mt-2 mb-6 min-h-[40px]">A deep interior cleaning designed to remove built-up dirt and restore a clean, refreshed feel. This service goes beyond maintenance with deeper cleaning of surfaces, targeted steam cleaning, and attention to stains and higher-traffic areas.</p>
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">Sedan / Coupe</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$245</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">SUV / Truck</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$295</span>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <span className="text-xs font-bold text-don-ink/70 uppercase tracking-widest">Oversized / 3rd Row</span>
                    <span className="text-3xl font-display text-don-ink leading-none">$345</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-bold">Everything in Level 1, plus:</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Deep cleaning of surfaces</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Steam cleaning (target areas)</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Floor mats deep cleaned</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Light stain removal</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">Moderate pet hair removal</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-ink font-medium">UV protection applied to dash & trim</span></li>
                </ul>
              </div>

              {/* Level 3 */}
              <div className="bg-don-bark text-don-oat rounded shadow-sm border border-don-clay/10 p-8 lg:p-10">
                <h3 className="text-2xl font-bold uppercase tracking-wide">Level 3 Interior Detail</h3>
                <p className="text-don-clay text-sm mt-2 mb-6 min-h-[40px]">A full interior reset for heavily used or neglected vehicles. This service includes deep steam cleaning, carpet and upholstery extraction, and intensive stain and odor treatment to restore the interior as close to like-new condition as possible.</p>
                <div className="mb-8 space-y-3">
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">Sedan / Coupe</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$395</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-don-clay/20 pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">SUV / Truck</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$445</span>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <span className="text-xs font-bold text-don-oat/70 uppercase tracking-widest">Oversized / 3rd Row</span>
                    <span className="text-3xl font-display text-don-oat leading-none">$495</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-bold">Everything in Level 2, plus:</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Full steam cleaning</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Carpet & seat extraction</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Heavy stain removal</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Heavy pet hair removal</span></li>
                  <li className="flex items-start"><Check className="text-don-red mr-3 shrink-0" size={24} strokeWidth={3} /> <span className="text-don-oat font-medium">Odor treatment</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12 text-center flex flex-col justify-center items-center">
          <h2 className="text-[10vw] md:text-8xl font-display uppercase tracking-[-3px] md:tracking-[-4px] mb-6">
            Ready to book?
          </h2>
          <p className="text-lg font-light text-don-clay max-w-xl mx-auto mb-12">
            Text us your desired package tier to secure your appointment.
          </p>
          <a href="sms:+17752307035" className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-12 py-5 rounded hover:bg-don-red/90 transition-transform hover:scale-105 active:scale-95 mb-8">
            Text To Book
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-don-clay">
            Or call: <a href="tel:+17752307035" className="hover:text-don-oat transition-colors">(775) 230-7035</a>
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
