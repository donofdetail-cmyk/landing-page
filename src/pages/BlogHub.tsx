import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { Link } from 'react-router-dom';

export default function BlogHub() {
  return (
    <ServiceLayout>
      <Helmet>
        <title>Detailing & Protection Blog | Don of Detail</title>
        <meta name="description" content="Reno auto detailing blog by Don of Detail. Expert tips on ceramic coatings, paint correction, and vehicle maintenance for Northern Nevada's climate." />
        <link rel="canonical" href="https://www.donofdetail.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Detailing &amp; Protection Blog | Don of Detail" />
        <meta property="og:description" content="Reno auto detailing blog by Don of Detail. Expert tips on ceramic coatings, paint correction, and vehicle maintenance for Northern Nevada's climate." />
        <meta property="og:url" content="https://www.donofdetail.com/blog" />
        <meta property="og:image" content="https://www.donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Detailing &amp; Protection Blog | Don of Detail" />
        <meta name="twitter:description" content="Reno auto detailing blog by Don of Detail. Expert tips on ceramic coatings, paint correction, and vehicle maintenance for Northern Nevada's climate." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Editorial</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            The<br/>Journal.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl">
            Technical guides, maintenance advice, and deep dives into high-end automotive preservation.
          </p>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="py-32 lg:py-48 bg-don-bark text-don-oat px-6 lg:px-12 min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">

          <Link to="/blog/is-ceramic-coating-worth-it-reno" className="block group border-b border-don-clay/20 pb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Ceramic Coating</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-2px] mb-6 text-don-oat group-hover:text-don-clay transition-colors">
              Is ceramic coating worth it in Nevada?
            </h2>
            <p className="text-don-clay font-light leading-relaxed mb-8 max-w-xl">
              Reno sun damages clear coat fast. Read why physical paint preservation is the only way to protect your investment in Nevada.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">May 10, 2026</span>
              <span className="text-don-clay/40">·</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">5 min read</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat border-b border-don-oat pb-2 group-hover:text-don-clay group-hover:border-don-clay transition-colors">
              Read Article
            </span>
          </Link>

          <Link to="/blog/the-truth-about-automatic-car-washes" className="block group border-b border-don-clay/20 pb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Education</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-2px] mb-6 text-don-oat group-hover:text-don-clay transition-colors">
              The Truth About Automatic Car Washes
            </h2>
            <p className="text-don-clay font-light leading-relaxed mb-8 max-w-xl">
              Why the convenience of an automatic wash is destroying your clear coat. Read exactly what those spinning brushes do to your paint.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">May 28, 2026</span>
              <span className="text-don-clay/40">·</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">6 min read</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat border-b border-don-oat pb-2 group-hover:text-don-clay group-hover:border-don-clay transition-colors">
              Read Article
            </span>
          </Link>

          <Link to="/blog/how-to-wash-a-ceramic-coated-car" className="block group border-b border-don-clay/20 pb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Education</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-2px] mb-6 text-don-oat group-hover:text-don-clay transition-colors">
              How To Wash Your Car After a Ceramic Coating
            </h2>
            <p className="text-don-clay font-light leading-relaxed mb-8 max-w-xl">
              A ceramic coating is the ultimate armor for your paint, but it requires discipline to maintain. Learn the exact two-bucket method to preserve your investment.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">June 3, 2026</span>
              <span className="text-don-clay/40">·</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">5 min read</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat border-b border-don-oat pb-2 group-hover:text-don-clay group-hover:border-don-clay transition-colors">
              Read Article
            </span>
          </Link>

          <Link to="/blog/preparing-boat-rv-for-lake-tahoe" className="block group border-b border-don-clay/20 pb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Boat & RV</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-2px] mb-6 text-don-oat group-hover:text-don-clay transition-colors">
              Preparing Your Boat or RV for Lake Tahoe
            </h2>
            <p className="text-don-clay font-light leading-relaxed mb-8 max-w-xl">
              Lake Tahoe's high-altitude UV rays destroy marine gelcoat fast. Learn why physical oxidation removal and marine-grade ceramic coatings are mandatory for preservation.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">June 15, 2026</span>
              <span className="text-don-clay/40">·</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">6 min read</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat border-b border-don-oat pb-2 group-hover:text-don-clay group-hover:border-don-clay transition-colors">
              Read Article
            </span>
          </Link>

          <Link to="/blog/paint-correction-vs-waxing" className="block group border-b border-don-clay/20 pb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Education</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-2px] mb-6 text-don-oat group-hover:text-don-clay transition-colors">
              Paint Correction vs. Waxing
            </h2>
            <p className="text-don-clay font-light leading-relaxed mb-8 max-w-xl">
              Applying wax over scratched paint is a temporary illusion. Discover why professional paint correction is the only permanent solution for a flawless clear coat.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">June 22, 2026</span>
              <span className="text-don-clay/40">·</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">5 min read</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat border-b border-don-oat pb-2 group-hover:text-don-clay group-hover:border-don-clay transition-colors">
              Read Article
            </span>
          </Link>

        </div>
      </section>
    </ServiceLayout>
  );
}
