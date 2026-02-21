import { Link } from 'react-router-dom';

const Logo = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <img
        src="/logo.png"
        alt="Don of Detail logo"
        className={className}
        style={{ mixBlendMode: 'lighten', ...style }}
    />
);

export default function PrivacyPolicy() {
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
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-don-gold mb-2">Privacy Policy</h1>
                    <p className="text-don-cream/60 font-light">Don of Detail LLC</p>
                    <div className="w-24 h-0.5 bg-don-gold mt-6" />
                </div>

                <div className="space-y-10 text-don-cream/80 font-light leading-relaxed">
                    <p>Don of Detail LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Information We Collect</h2>
                        <p className="mb-3">We may collect the following types of personal information:</p>
                        <ul className="space-y-2 pl-4 border-l border-don-gold/30">
                            <li><strong className="text-don-cream/90">Contact Information:</strong> Name, phone number, and email address submitted through our quote form or direct communication.</li>
                            <li><strong className="text-don-cream/90">Vehicle Information:</strong> Make, model, and condition details you provide when requesting a service.</li>
                            <li><strong className="text-don-cream/90">Service Records:</strong> Details of services performed, photos, and notes related to your appointment.</li>
                            <li><strong className="text-don-cream/90">Usage Data:</strong> Basic analytics data such as pages visited and time spent on our website (collected anonymously).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">How We Use Your Information</h2>
                        <p className="mb-3">We use the information we collect to:</p>
                        <ul className="space-y-2 pl-4 border-l border-don-gold/30">
                            <li>Schedule and confirm appointments</li>
                            <li>Communicate with you about your service</li>
                            <li>Send follow-up messages, service reminders, or promotional offers (only if you have opted in)</li>
                            <li>Improve our services and website</li>
                            <li>Resolve disputes or address concerns</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Text Message &amp; Phone Communication</h2>
                        <p className="mb-3">By submitting our quote request form and checking the consent checkbox, you agree that Don of Detail LLC may contact you via phone call and/or SMS/text message at the number provided, for the purpose of scheduling, service updates, and promotional communication.</p>
                        <ul className="space-y-2 pl-4 border-l border-don-gold/30">
                            <li>Message and data rates may apply.</li>
                            <li>You may opt out at any time by replying STOP to any text message or by contacting us directly.</li>
                            <li>We do not sell or share your phone number with third-party marketers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Sharing Your Information</h2>
                        <p className="mb-3">We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:</p>
                        <ul className="space-y-2 pl-4 border-l border-don-gold/30">
                            <li><strong className="text-don-cream/90">Service Providers:</strong> Trusted third-party tools we use to operate our business (e.g., booking platforms, payment processors, CRM software), under strict confidentiality obligations.</li>
                            <li><strong className="text-don-cream/90">Legal Requirements:</strong> When required by law, court order, or government authority.</li>
                            <li><strong className="text-don-cream/90">Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Photos &amp; Marketing</h2>
                        <p>We may use before-and-after photos and videos taken during service for marketing purposes on our website, social media, and other platforms. If you do not wish for your vehicle to appear in our marketing materials, please notify us in writing before your appointment begins.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Data Security</h2>
                        <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Your Rights</h2>
                        <p className="mb-3">You have the right to:</p>
                        <ul className="space-y-2 pl-4 border-l border-don-gold/30">
                            <li>Request access to the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal data (subject to legal obligations)</li>
                            <li>Opt out of marketing communications at any time</li>
                        </ul>
                        <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:contact@donofdetail.com" className="text-don-gold hover:underline">contact@donofdetail.com</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Cookies &amp; Analytics</h2>
                        <p>Our website may use basic analytics tools to understand how visitors interact with our site. This data is aggregated and does not personally identify you. We do not use invasive tracking or third-party advertising cookies.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Children's Privacy</h2>
                        <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. The most current version will always be posted on our website. Continued use of our services after changes are posted constitutes your acceptance of the updated policy.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif font-bold text-don-cream mb-3">Governing Law</h2>
                        <p>This Privacy Policy is governed by the laws of the State of Nevada.</p>
                    </section>

                    <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>

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
