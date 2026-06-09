import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';

export default function About() {
  return (
    <ServiceLayout>
      <Helmet>
        <title>About Don of Detail | Mobile Detailing Experts in Reno, NV</title>
        <meta name="description" content="Learn about Logan and Don of Detail, Reno's premier mobile auto detailing service. We bring studio-level paint correction and ceramic coating directly to your driveway." />
        <link rel="canonical" href="https://donofdetail.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Don of Detail | Reno, NV" />
        <meta property="og:description" content="Learn about Logan and Don of Detail, Reno's premier mobile auto detailing service. We bring studio-level paint correction and ceramic coating directly to your driveway." />
        <meta property="og:url" content="https://donofdetail.com/about" />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Don of Detail",
              "url": "https://donofdetail.com",
              "logo": "https://donofdetail.com/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Logan"
              },
              "description": "Mobile auto detailing, paint correction, and ceramic coating specialists serving Reno and Sparks, Nevada."
            }
          }`}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">The Company</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Meet the<br/>Team.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Don of Detail was built on a singular premise: uncompromising quality delivered directly to your driveway. We don't run a volume-based car wash. We operate a mobile studio dedicated to automotive preservation.
          </p>
        </div>
      </section>

      {/* The Operator Section */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-8">The Operator</p>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-[-2px] mb-8">Meet Logan.</h2>
            <div className="space-y-6 font-light text-don-clay leading-relaxed text-lg">
              <p>
                My name is Logan, and I am the owner and lead operator of Don of Detail. I started this company because I saw a gap in the Northern Nevada market: plenty of places could wash a car, but very few understood the complex chemistry of modern clear coats, the nuances of gel coat restoration, or the specific environmental challenges our vehicles face in the high desert.
              </p>
              <p>
                When you book with Don of Detail, you don't get a random crew of untrained technicians rushing to meet a quota. You get me. I personally oversee every paint correction phase, every ceramic coating application, and every meticulous interior restoration.
              </p>
              <p className="text-don-oat">
                My reputation is bonded to every vehicle I touch. I treat your investment exactly as I treat my own.
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] bg-don-ink/50 relative overflow-hidden group">
            <img 
              src="/logan-don-of-detail.jpg" 
              alt="Logan - Owner and Lead Operator of Don of Detail Reno NV" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.8] contrast-110"
            />
            <div className="absolute inset-0 border border-don-oat/10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* The Standard Section */}
      <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px]">
            The Mobile<br/>Studio Standard.
          </h2>
          <div className="space-y-12">
            <div className="space-y-6 font-light text-don-clay leading-relaxed text-lg">
              <p>
                True detailing requires a controlled environment, pure water, specialized lighting, and absolute focus. Historically, this meant leaving your vehicle at a shop for days. We've engineered our mobile unit to bring that exact studio environment to you.
              </p>
              <p>
                Operating completely self-sufficiently, we supply our own spot-free deionized water and power. We utilize pH-neutral enzymatic cleaners, professional-grade SiO2 ceramic polymers, precision rotary buffers, and dual-action polishers. We don't cut corners with heavy fillers or glazes that wash away after a week. We permanently correct the clear coat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
