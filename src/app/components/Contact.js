'use client';

import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText('contact@lamiglo.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = 'contact@lamiglo.com';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            {/* Pulse rings behind icon */}
            <div className="contact-pulse-container">
              <svg className="contact-pulse-svg" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <circle cx="40" cy="40" r="20" stroke="rgba(255,138,101,0.15)" strokeWidth="0.8">
                  <animate attributeName="r" values="16;32;16" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="40" cy="40" r="14" stroke="rgba(255,138,101,0.1)" strokeWidth="0.6">
                  <animate attributeName="r" values="12;26;12" dur="4s" begin="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="40" cy="40" r="10" stroke="rgba(255,138,101,0.08)" strokeWidth="0.5">
                  <animate attributeName="r" values="8;22;8" dur="4s" begin="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" begin="1.6s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Envelope icon with open animation on hover */}
            <div className="contact-email-icon">
              <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-envelope-svg">
                {/* Body */}
                <rect x="2" y="7" width="24" height="17" rx="3" className="envelope-body" />
                {/* Flap */}
                <path d="M2 7 L14 16 L26 7" className="envelope-flap" />
                {/* Letter peek */}
                <rect x="8" y="6" width="12" height="8" rx="1" fill="rgba(255,138,101,0.15)" className="envelope-letter" />
              </svg>
            </div>

            <div className="contact-email-content">
              <span className="contact-email-label">Email Us Directly</span>
              <span className="contact-email-address">contact@lamiglo.com</span>
            </div>

            {/* Copy to clipboard button */}
            <button
              className={`contact-copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              aria-label="Copy email address"
              title={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
              <span className="contact-copy-label">{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            {/* Arrow that draws itself on hover */}
            <div className="contact-email-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-arrow-svg">
                <path d="M5 12h14" stroke="currentColor" className="arrow-line" />
                <path d="M12 5l7 7-7 7" stroke="currentColor" className="arrow-head" />
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
