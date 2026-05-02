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
