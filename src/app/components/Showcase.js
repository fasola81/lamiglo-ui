'use client';

const projects = [
  {
    title: 'SwiftLearn.ai',
    url: 'https://www.swiftlearn.ai',
    description: 'An AI-powered educational platform that personalizes learning pathways with intelligent tutoring, adaptive course recommendations, and real-time knowledge graph tracking for accelerated mastery.',
    tag: 'EdTech · AI',
    accent: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    title: 'iExpenseOnline.com',
    url: 'https://www.iexpenseonline.com',
    description: 'A streamlined expense management dashboard featuring real-time budget tracking, visual category breakdowns, transaction monitoring, and financial literacy tools — built for clarity and control.',
    tag: 'FinTech',
    accent: 'copper',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'InternPick.com',
    url: 'https://www.internpick.com',
    description: 'A global talent matchmaking platform connecting students with internship opportunities through AI-driven skill matching, school network integrations, and streamlined practicum management workflows.',
    tag: 'HRTech · AI',
    accent: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'SCS Scheduler',
    url: 'https://www.soccerclubofspringfield.com',
    description: 'A custom scheduling solution for the Soccer Club of Springfield — featuring calendar-based practice & game management, field assignments, coach availability tracking, and team roster coordination.',
    tag: 'SportsTech',
    accent: 'copper',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <rect x="7" y="14" width="3" height="3" rx="0.5" />
        <rect x="14" y="14" width="3" height="3" rx="0.5" />
      </svg>
    ),
  },
];

export default function Showcase() {
  return (
    <section className="showcase section-padding" id="showcase">
      <div className="section-container">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          Our <span className="gradient-text-cyan">Work</span>
        </h2>
        <p className="section-subtitle">
          A curated selection of projects we&apos;ve engineered — each one a testament 
          to precision craftsmanship and measurable business impact.
        </p>

        <div className="showcase-grid">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`showcase-tile reveal reveal-delay-${index + 1}`}
              data-accent={project.accent}
            >
              {/* Top accent line */}
              <div className={`showcase-tile-accent-line ${project.accent}`} />
              
              {/* Glow effect */}
              <div className={`showcase-tile-glow ${project.accent}`} />

              {/* Header row: icon + tag */}
              <div className="showcase-tile-header">
                <div className={`showcase-tile-icon ${project.accent}`}>
                  {project.icon}
                </div>
                <span className={`showcase-tile-tag ${project.accent}`}>
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="showcase-tile-title">
                {project.title}
                <span className="showcase-tile-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
              </h3>

              {/* URL */}
              <span className="showcase-tile-url">{project.url.replace('https://', '')}</span>

              {/* Description */}
              <p className="showcase-tile-desc">{project.description}</p>

              {/* Visit link hint */}
              <div className="showcase-tile-visit">
                <span>Visit Project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
