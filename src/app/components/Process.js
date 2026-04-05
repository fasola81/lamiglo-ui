'use client';

/* ──────────────────────────────────────────────
   PROCESS SECTION — 4-Step Methodology Timeline
   ────────────────────────────────────────────── */

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We analyze your business, goals, and current tech landscape through a structured discovery phase — identifying opportunities and defining the roadmap.',
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We design a tailored solution blueprint — choosing the right stack, AI integrations, and deployment strategy to maximize impact and minimize risk.',
    accent: 'cyan-copper',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Agile development with weekly milestones, transparent progress, and continuous feedback loops. You see working software every sprint, not just status reports.',
    accent: 'copper-cyan',
  },
  {
    number: '04',
    title: 'Launch & Evolve',
    description: 'Deployment, monitoring, and ongoing optimization. We don\'t disappear after launch — we ensure long-term impact with proactive support and iteration.',
    accent: 'copper',
  },
];

function StepIcon({ number, accent }) {
  const cyanColor = 'rgba(0,212,255,';
  const copperColor = 'rgba(232,184,109,';
  
  let strokeColor, fillColor;
  if (accent === 'cyan') {
    strokeColor = `${cyanColor}0.6)`;
    fillColor = `${cyanColor}0.08)`;
  } else if (accent === 'copper') {
    strokeColor = `${copperColor}0.6)`;
    fillColor = `${copperColor}0.08)`;
  } else if (accent === 'cyan-copper') {
    strokeColor = `${cyanColor}0.5)`;
    fillColor = `${copperColor}0.06)`;
  } else {
    strokeColor = `${copperColor}0.5)`;
    fillColor = `${cyanColor}0.06)`;
  }

  return (
    <div className="process-step-icon">
      <svg viewBox="0 0 80 80" fill="none" className="process-step-svg">
        {/* Outer ring with draw-on */}
        <circle cx="40" cy="40" r="36" stroke={strokeColor} strokeWidth="1.5" fill={fillColor}
          strokeDasharray="226" strokeDashoffset="226" className="process-ring" />
        {/* Inner glow ring */}
        <circle cx="40" cy="40" r="28" stroke={strokeColor} strokeWidth="0.5" fill="none" opacity="0.3">
          <animate attributeName="r" values="26;30;26" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        {/* Number */}
        <text x="40" y="45" textAnchor="middle" fill={strokeColor} fontSize="18" fontFamily="var(--font-display)" fontWeight="700">
          {number}
        </text>
      </svg>
    </div>
  );
}

export default function Process() {
  return (
    <section className="process section-padding" id="process">
      <div className="section-container">
        <span className="section-label">How We Work</span>
        <h2 className="section-title">
          Our <span className="gradient-text-mixed">Engagement Process</span>
        </h2>
        <p className="section-subtitle">
          A proven methodology refined across 25+ projects — designed for transparency, 
          speed, and consistent delivery of exceptional results.
        </p>

        <div className="process-timeline">
          {/* Connecting line */}
          <div className="process-connector" aria-hidden="true">
            <svg viewBox="0 0 4 600" className="process-connector-svg">
              <defs>
                <linearGradient id="process-line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0,212,255,0.4)" />
                  <stop offset="50%" stopColor="rgba(232,184,109,0.4)" />
                  <stop offset="100%" stopColor="rgba(232,184,109,0.2)" />
                </linearGradient>
              </defs>
              <line x1="2" y1="0" x2="2" y2="600" stroke="url(#process-line-grad)" strokeWidth="2" strokeDasharray="6 4" />
              {/* Traveling pulse */}
              <circle r="3" fill="rgba(0,212,255,0.8)">
                <animateMotion dur="5s" repeatCount="indefinite" path="M2,0 L2,600" />
                <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {steps.map((step, index) => (
            <div key={step.number} className={`process-step reveal reveal-delay-${index + 1}`}>
              <StepIcon number={step.number} accent={step.accent} />
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
