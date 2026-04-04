import InsightsPage from './InsightsPage';

export const metadata = {
  title: 'Executive Insights — Lamiglo Properties',
  description: 'Internal analytics dashboard for Lamiglo property performance.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsightsRoute() {
  return <InsightsPage />;
}
