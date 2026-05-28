import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';

export default function TermsOfService() {
  return (
    <ServiceLayout>
      <Helmet>
        <title>Terms of Service | Don of Detail</title>
        <meta name="description" content="Terms of Service for Don of Detail LLC." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-don-oat text-don-ink min-h-screen py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Effective Date: May 28, 2026</p>
            <h1 className="text-5xl lg:text-7xl font-display uppercase tracking-[-2px] mb-4">Terms of Service</h1>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-don-clay">Don of Detail LLC</p>
          </div>

          <div className="space-y-12 text-don-ink/80 font-light leading-relaxed">
            <p>Welcome to Don of Detail LLC. By booking a service with us, you agree to the terms outlined below.</p>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Our Services</h2>
              <p className="mb-4">Don of Detail LLC provides professional mobile auto detailing services including interior and exterior detailing, paint correction, ceramic coatings, and other vehicle appearance enhancements.</p>
              <p>Our services are designed to significantly improve your vehicle's appearance. However, detailing and paint correction do not guarantee complete removal of all scratches, stains, etching, oxidation, or imperfections. Results vary depending on the vehicle's age, condition, and prior damage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Booking, Deposits & Cancellations</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-don-red">
                <li>Appointments must be scheduled in advance through our website, phone, or approved booking platforms.</li>
                <li>A non-refundable deposit may be required to secure your appointment. Deposits may be transferred one time if you reschedule at least 48 hours before your appointment.</li>
                <li>Because we are a mobile service, arrival times are estimated. Factors such as traffic, severe weather (high winds, extreme heat, or rain), or previous job conditions may affect scheduling. We reserve the right to reschedule due to extreme weather to ensure the safety of our team and the quality of the service.</li>
                <li>Cancellations or rescheduling requests made less than 48 hours before your appointment will result in forfeiture of the deposit and may require a new deposit to rebook.</li>
                <li>No-shows or failure to provide access to the vehicle at the scheduled time will result in loss of deposit and possible additional fees.</li>
                <li>We reserve the right to refuse or discontinue service if the location is unsafe, poses a biohazard risk (e.g., mold, excessive bodily fluids, pest infestations), or is otherwise unsuitable for mobile detailing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Pricing & Payment</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-don-red">
                <li>Pricing is based on vehicle size, condition, and selected services. Quotes provided without visual inspection are estimates only.</li>
                <li>Final pricing may be adjusted upon inspection if the vehicle condition differs significantly from what was originally described (excessive pet hair, staining, contamination, neglect, biohazards, etc.).</li>
                <li>Payment is due in full immediately upon completion of the service. We accept cash, major credit cards, and approved digital payments. Late payments may be subject to a late fee of 5% per month as permitted by Nevada law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Ceramic Coating Terms</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-don-red">
                <li>Ceramic coatings require proper maintenance to perform as intended.</li>
                <li>Aftercare instructions must be followed. Use of automatic car washes, harsh chemicals, improper washing techniques, or neglect may reduce coating performance.</li>
                <li>No manufacturer or performance warranty is provided unless clearly stated in writing at the time of service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Liability & Pre-Existing Damage</h2>
              <p className="mb-4">Don of Detail LLC operates with the utmost care, but we are not liable for pre-existing damage or issues that arise due to the weakened state of the vehicle's materials. We are not responsible for:</p>
              <ul className="space-y-2 pl-4 border-l-2 border-don-clay/30 mb-6">
                <li>Pre-existing paint defects, clear coat failure, flaking, or rock chips that may worsen during normal washing or compounding processes.</li>
                <li>Pre-existing interior damage, including weakened leather, tears, fading, or brittle plastics.</li>
                <li>Aftermarket modifications, loose trim, or prior repairs failing.</li>
                <li>Mechanical or electrical failures.</li>
                <li>Lost or damaged personal items. Customers MUST remove all personal belongings, valuables, and car seats prior to our arrival. We will not clean under or around installed car seats due to liability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Mobile Detailing Site Requirements</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-don-red">
                <li>We require adequate space to park our service vehicle and open all doors of the vehicle being detailed.</li>
                <li>If the service location is an apartment complex, office building, or HOA-governed neighborhood, it is the customer's responsibility to ensure mobile detailing is permitted on the premises. We are not liable for fines or violations.</li>
                <li>While we carry our own water and power, access to a dedicated electrical outlet and water spigot may be requested for certain heavy-duty jobs or specific locations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Governing Law</h2>
              <p>These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the State of Nevada. Any disputes shall be resolved exclusively in the courts located in Washoe County, Nevada.</p>
            </section>

            <div className="border-t border-don-clay/20 pt-12 space-y-2 text-xs font-bold uppercase tracking-[0.2em] text-don-clay">
              <p className="text-don-ink">Don of Detail LLC</p>
              <p>Sparks, Nevada</p>
              <p>Email: <a href="mailto:contact@donofdetail.com" className="hover:text-don-ink transition-colors">contact@donofdetail.com</a></p>
              <p>Phone: <a href="tel:+17752307035" className="hover:text-don-ink transition-colors">(775) 230-7035</a></p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
