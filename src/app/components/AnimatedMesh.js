'use client';

import { useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────
   ANIMATED SVG MESH BACKGROUND
   Apple-grade floating node network with 
   connecting edges. Pure SVG animation.
   ────────────────────────────────────────────── */

const NODES = [
  // Top region
  { cx: 5, cy: 6, r: 1.5, color: 'cyan', dur: '18s', dx: 3, dy: -2 },
  { cx: 15, cy: 4, r: 1, color: 'cyan', dur: '22s', dx: -2, dy: 4 },
  { cx: 28, cy: 10, r: 2, color: 'copper', dur: '20s', dx: 4, dy: -3 },
  { cx: 42, cy: 3, r: 1.5, color: 'cyan', dur: '25s', dx: -3, dy: 2 },
  { cx: 55, cy: 12, r: 1, color: 'copper', dur: '19s', dx: 2, dy: -4 },
  { cx: 68, cy: 6, r: 1.8, color: 'cyan', dur: '23s', dx: -4, dy: 3 },
  { cx: 82, cy: 3, r: 1.2, color: 'copper', dur: '21s', dx: 3, dy: 2 },
  { cx: 92, cy: 9, r: 1.5, color: 'cyan', dur: '17s', dx: -2, dy: -3 },
  // Upper-middle region
  { cx: 10, cy: 22, r: 1, color: 'copper', dur: '24s', dx: 4, dy: 2 },
  { cx: 25, cy: 28, r: 1.8, color: 'cyan', dur: '20s', dx: -3, dy: -2 },
  { cx: 38, cy: 18, r: 1, color: 'copper', dur: '26s', dx: 2, dy: 4 },
  { cx: 55, cy: 25, r: 1.5, color: 'cyan', dur: '22s', dx: -4, dy: -3 },
  { cx: 70, cy: 20, r: 1.2, color: 'copper', dur: '19s', dx: 3, dy: 2 },
  { cx: 85, cy: 26, r: 1, color: 'cyan', dur: '23s', dx: -2, dy: -4 },
  { cx: 95, cy: 18, r: 1.5, color: 'copper', dur: '21s', dx: 2, dy: 3 },
  // Middle region
  { cx: 8, cy: 40, r: 1.2, color: 'cyan', dur: '25s', dx: -3, dy: -2 },
  { cx: 22, cy: 45, r: 1.5, color: 'copper', dur: '18s', dx: 4, dy: 2 },
  { cx: 48, cy: 38, r: 1, color: 'cyan', dur: '20s', dx: -2, dy: 4 },
  { cx: 75, cy: 42, r: 1.8, color: 'copper', dur: '22s', dx: 3, dy: -3 },
  { cx: 90, cy: 36, r: 1, color: 'cyan', dur: '24s', dx: -4, dy: 2 },
  // Lower-middle region
  { cx: 12, cy: 58, r: 1.5, color: 'copper', dur: '19s', dx: 3, dy: -2 },
  { cx: 30, cy: 55, r: 1, color: 'cyan', dur: '23s', dx: -2, dy: 3 },
  { cx: 50, cy: 60, r: 1.8, color: 'copper', dur: '21s', dx: 4, dy: -4 },
  { cx: 65, cy: 54, r: 1.2, color: 'cyan', dur: '25s', dx: -3, dy: 2 },
  { cx: 88, cy: 58, r: 1, color: 'copper', dur: '20s', dx: 2, dy: -3 },
  // Bottom region
  { cx: 8, cy: 74, r: 1.2, color: 'cyan', dur: '22s', dx: -3, dy: 2 },
  { cx: 35, cy: 78, r: 1.5, color: 'copper', dur: '18s', dx: 4, dy: -2 },
  { cx: 55, cy: 72, r: 1, color: 'cyan', dur: '20s', dx: -2, dy: 3 },
  { cx: 78, cy: 76, r: 1.8, color: 'copper', dur: '24s', dx: 3, dy: -4 },
  { cx: 92, cy: 70, r: 1.2, color: 'cyan', dur: '21s', dx: -4, dy: 2 },
];

// Edges connect nearby nodes
const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14],
  [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14],
  [8, 15], [9, 16], [11, 17], [12, 18], [13, 19],
  [15, 16], [16, 17], [17, 18], [18, 19],
  // Lower connections
  [15, 20], [16, 21], [17, 22], [18, 23], [19, 24],
  [20, 21], [21, 22], [22, 23], [23, 24],
  [20, 25], [21, 26], [22, 27], [23, 28], [24, 29],
  [25, 26], [26, 27], [27, 28], [28, 29],
];

function getColor(type, opacity = 1) {
  return type === 'cyan'
    ? `rgba(168, 85, 247, ${opacity})`
    : `rgba(255, 138, 101, ${opacity})`;
}

export default function AnimatedMesh() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        containerRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animated-mesh-container" aria-hidden="true">
      <svg
        ref={containerRef}
        className="animated-mesh-svg"
        viewBox="0 0 100 85"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mesh-glow-cyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.25)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0)" />
          </radialGradient>
          <radialGradient id="mesh-glow-copper" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,138,101,0.2)" />
            <stop offset="100%" stopColor="rgba(255,138,101,0)" />
          </radialGradient>
          <filter id="mesh-blur">
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
        </defs>

        {/* Edges */}
        <g className="mesh-edges">
          {EDGES.map(([a, b], i) => {
            const na = NODES[a];
            const nb = NODES[b];
            return (
              <line
                key={`edge-${i}`}
                x1={na.cx}
                y1={na.cy}
                x2={nb.cx}
                y2={nb.cy}
                stroke={getColor(na.color, 0.06)}
                strokeWidth="0.15"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${8 + (i % 5) * 2}s`}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
        </g>

        {/* Nodes */}
        <g className="mesh-nodes">
          {NODES.map((node, i) => (
            <g key={`node-${i}`}>
              {/* Glow halo */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r * 4}
                fill={`url(#mesh-glow-${node.color})`}
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  values={`${node.r * 3};${node.r * 5};${node.r * 3}`}
                  dur={node.dur}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.5;0.2"
                  dur={node.dur}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Core dot */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={getColor(node.color, 0.6)}
                filter="url(#mesh-blur)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0;${node.dx},${node.dy};0,0`}
                  dur={node.dur}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0.9;0.4"
                  dur={node.dur}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </g>

        {/* Traveling data pulses along some edges */}
        {[0, 3, 7, 10, 14, 18, 22, 26].map((edgeIdx) => {
          if (edgeIdx >= EDGES.length) return null;
          const [a, b] = EDGES[edgeIdx];
          const na = NODES[a];
          const nb = NODES[b];
          return (
            <circle
              key={`pulse-${edgeIdx}`}
              r="0.4"
              fill={getColor(na.color, 0.9)}
            >
              <animateMotion
                dur={`${3 + (edgeIdx % 4)}s`}
                repeatCount="indefinite"
                path={`M${na.cx},${na.cy} L${nb.cx},${nb.cy}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={`${3 + (edgeIdx % 4)}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}
