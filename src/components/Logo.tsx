import React from 'react';

const DODIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M 0 25 L 25 12.5 L 25 87.5 L 0 75 Z M 8 30 L 17 25.5 L 17 74.5 L 8 70 Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M 50 0 L 67 8.5 L 67 91.5 L 50 100 L 33 91.5 L 33 8.5 Z M 50 9 L 59 13.5 L 59 86.5 L 50 91 L 41 86.5 L 41 13.5 Z" />
    <path d="M 75 87.5 L 75 12.5 L 83 16.5 L 92 47.5 L 92 21 L 100 25 L 100 75 L 92 79 L 83 43.8 L 83 83.5 Z" />
  </svg>
);

export const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <DODIcon className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
    <span className="font-sans font-bold uppercase text-[7.5px] md:text-[9px] tracking-[0.35em] pl-[0.35em] text-don-ink mt-1.5">
      OF DETAIL
    </span>
  </div>
);
