import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

export const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-don-oat text-don-ink font-sans selection:bg-don-ink selection:text-don-oat">
      <Header />
      <main id="main" className="pt-28 md:pt-32 focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
