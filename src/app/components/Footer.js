'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ──────────────────────────────────────────────
   ANIMATED SVG WAVE SEPARATOR
   ────────────────────────────────────────────── */
function WaveSeparator() {
  return (
    <div className="footer-wave-container" aria-hidden="true">
      <svg
        className="footer-wave-svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,212,255,0.3)" />
            <stop offset="50%" stopColor="rgba(232,184,109,0.25)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0.15)" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(232,184,109,0.15)" />
            <stop offset="50%" stopColor="rgba(0,212,255,0.2)" />
            <stop offset="100%" stopColor="rgba(232,184,109,0.1)" />
          </linearGradient>
        </defs>

        {/* Wave 1 */}
        <path
          fill="none"
          stroke="url(#wave-gradient)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="d"
            values="M0,30 Q180,10 360,30 T720,30 T1080,30 T1440,30;M0,30 Q180,50 360,30 T720,30 T1080,30 T1440,30;M0,30 Q180,10 360,30 T720,30 T1080,30 T1440,30"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Wave 2 (offset) */}
        <path
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="1"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M0,30 Q180,45 360,30 T720,30 T1080,30 T1440,30;M0,30 Q180,15 360,30 T720,30 T1080,30 T1440,30;M0,30 Q180,45 360,30 T720,30 T1080,30 T1440,30"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        {/* Traveling sparkle */}
        <circle r="2" fill="rgba(0,212,255,0.6)">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M0,30 Q360,10 720,30 T1440,30"
          />
          <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export default function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="footer">
      <WaveSeparator />
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-text">LAMIGLO.COM</span>
          <span className="footer-copy">&copy; {year} All rights reserved.</span>
        </div>

        <div className="footer-links">
          <a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
          <a href="#process" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' }); }}>Process</a>
          <a href="#showcase" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' }); }}>Showcase</a>
          <a href="#testimonials" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' }); }}>Testimonials</a>
          <a href="#why-choose" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#why-choose')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
          <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
          <span className="footer-divider">|</span>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </div>

        <button className="footer-back-to-top" onClick={handleBackToTop} aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
