import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceLayout } from '../components/ServiceLayout';
import { Link } from 'react-router-dom';

type BlogPost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'is-ceramic-coating-worth-it-reno',
    category: 'Ceramic Coating',
    title: 'Is ceramic coating worth it in Nevada?',
    description: 'Reno sun damages clear coat fast. Read why physical paint preservation is the only way to protect your investment in Nevada.',
    date: 'May 10, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'the-truth-about-automatic-car-washes',
    category: 'Education',
    title: 'The Truth About Automatic Car Washes',
    description: 'Why the convenience of an automatic wash is destroying your clear coat. Read exactly what those spinning brushes do to your paint.',
    date: 'May 28, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'how-to-wash-a-ceramic-coated-car',
    category: 'Education',
    title: 'How To Wash Your Car After a Ceramic Coating',
    description: 'A ceramic coating is the ultimate armor for your paint, but it requires discipline to maintain. Learn the exact two-bucket method to preserve your investment.',
    date: 'June 3, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'preparing-boat-rv-for-lake-tahoe',
    category: 'Boat & RV',
    title: 'Preparing Your Boat or RV for Lake Tahoe',
    description: "Lake Tahoe's high-altitude UV rays destroy marine gelcoat fast. Learn why physical oxidation removal and marine-grade ceramic coatings are mandatory for preservation.",
    date: 'June 15, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'paint-correction-vs-waxing',
    category: 'Education',
    title: 'Paint Correction vs. Waxing',
    description: 'Applying wax over scratched paint is a temporary illusion. Discover why professional paint correction is the only permanent solution for a flawless clear coat.',
    date: 'June 22, 2026',
    readTime: '5 min read'
  }
];

const CATEGORIES = ['All', 'Ceramic Coating', 'Education', 'Boat & RV'];

export default function BlogHub() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = BLOG_POSTS.filter(post => 
    activeCategory === 'All' ? true : post.category === activeCategory
  );

  return (
    <ServiceLayout>
      <Helmet>
        <title>Detailing & Protection Blog | Don of Detail</title>
        <meta name="description" content="Reno auto detailing blog by Don of Detail. Expert tips on ceramic coatings, paint correction, and vehicle maintenance for Northern Nevada's climate." />
        <link rel="canonical" href="https://donofdetail.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Detailing &amp; Protection Blog | Don of Detail" />
        <meta property="og:description" content="Reno auto detailing blog by Don of Detail. Expert tips on ceramic coatings, paint correction, and vehicle maintenance for Northern Nevada's climate." />
        <meta property="og:url" content="https://donofdetail.com/blog" />
        <meta property="og:image" content="https://donofdetail.com/og-image-v2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Detailing &amp; Protection Blog | Don of Detail" />
        <meta name="twitter:description" content="Reno auto detailing blog by Don of Detail. Expert tips on ceramic coatings, paint correction, and vehicle maintenance for Northern Nevada's climate." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-don-oat px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-don-clay mb-8">Editorial</p>
          <h1 className="text-[11.5vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-display font-normal leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-don-ink mb-12 uppercase">
            The<br/>Journal.
          </h1>
          <p className="text-lg md:text-xl text-don-ink/70 font-light leading-relaxed max-w-2xl">
            Technical guides, maintenance advice, and deep dives into high-end automotive preservation.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-don-bark pt-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-4">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 border transition-colors ${
                activeCategory === category 
                  ? 'bg-don-oat text-don-ink border-don-oat' 
                  : 'text-don-oat border-don-clay/30 hover:border-don-oat'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="py-16 lg:py-24 bg-don-bark text-don-oat px-6 lg:px-12 min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block group border-b border-don-clay/20 pb-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-don-clay mb-6">{post.category}</p>
                <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-2px] mb-6 text-don-oat group-hover:text-don-clay transition-colors">
                  {post.title}
                </h2>
                <p className="text-don-clay font-light leading-relaxed mb-8 max-w-xl">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">{post.date}</span>
                  <span className="text-don-clay/40">·</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-don-clay/60">{post.readTime}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-don-oat border-b border-don-oat pb-2 group-hover:text-don-clay group-hover:border-don-clay transition-colors">
                  Read Article
                </span>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12">
              <p className="text-don-clay font-light">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </ServiceLayout>
  );
}
