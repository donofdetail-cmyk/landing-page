import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ServiceLayout } from '../components/ServiceLayout';

const posts: Record<string, any> = {
  'is-ceramic-coating-worth-it-reno': {
    title: 'Is Ceramic Coating Worth It In Reno?',
    date: 'May 10, 2026',
    author: 'Don of Detail',
    category: 'Ceramic Coating',
    metaDescription: 'Reno sun and Tahoe salt destroy factory clear coat. Learn exactly what ceramic coating is, how it works, and why physical paint preservation is required.',
    content: (
      <div className="space-y-12">
        
        {/* Intro */}
        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">Reno sits at over 4,500 feet of elevation. The sun damages clear coat much faster here than at sea level. Add the salt used on Tahoe roads in the winter and your vehicle takes a beating every single day.</p>
        </div>
        
        {/* H2 1 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">What is Ceramic Coating?</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">A ceramic coating is a liquid polymer applied by hand to the exterior of a vehicle. It chemically bonds with the factory paint to create a permanent or semi-permanent layer of protection.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">This layer prevents UV rays, chemical stains, and hard water from damaging the clear coat. Think of clear coat as the factory armor on your paint. Ceramic coating is the armor for your clear coat.</p>
        </div>

        {/* H2 2 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Why Reno Weather Destroys Car Paint</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">At high altitudes, UV radiation is significantly higher than at sea level. This high desert sun bakes unprotected clear coat daily.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">The heat expands the paint, allowing dust and contaminants to settle deep into the pores. During winter, vehicles face salt and brine mixtures on Nevada roads. These chemicals eat through standard wax in weeks. You need a physical barrier to stop oxidation.</p>
        </div>

        {/* H2 3 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Ceramic Coating vs Traditional Wax</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Wax washes off in two to four weeks. Ceramic coating lasts two to five years depending on the grade and maintenance.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Carnauba wax sits on top of the paint and melts under high heat. Ceramic coating utilizes silicon dioxide (SiO2) to form a hard, glass-like shell. It does not melt. It does not wash off with soap. It requires abrasion to remove.</p>
        </div>

        {/* H2 4 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Core Benefits of Ceramic Coating</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Ceramic coating cuts your wash time in half. It creates a hydrophobic surface. Water beads up and rolls off, taking dirt with it.</p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-don-ink/80 font-light leading-relaxed">
            <li><strong>UV Resistance:</strong> Blocks UV rays from oxidizing and fading the paint.</li>
            <li><strong>Chemical Resistance:</strong> Stops bird droppings and tree sap from etching into the clear coat.</li>
            <li><strong>Hydrophobic Properties:</strong> Forces water and mud to slide off the surface instantly.</li>
            <li><strong>Enhanced Gloss:</strong> Adds a permanent, glass-like shine that wax cannot replicate.</li>
          </ul>
        </div>

        {/* H2 5 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Installation Process</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Proper installation takes time. We wash the vehicle using the two-bucket method. We decontaminate the paint using iron removers and synthetic clay.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Then we perform paint correction. Paint correction is the process of machine polishing the clear coat to remove swirl marks and scratches. You cannot apply a ceramic coating over damaged paint. The coating locks in whatever is underneath it. We ensure the paint is flawless before application.</p>
        </div>

        {/* FAQ Block */}
        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Will ceramic coating prevent rock chips?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: No. Ceramic coating prevents chemical damage and UV oxidation. It does not stop physical impact from rocks. You need Paint Protection Film (PPF) to stop rock chips.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: How long does ceramic coating take to apply?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: A proper installation takes two to three days. This includes decontamination, paint correction, application, and curing time.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Do I still need to wash my car?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Ceramic coating keeps the car cleaner for longer, but dirt still accumulates. Hand washing becomes much faster and easier.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Can I take my coated car to an automatic car wash?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: No. Drive-through car washes use abrasive brushes and harsh acidic chemicals. These degrade the coating and scratch the paint. Hand wash only.</p>
            </div>
          </div>
        </div>

        {/* Related Reading */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Related Reading</h2>
          <ul className="space-y-4">
            <li><Link to="/blog/the-truth-about-automatic-car-washes" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">The Truth About Automatic Car Washes</Link></li>
            <li><Link to="/ceramic-coating-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Premium Ceramic Coating Services</Link></li>
            <li><Link to="/paint-correction-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Professional Paint Correction</Link></li>
          </ul>
        </div>

      </div>
    )
  },
  'the-truth-about-automatic-car-washes': {
    title: 'The Truth About Automatic Car Washes: Why Convenience is Killing Your Clear Coat',
    date: 'May 28, 2026',
    author: 'Don of Detail',
    category: 'Education',
    metaDescription: 'Drive-through car washes destroy your paint by adding thousands of micro-scratches to your clear coat. Find out why the convenience is never worth the damage.',
    content: (
      <div className="space-y-12">
        
        {/* Intro */}
        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">You spent good money on your vehicle. Running it through a tunnel of spinning brushes destroys it. We do not take shortcuts at Don of Detail, and you should not either.</p>
        </div>
        
        {/* H2 1 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Micro-Scratch Reality</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Every time you use a drive-through car wash, you add thousands of micro-scratches to your clear coat. Detailers call these swirl marks.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Those giant spinning brushes are slapping your paint with the dirt and sand from every car that went through before yours. It is essentially sandpaper spinning at high speed against your vehicle.</p>
        </div>

        {/* H2 2 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Why Touchless Washes Are Not Safe</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Touchless washes do not use physical brushes, but they are not safe. Since nothing physically touches the car, these systems use harsh acidic chemicals to strip the dirt.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Those chemicals also strip your wax and sealants. This leaves your paint completely unprotected to bake in the Nevada sun. The chemicals are so aggressive they can even stain unprotected aluminum trim.</p>
        </div>

        {/* H2 3 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Damage to Trim and Plastics</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Car wash chemicals do not just strip wax. They dry out plastic and rubber trim.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Over time, the acidic soaps cause the black trim on your vehicle to fade and turn white. The high-pressure water jets can also force water into seals and damage electronic sensors.</p>
        </div>

        {/* H2 4 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The True Cost of Convenience</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">A drive-through wash costs $12. The paint correction required to fix the damage costs hundreds of dollars.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">You save ten minutes today, but you degrade the value of your vehicle permanently. Shortcuts always show. Real vehicle preservation requires patience and the correct methods.</p>
        </div>

        {/* H2 5 */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Solution</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">The only safe way to wash a vehicle is a proper hand wash. We use the two-bucket method, grit guards, and fresh microfiber towels to ensure nothing scratches the paint.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">It takes discipline and time. Keep your car out of the tunnel.</p>
        </div>

        {/* FAQ Block */}
        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Are automatic car washes bad for new cars?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Automatic washes are especially bad for new cars because the factory clear coat is often softer and more susceptible to immediate scratching.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Can swirl marks be removed?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Swirl marks can be removed through a process called paint correction, where we machine polish the clear coat to level the surface.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Is it better to hand wash my car?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Hand washing with the two-bucket method and pH-neutral soap is the only way to wash a vehicle without scratching the paint.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Do touchless car washes remove wax?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. The aggressive chemicals required to break down dirt without friction will strip traditional waxes and sealants off your paint.</p>
            </div>
          </div>
        </div>

        {/* Related Reading */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Related Reading</h2>
          <ul className="space-y-4">
            <li><Link to="/blog/is-ceramic-coating-worth-it-reno" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Is Ceramic Coating Worth It In Reno?</Link></li>
            <li><Link to="/auto-detailing-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Mobile Auto Detailing Services</Link></li>
            <li><Link to="/paint-correction-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Professional Paint Correction</Link></li>
          </ul>
        </div>

      </div>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  
  if (!slug || !posts[slug]) {
    return <Navigate to="/404" />;
  }

  const post = posts[slug];

  return (
    <ServiceLayout>
      <Helmet>
        <title>{post.title} | Don of Detail</title>
        <meta name="description" content={post.metaDescription} />
        
        {/* Article Schema for AEO/SEO */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${post.title}",
            "description": "${post.metaDescription}",
            "author": {"@type": "Person", "name": "${post.author}"},
            "datePublished": "2026-05-15",
            "publisher": {
              "@type": "Organization",
              "name": "Don of Detail",
              "logo": {"@type": "ImageObject", "url": "https://www.donofdetail.com/logo.png"}
            }
          }`}
        </script>
      </Helmet>

      <article className="pt-32 lg:pt-48 pb-32 max-w-3xl mx-auto px-6 min-h-[70vh] bg-don-oat text-don-ink">
        <Link to="/blog" className="inline-block text-don-clay hover:text-don-ink transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-16 border-b border-don-clay/40 hover:border-don-ink pb-1">
          Return to Journal
        </Link>
        
        <header className="mb-16 border-b border-don-clay/20 pb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">{post.category}</p>
          <h1 className="text-5xl lg:text-7xl font-display uppercase tracking-[-2px] text-don-ink leading-[0.9] mb-8">{post.title}</h1>
          <div className="flex items-center gap-4 text-don-clay text-xs uppercase tracking-[0.2em]">
            <span>{post.author}</span>
            <span>&mdash;</span>
            <span>{post.date}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-don-ink/80 font-light leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-don-ink prose-a:text-don-red prose-strong:text-don-ink">
          {post.content}
        </div>
      </article>
    </ServiceLayout>
  );
}
