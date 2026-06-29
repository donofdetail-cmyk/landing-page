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
    },
    {
      q: 'Do you offer mobile paint correction in Reno and Sparks?',
      a: 'Yes. We bring the lighting, polishers, and compounds to you across Reno, Sparks, Spanish Springs, Sun Valley, and Verdi. The full correction happens in your garage or driveway, with no need to leave the vehicle at a shop.'
    },
    {
      q: 'Should I get paint correction before a ceramic coating?',
      a: 'Almost always. A ceramic coating locks in whatever condition the paint is in, so we correct swirls, scratches, and oxidation first, then seal the restored finish. Most clients book paint correction and ceramic coating together.'
    },
    {
      q: 'How much does paint correction cost?',
      a: 'It depends on paint condition, vehicle size, and how many polishing stages the defects require. We give a firm quote after reviewing photos of your paint in natural light, so there are no surprises.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Paint Correction Reno NV | Swirl & Scratch Removal</title>
        <meta name="description" content="Multi-stage paint correction in Reno, NV. We permanently remove swirl marks, holograms, and oxidation from your clear coat. Mobile, we come to you." />
        <link rel="canonical" href="https://donofdetail.com/paint-correction-reno-nv" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Paint Correction & Swirl Removal in Reno, NV | Don of Detail" />
        <meta property="og:description" content="Restore your vehicle's factory finish. Professional multi-stage paint correction in Reno, NV to permanently remove swirl marks, scratches, and oxidation." />
        <meta property="og:url" content="https://donofdetail.com/paint-correction-reno-nv" />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Paint Correction & Swirl Removal in Reno, NV | Don of Detail" />
        <meta name="twitter:description" content="Restore your vehicle's factory finish. Professional multi-stage paint correction in Reno, NV to permanently remove swirl marks, scratches, and oxidation." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Paint Correction",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Don of Detail",
              "url": "https://donofdetail.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Reno"},
              {"@type": "City", "name": "Sparks"},
              {"@type": "Place", "name": "Spanish Springs"},
              {"@type": "Place", "name": "Verdi"},
              {"@type": "Place", "name": "Sun Valley"}
            ],
            "description": "Multi-stage machine polishing to permanently remove swirl marks, holograms, and oxidation from clear coats."
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
      <BreadcrumbSchema items={[{ name: 'Paint Correction Reno NV', url: 'https://donofdetail.com/paint-correction-reno-nv' }]} />

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="!font-sans text-xs !font-black uppercase !tracking-[0.2em] leading-normal text-don-ink mb-8 md:mb-12">Mobile Paint Correction in Reno & Sparks, NV</h1>
          <p aria-hidden="true" className="text-[clamp(2rem,11vw,9rem)] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Paint<br/>Correction.
          </p>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Permanent removal of swirl marks, holograms, and oxidation. We bring our equipment directly to you to safely level defects and restore a mirror finish to the clear coat.
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
            <h2 className="text-2xl font-display uppercase tracking-[-1px] mb-4 text-don-oat">What is Paint Correction?</h2>
            <p className="text-don-clay font-light leading-relaxed text-lg max-w-4xl">
              Paint correction is a meticulous, multi-stage machine polishing process designed to permanently remove clear coat defects such as swirl marks, holograms, deep scratches, and oxidation. Unlike waxes or glazes that temporarily fill and hide damage, paint correction uses abrasive compounds to safely level the microscopic upper layer of the clear coat, restoring a flawless, mirror-like finish and maximum optical clarity to the vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="sr-only">Expert Paint Correction and Swirl Removal in Reno</h2>
            <p aria-hidden="true" className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] leading-tight">
              The toll on paint.
            </p>
          </div>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              The environment across the Reno-Sparks area degrades clear coats rapidly. Abrasive dust carried by the wind, hard water spots from local sprinklers, and improper washing techniques quickly dull the surface into a spiderwebbed haze. Automated "tunnel" car washes in Reno are notorious for utilizing harsh brushes that inflict millions of micro-scratches into your vehicle's finish in a matter of seconds.
            </p>
            <p>
              We specialize in reversing this damage. True paint correction is not an "add-on" service. It is a specialized craft. It requires an acute understanding of clear coat density, heat management, and the specific abrasive chemistry required for different vehicle manufacturers. European clear coats (like Porsche or BMW) react entirely differently to a polishing pad than softer Japanese paints (like Honda or Subaru).
            </p>
            <p>
              Our process relies on precision. We utilize rotary buffers, forced-rotation, and long-throw dual-action polishers combined with professional-grade cutting compounds and finishing polishes. By measuring the clear coat thickness with an electronic gauge, we ensure that we only remove the absolute minimum amount of material required to level the defect.
            </p>
            <p>
              Our fully equipped mobile studio serves clients in Spanish Springs, Verdi, Sun Valley, and surrounding areas. We deliver multi-stage paint correction directly in your garage, eliminating the inconvenience of dropping your vehicle off at a shop for multiple days.
            </p>
            <p className="text-don-oat">
              Don't hide the damage under a temporary wax. Erase it permanently.
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

      <ServiceCTA headline="Restore the finish." />

      {/* Related Reading */}
      <section className="bg-don-oat py-24 px-6 lg:px-12 border-t border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-12">From the Journal</p>
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/blog/paint-correction-vs-waxing" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Education</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Paint Correction vs. Waxing</h3>
            </Link>
            <Link to="/blog/the-truth-about-automatic-car-washes" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Education</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">The Truth About Automatic Car Washes</h3>
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
