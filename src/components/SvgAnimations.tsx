/**
 * Reusable SVG animation primitives for the landing.
 * - PathFlow: dotted animated line connecting elements (steps, sections)
 * - AnimatedCheck: check icon that draws when in viewport
 * - AnimatedCircle: pulsing circle indicator
 * - StarBurst: decorative animated burst (for badges)
 * - DataFlow: animated data flow visualization (for "cómo funciona")
 */
import { useEffect, useRef, useState } from 'react';

/** Hook: returns ref + boolean true once el enters viewport */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/** Animated check that draws-in when in viewport */
export function AnimatedCheck({ className = 'w-4 h-4', color = 'currentColor', delay = 0 }: { className?: string; color?: string; delay?: number }) {
  const { ref, inView } = useInView<SVGSVGElement>();
  return (
    <svg ref={ref} viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" opacity="0.15" />
      <path
        d="M7 12.5l3.5 3.5L17 9"
        className={inView ? 'svg-check' : ''}
        style={{ animationDelay: `${delay}ms`, opacity: inView ? 1 : 0 }}
      />
    </svg>
  );
}

/** Animated arrow with dotted flow */
export function FlowArrow({ className = 'w-full h-12', color = 'var(--primary)' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 24" preserveAspectRatio="none" fill="none">
      <path d="M2 12 L92 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" className="dash-flow" />
      <path d="M88 6 L98 12 L88 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Pulsing circle indicator for "live" feel */
export function PulsingDot({ size = 12, color = 'var(--secondary)' }: { size?: number; color?: string }) {
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <span className="absolute inset-0 rounded-full opacity-60 animate-ping" style={{ background: color }} />
      <span className="relative rounded-full" style={{ width: size, height: size, background: color }} />
    </span>
  );
}

/** Connector between numbered steps (1-2-3) — animated dotted line */
export function StepsConnector() {
  const { ref, inView } = useInView<SVGSVGElement>();
  return (
    <svg ref={ref} className="absolute top-12 left-[16.66%] right-[16.66%] h-3 hidden md:block pointer-events-none" viewBox="0 0 800 12" preserveAspectRatio="none" fill="none" aria-hidden>
      <path
        d="M10 6 L 790 6"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.4"
        className={inView ? 'svg-draw-fast' : ''}
        style={{ strokeDashoffset: inView ? undefined : 1000 }}
      />
      <circle cx="10" cy="6" r="3" fill="var(--primary)" opacity="0.6" />
      <circle cx="400" cy="6" r="3" fill="var(--primary)" opacity="0.6" />
      <circle cx="790" cy="6" r="3" fill="var(--primary)" opacity="0.6" />
    </svg>
  );
}

/** Animated background blob (slow morph) */
export function MorphingBlob({ className = '', color = 'var(--primary-soft)' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden>
      <defs>
        <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#blobGrad)">
        <animate attributeName="rx" values="180;160;180" dur="8s" repeatCount="indefinite" />
        <animate attributeName="ry" values="140;180;140" dur="8s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

/** Connector arc — "from data to closed visit" SVG storytelling */
export function ConnectorArc({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  const { ref, inView } = useInView<SVGSVGElement>();
  return (
    <svg ref={ref} className={className} viewBox="0 0 200 100" fill="none" preserveAspectRatio="none" aria-hidden>
      <path
        d="M 5 95 Q 50 5 100 50 T 195 5"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
        opacity="0.7"
        className={inView ? 'svg-draw-fast' : ''}
        style={{ animationDelay: `${delay}ms`, strokeDashoffset: inView ? undefined : 800 }}
      />
      <circle cx="5" cy="95" r="4" fill="var(--primary)" />
      <circle cx="195" cy="5" r="4" fill="var(--secondary)" />
    </svg>
  );
}

/** Sparkle decorative animation */
export function Sparkle({ className = 'w-4 h-4', color = 'var(--primary)', delay = 0 }: { className?: string; color?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z"
        fill={color}
        className="svg-pulse"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  );
}

/** Animated radar/scan effect for "Tami atendiendo" feel */
export function RadarScan({ className = 'w-12 h-12', color = 'var(--primary)' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <defs>
        <radialGradient id="rscan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <circle cx="30" cy="30" r="20" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <circle cx="30" cy="30" r="12" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <circle cx="30" cy="30" r="4" fill={color} className="svg-pulse" />
      <g opacity="0.6">
        <line x1="30" y1="30" x2="58" y2="30" stroke={color} strokeWidth="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="3s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  );
}

/** Animated dotted curved connector — for "from comment to DM" social flow.
 *  Renders a flowing dashed line with a moving dot along the path. */
export function SocialFlowConnector({ className = '', color = 'var(--primary)' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none" preserveAspectRatio="none" aria-hidden>
      <path
        id="socFlow"
        d="M 8 40 C 60 5, 140 75, 192 40"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="4 6"
        opacity="0.55"
        className="dash-flow"
      />
      <circle r="3.2" fill={color}>
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath href="#socFlow" />
        </animateMotion>
      </circle>
      <circle cx="8" cy="40" r="4" fill={color} opacity="0.85" className="svg-pulse" />
      <circle cx="192" cy="40" r="4" fill="var(--secondary)" opacity="0.85" className="svg-pulse" />
    </svg>
  );
}

/** Floating sparkle particles — decorative around hero / sections.
 *  Multiple sparkles drifting + twinkling. */
export function FloatingParticles({ className = '', count = 8, color = 'var(--primary)' }: { className?: string; count?: number; color?: string }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    cx: 5 + Math.random() * 90,
    cy: 5 + Math.random() * 90,
    r: 0.6 + Math.random() * 1.4,
    dur: 3 + Math.random() * 4,
    delay: -Math.random() * 5,
    opacity: 0.3 + Math.random() * 0.5,
    key: i,
  }));
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" preserveAspectRatio="none" aria-hidden>
      {particles.map(p => (
        <circle key={p.key} cx={p.cx} cy={p.cy} r={p.r} fill={color} opacity={p.opacity}>
          <animate attributeName="opacity" values={`${p.opacity};0;${p.opacity}`} dur={`${p.dur}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${p.cy};${p.cy - 8};${p.cy}`} dur={`${p.dur * 1.5}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/** Animated bell with shake — for notification chips */
export function AnimatedBell({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g style={{ transformOrigin: '50% 20%' }}>
        <animateTransform attributeName="transform" type="rotate" values="0;-12;12;-8;8;0" dur="1.4s" repeatCount="indefinite" />
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </g>
    </svg>
  );
}

/** Animated counter ring — orbits primary color around a center value */
export function OrbitRing({ className = 'w-32 h-32', color = 'var(--primary)' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden>
      <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
      <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
      <circle cx="50" cy="10" r="2.5" fill={color}>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="20" r="1.5" fill="var(--secondary)">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** Typing wave — three dots that rise/fall like Tami is thinking */
export function TypingWave({ className = 'w-12 h-4', color = 'var(--primary)' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 16" fill={color} aria-hidden>
      {[8, 24, 40].map((cx, i) => (
        <circle key={i} cx={cx} cy="8" r="3.2">
          <animate attributeName="cy" values="8;3;8" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/** Wavy underline — animated handwritten-like underline that draws-in on viewport entry */
export function WavyUnderline({ className = 'w-full h-3', color = 'var(--primary)' }: { className?: string; color?: string }) {
  const { ref, inView } = useInView<SVGSVGElement>();
  return (
    <svg ref={ref} className={className} viewBox="0 0 200 10" fill="none" preserveAspectRatio="none" aria-hidden>
      <path
        d="M2 7 Q 25 2, 50 5 T 100 5 T 150 5 T 198 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        className={inView ? 'svg-draw-fast' : ''}
        style={{ strokeDashoffset: inView ? undefined : 500 }}
      />
    </svg>
  );
}
