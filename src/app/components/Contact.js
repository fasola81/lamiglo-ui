export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="section-container">
        <span className="section-label">Start a Project</span>
        <h2 className="section-title">
          Get In <span className="gradient-text-copper">Touch</span>
        </h2>

        <div className="contact-centered reveal">
          <p className="contact-info-text">
            Ready to elevate your digital presence or integrate AI into your operations? 
            We&apos;d love to hear about your project. Drop us a line and let&apos;s start 
            a conversation about what&apos;s possible.
          </p>

          <a href="mailto:contact@lamiglo.com" className="contact-email-card">
            <div className="contact-email-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-email-content">
              <span className="contact-email-label">Email Us Directly</span>
              <span className="contact-email-address">contact@lamiglo.com</span>
            </div>
            <div className="contact-email-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          <div className="contact-detail-row">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">Remote-First · Global</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Response Time</div>
                <div className="contact-detail-value">Within 24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
