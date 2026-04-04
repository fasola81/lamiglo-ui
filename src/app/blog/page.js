import Link from 'next/link';

export const metadata = {
  title: 'Blog — Lamiglo.com',
  description: 'Insights, tutorials, and updates from the Lamiglo consulting team on web development and AI business adaptation.',
};

export default function BlogPage() {
  return (
    <main className="blog-placeholder">
      <div className="section-container" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
        <span className="section-label">Blog</span>
        <h1 className="section-title">
          Coming <span className="gradient-text-cyan">Soon</span>
        </h1>
        <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
          We&apos;re curating insights on web development, AI integration, and digital transformation strategies. 
          Stay tuned for expert perspectives from the Lamiglo team.
        </p>
        <Link href="/" className="btn-primary" style={{ display: 'inline-flex' }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
