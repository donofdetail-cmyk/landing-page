import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { useBooking } from '../context/BookingContext';

const SERVICE_AREAS = [
  'Reno', 'Sparks', 'Spanish Springs', 'Sun Valley', 'Verdi',
  'Hidden Valley', 'Golden Valley', 'Mogul', 'Cold Springs',
  'Lemmon Valley', 'Washoe Valley', 'Steamboat',
];

export default function Contact() {
  const { openBooking } = useBooking();

  return (
    <ServiceLayout>
      <Helmet>
        <title>Contact Don of Detail | Mobile Detailing Reno &amp; Sparks, NV</title>
        <meta name="description" content="Get a quote from Don of Detail. Call or text (775) 230-7035, or request a quote online. Mobile auto detailing, ceramic coating, and paint correction across Reno, Sparks & surrounding NV. We come to you." />
        <link rel="canonical" href="https://donofdetail.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Don of Detail | Reno & Sparks, NV" />
        <meta property="og:description" content="Call or text (775) 230-7035, or request a quote online. Mobile detailing, ceramic coating & paint correction. We come to you." />
        <meta property="og:url" content="https://donofdetail.com/contact" />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Don of Detail | Reno & Sparks, NV" />
        <meta name="twitter:description" content="Call or text (775) 230-7035, or request a quote online. Mobile detailing, ceramic coating & paint correction. We come to you." />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Don of Detail",
            "url": "https://donofdetail.com/contact",
            "mainEntity": {
              "@type": "AutomotiveBusiness",
              "@id": "https://donofdetail.com/#business",
              "name": "Don of Detail",
              "telephone": "+17752307035",
              "email": "contact@donofdetail.com",
              "url": "https://donofdetail.com",
              "image": "https://donofdetail.com/logo.png",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Reno",
                "addressRegion": "NV",
                "addressCountry": "US"
              },
              "areaServed": [
                {"@type": "City", "name": "Reno"},
                {"@type": "City", "name": "Sparks"},
                {"@type": "Place", "name": "Spanish Springs"},
                {"@type": "Place", "name": "Sun Valley"},
                {"@type": "Place", "name": "Verdi"},
                {"@type": "Place", "name": "Hidden Valley"},
                {"@type": "Place", "name": "Golden Valley"},
                {"@type": "Place", "name": "Mogul"},
                {"@type": "Place", "name": "Cold Springs"},
                {"@type": "Place", "name": "Lemmon Valley"},
                {"@type": "Place", "name": "Washoe Valley"},
                {"@type": "Place", "name": "Steamboat"}
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+17752307035",
                "email": "contact@donofdetail.com",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/donofdetail",
                "https://www.facebook.com/donofdetail",
                "https://maps.app.goo.gl/mvf4PLGiRWU8wSAa7"
              ]
            }
          }`}
        </script>
      </Helmet>

      <BreadcrumbSchema items={[{ name: 'Contact', url: 'https://donofdetail.com/contact' }]} />

      {/* Hero */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Contact</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Get In<br/>Touch.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Tell us the vehicle and what it needs. You get a straight quote back, usually within the hour. No call center, no runaround. You deal with Logan directly.
          </p>
          <button onClick={openBooking} className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 rounded hover:bg-don-ink transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Direct contact details */}
      <section className="bg-don-bark text-don-oat py-24 lg:py-32 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="sr-only">Contact details for Don of Detail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Call or Text</p>
              <a href="tel:+17752307035" className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-oat hover:text-don-clay transition-colors">
                (775) 230-7035
              </a>
              <p className="text-sm font-light text-don-clay mt-3">Fastest way to reach us. Text a few photos for an accurate quote.</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Email</p>
              <a href="mailto:contact@donofdetail.com" className="text-xl md:text-2xl font-display uppercase tracking-[-1px] text-don-oat hover:text-don-clay transition-colors break-words">
                contact@donofdetail.com
              </a>
              <p className="text-sm font-light text-don-clay mt-3">For detailed inquiries and fleet work.</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Hours</p>
              <p className="text-xl md:text-2xl font-display uppercase tracking-[-1px] text-don-oat">Open 7 Days</p>
              <p className="text-sm font-light text-don-clay mt-3">8:00 AM to 7:00 PM, every day.</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Service Area</p>
              <p className="text-xl md:text-2xl font-display uppercase tracking-[-1px] text-don-oat">Reno &amp; Sparks</p>
              <p className="text-sm font-light text-don-clay mt-3">Fully mobile. We bring the studio to your home or office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area coverage */}
      <section className="bg-don-oat text-don-ink py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Where We Work</p>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-[-2px] mb-8">
              Mobile across<br/>the Reno-Sparks<br/>metro.
            </h2>
            <p className="text-lg font-light text-don-ink/70 leading-relaxed max-w-xl">
              We operate a fully self-contained mobile unit with our own power and spot-free deionized water. That means we perform the full job right in your driveway or lot: paint correction, ceramic coating, and interior restoration. Not sure if you are in range? Call and ask.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Areas Served</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-lg font-light text-don-ink border-b border-don-clay/20 pb-3">
                  {area}, NV
                </li>
              ))}
            </ul>
            <a
              href="https://maps.app.goo.gl/mvf4PLGiRWU8wSAa7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 text-xs font-bold uppercase tracking-[0.2em] text-don-red hover:text-don-ink transition-colors border-b border-don-red/40 hover:border-don-ink pb-1"
            >
              Find us on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-[-3px] mb-10">
          Ready when<br/>you are.
        </h2>
        <button onClick={openBooking} className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-12 py-5 rounded hover:bg-don-red/90 transition-transform hover:scale-105 active:scale-95 mb-6">
          Request a Quote
        </button>
        <p className="text-xs uppercase tracking-[0.2em] text-don-clay">
          Or call / text: <a href="tel:+17752307035" className="hover:text-don-oat transition-colors">(775) 230-7035</a>
        </p>
      </section>
    </ServiceLayout>
  );
}
