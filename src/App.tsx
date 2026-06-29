import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all pages to split JavaScript bundles and keep react-helmet-async
// head tags isolated per route (mixed eager/lazy leaks the eager page's tags
// into other routes during static prerendering).
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const CeramicCoating = React.lazy(() => import('./pages/CeramicCoating'));
const SparksCeramicCoating = React.lazy(() => import('./pages/SparksCeramicCoating'));
const PaintCorrection = React.lazy(() => import('./pages/PaintCorrection'));
const AutoDetailing = React.lazy(() => import('./pages/AutoDetailing'));
const RVDetailing = React.lazy(() => import('./pages/RVDetailing'));
const BoatDetailing = React.lazy(() => import('./pages/BoatDetailing'));
const BlogHub = React.lazy(() => import('./pages/BlogHub'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Packages = React.lazy(() => import('./pages/Packages'));
const SparksDetailing = React.lazy(() => import('./pages/SparksDetailing'));
const Contact = React.lazy(() => import('./pages/Contact'));

import { ScrollToTop } from './components/ScrollToTop';
import { BookingProvider } from './context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-don-oat"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/ceramic-coating-reno-nv" element={<CeramicCoating />} />
          <Route path="/ceramic-coating-sparks-nv" element={<SparksCeramicCoating />} />
          <Route path="/paint-correction-reno-nv" element={<PaintCorrection />} />
          <Route path="/auto-detailing-reno-nv" element={<AutoDetailing />} />
          <Route path="/rv-detailing-reno-nv" element={<RVDetailing />} />
          <Route path="/boat-detailing-reno-nv" element={<BoatDetailing />} />
          <Route path="/blog" element={<BlogHub />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/mobile-detailing-sparks-nv" element={<SparksDetailing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BookingProvider>
  );
}
