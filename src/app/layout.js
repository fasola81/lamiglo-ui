import './globals.css';

export const metadata = {
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Animated Background Mesh */}
        <div className="mesh-gradient" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
