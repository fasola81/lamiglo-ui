'use client';

import Image from 'next/image';

export default function Hero() {
  const handleCTA = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowcase = (e) => {
    e.preventDefault();
    const el = document.querySelector('#showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background Layers */}
      <div className="hero-bg">
        <div className="particle-grid" />
        <div className="hero-gradient-orb cyan" />
        <div className="hero-gradient-orb copper" />
        <Image
          src="/images/hero-art.png"
          alt="Abstract neural network and code visualization"
          width={700}
          height={500}
          className="hero-bg-image"
          priority
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Consulting & Specialist Services
        </div>

        <h1 className="hero-title">
          ELEVATE YOUR BUSINESS THROUGH{' '}
          <span className="highlight-cyan">CODE</span> &{' '}
          <span className="highlight-copper">AI ADAPTATION</span>.
        </h1>

        <p className="hero-subtitle">
          Specialist consulting in website development &amp; AI business adaptation. 
          We architect solutions that transform operations, amplify revenue, 
          and future-proof your competitive edge.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary" onClick={handleCTA}>
            REQUEST A CONSULTATION
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#showcase" className="btn-secondary" onClick={handleShowcase}>
            View Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-value gradient-text-cyan">25+</div>
            <div className="hero-stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="hero-stat-value gradient-text-copper">98%</div>
            <div className="hero-stat-label">Client Satisfaction</div>
          </div>
          <div>
            <div className="hero-stat-value gradient-text-mixed">4</div>
            <div className="hero-stat-label">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
