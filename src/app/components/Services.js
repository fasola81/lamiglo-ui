'use client';

import { useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────
   ANIMATED SERVICE ICONS
   ────────────────────────────────────────────── */
function WebDevIcon() {
  return (
    <svg className="service-animated-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="webdev-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,212,255,0.15)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0.05)" />
        </linearGradient>
      </defs>

      {/* Monitor */}
      <rect x="10" y="8" width="40" height="30" rx="4" fill="url(#webdev-grad)" stroke="var(--cyan-400)" strokeWidth="1.5" />
      <line x1="22" y1="38" x2="22" y2="48" stroke="var(--cyan-600)" strokeWidth="1.2" />
      <line x1="38" y1="38" x2="38" y2="48" stroke="var(--cyan-600)" strokeWidth="1.2" />
      <line x1="16" y1="48" x2="44" y2="48" stroke="var(--cyan-600)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Typing code lines */}
      <line x1="16" y1="16" x2="32" y2="16" stroke="var(--cyan-400)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <animate attributeName="x2" values="16;32;32" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0.8" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="21" x2="38" y2="21" stroke="var(--cyan-300)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <animate attributeName="x2" values="16;38;38" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.6;0.6" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="26" x2="28" y2="26" stroke="var(--cyan-500)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3">
        <animate attributeName="x2" values="16;28;28" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0.5" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="31" x2="34" y2="31" stroke="var(--cyan-400)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3">
        <animate attributeName="x2" values="16;34;34" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.4;0.4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
      </line>

      {/* Blinking cursor */}
      <rect x="35" y="30" width="2" height="4" fill="var(--cyan-300)" rx="0.5">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg className="service-animated-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ai-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(232,184,109,0.3)" />
          <stop offset="100%" stopColor="rgba(232,184,109,0)" />
        </radialGradient>
      </defs>

      {/* Central brain core */}
      <circle cx="30" cy="30" r="10" fill="url(#ai-core-glow)" stroke="var(--copper-300)" strokeWidth="1.2">
        <animate attributeName="r" values="9;11;9" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="30" r="4" fill="rgba(232,184,109,0.5)">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Neural connections radiating outward — hardcoded to avoid SSR hydration mismatch */}
      {[
        { x1: 42, y1: 30, x2: 54, y2: 30, color: 'var(--copper-300)', dur: '2s' },
        { x1: 38.49, y1: 38.49, x2: 46.97, y2: 46.97, color: 'var(--copper-400)', dur: '2.3s' },
        { x1: 30, y1: 42, x2: 30, y2: 54, color: 'var(--copper-300)', dur: '2.6s' },
        { x1: 21.51, y1: 38.49, x2: 13.03, y2: 46.97, color: 'var(--copper-400)', dur: '2.9s' },
        { x1: 18, y1: 30, x2: 6, y2: 30, color: 'var(--copper-300)', dur: '3.2s' },
        { x1: 21.51, y1: 21.51, x2: 13.03, y2: 13.03, color: 'var(--copper-400)', dur: '3.5s' },
        { x1: 30, y1: 18, x2: 30, y2: 6, color: 'var(--copper-300)', dur: '3.8s' },
        { x1: 38.49, y1: 21.51, x2: 46.97, y2: 13.03, color: 'var(--copper-400)', dur: '4.1s' },
      ].map((n, i) => (
        <g key={`neural-${i}`}>
          <line x1={n.x1} y1={n.y1} x2={n.x2} y2={n.y2} stroke={n.color} strokeWidth="0.8" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.2;0.7;0.2"
              dur={n.dur}
              repeatCount="indefinite"
            />
          </line>
          <circle cx={n.x2} cy={n.y2} r="2.5" fill={n.color} opacity="0.5">
            <animate
              attributeName="r"
              values="1.5;3;1.5"
              dur={n.dur}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur={n.dur}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Orbiting ring */}
      <circle cx="30" cy="30" r="20" fill="none" stroke="rgba(232,184,109,0.12)" strokeWidth="0.8" strokeDasharray="3 5">
        <animateTransform attributeName="transform" type="rotate" values="0 30 30;360 30 30" dur="20s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ──────────────────────────────────────────────
   ANIMATED CHECKMARK
   ────────────────────────────────────────────── */
function AnimatedCheck({ color, delay = 0 }) {
  return (
    <svg className="service-check-icon" viewBox="0 0 20 20" fill="none" width="16" height="16">
      <circle cx="10" cy="10" r="8" stroke={color === 'cyan' ? 'rgba(0,212,255,0.2)' : 'rgba(232,184,109,0.2)'} strokeWidth="1" />
      <path
        d="M6 10l3 3 5-6"
        stroke={color === 'cyan' ? 'var(--cyan-400)' : 'var(--copper-300)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="service-check-path"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   MAIN SERVICES COMPONENT
   ────────────────────────────────────────────── */
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

            {/* SVG Corner accents (draw on hover) */}
            <svg className="service-corner-accent top-left" viewBox="0 0 30 30" fill="none">
              <path d="M0 20 L0 4 Q0 0 4 0 L20 0" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="service-corner-accent top-right" viewBox="0 0 30 30" fill="none">
              <path d="M10 0 L26 0 Q30 0 30 4 L30 20" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="service-corner-accent bottom-left" viewBox="0 0 30 30" fill="none">
              <path d="M0 10 L0 26 Q0 30 4 30 L20 30" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="service-corner-accent bottom-right" viewBox="0 0 30 30" fill="none">
              <path d="M10 30 L26 30 Q30 30 30 26 L30 10" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <div className="service-icon cyan">
              <WebDevIcon />
            </div>
            <h3 className="service-card-title">Website Development</h3>
            <p className="service-card-desc">
              Bespoke, performance-engineered web platforms built with modern frameworks, 
              responsive design, and conversion-optimized architecture. From landing pages 
              to complex SaaS dashboards — we deliver code that scales.
            </p>
            <ul className="service-features">
              {[
                'Custom React / Next.js Applications',
                'E-commerce & SaaS Platforms',
                'SEO & Core Web Vitals Optimization',
                'Responsive, Accessibility-First Design',
                'Cloud Deployment & CI/CD Pipelines',
              ].map((feature, i) => (
                <li key={feature} className="service-feature">
                  <AnimatedCheck color="cyan" delay={i * 150} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — AI Business Adaptation */}
          <div className="service-card reveal reveal-delay-2">
            <div className="service-card-glow copper" />

            <svg className="service-corner-accent top-left" viewBox="0 0 30 30" fill="none">
              <path d="M0 20 L0 4 Q0 0 4 0 L20 0" stroke="rgba(232,184,109,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="service-corner-accent top-right" viewBox="0 0 30 30" fill="none">
              <path d="M10 0 L26 0 Q30 0 30 4 L30 20" stroke="rgba(232,184,109,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="service-corner-accent bottom-left" viewBox="0 0 30 30" fill="none">
              <path d="M0 10 L0 26 Q0 30 4 30 L20 30" stroke="rgba(232,184,109,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="service-corner-accent bottom-right" viewBox="0 0 30 30" fill="none">
              <path d="M10 30 L26 30 Q30 30 30 26 L30 10" stroke="rgba(232,184,109,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <div className="service-icon copper">
              <AIIcon />
            </div>
            <h3 className="service-card-title">AI Business Adaptation</h3>
            <p className="service-card-desc">
              Strategic consulting to integrate artificial intelligence into your operations — 
              from workflow automation and predictive analytics to custom AI-powered tools 
              that give your organization an unfair competitive advantage.
            </p>
            <ul className="service-features">
              {[
                'AI Strategy & Readiness Assessment',
                'Workflow Automation & Process Intelligence',
                'Custom GPT & LLM Integration',
                'Predictive Analytics & Data Pipelines',
                'Team Training & Change Management',
              ].map((feature, i) => (
                <li key={feature} className="service-feature">
                  <AnimatedCheck color="copper" delay={i * 150} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
