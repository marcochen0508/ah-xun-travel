'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { TrafficRoute, Waypoint } from './trafficPaths';

interface TrafficLayerProps {
  routes: TrafficRoute[];
  isEditorActive?: boolean;
}

// 1. Realistic Commercial Airliner SVG
function CommercialAirlinerSVG({ isAirborne = false, className = '' }: { isAirborne?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-9 h-9 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Jet Turbofan Engines under wings */}
      <rect x="36" y="44" width="5" height="13" rx="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
      <rect x="59" y="44" width="5" height="13" rx="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
      <ellipse cx="38.5" cy="45" rx="2" ry="1.2" fill="#0f172a" />
      <ellipse cx="61.5" cy="45" rx="2" ry="1.2" fill="#0f172a" />

      {/* Main Swept Wings */}
      <path
        d="M50 38 L88 56 C90 57 88 60 84 60 L54 53 L54 74 L68 83 C69 84 68 86 66 86 L50 82 L34 86 C32 86 31 84 32 83 L46 74 L46 53 L16 60 C12 60 10 57 12 56 L50 38 Z"
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Main Fuselage */}
      <ellipse cx="50" cy="50" rx="6.5" ry="38" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />

      {/* Cockpit Windshield */}
      <path d="M46.5 19 C48 17 52 17 53.5 19 L54 22 L46 22 Z" fill="#0f172a" />

      {/* Cabin Windows line */}
      <line x1="50" y1="28" x2="50" y2="68" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="1.2 1.8" strokeLinecap="round" />

      {/* Tail Fin (Vertical Stabilizer) */}
      <path d="M48.5 70 L51.5 70 L52 86 L48 86 Z" fill="#0284c7" />

      {/* Wingtip Navigation Strobe Beacons */}
      <circle cx="87" cy="58" r="1.5" fill="#10b981" />
      <circle cx="13" cy="58" r="1.5" fill="#ef4444" />
    </svg>
  );
}

// Airliner Shadow SVG
function CommercialAirlinerShadowSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-9 h-9 fill-black blur-[1.2px]" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="6.5" ry="38" />
      <path d="M50 38 L88 56 C90 57 88 60 84 60 L54 53 L54 74 L68 83 C69 84 68 86 66 86 L50 82 L34 86 C32 86 31 84 32 83 L46 74 L46 53 L16 60 C12 60 10 57 12 56 L50 38 Z" />
    </svg>
  );
}

// 2. Realistic White Cruise Boat & Thai Longtail Boat SVG
function RealisticBoatSVG({ isCruise = true }: { isCruise?: boolean }) {
  if (isCruise) {
    return (
      <svg viewBox="0 0 50 20" className="w-7 h-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4 L42 4 C47 4 49 10 45 15 L10 15 C6 15 5 10 8 4 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
        <path d="M10 14 L44 14" stroke="#0284c7" strokeWidth="1" strokeLinecap="round" />
        <rect x="14" y="6" width="22" height="6" rx="2" fill="#0284c7" />
        <rect x="16" y="7.5" width="18" height="3" rx="1" fill="#e0f2fe" />
        <circle cx="44" cy="9.5" r="1" fill="#facc15" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 50 20" className="w-6 h-2.5 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6 L44 6 C48 6 49 10 46 13 L8 13 C5 13 4 10 6 6 Z" fill="#78350f" stroke="#451a03" strokeWidth="0.8" />
      <path d="M44 6 L48 9.5 L44 13" fill="#ef4444" stroke="#eab308" strokeWidth="0.6" />
      <rect x="16" y="7" width="16" height="4.5" rx="1" fill="#f59e0b" />
    </svg>
  );
}

// Helper to calculate total distance and segments of a path
function getPathMetrics(points: Waypoint[]) {
  if (points.length < 2) return { totalDist: 0, segments: [] };
  const segments: { p1: Waypoint; p2: Waypoint; dist: number; cumDist: number }[] = [];
  let totalDist = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const dx = p2.x - p1.x;
    const dy = (p2.y - p1.y) * 0.5625;
    const dist = Math.sqrt(dx * dx + dy * dy);
    totalDist += dist;
    segments.push({ p1, p2, dist, cumDist: totalDist });
  }
  return { totalDist, segments };
}

// Interpolate position and heading angle at progress t (0 to 1)
function samplePath(
  segments: { p1: Waypoint; p2: Waypoint; dist: number; cumDist: number }[],
  totalDist: number,
  t: number
): { x: number; y: number; angle: number; progress: number } | null {
  if (!segments.length || totalDist === 0) return null;
  const targetDist = ((t % 1) + 1) % 1 * totalDist;

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (targetDist <= seg.cumDist || i === segments.length - 1) {
      const segStartDist = seg.cumDist - seg.dist;
      const segT = seg.dist > 0 ? (targetDist - segStartDist) / seg.dist : 0;
      const x = seg.p1.x + (seg.p2.x - seg.p1.x) * segT;
      const y = seg.p1.y + (seg.p2.y - seg.p1.y) * segT;
      const dx = seg.p2.x - seg.p1.x;
      const dy = seg.p2.y - seg.p1.y;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      return { x, y, angle, progress: t };
    }
  }
  return null;
}

// Continuous Flight Cycle:
// Takeoff (P1 -> P2 -> Sky Climb) -> Sky Cruise Tour -> Landing Approach to P2 -> Touchdown at P2 & Rollout to P1 -> Smooth Fade Out
function getSmoothOneWayFlightPosition(p1: Waypoint, p2: Waypoint, progress: number) {
  const rdx = p2.x - p1.x;
  const rdy = p2.y - p1.y;
  const rLen = Math.hypot(rdx, rdy) || 1;
  const ux = rdx / rLen;
  const uy = rdy / rLen;

  // Orthogonal vector for wide panoramic sky turn
  const nx = -uy;
  const ny = ux;

  // Key Milestones in 0 -> 1 progress:
  // 0.00 ~ 0.14: Runway Takeoff Roll (P1 -> P2, Fade in)
  // 0.14 ~ 0.28: Liftoff at P2 and Climb Straight into Sky
  // 0.28 ~ 0.72: Long Panoramic High Sky Cruise Tour
  // 0.72 ~ 0.86: Approach Descent aligning directly towards P2
  // 0.86 ~ 1.00: Touchdown at P2 & Rollout from P2 to P1 -> Smooth Fade Out at P1

  if (progress < 0.14) {
    // 1. Takeoff Roll: P1 -> P2 (加速滑跑 節點1 ➔ 節點2)
    const t = progress / 0.14;
    const easeT = t * t;
    const x = p1.x + rdx * easeT;
    const y = p1.y + rdy * easeT;
    const opacity = Math.min(t * 3, 1.0); // Smooth fade in at start
    return { x, y, altitude: 0, scale: 0.95 + easeT * 0.05, opacity, isAirborne: false };
  }

  if (progress < 0.28) {
    // 2. Liftoff at P2 and Climb Straight into Sky (節點2離地衝天爬升)
    const t = (progress - 0.14) / 0.14;
    const climbDist = 42;
    const x = p2.x + ux * climbDist * t;
    const y = p2.y + uy * climbDist * t;
    return { x, y, altitude: t * 32, scale: 1.0 + t * 0.35, opacity: 1.0, isAirborne: true };
  }

  if (progress < 0.72) {
    // 3. Wide Panoramic Sky Tour across Northern Skies (天空寬廣大迴旋漫遊巡航)
    const t = (progress - 0.28) / 0.44;
    const startX = p2.x + ux * 42;
    const startY = p2.y + uy * 42;
    // Approach start point for landing towards P2
    const appX = p2.x + ux * 48;
    const appY = p2.y + uy * 48;

    const pCtrl1X = startX + ux * 35 + nx * 40;
    const pCtrl1Y = startY + uy * 35 + ny * 40;
    const pCtrl2X = appX + ux * 35 - nx * 35;
    const pCtrl2Y = appY + uy * 35 - ny * 35;

    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;

    const x = uuu * startX + 3 * uu * t * pCtrl1X + 3 * u * tt * pCtrl2X + ttt * appX;
    const y = uuu * startY + 3 * uu * t * pCtrl1Y + 3 * u * tt * pCtrl2Y + ttt * appY;
    return { x, y, altitude: 32, scale: 1.35, opacity: 1.0, isAirborne: true };
  }

  if (progress < 0.86) {
    // 4. Approach Descent towards P2 (對準節點2平緩降落進場)
    const t = (progress - 0.72) / 0.14;
    const appX = p2.x + ux * 48;
    const appY = p2.y + uy * 48;
    const x = appX + (p2.x - appX) * t;
    const y = appY + (p2.y - appY) * t;
    return { x, y, altitude: (1 - t) * 32, scale: 1.35 - t * 0.4, opacity: 1.0, isAirborne: true };
  }

  // 5. Touchdown at P2 & Rollout from P2 to P1 -> Fade out at P1 (節點2觸地並減速滑行至節點1漸淡消失)
  const t = (progress - 0.86) / 0.14;
  const easeT = Math.sqrt(t);
  const x = p2.x - rdx * easeT;
  const y = p2.y - rdy * easeT;
  const opacity = t > 0.7 ? Math.max(0, 1.0 - (t - 0.7) / 0.3) : 1.0; // Fade out near P1
  return { x, y, altitude: 0, scale: 0.95, opacity, isAirborne: false };
}

export default function TrafficLayer({ routes, isEditorActive = false }: TrafficLayerProps) {
  const [time, setTime] = useState(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let lastStamp = performance.now();
    const loop = (now: number) => {
      const dt = (now - lastStamp) / 1000;
      lastStamp = now;
      setTime((prev) => prev + dt);
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const routeMetrics = useMemo(() => {
    return routes.map((r) => ({
      route: r,
      ...getPathMetrics(r.points),
    }));
  }, [routes]);

  const carColors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#ffffff', '#8b5cf6'];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20">
      {/* Visual representation of route paths when in Editor mode */}
      {isEditorActive && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {routes.map((r) => {
            if (r.points.length < 2) return null;
            const strokeColor =
              r.type === 'road'
                ? '#f59e0b'
                : r.type === 'river'
                ? '#38bdf8'
                : r.type === 'runway'
                ? '#ec4899'
                : '#a855f7';
            const pointsStr = r.points.map((p) => `${p.x},${p.y}`).join(' ');
            return (
              <polyline
                key={r.id}
                points={pointsStr}
                fill="none"
                stroke={strokeColor}
                strokeWidth="0.4"
                strokeDasharray={r.type === 'skyway' ? '1 1' : undefined}
                strokeOpacity="0.8"
              />
            );
          })}
        </svg>
      )}

      {/* Routes Traffic: Roads, Rivers, Airfield Takeoff -> Sky Cruise -> Touchdown Cycle */}
      {routeMetrics.map(({ route, totalDist, segments }) => {
        if (totalDist === 0 || !segments.length) return null;

        // --- A. AIRFIELD RUNWAY & SKY LIFECYCLE ---
        if (route.type === 'runway') {
          const p1 = route.points[0]; // 節點 1: 跑道起點 / 降落觸地點
          const p2 = route.points[route.points.length - 1]; // 節點 2: 跑道尾 / 離地點

          const cycleDuration = 48; // 48s complete realistic panoramic tour cycle
          const rawCycle = ((time / cycleDuration) % 1 + 1) % 1;

          // Numerical Tangent Vector for 100% Exact Forward Heading
          const dt = 0.002;
          const posCurr = getSmoothOneWayFlightPosition(p1, p2, rawCycle);
          const posNext = getSmoothOneWayFlightPosition(p1, p2, (rawCycle + dt) % 1);

          const dx = posNext.x - posCurr.x;
          const dy = posNext.y - posCurr.y;
          const headingAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

          const shadowOpacity = posCurr.isAirborne
            ? Math.max(0.38 - posCurr.altitude * 0.007, 0.12)
            : 0.45;

          return (
            <React.Fragment key={route.id}>
              {/* Airplane Ground Shadow */}
              <div
                className="absolute transition-transform will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-150"
                style={{
                  top: `${posCurr.y}%`,
                  left: `${posCurr.x}%`,
                  transform: `translate(-50%, -50%) rotate(${headingAngle + 90}deg) translate(0px, ${posCurr.altitude * 0.8}px) scale(${posCurr.scale * 0.85})`,
                  opacity: shadowOpacity * posCurr.opacity,
                }}
              >
                <CommercialAirlinerShadowSVG />
              </div>

              {/* Commercial Jetliner Body */}
              <div
                className="absolute transition-transform will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-35 transition-opacity duration-150"
                style={{
                  top: `${posCurr.y}%`,
                  left: `${posCurr.x}%`,
                  transform: `translate(-50%, -50%) rotate(${headingAngle + 90}deg) scale(${posCurr.scale})`,
                  opacity: posCurr.opacity,
                }}
              >
                <CommercialAirlinerSVG isAirborne={posCurr.isAirborne} />
                <div className="absolute left-1 top-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                <div className="absolute right-1 top-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              </div>
            </React.Fragment>
          );
        }

        // --- B. SKY CRUISING JETLINER #2 (空中巡航機 #2：環繞泰北全景天際) ---
        return null;
      })}

      {/* Persistent Sky Cruiser #2 (全天候高空巡航觀光客機) */}
      {(() => {
        const skyCycleDuration = 62; // 62s smooth wide-sky cruise loop
        const rawSkyCycle = ((time / skyCycleDuration) % 1 + 1) % 1;
        const dt = 0.002;

        const getSkyPos = (tCycle: number) => {
          const t = tCycle * Math.PI * 2;
          const x = 50 + 36 * Math.sin(t);
          const y = 44 + 20 * Math.cos(t) + 10 * Math.sin(2 * t);
          return { x, y, altitude: 44, scale: 1.25 };
        };

        const skyCurr = getSkyPos(rawSkyCycle);
        const skyNext = getSkyPos((rawSkyCycle + dt) % 1);
        const sdx = skyNext.x - skyCurr.x;
        const sdy = skyNext.y - skyCurr.y;
        const skyHeading = (Math.atan2(sdy, sdx) * 180) / Math.PI;

        return (
          <React.Fragment key="sky-cruiser-plane-2">
            {/* Plane 2 Ground Shadow */}
            <div
              className="absolute transition-transform will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                top: `${skyCurr.y}%`,
                left: `${skyCurr.x}%`,
                transform: `translate(-50%, -50%) rotate(${skyHeading + 90}deg) translate(0px, 32px) scale(0.95)`,
                opacity: 0.16,
              }}
            >
              <CommercialAirlinerShadowSVG />
            </div>

            {/* Plane 2 Aircraft Body */}
            <div
              className="absolute transition-transform will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-35"
              style={{
                top: `${skyCurr.y}%`,
                left: `${skyCurr.x}%`,
                transform: `translate(-50%, -50%) rotate(${skyHeading + 90}deg) scale(${skyCurr.scale})`,
              }}
            >
              <CommercialAirlinerSVG isAirborne={true} className="hue-rotate-30" />
              <div className="absolute left-1 top-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
              <div className="absolute right-1 top-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
            </div>
          </React.Fragment>
        );
      })()}

      {/* Routes Traffic: Roads and Rivers */}
      {routeMetrics.map(({ route, totalDist, segments }) => {
        if (totalDist === 0 || !segments.length || route.type === 'runway') return null;
        const count = route.density || 3;
        const baseSpeed = (route.speed || 1) * 0.04;
        const items = [];

        for (let i = 0; i < count; i++) {
          const offset = i / count;
          const rawProgress = (time * baseSpeed + offset) % 1;
          const sample = samplePath(segments, totalDist, rawProgress);
          if (!sample) continue;

          const { x, y, angle } = sample;
          const color = carColors[(i + route.name.length) % carColors.length];

          // 1. ROADS: Cars, TukTuks, Buses
          if (route.type === 'road') {
            const isBus = i % 4 === 3;
            const isTukTuk = i % 3 === 1;

            items.push(
              <div
                key={`${route.id}-car-${i}`}
                className="absolute transition-transform will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                <div
                  className="absolute bg-black/40 rounded-full blur-[1px] -z-10 translate-y-0.5"
                  style={{
                    width: isBus ? '16px' : isTukTuk ? '9px' : '11px',
                    height: isBus ? '7px' : isTukTuk ? '5px' : '6px',
                  }}
                />

                {isBus ? (
                  <div
                    className="h-2 rounded-sm border border-slate-700 shadow-md flex items-center justify-between px-0.5"
                    style={{ width: '15px', backgroundColor: '#3b82f6' }}
                  >
                    <div className="w-1 h-1 bg-sky-200 rounded-[0.5px]" />
                    <div className="w-1 h-1 bg-amber-300 rounded-full animate-pulse" />
                  </div>
                ) : isTukTuk ? (
                  <div
                    className="h-1.5 rounded-sm border border-slate-800 shadow-sm flex items-center justify-between px-0.5"
                    style={{ width: '8px', backgroundColor: '#06b6d4' }}
                  >
                    <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                    <div className="w-0.5 h-0.5 bg-red-500 rounded-full" />
                  </div>
                ) : (
                  <div
                    className="h-1.5 rounded-sm border border-slate-800 shadow-sm flex items-center justify-between px-0.5"
                    style={{ width: '10px', backgroundColor: color }}
                  >
                    <div className="w-1 h-0.5 bg-white rounded-full shadow-[0_0_4px_#fff]" />
                    <div className="w-0.5 h-0.5 bg-red-500 rounded-full" />
                  </div>
                )}
              </div>
            );
          }

          // 2. RIVERS: Realistic White Cruise Yachts & Thai Teak Longtail Boats
          if (route.type === 'river') {
            const isCruise = i % 2 === 0;

            items.push(
              <div
                key={`${route.id}-boat-${i}`}
                className="absolute transition-transform will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                <div className="absolute right-full mr-0.5 flex flex-col gap-0.5 pointer-events-none -scale-x-100 opacity-60">
                  <div className="w-3.5 h-0.5 bg-white/70 rounded-full blur-[0.4px] rotate-6" />
                  <div className="w-2.5 h-0.5 bg-sky-200/50 rounded-full blur-[0.6px] -rotate-6" />
                </div>
                <RealisticBoatSVG isCruise={isCruise} />
              </div>
            );
          }
        }

        return <React.Fragment key={route.id}>{items}</React.Fragment>;
      })}
    </div>
  );
}
