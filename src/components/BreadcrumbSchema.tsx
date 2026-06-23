import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  /** Items in order from Home → current page. Home is automatically prepended. */
  items: BreadcrumbItem[];
}

/**
 * Injects a BreadcrumbList JSON-LD schema for the current page.
 * Usage: <BreadcrumbSchema items={[{ name: 'Ceramic Coating', url: 'https://donofdetail.com/ceramic-coating-reno-nv' }]} />
 */
export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const allItems = [
    { name: 'Home', url: 'https://donofdetail.com/' },
    ...items,
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
