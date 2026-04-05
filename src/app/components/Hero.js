'use client';

import { useRef } from 'react';

/* ──────────────────────────────────────────────
   HERO SVG SCENE — Animated Circuit + AI Network
   ────────────────────────────────────────────── */
function HeroSVGScene() {
  return (
    <svg
      className="hero-svg-scene"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,212,255,0.3)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0)" />
        </radialGradient>
        <radialGradient id="hero-copper-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(232,184,109,0.25)" />
          <stop offset="100%" stopColor="rgba(232,184,109,0)" />
        </radialGradient>
        <linearGradient id="hero-line-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,212,255,0)" />
          <stop offset="50%" stopColor="rgba(0,212,255,0.5)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0)" />
        </linearGradient>
        <linearGradient id="hero-line-copper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(232,184,109,0)" />
          <stop offset="50%" stopColor="rgba(232,184,109,0.4)" />
          <stop offset="100%" stopColor="rgba(232,184,109,0)" />
        </linearGradient>
        <filter id="hero-glow-filter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circuit board traces */}
      <g className="hero-circuits" opacity="0.4">
        {/* Horizontal traces */}
        <path d="M50,120 H250 L280,150 H400" stroke="url(#hero-line-cyan)" strokeWidth="0.8" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M100,200 H350 L380,170 H520" stroke="url(#hero-line-copper)" strokeWidth="0.8" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M80,300 H200 L230,330 H450" stroke="url(#hero-line-cyan)" strokeWidth="0.8" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur="4.5s" repeatCount="indefinite" />
        </path>
        <path d="M150,380 H300 L320,350 H500" stroke="url(#hero-line-copper)" strokeWidth="0.8" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur="5.5s" repeatCount="indefinite" />
        </path>

        {/* Vertical traces */}
        <path d="M200,50 V180 L230,210 V350" stroke="url(#hero-line-cyan)" strokeWidth="0.8" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M400,80 V220 L370,250 V420" stroke="url(#hero-line-copper)" strokeWidth="0.8" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur="5s" repeatCount="indefinite" />
        </path>

        {/* Junction nodes */}
        {[[250,120],[350,200],[200,300],[300,380],[200,180],[400,220]].map(([x,y], i) => (
          <circle key={`junc-${i}`} cx={x} cy={y} r="3" fill={i % 2 === 0 ? 'rgba(0,212,255,0.4)' : 'rgba(232,184,109,0.35)'}>
            <animate attributeName="r" values="2;4;2" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>

      {/* Central neural network node cluster */}
      <g className="hero-neural-core">
        {/* Core glow */}
        <circle cx="300" cy="250" r="80" fill="url(#hero-core-glow)">
          <animate attributeName="r" values="70;90;70" dur="6s" repeatCount="indefinite" />
        </circle>

        {/* Inner ring */}
        <circle cx="300" cy="250" r="45" fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="1">
          <animateTransform attributeName="transform" type="rotate" values="0 300 250;360 300 250" dur="30s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="250" r="32" fill="none" stroke="rgba(232,184,109,0.1)" strokeWidth="0.8" strokeDasharray="6 4">
          <animateTransform attributeName="transform" type="rotate" values="360 300 250;0 300 250" dur="25s" repeatCount="indefinite" />
        </circle>

        {/* Central brain node */}
        <circle cx="300" cy="250" r="12" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" filter="url(#hero-glow-filter)">
          <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="250" r="5" fill="rgba(0,212,255,0.8)">
          <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Satellite nodes orbiting — positions hardcoded to avoid SSR hydration mismatch */}
        {[
          { x: 345, y: 250, color: 'rgba(0,212,255,0.7)', dur: '3s' },
          { x: 322.5, y: 288.97, color: 'rgba(232,184,109,0.7)', dur: '3.3s' },
          { x: 277.5, y: 288.97, color: 'rgba(0,212,255,0.7)', dur: '3.6s' },
          { x: 255, y: 250, color: 'rgba(232,184,109,0.7)', dur: '3.9s' },
          { x: 277.5, y: 211.03, color: 'rgba(0,212,255,0.7)', dur: '4.2s' },
          { x: 322.5, y: 211.03, color: 'rgba(232,184,109,0.7)', dur: '4.5s' },
        ].map((sat, i) => (
          <g key={`sat-${i}`}>
            <line x1="300" y1="250" x2={sat.x} y2={sat.y} stroke={sat.color} strokeWidth="0.5" opacity="0.3">
              <animate attributeName="opacity" values="0.15;0.5;0.15" dur={sat.dur} repeatCount="indefinite" />
            </line>
            <circle cx={sat.x} cy={sat.y} r="3" fill={sat.color}>
              <animate attributeName="r" values="2;4;2" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Outer radial connections — hardcoded to avoid SSR hydration mismatch */}
        {[
          { x1: 351.96, y1: 280, x2: 387.94, y2: 288.88, stroke: 'rgba(0,212,255,0.12)', fill: 'rgba(0,212,255,0.4)' },
          { x1: 300, y1: 310, x2: 297.41, y2: 350, stroke: 'rgba(232,184,109,0.1)', fill: 'rgba(232,184,109,0.3)' },
          { x1: 248.04, y1: 280, x2: 212.06, y2: 288.88, stroke: 'rgba(0,212,255,0.12)', fill: 'rgba(0,212,255,0.4)' },
          { x1: 248.04, y1: 220, x2: 212.06, y2: 211.12, stroke: 'rgba(232,184,109,0.1)', fill: 'rgba(232,184,109,0.3)' },
          { x1: 300, y1: 190, x2: 297.41, y2: 150, stroke: 'rgba(0,212,255,0.12)', fill: 'rgba(0,212,255,0.4)' },
          { x1: 351.96, y1: 220, x2: 387.94, y2: 211.12, stroke: 'rgba(232,184,109,0.1)', fill: 'rgba(232,184,109,0.3)' },
        ].map((conn, i) => (
          <g key={`outer-${i}`}>
            <line x1={conn.x1} y1={conn.y1} x2={conn.x2} y2={conn.y2} stroke={conn.stroke} strokeWidth="0.5" />
            <circle cx={conn.x2} cy={conn.y2} r="2" fill={conn.fill}>
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${4 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>

      {/* Orbiting code symbols */}
      <g className="hero-code-symbols">
        {/* < > brackets */}
        <text x="0" y="0" fill="rgba(0,212,255,0.35)" fontSize="22" fontFamily="monospace" fontWeight="300">
          &lt; /&gt;
          <animateMotion dur="20s" repeatCount="indefinite" path="M300,250 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" />
          <animate attributeName="opacity" values="0.15;0.45;0.15" dur="6s" repeatCount="indefinite" />
        </text>

        {/* { } curly braces */}
        <text x="0" y="0" fill="rgba(232,184,109,0.3)" fontSize="20" fontFamily="monospace" fontWeight="300">
          {'{ }'}
          <animateMotion dur="25s" repeatCount="indefinite" path="M300,250 m-90,0 a90,90 0 1,0 180,0 a90,90 0 1,0 -180,0" />
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="7s" repeatCount="indefinite" />
        </text>

        {/* AI text */}
        <text x="0" y="0" fill="rgba(232,184,109,0.25)" fontSize="16" fontFamily="monospace" fontWeight="600">
          AI
          <animateMotion dur="18s" repeatCount="indefinite" path="M300,250 m-150,0 a150,100 0 1,1 300,0 a150,100 0 1,1 -300,0" />
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur="5s" repeatCount="indefinite" />
        </text>

        {/* 01 binary */}
        <text x="0" y="0" fill="rgba(0,212,255,0.2)" fontSize="14" fontFamily="monospace">
          01
          <animateMotion dur="22s" repeatCount="indefinite" path="M300,250 m-70,0 a70,70 0 1,0 140,0 a70,70 0 1,0 -140,0" />
          <animate attributeName="opacity" values="0.08;0.3;0.08" dur="8s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Data flow particles */}
      <g className="hero-data-particles">
        {[
          { path: 'M50,120 Q200,80 350,200 T550,150', dur: '8s', color: 'cyan' },
          { path: 'M100,400 Q250,300 400,350 T580,280', dur: '10s', color: 'copper' },
          { path: 'M30,250 Q180,180 300,250 T570,200', dur: '9s', color: 'cyan' },
          { path: 'M80,50 Q200,150 350,100 T550,250', dur: '11s', color: 'copper' },
        ].map((p, i) => (
          <circle key={`dp-${i}`} r="1.5" fill={p.color === 'cyan' ? 'rgba(0,212,255,0.8)' : 'rgba(232,184,109,0.7)'}>
            <animateMotion dur={p.dur} repeatCount="indefinite" path={p.path} />
            <animate attributeName="r" values="1;2.5;1" dur={p.dur} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur={p.dur} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
    </svg>
  );
}

/* ──────────────────────────────────────────────
   ANIMATED SCROLL INDICATOR
   ────────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <div className="hero-scroll-indicator">
      <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="22" height="36" rx="11" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2.5" fill="var(--cyan-400)" className="hero-scroll-dot">
          <animate attributeName="cy" values="10;26;10" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
      <span className="hero-scroll-text">Scroll to explore</span>
    </div>
  );
}

/* AnimatedStat moved to TrustBar.js */

/* ──────────────────────────────────────────────
   MAIN HERO COMPONENT
   ────────────────────────────────────────────── */
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
      </div>

      {/* Animated SVG Scene (right side) */}
      <HeroSVGScene />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Consulting & Specialist Services
        </div>

        <h1 className="hero-title hero-title-animated">
          <span className="hero-title-line">
            <span className="hero-title-line-inner">ELEVATE YOUR BUSINESS THROUGH</span>
          </span>{' '}
          <span className="hero-title-line">
            <span className="hero-title-line-inner">
              <span className="highlight-cyan shimmer">CODE</span> &{' '}
              <span className="highlight-copper shimmer shimmer-delay">AI ADAPTATION</span>.
            </span>
          </span>
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
      </div>

      <ScrollIndicator />
    </section>
  );
}
