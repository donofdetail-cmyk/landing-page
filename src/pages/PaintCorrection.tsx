import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { useBooking } from '../context/BookingContext';
import { ChevronDown } from 'lucide-react';

export default function PaintCorrection() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const { openBooking } = useBooking();

  const faqs = [
    {
      q: 'What causes swirl marks?',
      a: 'Swirl marks are microscopic scratches in the clear coat. They are primarily caused by drive-through car washes with dirty brushes, wiping down dry paint with a towel, and aggressive washing techniques.'
    },
    {
      q: 'Will correction remove deep scratches?',
      a: 'We level surface defects in the clear coat. If a scratch is deep enough that your fingernail catches in it, it has penetrated into the color base layer. We can minimize its appearance, but it cannot be polished out safely.'
    },
    {
      q: 'Why does black paint look worse than white paint?',
      a: 'Black paint is not softer; it reflects light differently. The contrast between the dark base coat and the white light hitting the micro-scratches makes defects highly visible. Correction fully restores the mirror reflection.'
    },
    {
      q: 'How long does the process take?',
      a: 'Depending on the severity of the defects, a multi-stage correction requires 8 to 20 hours of focused machine polishing.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Paint Correction Reno NV | Swirl & Scratch Removal</title>
        <meta name="description" content="Permanent removal of swirl marks and oxidation. Multi-stage paint correction serving Reno and Sparks." />
        <link rel="canonical" href="https://www.donofdetail.com/paint-correction-reno-nv" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Paint Correction",
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
            "description": "Multi-stage machine polishing to permanently remove swirl marks, holograms, and oxidation from clear coats."
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
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Defect Removal</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Paint<br/>Correction.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Permanent removal of swirl marks, holograms, and oxidation. We bring our equipment directly to you to safely level defects and restore a mirror finish to the clear coat.
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
            The toll on paint.
          </h2>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              The environment across Northern Nevada degrades clear coats rapidly. Abrasive dust carried by the wind, hard water spots from local sprinklers, and improper washing techniques quickly dull the surface into a spiderwebbed haze.
            </p>
            <p>
              We specialize in reversing this damage. Our mobile setup serves clients in Caughlin Ranch, Montreux, Somersett, and Washoe Valley, delivering multi-stage paint correction without the inconvenience of dropping off your vehicle.
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
              { num: '01', title: 'Measurement', desc: 'We wash the vehicle, decontaminate the paint, and use electronic gauges to measure clear coat thickness before a polisher ever touches the surface.' },
              { num: '02', title: 'Testing', desc: 'We perform test spots to find the least aggressive pad and compound combination necessary to achieve the desired result.' },
              { num: '03', title: 'Compounding', desc: 'We utilize heavy cutting compounds to safely level the clear coat and remove the deepest visible defects and oxidation.' },
              { num: '04', title: 'Polishing', desc: 'We refine the compounded surface using fine polishes to eliminate micro-marring and maximize the optical clarity.' }
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
