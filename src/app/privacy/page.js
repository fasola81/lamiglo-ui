import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Lamiglo.com',
  description: 'Lamiglo.com privacy policy. Learn how we collect, use, and protect your personal information when you use our consulting services and website.',
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-container section-container">
        {/* Header */}
        <div className="legal-header">
          <Link href="/" className="legal-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="section-label">Legal</span>
          <h1 className="section-title">
            Privacy <span className="gradient-text-cyan">Policy</span>
          </h1>
          <p className="legal-effective">Effective Date: April 4, 2026</p>
        </div>

        {/* Content */}
        <div className="legal-content">
          <section className="legal-section">
            <h2 className="legal-heading">1. Introduction</h2>
            <p>
              Lamiglo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website <strong>lamiglo.com</strong> (the &quot;Site&quot;) or engage our consulting services.
            </p>
            <p>
              By using our Site, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">2. Information We Collect</h2>

            <h3 className="legal-subheading">Personal Information</h3>
            <p>When you contact us through our website or engage our services, we may collect:</p>
            <ul className="legal-list">
              <li>Name and email address</li>
              <li>Company or organization name</li>
              <li>Phone number (if voluntarily provided)</li>
              <li>Project requirements and business information shared during consultations</li>
            </ul>

            <h3 className="legal-subheading">Automatically Collected Information</h3>
            <p>When you visit our Site, we may automatically collect:</p>
            <ul className="legal-list">
              <li>Browser type and version</li>
              <li>IP address (anonymized where possible)</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>Referring website or source</li>
              <li>Device type and operating system</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="legal-list">
              <li>Respond to inquiries and provide consulting services</li>
              <li>Improve our website experience and service offerings</li>
              <li>Analyze website usage via Google Analytics (GA4)</li>
              <li>Send project updates or communications you have opted into</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">4. Analytics &amp; Cookies</h2>
            <p>
              We use <strong>Google Analytics 4</strong> to understand how visitors interact with our Site. GA4 may use
              cookies and similar technologies to collect anonymized usage data. This helps us improve the user experience
              and measure the effectiveness of our content.
            </p>
            <p>
              You can opt out of Google Analytics tracking by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="legal-link">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">5. Data Sharing &amp; Third Parties</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information. We may share information with:
            </p>
            <ul className="legal-list">
              <li><strong>Service Providers:</strong> Trusted third parties that help us operate our business (e.g., hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required to comply with applicable law, regulation, or legal process</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal
              information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">7. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes for which it was
              collected, provide our services, or comply with legal obligations. Consultation records may be retained
              for the duration of the business relationship and for a reasonable period thereafter.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="legal-list">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@lamiglo.com" className="legal-link">hello@lamiglo.com</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">9. Children&apos;s Privacy</h2>
            <p>
              Our Site and services are not directed at individuals under the age of 16. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected such information,
              please contact us and we will promptly delete it.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Effective Date&quot;
              at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">11. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="legal-contact-card">
              <p><strong>Lamiglo</strong></p>
              <p>Email: <a href="mailto:hello@lamiglo.com" className="legal-link">hello@lamiglo.com</a></p>
              <p>Website: <a href="https://lamiglo.com" className="legal-link">lamiglo.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
