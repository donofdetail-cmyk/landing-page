import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { useBooking } from '../context/BookingContext';
import { reviews, formatName } from '../data/reviews';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How much does mobile auto detailing cost in Sparks, NV?", a: "Mobile auto detailing in Sparks typically costs between $200 and $400 depending on vehicle size and the service selected. Exterior-only packages start at $200+. For a full interior & exterior detail, most clients spend $250 to $400. Because every vehicle is different, we provide custom quotes after you submit a brief form." },
  { q: "Is ceramic coating worth it in Nevada's climate?", a: "Yes. Ceramic coating is one of the best investments for vehicles in the Reno-Sparks area. Sparks gets 300+ days of intense UV at 4,500+ feet of elevation, constant desert dust, and corrosive de-icing chemicals in winter. Ceramic coating provides years of hydrophobic protection, UV resistance, and keeps your paint looking factory-fresh." },
  { q: "What areas in Reno & Sparks do you service?", a: "We provide mobile auto detailing throughout the greater Reno-Sparks metro area including Reno, Sparks, Spanish Springs, Verdi, Sun Valley, Hidden Valley, Golden Valley, Mogul, and Cold Springs. Not sure if we cover your area? Give us a call." },
  { q: "How long does ceramic coating last?", a: "2 to 5 years, depending on how you maintain it. Regular hand washes with pH-balanced shampoo and the occasional ceramic booster go a long way, especially out here with the UV and dust. After every install, we'll show you exactly how to take care of it." },
  { q: "Can mobile detailers apply ceramic coatings on-site?", a: "Yes. Our fully-equipped mobile unit carries everything needed for a professional ceramic coating installation, including paint correction, decontamination tools, and a controlled curing setup. We perform the entire process at your home or office in Reno or Sparks. The vehicle simply needs to remain sheltered (garage or covered area) during the 24-hour initial cure." },
  { q: "What is paint correction and does my car need it?", a: "Paint correction is a multi-stage machine polishing process that removes swirl marks, scratches, water spots, and oxidation from your vehicle's clear coat. If your paint looks dull, hazy, or covered in fine scratches, especially under direct sunlight, your car will benefit from paint correction. It's also a required step before applying ceramic coating, since the coating locks in whatever condition the paint is in." },
  { q: "Do you detail boats and RVs in Sparks?", a: "Yes. We offer full mobile detailing for boats, RVs, travel trailers, and motorhomes throughout Sparks, Reno, and surrounding areas. Services include exterior wash and wax, oxidation removal, hull cleaning, interior deep clean, and ceramic coating for long-term protection against the intense UV and desert conditions." },
  { q: "How much does ceramic coating cost in Sparks?", a: "Professional ceramic coating in Sparks typically ranges from $800 to $2,500 depending on vehicle size, paint condition, and the level of coating selected. This includes full paint decontamination, paint correction (to remove swirls and scratches before sealing), and the ceramic coating application itself. Because every vehicle is unique, we provide custom quotes after reviewing photos of your vehicle." },
];

export default function SparksDetailing() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);


  return (
    <div className="min-h-screen bg-don-oat text-don-ink font-sans selection:bg-don-ink selection:text-don-oat">
      <Helmet>
        <title>Mobile Auto Detailing Sparks NV | Don of Detail</title>
        <meta name="description" content="Sparks, NV's top-rated mobile detailing. Ceramic coating, paint correction, and interior & exterior detailing for cars, boats, and RVs. We come to you." />
        <link rel="canonical" href="https://donofdetail.com/mobile-detailing-sparks-nv" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Mobile Auto Detailing & Ceramic Coating in Sparks, NV | Don of Detail" />
        <meta property="og:description" content="Sparks' premier mobile auto detailing service. Professional ceramic coatings, paint correction, and full interior detailing. We come to you." />
        <meta property="og:url" content="https://donofdetail.com/mobile-detailing-sparks-nv" />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Mobile Auto Detailing & Ceramic Coating in Sparks, NV | Don of Detail" />
        <meta name="twitter:description" content="Sparks' premier mobile auto detailing service. Professional ceramic coatings, paint correction, and full interior detailing. We come to you." />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Auto Detailing",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Don of Detail",
              "url": "https://donofdetail.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Sparks"},
              {"@type": "City", "name": "Reno"},
              {"@type": "Place", "name": "Spanish Springs"},
              {"@type": "Place", "name": "Sun Valley"},
              {"@type": "Place", "name": "Verdi"}
            ],
            "description": "Mobile auto, boat, and RV detailing including ceramic coating, paint correction, and interior/exterior detailing. Delivered via mobile unit to the Sparks-Reno area."
          }`}
        </script>

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does mobile auto detailing cost in Sparks, NV?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mobile auto detailing in Sparks typically costs between $200 and $400 depending on vehicle size and the service selected. Exterior-only packages start at $200+. For a full interior & exterior detail, most clients spend $250 to $400. Because every vehicle is different, we provide custom quotes after you submit a brief form."
                }
              },
              {
                "@type": "Question",
                "name": "Is ceramic coating worth it in Nevada's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Ceramic coating is one of the best investments for vehicles in the Reno-Sparks area. Sparks gets 300+ days of intense UV at 4,500+ feet of elevation, constant desert dust, and corrosive de-icing chemicals in winter. Ceramic coating provides years of hydrophobic protection, UV resistance, and keeps your paint looking factory-fresh."
                }
              },
              {
                "@type": "Question",
                "name": "What areas in Reno & Sparks do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide mobile auto detailing throughout the greater Reno-Sparks metro area including Reno, Sparks, Spanish Springs, Verdi, Sun Valley, Hidden Valley, Golden Valley, Mogul, and Cold Springs. Not sure if we cover your area? Give us a call."
                }
              },
              {
                "@type": "Question",
                "name": "How long does ceramic coating last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "2 to 5 years, depending on how you maintain it. Regular hand washes with pH-balanced shampoo and the occasional ceramic booster go a long way, especially out here with the UV and dust. After every install, we'll show you exactly how to take care of it."
                }
              },
              {
                "@type": "Question",
                "name": "Can mobile detailers apply ceramic coatings on-site?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our fully-equipped mobile unit carries everything needed for a professional ceramic coating installation, including paint correction, decontamination tools, and a controlled curing setup. We perform the entire process at your home or office in Reno or Sparks. The vehicle simply needs to remain sheltered (garage or covered area) during the 24-hour initial cure."
                }
              },
              {
                "@type": "Question",
                "name": "What is paint correction and does my car need it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Paint correction is a multi-stage machine polishing process that removes swirl marks, scratches, water spots, and oxidation from your vehicle's clear coat. If your paint looks dull, hazy, or covered in fine scratches, especially under direct sunlight, your car will benefit from paint correction. It's also a required step before applying ceramic coating, since the coating locks in whatever condition the paint is in."
                }
              },
              {
                "@type": "Question",
                "name": "Do you detail boats and RVs in Sparks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer full mobile detailing for boats, RVs, travel trailers, and motorhomes throughout Sparks, Reno, and surrounding areas. Services include exterior wash and wax, oxidation removal, hull cleaning, interior deep clean, and ceramic coating for long-term protection against the intense UV and desert conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does ceramic coating cost in Sparks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Professional ceramic coating in Sparks typically ranges from $800 to $2,500 depending on vehicle size, paint condition, and the level of coating selected. This includes full paint decontamination, paint correction (to remove swirls and scratches before sealing), and the ceramic coating application itself. Because every vehicle is unique, we provide custom quotes after reviewing photos of your vehicle."
                }
              }
            ]
          }`}
        </script>
      </Helmet>
      <BreadcrumbSchema items={[{ name: 'Mobile Detailing Sparks NV', url: 'https://donofdetail.com/mobile-detailing-sparks-nv' }]} />
      <Header />

      <main id="main" className="focus:outline-none" tabIndex={-1}>
        {/* Above the fold wrapper */}
        <div className="min-h-[85vh] flex flex-col">
          {/* Section 1 - Hero */}
          <section className="relative flex-1 flex flex-col justify-center pt-24 pb-20 px-6 lg:px-12 bg-don-oat">
            <div className="max-w-[1400px] mx-auto w-full text-left">
              <h1 className="!font-sans text-xs !font-black uppercase !tracking-[0.2em] leading-normal text-don-ink mb-8 md:mb-12">
                Mobile Auto Detailing & Ceramic Coating | Sparks, NV
              </h1>
              <p aria-hidden="true" className="text-[12vw] sm:text-8xl md:text-[9rem] lg:text-[11rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase max-w-full break-words">
                Obsessive<br />By Nature.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button onClick={openBooking} className="inline-block bg-don-ink text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-don-ink/90 transition-colors">
                  Get a Quote
                </button>
                <a href="#work" className="text-sm font-bold uppercase tracking-[0.2em] text-don-ink/70 hover:text-don-ink transition-colors flex items-center gap-2 group">
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
                  AUTO DETAILING - CERAMIC COATING - PAINT CORRECTION - BOAT DETAILING - RV DETAILING - <span className="text-don-red">NOW BOOKING</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Section 3 - Work / Gallery */}
        <section id="work" className="bg-don-oat">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              { img: '/porsche-911-foam-wash-detailing-reno.webp', alt: 'Classic Porsche 911 full interior and exterior detail by Don of Detail mobile detailing Sparks NV', title: 'Classic Porsche 911', service: 'Interior & Exterior Detail' },
              { img: '/classic-truck-car-show-reno.webp', alt: 'Custom classic truck paint correction Sparks NV by Don of Detail mobile detailing', title: 'Custom Classic Truck', service: 'Paint Correction' },
              { img: '/range-rover-headlight-restoration.webp', alt: 'Range Rover headlight restoration Sparks NV by Don of Detail mobile detailing', title: 'Range Rover', service: 'Headlight Restoration' },
              { img: '/land-rover-ceramic-coating.webp', alt: 'Land Rover Discovery ceramic coating Sparks NV by Don of Detail mobile detailing', title: 'Land Rover Discovery', service: 'Ceramic Coating' },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-don-bark">
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.8] contrast-110" loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'auto'} width={800} height={800} />
                <div className="absolute inset-0 flex flex-col justify-end p-8 transition-colors duration-300 bg-gradient-to-t from-don-ink/85 via-don-ink/10 to-transparent md:from-transparent md:via-transparent md:bg-don-ink/0 md:group-hover:bg-don-ink/90">
                  <div className="translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-don-clay mb-2">{item.service}</p>
                    <p className="text-2xl font-display uppercase tracking-[-1px] text-don-oat">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rating strip - surfaces Google proof early */}
        <section className="bg-don-oat border-y border-don-clay/20 px-6 lg:px-12 py-6">
          <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="inline-flex gap-0.5 text-don-red" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((s) => (
                <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-ink">5-Star Rated on Google</span>
            <a href="https://maps.app.goo.gl/mvf4PLGiRWU8wSAa7" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-ink/70 hover:text-don-ink border-b border-don-clay/40 hover:border-don-ink pb-0.5 transition-colors">
              Read Reviews →
            </a>
          </div>
        </section>

        {/* Section 4 - Services */}
        <section id="services" className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 lg:gap-x-8 lg:gap-y-32">
            {[
              { num: '01', title: 'Ceramic Coating', desc: 'Permanent hydrophobic barrier against UV and oxidation.', price: 'From $800', link: '/ceramic-coating-sparks-nv' },
              { num: '02', title: 'Paint Correction', desc: 'Multi-stage machine polishing to level defects and swirl marks.', price: 'From $400', link: '/paint-correction-reno-nv' },
              { num: '03', title: 'Auto Detailing', desc: 'Comprehensive interior and exterior preservation.', price: 'From $250', link: '/auto-detailing-reno-nv' },
              { num: '04', title: 'RV Detailing', desc: 'Heavy oxidation removal and multi-stage gelcoat restoration.', price: 'Quote Required', link: '/rv-detailing-reno-nv' },
              { num: '05', title: 'Boat Detailing', desc: 'Marine acid washing and specialized gelcoat sealing.', price: 'Quote Required', link: '/boat-detailing-reno-nv' },
            ].map((svc) => (
              <Link to={svc.link} key={svc.num} className="flex flex-col group cursor-pointer hover:bg-don-ink/10 p-6 -m-6 rounded-md transition-colors h-full">
                <span className="text-7xl md:text-8xl font-display text-don-clay/20 leading-none mb-6 select-none group-hover:text-don-clay/40 transition-colors">
                  {svc.num}
                </span>
                <h2 className="text-3xl md:text-4xl font-display uppercase tracking-[-2px] mb-4 text-don-oat group-hover:text-don-clay transition-colors flex items-center gap-3">
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
                </h2>
                <p className="text-sm font-light text-don-clay mb-8 max-w-sm">
                  {svc.desc}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mt-auto pt-6 border-t border-don-clay/10 group-hover:border-don-clay/30 transition-colors">
                  {svc.price}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section - Local (Sparks-specific) */}
        <section className="bg-don-oat text-don-ink py-32 lg:py-48 px-6 lg:px-12 border-t border-don-clay/10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Sparks, NV</p>
              <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] leading-tight">
                Built around how Sparks drives.
              </h2>
            </div>
            <div className="space-y-8 font-light text-don-ink/70 leading-relaxed text-lg">
              <p>
                Sparks is not one kind of vehicle. It is the daily commuter grinding up Pyramid Highway, the work truck running the warehouses off Greg Street and USA Parkway, the boat that lives half the summer at Pyramid Lake, and the weekend car tucked in a garage out in Wingfield Springs. Each one wears the high desert differently, and each one gets its own plan.
              </p>
              <p>
                We are fully mobile, so the work happens where the vehicle already sits. Driveways in Spanish Springs and Kiley Ranch, office lots near Victorian Square, storage yards along Sparks Boulevard. We carry our own power and spot-free deionized water and leave the spot empty when we are done.
              </p>
              <p>
                The valley floor takes a beating most of the year. Open-air sun in summer, sanding brine on the freeway in winter, alkaline dust the rest of the time. Left alone it flattens paint, chalks gelcoat, and bakes interiors. Our work is about staying ahead of that, not chasing it after the damage is done.
              </p>
              <p className="text-don-ink">
                One operator, start to finish. The same hands on every vehicle. That is the standard.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Testimonials (Social Proof for Conversion) */}
        <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12 border-t border-don-clay/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Verified Reviews</p>
                <h2 className="text-[9vw] sm:text-5xl lg:text-7xl 2xl:text-8xl font-display uppercase tracking-[-2px] text-don-oat max-w-full break-words hyphens-auto leading-[0.85]">
                  Uncompromising<br />Results.
                </h2>
              </div>
              <div className="flex gap-1 text-don-red">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {reviews.map((review, i) => (
                <div key={i} className="break-inside-avoid bg-don-bark/50 p-10 rounded border border-don-clay/5 hover:border-don-clay/20 transition-colors">
                  <div className="flex gap-1 text-don-clay mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-don-oat/90 font-light leading-relaxed text-lg mb-8 whitespace-pre-wrap">
                    "{review.text}"
                  </p>
                  <div className="pt-6 border-t border-don-clay/10">
                    <p className="text-sm font-bold tracking-wide text-don-oat">{formatName(review.name)}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-don-clay mt-1">{review.loc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <a
                href="https://maps.app.goo.gl/mvf4PLGiRWU8wSAa7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-12 py-4 rounded bg-don-oat text-don-ink font-bold tracking-widest uppercase text-xs transition-all hover:bg-don-oat/90 active:scale-95"
              >
                Read All Reviews on Google
              </a>
            </div>
          </div>
        </section>

        {/* Section - Brand Statement */}
        <section className="bg-don-oat text-don-ink pt-20 lg:pt-28 pb-12 lg:pb-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-3px] mb-8">
              The standard isn't optional.
            </h2>
            <p className="text-lg md:text-xl font-light text-don-ink/70 leading-relaxed max-w-2xl mx-auto">
              We bring the equipment, the chemicals, and the discipline to your driveway anywhere in Sparks. Paint correction, ceramic coating, boats, RVs, and full interior work. No filler glazes that wash off next month. No rushing the cure. You see exactly what you paid for.
            </p>
          </div>
        </section>

        {/* Section - FAQ */}
        <section className="bg-don-oat text-don-ink py-20 lg:py-28 px-6 lg:px-12 border-t border-don-clay/10">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Common Questions</p>
            <h2 className="text-[clamp(2rem,10vw,4.5rem)] font-display uppercase tracking-[-2px] leading-[0.9] mb-12">Questions?</h2>
            <div className="divide-y divide-don-clay/20 border-t border-don-clay/20">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer group gap-4"
                    aria-expanded={openFaq === i}
                  >
                    <h3 className="text-base md:text-lg font-sans font-normal tracking-[0.05em] text-don-ink group-hover:text-don-clay transition-colors">{faq.q}</h3>
                    <ChevronDown aria-hidden="true" className={`w-5 h-5 text-don-clay transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-don-ink/70 font-light leading-relaxed pb-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
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
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
