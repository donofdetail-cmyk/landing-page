import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { useBooking } from '../context/BookingContext';
import { ChevronDown } from 'lucide-react';

export default function RVDetailing() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: 'Why is the fiberglass on my RV chalky and white?',
      a: 'This is severe UV oxidation. Gelcoat is highly porous, and high-altitude sun exposure breaks down the top layer rapidly if it is not protected.'
    },
    {
      q: 'Can you restore oxidized fiberglass?',
      a: 'Yes. We use heavy-cut marine compounds and rotary polishers to strip away the dead layer and restore the color and gloss of the original gelcoat.'
    },
    {
      q: 'Do you come to storage facilities?',
      a: 'Yes. We are fully mobile with our own power and deionized water. We service RVs at storage lots and private residences throughout the area.'
    },
    {
      q: 'Do you clean the roof?',
      a: 'Roof cleaning is a mandatory part of the process. We remove built-up dirt and mildew to prevent streaks from running down the sides of the coach.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>RV Detailing Reno NV | Oxidation Removal & Protection</title>
        <meta name="description" content="RV detailing and gelcoat restoration in Reno and Sparks. Protect your motorhome from severe sun damage." />
        <link rel="canonical" href="https://www.donofdetail.com/rv-detailing-reno-nv" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile RV Detailing",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Don of Detail",
              "url": "https://www.donofdetail.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Reno"},
              {"@type": "City", "name": "Sparks"},
              {"@type": "Neighborhood", "name": "Somersett"},
              {"@type": "Neighborhood", "name": "ArrowCreek"}
            ],
            "description": "Specialized recreational vehicle detailing including heavy oxidation removal and multi-stage gelcoat restoration."
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
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Gelcoat Restoration</p>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            RV<br/>Detailing.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Heavy oxidation removal, multi-stage compounding, and long-term protection for motorhomes, fifth wheels, and travel trailers.
          </p>
          <button onClick={openBooking} className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 rounded hover:bg-don-ink transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-[-2px]">
            The high-altitude UV threat.
          </h2>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              Recreational vehicles feature massive expanses of fiberglass gelcoat. At our elevation, the extreme UV radiation rapidly breaks down porous gelcoat, turning the surface chalky and dull.
            </p>
            <p>
              Whether your coach is parked at a storage facility in South Reno or sitting in a driveway in Somersett, if it isn't aggressively protected, it will oxidize. We specialize in reversing this damage and sealing the fiberglass against the climate.
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
              { num: '01', title: 'Roof Preparation', desc: 'We scrub the roof to remove dirt and mold, preventing streaks from ruining the detail below. Awnings are carefully unrolled and cleaned.' },
              { num: '02', title: 'Decontamination', desc: 'The entire exterior is foamed and hand washed using spot-free water to remove bug splatter and environmental fallout.' },
              { num: '03', title: 'Compounding', desc: 'Using rotary polishers and heavy-cut marine compounds, we work through the chalky, dead gelcoat layer to reveal the healthy fiberglass beneath.' },
              { num: '04', title: 'Protection', desc: 'The compounded surface is refined to maximize gloss, then sealed with UV inhibitors to ensure the oxidation does not return.' }
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
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-[-2px] mb-16">Clarification.</h2>

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
