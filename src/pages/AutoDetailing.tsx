import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { useBooking } from '../context/BookingContext';
import { ChevronDown } from 'lucide-react';

export default function AutoDetailing() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you require access to power or water?',
      a: 'No. Our units are fully self-contained. We bring deionized water and silent power generators, operating independently in your driveway or office parking lot.'
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
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Premium Mobile Auto Detailing Reno & Sparks NV</title>
        <meta name="description" content="Comprehensive interior and exterior mobile auto detailing in Reno and Sparks. Deep cleaning, stain extraction, and protective exterior sealants." />
        <link rel="canonical" href="https://www.donofdetail.com/auto-detailing-reno-nv" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Auto Detailing",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Don of Detail",
              "url": "https://www.donofdetail.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Reno"},
              {"@type": "City", "name": "Sparks"},
              {"@type": "City", "name": "Washoe Valley"},
              {"@type": "Neighborhood", "name": "Montreux"},
              {"@type": "Neighborhood", "name": "Somersett"},
              {"@type": "Neighborhood", "name": "ArrowCreek"},
              {"@type": "Neighborhood", "name": "Caughlin Ranch"}
            ],
            "description": "Comprehensive interior and exterior mobile auto detailing services delivered directly to private residences in Northern Nevada."
          }`}
        </script>

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${faqs.map(faq => `{
                "@type": "Question",
                "name": "${faq.q}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${faq.a}"
                }
              }`).join(',')}
            ]
          }`}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Interior & Exterior</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Auto<br/>Detailing.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Comprehensive preservation of your vehicle. We operate a fully equipped mobile unit to execute a thorough wash and interior reset at your location.
          </p>
          <button onClick={openBooking} className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 rounded hover:bg-don-ink transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px]">
            Convenience without compromise.
          </h2>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              Your time is valuable. We operate on the principle that you should not have to leave your home or office to maintain your vehicle properly.
            </p>
            <p>
              Our mobile units carry spot-free deionized water systems and independent power. Whether you are at home in Montreux, at the office in South Reno, or residing in ArrowCreek or Washoe Valley, we arrive ready to execute the work without interrupting your day.
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
              <div key={i} className="flex flex-col gap-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-display text-don-clay">{step.num}</span>
                  <h3 className="text-3xl font-display uppercase tracking-[-1px] text-don-ink">{step.title}</h3>
                </div>
                <p className="text-don-ink/70 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raw FAQ Section */}
      <section className="bg-don-ink text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] mb-16">Clarification.</h2>

          <div className="divide-y divide-don-bark border-t border-don-bark">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left cursor-pointer group"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="text-lg font-sans font-normal tracking-[0.05em] text-don-oat group-hover:text-don-clay transition-colors pr-8">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-don-clay transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-don-clay font-light leading-relaxed pb-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
