import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { useBooking } from '../context/BookingContext';
import { ChevronDown } from 'lucide-react';

export default function BoatDetailing() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: 'Why does my boat\'s gelcoat turn dull so fast?',
      a: 'Marine gelcoat is highly porous. When exposed to unfiltered UV radiation, it oxidizes rapidly. Protection is mandatory to prevent structural degradation.'
    },
    {
      q: 'Can you restore a heavily oxidized boat?',
      a: 'Yes. We use heavy-cut marine compounds to level the dead oxidation, followed by refining polishes that restore the original color and gloss of the hull.'
    },
    {
      q: 'Do you offer mobile marine detailing?',
      a: 'Yes. We provide mobile services directly at your marina slip, dry storage facility, or private residence. We bring our own power and deionized water.'
    },
    {
      q: 'Do you clean the interior of the boat?',
      a: 'Yes. We deep clean non-skid decking, remove mildew from vinyl seating, and apply UV protection to interior surfaces to prevent cracking.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Boat Detailing Reno NV | Gelcoat Restoration | Don of Detail</title>
        <meta name="description" content="Mobile marine detailing and gelcoat restoration in Washoe Valley, Reno, and Sparks. Protect your boat from UV damage." />
        <link rel="canonical" href="https://www.donofdetail.com/boat-detailing-reno-nv" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marine Detailing",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Don of Detail",
              "url": "https://www.donofdetail.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Washoe Valley"},
              {"@type": "City", "name": "Reno"},
              {"@type": "City", "name": "Sparks"}
            ],
            "description": "Specialized boat detailing services, featuring heavy oxidation removal, gelcoat restoration, and marine ceramic coatings."
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
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Marine Restoration</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Boat<br/>Detailing.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Gelcoat restoration, oxidation removal, and long-term protection for the demanding Nevada environment.
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
            The alpine threat.
          </h2>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              Boating at elevation exposes your vessel to an extreme, unfiltered UV index. Marine gelcoat is highly porous, and in the high desert basin, unprotected fiberglass will oxidize and turn chalky white in a single season.
            </p>
            <p>
              Don of Detail provides mobile, structural marine restoration directly to your slip in Washoe Valley or dry storage in Reno/Sparks. We strip away the environmental damage and seal your hull to ensure it remains protected on the water.
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
              { num: '01', title: 'Acid Bath', desc: 'We wash the vessel and utilize specialized marine acids to dissolve algae, scum lines, and hard water minerals bonded to the lower hull.' },
              { num: '02', title: 'Interior Remediation', desc: 'Marine environments breed mold. We clean the vinyl seating and non-skid decking, extracting moisture and applying UV protectants.' },
              { num: '03', title: 'Compounding', desc: 'Gelcoat is harder and thicker than car paint. We use heavy-duty polishers and aggressive compounds to shave off the dead, oxidized layer of fiberglass.' },
              { num: '04', title: 'Sealing', desc: 'The hull is refined with a dual-action polisher to remove marks, then locked down with a marine sealant to prevent immediate re-oxidation.' }
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
