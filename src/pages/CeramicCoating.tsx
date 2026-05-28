import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { useBooking } from '../context/BookingContext';
import { ChevronDown } from 'lucide-react';

export default function CeramicCoating() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: 'Is ceramic coating necessary in Nevada?',
      a: 'Yes. The high-altitude sun breaks down unprotected clear coat. A professional coating acts as a sacrificial barrier, preventing oxidation and repelling dust.'
    },
    {
      q: 'How does this compare to wax?',
      a: 'Wax melts in the summer heat. Ceramic coatings bond at a molecular level, creating a hardened glass-like surface that lasts for years.'
    },
    {
      q: 'Will this prevent scratches?',
      a: 'It resists fine wash marring and swirl marks. It will not stop rock chips or deep physical damage. For impact protection, we recommend Paint Protection Film.'
    },
    {
      q: 'Do you apply the coating at my home?',
      a: 'Yes. We operate a fully equipped mobile unit. We control the environment and apply the coating directly in your driveway or garage.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Professional Ceramic Coating Reno NV | Don of Detail</title>
        <meta name="description" content="Professional-grade ceramic coating applied at your location. We serve Reno, Sparks, ArrowCreek, Montreux, and Washoe Valley." />
        <link rel="canonical" href="https://www.donofdetail.com/ceramic-coating-reno-nv" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Ceramic Coating",
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
              {"@type": "Neighborhood", "name": "ArrowCreek"}
            ],
            "description": "Professional ceramic coating installation providing UV protection and hydrophobic properties. Delivered via mobile unit to Northern Nevada."
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
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Paint Preservation</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Ceramic<br/>Coating.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            The Nevada sun breaks down unprotected paint. We apply professional-grade ceramic coatings at your location, creating a hardened barrier against UV degradation, hard water, and oxidation. Protection that lasts years, not weeks.
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
            Engineered for the high desert.
          </h2>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              The environment in Northern Nevada is hostile to automotive finishes. From the high-altitude UV radiation to the de-icing chemicals used during local winters, your vehicle is constantly under attack.
            </p>
            <p>
              We bring a controlled, studio-level application process directly to your home. We serve clients across Reno and Sparks, frequently dispatching to private residences in Montreux, Somersett, ArrowCreek, and Washoe Valley.
            </p>
            <p className="text-don-oat">
              We do not wash cars. We preserve automotive investments against the specific elements of the Sierra Nevada region.
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
              { num: '01', title: 'Decontamination', desc: 'We strip the clear coat of embedded iron and fallout to ensure a flawless bond.' },
              { num: '02', title: 'Correction', desc: 'We machine polish the paint to remove swirl marks and oxidation, restoring the surface to a mirror finish.' },
              { num: '03', title: 'Sterilization', desc: 'We wipe down every panel with isopropyl alcohol prep spray. The surface must be completely sterile.' },
              { num: '04', title: 'Application', desc: 'The coating is applied panel by panel, allowed to flash, and carefully leveled. This requires strict focus and proper lighting.' }
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
