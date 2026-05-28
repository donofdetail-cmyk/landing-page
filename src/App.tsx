import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CeramicCoating from './pages/CeramicCoating';
import PaintCorrection from './pages/PaintCorrection';
import AutoDetailing from './pages/AutoDetailing';
import RVDetailing from './pages/RVDetailing';
import BoatDetailing from './pages/BoatDetailing';
import BlogHub from './pages/BlogHub';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

import { ScrollToTop } from './components/ScrollToTop';
import { BookingProvider } from './context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/ceramic-coating-reno-nv" element={<CeramicCoating />} />
        <Route path="/paint-correction-reno-nv" element={<PaintCorrection />} />
        <Route path="/auto-detailing-reno-nv" element={<AutoDetailing />} />
        <Route path="/rv-detailing-reno-nv" element={<RVDetailing />} />
        <Route path="/boat-detailing-reno-nv" element={<BoatDetailing />} />
        <Route path="/blog" element={<BlogHub />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BookingProvider>
  );
}
