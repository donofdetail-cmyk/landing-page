import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ServiceLayout } from '../components/ServiceLayout';
import { ServiceCTA } from '../components/ServiceCTA';
import { TrustBar } from '../components/TrustBar';
import { ServiceReviews } from '../components/ServiceReviews';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { useBooking } from '../context/BookingContext';
import { ChevronDown } from 'lucide-react';

export default function AutoDetailing() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you require access to power or water?',
      a: 'No. Our units are fully self-contained. We bring deionized water and power generators, operating independently in your driveway or office parking lot.'
    },
    {
      q: 'How often should a vehicle be detailed in this climate?',
      a: 'Due to the intense UV exposure and winter road treatments, we advise a comprehensive detail every 3 to 6 months to maintain the materials.'
    },
    {
      q: 'Do you handle engine bays?',
      a: 'Yes. We use low-pressure steam and specific degreasers to remove grime safely, followed by a dry dressing to protect plastics and hoses.'
    },
    {
      q: 'Can you extract deep interior stains?',
      a: 'We use hot water extractors and enzymatic cleaners to lift heavy stains, odors, and embedded dirt from carpets and upholstery.'
    },
    {
      q: 'Do you offer mobile car detailing in Reno and Sparks?',
      a: 'Yes. Don of Detail is a fully mobile car detailing service covering Reno, Sparks, Spanish Springs, Sun Valley, and Verdi. We bring the complete setup to your home or office, so you never have to drive to a shop or wait in a lobby.'
    },
    {
      q: 'Can I book interior-only car detailing?',
      a: 'Yes. Interior car detailing is available as a standalone service in Reno and Sparks: full vacuum, steam cleaning, stain extraction, and UV protection for the dash and trim. Many clients pair it with an exterior wash, but interior-only is fine if that is all your vehicle needs.'
    },
    {
      q: 'How long does a full car detail take?',
      a: 'A standard mobile car detail runs 2 to 4 hours depending on the size and condition of the vehicle. Heavily soiled interiors, large trucks, and third-row SUVs take longer. We confirm the time window when we quote your vehicle.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Mobile Car Detailing Reno NV | Don of Detail</title>
        <meta name="description" content="Professional mobile car detailing in Reno, NV. Full interior deep clean, clay bar decontamination, exterior correction, and protective sealants. We come to you." />
        <link rel="canonical" href="https://donofdetail.com/auto-detailing-reno-nv" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium Mobile Auto Detailing Reno & Sparks NV | Don of Detail" />
        <meta property="og:description" content="Comprehensive interior and exterior mobile auto detailing in Reno and Sparks. Deep cleaning, stain extraction, and protective exterior sealants." />
        <meta property="og:url" content="https://donofdetail.com/auto-detailing-reno-nv" />
        <meta property="og:image" content="https://donofdetail.com/og-auto-detailing.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Mobile Auto Detailing Reno & Sparks NV | Don of Detail" />
        <meta name="twitter:description" content="Comprehensive interior and exterior mobile auto detailing in Reno and Sparks. Deep cleaning, stain extraction, and protective exterior sealants." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://donofdetail.com/auto-detailing-reno-nv#service",
            "name": "Mobile Auto Detailing",
            "serviceType": "Auto Detailing",
            "url": "https://donofdetail.com/auto-detailing-reno-nv",
            "provider": {"@id": "https://donofdetail.com/#business"},
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "95",
              "description": "Starting price for a Level 1 interior or exterior service on a sedan. Most clients spend $300 or more for a full interior and exterior detail."
            },
            "areaServed": [
              {"@type": "City", "name": "Reno"},
              {"@type": "City", "name": "Sparks"},
              {"@type": "Place", "name": "Spanish Springs"},
              {"@type": "Place", "name": "Verdi"},
              {"@type": "Place", "name": "Sun Valley"}
            ],
            "description": "Comprehensive interior and exterior mobile auto detailing services delivered directly to private residences in the Reno-Sparks area."
          }`}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          })}
        </script>
      </Helmet>

      <BreadcrumbSchema items={[{ name: 'Auto Detailing Reno NV', url: 'https://donofdetail.com/auto-detailing-reno-nv' }]} />
      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="!font-sans text-xs !font-black uppercase !tracking-[0.2em] leading-normal text-don-ink mb-8 md:mb-12">Mobile Auto Detailing in Reno & Sparks, NV</h1>
          <p aria-hidden="true" className="text-[clamp(2rem,11vw,9rem)] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Auto<br/>Detailing.
          </p>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Comprehensive preservation of your vehicle. We operate a fully equipped mobile unit to execute a thorough wash and interior reset at your location.
          </p>
          <button onClick={openBooking} className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 rounded hover:bg-don-ink transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      <TrustBar />

      {/* AI Summary Block (AEO Optimization) */}
      <section className="bg-don-ink text-don-oat px-6 lg:px-12 py-16 border-b border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Briefing</p>
          <div className="bg-don-bark/50 p-8 lg:p-12 rounded border border-don-clay/5">
            <h2 className="text-2xl font-display uppercase tracking-[-1px] mb-4 text-don-oat">What is Professional Auto Detailing?</h2>
            <p className="text-don-clay font-light leading-relaxed text-lg max-w-4xl">
              Unlike a standard car wash, professional auto detailing is a comprehensive top-to-bottom preservation process that focuses on deep cleaning, defect removal, and material protection. For the exterior, this involves chemical decontamination, pH-neutral hand washing, and the application of UV-resistant sealants. For the interior, it includes hot water extraction for carpets, enzymatic stain removal, steam cleaning of ventilation systems, and specialized conditioning for leather and vinyl surfaces to prevent cracking in high-heat environments.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="sr-only">Comprehensive Mobile Auto Detailing in Reno and Sparks</h2>
            <p aria-hidden="true" className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] leading-tight">
              Convenience without compromise.
            </p>
          </div>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              Your time is valuable. We operate on the principle that you should not have to leave your home or office to maintain your vehicle properly. However, "mobile" should never mean a reduction in quality.
            </p>
            <p>
              Our mobile units are entirely self-contained. We arrive equipped with spot-free deionized water systems, power generators, and an arsenal of specialized chemistry. Whether you are at home in Spanish Springs, at the office in South Reno, or residing in Verdi or Sun Valley, we execute studio-level detailing without interrupting your day or leaving a mess in your driveway.
            </p>
            <p>
              We treat the interior and exterior of your vehicle as two distinct ecosystems. The exterior requires heavy lubricants, iron removers, and alkaline pre-washes to safely lift Nevada road salt and abrasive dust without scratching the clear coat. We strictly utilize the two-bucket wash method and plush microfiber media.
            </p>
            <p>
              The interior, conversely, demands a delicate approach. We utilize pH-balanced enzymatic cleaners to lift biological stains, low-moisture steam to sanitize high-touch areas like the steering wheel and center console, and dedicated UV inhibitors to protect the dashboard from the relentless Reno sun. We never use greasy, silicone-based dressings that attract dust and leave a slippery residue.
            </p>
            <p className="text-don-oat">
              It is not just a wash. It is an automotive reset.
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Process */}
      <section className="bg-don-oat text-don-ink py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-16 md:mb-24">The Methodology</p>
          
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
            {[
              { num: '01', title: 'Wheels & Arches', desc: 'We clean the dirtiest parts of the vehicle first, using specific pH-neutral cleaners for wheel barrels, faces, and fender liners.' },
              { num: '02', title: 'Pre-Wash', desc: 'A layer of lubricating foam encapsulates and lifts heavy dirt off the surface to prevent scratching during the contact wash.' },
              { num: '03', title: 'Contact Wash', desc: 'We use a two-bucket method, grit guards, and fresh microfiber media to gently wash the paint, followed by a chemical decontamination.' },
              { num: '04', title: 'Interior Reset', desc: 'The cabin is blown out with compressed air, vacuumed, and steam cleaned. Leather is conditioned and hard surfaces are treated with UV inhibitors.' }
            ].map((step, i) => (
              <div key={i} className="min-w-0 flex flex-col gap-6">
                <div className="flex items-baseline gap-4 mb-2 min-w-0">
                  <span className="text-2xl font-display text-don-clay">{step.num}</span>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-[-1px] text-don-ink break-words min-w-0">{step.title}</h3>
                </div>
                <p className="text-don-ink/70 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceReviews />

      {/* Raw FAQ Section */}
      <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[9vw] md:text-7xl font-display uppercase tracking-[-2px] mb-16">Frequently Asked Questions</h2>

          <div className="divide-y divide-don-bark border-t border-don-bark">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left cursor-pointer group"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="text-lg font-sans font-normal tracking-[0.05em] text-don-oat group-hover:text-don-clay transition-colors pr-8">{faq.q}</h3>
                  <ChevronDown aria-hidden="true" className={`w-5 h-5 text-don-clay transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-don-clay font-light leading-relaxed pb-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA headline="Book your detail." />

      {/* Related Reading */}
      <section className="bg-don-oat py-24 px-6 lg:px-12 border-t border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-12">From the Journal</p>
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/blog/the-truth-about-automatic-car-washes" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Education</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">The Truth About Automatic Car Washes</h3>
            </Link>
            <Link to="/blog/how-to-wash-a-ceramic-coated-car" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Education</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">How To Wash Your Car After a Ceramic Coating</h3>
            </Link>
            <Link to="/ceramic-coating-reno-nv" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Service</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Ceramic Coating</h3>
            </Link>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
