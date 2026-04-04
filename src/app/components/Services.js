'use client';

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="section-container">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">
          Two Pillars of{' '}
          <span className="gradient-text-mixed">Digital Transformation</span>
        </h2>
        <p className="section-subtitle">
          We operate at the intersection of precision engineering and adaptive intelligence — 
          building the digital infrastructure that defines market leaders.
        </p>

        <div className="services-grid">
          {/* Card 1 — Website Development */}
          <div className="service-card reveal">
            <div className="service-card-glow cyan" />
            <div className="service-icon cyan">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M7 8l3 3-3 3M13 14h4" />
              </svg>
            </div>
            <h3 className="service-card-title">Website Development</h3>
            <p className="service-card-desc">
              Bespoke, performance-engineered web platforms built with modern frameworks, 
              responsive design, and conversion-optimized architecture. From landing pages 
              to complex SaaS dashboards — we deliver code that scales.
            </p>
            <ul className="service-features">
              <li className="service-feature">
                <span className="service-feature-dot cyan" />
                Custom React / Next.js Applications
              </li>
              <li className="service-feature">
                <span className="service-feature-dot cyan" />
                E-commerce & SaaS Platforms
              </li>
              <li className="service-feature">
                <span className="service-feature-dot cyan" />
                SEO & Core Web Vitals Optimization
              </li>
              <li className="service-feature">
                <span className="service-feature-dot cyan" />
                Responsive, Accessibility-First Design
              </li>
              <li className="service-feature">
                <span className="service-feature-dot cyan" />
                Cloud Deployment & CI/CD Pipelines
              </li>
            </ul>
          </div>

          {/* Card 2 — AI Business Adaptation */}
          <div className="service-card reveal reveal-delay-2">
            <div className="service-card-glow copper" />
            <div className="service-icon copper">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--copper-300)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="service-card-title">AI Business Adaptation</h3>
            <p className="service-card-desc">
              Strategic consulting to integrate artificial intelligence into your operations — 
              from workflow automation and predictive analytics to custom AI-powered tools 
              that give your organization an unfair competitive advantage.
            </p>
            <ul className="service-features">
              <li className="service-feature">
                <span className="service-feature-dot copper" />
                AI Strategy & Readiness Assessment
              </li>
              <li className="service-feature">
                <span className="service-feature-dot copper" />
                Workflow Automation & Process Intelligence
              </li>
              <li className="service-feature">
                <span className="service-feature-dot copper" />
                Custom GPT & LLM Integration
              </li>
              <li className="service-feature">
                <span className="service-feature-dot copper" />
                Predictive Analytics & Data Pipelines
              </li>
              <li className="service-feature">
                <span className="service-feature-dot copper" />
                Team Training & Change Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
