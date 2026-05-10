/**
 * TamiBot landing — rediseño profesional v3
 * Design constraints:
 *  - Solo 2 acentos: morado (#9333EA) + verde (#14B8A6)
 *  - Fondos: paper (white) y paper-2 (FAFAFF) y paper-3 (F4F0FF lavender)
 *  - Type: Manrope. Una sola familia.
 *  - Section padding consistente: py-24 lg:py-32
 *  - Card radii: rounded-3xl (1.5rem) o rounded-[2rem] para hero/big
 *  - Shadows: shadow-card o shadow-mega — nunca borders gruesos
 *  - Cada sección con eyebrow + h2 + (sub) + content
 */
import { useEffect, useState } from 'react';
import {
  ArrowRight, Check, MessageCircle, ChevronRight, ChevronDown, ArrowUpRight,
  Calendar, Users, BarChart3, Zap, ShieldCheck, Globe, Inbox, UploadCloud,
  Wand2, Rocket, Hash, Bell, Clock, Sparkles, Star, Building2, HeartHandshake,
  Plus, Minus, FileText, Megaphone, KeyRound,
} from 'lucide-react';
import { CountUp } from './components/CountUp';
import {
  PhoneFrame, WhatsAppHeader, ChatArea, Bubble, TypingBubble, ChatInput,
  PdfAttachment, PropertyCard,
} from './components/PhoneMockup';
import { DashboardScreen } from './components/DashboardMockup';
import { TestimonialsGrid } from './components/Testimonials';
import { AnimatedCheck, PulsingDot, StepsConnector } from './components/SvgAnimations';
import { WhatsAppGlyph, InstagramGlyph, MetaGlyph, MessengerGlyph } from './components/Logos';

const APP_DEMO_URL = 'https://tamibot.github.io/demo-app/';
const WA_URL = 'https://wa.me/51995547575?text=Hola%20quiero%20mi%20demo%20gratuita%20de%202%20semanas';
const ASSET = (p: string) => `${import.meta.env.BASE_URL}${p}`;

/* ─────────────────────── Reusable bits ─────────────────────── */
function BrandImg({ name, src, h = 'h-8' }: { name: string; src: string; h?: string }) {
  return (
    <img
      src={ASSET(`logos/brands/${src}`)}
      alt={name}
      className={`${h} w-auto opacity-60 hover:opacity-100 transition`}
      style={{ filter: 'grayscale(1)' }}
      onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(1)'; }}
      loading="lazy"
    />
  );
}

function Eyebrow({ children, color = 'primary' }: { children: React.ReactNode; color?: 'primary' | 'secondary' | 'muted' }) {
  const cls = color === 'primary' ? 'text-primary-2' : color === 'secondary' ? 'text-secondary-2' : 'text-muted-2';
  return (
    <div className={`text-[11px] font-bold uppercase tracking-[0.28em] mb-4 ${cls}`}>{children}</div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(2.2rem,4.6vw,3.6rem)] font-black tracking-tight leading-[1.05]">{children}</h2>
  );
}

function CTA({ children, primary = false, href = APP_DEMO_URL }: { children: React.ReactNode; primary?: boolean; href?: string }) {
  if (primary) {
    return (
      <a href={href} className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-2 text-white px-7 py-4 rounded-full font-bold text-[14px] transition shadow-cta">
        {children} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
      </a>
    );
  }
  return (
    <a href={href} className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-[14px] text-ink border border-soft hover:border-primary-line hover:bg-primary-soft/40 transition">
      {children} <ChevronRight className="w-4 h-4" />
    </a>
  );
}

/* ────────────────────────── App shell ────────────────────────── */
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
      <Banner />
      <Nav />
      <Hero />
      <SocialProof />
      <Pain />
      <Capabilities />
      <ScenariosSection />
      <HowItWorks />
      <UseCases />
      <Results />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ────────────────────────── Banner ────────────────────────── */
function Banner() {
  return (
    <div className="bg-primary-3 text-paper text-[11px] font-medium py-2.5 text-center px-4 z-50 relative">
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <PulsingDot color="#A7F3D0" size={5} />
        <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-paper/70">Demo gratis</span>
        <span>14 días sin tarjeta · sin compromiso · cancelas en un click.</span>
        <a href={APP_DEMO_URL} className="text-paper underline decoration-[var(--secondary)] underline-offset-4 decoration-2 font-bold inline-flex items-center gap-1 hover:opacity-90">
          Ver el portal en vivo <ArrowUpRight className="w-3 h-3" />
        </a>
      </span>
    </div>
  );
}

/* ────────────────────────── Nav ────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#capabilities', label: 'Producto' },
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#use-cases', label: 'Para quién' },
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
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-muted">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-ink transition">{l.label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <a href={APP_DEMO_URL} className="hidden sm:inline-flex text-[13px] font-medium text-muted hover:text-ink px-3 py-2">Iniciar sesión</a>
          <a href={APP_DEMO_URL} className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-2 text-white text-[13px] font-bold pl-4 pr-3 py-2 rounded-full transition shadow-cta group">
            Demo gratis
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

/* ────────────────────────── Hero ────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-soft" style={{
      background: 'radial-gradient(ellipse 1200px 600px at 50% 0%, var(--paper-3) 0%, var(--paper) 70%)',
    }}>
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="reveal-init">
            <div className="inline-flex items-center gap-2 bg-paper border border-soft rounded-full px-3 py-1.5 mb-7 shadow-card">
              <PulsingDot color="var(--secondary)" size={6} />
              <span className="text-[11px] font-semibold text-muted">Vendedora IA · WhatsApp · 24/7</span>
            </div>

            <h1 className="text-[clamp(2.7rem,5.6vw,4.5rem)] leading-[1.02] font-black tracking-tight mb-6">
              Cierra propiedades<br />
              mientras tu equipo<br />
              <span className="text-primary">duerme</span>.
            </h1>

            <p className="text-[18px] leading-relaxed text-muted max-w-[520px] mb-8">
              Tami atiende a cada lead en <strong className="text-ink">15 segundos</strong> por WhatsApp, Instagram y portales. Califica, agenda visitas y deriva al asesor solo cuando el cliente está listo para firmar.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <CTA primary>Activar a Tami · 14 días gratis</CTA>
              <CTA href={APP_DEMO_URL}>Ver demo en vivo</CTA>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5"><AnimatedCheck className="w-4 h-4" color="var(--primary)" /> Sin tarjeta</span>
              <span className="text-muted-2">·</span>
              <span className="inline-flex items-center gap-1.5"><AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={150} /> Setup en 48h</span>
              <span className="text-muted-2">·</span>
              <span className="inline-flex items-center gap-1.5"><AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={300} /> Sin contratos largos</span>
            </div>
          </div>

          {/* RIGHT — phone mockup with conversation */}
          <div className="relative reveal-init">
            <PhoneFrame className="w-[290px] sm:w-[320px] mx-auto">
              <div className="flex flex-col h-full">
                <WhatsAppHeader contactName="Tami · Ventas" status="escribiendo…" avatar="🤖" />
                <ChatArea>
                  <Bubble side="left" delay={200} time="10:41">Hola, busco depa de 3 dorms en Surco hasta US$ 90k 🏠</Bubble>
                  <Bubble side="right" delay={900} time="10:41">¡Hola! 👋 Soy Tami. Te tengo el match perfecto:</Bubble>
                  <Bubble side="right" delay={1700} time="10:42">
                    <PropertyCard project="Vista del Mar" district="Surco" area="3D · 78 m²" price="US$ 89,500" badge="Pre-venta" />
                    <PdfAttachment name="Brochure_proyecto.pdf" size="2.8 MB" />
                  </Bubble>
                  <Bubble side="left" delay={2700} time="10:43">Me interesa. ¿Visita el sábado?</Bubble>
                  <TypingBubble delay={3600} />
                  <Bubble side="right" delay={4500} time="10:43">✅ Visita confirmada <strong>Sáb 10:00 am</strong>. Te derivo al asesor.</Bubble>
                </ChatArea>
                <ChatInput />
              </div>
            </PhoneFrame>

            {/* Floating chips */}
            <div className="hidden md:flex absolute -left-6 top-16 bg-paper border border-soft rounded-2xl px-4 py-3 shadow-mega items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-full bg-primary-soft text-primary-2 flex items-center justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Social Proof ────────────────────────── */
function SocialProof() {
  const clients = [
    { name: 'Líder Grupo Constructor', src: 'lider.png', h: 'h-9' },
    { name: 'COSAPI Inmobiliaria', src: 'cosapi.png', h: 'h-9' },
    { name: 'RE/MAX', src: 'remax.svg', h: 'h-8' },
    { name: 'Sperant', src: 'sperant.png', h: 'h-7' },
    { name: 'Tokko Broker', src: 'tokko.png', h: 'h-7' },
    { name: 'Evolta', src: 'evolta.png', h: 'h-7' },
    { name: 'PlanOK', src: 'planok.png', h: 'h-8' },
  ];
  return (
    <section className="py-16 bg-paper border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-10">
          Confían en Tami para vender propiedades
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 lg:gap-24 animate-marquee items-center">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <div key={i} className="shrink-0">
                <BrandImg name={c.name} src={c.src} h={c.h} />
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

/* ────────────────────────── Pain ────────────────────────── */
function Pain() {
  const points = [
    {
      stat: '5 min',
      label: 'es la ventana de cierre',
      desc: 'Si no respondes el primer mensaje en los primeros 5 minutos, la probabilidad de cierre cae 70%. Tu equipo no puede con todo.',
      icon: Clock,
    },
    {
      stat: '11 pm',
      label: 'es cuando escriben',
      desc: 'Tu cliente vio el ad de Urbania un domingo a las 11 pm. Si respondes el lunes, ya separó con la competencia.',
      icon: Bell,
    },
    {
      stat: '$1.2k',
      label: 'cuesta un asesor junior',
      desc: 'Y solo trabaja 8 horas. No atiende noches, fines de semana ni feriados. Tampoco escala con tu siguiente lanzamiento.',
      icon: Users,
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-paper-2 border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 reveal-init">
          <Eyebrow>El problema</Eyebrow>
          <H2>Pierdes 7 de cada 10 leads.<br />Y ni siquiera lo <span className="text-primary">sabes</span>.</H2>
          <p className="text-[16px] text-muted leading-relaxed mt-5 max-w-[640px]">
            Inviertes en Meta Ads, pagas portales, contratas asesores. Pero la mayoría de tus leads se enfría antes de la primera respuesta — y nunca aparecen en tu CRM.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-paper rounded-3xl border border-soft p-7 reveal-init" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-11 h-11 rounded-2xl bg-primary-soft text-primary-2 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-primary tracking-tight">{p.stat}</span>
                  <span className="text-[13px] font-bold text-ink-2">{p.label}</span>
                </div>
                <p className="text-[13.5px] text-muted leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Capabilities — Bento ────────────────────────── */
function Capabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 reveal-init">
          <Eyebrow>El producto</Eyebrow>
          <H2>Una vendedora completa.<br /><span className="text-primary">Sin contratar a nadie</span>.</H2>
          <p className="text-[16px] text-muted leading-relaxed mt-5 max-w-[640px]">
            Tami no es un chatbot. Es una vendedora que atiende, califica, agenda, deriva y reporta. Todo lo que hace tu equipo comercial — sin pausa.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Big card 1: Inbox omnichannel */}
          <div className="lg:col-span-7 bg-paper-3 rounded-3xl border border-primary-line/50 p-7 lg:p-9 overflow-hidden reveal-init">
            <Eyebrow>01 · Bandeja omnicanal</Eyebrow>
            <h3 className="text-[26px] lg:text-3xl font-black leading-tight mb-3">Todos tus canales en una pantalla.</h3>
            <p className="text-[15px] text-muted leading-relaxed mb-6 max-w-[440px]">
              WhatsApp, Instagram, Meta Ads y portales (Urbania, Adondevivir, Nexo) integrados al 100%. Tami responde en cualquier canal, tú ves todo en un solo inbox.
            </p>
            <InboxMockup />
          </div>

          {/* Big card 2: Conversation flow */}
          <div className="lg:col-span-5 bg-paper-2 rounded-3xl border border-soft p-7 lg:p-9 overflow-hidden reveal-init">
            <Eyebrow>02 · Calificación inteligente</Eyebrow>
            <h3 className="text-[26px] lg:text-3xl font-black leading-tight mb-3">Lo caliente vs lo curioso.</h3>
            <p className="text-[15px] text-muted leading-relaxed mb-6">
              Tami pregunta presupuesto, zona, crédito y plazo. Marca <strong className="text-emerald-700">verde</strong> o <strong className="text-muted-2">blanco</strong> automáticamente y filtra ruido.
            </p>
            <div className="flex justify-center">
              <PhoneFrame className="w-[210px]">
                <div className="flex flex-col h-full">
                  <WhatsAppHeader contactName="Tami · Califica" />
                  <ChatArea>
                    <Bubble side="left" delay={100} time="9:14">Quiero info del depa</Bubble>
                    <Bubble side="right" delay={500} time="9:14">¡Hola! ¿Es para vivir o invertir?</Bubble>
                    <Bubble side="left" delay={1100} time="9:15">Inversión, hasta US$ 100k</Bubble>
                    <Bubble side="right" delay={1900} time="9:15">Perfecto ✅ Marcado <strong>verde</strong>. Te muestro 3 opciones.</Bubble>
                  </ChatArea>
                </div>
              </PhoneFrame>
            </div>
          </div>

          {/* Card 3: Agenda */}
          <div className="lg:col-span-4 bg-paper-2 rounded-3xl border border-soft p-7 reveal-init">
            <div className="w-11 h-11 rounded-2xl bg-secondary-soft text-secondary-2 flex items-center justify-center mb-5">
              <Calendar className="w-5 h-5" />
            </div>
            <Eyebrow color="secondary">03 · Agenda</Eyebrow>
            <h3 className="text-xl font-black leading-tight mb-2">Visitas que sí se concretan.</h3>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">
              Sync con Google Calendar. Recordatorios 24h y 2h antes en WhatsApp. Reduce no-show ~30%.
            </p>
            <MiniCalendar />
          </div>

          {/* Card 4: Distribution */}
          <div className="lg:col-span-4 bg-paper-2 rounded-3xl border border-soft p-7 reveal-init">
            <div className="w-11 h-11 rounded-2xl bg-primary-soft text-primary-2 flex items-center justify-center mb-5">
              <Users className="w-5 h-5" />
            </div>
            <Eyebrow>04 · Distribución</Eyebrow>
            <h3 className="text-xl font-black leading-tight mb-2">Reparte sin pelear.</h3>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">
              Round-robin · por zona · por carga · por proyecto. Tu gerente cierra con badge GERENTE en alta intención.
            </p>
            <MiniDistribution />
          </div>

          {/* Card 5: Reports */}
          <div className="lg:col-span-4 bg-paper-2 rounded-3xl border border-soft p-7 reveal-init">
            <div className="w-11 h-11 rounded-2xl bg-primary-soft text-primary-2 flex items-center justify-center mb-5">
              <BarChart3 className="w-5 h-5" />
            </div>
            <Eyebrow>05 · Reportería</Eyebrow>
            <h3 className="text-xl font-black leading-tight mb-2">Embudo en vivo.</h3>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">
              Volumen, tasa de cierre, costo por lead, conversión por canal y por asesor. Atribución real.
            </p>
            <MiniFunnel />
          </div>
        </div>
      </div>
    </section>
  );
}

function InboxMockup() {
  const rows = [
    { name: 'Familia González', src: 'Meta Ads', proj: 'Vista del Mar · Surco', time: '10:42', active: true, color: 'bg-blue-500', initials: 'FG', badge: 'Verde' },
    { name: 'Andrea Pérez', src: 'Urbania', proj: 'Aurora · Lima Centro', time: '09:15', color: 'bg-emerald-500', initials: 'AP' },
    { name: 'Carlos Inversor', src: 'Web propia', proj: 'Edificio Premium', time: '11:05', color: 'bg-violet-500', initials: 'CI', badge: 'Verde' },
    { name: 'Jenny Castro', src: 'Adondevivir', proj: 'Condominio Norte', time: '08:20', color: 'bg-pink-500', initials: 'JC' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-2xl overflow-hidden shadow-mega">
      <div className="bg-paper-2 px-4 py-2.5 flex items-center gap-2 border-b border-soft">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <div className="flex-1 max-w-xs mx-auto bg-paper rounded py-0.5 flex items-center justify-center gap-1.5 text-[10px] font-medium text-muted-2">
          <Globe className="w-3 h-3" /> app.tamibot.com / inbox
        </div>
      </div>
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-soft">
        <div className="flex items-center gap-2">
          <Inbox className="w-4 h-4 text-primary" />
          <span className="text-[12px] font-bold">Bandeja omnicanal</span>
        </div>
        <span className="text-[10px] text-emerald-700 font-bold inline-flex items-center gap-1">
          <PulsingDot color="#10B981" size={5} /> Tami atendiendo
        </span>
      </div>
      <div className="divide-y divide-soft">
        {rows.map((r, i) => (
          <div key={i} className={`px-5 py-3 flex items-center gap-3 ${r.active ? 'bg-primary-soft/40' : 'hover:bg-paper-2'} transition`}>
            <div className={`w-8 h-8 rounded-full ${r.color} text-white text-[10px] font-black flex items-center justify-center shrink-0`}>{r.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <span className="text-[12px] font-bold truncate">{r.name}</span>
                <span className="text-[9px] text-muted-2 ml-2 shrink-0">{r.time}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[8.5px] font-bold uppercase tracking-wider bg-paper border border-soft text-muted px-1.5 py-0.5 rounded">{r.src}</span>
                <span className="text-[10px] text-muted-2 truncate">{r.proj}</span>
                {r.badge && <span className="text-[8.5px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded ml-auto">{r.badge}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniCalendar() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const events = [{day:1,h:'10am'},{day:2,h:'4pm'},{day:4,h:'11am'},{day:5,h:'10am'},{day:5,h:'5pm'}];
  return (
    <div className="bg-paper rounded-2xl border border-soft overflow-hidden shadow-card">
      <div className="grid grid-cols-7 bg-paper-2 border-b border-soft text-[9px] font-bold text-muted-2">
        {days.map((d,i) => <div key={i} className="px-2 py-2 text-center">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 min-h-[100px]">
        {days.map((_, di) => (
          <div key={di} className={`p-1 ${di===0?'':'border-l border-soft'}`}>
            {events.filter(e => e.day === di).map((e, ei) => (
              <div key={ei} className="bg-primary-soft text-primary-2 text-[8px] font-bold rounded px-1 py-0.5 mb-0.5">{e.h}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniDistribution() {
  const advisors = [
    { name: 'María C.', leads: 12, color: 'bg-emerald-500' },
    { name: 'Carlos V.', leads: 8, color: 'bg-blue-500' },
    { name: 'Lucía M.', leads: 15, color: 'bg-violet-500' },
  ];
  return (
    <div className="bg-paper rounded-2xl border border-soft p-3 shadow-card space-y-1.5">
      {advisors.map((a, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className={`w-6 h-6 rounded-full ${a.color} text-white text-[8px] font-black flex items-center justify-center shrink-0`}>
            {a.name.split(' ').map(n=>n[0]).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold leading-tight">{a.name}</div>
            <div className="w-full h-1 bg-soft rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${(a.leads/15)*100}%` }} />
            </div>
          </div>
          <span className="text-[10px] font-bold text-primary-2 tabular-nums">{a.leads}</span>
        </div>
      ))}
    </div>
  );
}

function MiniFunnel() {
  const steps = [
    { l: 'Leads', n: 1407, w: 100 },
    { l: 'Calificados', n: 845, w: 60 },
    { l: 'Visitas', n: 312, w: 22 },
    { l: 'Separaciones', n: 105, w: 8 },
  ];
  return (
    <div className="bg-paper rounded-2xl border border-soft p-3 shadow-card space-y-1.5">
      {steps.map((s, i) => (
        <div key={i}>
          <div className="flex justify-between text-[10px] font-bold mb-0.5">
            <span className="text-muted-2">{s.l}</span>
            <span className="text-ink tabular-nums">{s.n.toLocaleString()}</span>
          </div>
          <div className="h-1.5 rounded bg-paper-2 overflow-hidden">
            <div className="h-full rounded bg-primary" style={{ width: `${s.w}%`, opacity: 0.3 + (s.w/100)*0.7 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────────── Scenarios ────────────────────────── */
function ScenariosSection() {
  return (
    <section id="escenarios" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Cuatro escenarios</Eyebrow>
          <H2>Donde tú pierdes leads,<br />Tami los <span className="text-primary">cierra</span>.</H2>
          <p className="text-[15px] text-muted mt-4">
            DM en Instagram, comentario en un ad, lead de Urbania, mensaje a las 11 pm. Tami los maneja todos en 15 segundos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <ScenarioCard
            badge="Meta Ads · Facebook"
            badgeColor="bg-blue-50 text-blue-700"
            title="Lead llega del ad de Facebook"
            desc="Andrea hace clic en tu ad de pre-venta. Tami responde por WhatsApp en 15 segundos, le envía el brochure y agenda la visita."
            mockup={
              <PhoneFrame className="w-[200px]">
                <div className="flex flex-col h-full">
                  <WhatsAppHeader contactName="Tami · Ventas" />
                  <ChatArea>
                    <Bubble side="left" delay={100} time="9:14">Vi el ad del proyecto en preventa</Bubble>
                    <Bubble side="right" delay={500} time="9:14">¡Hola Andrea! 👋</Bubble>
                    <Bubble side="right" delay={1100} time="9:14"><PdfAttachment name="Vista_del_Mar.pdf" size="2.8 MB" /></Bubble>
                    <Bubble side="left" delay={1900} time="9:15">¿Visita el sábado?</Bubble>
                    <Bubble side="right" delay={2700} time="9:15">✅ Sáb 10am</Bubble>
                  </ChatArea>
                </div>
              </PhoneFrame>
            }
          />
          <ScenarioCard
            badge="Instagram · Comentario"
            badgeColor="bg-pink-50 text-pink-700"
            title='Alguien comenta "INFO" en tu post'
            desc="Tami detecta la palabra clave y le envía un DM automático con el catálogo, el precio y el botón de agendar visita."
            mockup={<InstagramSnippet />}
          />
          <ScenarioCard
            badge="Urbania · Adondevivir · Nexo"
            badgeColor="bg-emerald-50 text-emerald-700"
            title="Lead nuevo desde un portal"
            desc="Webhook recibido. Tami califica al lead en 4 preguntas y lo deriva al asesor con badge verde. Nada se queda en el portal."
            mockup={<PortalFlowSnippet />}
          />
          <ScenarioCard
            badge="WhatsApp · 11:43 pm"
            badgeColor="bg-violet-50 text-violet-700"
            title="Cliente escribe un domingo a las 11 pm"
            desc="Tu equipo está dormido. Tami no. Responde, califica, y deja la cita lista para que el lunes tu asesor solo cierre."
            mockup={
              <PhoneFrame className="w-[200px]">
                <div className="flex flex-col h-full">
                  <WhatsAppHeader contactName="Tami · 24/7" status="en línea" />
                  <ChatArea>
                    <Bubble side="left" delay={100} time="23:43">¿Aún tienen el depa de Surco?</Bubble>
                    <Bubble side="right" delay={500} time="23:43">¡Hola! Sí 🏠 ¿Para vivir o invertir?</Bubble>
                    <Bubble side="left" delay={1100} time="23:44">Vivir</Bubble>
                    <Bubble side="right" delay={1900} time="23:44">3 opciones desde US$ 89,500 ✨</Bubble>
                    <Bubble side="right" delay={2700} time="23:45">¿Visita martes 6pm?</Bubble>
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
    <div className="reveal-init bg-paper rounded-3xl border border-soft p-7 lg:p-8 hover:shadow-mega transition">
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
    <div className="bg-paper rounded-2xl border border-soft overflow-hidden shadow-card w-[210px]">
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
        <div className="text-[10px] leading-snug"><strong>Vista del Mar</strong>. Comenta <strong className="text-primary">INFO</strong> y te enviamos el brochure 📩</div>
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
    <div className="bg-paper rounded-2xl border border-soft p-3 shadow-card w-[210px] space-y-2">
      <div className="bg-paper-2 rounded-xl p-2.5 border border-soft">
        <div className="flex items-center gap-1.5 mb-1.5">
          <BrandImg name="Urbania" src="urbania.png" h="h-4" />
        </div>
        <div className="text-[10px] font-bold">Andrea P. → "Aurora · Lima Centro"</div>
        <div className="text-[8px] text-emerald-700 font-bold mt-1 inline-flex items-center gap-1"><Bell className="w-2.5 h-2.5" /> Webhook</div>
      </div>
      <div className="flex justify-center text-primary"><ArrowRight className="w-4 h-4 rotate-90" /></div>
      <div className="bg-primary-soft border border-primary-line rounded-xl p-2.5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-5 h-5 rounded bg-primary text-white text-[8px] font-black flex items-center justify-center">T</div>
          <span className="text-[10px] font-bold text-primary-2">Tami califica · 15s</span>
        </div>
        <div className="text-[10px] leading-snug">"¿Vivienda o inversión? ¿Crédito o contado?"</div>
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

/* ────────────────────────── Cómo funciona ────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: '01',
      icon: UploadCloud,
      title: 'Comparte tu información',
      desc: 'Súbenos PDFs, brochures, tu Excel o el link de tu web. Conectamos directo a Urbania, Adondevivir, Nexo, Sperant, Tokko o Evolta. Tami estructura tu inventario en minutos.',
      bullets: ['PDF brochures', 'Web', 'Excel', 'Urbania', 'Sperant'],
    },
    {
      n: '02',
      icon: Wand2,
      title: 'Entrenamos a Tami con tu marca',
      desc: 'Configuramos el tono, las preguntas de calificación, las reglas de descuento y la estrategia de cierre. Tami habla con la voz de tu marca, no como un bot genérico.',
      bullets: ['Tono', 'Reglas', 'Templates', 'Calificación'],
    },
    {
      n: '03',
      icon: Rocket,
      title: 'Conectamos y vendemos',
      desc: 'Activamos WhatsApp Business API, conectamos tus redes y portales. Tami atiende leads reales desde el día 1 — tu equipo solo cierra los calientes.',
      bullets: ['WhatsApp', 'Meta Ads', 'Instagram', 'Portales', 'CRM'],
    },
  ];

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary-2 rounded-full px-3 py-1.5 mb-5 reveal-init">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Setup en 48 horas</span>
          </div>
          <H2>Tres pasos para tener<br />tu vendedora <span className="text-primary">operando</span>.</H2>
          <p className="text-[15px] text-muted mt-4 reveal-init">
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
                <h3 className="text-xl font-black mb-3 leading-tight">{s.title}</h3>
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
      </div>
    </section>
  );
}

/* ────────────────────────── Use Cases ────────────────────────── */
function UseCases() {
  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Para quién</Eyebrow>
          <H2>Dos perfiles, una <span className="text-primary">misma vendedora</span>.</H2>
          <p className="text-[15px] text-muted mt-4">
            Tami se adapta al tipo de operación: lanzamientos de proyectos nuevos o cartera de reventa y alquiler.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Card A: Inmobiliarias */}
          <UseCaseCard
            color="primary"
            tag="Para inmobiliarias y desarrolladoras"
            icon={Building2}
            title="Tu próximo lanzamiento sin equipos saturados."
            desc="Cuando lanzas un proyecto, los primeros 3 días reciben el 70% de los leads. Tami atiende todos en 15 segundos, los califica y los distribuye al asesor correcto."
            metric={{ v: '+32%', l: 'volumen separado' }}
            features={[
              { icon: Megaphone, t: 'Envíos masivos', d: 'BBDD propia + plantilla con foto, video y PDF. +5,000 leads en 24h.' },
              { icon: Building2, t: 'Multi-proyecto', d: 'Un Tami por proyecto, con branding y embudo distintos.' },
              { icon: ShieldCheck, t: 'Cierre Mágico', d: 'Gerente entra al chat con badge GERENTE y cierra en vivo.' },
            ]}
          />

          {/* Card B: Agentes */}
          <UseCaseCard
            color="secondary"
            tag="Para agentes y agencias"
            icon={HeartHandshake}
            title="Vende reventa y alquileres sin perder fines de semana."
            desc="Tu cliente te escribe a las 11 pm un domingo. Si respondes el lunes, ya separó con la competencia. Tami responde en 15 segundos a cualquier hora."
            metric={{ v: '+20%', l: 'visitas agendadas' }}
            features={[
              { icon: HeartHandshake, t: 'Captación', d: 'Perfila propietarios que venden: zona, m², precio, urgencia.' },
              { icon: KeyRound, t: 'Alquileres', d: 'Filtra inquilinos por presupuesto, mascotas, garante, plazo.' },
              { icon: FileText, t: 'Cotizador PDF', d: 'Tu logo, datos legales, cuotas con tasa BCP/Mivivienda.' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ color, tag, icon: Icon, title, desc, metric, features }: {
  color: 'primary' | 'secondary';
  tag: string;
  icon: any;
  title: string;
  desc: string;
  metric: { v: string; l: string };
  features: { icon: any; t: string; d: string }[];
}) {
  const bg = color === 'primary' ? 'bg-paper' : 'bg-paper';
  const accent = color === 'primary' ? 'text-primary-2' : 'text-secondary-2';
  const accentSoft = color === 'primary' ? 'bg-primary-soft' : 'bg-secondary-soft';
  const accentBorder = color === 'primary' ? 'border-primary-line' : 'border-secondary/20';
  return (
    <div className={`${bg} rounded-3xl border border-soft p-8 lg:p-10 reveal-init`}>
      <div className={`inline-flex items-center gap-2 ${accentSoft} border ${accentBorder} ${accent} rounded-full px-4 py-1.5 mb-6`}>
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[11px] font-bold uppercase tracking-wider">{tag}</span>
      </div>
      <h3 className="text-[clamp(1.6rem,2.4vw,2rem)] font-black tracking-tight leading-[1.15] mb-4">{title}</h3>
      <p className="text-[15px] text-muted leading-relaxed mb-6">{desc}</p>
      <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-soft">
        <span className={`text-5xl font-black ${accent}`}>{metric.v}</span>
        <span className="text-[14px] text-muted">{metric.l}</span>
      </div>
      <div className="space-y-4 mb-8">
        {features.map((f, i) => {
          const FI = f.icon;
          return (
            <div key={i} className="flex gap-3">
              <div className={`w-8 h-8 rounded-lg ${accentSoft} ${accent} flex items-center justify-center shrink-0`}>
                <FI className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[13.5px] font-bold leading-tight mb-0.5">{f.t}</div>
                <div className="text-[12.5px] text-muted leading-snug">{f.d}</div>
              </div>
            </div>
          );
        })}
      </div>
      <a href={APP_DEMO_URL} className={`inline-flex items-center gap-2 ${color === 'primary' ? 'bg-primary hover:bg-primary-2' : 'bg-secondary hover:bg-secondary-2'} text-white px-5 py-3 rounded-full font-bold text-[13px] transition shadow-cta`}>
        Ver demo en vivo <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

/* ────────────────────────── Results ────────────────────────── */
function Results() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="reveal-init">
            <Eyebrow>Resultados</Eyebrow>
            <H2>Lo que pasa cuando Tami toma <span className="text-primary">tu WhatsApp</span>.</H2>
            <p className="text-[16px] text-muted leading-relaxed mt-5 mb-8 max-w-[480px]">
              Cada lunes ves cuánto vendió Tami mientras dormías. Cuántos leads atendió, cuántas visitas agendó, cuánto separaron tus asesores. Atribución por canal y por persona — sin Excel.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: '2.6M', l: 'leads atendidos LATAM' },
                { v: '40%', l: 'tasa de interacción' },
                { v: '+20%', l: 'citas agendadas' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-primary tracking-tight">{s.v}</div>
                  <div className="text-[11px] text-muted-2 uppercase tracking-widest font-bold mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <CTA primary>Ver el dashboard en vivo</CTA>
          </div>
          <div className="reveal-init">
            <DashboardScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Integraciones ────────────────────────── */
function Integrations() {
  return (
    <section id="integraciones" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Integraciones</Eyebrow>
          <H2>No cambies tu CRM.<br />Tami se conecta a <span className="text-primary">lo que ya usas</span>.</H2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          {/* CRMs */}
          <div className="lg:col-span-2 bg-paper rounded-3xl border border-soft p-7 lg:p-9 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-7 text-center">9 CRMs soportados de fábrica</div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-10 gap-x-6 items-center justify-items-center">
              {[
                { name: 'Sperant', src: 'sperant.png', h: 'h-7' },
                { name: 'Evolta', src: 'evolta.png', h: 'h-7' },
                { name: 'Tokko', src: 'tokko.png', h: 'h-6' },
                { name: 'PlanOK', src: 'planok.png', h: 'h-7' },
                { name: 'Salesforce', src: 'salesforce.svg', h: 'h-7' },
                { name: 'HubSpot', src: 'hubspot.svg', h: 'h-6' },
                { name: 'Microsoft Dynamics', src: 'microsoft.svg', h: 'h-6' },
                { name: 'Bitrix24', src: 'bitrix24.svg', h: 'h-6' },
                { name: 'Zoho', src: 'zoho.svg', h: 'h-6' },
                <div key="more" className="text-[11px] font-semibold text-muted-2">+ más</div>,
              ].map((c: any, i) => typeof c === 'object' && c.props ? c : (
                <BrandImg key={i} name={c.name} src={c.src} h={c.h} />
              ))}
            </div>
          </div>

          {/* Channels + Portals stacked */}
          <div className="space-y-5">
            <div className="bg-paper rounded-3xl border border-soft p-6 reveal-init">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Canales</div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: 'WhatsApp', file: 'whatsapp.svg', bg: 'bg-emerald-50' },
                  { name: 'Instagram', file: 'instagram.svg', bg: 'bg-pink-50' },
                  { name: 'Meta Ads', file: 'meta.svg', bg: 'bg-blue-50' },
                  { name: 'Messenger', file: 'messenger.svg', bg: 'bg-sky-50' },
                  { name: 'TikTok', file: 'tiktok.svg', bg: 'bg-rose-50' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-paper-2 transition">
                    <span className={`w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                      <img src={ASSET(`logos/${c.file}`)} alt="" className="w-4 h-4" />
                    </span>
                    <span className="text-[12px] font-bold">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-paper rounded-3xl border border-soft p-6 reveal-init">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Portales</div>
              <div className="space-y-3">
                <BrandImg name="Urbania" src="urbania.png" h="h-6" />
                <BrandImg name="Adondevivir" src="adondevivir.png" h="h-6" />
                <BrandImg name="Nexo Inmobiliario" src="nexo.png" h="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Pricing ────────────────────────── */
function Pricing() {
  return (
    <section id="precios" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Precios</Eyebrow>
          <H2>Pagas lo que un asesor junior.<br />Vendes como un <span className="text-primary">equipo de diez</span>.</H2>
          <p className="text-[15px] text-muted mt-5">14 días gratis · 0% comisión sobre cierres · sin tarjeta para empezar.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
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
              'Agenda con recordatorios WhatsApp',
              'Cotizador PDF',
            ]}
          />
          <PriceCard
            tag="Más solicitado"
            title="Desarrollo y Escala"
            price={500}
            iva
            highlighted
            features={[
              'Todo lo del plan Agente, más:',
              'Leads y propiedades ilimitados',
              'Módulo Proyectos Nuevos',
              'Distribución equitativa',
              'Envíos masivos para lanzamientos',
              'Panel Supervisor multi-usuario',
              'Embudo + atribución de canal',
            ]}
          />
        </div>

        {/* Comparativa */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-3 mb-6">
          {[
            { l: 'Asesor humano junior', v: '$1,200/mes', sub: 'Atiende 8h. Renuncia, vacaciones, descansos.', muted: true },
            { l: 'Tami · Agente', v: '$350/mes', sub: 'Atiende 24/7. No descansa. Escala con tu equipo.', highlight: true },
            { l: 'Tami · Desarrollo', v: '$500/mes', sub: 'Multi-proyecto, distribución, supervisor.', highlight: true },
          ].map((row, i) => (
            <div key={i} className={`rounded-2xl p-5 border ${row.highlight ? 'bg-primary-soft border-primary-line' : 'bg-paper-2 border-soft'}`}>
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${row.highlight ? 'text-primary-2' : 'text-muted-2'}`}>{row.l}</div>
              <div className={`text-2xl font-black mb-1 ${row.muted ? 'text-muted-2 line-through' : ''}`}>{row.v}</div>
              <div className="text-[12px] text-muted leading-snug">{row.sub}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-paper-2 border border-soft rounded-2xl p-5 text-[12px] text-muted leading-relaxed reveal-init">
          <strong className="text-ink">Costos directo a Meta — transparentes:</strong> WhatsApp API saliente $0.0703/lead · entrante gratis · bloque de 500 leads adicionales $50 · cuenta adicional $150/6 meses · contrato mínimo 6 meses (Plan Desarrollo).
        </div>
      </div>
    </section>
  );
}

function PriceCard({ tag, title, price, iva, features, highlighted }: any) {
  return (
    <div className="reveal-init">
      <div className={`relative rounded-[2rem] p-9 lg:p-10 h-full flex flex-col ${highlighted
        ? 'bg-paper border-2 border-primary shadow-mega'
        : 'bg-paper border border-soft shadow-card'}`}>
        {highlighted ? (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
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
              <Check className="w-4 h-4 shrink-0 mt-1 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href={APP_DEMO_URL} className={`block text-center w-full py-3.5 rounded-full font-bold text-sm transition shadow-cta ${highlighted ? 'bg-primary hover:bg-primary-2 text-white' : 'bg-ink text-paper hover:bg-ink-2'}`}>
          Comenzar mis 14 días
        </a>
      </div>
    </div>
  );
}

/* ────────────────────────── Testimonials ────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Eyebrow>Casos de éxito</Eyebrow>
          <H2>Equipos que pasaron del Excel<br />al <span className="text-primary">pipeline real</span>.</H2>
          <p className="text-[15px] text-muted mt-4 max-w-[640px] reveal-init">
            Inmobiliarias, desarrolladoras y agentes en LATAM que reemplazaron WhatsApp personal y Excel por una plataforma diseñada para vender propiedades.
          </p>
        </div>
        <div className="reveal-init">
          <TestimonialsGrid />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: '¿Cuánto tarda la activación?',
      a: '48 horas desde la firma. Subimos tus brochures, conectamos tu WhatsApp Business API a Meta y entrenamos a Tami con tu tono y reglas. Empieza a atender leads desde el día 1.',
    },
    {
      q: '¿Tengo que cambiar mi CRM?',
      a: 'No. Tami se integra con Sperant, Evolta, Tokko, PlanOK, HubSpot, Salesforce, Bitrix24, Zoho, Dynamics 365 y más. Si usas Excel, también te lo migramos.',
    },
    {
      q: '¿De qué portales captura leads?',
      a: 'Urbania, Adondevivir y Nexo Inmobiliario. Cada lead que llega entra directo a la conversación de WhatsApp y Tami responde en menos de 15 segundos.',
    },
    {
      q: '¿Cómo funciona la automatización en Instagram?',
      a: 'Configuras palabras clave (ejemplo: INFO, PRECIO, BROCHURE). Cuando alguien comenta esa palabra en cualquiera de tus posts, Tami le envía automáticamente un DM con el catálogo y la opción de agendar visita.',
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
      a: 'Tami atiende toda la conversación inicial: saluda, califica, envía catálogo, agenda visita y manda recordatorios. Cuando detecta alta intención, escala al asesor humano con todo el contexto.',
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
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <H2>Antes de probar Tami,<br />probablemente quieras saber esto.</H2>
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

/* ────────────────────────── Final CTA ────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-24 lg:py-28 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="relative bg-paper-3 border border-primary-line rounded-[2.5rem] overflow-hidden p-10 lg:p-16 reveal-init">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-soft rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-soft rounded-full blur-3xl translate-y-1/3 opacity-50" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-paper border border-primary-line rounded-full px-3 py-1.5 mb-5 shadow-card">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-2">Si no convierte, no pagas</span>
              </div>
              <H2>Sube tu primer<br /><span className="text-primary">brochure hoy</span>.</H2>
              <p className="text-muted text-lg leading-relaxed max-w-md mt-5">
                Conectamos lo que ya usas en 48h. Tami atiende leads reales por 14 días gratis. Si no convierte, no pagas un sol.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <CTA primary>Activar a Tami · 14 días gratis</CTA>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-ink border border-soft hover:border-primary-line hover:bg-paper transition">
                <MessageCircle className="w-4 h-4 text-primary" /> Hablar con ventas
              </a>
              <span className="text-[11px] text-muted-2 mt-2">+51 995 547 575 · mvelascoo@tamibot.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Footer ────────────────────────── */
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
            La vendedora con IA para inmobiliarias y agentes en LATAM. +40 inmobiliarias y +2.6M leads atendidos.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Producto</div>
          <ul className="space-y-2.5 text-muted text-[13px]">
            <li><a href="#capabilities" className="hover:text-ink">Producto</a></li>
            <li><a href="#como-funciona" className="hover:text-ink">Cómo funciona</a></li>
            <li><a href="#use-cases" className="hover:text-ink">Para quién</a></li>
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
