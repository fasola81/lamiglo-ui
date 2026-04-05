'use client';

import { useState, useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────
   ANIMATED SVG LOGO MARK
   Breathing geometric "L" form
   ────────────────────────────────────────────── */
function AnimatedLogo() {
  return (
    <svg 
      className="header-svg-logo" 
      width="38" 
      height="38" 
      viewBox="0 0 40 40" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#E8B86D" />
        </linearGradient>
        <linearGradient id="logo-grad-inner" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1AD1FF" />
          <stop offset="100%" stopColor="#D4A056" />
        </linearGradient>
      </defs>

      {/* Outer rounded square */}
      <rect x="2" y="2" width="36" height="36" rx="10" fill="#111114" stroke="url(#logo-grad)" strokeWidth="1.5">
        <animate attributeName="rx" values="10;12;10" dur="6s" repeatCount="indefinite" />
      </rect>

      {/* Inner "L" shape with breathing animation */}
      <path
        d="M12 10 L12 28 L28 28"
        stroke="url(#logo-grad-inner)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 100;50 100;50 100"
          dur="2s"
          fill="freeze"
        />
      </path>

      {/* Accent dot */}
      <circle cx="28" cy="10" r="3" fill="url(#logo-grad)" opacity="0.8">
        <animate attributeName="r" values="2.5;3.5;2.5" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Subtle pulse ring */}
      <circle cx="28" cy="10" r="5" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="0.5">
        <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ──────────────────────────────────────────────
   MAIN HEADER
   ────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['services', 'process', 'showcase', 'testimonials', 'why-choose', 'contact'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'About', href: '#why-choose' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="header-inner">
          {/* Animated Logo */}
          <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <AnimatedLogo />
            <span className="header-logo-text">LAMIGLO.COM</span>
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav">
            <ul className="header-nav-links">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className={`header-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="header-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'active' : ''}`}>
        {navLinks.map(link => (
          <a 
            key={link.label} 
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn-primary" 
          style={{ marginTop: '1rem' }}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Get Started
        </a>
      </div>
    </>
  );
}
