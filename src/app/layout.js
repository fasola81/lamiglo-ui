import './globals.css';

export const metadata = {
  metadataBase: new URL('https://lamiglo.com'),
  title: 'Lamiglo.com — Specialist Consulting in Web Development & AI',
  description: 'Elevate your business through expert website development and AI business adaptation solutions. Lamiglo delivers premium consulting services that transform how organizations leverage technology.',
  keywords: 'web development, AI consulting, business adaptation, AI solutions, website development, technology consulting',
  openGraph: {
    title: 'Lamiglo.com — Code & AI Adaptation Consulting',
    description: 'Specialist consulting in website development and AI business adaptation solutions.',
    url: 'https://lamiglo.com',
    siteName: 'Lamiglo',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
