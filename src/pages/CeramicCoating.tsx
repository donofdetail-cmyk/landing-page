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
    },
    {
      q: 'Do you offer mobile ceramic coating in Reno and Sparks?',
      a: 'Yes. We install professional ceramic coatings at your home, office, or storage unit across Reno, Sparks, Spanish Springs, Sun Valley, and Verdi. The full prep and application happen on site, so you never drop the vehicle off.'
    },
    {
      q: 'How much does ceramic coating cost in Reno?',
      a: 'It depends on vehicle size and how much paint correction the finish needs first, since the coating locks in whatever is underneath it. We quote the correction and coating together after seeing photos of your vehicle, so the number you get is the number you pay.'
    },
    {
      q: 'How long does a ceramic coating last?',
      a: 'A professional coating lasts roughly 2 to 5 years depending on the product tier and upkeep. Regular pH-balanced hand washes and an occasional ceramic booster keep it performing, and we walk you through the exact maintenance after install.'
    }
  ];

  return (
    <ServiceLayout>
      <Helmet>
        <title>Ceramic Coating Reno NV | Paint Protection | Don of Detail</title>
        <meta name="description" content="Professional ceramic coating in Reno, NV. SiO2 that bonds to your clear coat for UV resistance and hydrophobic gloss lasting years. Mobile install." />
        <link rel="canonical" href="https://donofdetail.com/ceramic-coating-reno-nv" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Ceramic Coating Reno NV | Don of Detail" />
        <meta property="og:description" content="Protect your vehicle with professional-grade ceramic coatings in Reno, NV. Long-lasting UV protection and hydrophobic gloss applied at your home or office." />
        <meta property="og:url" content="https://donofdetail.com/ceramic-coating-reno-nv" />
        <meta property="og:image" content="https://donofdetail.com/og-ceramic-coating.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Ceramic Coating Reno NV | Don of Detail" />
        <meta name="twitter:description" content="Protect your vehicle with professional-grade ceramic coatings in Reno, NV. Long-lasting UV protection and hydrophobic gloss applied at your home or office." />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://donofdetail.com/ceramic-coating-reno-nv#service",
            "name": "Mobile Ceramic Coating",
            "serviceType": "Ceramic Coating",
            "url": "https://donofdetail.com/ceramic-coating-reno-nv",
            "provider": {"@id": "https://donofdetail.com/#business"},
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "800",
              "description": "Starting price for a sedan. Final quote depends on vehicle size and paint condition."
            },
            "areaServed": [
              {"@type": "City", "name": "Reno"},
              {"@type": "City", "name": "Sparks"},
              {"@type": "Place", "name": "Spanish Springs"},
              {"@type": "Place", "name": "Verdi"},
              {"@type": "Place", "name": "Sun Valley"}
            ],
            "description": "Professional ceramic coating installation providing UV protection and hydrophobic properties. Delivered via mobile unit to the Reno-Sparks area."
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
      <BreadcrumbSchema items={[{ name: 'Ceramic Coating Reno NV', url: 'https://donofdetail.com/ceramic-coating-reno-nv' }]} />

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="!font-sans text-xs !font-black uppercase !tracking-[0.2em] leading-normal text-don-ink mb-8 md:mb-12">Mobile Ceramic Coating in Reno & Sparks, NV</h1>
          <p aria-hidden="true" className="text-[clamp(2rem,11vw,9rem)] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            Ceramic<br/>Coating.
          </p>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl mb-12">
            The Nevada sun breaks down unprotected paint. We apply professional-grade ceramic coatings at your location, creating a hardened barrier against UV degradation, hard water, and oxidation. Protection that lasts years, not weeks.
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
              A professional ceramic coating is a liquid polymer (primarily composed of Silica or SiO2) that chemically bonds to a vehicle's factory clear coat. Once cured, it creates a hardened, glass-like, hydrophobic layer of protection that lasts between 2 to 5 years. This sacrificial barrier permanently resists UV ray degradation, prevents chemical etching from bird droppings, and repels water, making the vehicle significantly easier to clean and maintain in Reno's high-desert climate.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-don-bark text-don-oat py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="sr-only">Why Reno Demands Professional Ceramic Coating</h2>
            <p aria-hidden="true" className="text-[10vw] md:text-7xl font-display uppercase tracking-[-2px] leading-tight">
              Engineered for the high desert.
            </p>
          </div>
          <div className="space-y-8 font-light text-don-clay leading-relaxed text-lg">
            <p>
              The environment in the Reno-Sparks area is hostile to automotive finishes. From the high-altitude UV radiation that accelerates oxidation to the corrosive de-icing chemicals used during local winters, your vehicle's factory clear coat is constantly under attack. Traditional carnauba waxes and synthetic sealants degrade within weeks under these conditions.
            </p>
            <p>
              We bring a controlled, studio-level ceramic application process directly to your home. Utilizing professional-grade SiO2 compounds, we establish a permanent molecular bond with your vehicle's paint. This isn't a spray-on product bought at a retail store; this is a commercial-grade polymer that requires strict ambient temperature control, precise leveling, and dedicated infrared curing time.
            </p>
            <p>
              Before any coating touches the paint, the surface must be absolutely flawless. We perform comprehensive iron decontamination to pull embedded ferrous metals from the clear coat, followed by a multi-stage machine polish. If a coating is applied over swirl marks or oxidation, those defects are locked under a layer of glass for years. Our obsessive preparation ensures maximum gloss and bonding integrity.
            </p>
            <p>
              We serve clients across Reno and Sparks, frequently dispatching our mobile unit to private residences in Spanish Springs, Verdi, Sun Valley, and Hidden Valley. We supply our own spot-free deionized water, meaning no hard-water calcium deposits are introduced during the prep wash.
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

      <ServiceCTA headline="Lock in the gloss." />

      {/* Related Reading */}
      <section className="bg-don-oat py-24 px-6 lg:px-12 border-t border-don-clay/20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-12">From the Journal</p>
          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/blog/is-ceramic-coating-worth-it-reno" className="group border-b border-don-clay/20 pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-don-clay mb-3">Ceramic Coating</p>
              <h3 className="text-xl font-display uppercase tracking-[-1px] text-don-ink group-hover:text-don-clay transition-colors leading-tight">Is Ceramic Coating Worth It In Reno?</h3>
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
