import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ServiceLayout } from '../components/ServiceLayout';
import { useBooking } from '../context/BookingContext';

const CTA = () => {
  const { openBooking } = useBooking();
  return (
    <div className="bg-don-ink text-don-oat px-10 py-16 my-12 text-center flex flex-col items-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">Don of Detail | Reno, NV</p>
      <h3 className="text-5xl md:text-6xl font-display uppercase tracking-[-3px] mb-10">Get a Quote.</h3>
      <button 
        onClick={openBooking} 
        className="inline-block bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-12 py-5 rounded hover:bg-don-red/90 transition-transform hover:scale-105 active:scale-95 mb-6"
      >
        Request Quote
      </button>
      <p className="text-xs uppercase tracking-[0.2em] text-don-clay">
        Call or text: <a href="tel:+17752307035" className="hover:text-don-oat transition-colors">(775) 230-7035</a>
      </p>
    </div>
  );
};

const posts: Record<string, any> = {
  'is-ceramic-coating-worth-it-reno': {
    title: 'Is Ceramic Coating Worth It In Reno?',
    date: 'May 10, 2026',
    dateISO: '2026-05-10',
    readTime: '5 min read',
    author: 'Don of Detail',
    category: 'Ceramic Coating',
    metaDescription: 'Reno sun and Tahoe salt destroy factory clear coat. Learn exactly what ceramic coating is, how it works, and why physical paint preservation is required.',
    content: (
      <div className="space-y-12">

        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">Reno sits at over 4,500 feet of elevation. The sun damages clear coat much faster here than at sea level. Add the salt used on Tahoe roads in the winter and your vehicle takes a beating every single day.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">What is Ceramic Coating?</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">A ceramic coating is a liquid polymer applied by hand to the exterior of a vehicle. It chemically bonds with the factory paint to create a permanent or semi-permanent layer of protection.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">This layer prevents UV rays, chemical stains, and hard water from damaging the clear coat. Think of clear coat as the factory armor on your paint. Ceramic coating is the armor for your clear coat.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Why Reno Weather Destroys Car Paint</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">At high altitudes, UV radiation is significantly higher than at sea level. This high desert sun bakes unprotected clear coat daily.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">The heat expands the paint, allowing dust and contaminants to settle deep into the pores. During winter, vehicles face salt and brine mixtures on Nevada roads. These chemicals eat through standard wax in weeks. You need a physical barrier to stop oxidation.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Reno's alkaline dust is another factor most people overlook. The fine silica particles that settle on your hood after a windy day are abrasive. Every time you wipe them off with a rag, you are adding micro-scratches to the clear coat. A ceramic coating gives those particles something harder to land on and slide right off of.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Ceramic Coating vs Traditional Wax</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Wax washes off in two to four weeks. Ceramic coating lasts two to five years depending on the grade and maintenance.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Carnauba wax sits on top of the paint and melts under high heat. Ceramic coating utilizes silicon dioxide (SiO2) to form a hard, glass-like shell. It does not melt. It does not wash off with soap. It requires abrasion to remove.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">In Reno's summer heat, a standard wax job is essentially gone in three weeks. One ceramic coating installation, done correctly, outlasts dozens of wax applications and costs less per year.</p>
        </div>

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

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Installation Process</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Proper installation takes time. We wash the vehicle using the two-bucket method. We decontaminate the paint using iron removers and synthetic clay.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Then we perform paint correction. Paint correction is the process of machine polishing the clear coat to remove swirl marks and scratches. You cannot apply a ceramic coating over damaged paint. The coating locks in whatever is underneath it. We ensure the paint is flawless before application.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">After application, the coating requires 24 hours minimum in a sheltered environment to cure. We walk every client through the exact aftercare process before we leave.</p>
        </div>

        <CTA />

        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Will ceramic coating prevent rock chips?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: No. Ceramic coating prevents chemical damage and UV oxidation. It does not stop physical impact from rocks. You need Paint Protection Film (PPF) for that.</p>
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
    dateISO: '2026-05-28',
    readTime: '6 min read',
    author: 'Don of Detail',
    category: 'Education',
    metaDescription: 'Drive-through car washes destroy your paint by adding thousands of micro-scratches to your clear coat. Find out why the convenience is never worth the damage.',
    content: (
      <div className="space-y-12">

        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">You spent good money on your vehicle. Running it through a tunnel of spinning brushes destroys it. We do not take shortcuts at Don of Detail, and you should not either.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Micro-Scratch Reality</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Every time you use a drive-through car wash, you add thousands of micro-scratches to your clear coat. Detailers call these swirl marks.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Those giant spinning brushes are slapping your paint with the dirt and sand from every car that went through before yours. It is essentially sandpaper spinning at high speed against your vehicle.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">You may not see them right away. But look at your car under direct sunlight at an angle. You will see a web of hairline scratches covering every panel. That is the cumulative damage from months of tunnel washes. Under Reno's harsh sun, these scratches scatter light and make the paint look permanently dull and faded even on a relatively new vehicle.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Why Touchless Washes Are Not Safe Either</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Touchless washes do not use physical brushes, but they are not safe. Since nothing physically touches the car, these systems use harsh acidic chemicals to strip the dirt.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Those chemicals also strip your wax and sealants. This leaves your paint completely unprotected to bake in the Nevada sun. The chemicals are so aggressive they can even stain unprotected aluminum trim.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">If you have a ceramic coating, touchless washes degrade the hydrophobic layer over time. A coating that should last five years can be cut to two if you run it through an acidic touchless system regularly. The coating is not indestructible. It is just harder to destroy than wax.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Damage to Trim and Plastics</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Car wash chemicals do not just strip wax. They dry out plastic and rubber trim.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Over time, the acidic soaps cause the black trim on your vehicle to fade and turn white. The high-pressure water jets can also force water into seals and damage electronic sensors.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Rubber door seals and window gaskets take a hit too. The combination of harsh chemicals and mechanical friction from the brush blowers cracks and dries the rubber. Once that seal goes, you start getting wind noise and water leaks. None of this gets reversed by a fresh coat of tire shine.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">What Reno's Desert Conditions Add to the Problem</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Reno's dust is not just dirt. It is fine silica from the desert floor, plus brake dust, pollen, and particulate from the freeway. This material is abrasive at a microscopic level.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">When you pull into an automatic wash covered in this grit, the brushes grind all of it across your clear coat. It is not the brush that scratches you. It is every particle of desert debris trapped in that brush making contact with your paint at high speed.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Reno vehicles also tend to sit in the sun for hours every day. Heat softens clear coat slightly. A softened clear coat is more susceptible to scratching than a cool one. Running a hot vehicle straight into a brush wash on a summer afternoon is one of the worst things you can do for your paint.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The True Cost of Convenience</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">A drive-through wash costs $12. The paint correction required to fix the damage costs hundreds of dollars.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">You save ten minutes today, but you degrade the value of your vehicle permanently. Shortcuts always show. Real vehicle preservation requires patience and the correct methods.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Solution</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">The only safe way to wash a vehicle is a proper hand wash. We use the two-bucket method, grit guards, and fresh microfiber towels to ensure nothing scratches the paint.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">It takes discipline and time. But it is the only approach that does not cost you money in the long run. A properly maintained vehicle holds its value. One with oxidized paint and swirl-covered clear coat does not.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">If you do not have the time to hand wash, book a maintenance detail. That is exactly what we are here for. We come to your home or office and do it the right way while you go about your day.</p>
        </div>

        <CTA />

        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Are automatic car washes bad for new cars?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Automatic washes are especially bad for new cars because the factory clear coat is often softer and more susceptible to immediate scratching.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Can swirl marks be removed?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Swirl marks can be removed through paint correction, where we machine polish the clear coat to level the surface. Once corrected and protected with a ceramic coating, they will not come back if you hand wash properly.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Is it better to hand wash my car?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Hand washing with the two-bucket method and pH-neutral soap is the only way to wash a vehicle without scratching the paint.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Do touchless car washes remove wax?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. The aggressive chemicals required to break down dirt without friction will strip traditional waxes and sealants off your paint.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: How often should I wash my car in Reno?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Every two weeks at minimum. Reno's dust and UV exposure build up fast. Letting it sit for a month means the contamination bonds to the surface and requires more aggressive cleaning to remove.</p>
            </div>
          </div>
        </div>

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
  },
  'how-to-wash-a-ceramic-coated-car': {
    title: 'How To Wash Your Car After a Ceramic Coating',
    date: 'June 3, 2026',
    dateISO: '2026-06-03',
    readTime: '5 min read',
    author: 'Don of Detail',
    category: 'Education',
    metaDescription: 'Learn the exact two-bucket method required to maintain your ceramic coating. Never use automatic washes, and avoid cheap high-pH soaps that degrade your protection.',
    content: (
      <div className="space-y-12">

        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">A ceramic coating is a significant investment. It is the ultimate armor for your paint, but it still requires discipline to maintain. If you run it through a tunnel wash or use the abrasive brush at the coin-op, you are throwing your money away.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Golden Rule: Hand Wash Only</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Never use an automatic car wash. The abrasive brushes will scratch the coating and introduce swirl marks, while the harsh acidic chemicals will degrade its hydrophobic properties.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Your ceramic coating creates a glass-like shell over your clear coat, making dirt and grime slide off easily. The only safe way to clean this surface is a proper, meticulous hand wash.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Two-Bucket Method</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">We do not take shortcuts, and neither should you. Fill one bucket with clean, soapy water, and a second bucket with plain rinse water. Place a grit guard at the bottom of both.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Dip your premium microfiber wash mitt into the soapy water, wash a panel, and then rinse the mitt in the plain water bucket. Rub it against the grit guard to dislodge dirt. This ensures you never rub dirt back into your pristine paint.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Use the Right Chemicals</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">High-pH and highly acidic soaps will strip the hydrophobic layer off your coating. Only use a dedicated, pH-neutral auto shampoo designed for ceramic coatings.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Do not use wash and wax products. Carnauba wax will clog the ceramic coating's microscopic pores and completely ruin its water-beading effect. The coating is your protection. You do not need cheap filler waxes on top of it.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Drying Without Scratching</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Most micro-scratches happen during the drying process. Because a ceramic coating is hydrophobic, water will naturally sheet off. Use a forced-air blower to dry the crevices and wheels without touching the paint.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">If you must use a towel, use an ultra-plush microfiber drying towel. Never drag the towel with pressure. Simply lay it flat and gently pull it across the surface to blot the water.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Maintenance Wash Schedule</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">We recommend washing your vehicle every two weeks to prevent environmental contaminants from bonding to the coating. Every 6 to 12 months, apply a dedicated ceramic booster spray to revitalize the SiO2 layer and maximize its lifespan.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">For our clients, we offer ongoing maintenance wash services to guarantee the coating is preserved exactly as it was the day it cured.</p>
        </div>

        <CTA />

        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Does a ceramic coating mean I never have to wash my car?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: No. It means washing becomes much faster and easier. Dirt still accumulates, but it wipes away effortlessly instead of bonding to the paint.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Can I use dish soap to wash it?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: No. Dish soap is highly alkaline and will aggressively degrade the coating. Only use dedicated pH-neutral auto shampoo.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: What if I get water spots?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Reno's hard water will leave mineral deposits if allowed to dry in the sun. Dry the car immediately in the shade. If spots occur, use a dedicated water spot remover safe for coatings.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Related Reading</h2>
          <ul className="space-y-4">
            <li><Link to="/blog/is-ceramic-coating-worth-it-reno" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Is Ceramic Coating Worth It In Reno?</Link></li>
            <li><Link to="/blog/the-truth-about-automatic-car-washes" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">The Truth About Automatic Car Washes</Link></li>
            <li><Link to="/ceramic-coating-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Premium Ceramic Coating Services</Link></li>
          </ul>
        </div>

      </div>
    )
  },
  'preparing-boat-rv-for-lake-tahoe': {
    title: 'Preparing Your Boat or RV for Lake Tahoe',
    date: 'June 15, 2026',
    dateISO: '2026-06-15',
    readTime: '6 min read',
    author: 'Don of Detail',
    category: 'Boat & RV',
    metaDescription: "Lake Tahoe's high-altitude UV rays destroy marine gelcoat fast. Learn why physical oxidation removal and marine-grade ceramic coatings are mandatory for preservation.",
    content: (
      <div className="space-y-12">

        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">A boat or RV is a massive investment. Dragging it up the mountain to Lake Tahoe or out to Pyramid Lake without protection is irresponsible. The high-altitude sun in Northern Nevada will destroy unprotected gelcoat in a single season.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Gelcoat is Not Clear Coat</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Automotive paint has a clear coat layer. Boats and RVs have gelcoat. Gelcoat is significantly more porous and prone to rapid oxidation when exposed to intense UV rays. When it oxidizes, it turns chalky, dull, and brittle.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Standard over-the-counter waxes cannot stop this process. Wax sits on top of the pores and melts away in the Reno heat within weeks, leaving the gelcoat fully exposed.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">At 6,200 feet, Lake Tahoe gets even more UV exposure than Reno. Most boat owners are surprised to find that a hull they stored in Reno and only used on Tahoe for one summer has already begun to oxidize. Altitude accelerates everything.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Signs Your Gelcoat Needs Attention Now</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Run your hand across the hull. If it comes away with a white chalky residue, the oxidation has already started. If the surface looks faded, matte, or yellowed in patches, that is stage two. Left untreated, the gelcoat will become brittle and start to crack.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">At that point, restoration is still possible but it takes significantly more time, labor, and product. The earlier you catch it, the less it costs to fix and the better the result. Do not wait until the season is over.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Oxidation Removal Process</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">You cannot simply buff an oxidized boat and expect it to shine. True restoration requires multi-stage machine polishing.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">We use heavy cutting compounds and specialized wool pads to physically strip away the dead, chalky layer of oxidized gelcoat. This reveals the pristine, factory-fresh gelcoat underneath. It is labor-intensive, but it is the only correct method.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">A single-stage buff with a light polish does not fix heavy oxidation. It fills it temporarily and makes it look better for a few weeks. Then it comes right back. The only real fix is removing the dead material entirely.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Boat Ceramic Coatings</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Once the oxidation is removed, the fresh gelcoat must be sealed immediately. We apply marine-grade ceramic coatings designed specifically for porous gelcoats.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">A marine ceramic coating creates a permanent hydrophobic barrier. It stops UV oxidation. Hard water spots from the lake slide right off instead of baking into the hull. After a day on Tahoe, a quick rinse is all it takes to have the boat looking clean again.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Interior Preservation</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">The hull is only half the battle. Boat vinyl and RV leather crack under the Nevada sun if they are not maintained.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">We perform deep extraction on all interior carpets to remove sand and algae, and we apply heavy-duty UV-blocking conditioners to all vinyl and leather seating. This keeps the material supple and prevents the cracking that ruins boat interiors.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">RV interiors face the same problem. The combination of heat, altitude UV, and constant storage conditions dries out every surface. Dashboard materials, upholstery, and rubber seals all need conditioning before the season starts and after it ends.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Before the Season vs. After</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Pre-season detailing is the right time to apply ceramic coatings and conditioners. You want that protection in place before the first UV exposure of the year.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Post-season detailing removes the salt, mineral deposits, and biological matter before it bonds permanently over winter storage. Both matter. The boats and RVs we see with the best condition after years of use are the ones detailed twice a year without fail.</p>
        </div>

        <CTA />

        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: How much does boat detailing cost in Reno?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: It depends on the size of the vessel and the level of oxidation. Heavy oxidation removal requires significantly more time and labor than a standard wash and seal. We provide custom quotes based on linear footage and current condition.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Will a ceramic coating stop hard water spots?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: It creates a hydrophobic barrier that prevents minerals from etching directly into the gelcoat. Spots can still form if water is left to dry in the sun, but they wipe away easily without requiring harsh acids.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Do you come to my storage unit?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Yes. Our mobile rig is fully self-contained. We perform full gelcoat restorations and ceramic coatings anywhere in the Reno and Sparks areas.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: How often should I detail my boat or RV?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: At minimum, once before the season and once after. If you use it heavily through the summer, a mid-season wash and inspection is a good idea. Prevention is always cheaper than restoration.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Related Reading</h2>
          <ul className="space-y-4">
            <li><Link to="/boat-detailing-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Professional Boat Detailing Services</Link></li>
            <li><Link to="/rv-detailing-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Mobile RV Detailing & Restoration</Link></li>
            <li><Link to="/ceramic-coating-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Ceramic Coating Protection</Link></li>
          </ul>
        </div>

      </div>
    )
  },
  'paint-correction-vs-waxing': {
    title: "Paint Correction vs. Waxing: Why Wax Won't Fix Your Scratches",
    date: 'June 22, 2026',
    dateISO: '2026-06-22',
    readTime: '5 min read',
    author: 'Don of Detail',
    category: 'Education',
    metaDescription: 'Discover why traditional wax only temporarily hides swirl marks, and why professional paint correction is the only permanent solution for damaged clear coat in Reno.',
    content: (
      <div className="space-y-12">

        <div>
          <p className="text-xl md:text-2xl font-light text-don-ink/90 leading-relaxed">Applying wax over scratched paint is a band-aid. You are temporarily filling gaps with grease that will melt away in the Nevada sun within a month. If you want a flawless, mirror-like finish, the standard is not optional: you need paint correction.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">What Are Swirl Marks?</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">If you look at your car under direct sunlight and see what looks like spider webs covering the paint, those are swirl marks. They are thousands of microscopic scratches in the clear coat layer.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">These are usually caused by automatic drive-through car washes, using dirty wash mitts, or aggressively drying the car with a rough towel. They dull the paint's reflection and make the car look aged.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">What Wax Actually Does</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Traditional carnauba wax is a temporary filler. When you apply wax over swirl marks, the wax simply fills into those microscopic valleys. For a few weeks, the surface appears flat and the scratches seem to vanish.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">But it is an illusion. As soon as the wax degrades from UV exposure, heat, or a strong car wash soap, the filler washes away. The scratches return exactly as they were.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">What is Paint Correction?</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">Paint correction is the physical leveling of the clear coat. Instead of filling the valleys, we lower the peaks.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">Using advanced rotary buffers and dual-action machine polishers and specialized abrasive compounds, we safely shave down the microscopic edges of the scratches until the entire clear coat surface is perfectly flat. This restores the factory reflection permanently.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Why It Is Required Before Ceramic Coatings</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">You cannot apply a ceramic coating over bad paint. A ceramic coating hardens into a permanent, glass-like shell.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">If you coat a car that has swirl marks, you are locking those swirl marks under a layer of glass permanently. We mandate paint correction before any ceramic coating installation to ensure the finish we are preserving is absolutely flawless.</p>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">The Standard Is Not Optional</h2>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed mb-6">A true, defect-free finish takes hours of disciplined machine work. If someone offers to buff your car in 45 minutes, they are not correcting the paint. They are glazing it with heavy fillers.</p>
          <p className="text-lg text-don-ink/80 font-light leading-relaxed">At Don of Detail, we measure the paint thickness before we begin, use the highest quality compounds, and never cut corners. We bring the full correction setup directly to your driveway in Reno and Sparks.</p>
        </div>

        <CTA />

        <div className="pt-8 pb-8 border-t border-b border-don-clay/20 mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Does paint correction remove deep scratches?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: If your fingernail catches in the scratch, it has likely breached the clear coat entirely. We cannot correct past the clear coat. Deep scratches require touch-up paint or a body shop. We fix clear coat defects: swirls, haze, and light scratches.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: Will paint correction make my paint too thin?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Factory clear coat is thin, but we only remove microscopic layers measured in microns. We use ultrasonic thickness gauges to ensure the clear coat remains safe and structurally sound throughout the process.</p>
            </div>
            <div>
              <p className="text-lg font-bold text-don-ink mb-2">Q: How often do I need paint correction?</p>
              <p className="text-lg text-don-ink/80 font-light leading-relaxed">A: Ideally, only once. After we correct it, we lock it in with a ceramic coating. If you follow proper hand-washing techniques, you will not need correction again for years.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-6">Related Reading</h2>
          <ul className="space-y-4">
            <li><Link to="/paint-correction-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Professional Paint Correction Services</Link></li>
            <li><Link to="/ceramic-coating-reno-nv" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">Ceramic Coating Protection</Link></li>
            <li><Link to="/blog/the-truth-about-automatic-car-washes" className="text-don-red hover:text-don-ink transition-colors font-bold uppercase tracking-[0.1em] text-sm">The Truth About Automatic Car Washes</Link></li>
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
        <link rel="canonical" href={`https://donofdetail.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Don of Detail`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://donofdetail.com/blog/${slug}`} />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Don of Detail`} />
        <meta name="twitter:description" content={post.metaDescription} />

        {/* Article Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${post.title}",
            "description": "${post.metaDescription}",
            "author": {"@type": "Organization", "name": "${post.author}"},
            "datePublished": "${post.dateISO}",
            "dateModified": "${post.dateISO}",
            "publisher": {
              "@type": "Organization",
              "name": "Don of Detail",
              "logo": {"@type": "ImageObject", "url": "https://donofdetail.com/logo.png"}
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
            <span>—</span>
            <span>{post.date}</span>
            <span>—</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-don-ink/80 font-light leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-don-ink prose-a:text-don-red prose-strong:text-don-ink">
          {post.content}
        </div>
      </article>
    </ServiceLayout>
  );
}
