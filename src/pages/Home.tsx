import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useBooking } from '../context/BookingContext';

const formatName = (name: string) => {
  if (name === "SELF_CREATION KREW") return "S. Krew";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();

  const firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  const lastPart = parts[parts.length - 1];
  const lastInitial = lastPart.endsWith('.') ? lastPart.toUpperCase() : lastPart.charAt(0).toUpperCase() + '.';

  return `${firstName} ${lastInitial}`;
};

export default function Home() {
  const { openBooking } = useBooking();
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div className="min-h-screen bg-don-oat text-don-ink font-sans selection:bg-don-ink selection:text-don-oat">
      <Helmet>
        <title>Top Mobile Auto Detailing & Ceramic Coating in Reno, NV</title>
        <meta name="description" content="Reno's premier mobile auto detailing service. We specialize in professional ceramic coatings, paint correction, and full interior detailing. We come to you." />
        <link rel="canonical" href="https://www.donofdetail.com/" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does mobile auto detailing cost in Reno, NV?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mobile auto detailing in Reno typically costs between $200 and $400 depending on vehicle size and the service selected. Exterior-only packages start at $200+. For a full interior & exterior detail, most clients spend $250 to $400. Because every vehicle is different, we provide custom quotes after you submit a brief form."
                }
              },
              {
                "@type": "Question",
                "name": "Is ceramic coating worth it in Reno's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Ceramic coating is one of the best investments for vehicles in Reno's high-desert climate. Reno gets 300+ days of intense UV at 4,500+ feet of elevation, road salt from Tahoe trips, and constant desert dust. Ceramic coating provides years of hydrophobic protection, UV resistance, and keeps your paint looking factory-fresh."
                }
              },
              {
                "@type": "Question",
                "name": "What areas in Reno & Sparks do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide mobile auto detailing throughout the greater Reno-Sparks metro area including Reno, Sparks, Spanish Springs, South Meadows, Montrêux, Verdi, Sun Valley, Washoe Valley, Fernley, and Dayton. Not sure if we cover your area? Give us a call. We're flexible."
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
                "name": "Do you detail boats and RVs in Reno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer full mobile detailing for boats, RVs, travel trailers, and motorhomes throughout Reno, Sparks, and Northern Nevada. Services include exterior wash and wax, oxidation removal, hull cleaning, interior deep clean, and ceramic coating for long-term protection against Reno's intense UV and desert conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does ceramic coating cost in Reno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Professional ceramic coating in Reno typically ranges from $800 to $2,500 depending on vehicle size, paint condition, and the level of coating selected. This includes full paint decontamination, paint correction (to remove swirls and scratches before sealing), and the ceramic coating application itself. Because every vehicle is unique, we provide custom quotes after reviewing photos of your vehicle."
                }
              }
            ]
          }`}
        </script>
      </Helmet>
      <Header />

      <main id="main" className="focus:outline-none" tabIndex={-1}>
        {/* Above the fold wrapper */}
        <div className="min-h-[85vh] flex flex-col">
          {/* Section 1 - Hero */}
          <section className="relative flex-1 flex flex-col justify-center pt-24 pb-20 px-6 lg:px-12 bg-don-oat">
            <div className="max-w-[1400px] mx-auto w-full text-left">
              <h1 className="!font-sans text-xs !font-black uppercase !tracking-[0.2em] leading-normal text-don-ink mb-8 md:mb-12">
                Mobile Auto Detailing & Ceramic Coating | Reno, NV
              </h1>
              <p aria-hidden="true" className="text-[12vw] sm:text-8xl md:text-[9rem] lg:text-[11rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase max-w-full break-words">
                Obsessive<br />By Nature.
              </p>

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
              { img: '/porsche-911-foam-wash-detailing-reno.webp', alt: 'Classic Porsche 911 full interior and exterior detail — Don of Detail mobile detailing Reno NV', title: 'Classic Porsche 911', service: 'Interior & Exterior Detail' },
              { img: '/classic-truck-car-show-reno.webp', alt: 'Custom classic truck paint correction Reno NV — Don of Detail mobile detailing', title: 'Custom Classic Truck', service: 'Paint Correction' },
              { img: '/range-rover-headlight-restoration.webp', alt: 'Range Rover headlight restoration Reno NV — Don of Detail mobile detailing', title: 'Range Rover', service: 'Headlight Restoration' },
              { img: '/land-rover-ceramic-coating.webp', alt: 'Land Rover Discovery ceramic coating Reno NV — Don of Detail mobile detailing', title: 'Land Rover Discovery', service: 'Ceramic Coating' },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-don-bark">
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.8] contrast-110" loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'auto'} width={800} height={800} />
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
              <Link to={svc.link} key={svc.num} className="flex flex-col group cursor-pointer hover:bg-don-ink/10 p-6 -m-6 rounded-md transition-colors h-full">
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
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5 - Testimonials (Social Proof for Conversion) */}
        <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12 border-t border-don-clay/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Verified Reviews</p>
                <h2 className="text-[9vw] sm:text-6xl md:text-8xl font-display uppercase tracking-[-2px] text-don-oat max-w-full break-words hyphens-auto leading-[0.85]">
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
              {[
                { name: "SELF_CREATION KREW", loc: "Reno, NV", text: "Had a few cars done by Logan and couldn't be happier with the results! Highly recommend." },
                { name: "Debbie E.", loc: "Sparks, NV", text: "Great communication and great service. They did an exceptional job with the interior, especially with all the dog hair. Would recommend to anyone." },
                { name: "Emily Barnes", loc: "Reno, NV", text: "I cannot say enough good things about Don of Detail. He took great care of our truck and made it shine like new. He went above and beyond, focusing on every detail inside and out." },
                { name: "Quinn T.", loc: "Reno, NV", text: "Logan was super friendly, knowledgeable, punctual, and thorough. I've booked Don of Detail for family members as gifts and for myself. I would highly recommend to anyone and everyone." },
                { name: "Lisa G.", loc: "Reno, NV", text: "Been using them since my last vehicle. Always amazing results. Love how convenient it is coming to my work. Very responsive with scheduling, which makes it easy to work around my busy life." },
                { name: "Charles Walker", loc: "Reno, NV", text: "I had these guys do a deep cleaning and detail of a truck I bought that had been smoked in for many years. They did an excellent job and got into every nook and cranny. I highly recommend them." },
                { name: "Andrew R.", loc: "Reno, NV", text: "Logan knocked it out of the park with the detail and ceramic job on my triple black metallic F350. Looks better today than the day I brought it home from the dealer! I highly recommend Don of Detail's services for your vehicles." },
                { name: "Alex C.", loc: "Reno, NV", text: "Logan went above and beyond on my truck. Even with the mountain of yellow lab hair in my back seat that I could never get out no matter how hard I tried, he took the time to get all of it out and get it looking brand new." },
                { name: "Anahi Bagan", loc: "Reno, NV", text: "Logan from Don of Detail was great from beginning to end. Scheduling was a breeze, and he arrived on time. He was very pleasant and professional. Logan definitely has an eye for detail, and I highly recommend his services." },
                { name: "Clay Eagleton", loc: "Reno, NV", text: "Truly a 5-star experience. My 5th wheel was in pretty bad shape, and Logan made it shine like new. The communication was great, the attention to detail was great, and the care for his work and my property was great. They should be your first call!" },
                { name: "Tyler West", loc: "Reno, NV", text: "Knowledgeable, professional, and did an excellent job! Logan made sure my priority areas were addressed and provided recommendations for any issues or items he identified. I wouldn't hesitate to call again. Highly recommended for all your detail needs!" },
                { name: "Jake Rooney", loc: "Reno, NV", text: "Logan and his wife were absolutely terrific! They showed up early, and were professional and friendly. They had my 2001 Ford looking like it just rolled off the showroom floor!\n\nI really cannot recommend them enough to anyone looking for an amazing detail." },
                { name: "Eric King", loc: "Reno, NV", text: "Don was very professional, and the quality of his work is impressive.\n\nMy truck interior was dirty from everyday use and working in construction, and they somehow managed to make the interior look and feel brand new again." },
                { name: "Dennis Beeghly", loc: "Reno, NV", text: "Logan and his wife are true professionals in detailing in every sense of the word! They are punctual, thorough, and do an incredibly beautiful job in their detail work. Our Toyota Venza never looked so beautiful when they were done. We also had him do a ceramic coat finish as well! We would highly recommend them!" },
                { name: "Thomas Mesloh", loc: "Reno, NV", text: "Logan is very professional and knowledgeable. He does things right and is very particular with making things look the very best. There are a lot of mobile detailers out there, but he knows a lot more particulars and proper material maintenance that comes with a professional detail and not just a standard cleaning. He makes sure things are done right the first time!" },
                { name: "courtney williams", loc: "Reno, NV", text: "I cannot recommend Logan and his wife enough. They went above and beyond on my recent project. Their team was professional, attentive, and took the time to understand my specific goals. Their expertise and attention to detail resulted in a finished product that exceeded my expectations. They truly go the extra mile to ensure customer satisfaction. I'll be using them again for all my future needs!" },
                { name: "Ryan Fernandez", loc: "Reno, NV", text: "Logan detailed my '88 Honda dirt bike, removing all the engine grease, vinyl seat stains, and paint oxidation. It looks 10x better and will be easier to maintain now that the hard work is done. Scheduling online was really simple. Logan was very responsive and answered my questions via text. He even shared tips about how to maintain my bike myself. I couldn't have asked for a better experience. Thank you, Don of Detail!" },
                { name: "ariana delarosa", loc: "Reno, NV", text: "I had an amazing experience with Logan at Don of Detail. They did an outstanding job on my car and went above and beyond with their attention to detail. The interior looks spotless, and my car honestly looks better than when I first got it.\n\nThey were professional, friendly, and took the time to make sure everything was done right. You can tell they genuinely care about their work and take pride in delivering high-quality results. Communication was great throughout the process, and the service was absolutely worth it.\n\nI highly recommend Logan with Don of Detail to anyone looking for a reliable and top-quality car detail. I'll definitely be coming back again!" },
                { name: "Gigi McDuck", loc: "Reno, NV", text: "This was my first time getting my motorcycle detailed by Logan. He did an amazing job! I had dust caked on my bike from it being stored away for the winter season, and it was sparkly new by the time he was done—absolute perfection. He also noticed I needed new tires and was so kind to let me know of the dangers it can cause while on two wheels. He truly takes the time to go over every detail. I will definitely be recommending Don of Detail to my friends and family. Professional, diligent, and friendly. I know exactly who I'll be calling the next time my bike needs a beautiful pick-me-up. Thanks, Don of Detail!" }
              ].slice(0, showAllReviews ? undefined : 6).map((review, i) => (
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

            {!showAllReviews && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="group relative inline-flex items-center justify-center px-12 py-4 rounded border border-don-oat/20 text-don-oat font-bold tracking-widest uppercase text-xs transition-all hover:border-don-oat hover:bg-don-oat hover:text-don-ink active:scale-95"
                >
                  See More Reviews
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section - Brand Statement */}
        <section className="bg-don-oat text-don-ink py-32 lg:py-48 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-3px] mb-8">
              The standard isn't optional.
            </h2>
            <p className="text-lg md:text-xl font-light text-don-ink/70 leading-relaxed max-w-2xl mx-auto">
              We bring the equipment, the chemicals, and the discipline directly to your driveway. Paint correction, ceramic coating, and full auto detailing in Reno, NV. No filler products. No shortcuts. The work shows.
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
