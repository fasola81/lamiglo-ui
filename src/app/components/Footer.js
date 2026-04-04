'use client';

import Link from 'next/link';

export default function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-text">LAMIGLO.COM</span>
          <span className="footer-copy">&copy; {year} All rights reserved.</span>
        </div>

        <div className="footer-links">
          <a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
          <a href="#showcase" className="footer-link" onClick={(e) => { e.preventDefault(); document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' }); }}>Showcase</a>
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
