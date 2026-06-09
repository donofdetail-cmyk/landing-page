import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
        <title>Mobile RV Detailing & Wash Services in Reno, NV</title>
        <meta name="description" content="Expert mobile RV and motorhome detailing in Reno, NV. Exterior washing, heavy oxidation removal, and multi-stage gelcoat restoration." />
        <link rel="canonical" href="https://donofdetail.com/rv-detailing-reno-nv" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mobile RV Detailing &amp; Wash Services in Reno, NV | Don of Detail" />
        <meta property="og:description" content="Expert mobile RV and motorhome detailing in Reno, NV. Exterior washing, heavy oxidation removal, and multi-stage gelcoat restoration." />
        <meta property="og:url" content="https://donofdetail.com/rv-detailing-reno-nv" />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile RV Detailing &amp; Wash Services in Reno, NV | Don of Detail" />
        <meta name="twitter:description" content="Expert mobile RV and motorhome detailing in Reno, NV. Exterior washing, heavy oxidation removal, and multi-stage gelcoat restoration." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile RV Detailing",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Don of Detail",
              "url": "https://donofdetail.com"
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
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
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

      {/* AI Summary Block (AEO Optimization) */}
      <section className="bg-don-ink text-don-oat px-6 lg:px-12 py-16 border-b border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Briefing</p>
          <div className="bg-don-bark/50 p-8 lg:p-12 rounded border border-don-clay/5">
            <h2 className="text-2xl font-display uppercase tracking-[-1px] mb-4 text-don-oat">What is RV Detailing & Oxidation Removal?</h2>
            <p className="text-don-clay font-light leading-relaxed text-lg max-w-4xl">
              RV detailing requires highly specialized equipment due to the sheer size of the vehicle and the materials involved. The massive fiberglass gelcoat panels of motorhomes, fifth wheels, and travel trailers are extremely susceptible to UV oxidation, which turns the exterior chalky and white. Professional RV detailing involves deep cleaning the rubber or fiberglass roof to prevent black streaks and water leaks, followed by aggressive rotary machine compounding to physically remove the dead gelcoat oxidation. The restored exterior is then sealed with UV-resistant polymers or ceramic coatings to protect the investment from the harsh elements.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="sr-only">Mobile RV Detailing and Motorhome Washing in Reno NV</h2>
            <p aria-hidden="true" className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] leading-tight">
              The high-altitude UV threat.
            </p>
          </div>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              Recreational vehicles feature massive expanses of fiberglass gelcoat. At our elevation in Northern Nevada, the extreme UV radiation rapidly breaks down porous gelcoat, turning the surface chalky and dull. This is not just a cosmetic issue; severe oxidation leads to structural degradation of the fiberglass itself.
            </p>
            <p>
              Whether your coach is parked at a storage facility in South Reno or sitting in a driveway in Somersett, if it isn't aggressively protected, it will oxidize. We specialize in reversing this damage. Operating a fully independent mobile unit, we bring our own power and spot-free deionized water directly to your location, eliminating the logistical nightmare of driving a 40-foot rig to a specialized wash bay.
            </p>
            <p>
              Proper RV maintenance must always begin at the roof. Neglected roofs accumulate heavy dirt, mold, and environmental fallout. When it rains, this grime washes down the sides of the coach, creating the notorious "black streaks" that stain the fiberglass. We scrub and seal the roof first, protecting the seals to prevent costly water intrusion.
            </p>
            <p>
              Once the roof and awnings are addressed, we tackle the gelcoat. Unlike automotive clear coat, oxidized fiberglass requires aggressive rotary machine compounding. We utilize heavy-cut marine/RV compounds to physically shave off the dead, chalky layer. After the gloss and depth of color are restored, we lock it in with a commercial-grade polymer sealant or SiO2 ceramic coating, ensuring your RV remains protected during its long stints in storage or out on the open road.
            </p>
            <p className="text-don-oat">
              Protect the rig. Preserve the journey.
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

      {/* Related Reading */}
      <section className="bg-don-oat py-24 px-6 lg:px-12 border-t border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-12">From the Journal</p>
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/blog/preparing-boat-rv-for-lake-tahoe" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Boat &amp; RV</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Preparing Your Boat or RV for Lake Tahoe</h3>
            </Link>
            <Link to="/boat-detailing-reno-nv" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Service</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Boat Detailing</h3>
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
