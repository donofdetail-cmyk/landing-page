import React from 'react';
import { reviews, formatName } from '../data/reviews';

const Star = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Curated subset for service pages: ceramic/F350, RV/5th wheel, ceramic/Venza
const FEATURED = [reviews[0], reviews[2], reviews[4]];

export const ServiceReviews = ({ heading = 'What Reno Drivers Say' }: { heading?: string }) => {
  return (
    <section className="bg-don-ink text-don-oat py-24 lg:py-32 px-6 lg:px-12 border-t border-don-clay/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-4">Verified Google Reviews</p>
            <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-display uppercase tracking-[-2px] leading-[0.9] max-w-full break-words">{heading}</h2>
          </div>
          <span className="flex gap-1 text-don-red shrink-0">
            {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-7 h-7" />)}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED.map((review, i) => (
            <div key={i} className="bg-don-bark/50 p-8 rounded border border-don-clay/5">
              <span className="flex gap-1 text-don-clay mb-6">
                {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="w-4 h-4" />)}
              </span>
              <p className="text-don-oat/90 font-light leading-relaxed mb-6">"{review.text}"</p>
              <div className="pt-5 border-t border-don-clay/10">
                <p className="text-sm font-bold tracking-wide text-don-oat">{formatName(review.name)}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-don-clay mt-1">{review.loc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:justify-start">
          <a
            href="https://maps.app.goo.gl/mvf4PLGiRWU8wSAa7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-[0.2em] text-don-clay hover:text-don-oat border-b border-don-clay/40 hover:border-don-oat pb-1 transition-colors"
          >
            Read All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};
