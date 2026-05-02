import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Sparkles, Zap, Search, Calendar, BarChart3, Users, FileText, Shield, ChevronRight } from 'lucide-react';
import { CountUp, useReveal } from './components/CountUp';
import {
  PhoneFrame, WhatsAppHeader, ChatArea, Bubble, TypingBubble, ChatInput, PdfAttachment, PropertyCard
} from './components/PhoneMockup';
import {
  HubSpotLogo, SalesforceLogo, MicrosoftLogo, ZohoLogo, Bitrix24Logo,
  SperantLogo, EvoltaLogo, TokkoLogo, PlanOKLogo,
  LiderClientLogo, CosapiClientLogo, RemaxClientLogo, GenericLogo,
  UrbaniaPortalLogo, AdondevivirPortalLogo, NexoPortalLogo,
} from './components/Logos';

const APP_DEMO_URL = 'https://tamibot.github.io/demo-app/';

export default function App() {
  useEffect(() => {
    // initialize reveal-on-scroll for elements with .reveal-init
    const els = document.querySelectorAll('.reveal-init');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-paper text-ink">
      <DemoBanner />
      <Nav />
      <Hero />
      <ClientsStrip />
      <ProblemSection />
      <PhoneGallery />
      <ProcessFlow />
      <FeaturesBento />
      <CrmCloud />
      <Stats />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function DemoBanner() {
  return (
    <div className="relative bg-ink text-white text-[11px] font-medium py-2.5 text-center px-4 z-50">
      <span className="inline-flex items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/50">Demo</span>
        <span>Sembrado con datos reales de Líder Grupo Constructor.</span>
        <a href={APP_DEMO_URL} className="text-gradient font-bold inline-flex items-center gap-1 hover:underline underline-offset-4">
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
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-[26px] font-display font-extrabold tracking-tight">tami</span>
          <span className="w-2 h-2 rounded-full bg-gradient-tami animate-pulse" />
        </a>
        <div className="hidden md:flex items-center gap-9 text-[13px] font-semibold text-ink/70">
          <a href="#features" className="hover:text-ink transition">Producto</a>
          <a href="#integrations" className="hover:text-ink transition">Integraciones</a>
          <a href="#clients" className="hover:text-ink transition">Clientes</a>
          <a href="#pricing" className="hover:text-ink transition">Precios</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={APP_DEMO_URL} className="hidden sm:inline-flex text-[13px] font-bold text-ink/70 hover:text-ink px-3 py-2">Iniciar sesión</a>
          <a href={APP_DEMO_URL} className="inline-flex items-center gap-1 bg-ink hover:bg-ink/90 text-white text-[13px] font-bold pl-4 pr-3 py-2 rounded-full transition group">
            Ver portal
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
    <section className="relative overflow-hidden grain">
      <div className="gradient-mesh" />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        {/* LEFT: copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-soft rounded-full px-3 py-1.5 mb-7 shadow-soft reveal-init">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-ink/70">+2.6M leads inmobiliarios atendidos</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.4rem)] leading-[0.98] font-extrabold tracking-tighter mb-6 reveal-init">
            La <span className="text-gradient">vendedora con IA</span><br />
            que cierra ventas<br />
            en <span className="relative">WhatsApp
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2,9 Q100,-2 198,8" stroke="url(#underline)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline" x1="0" x2="1">
                    <stop offset="0" stopColor="#3B5CDD" />
                    <stop offset="0.5" stopColor="#9333EA" />
                    <stop offset="1" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>.
          </h1>
          <p className="text-[17px] text-ink/65 leading-relaxed max-w-md mb-9 reveal-init">
            Tami atiende, califica y agenda visitas <strong className="text-ink">24/7</strong>.
            Tu equipo cierra. Probada con Líder, Cosapi, RE/MAX y +40 inmobiliarias en LATAM.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-10 reveal-init">
            <a href={APP_DEMO_URL} className="group inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition shadow-soft">
              Explorar el portal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-[14px] text-ink/80 hover:text-ink transition">
              Ver precios
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-6 text-[12px] text-ink/55 reveal-init">
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> 14 días gratis</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> 0% comisión</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Onboarding 48h</span>
          </div>
        </div>

        {/* RIGHT: phone mockup with Lider conversation */}
        <div className="relative reveal-init">
          <PhoneFrame className="w-[270px] sm:w-[300px] mx-auto">
            <div className="flex flex-col h-full">
              <WhatsAppHeader contactName="Tami · Líder Inmobiliaria" status="escribiendo…" avatar="🤖" />
              <ChatArea>
                <Bubble side="left" delay={200} time="10:41">
                  Hola, busco depa de 3 dorms en Ate, hasta S/ 280k 🏠
                </Bubble>
                <Bubble side="right" delay={900} time="10:41">
                  ¡Hola! Soy Tami de Líder 👋 Tengo el match perfecto:
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
                  Te derivo con <strong>Carlos Vega</strong>, asesor de zona Este. 👨‍💼
                </Bubble>
              </ChatArea>
              <ChatInput />
            </div>
          </PhoneFrame>

          {/* Floating chips */}
          <div className="hidden md:block absolute -left-12 top-16 bg-white shadow-mega border border-soft rounded-2xl px-4 py-3 animate-float">
            <div className="text-[9px] uppercase tracking-widest text-ink/40 font-bold mb-1">Tasa de respuesta</div>
            <div className="text-lg font-display font-extrabold text-ink leading-none">15 seg</div>
          </div>
          <div className="hidden md:flex absolute -right-12 bottom-32 bg-white shadow-mega border border-soft rounded-2xl px-4 py-3 animate-float-slow items-center gap-3">
            <div className="w-9 h-9 bg-gradient-tami rounded-xl flex items-center justify-center text-white text-base">⚡</div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-ink/40 font-bold">Productividad</div>
              <div className="text-base font-display font-extrabold leading-none">×4 vs humano</div>
            </div>
          </div>
          <div className="hidden lg:block absolute -bottom-2 left-8 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-soft uppercase tracking-wider">
            +20% citas
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function ClientsStrip() {
  const clients = [
    { logo: <LiderClientLogo />, name: 'Líder' },
    { logo: <CosapiClientLogo />, name: 'Cosapi' },
    { logo: <RemaxClientLogo />, name: 'RE/MAX' },
    { logo: <GenericLogo name="Grupo T&C" />, name: 'T&C' },
    { logo: <GenericLogo name="LIBRE" />, name: 'LIBRE' },
    { logo: <GenericLogo name="LIEN" />, name: 'LIEN' },
    { logo: <GenericLogo name="Comunidad" />, name: 'Comunidad' },
    { logo: <GenericLogo name="Barqueros" />, name: 'Barqueros' },
    { logo: <GenericLogo name="Innova&Build" />, name: 'Innova' },
    { logo: <GenericLogo name="NOS" />, name: 'NOS' },
    { logo: <GenericLogo name="Anden Inv." />, name: 'Anden' },
    { logo: <GenericLogo name="Gestión Inm." />, name: 'Gestión' },
  ];
  return (
    <section id="clients" className="py-12 lg:py-16 bg-paper border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-8">
          Confían en Tami para vender en LATAM
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 lg:gap-16 animate-marquee">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="shrink-0 text-ink/40 hover:text-ink transition-colors">
                {c.logo}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function ProblemSection() {
  const items = [
    { v: '70%', l: 'leads contactan fuera de horario', e: '😴' },
    { v: '1-2%', l: 'reciben respuesta a tiempo', e: '🤡' },
    { v: '+10', l: 'días promedio sin seguimiento', e: '🥺' },
    { v: '92%', l: 'descartado después del día 3', e: '💸', dark: true },
  ];
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 reveal-init">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-4">El problema</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tighter leading-[1.05]">
            Pierdes <span className="text-gradient">oportunidades</span> por una mala gestión comercial.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`reveal-init relative p-7 rounded-3xl border ${it.dark ? 'bg-ink text-white border-ink' : 'bg-white border-soft shadow-soft'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-5 right-5 text-2xl">{it.e}</div>
              <div className={`font-display text-5xl font-extrabold tracking-tighter ${it.dark ? '' : 'text-gradient'}`}>{it.v}</div>
              <p className={`mt-3 text-sm leading-snug ${it.dark ? 'text-white/70' : 'text-ink/60'}`}>{it.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function PhoneGallery() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="gradient-mesh opacity-50" />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-init">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-4">Tami en acción</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tighter leading-[1.05]">
            Mira a Tami atender <span className="text-gradient">leads reales</span> de Líder.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          <PhoneCard
            title="1. Captura y califica"
            desc="Tami pregunta zona, presupuesto, dorms e intención. Filtra basura, marca verde/blanco."
            color="from-blue-500 to-purple-500"
          >
            <Bubble side="left" delay={100} time="9:14">Vi el ad de Living Residencia Club</Bubble>
            <Bubble side="right" delay={500} time="9:14">¡Hola! Soy Tami 👋. Para encontrarte el match ideal:</Bubble>
            <Bubble side="right" delay={1100} time="9:14">¿Buscas <strong>vivienda</strong> o <strong>inversión</strong>?</Bubble>
            <Bubble side="left" delay={1900} time="9:15">Inversión, hasta US$ 100k</Bubble>
            <Bubble side="right" delay={2700} time="9:15">Perfecto ✅ Marcado como <strong>verde</strong>. Te muestro 3 opciones que match…</Bubble>
          </PhoneCard>

          <PhoneCard
            title="2. Agenda la visita"
            desc="Consulta calendario del asesor, propone slots, confirma con ambas partes y crea el evento."
            color="from-purple-500 to-pink-500"
            featured
          >
            <Bubble side="left" delay={100} time="11:02">Quiero conocer Atreo Apartments</Bubble>
            <Bubble side="right" delay={500} time="11:02">¡Listo! Te muestro disponibilidad de Alejandro:</Bubble>
            <Bubble side="right" delay={1100} time="11:02">📅 Sáb 10am · Sáb 4pm · Dom 11am</Bubble>
            <Bubble side="left" delay={1700} time="11:03">Sábado 4pm</Bubble>
            <Bubble side="right" delay={2400} time="11:03">✅ <strong>Confirmado.</strong> Te enviaré recordatorio 24h antes.</Bubble>
          </PhoneCard>

          <PhoneCard
            title="3. Deriva al asesor"
            desc="Cuando llega el momento, Tami da un paso al costado y entrega el chat con todo el contexto."
            color="from-pink-500 to-orange-400"
          >
            <Bubble side="left" delay={100} time="3:21">¿Aceptan pago internacional? Vivo en España</Bubble>
            <Bubble side="right" delay={500} time="3:21">Para esto te paso con nuestro Director Comercial 🚀</Bubble>
            <Bubble side="right" delay={1100} time="3:21">Hola, soy Martín 👋 Sí aceptamos. Te genero el link de Stripe ahora…</Bubble>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-2.5 py-1.5 text-[9px] text-amber-700 font-semibold msg-anim" style={{ animationDelay: '1900ms' }}>
              ⚡ Handoff registrado · Score: alta intención
            </div>
          </PhoneCard>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ title, desc, color, featured, children }: any) {
  return (
    <div className={`relative reveal-init ${featured ? 'lg:-translate-y-6' : ''}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-[2.4rem] opacity-20 blur-2xl scale-95`} />
      <PhoneFrame className="w-[230px] mx-auto">
        <div className="flex flex-col h-full">
          <WhatsAppHeader contactName="Tami · Líder" />
          <ChatArea>{children}</ChatArea>
          <ChatInput />
        </div>
      </PhoneFrame>
      <div className="mt-7 max-w-[280px] mx-auto text-center">
        <h3 className="font-display text-xl font-extrabold tracking-tight">{title}</h3>
        <p className="text-sm text-ink/60 mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function ProcessFlow() {
  const steps = [
    { n: 'Captura', desc: 'Lead entra desde Meta, Google, Urbania, Adondevivir, Nexo o tu web.', icon: Sparkles },
    { n: 'Califica', desc: 'Tami pregunta zona, presupuesto, intención. Distingue inversión de vivienda.', icon: Search },
    { n: 'Match', desc: 'Cruza con tu catálogo Sperant/Tokko/Evolta + portales si falta inventario.', icon: Zap },
    { n: 'Agenda', desc: 'Visitas a piloto en el calendario del asesor + recordatorios automáticos.', icon: Calendar },
    { n: 'Deriva', desc: 'Pasa al asesor humano con todo el contexto cuando hay alta intención.', icon: Users },
    { n: 'Reporta', desc: 'Embudo en vivo, atribución de canal, conversión por proyecto y asesor.', icon: BarChart3 },
  ];
  return (
    <section className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(147,51,234,0.4) 0, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,92,221,0.3) 0, transparent 50%)'
      }} />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 reveal-init">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/45 mb-4">Cómo trabaja Tami</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tighter leading-[1.05]">
            De anuncio en Meta<br />a <span className="text-gradient">visita firmada</span>, sola.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-ink p-8 group hover:bg-white/[0.04] transition reveal-init" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-gradient-tami transition">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Paso {i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight mb-3">{s.n}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function FeaturesBento() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 reveal-init">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-4">Plataforma</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tighter leading-[1.05]">
            Todo en un solo portal.<br /><span className="text-gradient">Tu equipo, tu marca, tu CRM.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Big feature - inbox */}
          <div className="md:col-span-4 md:row-span-2 bg-white border border-soft rounded-3xl p-8 lg:p-10 shadow-soft reveal-init relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-100/60 via-pink-100/40 to-transparent rounded-full blur-3xl -translate-y-12 translate-x-12" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-lavender text-purple-700 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-5">
                <MessageCircle className="w-3 h-3" /> Bandeja Omnicanal
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
                Todos tus canales en una sola pantalla.
              </h3>
              <p className="text-ink/60 max-w-md leading-relaxed mb-8">
                WhatsApp, Instagram, Meta Ads, Urbania y portales con etiquetas automáticas de origen. Supervisa, asigna e interviene en vivo.
              </p>
              <InboxMockup />
            </div>
          </div>

          {/* Feature: trazabilidad */}
          <div className="md:col-span-2 bg-ink text-white rounded-3xl p-8 reveal-init relative overflow-hidden">
            <BarChart3 className="w-5 h-5 mb-4 text-white/60" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight mb-3">
              Embudo en <span className="text-gradient">tiempo real</span>
            </h3>
            <p className="text-sm text-white/60 mb-6">Trazabilidad completa por proyecto, canal y asesor.</p>
            <FunnelMini />
          </div>

          {/* Feature: search */}
          <div className="md:col-span-2 bg-white border border-soft rounded-3xl p-8 shadow-soft reveal-init">
            <Search className="w-5 h-5 mb-4 text-purple-600" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight mb-3">
              Busca en portales<br />cuando falta inventario
            </h3>
            <p className="text-sm text-ink/60">Urbania, Adondevivir y Nexo. Cache 24h. Disclaimer al lead.</p>
          </div>

          {/* Feature: docs */}
          <div className="md:col-span-3 bg-white border border-soft rounded-3xl p-8 shadow-soft reveal-init">
            <FileText className="w-5 h-5 mb-4 text-blue-600" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight mb-3">
              Sube PDF, URL o Excel<br /><span className="text-gradient">y Tami estructura.</span>
            </h3>
            <p className="text-sm text-ink/60">Brochures, sitios web, hojas de proyecto. La IA reconoce tipologías, m², precios, tabla de unidades.</p>
          </div>

          {/* Feature: distribución */}
          <div className="md:col-span-3 bg-white border border-soft rounded-3xl p-8 shadow-soft reveal-init">
            <Users className="w-5 h-5 mb-4 text-emerald-600" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight mb-3">
              Distribución entre asesores<br />sin pelear leads.
            </h3>
            <p className="text-sm text-ink/60">Round-robin, por zona, por carga, por proyecto. Tu gerente entra al chat con badge GERENTE en alta intención.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InboxMockup() {
  const rows = [
    { name: 'Familia Torres', src: 'Facebook Ads', proj: 'Atreo · Barranco', time: '10:42', active: true, color: 'bg-blue-500' },
    { name: 'Andrea Gómez', src: 'Urbania', proj: 'Living · Centro', time: '09:15', color: 'bg-emerald-500' },
    { name: 'Inversiones MR', src: 'Instagram', proj: 'Kampu · Ate', time: 'Ayer', color: 'bg-pink-500' },
    { name: 'Carlos Inversor', src: 'Web Líder', proj: 'Atreo · Premium', time: '11:05', color: 'bg-amber-500', badge: 'Alta' },
  ];
  return (
    <div className="bg-paper border border-soft rounded-2xl overflow-hidden">
      <div className="bg-white border-b border-soft px-4 py-2.5 flex items-center justify-between text-[10px] text-ink/50 font-semibold">
        <span>● Bandeja · 4 conversaciones</span>
        <span className="text-emerald-600">● 3 nuevas</span>
      </div>
      <div className="divide-y divide-soft">
        {rows.map((r, i) => (
          <div key={i} className={`px-4 py-3 flex items-center gap-3 ${r.active ? 'bg-lavender' : ''}`}>
            <div className={`w-8 h-8 rounded-full ${r.color} text-white text-[10px] font-bold flex items-center justify-center`}>
              {r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold truncate">{r.name}</span>
                <span className="text-[9px] text-ink/40">{r.time}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-white border border-soft text-ink/60 px-1.5 py-0.5 rounded">{r.src}</span>
                <span className="text-[9px] text-ink/50 truncate">{r.proj}</span>
                {r.badge && <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{r.badge}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FunnelMini() {
  const stages = [
    { l: 'Nuevos leads', n: 1407, w: 100 },
    { l: 'Calificados', n: 845, w: 60 },
    { l: 'Visitas', n: 312, w: 22 },
    { l: 'Separaciones', n: 105, w: 8 },
  ];
  return (
    <div className="space-y-2.5">
      {stages.map((s, i) => (
        <div key={i}>
          <div className="flex items-center justify-between text-[10px] mb-1">
            <span className="font-semibold text-white/70">{s.l}</span>
            <span className="font-bold tabular-nums">{s.n.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-tami rounded-full transition-all duration-1000" style={{ width: `${s.w}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function CrmCloud() {
  return (
    <section id="integrations" className="py-24 lg:py-32 bg-lavender">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-init">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-4">Integraciones</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tighter leading-[1.05]">
            No cambies tu CRM.<br /><span className="text-gradient">Tami se conecta a lo que ya usas.</span>
          </h2>
        </div>

        {/* CRMs grid */}
        <div className="bg-white rounded-3xl border border-soft shadow-soft p-8 lg:p-12 mb-6 reveal-init">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-8 text-center">9 CRMs soportados de fábrica</div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center text-ink/55">
            <div className="hover:text-ink transition-colors"><SperantLogo /></div>
            <div className="hover:text-ink transition-colors"><EvoltaLogo /></div>
            <div className="hover:text-ink transition-colors"><TokkoLogo /></div>
            <div className="hover:text-orange-500 transition-colors"><HubSpotLogo /></div>
            <div className="hover:text-blue-500 transition-colors"><SalesforceLogo /></div>
            <div className="hover:text-ink transition-colors"><Bitrix24Logo /></div>
            <div className="hover:text-ink transition-colors"><PlanOKLogo /></div>
            <div className="hover:text-emerald-600 transition-colors"><ZohoLogo /></div>
            <div className="hover:text-ink transition-colors"><MicrosoftLogo /></div>
            <div className="text-[11px] font-semibold text-ink/40">+más</div>
          </div>
        </div>

        {/* Channels + portals */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-soft shadow-soft p-8 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-5">Canales</div>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-5 text-ink/65">
              <span className="text-[15px] font-bold">📱 WhatsApp Cloud API</span>
              <span className="text-[15px] font-bold">📸 Instagram</span>
              <span className="text-[15px] font-bold">📘 Meta Ads</span>
              <span className="text-[15px] font-bold">🌐 Web Widget</span>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-soft shadow-soft p-8 reveal-init">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-5">Portales públicos (búsqueda externa)</div>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-ink/55">
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
function Stats() {
  const stats = [
    { v: 2.6, suffix: 'M', d: 'Leads atendidos en LATAM', decimals: 1 },
    { v: 40, suffix: '%', d: 'Tasa de interacción', decimals: 0, prefix: '' },
    { v: 20, suffix: '%', d: 'Aumento en citas agendadas', decimals: 0, prefix: '+' },
    { v: 10, suffix: 'x', d: 'Capacidad de atención', decimals: 0 },
  ];
  return (
    <section className="py-24 lg:py-32 bg-paper border-y border-soft">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="reveal-init text-center md:text-left" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-display text-6xl lg:text-7xl font-extrabold tracking-tighter mb-3">
                <span className="text-gradient">
                  <CountUp end={s.v} decimals={s.decimals} suffix={s.suffix} prefix={s.prefix} />
                </span>
              </div>
              <p className="text-sm text-ink/60 leading-snug">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/45 mb-4">Precios</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold tracking-tighter leading-[1.05]">
            Lo mismo que un asesor.<br /><span className="text-gradient">Con un equipo entero adentro.</span>
          </h2>
          <p className="text-ink/60 mt-5 leading-relaxed">14 días gratis · 0% comisión sobre cierres · Sin tarjeta para empezar.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PriceCard
            tag="Para agentes"
            title="Agente Inmobiliario"
            price={350}
            features={[
              'Hasta 1,500 leads gestionados/mes',
              'Catálogo hasta 10 propiedades',
              'Sync con Urbania, Adondevivir, Nexo',
              'Integración con Sperant, Evolta, Tokko',
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
              'Módulo Proyectos Nuevos (brochures)',
              'Reglas de asignación avanzadas',
              'Panel Supervisor multiusuario',
              'Envíos masivos · Mensajes directos',
              'Seguimiento automático configurable',
              'Embudo en vivo + atribución de canal',
            ]}
            cta="Hablar con ventas"
            highlighted
          />
        </div>
        <div className="mt-10 max-w-3xl mx-auto bg-lavender border border-soft rounded-2xl p-5 text-[12px] text-ink/65 leading-relaxed reveal-init">
          <strong className="text-ink">Costos directo a Meta (transparente):</strong> WhatsApp API saliente $0.0703/lead · Lead entrante gratis. Bloque de 500 leads adicionales $50 · Cuenta adicional $150/6 meses · Contrato mínimo 6 meses (Plan Desarrollo).
        </div>
      </div>
    </section>
  );
}

function PriceCard({ tag, title, price, iva, features, cta, highlighted }: any) {
  return (
    <div className={`relative reveal-init ${highlighted ? 'lg:-translate-y-3' : ''}`}>
      {highlighted && <div className="absolute inset-0 bg-gradient-tami rounded-[2.4rem] blur-2xl opacity-15 scale-95" />}
      <div className={`relative rounded-[2.4rem] p-9 lg:p-11 ${highlighted ? 'bg-ink text-white' : 'bg-white border border-soft shadow-soft'}`}>
        {highlighted && (
          <div className="absolute top-0 right-9 -translate-y-1/2 bg-gradient-tami text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
            {tag}
          </div>
        )}
        {!highlighted && (
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40 mb-2">{tag}</div>
        )}
        <h3 className={`font-display text-3xl font-extrabold tracking-tight mb-7 ${highlighted ? 'mt-1' : ''}`}>{title}</h3>
        <div className={`flex items-baseline gap-2 mb-1 ${highlighted ? 'text-white' : ''}`}>
          <span className="text-6xl font-display font-extrabold tracking-tighter">${price}</span>
          <span className={`text-sm font-medium ${highlighted ? 'text-white/60' : 'text-ink/50'}`}>/mes</span>
        </div>
        <p className={`text-[11px] mb-7 ${highlighted ? 'text-white/50' : 'text-ink/45'}`}>USD {iva ? '· + IGV' : ''}</p>
        <ul className="space-y-3 mb-8">
          {features.map((f: string, i: number) => (
            <li key={i} className={`flex items-start gap-3 text-sm ${highlighted ? 'text-white/85' : 'text-ink/75'}`}>
              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${highlighted ? 'text-pink-300' : 'text-purple-600'}`} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href={APP_DEMO_URL} className={`block text-center w-full py-3.5 rounded-full font-bold text-sm transition ${highlighted ? 'bg-white text-ink hover:bg-white/90' : 'bg-ink text-white hover:bg-ink/90'}`}>
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
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-400 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20 translate-y-1/3" />
          </div>
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Shield className="w-10 h-10 text-white/30 mb-6" />
              <h2 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold tracking-tighter leading-[1.05] text-white mb-5">
                Sube tu primer<br />
                <span className="text-gradient">brochure hoy.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                Sembramos tu cuenta con tu Proyecto Estrella en 48h. Tami atiende leads reales en 14 días gratis. Si no convierte, no pagas.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <a href={APP_DEMO_URL} className="group inline-flex items-center gap-2 bg-white text-ink px-7 py-4 rounded-full font-bold transition shadow-lg hover:scale-[1.02]">
                Explorar el portal con datos de Líder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="https://wa.me/51995547575?text=Hola%20quiero%20una%20demo%20de%20TamiBot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 transition">
                <MessageCircle className="w-4 h-4" /> Hablar con ventas por WhatsApp
              </a>
              <span className="text-[11px] text-white/40 mt-2">+51 995 547 575 · mvelascoo@tamibot.com</span>
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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[20px] font-display font-extrabold tracking-tight">tami</span>
            <span className="w-2 h-2 rounded-full bg-gradient-tami" />
          </div>
          <p className="text-ink/55 leading-relaxed text-[13px]">
            Vendedora con IA que atiende WhatsApp 24/7 para inmobiliarias en LATAM.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40 mb-4">Producto</div>
          <ul className="space-y-2.5 text-ink/65 text-[13px]">
            <li><a href="#features" className="hover:text-ink">Funciones</a></li>
            <li><a href="#integrations" className="hover:text-ink">Integraciones</a></li>
            <li><a href="#pricing" className="hover:text-ink">Precios</a></li>
            <li><a href={APP_DEMO_URL} className="hover:text-ink">Portal demo →</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40 mb-4">Datos del demo</div>
          <ul className="space-y-2.5 text-ink/65 text-[13px]">
            <li><a href="https://lider.com.pe" target="_blank" rel="noreferrer" className="hover:text-ink">Líder Grupo Constructor ↗</a></li>
            <li>9 proyectos · Lima + Arequipa</li>
            <li>5 asesores · 8 leads en embudo</li>
            <li>KPIs: $450k separados</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40 mb-4">Contacto</div>
          <ul className="space-y-2.5 text-ink/65 text-[13px]">
            <li>+51 995 547 575</li>
            <li>mvelascoo@tamibot.com</li>
            <li><a href="https://tamibot.com" target="_blank" rel="noreferrer" className="hover:text-ink">tamibot.com (producción) ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto pt-10 mt-10 border-t border-soft text-[11px] text-ink/40 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span>🧪 Demo en GitHub Pages · No afecta producción</span>
        <span>© 2026 TamiBot · Hecho con cuidado en Lima</span>
      </div>
    </footer>
  );
}
