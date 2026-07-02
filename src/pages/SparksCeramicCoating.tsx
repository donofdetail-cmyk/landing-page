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

export default function SparksCeramicCoating() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you install ceramic coatings in Sparks and Spanish Springs?',
      a: 'Yes. We are fully mobile and run the entire job on site at homes, offices, and storage units across Sparks, Spanish Springs, Sun Valley, and the surrounding area. You do not drive anywhere.'
    },
    {
      q: 'My truck lives outside near the Marina. Is a coating worth it?',
      a: 'That is exactly the vehicle a coating is built for. Constant sun and open-air parking flatten unprotected clear coat fast. A coating takes the UV and hard water hits for years and makes the weekly wash far easier.'
    },
    {
      q: 'How long does the vehicle need to stay put after coating?',
      a: 'Plan on the vehicle staying sheltered for about 24 hours while the coating cures. We schedule around your driveway or garage so the cure is never interrupted.'
    },
    {
      q: 'Does the paint need correction before coating?',
      a: 'Almost always. A coating locks in whatever is underneath it, so we machine polish out swirls and oxidation before sealing. We quote the correction and the coating together after seeing the paint.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Ceramic Coating Sparks NV | Mobile Install | Don of Detail</title>
        <meta name="description" content="Professional ceramic coating in Sparks, NV. We apply SiO2 coatings at your home, office, or storage. UV protection that lasts years, not weeks." />
        <link rel="canonical" href="https://donofdetail.com/ceramic-coating-sparks-nv" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Ceramic Coating Sparks NV | Don of Detail" />
        <meta property="og:description" content="Protect your vehicle with professional-grade ceramic coatings in Sparks, NV. Long-lasting UV protection and hydrophobic gloss applied at your home or office." />
        <meta property="og:url" content="https://donofdetail.com/ceramic-coating-sparks-nv" />
        <meta property="og:image" content="https://donofdetail.com/og-ceramic-coating.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Ceramic Coating Sparks NV | Don of Detail" />
        <meta name="twitter:description" content="Protect your vehicle with professional-grade ceramic coatings in Sparks, NV. Long-lasting UV protection and hydrophobic gloss applied at your home or office." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://donofdetail.com/ceramic-coating-sparks-nv#service",
            "name": "Mobile Ceramic Coating",
            "serviceType": "Ceramic Coating",
            "url": "https://donofdetail.com/ceramic-coating-sparks-nv",
            "provider": {"@id": "https://donofdetail.com/#business"},
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "800",
              "description": "Starting price for a sedan. Final quote depends on vehicle size and paint condition."
            },
            "areaServed": [
              {"@type": "City", "name": "Sparks"},
              {"@type": "City", "name": "Reno"},
              {"@type": "Place", "name": "Spanish Springs"},
              {"@type": "Place", "name": "Sun Valley"}
            ],
            "description": "Professional ceramic coating installation providing UV protection and hydrophobic properties. Delivered via mobile unit to Sparks, NV and surrounding areas."
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
      <BreadcrumbSchema items={[{ name: 'Ceramic Coating Sparks NV', url: 'https://donofdetail.com/ceramic-coating-sparks-nv' }]} />

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="!font-sans text-xs !font-black uppercase !tracking-[0.2em] leading-normal text-don-ink mb-8 md:mb-12">Mobile Ceramic Coating in Sparks, NV</h1>
          <p aria-hidden="true" className="text-[clamp(2rem,11vw,9rem)] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Ceramic<br/>Coating.
          </p>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            Sparks vehicles bake in open driveways from Wingfield Springs to the Marina, then take winter brine on the Pyramid Highway commute. We install professional-grade ceramic coatings at your home or storage unit, locking in a hardened barrier against UV, hard water, and oxidation. Years of protection, not weeks.
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
            <h2 className="text-2xl font-display uppercase tracking-[-1px] mb-4 text-don-oat">What is Ceramic Coating?</h2>
            <p className="text-don-clay font-light leading-relaxed text-lg max-w-4xl">
              Ceramic coating is a silica-based (SiO2) liquid polymer that bonds to your factory clear coat and cures into a hard, glass-like shell. That shell is hydrophobic and sacrificial: it takes the UV, the alkaline desert dust, and the chemical hits instead of your paint, and it holds for roughly 2 to 5 years. For a Sparks vehicle that lives outside, it is the difference between paint that still looks new in five years and paint that has already gone flat and chalky.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="sr-only">Why Sparks Demands Professional Ceramic Coating</h2>
            <p aria-hidden="true" className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] leading-tight">
              Built for how Sparks drives.
            </p>
          </div>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              Sparks sits on the valley floor at roughly 4,400 feet, and the punishment on paint here is relentless. Summer sun cooks unprotected clear coat in open driveways across Spanish Springs and Wingfield Springs. Winter brings sanding brine and de-icer on Pyramid Highway and I-80. The rest of the year, fine alkaline dust blows off the high desert and settles into the finish. Wax gives up in weeks against all of it.
            </p>
            <p>
              We bring the full studio process to your driveway, garage, or storage unit. Professional SiO2 coatings are not a retail spray. They demand controlled temperature, careful panel-by-panel leveling, and real cure time, which is exactly why we apply them on site instead of rushing cars through a shop.
            </p>
            <p>
              The prep is where a coating is won or lost. We pull embedded iron and industrial fallout out of the clear coat, then machine polish the paint flat. Vehicles that live near the Greg Street corridor or commute out to the industrial parks along USA Parkway pick up heavy brake and rail dust, and that has to come out before anything gets sealed. Coat over swirls or oxidation and you lock those defects in for years.
            </p>
            <p>
              We coat daily drivers, weekend trucks, and boats that summer at Pyramid Lake and Lake Tahoe, dispatching across Spanish Springs, Sun Valley, Kiley Ranch, and D'Andrea. The coating is one piece of our full <Link to="/mobile-detailing-sparks-nv" className="text-don-oat underline decoration-don-clay/40 underline-offset-4 hover:decoration-don-oat transition-colors">mobile detailing service in Sparks</Link>, and we carry our own spot-free deionized water so no hard-water minerals get introduced during the prep wash.
            </p>
            <p className="text-don-oat">
              We do not wash cars. We protect what you parked in the driveway against everything Sparks throws at it.
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
              { num: '01', title: 'Decontamination', desc: 'We strip iron, rail dust, and industrial fallout out of the clear coat so nothing gets trapped under the coating.' },
              { num: '02', title: 'Correction', desc: 'We machine polish the paint flat, cutting swirls and oxidation until the finish reflects clean.' },
              { num: '03', title: 'Sterilization', desc: 'Every panel gets wiped down with a prep solvent. The surface has to be chemically bare before anything bonds.' },
              { num: '04', title: 'Application', desc: 'We lay the coating panel by panel, let it flash, and level it by hand under proper lighting. No rushing the cure.' }
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

      <ServiceReviews heading="What Sparks Drivers Say" />

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

      <ServiceCTA headline="Lock in the gloss." areas="Sparks, Spanish Springs, Wingfield Springs, D'Andrea, and Sun Valley" />

      {/* Related Reading */}
      <section className="bg-don-oat py-24 px-6 lg:px-12 border-t border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-12">From the Journal</p>
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/blog/is-ceramic-coating-worth-it-reno" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Ceramic Coating</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Is Ceramic Coating Worth It?</h3>
            </Link>
            <Link to="/blog/how-to-wash-a-ceramic-coated-car" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Education</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">How To Wash Your Car After a Ceramic Coating</h3>
            </Link>
            <Link to="/paint-correction-reno-nv" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Service</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Paint Correction</h3>
            </Link>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
