/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },

  // Security headers to protect the site and improve trust signals
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Force HTTPS — tells browsers to ONLY use HTTPS for 1 year
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent clickjacking — only allow our own site to iframe it
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Control Referer header for privacy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions policy — disable unused browser APIs
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Content Security Policy — restrict resource loading
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://analyticsdata.googleapis.com https://analyticsadmin.googleapis.com https://accounts.google.com https://www.googleapis.com https://vitals.vercel-insights.com",
              "frame-src https://accounts.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
            ].join('; '),
          },
          // Prevent XSS attacks in older browsers
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
