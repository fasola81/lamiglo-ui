'use client';

import { useEffect, useRef, useState } from 'react';

/* ──────────────────────────────────────────────
   ANIMATED COUNTER (moved from Hero)
   ────────────────────────────────────────────── */
function AnimatedStat({ value, suffix = '', label, gradientClass }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const target = parseInt(value);
          const duration = 1800;
          const start = performance.now();

          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="trust-stat" ref={ref}>
      <div className={`trust-stat-value ${gradientClass}`}>{count}{suffix}</div>
      <div className="trust-stat-label">{label}</div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   TECH BADGE SVGs
   ────────────────────────────────────────────── */
function TechBadges() {
  const badges = [
    {
      name: 'React',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="tech-badge-icon">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.7" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" transform="rotate(-60 12 12)" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="tech-badge-icon">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M8 8 L16 16 M16 8 L16 16 M8 8 L8 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="tech-badge-icon">
          <path d="M12 4 L22 20 H2 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: 'OpenAI',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="tech-badge-icon">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M12 4 V8 M12 16 V20 M4 12 H8 M16 12 H20 M6.3 6.3 L8.8 8.8 M15.2 15.2 L17.7 17.7 M17.7 6.3 L15.2 8.8 M8.8 15.2 L6.3 17.7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: 'Google Cloud',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="tech-badge-icon">
          <path d="M6 16 Q2 14 4 10 Q5 6 10 6 Q12 3 16 5 Q20 4 20 8 Q23 10 21 14 Q20 17 16 17 H8 Q6 17 6 16 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="tech-badge-icon">
          <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M12 8 V16 M9 10 L12 8 L15 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="trust-tech-badges">
      <span className="trust-tech-label">Powered by</span>
      <div className="trust-tech-row">
        {badges.map((badge) => (
          <div key={badge.name} className="tech-badge">
            {badge.svg}
            <span className="tech-badge-name">{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   MAIN TRUSTBAR COMPONENT
   ────────────────────────────────────────────── */
export default function TrustBar() {
  return (
    <section className="trustbar" id="trustbar">
      {/* Animated gradient line */}
      <div className="trustbar-line" aria-hidden="true">
        <svg viewBox="0 0 1440 4" preserveAspectRatio="none" className="trustbar-line-svg">
          <defs>
            <linearGradient id="trustbar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="30%" stopColor="rgba(168,85,247,0.4)" />
              <stop offset="50%" stopColor="rgba(255,138,101,0.4)" />
              <stop offset="70%" stopColor="rgba(168,85,247,0.4)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>
          <rect x="0" y="1" width="1440" height="2" fill="url(#trustbar-grad)" rx="1" />
          {/* Traveling sparkle */}
          <circle r="3" fill="rgba(168,85,247,0.8)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M0,2 H1440" />
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="section-container">
        {/* Stats Row */}
        <div className="trust-stats-grid reveal">
          <AnimatedStat value="25" suffix="+" label="Projects Shipped" gradientClass="gradient-text-cyan" />
          <AnimatedStat value="98" suffix="%" label="Client Satisfaction" gradientClass="gradient-text-copper" />
          <AnimatedStat value="4" suffix="" label="Industries Served" gradientClass="gradient-text-mixed" />
          <div className="trust-stat">
            <div className="trust-stat-value gradient-text-cyan">&lt;24h</div>
            <div className="trust-stat-label">Avg Response Time</div>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="reveal reveal-delay-2">
          <TechBadges />
        </div>
      </div>

      {/* Bottom line */}
      <div className="trustbar-line" aria-hidden="true">
        <svg viewBox="0 0 1440 4" preserveAspectRatio="none" className="trustbar-line-svg">
          <rect x="0" y="1" width="1440" height="2" fill="url(#trustbar-grad)" rx="1" />
        </svg>
      </div>
    </section>
  );
}
