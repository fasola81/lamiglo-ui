'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const CLIENT_ID = '1085227747146-41c9i4fjmvgd8pkluc3fa32a4v9bhqg9.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/analytics.readonly';
const ADMIN_API = 'https://analyticsadmin.googleapis.com/v1beta/accountSummaries';
const DATA_API = 'https://analyticsdata.googleapis.com/v1beta';

/* ──────────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────────── */
function formatNumber(n) {
  if (n == null) return '—';
  return Number(n).toLocaleString('en-US');
}

function formatDuration(seconds) {
  if (!seconds || seconds === '0') return '0s';
  const s = Math.round(Number(seconds));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return rem > 0 ? `${m}m ${rem}s` : `${m}m`;
}

function getAccent(index) {
  return index % 2 === 0 ? 'cyan' : 'copper';
}

/* ──────────────────────────────────────────────
   MINI LINE CHART — Canvas-based
   ────────────────────────────────────────────── */
function MiniChart({ data, accent = 'cyan', width = 280, height = 80 }) {
  const canvasRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data || data.length === 0) return;
    const ctx = canvas.getContext('2d');
    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);

    const numericData = data.map(Number);
    const max = Math.max(...numericData) * 1.15 || 1;
    const min = Math.min(...numericData) * 0.85 || 0;
    const range = max - min || 1;
    const stepX = width / (numericData.length - 1 || 1);
    const padY = 8;

    const points = numericData.map((v, i) => ({
      x: i * stepX,
      y: padY + ((max - v) / range) * (height - padY * 2),
    }));

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    if (accent === 'cyan') {
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.18)');
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0.01)');
    } else {
      gradient.addColorStop(0, 'rgba(232, 184, 109, 0.18)');
      gradient.addColorStop(1, 'rgba(232, 184, 109, 0.01)');
    }

    // Fill area
    ctx.beginPath();
    ctx.moveTo(points[0].x, height);
    points.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.strokeStyle = accent === 'cyan' ? '#00D4FF' : '#E8B86D';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();

    // Endpoint dot
    const last = points[points.length - 1];
    ctx.beginPath();
    ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = accent === 'cyan' ? '#00D4FF' : '#E8B86D';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(last.x, last.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = accent === 'cyan' ? 'rgba(0, 212, 255, 0.25)' : 'rgba(232, 184, 109, 0.25)';
    ctx.fill();
  }, [data, accent, width, height]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="insights-chart-canvas"
    />
  );
}

/* ──────────────────────────────────────────────
   SKELETON LOADER
   ────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="insights-property-card insights-skeleton-card">
      <div className="insights-property-accent-line cyan" />
      <div className="skeleton-block skeleton-title" />
      <div className="skeleton-block skeleton-subtitle" />
      <div className="skeleton-block skeleton-chart" />
      <div className="skeleton-metrics-row">
        <div className="skeleton-block skeleton-metric" />
        <div className="skeleton-block skeleton-metric" />
        <div className="skeleton-block skeleton-metric" />
      </div>
    </div>
  );
}

function AggregateSkeletonCard() {
  return (
    <div className="insights-aggregate-card insights-skeleton-card">
      <div className="skeleton-block skeleton-icon" />
      <div className="skeleton-block skeleton-big-number" />
      <div className="skeleton-block skeleton-subtitle" />
    </div>
  );
}

/* ──────────────────────────────────────────────
   AGGREGATE METRIC ICONS
   ────────────────────────────────────────────── */
function MetricIcon({ icon }) {
  const icons = {
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    sessions: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    engagement: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    conversions: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  };
  return <span className="insights-metric-icon">{icons[icon]}</span>;
}

/* ──────────────────────────────────────────────
   GA4 API FUNCTIONS
   ────────────────────────────────────────────── */
async function fetchAccountSummaries(accessToken) {
  const res = await fetch(`${ADMIN_API}?pageSize=200`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`Admin API error: ${res.status} ${res.statusText}`);
  const data = await res.json();

  const properties = [];
  if (data.accountSummaries) {
    for (const account of data.accountSummaries) {
      if (account.propertySummaries) {
        for (const prop of account.propertySummaries) {
          properties.push({
            propertyId: prop.property,        // e.g. "properties/1234567"
            displayName: prop.displayName,
            accountName: account.displayName,
          });
        }
      }
    }
  }
  return properties;
}

async function fetchPropertyMetrics(accessToken, propertyId) {
  // Get today and 30 days ago
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 30);

  const fmt = (d) => d.toISOString().split('T')[0];

  const body = {
    dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
      { name: 'averageSessionDuration' },
      { name: 'bounceRate' },
      { name: 'conversions' },
    ],
  };

  const res = await fetch(`${DATA_API}/${propertyId}:runReport`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.warn(`Data API error for ${propertyId}:`, res.status, errBody);
    return null;
  }
  return res.json();
}

async function fetchPropertyWeeklyTrend(accessToken, propertyId) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 84); // 12 weeks

  const fmt = (d) => d.toISOString().split('T')[0];

  const body = {
    dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
    dimensions: [{ name: 'week' }],
    metrics: [{ name: 'activeUsers' }],
    orderBys: [{ dimension: { dimensionName: 'week' } }],
  };

  const res = await fetch(`${DATA_API}/${propertyId}:runReport`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) return [];
  const data = await res.json();
  if (!data.rows) return [];
  return data.rows.map((row) => Number(row.metricValues?.[0]?.value || 0));
}

function parseMetricsResponse(data) {
  if (!data || !data.rows || data.rows.length === 0) {
    return { users: '0', sessions: '0', engagement: '0s', bounce: '0%', conversions: '0' };
  }
  const values = data.rows[0].metricValues || [];
  return {
    users: formatNumber(values[0]?.value),
    sessions: formatNumber(values[1]?.value),
    engagement: formatDuration(values[2]?.value),
    bounce: `${Math.round(Number(values[3]?.value || 0) * 100)}%`,
    conversions: formatNumber(values[4]?.value),
  };
}

/* ──────────────────────────────────────────────
   MAIN INSIGHTS PAGE COMPONENT
   ────────────────────────────────────────────── */
export default function InsightsPage() {
  const [lastRefreshed, setLastRefreshed] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [gisLoaded, setGisLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [authState, setAuthState] = useState('idle');       // idle | authenticating | authenticated | error
  const [loadingState, setLoadingState] = useState('idle'); // idle | loading | done | error
  const [errorMessage, setErrorMessage] = useState('');
  const [discoveredProperties, setDiscoveredProperties] = useState([]);
  const [propertyData, setPropertyData] = useState({});     // { propertyId: { metrics, chartData } }
  const [aggregateMetrics, setAggregateMetrics] = useState(null);
  const tokenClientRef = useRef(null);

  /* ── Timestamp helper ── */
  const refreshTimestamp = () =>
    new Date().toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });

  /* ── Scroll reveal observer ── */
  useEffect(() => {
    setLastRefreshed(refreshTimestamp());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loadingState]);

  /* ── Initialize GIS token client once the library is loaded ── */
  useEffect(() => {
    if (!gisLoaded || typeof window === 'undefined') return;

    tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (response) => {
        if (response.error) {
          setAuthState('error');
          setErrorMessage(`Authentication failed: ${response.error}`);
          return;
        }
        setAccessToken(response.access_token);
        setAuthState('authenticated');
      },
    });
  }, [gisLoaded]);

  /* ── Fetch data once we have a token ── */
  useEffect(() => {
    if (!accessToken) return;
    loadData(accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  /* ── Core data loader ── */
  const loadData = async (token) => {
    setLoadingState('loading');
    setErrorMessage('');
    try {
      // Step 1: Discover properties
      const properties = await fetchAccountSummaries(token);

      if (properties.length === 0) {
        setDiscoveredProperties([]);
        setLoadingState('done');
        return;
      }

      setDiscoveredProperties(properties);

      // Step 2: Fetch metrics + chart data concurrently for all properties
      const results = await Promise.all(
        properties.map(async (prop) => {
          const [metricsRes, trendData] = await Promise.all([
            fetchPropertyMetrics(token, prop.propertyId),
            fetchPropertyWeeklyTrend(token, prop.propertyId),
          ]);
          return {
            propertyId: prop.propertyId,
            metrics: parseMetricsResponse(metricsRes),
            chartData: trendData,
          };
        })
      );

      // Step 3: Build lookup and compute aggregates
      const dataMap = {};
      let totalUsers = 0, totalSessions = 0, totalConversions = 0;
      let totalEngagementSeconds = 0, engagementCount = 0;

      for (const r of results) {
        dataMap[r.propertyId] = { metrics: r.metrics, chartData: r.chartData };

        // Sum for aggregates (strip commas for parsing)
        const u = Number(r.metrics.users.replace(/,/g, '')) || 0;
        const s = Number(r.metrics.sessions.replace(/,/g, '')) || 0;
        const c = Number(r.metrics.conversions.replace(/,/g, '')) || 0;

        // Parse engagement
        const engMatch = r.metrics.engagement.match(/(\d+)m?\s*(\d+)?s?/);
        let engSec = 0;
        if (engMatch) {
          if (r.metrics.engagement.includes('m')) {
            engSec = (parseInt(engMatch[1]) || 0) * 60 + (parseInt(engMatch[2]) || 0);
          } else {
            engSec = parseInt(engMatch[1]) || 0;
          }
        }

        totalUsers += u;
        totalSessions += s;
        totalConversions += c;
        if (engSec > 0) {
          totalEngagementSeconds += engSec;
          engagementCount++;
        }
      }

      const avgEngagement = engagementCount > 0 ? totalEngagementSeconds / engagementCount : 0;

      setAggregateMetrics([
        { label: 'Total Users', value: formatNumber(totalUsers), icon: 'users' },
        { label: 'Total Sessions', value: formatNumber(totalSessions), icon: 'sessions' },
        { label: 'Avg. Engagement', value: formatDuration(avgEngagement), icon: 'engagement' },
        { label: 'Key Conversions', value: formatNumber(totalConversions), icon: 'conversions' },
      ]);

      setPropertyData(dataMap);
      setLoadingState('done');
      setLastRefreshed(refreshTimestamp());
    } catch (err) {
      console.error('Data loading error:', err);
      setLoadingState('error');
      setErrorMessage(err.message || 'Failed to load analytics data.');
    }
  };

  /* ── Sign in handler ── */
  const handleSignIn = () => {
    if (!tokenClientRef.current) return;
    setAuthState('authenticating');
    tokenClientRef.current.requestAccessToken();
  };

  /* ── Refresh handler ── */
  const handleRefresh = async () => {
    if (!accessToken) return;
    setRefreshing(true);
    await loadData(accessToken);
    setRefreshing(false);
  };

  /* ── Render: Sign-In Gate ── */
  const renderSignInGate = () => (
    <div className="insights-auth-gate reveal visible">
      <div className="insights-auth-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      </div>
      <h2 className="insights-auth-title">Authenticate to Continue</h2>
      <p className="insights-auth-desc">
        Sign in with your Google account to access GA4 analytics data for all properties under your ownership.
      </p>
      <button
        className="insights-auth-btn"
        onClick={handleSignIn}
        disabled={authState === 'authenticating'}
      >
        <svg width="20" height="20" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        {authState === 'authenticating' ? 'Authenticating...' : 'Sign in with Google'}
      </button>
      {authState === 'error' && (
        <p className="insights-auth-error">{errorMessage}</p>
      )}
    </div>
  );

  /* ── Render: Loading Skeletons ── */
  const renderLoadingState = () => (
    <>
      <section className="insights-section">
        <div className="insights-section-header">
          <h2 className="insights-section-title">Aggregate Overview</h2>
          <span className="insights-section-period">Last 30 Days</span>
        </div>
        <div className="insights-aggregate-grid">
          {[1, 2, 3, 4].map((i) => (
            <AggregateSkeletonCard key={i} />
          ))}
        </div>
      </section>
      <section className="insights-section">
        <div className="insights-section-header">
          <h2 className="insights-section-title">Discovering Properties...</h2>
          <span className="insights-section-period insights-loading-pulse">
            <svg className="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 4v6h-6" />
              <path d="M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            Fetching data
          </span>
        </div>
        <div className="insights-property-grid">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    </>
  );

  /* ── Render: Empty State ── */
  const renderEmptyState = () => (
    <div className="insights-empty-state reveal visible">
      <div className="insights-empty-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="insights-empty-title">No Properties Found</h2>
      <p className="insights-empty-desc">
        Your Google account has no GA4 properties attached. Ensure you have access to at least one 
        Google Analytics 4 property, then refresh.
      </p>
      <button className="insights-refresh-btn" onClick={handleRefresh}>
        Try Again
      </button>
    </div>
  );

  /* ── Render: Error State ── */
  const renderErrorState = () => (
    <div className="insights-empty-state insights-error-state reveal visible">
      <div className="insights-empty-icon insights-error-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </div>
      <h2 className="insights-empty-title">Something Went Wrong</h2>
      <p className="insights-empty-desc">{errorMessage}</p>
      <button className="insights-refresh-btn" onClick={handleRefresh}>
        Retry
      </button>
    </div>
  );

  /* ── Render: Live Data ── */
  const renderLiveData = () => (
    <>
      {/* Aggregate Overview */}
      {aggregateMetrics && (
        <section className="insights-section">
          <div className="insights-section-header">
            <h2 className="insights-section-title">Aggregate Overview</h2>
            <span className="insights-section-period">Last 30 Days</span>
          </div>
          <div className="insights-aggregate-grid">
            {aggregateMetrics.map((metric, i) => (
              <div key={metric.label} className={`insights-aggregate-card reveal reveal-delay-${i + 1}`}>
                <div className="insights-aggregate-card-top">
                  <MetricIcon icon={metric.icon} />
                </div>
                <div className="insights-aggregate-value">{metric.value}</div>
                <div className="insights-aggregate-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Property Performance */}
      <section className="insights-section">
        <div className="insights-section-header">
          <h2 className="insights-section-title">Property Performance</h2>
          <span className="insights-section-period">
            {discoveredProperties.length} {discoveredProperties.length === 1 ? 'Property' : 'Properties'}
            {' · '}Last 30 Days
          </span>
        </div>
        <div className="insights-property-grid">
          {discoveredProperties.map((prop, i) => {
            const data = propertyData[prop.propertyId] || {};
            const metrics = data.metrics || {};
            const chartData = data.chartData || [];
            const accent = getAccent(i);

            return (
              <div
                key={prop.propertyId}
                className={`insights-property-card reveal reveal-delay-${(i % 4) + 1}`}
                data-accent={accent}
              >
                <div className={`insights-property-accent-line ${accent}`} />

                {/* Card header */}
                <div className="insights-property-header">
                  <div>
                    <h3 className="insights-property-name">{prop.displayName}</h3>
                    <span className="insights-property-url">{prop.propertyId.replace('properties/', 'GA4-')}</span>
                  </div>
                  <span className={`insights-property-tag ${accent}`}>
                    {prop.accountName || 'GA4'}
                  </span>
                </div>

                {/* Chart */}
                {chartData.length > 1 && (
                  <div className="insights-property-chart">
                    <div className="insights-chart-label">Active Users (Weekly)</div>
                    <MiniChart data={chartData} accent={accent} width={320} height={90} />
                  </div>
                )}

                {/* Metric row */}
                <div className="insights-property-metrics">
                  <div className="insights-pm">
                    <span className="insights-pm-value">{metrics.users || '—'}</span>
                    <span className="insights-pm-label">Users</span>
                  </div>
                  <div className="insights-pm">
                    <span className="insights-pm-value">{metrics.sessions || '—'}</span>
                    <span className="insights-pm-label">Sessions</span>
                  </div>
                  <div className="insights-pm">
                    <span className="insights-pm-value">{metrics.engagement || '—'}</span>
                    <span className="insights-pm-label">Avg. Engagement</span>
                  </div>
                  <div className="insights-pm">
                    <span className="insights-pm-value">{metrics.bounce || '—'}</span>
                    <span className="insights-pm-label">Bounce Rate</span>
                  </div>
                  <div className="insights-pm">
                    <span className="insights-pm-value">{metrics.conversions || '—'}</span>
                    <span className="insights-pm-label">Conversions</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );

  /* ── Main content router ── */
  const renderContent = () => {
    if (authState !== 'authenticated') return renderSignInGate();
    if (loadingState === 'loading') return renderLoadingState();
    if (loadingState === 'error') return renderErrorState();
    if (loadingState === 'done' && discoveredProperties.length === 0) return renderEmptyState();
    if (loadingState === 'done') return renderLiveData();
    return null;
  };

  return (
    <div className="insights-page">
      {/* Load GIS library */}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => setGisLoaded(true)}
      />

      {/* ── Page Header ── */}
      <header className="insights-header">
        <div className="insights-header-inner">
          <div className="insights-header-left">
            <Link href="/" className="insights-back-link">
              <Image
                src="/images/logo.png"
                alt="Lamiglo Logo"
                width={32}
                height={32}
                className="insights-back-logo"
              />
            </Link>
            <div>
              <h1 className="insights-header-title">Executive Insights</h1>
              <p className="insights-header-subtitle">Lamiglo Properties</p>
            </div>
          </div>
          <div className="insights-header-right">
            {authState === 'authenticated' && (
              <>
                <span className="insights-last-updated">
                  Last updated: {lastRefreshed}
                </span>
                <button className="insights-refresh-btn" onClick={handleRefresh} disabled={refreshing}>
                  <svg className={refreshing ? 'spin' : ''} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 4v6h-6" />
                    <path d="M1 20v-6h6" />
                    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
                  </svg>
                  {refreshing ? 'Refreshing...' : 'Refresh Data'}
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="insights-main">
        <div className="insights-container">
          {renderContent()}
        </div>
      </main>

      {/* ── Data Context Footer ── */}
      <footer className="insights-footer">
        <div className="insights-container">
          <div className="insights-footer-inner">
            <div className="insights-footer-lock">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <p className="insights-footer-text">
              Live data sourced from Google Analytics 4 via authenticated API access.
              {authState === 'authenticated' && ` · ${discoveredProperties.length} properties discovered.`}
            </p>
            <Link href="/" className="insights-footer-home">
              ← Back to Lamiglo.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
