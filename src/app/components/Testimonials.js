'use client';

/* ──────────────────────────────────────────────
   TESTIMONIALS SECTION — Social Proof
   ────────────────────────────────────────────── */

const testimonials = [
  {
    quote: 'Lamiglo transformed our clunky scheduling system into a streamlined, user-friendly platform. Their attention to detail and understanding of our unique needs was exceptional.',
    name: 'Rob D.',
    role: 'Director',
    company: 'Soccer Club of Springfield',
    accent: 'cyan',
  },
  {
    quote: 'The AI integration roadmap Lamiglo provided saved us months of guesswork. They didn\'t just build — they educated our team on how to leverage AI effectively.',
    name: 'James K.',
    role: 'CTO',
    company: 'EdTech Startup',
    accent: 'copper',
  },
  {
    quote: 'From concept to deployment in under 6 weeks. Lamiglo\'s process is transparent, their communication is outstanding, and the quality of the final product exceeded expectations.',
    name: 'Sarah M.',
    role: 'Founder',
    company: 'FinTech SaaS',
    accent: 'cyan',
  },
];

function QuoteMark({ accent }) {
  const color = accent === 'cyan' ? 'rgba(168,85,247,' : 'rgba(255,138,101,';
  return (
    <svg className="testimonial-quote-mark" viewBox="0 0 40 32" fill="none" aria-hidden="true">
      <path
        d="M0 20 L0 12 Q0 0 12 0 L16 0 L16 4 Q8 4 8 12 L16 12 L16 32 L0 32 Z M24 20 L24 12 Q24 0 36 0 L40 0 L40 4 Q32 4 32 12 L40 12 L40 32 L24 32 Z"
        fill={`${color}0.12)`}
        stroke={`${color}0.3)`}
        strokeWidth="0.5"
      />
      {/* Sparkle */}
      <circle cx="8" cy="6" r="1.5" fill={`${color}0.5)`}>
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function StarRating() {
  return (
    <div className="testimonial-stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="none" className="testimonial-star" style={{ animationDelay: `${i * 100}ms` }}>
          <path
            d="M10 2 L12.4 7.2 L18 7.8 L13.8 11.6 L15 17 L10 14.2 L5 17 L6.2 11.6 L2 7.8 L7.6 7.2 Z"
            fill="rgba(255,138,101,0.8)"
            stroke="rgba(255,138,101,0.4)"
            strokeWidth="0.5"
            className="star-fill"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="section-container">
        <span className="section-label">Social Proof</span>
        <h2 className="section-title">
          What Our Clients <span className="gradient-text-copper">Say</span>
        </h2>
        <p className="section-subtitle">
          Don&apos;t just take our word for it — hear from the businesses 
          we&apos;ve helped transform through code and AI.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`testimonial-card reveal reveal-delay-${index + 1}`}
              data-accent={t.accent}
            >
              {/* Accent border */}
              <div className={`testimonial-accent-line ${t.accent}`} />

              <QuoteMark accent={t.accent} />

              <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>

              <StarRating />

              <div className="testimonial-divider" />

              <div className="testimonial-author">
                <div className={`testimonial-avatar ${t.accent}`}>
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
