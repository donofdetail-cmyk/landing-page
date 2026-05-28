import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';

export default function PrivacyPolicy() {
  return (
    <ServiceLayout>
      <Helmet>
        <title>Privacy Policy | Don of Detail</title>
        <meta name="description" content="Privacy Policy for Don of Detail LLC." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-don-oat text-don-ink min-h-screen py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Effective Date: May 28, 2026</p>
            <h1 className="text-5xl lg:text-7xl font-display uppercase tracking-[-2px] mb-4">Privacy Policy</h1>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-don-clay">Don of Detail LLC</p>
          </div>

          <div className="space-y-12 text-don-ink/80 font-light leading-relaxed">
            <p>Don of Detail LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
              <p className="mb-4">The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              <ul className="space-y-2 list-disc pl-5 marker:text-don-red">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Vehicle Information (Make, Model, Year, Condition, License Plate for internal tracking only)</li>
                <li>Service Location Address (including GPS location when navigating to mobile appointments)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We use the information we collect or receive:</p>
              <ul className="space-y-2 list-disc pl-5 marker:text-don-red">
                <li>To facilitate service delivery and booking management.</li>
                <li>To send administrative information to you regarding your appointment or changes to our terms, conditions, and policies.</li>
                <li>To fulfill and manage your orders, payments, returns, and exchanges.</li>
                <li>To request feedback and to contact you about your use of our services.</li>
                <li>To deliver targeted advertising and promotional communications to you (with your consent where required by law).</li>
                <li>To protect our business against fraudulent bookings or liability claims.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Will Your Information Be Shared With Anyone?</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services (such as our payment processors or booking software providers), to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade any of your information with third parties for their promotional purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Nevada Privacy Rights</h2>
              <p>Under Nevada law (SB 220), Nevada residents may opt out of the sale of certain covered information collected by a website operator. Don of Detail LLC does not currently sell your covered information. However, if you are a Nevada resident, you may submit a request to opt out of any potential future sales under Nevada law by contacting us at contact@donofdetail.com. Please include "Nevada Privacy Rights Request" in the subject line.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">How Long Do We Keep Your Information?</h2>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Photo and Media Release</h2>
              <p>We routinely document our work via photography and videography for quality assurance, portfolio development, and marketing purposes. By utilizing our services, you consent to the use of images or videos of your vehicle. We will always attempt to obscure or exclude license plates and will never disclose your specific home address or personal identity in connection with these images unless explicit permission is granted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-[-1px] text-don-ink mb-4">Contact Us</h2>
              <p className="mb-4">If you have questions or comments about this notice, you may email us or contact us by post at:</p>
              <div className="border-t border-don-clay/20 pt-12 space-y-2 text-xs font-bold uppercase tracking-[0.2em] text-don-clay">
                <p className="text-don-ink">Don of Detail LLC</p>
                <p>Sparks, Nevada</p>
                <p>Email: <a href="mailto:contact@donofdetail.com" className="hover:text-don-ink transition-colors">contact@donofdetail.com</a></p>
                <p>Phone: <a href="tel:+17752307035" className="hover:text-don-ink transition-colors">(775) 230-7035</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
