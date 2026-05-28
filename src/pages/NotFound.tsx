import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-don-oat text-don-ink font-sans flex flex-col selection:bg-don-ink selection:text-don-oat">
      <Helmet>
        <title>Page Not Found | Don of Detail</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-8xl md:text-[12rem] font-display uppercase tracking-[-5px] leading-none text-don-ink mb-6">
          404
        </h1>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-don-clay mb-12">
          This page doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-don-ink text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-don-ink/90 transition-colors"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
