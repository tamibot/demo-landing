import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, MessageCircle, ChevronRight, Calendar, Plus, Minus,
  Users, BarChart3, Zap, ShieldCheck, Globe, Inbox, UploadCloud, Wand2, Rocket,
  Megaphone, Hash, Bell, Star, ChevronDown, ChevronUp, Clock, FileText, Sparkles,
} from 'lucide-react';
import { CountUp } from './components/CountUp';
import {
  PhoneFrame, WhatsAppHeader, ChatArea, Bubble, TypingBubble, ChatInput,
  PdfAttachment, PropertyCard,
} from './components/PhoneMockup';
import { DashboardScreen } from './components/DashboardMockup';
import { TestimonialsGrid } from './components/Testimonials';
import { ParaInmobiliarias, ParaAgentes, DemoFreeBanner } from './components/PerfilSections';
import { AnimatedCheck, PulsingDot, StepsConnector, SocialFlowConnector, FloatingParticles, AnimatedBell, OrbitRing, TypingWave } from './components/SvgAnimations';
import {
  GrupoTCLogo, LibreLogo, LienLogo, GenericLogo,
  WhatsAppGlyph, InstagramGlyph, MetaGlyph, MessengerGlyph,
} from './components/Logos';

const ASSET = (p: string) => `${import.meta.env.BASE_URL}${p}`;
function BrandImg({ name, src, h = 'h-8', className = '', gray = false }: { name: string; src: string; h?: string; className?: string; gray?: boolean }) {
  const filterStyle = gray
    ? { filter: 'grayscale(1) brightness(0.65)', opacity: 0.7 }
    : { opacity: 0.75 };
  return (
    <img
      src={ASSET(`logos/brands/${src}`)}
      alt={name}
      className={`${h} w-auto hover:opacity-100 transition ${className}`}
      style={filterStyle}
      onMouseEnter={(e) => { (e.currentTarget.style.opacity = '1'); }}
      onMouseLeave={(e) => { (e.currentTarget.style.opacity = String(filterStyle.opacity || 0.75)); }}
      loading="lazy"
    />
  );
}

const APP_DEMO_URL = 'https://tamibot.github.io/demo-app/';
const WA_URL = 'https://wa.me/51995547575?text=Hola%20quiero%20mi%20demo%20gratuita%20de%202%20semanas';

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-init');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    els.forEach(el => obs.observe(el));
    const t = window.setTimeout(() => {
      document.querySelectorAll('.reveal-init:not(.reveal-show)').forEach(el => el.classList.add('reveal-show'));
    }, 2000);
    return () => { obs.disconnect(); window.clearTimeout(t); };
  }, []);

  return (
    <div className="bg-paper text-ink">
      <DemoBanner />
      <Nav />
      <Hero />
      <ClientsStrip />
      <Pain />
      <Beneficios />
      <Escenarios />
      <HowItWorks />
      <ParaInmobiliarias />
      <ParaAgentes />
      <Resultados />
      <PhoneGallery />
      <Testimonials />
      <CrmCloud />
      <Pricing />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function DemoBanner() {
  return (
    <div className="bg-primary-3 text-paper text-[11px] font-medium py-2.5 text-center px-4 z-50 relative">
      <span className="inline-flex items-center gap-2">
        <PulsingDot color="#A7F3D0" size={5} />
        <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-paper/70">Demo gratuita</span>
        <span>14 días sin tarjeta · sin compromiso · solo resultados.</span>
        <a href={APP_DEMO_URL} className="text-paper underline decoration-[var(--secondary)] underline-offset-4 decoration-2 font-bold inline-flex items-center gap-1 hover:opacity-90">
          Ver el portal en vivo <ArrowUpRight className="w-3 h-3" />
        </a>
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#para-inmobiliarias', label: 'Inmobiliarias' },
    { href: '#para-agentes', label: 'Agentes' },
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#integraciones', label: 'Integraciones' },
    { href: '#precios', label: 'Precios' },
    { href: '#faq', label: 'FAQ' },
  ];
  return (
    <nav className="sticky top-0 z-40 bg-paper/85 backdrop-blur-xl border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-1 group">
          <span className="text-[26px] font-black tracking-tight">tami</span>
          <span className="text-primary text-2xl font-black leading-none">.</span>
        </a>
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-muted">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-ink transition">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={APP_DEMO_URL} className="hidden sm:inline-flex text-[13px] font-medium text-muted hover:text-ink px-3 py-2">
            Iniciar sesión
          </a>
          <a href={APP_DEMO_URL} className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-2 text-white text-[13px] font-bold pl-4 pr-3 py-2 rounded-full transition shadow-cta group">
            Demo gratis 14 días
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md hover:bg-paper-2" aria-label="menu">
            {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-soft bg-paper">
          <div className="max-w-[1240px] mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-[14px] font-semibold text-ink-2 hover:bg-paper-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg grain border-b border-soft">
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="reveal-init">
            <div className="inline-flex items-center gap-2 bg-paper border border-soft rounded-full px-3 py-1.5 mb-7 shadow-card">
              <PulsingDot color="var(--secondary)" size={6} />
              <span className="text-[11px] font-semibold text-muted">Agente de ventas IA · para inmobiliarias y agentes</span>
            </div>

            <h1 className="text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[1.02] font-black tracking-tight mb-6">
              Una vendedora <span className="text-primary">con IA</span><br />
              que cierra <br />
              propiedades por ti.
            </h1>

            <p className="text-[18px] leading-relaxed text-muted max-w-[540px] mb-9">
              <span className="text-primary font-bold">→</span> Conectas WhatsApp, Instagram y portales (Urbania, Adondevivir, Nexo). Tami responde en 15 segundos, califica al lead, agenda la visita y deriva al asesor — <strong className="text-ink">24/7, sin contratar a nadie</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a href={APP_DEMO_URL} className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-2 text-white px-7 py-4 rounded-full font-bold text-[14px] transition shadow-cta">
                Activar a Tami · 14 días gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href={APP_DEMO_URL} className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-[14px] text-ink border border-soft hover:border-primary-line hover:bg-primary-soft/40 transition">
                Ver demo en vivo <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={0} /> 14 días gratis
              </span>
              <span className="text-muted-2">·</span>
              <span className="inline-flex items-center gap-1.5">
                <AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={150} /> Cancelas en un click
              </span>
              <span className="text-muted-2">·</span>
              <span className="inline-flex items-center gap-1.5">
                <AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={300} /> Sin contratos largos
              </span>
            </div>
          </div>

          <div className="relative reveal-init">
            <PhoneFrame className="w-[280px] sm:w-[310px] mx-auto">
              <div className="flex flex-col h-full">
                <WhatsAppHeader contactName="Tami · Ventas" status="escribiendo…" avatar="🤖" />
                <ChatArea>
                  <Bubble side="left" delay={200} time="10:41">
                    Hola, busco depa de 3 dorms en Surco, hasta US$ 90k 🏠
                  </Bubble>
                  <Bubble side="right" delay={900} time="10:41">
                    ¡Hola! 👋 Soy Tami, tu asistente. Tengo el match perfecto:
                  </Bubble>
                  <Bubble side="right" delay={1700} time="10:42">
                    <PropertyCard
                      project="Vista del Mar"
                      district="Surco"
                      area="3D · 78 m²"
                      price="US$ 89,500"
                      badge="Pre-venta"
                    />
                    <PdfAttachment name="Brochure_proyecto.pdf" size="2.8 MB" />
                  </Bubble>
                  <Bubble side="left" delay={2700} time="10:43">
                    Me interesa. ¿Visita el sábado?
                  </Bubble>
                  <TypingBubble delay={3600} />
                  <Bubble side="right" delay={4500} time="10:43">
                    ✅ Visita confirmada <strong>Sáb 10:00 am</strong>.<br />
                    Te conecto con un asesor para coordinar.
                  </Bubble>
                </ChatArea>
                <ChatInput />
              </div>
            </PhoneFrame>

            <div className="hidden md:flex absolute -left-8 top-20 bg-paper border border-soft rounded-2xl px-4 py-3 shadow-mega items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-2 font-bold">Responde en</div>
                <div className="text-base font-black leading-none">15 segundos</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 bottom-24 bg-paper border border-soft rounded-2xl px-4 py-3 shadow-mega items-center gap-3 animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-secondary-soft text-secondary-2 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-2 font-bold">Productividad</div>
                <div className="text-base font-black leading-none">×4 vs humano</div>
              </div>
            </div>

            <svg className="hidden md:block absolute -top-6 right-12 w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="var(--primary)" className="svg-pulse" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function ClientsStrip() {
  // Only real, branded logos — uniform height, all grayscale
  const clients = [
    { name: 'Líder Grupo Constructor', src: 'lider.png', h: 'h-9' },
    { name: 'COSAPI Inmobiliaria', src: 'cosapi.png', h: 'h-9' },
    { name: 'RE/MAX', src: 'remax.svg', h: 'h-8', gray: true },
    { name: 'Sperant', src: 'sperant.png', h: 'h-8' },
    { name: 'Tokko Broker', src: 'tokko.png', h: 'h-8' },
    { name: 'Evolta', src: 'evolta.png', h: 'h-8' },
    { name: 'PlanOK', src: 'planok.png', h: 'h-8' },
  ];
  return (
    <section className="py-14 bg-paper border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-10">
          Inmobiliarias, agencias y CRMs que confían en Tami
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 lg:gap-24 animate-marquee items-center">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <div key={i} className="shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
                <BrandImg name={c.name} src={c.src} h={c.h} gray={c.gray} />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { v: 2.6, suffix: 'M', d: 'leads atendidos en LATAM', decimals: 1 },
    { v: 40, suffix: '%', d: 'tasa de interacción real', prefix: '', decimals: 0 },
    { v: 20, suffix: '%', d: 'aumento en citas agendadas', prefix: '+', decimals: 0 },
    { v: 10, suffix: 'x', d: 'capacidad de atención', decimals: 0 },
  ];
  return (
    <section className="py-20 bg-paper-2 border-b border-soft relative overflow-hidden">
      <OrbitRing className="absolute -top-20 -right-20 w-72 h-72 opacity-30 hidden md:block" color="var(--primary)" />
      <OrbitRing className="absolute -bottom-20 -left-20 w-60 h-60 opacity-25 hidden md:block" color="var(--secondary)" />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="reveal-init text-center md:text-left" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-6xl lg:text-[5rem] font-black tracking-tight leading-none mb-3 text-primary">
                <CountUp end={s.v} decimals={s.decimals} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="text-[13px] text-muted leading-snug max-w-[180px] md:max-w-none mx-auto md:mx-0">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Pain() {
  const points = [
    { stat: '70%', label: 'de leads se enfría', desc: 'Si no respondes el primer mensaje en 5 minutos, la probabilidad de cierre cae 70%. Tus asesores no pueden con todo.' },
    { stat: '$1.2k', label: 'gastas por asesor', desc: 'Y solo trabaja 8 horas. No atiende noches, fines de semana ni feriados — justo cuando tu lead de Meta Ads escribe.' },
    { stat: '0', label: 'leads cerrados a las 11pm', desc: 'Tu cliente vio el ad de Urbania, te escribió un domingo. Si respondes el lunes, ya separó con la competencia.' },
  ];
  return (
    <section className="py-24 lg:py-28 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 reveal-init">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary-2 mb-4">El problema real</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05]">
            Cada lead sin responder<br />es una propiedad <span className="underline-curve">vendida por la competencia</span>.
          </h2>
          <p className="text-[16px] text-muted leading-relaxed mt-5 max-w-[640px]">
            Inviertes miles de soles en Meta Ads, pagas portales, contratas asesores. Y aún así pierdes el 70% de los leads en las primeras horas porque nadie contesta a tiempo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div key={i} className="bg-paper rounded-3xl border border-soft p-7 reveal-init" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-5xl font-black text-primary tracking-tight">{p.stat}</span>
                <span className="text-[13px] font-bold text-ink-2">{p.label}</span>
              </div>
              <p className="text-[14px] text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Beneficios() {
  const items = [
    { icon: Zap, title: 'Respuesta en 15 segundos', desc: 'Cero leads perdidos por no responder a tiempo. Tami atiende día y noche, fines de semana incluidos.', tag: 'Velocidad' },
    { icon: Hash, title: 'Conectada a portales y redes', desc: 'Urbania, Adondevivir, Nexo, WhatsApp, Instagram, Meta Ads. Toda la conversación en un solo lugar.', tag: 'Omnicanal' },
    { icon: Users, title: 'Calificación inteligente', desc: 'Pregunta presupuesto, zona, crédito y plazo. Marca verde / blanco automáticamente y filtra ruido.', tag: 'Filtro' },
    { icon: Calendar, title: 'Agenda y recordatorios', desc: 'Sync con Google Calendar. Recordatorios 24h y 2h antes en WhatsApp. Reduce no-show ~30%.', tag: 'Visitas' },
    { icon: BarChart3, title: 'Embudo en vivo', desc: 'Volumen, tasa de cierre, costo por lead, conversión por canal y por asesor. Atribución real.', tag: 'Reporte' },
    { icon: ShieldCheck, title: 'Distribución equitativa', desc: 'Round-robin con balance de carga, por zona o por proyecto. Tu gerente entra al chat y cierra en vivo.', tag: 'Equipo' },
  ];
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Beneficios</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Lo que cambia <span className="text-primary">desde el día 1</span>.
          </h2>
          <p className="text-[16px] text-muted leading-relaxed reveal-init mt-4">
            Sin contratar más asesores, sin migrar tu CRM. Solo enchufas y empieza a vender.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="reveal-init bg-paper border border-soft rounded-3xl p-7 shadow-card hover:shadow-mega hover:-translate-y-0.5 transition" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-primary-soft text-primary-2 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-2 bg-paper-2 px-2 py-1 rounded">{it.tag}</span>
                </div>
                <h3 className="text-lg font-black mb-2 leading-snug">{it.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: '01',
      icon: UploadCloud,
      title: 'Comparte tu información',
      desc: 'Súbenos PDFs, brochures de tus proyectos, link de tu web o tu Excel. Conectamos directo a portales (Urbania, Adondevivir, Nexo) y a tu CRM (Sperant, Tokko, Evolta). Tami estructura tu inventario en minutos.',
      bullets: ['PDF brochures', 'Web', 'Excel', 'Urbania', 'Adondevivir', 'Nexo', 'Sperant', 'Tokko'],
    },
    {
      n: '02',
      icon: Wand2,
      title: 'Entrenamos a Tami',
      desc: 'Configuramos el tono, las preguntas de calificación, las reglas de descuento y la estrategia de cierre. Tami habla con la voz de tu marca, no como un bot genérico.',
      bullets: ['Tono', 'Reglas', 'Templates', 'Calificación'],
    },
    {
      n: '03',
      icon: Rocket,
      title: 'Conectamos y despegamos',
      desc: 'Activamos WhatsApp Business API, conectamos tus redes, portales y CRM. Tami atiende leads reales desde el día 1 — tu equipo solo recibe los calientes.',
      bullets: ['WhatsApp', 'Meta Ads', 'Instagram', 'Portales', 'CRM'],
    },
  ];

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-paper relative">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary-2 rounded-full px-3 py-1.5 mb-5 reveal-init">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Onboarding express · 48 horas</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init mb-5">
            En 48h tienes tu vendedora con IA <span className="text-primary">operando</span>.
          </h2>
          <p className="text-[16px] text-muted leading-relaxed reveal-init">
            No instalas nada, no migras nada. Conectamos lo que ya usas y Tami empieza a vender.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-5 relative">
          <StepsConnector />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative bg-paper border border-soft rounded-3xl p-7 lg:p-8 shadow-card hover:shadow-mega hover:-translate-y-0.5 transition reveal-init" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-cta">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[40px] font-black text-primary-soft leading-none select-none">{s.n}</span>
                </div>
                <h3 className="text-xl font-black mb-3">{s.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.bullets.map((b, bi) => (
                    <span key={bi} className="text-[10px] font-bold uppercase tracking-wider bg-primary-soft text-primary-2 px-2 py-1 rounded">{b}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal-init">
          <a href={APP_DEMO_URL} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-2 text-white px-7 py-4 rounded-full font-bold text-[14px] transition shadow-cta group">
            Comenzar mi onboarding gratis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <p className="text-[12px] text-muted-2 mt-3">Activación en 48h · 14 días gratis · sin tarjeta</p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FeatureBlock({
  eyebrow, title, description, bullets, image, reverse = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  image: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal-init`}>
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-4 inline-flex items-center gap-2">
          <span className="w-5 h-px bg-primary" /> {eyebrow}
        </div>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-black tracking-tight leading-[1.05] mb-5">
          {title}
        </h2>
        <p className="text-[16px] leading-relaxed text-muted mb-7 max-w-[480px]">
          {description}
        </p>
        {bullets && (
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px]">
                <AnimatedCheck className="w-4 h-4 shrink-0 mt-1" color="var(--primary)" delay={i * 100} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        {image}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FeatureCapture() {
  return (
    <section id="producto" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">El producto en detalle</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Todo lo que necesita un equipo de ventas <span className="text-primary">moderno</span>.
          </h2>
        </div>

        <FeatureBlock
          eyebrow="01 — Bandeja omnicanal"
          title="Todos tus canales en una pantalla."
          description="WhatsApp, Instagram, Meta Ads y portales (Urbania, Adondevivir, Nexo) integrados al 100%. Visualiza de dónde viene cada lead con etiquetas automáticas."
          bullets={[
            'WhatsApp Business Cloud API',
            'Sync con Urbania, Adondevivir, Nexo',
            'Etiquetas automáticas de origen',
            'Sin cambiar de pestaña',
          ]}
          image={<InboxMockup />}
        />
      </div>
    </section>
  );
}

function InboxMockup() {
  const rows = [
    { name: 'Familia González', src: 'Facebook Ads', proj: 'Vista del Mar · Surco', time: '10:42', active: true, color: 'bg-blue-500', initials: 'FG' },
    { name: 'Andrea Pérez', src: 'Urbania', proj: 'Aurora · Lima Centro', time: '09:15', color: 'bg-emerald-500', initials: 'AP' },
    { name: 'Inversiones del Sur', src: 'Instagram', proj: 'Lomas Verdes · Ate', time: 'Ayer', color: 'bg-pink-500', initials: 'IS' },
    { name: 'Carlos Inversor', src: 'Web propia', proj: 'Edificio Premium', time: '11:05', color: 'bg-amber-500', initials: 'CI', badge: 'Alta' },
    { name: 'Jenny Castro', src: 'Adondevivir', proj: 'Condominio Norte', time: '08:20', color: 'bg-indigo-500', initials: 'JC' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-3xl overflow-hidden shadow-mega relative">
      <div className="bg-paper-2 px-4 py-3 flex items-center gap-2 border-b border-soft">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 max-w-xs mx-auto bg-paper rounded-md py-1 flex items-center justify-center gap-1.5 text-[10px] font-medium text-muted-2">
          <Globe className="w-3 h-3" /> app.tamibot.com / inbox
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-between border-b border-soft">
        <div className="flex items-center gap-2">
          <Inbox className="w-4 h-4 text-primary" />
          <span className="text-[13px] font-bold">Bandeja omnicanal</span>
        </div>
        <span className="text-[11px] text-emerald-700 font-bold inline-flex items-center gap-1">
          <PulsingDot color="#10B981" size={6} />
          Tami atendiendo
        </span>
      </div>
      <div className="divide-y divide-soft">
        {rows.map((r, i) => (
          <div key={i} className={`px-5 py-4 flex items-center gap-3 ${r.active ? 'bg-primary-soft/40' : 'hover:bg-paper-2'} transition cursor-pointer`}>
            <div className={`w-9 h-9 rounded-full ${r.color} text-white text-[11px] font-black flex items-center justify-center shrink-0`}>
              {r.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-bold truncate">{r.name}</span>
                <span className="text-[10px] text-muted-2 ml-2 shrink-0">{r.time}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-paper border border-soft text-muted px-2 py-0.5 rounded">{r.src}</span>
                <span className="text-[11px] text-muted-2 truncate">{r.proj}</span>
                {r.badge && <span className="text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded ml-auto">{r.badge}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FeatureQualify() {
  return (
    <section className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <FeatureBlock
          eyebrow="02 — Calificación inteligente"
          title="Distingue lo caliente de lo curioso."
          description="Tami pregunta presupuesto, zona, tipo y crédito. Marca verde o blanco automáticamente, filtra basura y solo deriva al asesor lo que vale su tiempo."
          bullets={[
            'Verde / blanco automático con scoring',
            'Inversión vs vivienda detectado',
            'Crédito Mivivienda o tradicional',
            'Embudo en vivo con atribución por canal',
          ]}
          image={<DashboardScreen />}
          reverse
        />
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FeatureSchedule() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <FeatureBlock
          eyebrow="03 — Agendamiento automático"
          title="Visitas que sí se concretan."
          description="Tami consulta el calendario de tu asesor, propone tres slots, confirma con el lead y dispara recordatorios automáticos. Caída de visitas reducida hasta 30%."
          bullets={[
            'Sync con Google Calendar y GHL',
            'Recordatorios 24h y 2h antes (WhatsApp template)',
            'Confirmación bidireccional',
            'Post-visita: bot pide feedback al lead',
          ]}
          image={<CalendarMockup />}
        />
      </div>
    </section>
  );
}

function CalendarMockup() {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const events = [
    { day: 1, hour: '10am', client: 'Familia González', proj: 'Vista del Mar', advisor: 'Alejandro G.' },
    { day: 2, hour: '4pm', client: 'Andrea Pérez', proj: 'Aurora', advisor: 'María C.' },
    { day: 4, hour: '11am', client: 'Inversiones del Sur', proj: 'Lomas Verdes', advisor: 'Carlos V.' },
    { day: 5, hour: '10am', client: 'Jenny Castro', proj: 'Cond. Norte', advisor: 'Lucía M.' },
    { day: 5, hour: '5pm', client: 'Diego Pérez', proj: 'Club Lomas', advisor: 'Roberto S.' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-3xl overflow-hidden shadow-mega">
      <div className="bg-paper-2 px-5 py-4 flex items-center justify-between border-b border-soft">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-[13px] font-bold">Agenda semanal · 5 asesores</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-2">Esta semana</span>
      </div>
      <div className="grid grid-cols-7 border-b border-soft text-[10px] font-bold uppercase tracking-widest text-muted-2">
        {days.map((d, i) => (
          <div key={i} className={`px-3 py-3 text-center ${i === 0 ? '' : 'border-l border-soft'}`}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 min-h-[280px]">
        {days.map((_, dayIdx) => (
          <div key={dayIdx} className={`p-2 space-y-2 ${dayIdx === 0 ? '' : 'border-l border-soft'}`}>
            {events.filter(e => e.day === dayIdx).map((e, ei) => (
              <div key={ei} className="bg-primary-soft border border-primary-line rounded-lg p-2.5">
                <div className="text-[10px] font-bold text-primary-2">{e.hour}</div>
                <div className="text-[11px] font-bold mt-0.5 leading-tight">{e.client}</div>
                <div className="text-[9px] text-muted-2 mt-0.5">{e.proj}</div>
                <div className="text-[9px] text-muted mt-1.5 pt-1.5 border-t border-primary-line/60">👤 {e.advisor}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-paper-2 px-5 py-3 border-t border-soft flex items-center justify-between text-[11px] text-muted">
        <span>5 visitas agendadas esta semana</span>
        <span className="text-primary font-bold">→ 2 nuevas hoy</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FeatureDistribute() {
  return (
    <section className="py-24 lg:py-32 bg-paper-3 border-y border-primary-line/60 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-soft rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-soft rounded-full blur-3xl opacity-50" />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        <FeatureBlock
          eyebrow="04 — Distribución equitativa"
          title="Reparte leads sin pelear."
          description="Round-robin, por zona, por carga del asesor o por proyecto. Tu gerente comercial entra al chat con badge GERENTE en alta intención y cierra en vivo con el cliente."
          bullets={[
            'Round-robin · por zona · por carga · por proyecto',
            'Supervisor en vivo con badge GERENTE',
            'Menú de Cierre Mágico (descuento, link de pago)',
            'Sync bidireccional con Sperant, Tokko, Evolta',
          ]}
          image={<DistributionMockup />}
          reverse
        />
      </div>
    </section>
  );
}

function DistributionMockup() {
  const advisors = [
    { name: 'María Castillo', zones: 'Lima Centro', leads: 12, color: 'bg-emerald-500' },
    { name: 'Carlos Vega', zones: 'Lima Este', leads: 8, color: 'bg-blue-500' },
    { name: 'Lucía Mendoza', zones: 'Lima Norte', leads: 15, color: 'bg-violet-500' },
    { name: 'Alejandro G.', zones: 'Barranco', leads: 6, color: 'bg-rose-500' },
    { name: 'Roberto Salas', zones: 'Lima Sur', leads: 9, color: 'bg-amber-500' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-3xl p-6 lg:p-7 relative overflow-hidden shadow-mega">
      <div className="text-[10px] font-bold uppercase tracking-widest text-primary-2 mb-1">Reglas activas</div>
      <div className="text-[13px] text-muted mb-6 max-w-[380px]">
        Round-robin con balance de carga + filtro por zona del lead.
      </div>

      <div className="space-y-2.5">
        {advisors.map((a, i) => {
          const max = 15;
          return (
            <div key={i} className="bg-paper-2 rounded-xl border border-soft p-3 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${a.color} text-white text-[11px] font-black flex items-center justify-center shrink-0`}>
                {a.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-bold leading-tight">{a.name}</div>
                <div className="text-[10px] text-muted-2 leading-tight mt-0.5">{a.zones}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-[10px] font-bold text-primary-2 tabular-nums">{a.leads} activos</div>
                <div className="w-20 h-1.5 bg-soft rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${(a.leads / max) * 100}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between text-[11px] pt-4 border-t border-soft">
        <span className="text-muted-2">50 leads distribuidos hoy</span>
        <span className="text-primary-2 font-bold inline-flex items-center gap-1.5">
          <PulsingDot color="var(--primary)" size={6} />
          Reasignación automática
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Escenarios() {
  return (
    <section id="escenarios" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Cuatro escenarios</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Donde tú pierdes leads,<br />Tami los <span className="text-primary">cierra</span>.
          </h2>
          <p className="text-[15px] text-muted mt-4 reveal-init">
            Cada DM, cada comentario, cada lead de portal y cada mensaje de noche. Tami los maneja todos en 15 segundos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* 1. Lead de Meta Ads */}
          <ScenarioCard
            badge="Meta Ads · Facebook"
            badgeColor="bg-blue-50 text-blue-700"
            title="Lead llega del ad de Facebook"
            desc="Andrea hace clic en tu ad de pre-venta. Tami responde por WhatsApp en 15 segundos, le envía el brochure y agenda la visita."
            mockup={
              <PhoneFrame className="w-[210px] mx-auto">
                <div className="flex flex-col h-full">
                  <WhatsAppHeader contactName="Tami · Ventas" />
                  <ChatArea>
                    <Bubble side="left" delay={100} time="9:14">Vi el ad del proyecto en preventa</Bubble>
                    <Bubble side="right" delay={500} time="9:14">¡Hola Andrea! 👋 Te paso el brochure 👇</Bubble>
                    <Bubble side="right" delay={1100} time="9:14"><PdfAttachment name="Vista_del_Mar.pdf" size="2.8 MB" /></Bubble>
                    <Bubble side="left" delay={1900} time="9:15">Me interesa, ¿visita el sábado?</Bubble>
                    <Bubble side="right" delay={2700} time="9:15">✅ Sáb 10am confirmada</Bubble>
                  </ChatArea>
                </div>
              </PhoneFrame>
            }
          />

          {/* 2. Comentario en IG → DM */}
          <ScenarioCard
            badge="Instagram · Comentario"
            badgeColor="bg-pink-50 text-pink-700"
            title='Alguien comenta "INFO" en tu post'
            desc="Tami detecta la palabra clave y le envía un DM automático con el catálogo, el precio y el botón de agendar visita."
            mockup={<InstagramSnippet />}
          />

          {/* 3. Lead de portal */}
          <ScenarioCard
            badge="Urbania · Adondevivir · Nexo"
            badgeColor="bg-emerald-50 text-emerald-700"
            title="Lead nuevo desde un portal inmobiliario"
            desc="Tami recibe el webhook, califica al lead en 4 preguntas (presupuesto, zona, crédito, urgencia) y lo deriva al asesor con badge verde."
            mockup={<PortalFlowSnippet />}
          />

          {/* 4. Mensaje a las 11pm */}
          <ScenarioCard
            badge="WhatsApp · 11:43 pm"
            badgeColor="bg-violet-50 text-violet-700"
            title="Cliente escribe un domingo a las 11pm"
            desc="Tu equipo está dormido. Tami no. Responde, califica, y deja la cita lista para que el lunes tu asesor solo cierre."
            mockup={
              <PhoneFrame className="w-[210px] mx-auto">
                <div className="flex flex-col h-full">
                  <WhatsAppHeader contactName="Tami · 24/7" status="en línea" />
                  <ChatArea>
                    <Bubble side="left" delay={100} time="23:43">¿Aún tienen el depa de Surco?</Bubble>
                    <Bubble side="right" delay={500} time="23:43">¡Hola! Sí 🏠 ¿Para vivir o invertir?</Bubble>
                    <Bubble side="left" delay={1100} time="23:44">Vivir, con mi pareja</Bubble>
                    <Bubble side="right" delay={1900} time="23:44">Te muestro 3 opciones desde US$ 89,500 ✨</Bubble>
                    <Bubble side="right" delay={2700} time="23:45">¿Visita el martes 6pm?</Bubble>
                  </ChatArea>
                </div>
              </PhoneFrame>
            }
          />
        </div>
      </div>
    </section>
  );
}

function ScenarioCard({ badge, badgeColor, title, desc, mockup }: { badge: string; badgeColor: string; title: string; desc: string; mockup: React.ReactNode }) {
  return (
    <div className="reveal-init bg-paper-2 rounded-3xl border border-soft p-7 lg:p-8 hover:shadow-mega transition">
      <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${badgeColor} mb-4`}>
            <PulsingDot color="currentColor" size={5} /> {badge}
          </span>
          <h3 className="text-[20px] font-black tracking-tight leading-[1.15] mb-3">{title}</h3>
          <p className="text-[14px] text-muted leading-relaxed">{desc}</p>
        </div>
        <div className="shrink-0 max-w-[210px] mx-auto sm:mx-0">{mockup}</div>
      </div>
    </div>
  );
}

function InstagramSnippet() {
  return (
    <div className="bg-paper rounded-2xl border border-soft overflow-hidden shadow-card w-[220px]">
      <div className="px-3 py-2 flex items-center gap-2 border-b border-soft">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 p-[2px]">
          <div className="w-full h-full rounded-full bg-paper flex items-center justify-center text-[10px] font-bold">L</div>
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-bold leading-tight">lider.constructor</div>
          <div className="text-[8px] text-muted-2">Patrocinado</div>
        </div>
        <InstagramGlyph className="w-3.5 h-3.5 text-pink-600" />
      </div>
      <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 via-pink-200 to-amber-100 flex items-center justify-center text-3xl">🏢</div>
      <div className="px-3 py-2 space-y-1.5">
        <div className="text-[10px] leading-snug"><strong>Pre-venta Vista del Mar</strong>. Comenta <strong className="text-primary">INFO</strong> y te enviamos el brochure 📩</div>
        <div className="border-t border-soft pt-1.5 mt-2 space-y-1">
          {[{u:'andrea_p21', t:'INFO 🙌'}, {u:'jcastro.lima', t:'INFO'}].map((c,i) => (
            <div key={i} className="text-[9px] flex items-center gap-1.5">
              <strong>{c.u}</strong> <span className="text-muted">{c.t}</span>
              <span className="ml-auto text-[7px] font-bold text-primary bg-primary-soft px-1 rounded">→ Tami</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortalFlowSnippet() {
  return (
    <div className="bg-paper rounded-2xl border border-soft p-3 shadow-card w-[220px] space-y-2">
      <div className="bg-paper-2 rounded-xl p-2.5 border border-soft">
        <div className="flex items-center gap-1.5 mb-1.5">
          <BrandImg name="Urbania" src="urbania.png" h="h-4" />
        </div>
        <div className="text-[10px] font-bold">Andrea P. → "Aurora · Lima Centro"</div>
        <div className="text-[8px] text-emerald-700 font-bold mt-1 inline-flex items-center gap-1"><Bell className="w-2.5 h-2.5" /> Webhook recibido</div>
      </div>
      <div className="flex justify-center text-primary"><ArrowRight className="w-4 h-4 rotate-90" /></div>
      <div className="bg-primary-soft border border-primary-line rounded-xl p-2.5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-5 h-5 rounded bg-primary text-white text-[8px] font-black flex items-center justify-center">T</div>
          <span className="text-[10px] font-bold text-primary-2">Tami califica · 15s</span>
        </div>
        <div className="text-[10px] leading-snug">"¿Buscas vivienda o inversión? ¿Crédito o contado?"</div>
      </div>
      <div className="flex justify-center text-primary"><ArrowRight className="w-4 h-4 rotate-90" /></div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[8px] font-black flex items-center justify-center">MC</div>
          <span className="text-[10px] font-bold">María Castillo</span>
          <span className="ml-auto text-[8px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">VERDE</span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Resultados() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="reveal-init">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Resultados</div>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] mb-5">
              Lo que pasa cuando<br />Tami toma <span className="text-primary">tu WhatsApp</span>.
            </h2>
            <p className="text-[16px] text-muted leading-relaxed mb-8 max-w-[480px]">
              Cada lunes ves cuánto vendió Tami mientras dormías. Cuántos leads atendió, cuántas visitas agendó, cuánto separaron tus asesores. Atribución por canal y por persona — sin Excel.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Volumen separado por proyecto',
                'Tasa de cierre por asesor',
                'Costo por lead por canal (Meta, IG, Urbania, web)',
                'Embudo en vivo · sin esperar fin de mes',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px]">
                  <AnimatedCheck className="w-4 h-4 shrink-0 mt-1" color="var(--primary)" delay={i * 100} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href={APP_DEMO_URL} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-2 text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition shadow-cta">
              Ver el dashboard en vivo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="reveal-init">
            <DashboardScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function SocialAutomation() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal-init">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-4 inline-flex items-center gap-2">
              <span className="w-5 h-px bg-primary" /> 05 — Automatización social
            </div>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-black tracking-tight leading-[1.05] mb-5">
              Tu Instagram también <span className="text-primary">vende</span>.
            </h2>
            <p className="text-[16px] leading-relaxed text-muted mb-7 max-w-[480px]">
              Cuando alguien comenta una palabra clave en tu post (<em className="not-italic font-semibold text-ink">"info"</em>, <em className="not-italic font-semibold text-ink">"precio"</em>, <em className="not-italic font-semibold text-ink">"brochure"</em>), Tami responde por DM al instante con catálogo, brochure y agenda de visita. Sin que mires el celular.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Comentario público → respuesta privada por DM',
                'Reacciones a Stories disparan conversación',
                'Mensaje desde Meta Ads entra a la misma bandeja',
                'Captación 24/7 sin community manager',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px]">
                  <AnimatedCheck className="w-4 h-4 shrink-0 mt-1" color="var(--primary)" delay={i * 100} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/instagram.svg`} alt="Instagram" className="w-5 h-5" /></div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/meta.svg`} alt="Meta" className="w-6 h-6" /></div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/whatsapp.svg`} alt="WhatsApp" className="w-5 h-5" /></div>
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/messenger.svg`} alt="Messenger" className="w-5 h-5" /></div>
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/tiktok.svg`} alt="TikTok" className="w-5 h-5" /></div>
            </div>
          </div>

          <div className="reveal-init">
            <InstagramAutomationMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramAutomationMockup() {
  return (
    <div className="relative grid grid-cols-[1.05fr_1fr] gap-4 items-start">
      {/* Animated SVG flow connecting IG post → WhatsApp DM */}
      <div className="hidden lg:block absolute left-[52%] top-[32%] w-[12%] h-20 -translate-x-1/2 pointer-events-none z-10">
        <SocialFlowConnector className="w-full h-full" />
      </div>
      {/* Left: Instagram post */}
      <div className="bg-paper border border-soft rounded-3xl overflow-hidden shadow-mega">
        <div className="px-4 py-3 flex items-center gap-2.5 border-b border-soft">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 p-[2px]">
            <div className="w-full h-full rounded-full bg-paper flex items-center justify-center text-xs font-bold">L</div>
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-bold leading-tight">lider.constructor</div>
            <div className="text-[10px] text-muted-2">Lima · Patrocinado</div>
          </div>
          <InstagramGlyph className="w-4 h-4 text-pink-600" />
        </div>
        <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-amber-100 flex items-center justify-center text-5xl">🏢</div>
        <div className="px-4 py-3 space-y-1.5">
          <div className="text-[12px] leading-snug"><strong>lider.constructor</strong> Pre-venta Vista del Mar · 3D 78m² desde US$ 89,500. Comenta <strong className="text-primary">"INFO"</strong> y te enviamos el brochure 📩</div>
          <div className="border-t border-soft mt-3 pt-2.5 space-y-2">
            {[
              { user: 'andrea_p21', text: 'INFO 🙌' },
              { user: 'jcastro.lima', text: 'precio' },
              { user: 'familia.gv', text: '¿brochure?' },
            ].map((c, i) => (
              <div key={i} className="text-[11px]">
                <strong>{c.user}</strong> <span className="text-muted">{c.text}</span>
                <span className="text-[9px] font-bold text-primary ml-2 bg-primary-soft px-1.5 py-0.5 rounded">disparado a Tami →</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: WhatsApp DM response */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-2 mb-2 text-center">Respuesta automática · DM</div>
        <PhoneFrame className="w-full max-w-[230px] mx-auto">
          <div className="flex flex-col h-full">
            <WhatsAppHeader contactName="Tami · IG DM" status="responde 24/7" avatar="🤖" />
            <ChatArea>
              <Bubble side="left" delay={100} time="9:42">INFO</Bubble>
              <Bubble side="right" delay={600} time="9:42">¡Hola Andrea! 👋 Soy Tami, asistente de Líder.</Bubble>
              <Bubble side="right" delay={1200} time="9:42">
                Te paso el brochure de Vista del Mar 👇
                <PdfAttachment name="VistaDelMar_brochure.pdf" size="2.8 MB" />
              </Bubble>
              <Bubble side="right" delay={2000} time="9:43">
                ¿Quieres que te agende una visita esta semana?
              </Bubble>
              <Bubble side="left" delay={2800} time="9:43">Sí, sábado 10am</Bubble>
              <Bubble side="right" delay={3600} time="9:43">✅ Visita confirmada Sáb 10:00 am</Bubble>
            </ChatArea>
            <ChatInput />
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function PortalAutomation() {
  return (
    <section className="py-20 lg:py-24 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Leads desde portales</div>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Cuando llega un lead de Urbania, <span className="text-primary">Tami atiende primero</span>.
          </h2>
          <p className="text-[15px] text-muted mt-4 reveal-init">
            Conectamos tu cuenta de Urbania, Adondevivir y Nexo. Los leads entran directo a WhatsApp, Tami los califica en 15 segundos y solo te pasa los listos para cerrar.
          </p>
        </div>

        <div className="bg-paper rounded-3xl border border-soft shadow-card p-6 lg:p-8 reveal-init">
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 items-stretch">
            {/* Step 1 */}
            <div className="bg-paper-2 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <BrandImg name="Urbania" src="urbania.png" h="h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted-2 mb-1">Origen del lead</div>
              <div className="text-[13px] font-bold leading-snug">Andrea P. consulta el aviso "Aurora · Lima Centro"</div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                <AnimatedBell className="w-3 h-3" color="currentColor" /> Webhook recibido
              </div>
            </div>
            <FlowStepArrow />
            {/* Step 2 */}
            <div className="bg-primary-soft rounded-2xl p-5 border border-primary-line">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-black">T</div>
                <span className="text-[12px] font-bold text-primary-2">Tami</span>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-primary-2 mb-1">Califica en 15s</div>
              <div className="text-[13px] leading-snug">"Hola Andrea 👋 Vi tu interés en Aurora. ¿Buscas vivienda o inversión?"</div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-primary-2 bg-paper px-2 py-1 rounded">
                <Clock className="w-3 h-3" /> Responde en 15 seg
              </div>
            </div>
            <FlowStepArrow />
            {/* Step 3 */}
            <div className="bg-paper-2 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center">MC</div>
                <span className="text-[12px] font-bold">María Castillo</span>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1">Handoff al asesor</div>
              <div className="text-[13px] leading-snug">Solo recibe leads marcados <strong className="text-emerald-700">verde</strong>, con presupuesto y zona confirmados.</div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                <Star className="w-3 h-3" /> Lead caliente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStepArrow() {
  return (
    <div className="hidden md:flex items-center justify-center text-primary">
      <ArrowRight className="w-6 h-6" />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function PhoneGallery() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Tami en acción</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Conversaciones reales, <span className="text-primary">resultados reales</span>.
          </h2>
          <p className="text-[15px] text-muted mt-4 reveal-init">
            Tres casos típicos de un día normal en una inmobiliaria. Tami no improvisa — sigue tu guion comercial.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          <ConversationCase
            tag="Caso 01 · Califica intención"
            title="De anuncio en Facebook a lead verde"
            desc="Andrea ve un Reel de un proyecto en pre-venta y escribe. En 4 mensajes, Tami sabe si es comprador real o curioso, y la marca verde para que tu equipo no pierda tiempo."
            metrics={[
              { l: 'Tiempo de calificación', v: '< 1 min' },
              { l: 'Resultado', v: 'Verde · inversión' },
              { l: 'Próximo paso', v: 'Catálogo + visita' },
            ]}
            phone={
              <>
                <Bubble side="left" delay={100} time="9:14">Vi el ad de un proyecto en preventa</Bubble>
                <Bubble side="right" delay={500} time="9:14">¡Hola! 👋 Para encontrarte el match ideal:</Bubble>
                <Bubble side="right" delay={1100} time="9:14">¿Buscas <strong>vivienda</strong> o <strong>inversión</strong>?</Bubble>
                <Bubble side="left" delay={1900} time="9:15">Inversión, hasta US$ 100k</Bubble>
                <Bubble side="right" delay={2700} time="9:15">Perfecto ✅ Marcado <strong>verde</strong>. Te muestro 3 opciones…</Bubble>
              </>
            }
          />

          <ConversationCase
            reverse
            tag="Caso 02 · Capta propietarios"
            title="Quien quiere vender, perfilado en 60 segundos"
            desc="Tami atiende el lado de la captación: pregunta zona, m², precio esperado y urgencia. Compara contra el promedio de la zona y agenda la visita técnica."
            metrics={[
              { l: 'Promedio de zona', v: 'US$ 215–235k' },
              { l: 'Plazo', v: '3 meses' },
              { l: 'Próximo paso', v: 'Visita técnica' },
            ]}
            phone={
              <>
                <Bubble side="left" delay={100} time="11:02">Hola, quiero vender mi depa de 80m²</Bubble>
                <Bubble side="right" delay={500} time="11:02">¡Genial! Tami aquí 👋. Te ayudo a perfilar:</Bubble>
                <Bubble side="right" delay={1100} time="11:02">¿Distrito? ¿Precio que esperas? ¿Cuándo necesitas vender?</Bubble>
                <Bubble side="left" delay={1700} time="11:03">San Borja · ~US$ 220k · 3 meses</Bubble>
                <Bubble side="right" delay={2400} time="11:03">📊 Promedio de zona: <strong>US$ 215–235k</strong>. Te agendo visita técnica.</Bubble>
              </>
            }
          />

          <ConversationCase
            tag="Caso 03 · Handoff con contexto"
            title="Lead alta intención derivado a tu director comercial"
            desc="Cuando Tami detecta señales de cierre (urgencia, presupuesto claro, listo para firmar), escala al humano correcto con todo el contexto cargado."
            metrics={[
              { l: 'Detección', v: 'Alta intención' },
              { l: 'Asesor asignado', v: 'Director Comercial' },
              { l: 'Tiempo', v: 'Respuesta inmediata' },
            ]}
            phone={
              <>
                <Bubble side="left" delay={100} time="3:21">¿Aceptan pago internacional? Vivo en España</Bubble>
                <Bubble side="right" delay={500} time="3:21">Para esto te paso con nuestro Director Comercial 🚀</Bubble>
                <Bubble side="right" delay={1100} time="3:21">Hola, soy Martín 👋 Sí aceptamos. Te genero el link de pago…</Bubble>
                <div className="bg-primary-soft border border-primary-line rounded-xl px-2.5 py-1.5 text-[9px] text-primary-2 font-semibold msg-anim" style={{ animationDelay: '1900ms' }}>
                  ⚡ Handoff registrado · alta intención
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function ConversationCase({
  tag, title, desc, metrics, phone, reverse = false,
}: {
  tag: string;
  title: string;
  desc: string;
  metrics: { l: string; v: string }[];
  phone: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal-init">
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3 inline-flex items-center gap-2">
          <span className="w-5 h-px bg-primary" /> {tag}
        </div>
        <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-black tracking-tight leading-[1.1] mb-4">{title}</h3>
        <p className="text-[15px] text-muted leading-relaxed mb-7 max-w-[480px]">{desc}</p>
        <div className="grid grid-cols-3 gap-3 max-w-[520px]">
          {metrics.map((m, i) => (
            <div key={i} className="bg-paper-2 rounded-2xl p-4 border border-soft">
              <div className="text-[9px] font-bold uppercase tracking-widest text-muted-2 mb-1.5">{m.l}</div>
              <div className="text-[13px] font-black leading-tight text-primary-2">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex justify-center ${reverse ? 'lg:order-1' : ''}`}>
        <PhoneFrame className="w-[240px]">
          <div className="flex flex-col h-full">
            <WhatsAppHeader contactName="Tami · Ventas" />
            <ChatArea>{phone}</ChatArea>
            <ChatInput />
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function CrmCloud() {
  return (
    <section id="integraciones" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Integraciones</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            No cambies tu CRM.<br />Tami se conecta a <span className="text-primary">lo que ya usas</span>.
          </h2>
        </div>

        <div className="bg-paper rounded-3xl border border-soft shadow-card p-8 lg:p-12 mb-6 reveal-init">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-9 text-center">9 CRMs soportados de fábrica</div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-10 items-center justify-items-center">
            <BrandImg name="Sperant" src="sperant.png" h="h-7" />
            <BrandImg name="Evolta" src="evolta.png" h="h-7" />
            <BrandImg name="Tokko Broker" src="tokko.png" h="h-7" />
            <BrandImg name="HubSpot" src="../hubspot.svg" h="h-7" />
            <BrandImg name="Salesforce" src="salesforce.svg" h="h-8" gray />
            <BrandImg name="Bitrix24" src="bitrix24.svg" h="h-7" gray />
            <BrandImg name="PlanOK" src="planok.png" h="h-7" />
            <BrandImg name="Zoho" src="../zoho.svg" h="h-7" />
            <BrandImg name="Microsoft" src="microsoft.svg" h="h-6" gray />
            <div className="text-[11px] font-semibold text-muted-2">+ más</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-paper rounded-3xl border border-soft shadow-card p-7 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-5">Canales</div>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/whatsapp.svg`} alt="" className="w-4 h-4" /></span>
                WhatsApp Cloud API
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/instagram.svg`} alt="" className="w-4 h-4" /></span>
                Instagram
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/meta.svg`} alt="" className="w-5 h-5" /></span>
                Meta Ads
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/messenger.svg`} alt="" className="w-4 h-4" /></span>
                Messenger
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}logos/tiktok.svg`} alt="" className="w-4 h-4" /></span>
                TikTok
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-paper-2 text-ink flex items-center justify-center"><Globe className="w-4 h-4" /></span>
                Web Widget
              </span>
            </div>
          </div>
          <div className="bg-paper rounded-3xl border border-soft shadow-card p-7 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-5">Portales públicos · captación de leads</div>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              <BrandImg name="Urbania" src="urbania.png" h="h-8" />
              <BrandImg name="Adondevivir" src="adondevivir.png" h="h-8" />
              <BrandImg name="Nexo Inmobiliario" src="nexo.png" h="h-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Casos de éxito</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Equipos que pasaron del<br />Excel al <span className="text-primary">pipeline real</span>.
          </h2>
          <p className="text-[15px] text-muted mt-4 max-w-[640px] reveal-init">
            Inmobiliarias, desarrolladoras y agentes en LATAM que reemplazaron su WhatsApp personal y su Excel por una plataforma diseñada para vender propiedades — y dejaron de perder leads de noche.
          </p>
        </div>
        <div className="reveal-init">
          <TestimonialsGrid />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="precios" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Precios</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Pagas lo que un asesor junior.<br />Vendes como un <span className="text-primary">equipo de diez</span>.
          </h2>
          <p className="text-muted mt-5 text-[16px]">14 días gratis · 0% comisión sobre cierres · sin tarjeta para empezar. Si Tami no convierte, no pagas un sol.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <PriceCard
            tag="Para agentes y agencias"
            title="Agente Inmobiliario"
            price={350}
            features={[
              'Hasta 1,500 leads / mes',
              'Catálogo hasta 10 propiedades',
              'Reventa · Alquileres · Captación',
              'Sync con Urbania, Adondevivir, Nexo',
              'Integración Sperant, Evolta, Tokko',
              'Agendamiento + recordatorios',
              'Cotizador PDF',
            ]}
            cta="Comenzar mis 14 días"
          />
          <PriceCard
            tag="Más solicitado"
            title="Desarrollo y Escala"
            price={500}
            iva
            features={[
              'Todo lo del plan Agente, más:',
              'Leads y propiedades ilimitados',
              'Módulo Proyectos Nuevos',
              'Distribución equitativa de leads',
              'Envíos masivos para lanzamientos',
              'Panel Supervisor multiusuario',
              'Embudo + atribución de canal',
            ]}
            cta="Comenzar mis 14 días"
            highlighted
          />
        </div>
        {/* Comparativa rápida vs contratar humano */}
        <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 reveal-init">
          {[
            { label: 'Asesor humano junior', value: '$1,200/mes', sub: 'Atiende 8h, descansa, renuncia, vacaciones', muted: true },
            { label: 'Tami — plan Agente', value: '$350/mes', sub: 'Atiende 24/7, no descansa, escala con tu equipo', highlight: true },
            { label: 'Tami — plan Desarrollo', value: '$500/mes', sub: 'Multi-proyecto, distribución, supervisor en vivo', highlight: true },
          ].map((row, i) => (
            <div key={i} className={`rounded-2xl p-5 border ${row.highlight ? 'bg-primary-soft border-primary-line' : 'bg-paper border-soft'}`}>
              <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${row.highlight ? 'text-primary-2' : 'text-muted-2'}`}>{row.label}</div>
              <div className={`text-2xl font-black mb-1 ${row.muted ? 'text-muted-2 line-through' : ''}`}>{row.value}</div>
              <div className="text-[12px] text-muted leading-snug">{row.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl mx-auto bg-paper border border-soft rounded-2xl p-5 text-[12px] text-muted leading-relaxed reveal-init">
          <strong className="text-ink">Costos directo a Meta — transparentes:</strong> WhatsApp API saliente $0.0703/lead · entrante gratis · bloque de 500 leads adicionales $50 · cuenta adicional $150/6 meses · contrato mínimo 6 meses (Plan Desarrollo).
        </div>
      </div>
    </section>
  );
}

function PriceCard({ tag, title, price, iva, features, cta, highlighted }: any) {
  return (
    <div className="reveal-init">
      <div className={`relative rounded-[2.4rem] p-9 lg:p-10 h-full flex flex-col ${highlighted
        ? 'bg-paper border-2 border-primary shadow-mega'
        : 'bg-paper border border-soft shadow-card'}`}>
        {highlighted ? (
          <div className="absolute top-5 right-5 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
            {tag}
          </div>
        ) : (
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-2">{tag}</div>
        )}
        <h3 className={`text-2xl font-black tracking-tight mb-7 ${highlighted ? 'mt-1 text-primary-2' : ''}`}>{title}</h3>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-6xl font-black tracking-tight">${price}</span>
          <span className="text-sm font-medium text-muted">/mes</span>
        </div>
        <p className="text-[11px] mb-7 text-muted-2">USD {iva ? '· + IGV' : ''}</p>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-ink-2">
              <AnimatedCheck className="w-4 h-4 shrink-0 mt-1" color="var(--primary)" delay={i * 80} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href={APP_DEMO_URL} className={`block text-center w-full py-3.5 rounded-full font-bold text-sm transition shadow-cta ${highlighted ? 'bg-primary hover:bg-primary-2 text-white' : 'bg-ink text-paper hover:bg-ink-2'}`}>
          {cta}
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: '¿Cuánto tarda la activación?',
      a: '48 horas desde la firma. Subimos tus brochures, conectamos tu WhatsApp Business API a Meta y entrenamos a Tami con tu tono y tus reglas. Empieza a atender leads desde el día 1.',
    },
    {
      q: '¿Tengo que cambiar mi CRM?',
      a: 'No. Tami se integra con Sperant, Evolta, Tokko Broker, PlanOK, HubSpot, Salesforce, Bitrix24, Zoho, Dynamics 365 y más. Si usas Excel, también te lo migramos.',
    },
    {
      q: '¿De qué portales captura leads?',
      a: 'Urbania, Adondevivir y Nexo Inmobiliario. Cada lead que llega por estos portales entra directo a la conversación de WhatsApp y Tami responde en menos de 15 segundos.',
    },
    {
      q: '¿Cómo funciona la automatización en Instagram?',
      a: 'Configuras palabras clave (por ejemplo "INFO", "PRECIO", "BROCHURE"). Cuando alguien comenta esa palabra en cualquiera de tus posts, Tami le envía automáticamente un DM con el catálogo y la opción de agendar visita.',
    },
    {
      q: '¿Cobran comisión sobre los cierres?',
      a: 'No. Tami es un fee mensual fijo. Si cierras 3 visitas o 30, el precio es el mismo. Solo escalan los costos directos de Meta (WhatsApp API), que son transparentes y van a tu cuenta.',
    },
    {
      q: '¿Qué pasa después de los 14 días gratis?',
      a: 'Si Tami convirtió y quieres seguir, eliges plan (Agente $350 o Desarrollo $500). Si no convirtió, no pagas nada. Sin tarjeta para empezar y sin compromiso.',
    },
    {
      q: '¿Tami habla por sí sola o se apoya en humanos?',
      a: 'Tami atiende toda la conversación inicial: saluda, califica, envía catálogo, agenda visita y manda recordatorios. Cuando detecta alta intención (presupuesto claro, urgencia, listo para firmar), escala al asesor humano con todo el contexto.',
    },
    {
      q: '¿Y si quiero entrar yo mismo al chat?',
      a: 'En cualquier momento. El supervisor entra al chat con un badge GERENTE visible para el cliente, toma el caso y cierra en vivo. Tami se hace a un lado.',
    },
  ];
  return (
    <section id="faq" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Preguntas frecuentes</div>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-tight leading-[1.05] reveal-init">
            Antes de probar Tami,<br />probablemente quieras saber esto.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-paper border border-soft rounded-2xl overflow-hidden reveal-init">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-paper-2 transition"
      >
        <span className="text-[15px] font-bold text-ink-2">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${open ? 'bg-primary text-white rotate-180' : 'bg-paper-2 text-primary-2'}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-0 text-[14px] text-muted leading-relaxed">{a}</div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-24 lg:py-28 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="relative bg-paper-3 border border-primary-line rounded-[2.5rem] overflow-hidden p-10 lg:p-16 reveal-init">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-soft rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-soft rounded-full blur-3xl translate-y-1/3" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-paper border border-primary-line rounded-full px-3 py-1.5 mb-5 shadow-card">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-2">Si no convierte, no pagas</span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black tracking-tight leading-[1.05] mb-5">
                Sube tu primer<br />
                <span className="text-primary">brochure hoy</span>.
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-md">
                Conectamos lo que ya usas en 48h. Tami atiende leads reales por 14 días gratis. Si no convierte, no pagas un sol.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <a href={APP_DEMO_URL} className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-2 text-white px-7 py-4 rounded-full font-bold transition shadow-cta">
                Comenzar mis 14 días gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-ink border border-soft hover:border-primary-line hover:bg-paper transition">
                <MessageCircle className="w-4 h-4 text-primary" /> Hablar con ventas por WhatsApp
              </a>
              <span className="text-[11px] text-muted-2 mt-2">+51 995 547 575 · mvelascoo@tamibot.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-paper py-12 px-6 lg:px-8 border-t border-soft">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-[20px] font-black tracking-tight">tami</span>
            <span className="text-primary text-xl font-black leading-none">.</span>
          </div>
          <p className="text-muted leading-relaxed text-[13px]">
            La vendedora con IA para inmobiliarias y agentes en LATAM. Probada con +40 inmobiliarias y +2.6M leads atendidos.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Producto</div>
          <ul className="space-y-2.5 text-muted text-[13px]">
            <li><a href="#beneficios" className="hover:text-ink">Beneficios</a></li>
            <li><a href="#para-inmobiliarias" className="hover:text-ink">Inmobiliarias</a></li>
            <li><a href="#para-agentes" className="hover:text-ink">Agentes</a></li>
            <li><a href="#como-funciona" className="hover:text-ink">Cómo funciona</a></li>
            <li><a href="#integraciones" className="hover:text-ink">Integraciones</a></li>
            <li><a href="#precios" className="hover:text-ink">Precios</a></li>
            <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Soluciones</div>
          <ul className="space-y-2.5 text-muted text-[13px]">
            <li>Desarrolladoras e Inmobiliarias</li>
            <li>Agentes y Agencias</li>
            <li>Reventa · Alquileres</li>
            <li>Captación de propiedades</li>
            <li>Lanzamientos · Envíos masivos</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Contacto</div>
          <ul className="space-y-2.5 text-muted text-[13px]">
            <li>+51 995 547 575</li>
            <li>mvelascoo@tamibot.com</li>
            <li><a href="https://tamibot.com" target="_blank" rel="noreferrer" className="hover:text-ink">tamibot.com (producción) ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto pt-10 mt-10 border-t border-soft text-[11px] text-muted-2 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span>🧪 Demo en GitHub Pages · No afecta producción</span>
        <span>© 2026 TamiBot · Hecho con cuidado en Lima</span>
      </div>
    </footer>
  );
}
