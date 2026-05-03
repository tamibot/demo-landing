import type { CSSProperties } from 'react';

type LogoProps = { className?: string; style?: CSSProperties };

/* ──────────────────────────────────────────────────────────────────────── */
/* CRMs — branded, recognizable lockups in grayscale-friendly currentColor  */
/* ──────────────────────────────────────────────────────────────────────── */

export function HubSpotLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 132 30" className={className} aria-label="HubSpot">
      <g>
        <path d="M22.4 9.7V6.6a2.4 2.4 0 0 0 1.4-2.2v-.1A2.4 2.4 0 0 0 21.4 2h-.1a2.4 2.4 0 0 0-2.4 2.4v.1a2.4 2.4 0 0 0 1.4 2.2v3.1a6.8 6.8 0 0 0-3.3 1.5L8 5.1c.04-.2.06-.4.06-.6a2.7 2.7 0 1 0-2.7 2.7c.46 0 .9-.12 1.27-.32l7.95 6.2a6.8 6.8 0 0 0-1.15 3.8c0 1.47.47 2.83 1.26 3.94l-2.42 2.42a2.2 2.2 0 0 0-.64-.1 2.15 2.15 0 1 0 1.58.7l2.38-2.38a6.83 6.83 0 1 0 4.86-12.06zm-1.04 10.25a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" fill="currentColor"/>
      </g>
      <text x="34" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.02em" fill="currentColor">HubSpot</text>
    </svg>
  );
}

export function SalesforceLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 30" className={className} aria-label="Salesforce">
      <path d="M11.6 7.4a4.8 4.8 0 0 1 3.5-1.5c1.7 0 3.2.95 4 2.36a5.5 5.5 0 0 1 2.3-.5c2.95 0 5.36 2.45 5.36 5.5s-2.4 5.5-5.36 5.5c-.36 0-.72-.04-1.06-.1a4.05 4.05 0 0 1-3.55 2.1c-.6 0-1.18-.13-1.7-.4a4.7 4.7 0 0 1-4.4 2.93 4.7 4.7 0 0 1-4.4-2.97 4.4 4.4 0 0 1-.9.1A5.0 5.0 0 0 1 0 14.86c0-2.36 1.27-4.43 3.16-5.55a4.36 4.36 0 0 1 8 -1.18l.44-.18z" fill="currentColor"/>
      <text x="36" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.02em" fill="currentColor">Salesforce</text>
    </svg>
  );
}

export function ZohoLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 110 30" className={className} aria-label="Zoho">
      <text x="0" y="22" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.04em" fill="currentColor">Zoho</text>
      <rect x="55" y="22" width="50" height="3" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

export function Bitrix24Logo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 30" className={className} aria-label="Bitrix24">
      <text x="0" y="22" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em" fill="currentColor">
        Bitrix<tspan fontSize="14" dy="-4" fill="currentColor">24</tspan>
      </text>
    </svg>
  );
}

export function MicrosoftLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 132 28" className={className} aria-label="Microsoft Dynamics">
      <rect x="0" y="2" width="11" height="11" fill="currentColor" opacity="0.85"/>
      <rect x="13" y="2" width="11" height="11" fill="currentColor" opacity="0.55"/>
      <rect x="0" y="15" width="11" height="11" fill="currentColor" opacity="0.55"/>
      <rect x="13" y="15" width="11" height="11" fill="currentColor" opacity="0.85"/>
      <text x="32" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.01em" fill="currentColor">Dynamics 365</text>
    </svg>
  );
}

/* Peruvian / LATAM real-estate CRMs */
export function SperantLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 28" className={className} aria-label="Sperant">
      <text x="0" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.03em" fill="currentColor">Sperant</text>
      <circle cx="106" cy="13" r="3.2" fill="currentColor"/>
    </svg>
  );
}

export function EvoltaLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 110 28" className={className} aria-label="EVOLTA">
      <text x="0" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.06em" fill="currentColor">EVOLTA</text>
    </svg>
  );
}

export function TokkoLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 170 28" className={className} aria-label="Tokko Broker">
      <text x="0" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em" fill="currentColor">tokko</text>
      <text x="68" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="500" fontSize="18" letterSpacing="-0.01em" fill="currentColor">broker</text>
    </svg>
  );
}

export function PlanOKLogo({ className = 'h-6' }: LogoProps) {
  return (
    <svg viewBox="0 0 110 28" className={className} aria-label="PlanOK">
      <text x="0" y="20" fontFamily="ui-sans-serif, system-ui, Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.02em" fill="currentColor">
        Plan<tspan fill="currentColor" opacity="0.55">OK</tspan>
      </text>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* Channels (WhatsApp / Meta / Instagram / Messenger)                       */
/* ──────────────────────────────────────────────────────────────────────── */
export function WhatsAppGlyph({ className = 'h-5' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="WhatsApp">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
    </svg>
  );
}

export function InstagramGlyph({ className = 'h-5' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Instagram">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.56 2.91.3.79.7 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.29 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.29-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  );
}

export function MetaGlyph({ className = 'h-4' }: LogoProps) {
  return (
    <svg viewBox="0 0 36 24" className={className} fill="currentColor" aria-label="Meta">
      <path d="M9.7 2C5.7 2 2.6 5.5 2.6 11.7c0 5 2.3 8 5.6 8 2.3 0 4-1 6.4-5l1.4-2.4c.7-1.2 1.4-2.5 2.1-3.8.7 1.3 1.4 2.6 2.1 3.8l1.4 2.4c2.4 4 4.1 5 6.4 5 3.3 0 5.6-3 5.6-8C33.6 5.5 30.5 2 26.5 2c-2.4 0-4.5 1.5-6.5 5l-1 1.6L18 7c-2-3.5-4-5-6.5-5h-1.8z"/>
    </svg>
  );
}

export function MessengerGlyph({ className = 'h-5' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Messenger">
      <path d="M12 0C5.37 0 0 4.97 0 11.1c0 3.5 1.74 6.6 4.46 8.64V24l4.07-2.24c1.09.3 2.24.46 3.47.46 6.63 0 12-4.97 12-11.12C24 4.97 18.63 0 12 0zm1.2 14.96l-3.04-3.24-5.94 3.24 6.54-6.93 3.11 3.24 5.87-3.24-6.54 6.93z"/>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* Client logos — real Peruvian / LATAM real estate brands                  */
/* ──────────────────────────────────────────────────────────────────────── */
export function LiderClientLogo({ className = 'h-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 36" className={className} aria-label="Líder Grupo Constructor">
      <text x="0" y="26" fontFamily="'Bricolage Grotesque', ui-serif, Georgia, serif" fontWeight="900" fontSize="30" letterSpacing="-0.05em" fill="currentColor">líder</text>
      <text x="78" y="14" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.18em" fill="currentColor" opacity="0.55">GRUPO</text>
      <text x="78" y="26" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.10em" fill="currentColor" opacity="0.55">CONSTRUCTOR</text>
    </svg>
  );
}

export function CosapiClientLogo({ className = 'h-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 140 36" className={className} aria-label="Cosapi Inmobiliaria">
      <text x="0" y="22" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.02em" fill="currentColor">COSAPI</text>
      <rect x="0" y="26" width="86" height="2" fill="currentColor" opacity="0.5"/>
      <text x="0" y="34" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.18em" fill="currentColor" opacity="0.55">INMOBILIARIA</text>
    </svg>
  );
}

export function RemaxClientLogo({ className = 'h-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 140 32" className={className} aria-label="RE/MAX">
      <g>
        <rect x="0" y="4" width="9" height="20" fill="currentColor"/>
        <rect x="11" y="4" width="9" height="20" fill="currentColor" opacity="0.55"/>
        <rect x="22" y="4" width="9" height="20" fill="currentColor" opacity="0.30"/>
      </g>
      <text x="38" y="22" fontFamily="'Bricolage Grotesque', ui-serif, Georgia, serif" fontWeight="900" fontSize="22" letterSpacing="-0.04em" fill="currentColor">RE/MAX</text>
    </svg>
  );
}

export function GrupoTCLogo({ className = 'h-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" className={className} aria-label="Grupo T&C">
      <circle cx="14" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="6" y="22" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="900" fontSize="13" fill="currentColor">T&amp;C</text>
      <text x="34" y="22" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.02em" fill="currentColor">Grupo T&amp;C</text>
    </svg>
  );
}

export function LibreLogo({ className = 'h-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 100 32" className={className} aria-label="LIBRE">
      <text x="0" y="22" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.18em" fill="currentColor">LIBRE</text>
    </svg>
  );
}

export function LienLogo({ className = 'h-8' }: LogoProps) {
  return (
    <svg viewBox="0 0 100 32" className={className} aria-label="LIEN">
      <text x="0" y="22" fontFamily="'Bricolage Grotesque', ui-serif, Georgia, serif" fontWeight="900" fontSize="22" letterSpacing="-0.04em" fill="currentColor">LIEN</text>
      <circle cx="56" cy="14" r="3" fill="currentColor"/>
    </svg>
  );
}

export function GenericLogo({ name, accent, className = 'h-7' }: LogoProps & { name: string; accent?: string }) {
  return (
    <svg viewBox="0 0 180 32" className={className} aria-label={name}>
      <text x="0" y="22" fontFamily="'Bricolage Grotesque', ui-serif, Georgia, serif" fontWeight="800" fontSize="20" letterSpacing="-0.03em" fill="currentColor">{name}</text>
      {accent && <circle cx="170" cy="14" r="3" fill={accent} />}
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* Portales públicos                                                       */
/* ──────────────────────────────────────────────────────────────────────── */
export function UrbaniaPortalLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" className={className} aria-label="Urbania">
      <path d="M3 6 L3 22 C3 26 6 28 10 28 C14 28 17 26 17 22 L17 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <text x="22" y="24" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.04em" fill="currentColor">rbania</text>
      <circle cx="118" cy="22" r="3.2" fill="currentColor"/>
    </svg>
  );
}

export function AdondevivirPortalLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 180 32" className={className} aria-label="Adondevivir">
      <path d="M2 22 L11 8 L20 22 Z" fill="currentColor"/>
      <text x="26" y="24" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.03em" fill="currentColor">adondevivir</text>
    </svg>
  );
}

export function NexoPortalLogo({ className = 'h-7' }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" className={className} aria-label="Nexo Inmobiliario">
      <circle cx="14" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="14" cy="16" r="4" fill="currentColor"/>
      <text x="32" y="22" fontFamily="ui-sans-serif, Manrope, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.03em" fill="currentColor">nexo</text>
    </svg>
  );
}

/* aliases for back-compat */
export function HubspotIcon({ className = 'h-6' }: LogoProps) { return <HubSpotLogo className={className} />; }
