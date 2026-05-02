import { useEffect } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, MessageCircle, ChevronRight, Calendar, Search,
  Users, FileText, BarChart3, Sparkles, Zap, ShieldCheck, Globe, Inbox,
} from 'lucide-react';
import { CountUp } from './components/CountUp';
import {
  PhoneFrame, WhatsAppHeader, ChatArea, Bubble, TypingBubble, ChatInput,
  PdfAttachment, PropertyCard,
} from './components/PhoneMockup';
import { DashboardScreen } from './components/DashboardMockup';
import { TestimonialsGrid } from './components/Testimonials';
import {
  HubSpotLogo, SalesforceLogo, MicrosoftLogo, ZohoLogo, Bitrix24Logo,
  SperantLogo, EvoltaLogo, TokkoLogo, PlanOKLogo,
  LiderClientLogo, CosapiClientLogo, RemaxClientLogo, GenericLogo,
  UrbaniaPortalLogo, AdondevivirPortalLogo, NexoPortalLogo,
} from './components/Logos';

const APP_DEMO_URL = 'https://tamibot.github.io/demo-app/';

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
      <StatsBanner />
      <FeatureCapture />
      <FeatureQualify />
      <FeatureSchedule />
      <FeatureDistribute />
      <PhoneGallery />
      <CrmCloud />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function DemoBanner() {
  return (
    <div className="bg-ink text-paper text-[11px] font-medium py-2.5 text-center px-4 z-50 relative">
      <span className="inline-flex items-center gap-2">
        <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-paper/45">Demo</span>
        <span>Sembrado con datos reales de Líder Grupo Constructor.</span>
        <a href={APP_DEMO_URL} className="text-accent font-bold inline-flex items-center gap-1 hover:underline underline-offset-4">
          Probar el portal <ArrowUpRight className="w-3 h-3" />
        </a>
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-paper/85 backdrop-blur-xl border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-1 group">
          <span className="text-[26px] font-display font-extrabold tracking-tighter">tami</span>
          <span className="text-accent text-2xl font-display font-extrabold leading-none">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-muted">
          <a href="#producto" className="hover:text-ink transition">Producto</a>
          <a href="#integraciones" className="hover:text-ink transition">Integraciones</a>
          <a href="#testimonios" className="hover:text-ink transition">Clientes</a>
          <a href="#precios" className="hover:text-ink transition">Precios</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={APP_DEMO_URL} className="hidden sm:inline-flex text-[13px] font-medium text-muted hover:text-ink px-3 py-2">
            Iniciar sesión
          </a>
          <a href={APP_DEMO_URL} className="inline-flex items-center gap-1.5 bg-ink hover:bg-ink-2 text-paper text-[13px] font-bold pl-4 pr-3 py-2 rounded-full transition group">
            Abrir portal
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden grain border-b border-soft">
      {/* subtle background — radial light */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-soft rounded-full blur-3xl opacity-40 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-paper-3 rounded-full blur-3xl opacity-30 -translate-x-1/2" />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="reveal-init">
            <div className="inline-flex items-center gap-2 bg-paper border border-soft rounded-full px-3 py-1.5 mb-8 shadow-card">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-semibold text-muted">Probado con +40 inmobiliarias en LATAM</span>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[0.98] font-extrabold mb-7">
              La <span className="italic-serif text-accent" style={{ fontWeight: 500 }}>única</span> vendedora<br />
              que cierra ventas<br />
              inmobiliarias en <span className="highlight-marker">WhatsApp</span>.
            </h1>

            <p className="text-[18px] leading-relaxed text-muted max-w-[520px] mb-10">
              Tami atiende, califica y agenda visitas en 15 segundos, las 24 horas.
              Tu equipo solo cierra los leads <strong className="text-ink">que ya están listos</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a href={APP_DEMO_URL} className="group inline-flex items-center gap-2 bg-ink hover:bg-ink-2 text-paper px-7 py-4 rounded-full font-bold text-[14px] transition shadow-card">
                Abrir portal con datos de Líder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#precios" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-[14px] text-muted hover:text-ink transition">
                Ver precios <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> 14 días gratis</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> 0% comisión sobre cierres</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Onboarding 48h</span>
            </div>
          </div>

          {/* RIGHT — phone mockup */}
          <div className="relative reveal-init">
            <PhoneFrame className="w-[280px] sm:w-[310px] mx-auto">
              <div className="flex flex-col h-full">
                <WhatsAppHeader contactName="Tami · Líder" status="escribiendo…" avatar="🤖" />
                <ChatArea>
                  <Bubble side="left" delay={200} time="10:41">
                    Hola, busco depa de 3 dorms en Ate, hasta S/ 280k 🏠
                  </Bubble>
                  <Bubble side="right" delay={900} time="10:41">
                    ¡Hola! Soy Tami de Líder 👋 Tengo el match ideal:
                  </Bubble>
                  <Bubble side="right" delay={1700} time="10:42">
                    <PropertyCard
                      project="Kampu — Santa Clara"
                      district="Ate"
                      area="3D · 66 m²"
                      price="S/ 273,000"
                      badge="Entrega inmediata"
                    />
                    <PdfAttachment name="Brochure_Kampu.pdf" size="3.2 MB" />
                  </Bubble>
                  <Bubble side="left" delay={2700} time="10:43">
                    Me encanta. ¿Visita el sábado?
                  </Bubble>
                  <TypingBubble delay={3600} />
                  <Bubble side="right" delay={4500} time="10:43">
                    ✅ Visita confirmada <strong>Sáb 10:00 am</strong>.<br />
                    Te derivo con <strong>Carlos Vega</strong>, asesor de Ate.
                  </Bubble>
                </ChatArea>
                <ChatInput />
              </div>
            </PhoneFrame>

            {/* Floating chip */}
            <div className="hidden md:flex absolute -left-8 top-20 bg-paper border border-soft rounded-2xl px-4 py-3 shadow-mega items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-2 font-bold">Responde en</div>
                <div className="text-base font-display font-extrabold leading-none">15 segundos</div>
              </div>
            </div>
            <div className="hidden md:block absolute -right-4 bottom-24 bg-paper border border-soft rounded-2xl px-4 py-3 shadow-mega animate-float-slow">
              <div className="text-[10px] uppercase tracking-widest text-muted-2 font-bold">Productividad</div>
              <div className="text-base font-display font-extrabold leading-none">×4 vs humano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function ClientsStrip() {
  const clients = [
    <LiderClientLogo />, <CosapiClientLogo />, <RemaxClientLogo />,
    <GenericLogo name="Grupo T&C" />, <GenericLogo name="LIBRE" />, <GenericLogo name="LIEN" />,
    <GenericLogo name="Comunidad" />, <GenericLogo name="Barqueros" />, <GenericLogo name="Innova&Build" />,
    <GenericLogo name="NOS" />, <GenericLogo name="Anden Inv." />, <GenericLogo name="Gestión Inm." />,
  ];
  return (
    <section className="py-12 bg-paper border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-9">
          Inmobiliarias y desarrolladoras que ya venden con Tami
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-14 lg:gap-20 animate-marquee">
            {[...clients, ...clients].map((logo, i) => (
              <div key={i} className="shrink-0 text-muted-2 hover:text-ink transition-colors">{logo}</div>
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
function StatsBanner() {
  const stats = [
    { v: 2.6, suffix: 'M', d: 'leads atendidos en LATAM', decimals: 1 },
    { v: 40, suffix: '%', d: 'tasa de interacción', prefix: '', decimals: 0 },
    { v: 20, suffix: '%', d: 'aumento en citas agendadas', prefix: '+', decimals: 0 },
    { v: 10, suffix: 'x', d: 'capacidad de atención', decimals: 0 },
  ];
  return (
    <section className="py-20 bg-paper-2 border-b border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="reveal-init text-center md:text-left" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="font-display text-6xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-none mb-3 text-ink">
                <CountUp end={s.v} decimals={s.decimals} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="text-[13px] text-muted leading-snug max-w-[160px] md:max-w-none mx-auto md:mx-0">{s.d}</p>
            </div>
          ))}
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
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-4 inline-flex items-center gap-2">
          <span className="w-5 h-px bg-accent" /> {eyebrow}
        </div>
        <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] mb-5">
          {title}
        </h2>
        <p className="text-[16px] leading-relaxed text-muted mb-7 max-w-[480px]">
          {description}
        </p>
        {bullets && (
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px]">
                <span className="w-5 h-5 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
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

/* Feature 1: Captura — phone mockup multi-channel */
function FeatureCapture() {
  return (
    <section id="producto" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Cómo trabaja Tami</div>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-tighter leading-[1.05] reveal-init">
            De anuncio en Meta a <span className="italic-serif text-accent" style={{ fontWeight: 500 }}>visita firmada</span>, sola.
          </h2>
        </div>

        <FeatureBlock
          eyebrow="01 — Captura"
          title={<>Todos los canales en <span className="italic-serif">una sola</span> bandeja.</>}
          description="WhatsApp, Instagram, Meta Ads, Urbania, Adondevivir y Nexo. Tami responde en 15 segundos en cualquier canal y deja etiqueta de origen."
          bullets={[
            'WhatsApp Business Cloud API',
            'Sync con Urbania, Adondevivir, Nexo',
            'Etiquetas automáticas de origen',
            'Mensajes directos: atiende números de asesores',
          ]}
          image={<InboxMockup />}
        />
      </div>
    </section>
  );
}

function InboxMockup() {
  const rows = [
    { name: 'Familia Torres', src: 'Facebook Ads', proj: 'Atreo · Barranco', time: '10:42', active: true, color: 'bg-blue-500', initials: 'FT' },
    { name: 'Andrea Gómez', src: 'Urbania', proj: 'Living · Lima Centro', time: '09:15', color: 'bg-emerald-500', initials: 'AG' },
    { name: 'Inversiones MR', src: 'Instagram', proj: 'Kampu · Ate', time: 'Ayer', color: 'bg-pink-500', initials: 'IM' },
    { name: 'Carlos Inversor', src: 'Web Líder', proj: 'Atreo · Premium', time: '11:05', color: 'bg-amber-500', initials: 'CI', badge: 'Alta' },
    { name: 'Jenny Castro', src: 'Adondevivir', proj: 'Cuattro · Comas', time: '08:20', color: 'bg-indigo-500', initials: 'JC' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-3xl overflow-hidden shadow-mega relative">
      {/* Browser top */}
      <div className="bg-paper-2 px-4 py-3 flex items-center gap-2 border-b border-soft">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 max-w-xs mx-auto bg-paper rounded-md py-1 flex items-center justify-center gap-1.5 text-[10px] font-medium text-muted-2">
          <Globe className="w-3 h-3" /> hub.tamibot.com / inbox
        </div>
      </div>
      <div className="px-5 py-3 flex items-center justify-between border-b border-soft">
        <div className="flex items-center gap-2">
          <Inbox className="w-4 h-4 text-accent" />
          <span className="text-[13px] font-bold">Bandeja omnicanal</span>
        </div>
        <span className="text-[11px] text-emerald-700 font-bold inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Tami atendiendo
        </span>
      </div>
      <div className="divide-y divide-soft">
        {rows.map((r, i) => (
          <div key={i} className={`px-5 py-4 flex items-center gap-3 ${r.active ? 'bg-accent-soft/40' : 'hover:bg-paper-2'} transition cursor-pointer`}>
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
      {/* Connection lines decoration */}
      <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none" aria-hidden>
          <path d="M40 30 Q 0 30 0 100 Q 0 170 40 170" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" className="svg-draw" />
          <circle cx="0" cy="100" r="5" fill="var(--accent)" />
          <circle cx="40" cy="30" r="3" fill="var(--accent)" />
          <circle cx="40" cy="170" r="3" fill="var(--accent)" />
        </svg>
      </div>
    </div>
  );
}

/* Feature 2: Califica — laptop dashboard */
function FeatureQualify() {
  return (
    <section className="py-24 lg:py-32 bg-paper-2 border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <FeatureBlock
          eyebrow="02 — Califica"
          title={<>Distingue lo <span className="italic-serif">caliente</span> de lo curioso.</>}
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

/* Feature 3: Schedule — calendar */
function FeatureSchedule() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <FeatureBlock
          eyebrow="03 — Agenda"
          title={<>Visitas que <span className="italic-serif">sí</span> se concretan.</>}
          description="Tami consulta el calendario de tu asesor, propone tres slots, confirma con el lead y dispara recordatorios automáticos. Caída de visitas reducida hasta 30%."
          bullets={[
            'Sync con Google Calendar y GHL',
            'Recordatorios 24h y 2h antes (WhatsApp template)',
            'Confirmación bidireccional con badge de visita',
            'Post-visita: bot pide feedback al lead',
          ]}
          image={<CalendarMockup />}
        />
      </div>
    </section>
  );
}

function CalendarMockup() {
  const days = ['Lun 4', 'Mar 5', 'Mié 6', 'Jue 7', 'Vie 8', 'Sáb 9', 'Dom 10'];
  const events = [
    { day: 1, hour: '10am', client: 'Familia Torres', proj: 'Atreo Apartments', advisor: 'Alejandro G.' },
    { day: 2, hour: '4pm', client: 'Andrea Gómez', proj: 'Living Residencia Club', advisor: 'María C.' },
    { day: 4, hour: '11am', client: 'Inversiones MR', proj: 'Kampu', advisor: 'Carlos V.' },
    { day: 5, hour: '10am', client: 'Jenny Castro', proj: 'Cuattro', advisor: 'Lucía M.' },
    { day: 5, hour: '5pm', client: 'Diego Pérez', proj: 'Club Los Parques', advisor: 'Roberto S.' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-3xl overflow-hidden shadow-mega">
      <div className="bg-paper-2 px-5 py-4 flex items-center justify-between border-b border-soft">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          <span className="text-[13px] font-bold">Agenda semanal · 5 asesores</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-2">May 4 — May 10</span>
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
              <div key={ei} className="bg-accent-soft border border-accent-line rounded-lg p-2.5">
                <div className="text-[10px] font-bold text-accent">{e.hour}</div>
                <div className="text-[11px] font-bold mt-0.5 leading-tight">{e.client}</div>
                <div className="text-[9px] text-muted-2 mt-0.5">{e.proj}</div>
                <div className="text-[9px] text-muted mt-1.5 pt-1.5 border-t border-accent-line/60">👤 {e.advisor}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-paper-2 px-5 py-3 border-t border-soft flex items-center justify-between text-[11px] text-muted">
        <span>5 visitas agendadas esta semana</span>
        <span className="text-accent font-bold">→ 2 nuevas hoy</span>
      </div>
    </div>
  );
}

/* Feature 4: Distribute — only Inmobiliaria */
function FeatureDistribute() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden">
      {/* dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        <FeatureBlock
          eyebrow="04 — Distribuye"
          title={<>Reglas que <span className="italic-serif text-accent">sí</span> escalan al equipo.</>}
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
    { name: 'Alejandro Gamarra', zones: 'Barranco', leads: 6, color: 'bg-rose-500' },
    { name: 'Roberto Salas', zones: 'Arequipa', leads: 9, color: 'bg-amber-500' },
  ];
  return (
    <div className="bg-ink-2 border border-white/10 rounded-3xl p-6 lg:p-7 relative overflow-hidden">
      {/* decorative path */}
      <svg className="absolute top-4 right-4 w-32 h-32 opacity-30" viewBox="0 0 120 120" fill="none" aria-hidden>
        <circle cx="60" cy="60" r="50" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="60" cy="60" r="30" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="60" cy="60" r="6" fill="var(--accent)" />
      </svg>

      <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Reglas activas</div>
      <div className="text-[13px] text-paper/75 mb-6 max-w-[380px]">
        Round-robin con balance de carga + filtro por zona del lead.
      </div>

      <div className="space-y-2.5">
        {advisors.map((a, i) => {
          const max = 15;
          return (
            <div key={i} className="bg-ink rounded-xl border border-white/5 p-3 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${a.color} text-white text-[11px] font-black flex items-center justify-center shrink-0`}>
                {a.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-bold leading-tight">{a.name}</div>
                <div className="text-[10px] text-paper/50 leading-tight mt-0.5">{a.zones}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-[10px] font-bold text-accent tabular-nums">{a.leads} activos</div>
                <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${(a.leads / max) * 100}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between text-[11px] pt-4 border-t border-white/10">
        <span className="text-paper/50">50 leads distribuidos hoy</span>
        <span className="text-accent font-bold inline-flex items-center gap-1">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
          </span>
          Reasignación automática
        </span>
      </div>
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
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-tighter leading-[1.05] reveal-init">
            3 conversaciones <span className="italic-serif">reales</span> de Líder.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          <PhoneCard title="Califica intención" desc="Filtra basura · marca verde">
            <Bubble side="left" delay={100} time="9:14">Vi el ad de Living Residencia Club</Bubble>
            <Bubble side="right" delay={500} time="9:14">¡Hola! Soy Tami 👋. Para encontrarte el match ideal:</Bubble>
            <Bubble side="right" delay={1100} time="9:14">¿Buscas <strong>vivienda</strong> o <strong>inversión</strong>?</Bubble>
            <Bubble side="left" delay={1900} time="9:15">Inversión, hasta US$ 100k</Bubble>
            <Bubble side="right" delay={2700} time="9:15">Perfecto ✅ Marcado <strong>verde</strong>. Te muestro 3 opciones…</Bubble>
          </PhoneCard>

          <PhoneCard title="Agenda visita" desc="Calendar sync · slots vivos" featured>
            <Bubble side="left" delay={100} time="11:02">Quiero conocer Atreo Apartments</Bubble>
            <Bubble side="right" delay={500} time="11:02">¡Listo! Te muestro disponibilidad de Alejandro:</Bubble>
            <Bubble side="right" delay={1100} time="11:02">📅 Sáb 10am · Sáb 4pm · Dom 11am</Bubble>
            <Bubble side="left" delay={1700} time="11:03">Sábado 4pm</Bubble>
            <Bubble side="right" delay={2400} time="11:03">✅ <strong>Confirmado.</strong> Recordatorio 24h antes.</Bubble>
          </PhoneCard>

          <PhoneCard title="Deriva al asesor" desc="Handoff con contexto completo">
            <Bubble side="left" delay={100} time="3:21">¿Aceptan pago internacional? Vivo en España</Bubble>
            <Bubble side="right" delay={500} time="3:21">Para esto te paso con nuestro Director Comercial 🚀</Bubble>
            <Bubble side="right" delay={1100} time="3:21">Hola, soy Martín 👋 Sí aceptamos. Te genero el link de Stripe ahora…</Bubble>
            <div className="bg-accent-soft border border-accent-line rounded-xl px-2.5 py-1.5 text-[9px] text-accent font-semibold msg-anim" style={{ animationDelay: '1900ms' }}>
              ⚡ Handoff registrado · alta intención
            </div>
          </PhoneCard>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ title, desc, featured, children }: any) {
  return (
    <div className={`reveal-init ${featured ? 'lg:-translate-y-4' : ''}`}>
      <PhoneFrame className="w-[230px] mx-auto">
        <div className="flex flex-col h-full">
          <WhatsAppHeader contactName="Tami · Líder" />
          <ChatArea>{children}</ChatArea>
          <ChatInput />
        </div>
      </PhoneFrame>
      <div className="mt-7 max-w-[260px] mx-auto text-center">
        <h3 className="font-display text-xl font-extrabold tracking-tight">{title}</h3>
        <p className="text-[12px] text-muted mt-1.5">{desc}</p>
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
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-tighter leading-[1.05] reveal-init">
            No <span className="italic-serif">cambies</span> tu CRM.<br />Tami se conecta a lo que ya usas.
          </h2>
        </div>

        <div className="bg-paper rounded-3xl border border-soft shadow-card p-8 lg:p-12 mb-6 reveal-init">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-9 text-center">9 CRMs soportados de fábrica</div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-10 items-center justify-items-center text-muted-2">
            <div className="hover:text-ink transition-colors"><SperantLogo /></div>
            <div className="hover:text-ink transition-colors"><EvoltaLogo /></div>
            <div className="hover:text-ink transition-colors"><TokkoLogo /></div>
            <div className="hover:text-orange-500 transition-colors"><HubSpotLogo /></div>
            <div className="hover:text-blue-500 transition-colors"><SalesforceLogo /></div>
            <div className="hover:text-ink transition-colors"><Bitrix24Logo /></div>
            <div className="hover:text-ink transition-colors"><PlanOKLogo /></div>
            <div className="hover:text-emerald-600 transition-colors"><ZohoLogo /></div>
            <div className="hover:text-ink transition-colors"><MicrosoftLogo /></div>
            <div className="text-[11px] font-semibold text-muted-2">+ más</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-paper rounded-3xl border border-soft shadow-card p-7 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-5">Canales</div>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm">💬</span>
                WhatsApp Cloud API
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center text-sm">📸</span>
                Instagram
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm">📘</span>
                Meta Ads
              </span>
              <span className="text-[15px] font-bold inline-flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-paper-2 text-ink flex items-center justify-center text-sm">🌐</span>
                Web Widget
              </span>
            </div>
          </div>
          <div className="bg-paper rounded-3xl border border-soft shadow-card p-7 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-5">Portales públicos · búsqueda externa</div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 text-muted-2">
              <div className="hover:text-ink transition"><UrbaniaPortalLogo /></div>
              <div className="hover:text-ink transition"><AdondevivirPortalLogo /></div>
              <div className="hover:text-ink transition"><NexoPortalLogo /></div>
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
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4 reveal-init">Testimonios</div>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-tighter leading-[1.05] reveal-init">
            Inmobiliarias que pasaron del<br />caos al <span className="italic-serif text-accent">pipeline real</span>.
          </h2>
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
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-tighter leading-[1.05] reveal-init">
            Lo mismo que un <span className="italic-serif">asesor junior</span>.<br />
            Con un equipo entero adentro.
          </h2>
          <p className="text-muted mt-5">14 días gratis · 0% comisión · sin tarjeta para empezar.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <PriceCard
            tag="Para agentes"
            title="Agente Inmobiliario"
            price={350}
            features={[
              'Hasta 1,500 leads / mes',
              'Catálogo hasta 10 propiedades',
              'Sync con Urbania, Adondevivir, Nexo',
              'Integración Sperant, Evolta, Tokko',
              'Panel omnicanal básico',
              'Agendamiento + recordatorios',
              'Cotizador PDF',
            ]}
            cta="Comenzar demo"
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
              'Reglas avanzadas de asignación',
              'Panel Supervisor multiusuario',
              'Envíos masivos · Mensajes directos',
              'Seguimiento configurable',
              'Embudo + atribución de canal',
            ]}
            cta="Hablar con ventas"
            highlighted
          />
        </div>
        <div className="mt-10 max-w-3xl mx-auto bg-paper border border-soft rounded-2xl p-5 text-[12px] text-muted leading-relaxed reveal-init">
          <strong className="text-ink">Costos directo a Meta — transparente:</strong> WhatsApp API saliente $0.0703/lead · entrante gratis · bloque de 500 leads adicionales $50 · cuenta adicional $150/6 meses · contrato mínimo 6 meses (Plan Desarrollo).
        </div>
      </div>
    </section>
  );
}

function PriceCard({ tag, title, price, iva, features, cta, highlighted }: any) {
  return (
    <div className={`reveal-init ${highlighted ? '' : ''}`}>
      <div className={`relative rounded-[2.4rem] p-9 lg:p-10 h-full flex flex-col ${highlighted ? 'bg-ink text-paper border border-ink' : 'bg-paper border border-soft shadow-card'}`}>
        {highlighted ? (
          <div className="absolute top-5 right-5 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
            {tag}
          </div>
        ) : (
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-2">{tag}</div>
        )}
        <h3 className={`font-display text-3xl font-extrabold tracking-tight mb-7 ${highlighted ? 'mt-1' : ''}`}>{title}</h3>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-6xl font-display font-extrabold tracking-tighter">${price}</span>
          <span className={`text-sm font-medium ${highlighted ? 'text-paper/60' : 'text-muted'}`}>/mes</span>
        </div>
        <p className={`text-[11px] mb-7 ${highlighted ? 'text-paper/50' : 'text-muted-2'}`}>USD {iva ? '· + IGV' : ''}</p>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f: string, i: number) => (
            <li key={i} className={`flex items-start gap-3 text-[14px] ${highlighted ? 'text-paper/85' : 'text-ink-2'}`}>
              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${highlighted ? 'text-accent' : 'text-accent'}`} strokeWidth={3} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href={APP_DEMO_URL} className={`block text-center w-full py-3.5 rounded-full font-bold text-sm transition ${highlighted ? 'bg-accent hover:bg-accent-2 text-white' : 'bg-ink text-paper hover:bg-ink-2'}`}>
          {cta}
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-24 lg:py-28 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="relative bg-ink rounded-[2.5rem] overflow-hidden p-10 lg:p-16 reveal-init">
          {/* dotted bg */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ShieldCheck className="w-10 h-10 text-accent mb-6" />
              <h2 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold tracking-tighter leading-[1.05] text-paper mb-5">
                Sube tu primer<br />
                <span className="italic-serif text-accent">brochure</span> hoy.
              </h2>
              <p className="text-paper/60 text-lg leading-relaxed max-w-md">
                Sembramos tu cuenta con tu Proyecto Estrella en 48h. Tami atiende leads reales en 14 días gratis. Si no convierte, no pagas.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <a href={APP_DEMO_URL} className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-2 text-white px-7 py-4 rounded-full font-bold transition shadow-mega">
                Explorar el portal con datos de Líder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="https://wa.me/51995547575?text=Hola%20quiero%20una%20demo%20de%20TamiBot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-paper border border-white/15 hover:bg-white/5 transition">
                <MessageCircle className="w-4 h-4" /> Hablar con ventas por WhatsApp
              </a>
              <span className="text-[11px] text-paper/40 mt-2">+51 995 547 575 · mvelascoo@tamibot.com</span>
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
            <span className="text-[20px] font-display font-extrabold tracking-tighter">tami</span>
            <span className="text-accent text-xl font-display font-extrabold leading-none">.</span>
          </div>
          <p className="text-muted leading-relaxed text-[13px]">
            Vendedora con IA que atiende WhatsApp 24/7 para inmobiliarias en LATAM.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Producto</div>
          <ul className="space-y-2.5 text-muted text-[13px]">
            <li><a href="#producto" className="hover:text-ink">Funciones</a></li>
            <li><a href="#integraciones" className="hover:text-ink">Integraciones</a></li>
            <li><a href="#precios" className="hover:text-ink">Precios</a></li>
            <li><a href={APP_DEMO_URL} className="hover:text-ink">Portal demo →</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-2 mb-4">Datos del demo</div>
          <ul className="space-y-2.5 text-muted text-[13px]">
            <li><a href="https://lider.com.pe" target="_blank" rel="noreferrer" className="hover:text-ink">Líder Grupo Constructor ↗</a></li>
            <li>9 proyectos · Lima + Arequipa</li>
            <li>5 asesores · 8 leads en embudo</li>
            <li>$450k separados</li>
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
