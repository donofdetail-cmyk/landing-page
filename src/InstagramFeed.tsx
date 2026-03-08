import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Instagram } from 'lucide-react';

const POSTS = [
    {
        id: 'DSQ94ehD59K',
        url: 'https://www.instagram.com/p/DSQ94ehD59K/',
    },
    {
        id: 'DQc7KR4ksj-',
        url: 'https://www.instagram.com/p/DQc7KR4ksj-/',
    },
    {
        id: 'DQ8FTtdCRF-',
        url: 'https://www.instagram.com/p/DQ8FTtdCRF-/',
    },
    {
        id: 'DQZ-8DaklGW',
        url: 'https://www.instagram.com/p/DQZ-8DaklGW/',
    },
];

export default function InstagramFeed() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    /* ── track which post is in view ── */
    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const idx = Math.round(el.scrollTop / el.clientHeight);
        setActiveIndex(Math.min(idx, POSTS.length - 1));
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    /* ── click dot to scroll ── */
    const scrollTo = (idx: number) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({ top: idx * el.clientHeight, behavior: 'smooth' });
    };

    return (
        <div className="bg-don-black border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.08)] max-w-md mx-auto lg:mx-0 relative">

            {/* ─── Header bar — solid bg to fully mask native embed header ─── */}
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4" style={{ height: '56px', background: '#0a0a0a' }}>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shrink-0">
                        <div className="w-full h-full rounded-full bg-don-black flex items-center justify-center overflow-hidden">
                            <img
                                src="/ig-avatar.jpg"
                                alt="Don of Detail Instagram"
                                className="w-full h-full object-cover rounded-full"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-bold text-white drop-shadow-md">donofdetail</p>
                        <p className="text-[10px] text-white/60">Reno, Nevada</p>
                    </div>
                </div>
                <a
                    href="https://instagram.com/donofdetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-don-gold text-don-black text-xs font-bold px-4 py-1.5 rounded-md hover:bg-don-gold/90 transition-colors"
                >
                    Follow
                </a>
            </div>

            {/* ─── Scroll container ─── */}
            <div
                ref={scrollRef}
                className="h-[600px] overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
            >
                {POSTS.map((post, i) => (
                    <div
                        key={post.id}
                        className="h-[600px] w-full snap-start snap-always relative overflow-hidden"
                    >
                        {/*
              iframe strategy:
              - Shift the iframe UP by 60px to hide the native Instagram embed header
              - Make it 260px taller than the container to also crop the native footer
              - The container has overflow-hidden so only the image content shows through
            */}
                        <iframe
                            src={`https://www.instagram.com/p/${post.id}/embed/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fdonofdetail.com`}
                            title={`Instagram post ${i + 1}`}
                            className="w-full border-0 absolute left-0"
                            style={{ height: 'calc(100% + 400px)', top: '-70px' }}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            allowTransparency
                            allow="encrypted-media"
                        />
                    </div>
                ))}
            </div>

            {/* ─── Dot indicators (right side) ─── */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
                {POSTS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex
                            ? 'w-2.5 h-6 bg-don-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                            }`}
                        aria-label={`Go to post ${i + 1}`}
                    />
                ))}
            </div>

            {/* ─── Bottom bar — tall gradient to fully mask native embed footer ─── */}
            <div className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-4 pb-3" style={{ height: '220px', background: 'linear-gradient(to top, #0a0a0a 50%, #0a0a0af0 65%, #0a0a0a99 80%, transparent 100%)' }}>
                <span className="text-white/60 text-xs font-light tracking-wide">
                    {activeIndex + 1} / {POSTS.length}
                </span>
                <a
                    href="https://instagram.com/donofdetail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/70 hover:text-don-gold transition-colors text-xs"
                >
                    <Instagram className="w-3.5 h-3.5" />
                    <span className="font-medium">@donofdetail</span>
                </a>
            </div>
        </div>
    );
}
