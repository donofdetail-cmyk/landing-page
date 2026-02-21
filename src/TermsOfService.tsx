import { Link } from 'react-router-dom';

const Logo = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <img
        src="/logo.png"
        alt="Don of Detail logo"
        className={className}
        style={{ mixBlendMode: 'lighten', ...style }}
    />
);

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-don-black text-don-cream font-sans">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-don-black/90 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <Logo className="h-16 w-auto" />
                    </Link>
                    <Link to="/" className="text-sm font-semibold uppercase tracking-widest text-don-gold hover:text-don-gold/80 transition-colors">
                        ← Back
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
                <div className="mb-12">
                    <p className="text-don-cream/50 text-sm uppercase tracking-widest mb-3">Effective Date: February 2026</p>
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-don-gold mb-2">Terms of Service</h1>
                    <p className="text-don-cream/60 font-light">Don of Detail LLC</p>
                    <div className="w-24 h-0.5 bg-don-gold mt-6" />
                </div>

                <div className="space-y-10 text-don-cream/80 font-light leading-relaxed">
                    <p>Welcome to Don of Detail LLC. By booking a service with us, you agree to the terms outlined below.</p>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Our Services</h2>
                        <p className="mb-3">Don of Detail LLC provides professional mobile auto detailing services including interior and exterior detailing, paint correction, ceramic coatings, and other vehicle appearance enhancements.</p>
                        <p>Our services are designed to significantly improve your vehicle's appearance. However, detailing and paint correction do not guarantee complete removal of all scratches, stains, etching, oxidation, or imperfections. Results vary depending on the vehicle's age, condition, and prior damage.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Booking, Deposits &amp; Cancellations</h2>
                        <ul className="space-y-3 list-none">
                            <li>Appointments must be scheduled in advance through our website, phone, or approved booking platforms.</li>
                            <li>A deposit is required to secure your appointment. Deposits are non-refundable but may be transferred one time if you reschedule at least 48 hours before your appointment.</li>
                            <li>Because we are a mobile service, arrival times are estimated. Factors such as traffic, weather, or previous job conditions may affect scheduling. We will communicate any significant delays.</li>
                            <li>Cancellations or rescheduling requests made less than 48 hours before your appointment will result in forfeiture of the deposit and may require a new deposit to rebook.</li>
                            <li>No-shows or failure to provide access to the vehicle at the scheduled time will result in loss of deposit and possible additional fees.</li>
                            <li>We reserve the right to refuse or discontinue service if the location is unsafe or unsuitable. This includes hazardous weather, unsafe surfaces, aggressive animals, restricted access, or unsafe working conditions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Pricing &amp; Payment</h2>
                        <ul className="space-y-3 list-none">
                            <li>Pricing is based on vehicle size, condition, and selected services.</li>
                            <li>Final pricing may be adjusted upon inspection if the vehicle condition differs significantly from what was originally described (excessive pet hair, staining, contamination, neglect, etc.).</li>
                            <li>Vehicles containing excessive trash, mold, bodily fluids, insects, or hazardous materials may incur additional charges or be refused service.</li>
                            <li>Payment is due in full immediately upon completion unless otherwise agreed in writing.</li>
                            <li>By submitting payment, you agree to contact us directly to resolve any concerns before initiating a chargeback.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Customer Responsibilities</h2>
                        <ul className="space-y-3 list-none">
                            <li>Customers are responsible for removing all personal belongings prior to service. We are not responsible for lost or damaged personal items left in the vehicle.</li>
                            <li>Please disclose any pre-existing damage, fragile components, aftermarket modifications, or prior repairs before service begins.</li>
                            <li>We are not responsible for damage to worn, brittle, loose, previously repaired, or aftermarket parts, including trim, plastics, electronics, or emblems.</li>
                            <li>Customers must provide safe, legal, and reasonable access to the vehicle at the service location.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Ceramic Coating Terms</h2>
                        <ul className="space-y-3 list-none">
                            <li>Ceramic coatings require proper maintenance to perform as intended.</li>
                            <li>Aftercare instructions must be followed. Use of automatic car washes, harsh chemicals, improper washing techniques, or neglect may reduce coating performance.</li>
                            <li>Coating longevity depends on maintenance, environmental exposure, and driving conditions.</li>
                            <li>No manufacturer or performance warranty is provided unless clearly stated in writing at the time of service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Satisfaction Policy</h2>
                        <p className="mb-3">Your satisfaction matters to us.</p>
                        <ul className="space-y-3 list-none">
                            <li>If you have any concerns, you must notify us within 24 hours of service completion. We will make reasonable efforts to address verified concerns, which may include re-service or partial refund at our discretion.</li>
                            <li>Failure to notify us within 24 hours indicates acceptance of the completed service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Liability</h2>
                        <p className="mb-3">Don of Detail LLC is not responsible for:</p>
                        <ul className="space-y-2 pl-4 border-l border-don-gold/30">
                            <li>Pre-existing damage</li>
                            <li>Normal wear and tear</li>
                            <li>Aftermarket modifications or prior repairs</li>
                            <li>Mechanical or electrical failures</li>
                            <li>Environmental factors after service</li>
                            <li>Acts of nature, vandalism, or theft after service</li>
                        </ul>
                        <p className="mt-4">Our maximum liability for any claim related to our services will not exceed the amount paid for the specific service performed.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Photo &amp; Video Use</h2>
                        <p>We may take photos or videos of vehicles before, during, and after service for marketing or documentation purposes unless you request otherwise in writing prior to your appointment.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Changes to These Terms</h2>
                        <p>We reserve the right to update these Terms of Service at any time. The most current version will always be available on our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Governing Law</h2>
                        <p className="mb-3">These terms are governed by the laws of the State of Nevada.</p>
                        <p>Any disputes will first be addressed through good faith communication and mediation before legal action is pursued.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Force Majeure</h2>
                        <p>We are not liable for delays or inability to perform services due to circumstances beyond our control, including severe weather, natural disasters, supply shortages, equipment failure, or government restrictions.</p>
                    </section>

                    <p>If you have any questions about these terms, please contact us before booking your appointment.</p>

                    <div className="border-t border-white/10 pt-8 space-y-1 text-don-cream/50 text-sm">
                        <p className="font-semibold text-don-cream/70">Don of Detail LLC</p>
                        <p>Sparks, Nevada</p>
                        <p>Email: <a href="mailto:contact@donofdetail.com" className="text-don-gold hover:underline">contact@donofdetail.com</a></p>
                        <p>Phone: <a href="tel:+17752307035" className="text-don-gold hover:underline">(775) 230-7035</a></p>
                    </div>
                </div>
            </main>

            <footer className="bg-don-black py-10 border-t border-white/10 text-center text-don-cream/40 text-sm font-light tracking-wide">
                <div className="flex justify-center items-center mb-4">
                    <Logo className="w-10 h-10 object-contain opacity-70" />
                </div>
                <p>&copy; {new Date().getFullYear()} Don of Detail. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-3 text-xs">
                    <Link to="/terms" className="hover:text-don-gold transition-colors">Terms of Service</Link>
                    <Link to="/privacy" className="hover:text-don-gold transition-colors">Privacy Policy</Link>
                </div>
            </footer>
        </div>
    );
}
