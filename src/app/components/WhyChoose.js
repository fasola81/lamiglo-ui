'use client';

/* ──────────────────────────────────────────────
   WHY CHOOSE SECTION — 6 Value Propositions
   Pre-compute all trig values to avoid SSR/client
   float mismatch (hydration errors).
   ────────────────────────────────────────────── */

/* Hardcoded neuron positions (pre-computed from angles 0,60,120,180,240,300 at radius 14)
   to avoid floating-point SSR/client mismatch that causes hydration errors. */
const NEURON_POSITIONS = [
  { x: 34, y: 20 },       // 0°
  { x: 27, y: 32.12 },    // 60°
  { x: 13, y: 32.12 },    // 120°
  { x: 6, y: 20 },        // 180°
  { x: 13, y: 7.88 },     // 240°
  { x: 27, y: 7.88 },     // 300°
];

function FounderIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="why-icon-svg">
      <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M8 34 Q8 24 20 24 Q32 24 32 34" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M20 8 L22 4 M20 8 L18 4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function FullStackIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="why-icon-svg">
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="6" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="20" y1="6" x2="20" y2="34" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AINativeIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="why-icon-svg">
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.2" fill="none">
        <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6" />
      {NEURON_POSITIONS.map((pos, i) => (
        <g key={i}>
          <line x1="20" y1="20" x2={pos.x} y2={pos.y} stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
          <circle cx={pos.x} cy={pos.y} r="1.5" fill="currentColor" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="why-icon-svg">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M20 10 V30 M16 14 H22 Q26 14 26 18 Q26 22 22 22 H16 M16 22 H23 Q27 22 27 26 Q27 30 23 30 H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="why-icon-svg">
      <circle cx="20" cy="22" r="13" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <line x1="20" y1="22" x2="20" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="22" x2="27" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7">
        <animateTransform attributeName="transform" type="rotate" values="0 20 22;360 20 22" dur="8s" repeatCount="indefinite" />
      </line>
      <path d="M14 6 L20 9 L26 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function PartnershipIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="why-icon-svg">
      <path d="M8 24 Q8 16 14 16 L20 20 L26 16 Q32 16 32 24 L32 30 Q32 34 28 34 H12 Q8 34 8 30 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="26" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M18 12 H22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

const values = [
  {
    title: 'Founder-Led Engineering',
    description: 'Every project is personally architected by senior engineers, not delegated to juniors. You get direct access to decision-makers.',
    accent: 'cyan',
    Icon: FounderIcon,
  },
  {
    title: 'Full-Stack Delivery',
    description: 'From UI/UX design to backend APIs, cloud infrastructure, and AI integrations — one team, no handoffs, no miscommunication.',
    accent: 'copper',
    Icon: FullStackIcon,
  },
  {
    title: 'AI-Native Thinking',
    description: 'We don\'t bolt AI on as an afterthought. Every solution is designed with intelligent automation built into its DNA from day one.',
    accent: 'cyan',
    Icon: AINativeIcon,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees, no scope-creep surprises. Fixed-price milestones with clear deliverables at every stage of the project.',
    accent: 'copper',
    Icon: PricingIcon,
  },
  {
    title: 'Rapid Time-to-Value',
    description: 'Lean sprints and proven boilerplates mean your MVP ships in weeks, not months. Speed without sacrificing quality.',
    accent: 'cyan',
    Icon: ClockIcon,
  },
  {
    title: 'Ongoing Partnership',
    description: 'We don\'t disappear after launch. Retainer options for continuous optimization, monitoring, and feature evolution.',
    accent: 'copper',
    Icon: PartnershipIcon,
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose section-padding" id="why-choose">
      <div className="section-container">
        <span className="section-label">Our Advantage</span>
        <h2 className="section-title">
          Why <span className="gradient-text-mixed">Lamiglo</span>
        </h2>
        <p className="section-subtitle">
          We combine founder-led precision with enterprise-grade delivery — 
          here&apos;s what sets us apart from traditional agencies.
        </p>

        <div className="why-grid">
          {values.map((v, index) => (
            <div
              key={v.title}
              className={`why-card reveal reveal-delay-${(index % 3) + 1}`}
              data-accent={v.accent}
            >
              <div className={`why-card-icon ${v.accent}`}>
                <v.Icon />
              </div>
              <h3 className="why-card-title">{v.title}</h3>
              <p className="why-card-desc">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
