'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
      // Allow normal navigation for route links
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="header-inner">
          {/* Logo */}
          <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Image 
              src="/images/logo.png"
              alt="Lamiglo Logo"
              width={38}
              height={38}
              className="header-logo-icon"
              priority
            />
            <span className="header-logo-text">LAMIGLO.COM</span>
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav">
            <ul className="header-nav-links">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="header-nav-link"
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
