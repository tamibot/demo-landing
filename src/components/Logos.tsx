import type { CSSProperties } from 'react';

// Real CRM SVG logos (simplified vector versions, generic enough to render)
// We use text-based elegant logos for Peruvian CRMs that don't have brand SVGs
// available in CDNs (Sperant, EVOLTA, TokkoBroker, PlanOK)

type LogoProps = { className?: string; style?: CSSProperties };

export function HubSpotLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="HubSpot">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.194v.067a2.196 2.196 0 0 0 1.252 1.973l.013.005V7.93A6.215 6.215 0 0 0 13.297 9.27L5.93 3.534a2.45 2.45 0 0 0 .054-.504v-.06A2.476 2.476 0 1 0 3.502 5.45c.42 0 .812-.106 1.156-.293l-.013.007 7.245 5.64a6.218 6.218 0 0 0-1.05 3.473c0 1.34.428 2.582 1.155 3.594l-.014-.02-2.205 2.206a2.014 2.014 0 0 0-.585-.094c-.563 0-1.07.235-1.43.612l-.001.001a1.969 1.969 0 1 0 1.439-.578c-.207 0-.404.034-.589.092l.013-.004 2.166-2.166a6.225 6.225 0 1 0 4.43-10.99l-.011-.001zm-.95 9.34a3.196 3.196 0 1 1-.001-6.388 3.196 3.196 0 0 1 0 6.388z"/>
    </svg>
  );
}

export function SalesforceLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Salesforce">
      <path d="M9.998 5.604a4.205 4.205 0 0 1 3.043-1.301c1.503 0 2.823.829 3.524 2.064.61-.273 1.286-.425 1.999-.425 2.726 0 4.937 2.231 4.937 4.984 0 2.752-2.21 4.983-4.937 4.983-.333 0-.658-.034-.973-.097a3.583 3.583 0 0 1-3.122 1.831 3.61 3.61 0 0 1-1.586-.36 4.122 4.122 0 0 1-3.83 2.535 4.122 4.122 0 0 1-3.846-2.594 3.808 3.808 0 0 1-.79.083C2.498 17.307 0 14.785 0 11.673c0-2.085 1.121-3.905 2.787-4.871a3.804 3.804 0 0 1 6.964-1.039l.247-.16Z"/>
    </svg>
  );
}

export function HubspotIcon({ className = 'h-6' }: LogoProps) {
  return <HubSpotLogo className={className} />;
}

// Microsoft (for Dynamics 365)
export function MicrosoftLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 23 23" className={className} aria-label="Microsoft">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
      <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
    </svg>
  );
}

export function ZohoLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Zoho">
      <path d="M19.94 6.25a4.42 4.42 0 0 0-3.86-2.42c-.92 0-1.79.27-2.5.74V0h-3.16v17.66h3.16v-.51c.7.47 1.58.74 2.5.74a4.42 4.42 0 0 0 3.86-2.42c.95-1.65.95-3.6 0-5.25-.45.78-.73 1.66-.73 2.62a3.05 3.05 0 1 1 .73-2.59z M3.16 19.16h17.5V24h-17.5z"/>
    </svg>
  );
}

export function Bitrix24Logo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 100 30" className={className} aria-label="Bitrix24">
      <text x="0" y="22" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" fill="currentColor">bitrix<tspan fontSize="14" dy="-3">24</tspan></text>
    </svg>
  );
}

// Peruvian CRMs with no brand SVG widely available — elegant text-based logos
export function SperantLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 28" className={className} aria-label="Sperant">
      <text x="0" y="20" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em" fill="currentColor">
        Sperant
      </text>
      <circle cx="103" cy="13" r="3" fill="currentColor" />
    </svg>
  );
}

export function EvoltaLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 110 28" className={className} aria-label="EVOLTA">
      <text x="0" y="20" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="0.05em" fill="currentColor">
        EVOLTA
      </text>
    </svg>
  );
}

export function TokkoLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 160 28" className={className} aria-label="Tokko Broker">
      <text x="0" y="20" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em" fill="currentColor">
        Tokko<tspan fontWeight="500" dx="3">broker</tspan>
      </text>
    </svg>
  );
}

export function PlanOKLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 110 28" className={className} aria-label="PlanOK">
      <text x="0" y="20" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em" fill="currentColor">
        Plan<tspan fill="#9333EA">OK</tspan>
      </text>
    </svg>
  );
}

// Client logos (real Peruvian/LATAM real estate)
export function LiderClientLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 120 32" className={className} aria-label="Líder Grupo Constructor">
      <text x="0" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.04em" fill="currentColor">
        líder
      </text>
      <text x="65" y="22" fontFamily="Manrope, sans-serif" fontWeight="500" fontSize="9" fill="currentColor" opacity="0.55">
        Grupo
      </text>
      <text x="65" y="30" fontFamily="Manrope, sans-serif" fontWeight="500" fontSize="9" fill="currentColor" opacity="0.55">
        Constructor
      </text>
    </svg>
  );
}

export function CosapiClientLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" className={className} aria-label="Cosapi Inmobiliaria">
      <text x="0" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.03em" fill="currentColor">
        COSAPI
      </text>
      <text x="0" y="32" fontFamily="Manrope, sans-serif" fontWeight="500" fontSize="9" letterSpacing="0.15em" fill="currentColor" opacity="0.55">
        INMOBILIARIA
      </text>
    </svg>
  );
}

export function RemaxClientLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 120 32" className={className} aria-label="RE/MAX">
      <rect x="0" y="6" width="22" height="20" fill="#DC2626" rx="2" />
      <text x="3" y="20" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11" fill="white" letterSpacing="-0.02em">RE</text>
      <text x="3" y="28" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="6" fill="white">/MAX</text>
      <text x="28" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="700" fontSize="20" fill="currentColor" letterSpacing="-0.04em">RE/MAX</text>
    </svg>
  );
}

export function GenericLogo({ name, accent, className = 'h-7' }: LogoProps & { name: string; accent?: string }) {
  return (
    <svg viewBox="0 0 160 32" className={className} aria-label={name}>
      <text x="0" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.03em" fill="currentColor">
        {name}
      </text>
      {accent && <circle cx="155" cy="14" r="3" fill={accent} />}
    </svg>
  );
}

// Sources / portales públicos
export function UrbaniaPortalLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" className={className} aria-label="Urbania">
      <text x="0" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.04em" fill="currentColor">
        urbania<tspan fontSize="22" fill="#9333EA">.</tspan>
      </text>
    </svg>
  );
}

export function AdondevivirPortalLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 170 32" className={className} aria-label="Adondevivir">
      <text x="0" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.03em" fill="currentColor">
        Adondevivir
      </text>
    </svg>
  );
}

export function NexoPortalLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" className={className} aria-label="Nexo Inmobiliario">
      <circle cx="13" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="13" cy="16" r="4" fill="currentColor" />
      <text x="32" y="22" fontFamily="Bricolage Grotesque, Manrope, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.03em" fill="currentColor">
        nexo
      </text>
    </svg>
  );
}
