import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Lamiglo.com',
  description: 'Lamiglo.com terms of service. Review the terms and conditions governing your use of our website and consulting services.',
};

export default function TermsPage() {
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
            Terms of <span className="gradient-text-copper">Service</span>
          </h1>
          <p className="legal-effective">Effective Date: April 4, 2026</p>
        </div>

        {/* Content */}
        <div className="legal-content">
          <section className="legal-section">
            <h2 className="legal-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Lamiglo website at <strong>lamiglo.com</strong> (the &quot;Site&quot;) or
              engaging our consulting services, you agree to be bound by these Terms of Service (&quot;Terms&quot;).
              If you do not agree to these Terms, please do not use our Site or services.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">2. Services</h2>
            <p>
              Lamiglo provides specialist consulting services in web development and AI business adaptation.
              The specific scope, deliverables, timeline, and compensation for any engagement will be defined
              in a separate service agreement or statement of work (&quot;SOW&quot;) between Lamiglo and the client.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time
              with reasonable notice to active clients.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">3. Use of the Website</h2>
            <p>You agree to use our Site only for lawful purposes and in compliance with these Terms. You may not:</p>
            <ul className="legal-list">
              <li>Use the Site in any way that violates applicable local, state, national, or international law</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or its systems</li>
              <li>Introduce malware, viruses, or any other harmful code</li>
              <li>Interfere with the proper functioning of the Site</li>
              <li>Scrape, crawl, or extract data from the Site without prior written consent</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">4. Intellectual Property</h2>
            <p>
              All content on this Site — including but not limited to text, graphics, logos, images, designs,
              code, and software — is the property of Lamiglo or its licensors and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this
              Site without our explicit written permission.
            </p>

            <h3 className="legal-subheading">Client Work</h3>
            <p>
              Ownership and licensing of deliverables produced during consulting engagements will be governed
              by the terms of the applicable SOW or service agreement. Unless otherwise specified, Lamiglo
              retains the right to showcase completed projects in its portfolio.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information shared during
              the course of a consulting engagement. Confidential information includes, but is not limited to,
              business strategies, technical specifications, financial data, and any materials marked as confidential.
            </p>
            <p>
              This obligation of confidentiality survives the termination of any service agreement.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">6. Payment Terms</h2>
            <p>
              Payment terms for consulting services will be outlined in the applicable SOW or service agreement.
              Unless otherwise agreed:
            </p>
            <ul className="legal-list">
              <li>Invoices are due within 15 days of issuance</li>
              <li>Late payments may be subject to interest at 1.5% per month</li>
              <li>All fees are in USD unless otherwise specified</li>
              <li>Lamiglo reserves the right to suspend services for overdue accounts</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Lamiglo shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to loss of
              profits, data, or business opportunities, arising from your use of the Site or our services.
            </p>
            <p>
              Our total liability for any claim arising from these Terms or our services shall not exceed the
              total fees paid by you to Lamiglo in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">8. Warranties &amp; Disclaimer</h2>
            <p>
              The Site and all content are provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> without
              warranties of any kind, whether express or implied, including but not limited to implied warranties
              of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the Site will be uninterrupted, secure, or error-free, or that any defects
              will be corrected.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Lamiglo and its officers, directors, employees,
              and agents from and against any claims, liabilities, damages, losses, or expenses (including
              reasonable attorneys&apos; fees) arising from your use of the Site or violation of these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">10. Termination</h2>
            <p>
              We reserve the right to terminate or restrict access to our Site and services at our sole discretion,
              without prior notice or liability, for any reason — including a breach of these Terms.
            </p>
            <p>
              Upon termination of a consulting engagement, all accrued rights, obligations, and provisions
              that by their nature should survive will remain in effect.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States
              and the State of New York, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">12. Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time by updating this page. Changes become effective immediately
              upon posting. Your continued use of the Site after changes are posted constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">13. Contact Us</h2>
            <p>For questions about these Terms, please contact us:</p>
            <div className="legal-contact-card">
              <p><strong>Lamiglo</strong></p>
              <p>Email: <a href="mailto:contact@lamiglo.com" className="legal-link">contact@lamiglo.com</a></p>
              <p>Website: <a href="https://lamiglo.com" className="legal-link">lamiglo.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
