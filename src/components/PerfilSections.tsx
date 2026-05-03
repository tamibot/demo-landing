/**
 * Two dedicated sections, one per profile (Inmobiliarias / Agentes),
 * with deep storytelling, specific benefits, real-world scenarios,
 * and prominent CTAs to "14 días gratis".
 */
import { ArrowRight, Building2, HeartHandshake, Megaphone, Users, BarChart3, ShieldCheck, Search, KeyRound, Calendar, FileText, MessageCircle } from 'lucide-react';
import { AnimatedCheck, FlowArrow, PulsingDot } from './SvgAnimations';

const APP_DEMO_URL = 'https://tamibot.github.io/demo-app/';
const WA_URL = 'https://wa.me/51995547575?text=Hola%20quiero%20mi%20demo%20gratuita%20de%202%20semanas';

export function ParaInmobiliarias() {
  return (
    <section id="para-inmobiliarias" className="py-24 lg:py-32 bg-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-soft rounded-full blur-3xl opacity-50 -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-line text-primary-2 rounded-full px-3 py-1.5 mb-5">
            <Building2 className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Para inmobiliarias y desarrolladoras</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <h2 className="text-[clamp(2.2rem,4.8vw,3.6rem)] font-black tracking-tight leading-[1.05] max-w-[820px]">
                Tu próximo lanzamiento sin equipos saturados ni <span className="underline-curve">leads enfriados</span>.
              </h2>
              <p className="text-[17px] text-muted leading-relaxed mt-5 max-w-[640px]">
                Cuando lanzas un proyecto, los primeros 3 días reciben el 70% de los leads.
                El resto del mes la sala de ventas se enfría y pierdes ROI de tus ads.
                <strong className="text-ink"> Tami atiende todos los leads en 15 segundos</strong>, los califica y los distribuye al equipo correcto.
              </p>
            </div>
            <div className="lg:text-right shrink-0">
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted-2 mb-2">El resultado promedio</div>
              <div className="flex items-baseline gap-3 lg:justify-end">
                <span className="text-5xl font-black text-primary">+32%</span>
                <span className="text-sm text-muted">en volumen separado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid 6-up bento */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <BenefitCard
            icon={Megaphone}
            tag="Lanzamientos"
            title="Envíos masivos pre-aprobados"
            desc="Cargas tu BBDD propia, eliges plantilla con foto/video/PDF y disparas miles de mensajes en 24h. WhatsApp Cloud API directo a Meta."
            stat="+5,000 leads en 24h"
          />
          <BenefitCard
            icon={Users}
            tag="Distribución"
            title="Reparto equitativo automático"
            desc="Round-robin con balance de carga + filtro por zona del lead + por proyecto. Tu gerente comercial entra al chat con badge GERENTE."
            stat="Sin pelear leads"
            featured
          />
          <BenefitCard
            icon={BarChart3}
            tag="Reportería"
            title="Embudo en vivo + atribución"
            desc="Volumen separado, tasa de cierre, costo por lead, conversión por canal y por asesor. Tu director toma decisiones con datos reales."
            stat="Decisiones en tiempo real"
          />
          <BenefitCard
            icon={Building2}
            tag="Multi-proyecto"
            title="Cada proyecto, su propio Tami"
            desc="Branding distinto, equipo distinto, embudo distinto. Tami habla del proyecto Vista del Mar de una forma y de Edificio Aurora de otra."
            stat="Proyectos ilimitados"
          />
          <BenefitCard
            icon={ShieldCheck}
            tag="Supervisor"
            title="Cierre Mágico del gerente"
            desc="Audita conversaciones en tiempo real. Si un asesor se traba con una objeción, entras al chat con badge GERENTE y cierras tú mismo."
            stat="Recupera deals difíciles"
          />
          <BenefitCard
            icon={MessageCircle}
            tag="Re-engagement"
            title="Recupera leads enfriados"
            desc="Mensajes automáticos a 5 min, 2h, 5h y 1 semana. Cuando lanzas la siguiente fase, Tami avisa a los leads que ya tenías."
            stat="x30 cantidad de interesados"
          />
        </div>

        {/* CTA strip — light brand */}
        <div className="bg-paper-3 border border-primary-line rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary-soft rounded-full blur-3xl opacity-60" />
          <div className="relative grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-paper border border-primary-line rounded-full px-3 py-1.5 mb-3 shadow-card">
                <PulsingDot color="var(--secondary)" size={6} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-2">Demo gratuita · 2 semanas</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black mb-2">
                Sembramos tu Proyecto Estrella en 48 horas.
              </h3>
              <p className="text-[14px] text-muted max-w-md">
                Subimos tus brochures, conectamos tu Sperant/Tokko/Evolta y Tami atiende leads reales por 14 días. Si no convierte, no pagas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href={APP_DEMO_URL} className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-2 text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition shadow-cta">
                Comenzar mi demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[14px] text-ink border border-soft hover:border-primary-line hover:bg-paper transition">
                <MessageCircle className="w-4 h-4 text-primary" /> Hablar con ventas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ParaAgentes() {
  return (
    <section id="para-agentes" className="py-24 lg:py-32 bg-paper-2 border-y border-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary-soft rounded-full blur-3xl opacity-50 -translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 bg-secondary-soft border border-secondary/20 text-secondary-2 rounded-full px-3 py-1.5 mb-5">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Para agentes inmobiliarios y agencias</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <h2 className="text-[clamp(2.2rem,4.8vw,3.6rem)] font-black tracking-tight leading-[1.05] max-w-[820px]">
                Vende reventa, alquileres y capta propiedades — <span className="text-secondary-2">sin perder fines de semana</span>.
              </h2>
              <p className="text-[17px] text-muted leading-relaxed mt-5 max-w-[640px]">
                Tu cliente te escribe a las 11pm un domingo. Si respondes el lunes, ya separó con la competencia.
                <strong className="text-ink"> Tami responde en 15 segundos a cualquier hora</strong>, te agenda visitas y deriva sólo los leads calientes a tu WhatsApp.
              </p>
            </div>
            <div className="lg:text-right shrink-0">
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted-2 mb-2">El resultado promedio</div>
              <div className="flex items-baseline gap-3 lg:justify-end">
                <span className="text-5xl font-black text-secondary-2">+20%</span>
                <span className="text-sm text-muted">visitas agendadas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <BenefitCard
            icon={KeyRound}
            tag="Reventa"
            title="Catálogo digital sin Excel"
            desc="Subes tu PDF, link de la web del propietario o pegas tu hoja. Tami estructura tu inventario en minutos y lo presenta con fotos y precio."
            stat="Setup en 48h"
            secondaryColor
          />
          <BenefitCard
            icon={KeyRound}
            tag="Alquileres"
            title="De consulta a contrato firmado"
            desc="Tami filtra inquilinos por presupuesto, mascotas, garante y plazo. Coordina visita, envía contrato modelo y agenda firma."
            stat="Visita en 48h"
            featured
            secondaryColor
          />
          <BenefitCard
            icon={HeartHandshake}
            tag="Captación"
            title="Perfila propietarios que venden"
            desc="Cuando llega un mensaje 'quiero vender mi depa', Tami pregunta zona, m², precio esperado y urgencia. Tú solo vas a la visita técnica."
            stat="Pre-evaluación de precio"
            secondaryColor
          />
          <BenefitCard
            icon={Search}
            tag="Búsqueda externa"
            title="Urbania, Adondevivir, Nexo"
            desc="Cuando no tienes el match perfecto en tu cartera, Tami busca en los 3 portales líderes y te lo presenta como cartera abierta."
            stat="Cero leads desperdiciados"
            secondaryColor
          />
          <BenefitCard
            icon={Calendar}
            tag="Agenda"
            title="Visitas que sí se concretan"
            desc="Sync con tu Google Calendar. Recordatorios 24h y 2h antes en WhatsApp. Reduce no-show 30% según data del rubro."
            stat="-30% visitas caídas"
            secondaryColor
          />
          <BenefitCard
            icon={FileText}
            tag="Cotizador"
            title="PDF profesional en 30 segundos"
            desc="Tu logo, tus colores, datos legales del agente, cuotas estimadas con tasa BCP/Mivivienda. Tami genera y envía a WhatsApp del lead."
            stat="Cotización al instante"
            secondaryColor
          />
        </div>

        <div className="bg-secondary-soft border border-secondary/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-secondary-soft rounded-full blur-3xl opacity-80" />
          <div className="relative grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-paper border border-secondary/30 rounded-full px-3 py-1.5 mb-3 shadow-card">
                <PulsingDot color="var(--secondary)" size={6} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-2">Demo gratuita · 2 semanas</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black mb-2">
                Tu asistente personal · funcionando este sábado.
              </h3>
              <p className="text-[14px] text-muted max-w-md">
                Subimos tus 10 propiedades estrella, conectamos tu WhatsApp Business y Tami empieza a atender este fin de semana. Sin tarjeta para empezar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href={APP_DEMO_URL} className="group inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-2 text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition shadow-cta">
                Comenzar mi demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[14px] text-ink border border-soft hover:border-secondary/40 hover:bg-paper transition">
                <MessageCircle className="w-4 h-4 text-secondary" /> Hablar con ventas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon, tag, title, desc, stat, featured = false, secondaryColor = false,
}: {
  icon: any; tag: string; title: string; desc: string; stat: string;
  featured?: boolean; secondaryColor?: boolean;
}) {
  const accentBg = secondaryColor ? 'bg-secondary-soft' : 'bg-primary-soft';
  const accentText = secondaryColor ? 'text-secondary-2' : 'text-primary-2';
  const accentDot = secondaryColor ? 'bg-secondary' : 'bg-primary';

  return (
    <div className={`bg-paper rounded-3xl p-6 lg:p-7 border transition-all duration-300 hover:-translate-y-1 reveal-init ${featured ? 'border-primary-line shadow-mega' : 'border-soft shadow-card hover:shadow-mega'}`}>
      <div className="flex items-center justify-between mb-5">
        <div className={`w-11 h-11 rounded-2xl ${accentBg} ${accentText} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-2 bg-paper-2 px-2 py-1 rounded">{tag}</span>
      </div>
      <h3 className="text-lg font-black mb-2 leading-snug">{title}</h3>
      <p className="text-[13px] text-muted leading-relaxed mb-5">{desc}</p>
      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
        <span className={`w-1.5 h-1.5 rounded-full ${accentDot}`} />
        <span className={accentText}>{stat}</span>
      </div>
    </div>
  );
}

/* Demo banner section — between perfiles and pricing */
export function DemoFreeBanner() {
  return (
    <section className="py-16 lg:py-20 bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="bg-paper-3 border border-primary-line rounded-3xl p-8 lg:p-12 reveal-init relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary-soft rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-secondary-soft rounded-full blur-3xl opacity-60" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-paper border border-primary-line rounded-full px-3 py-1.5 mb-4 shadow-card">
                <PulsingDot color="var(--secondary)" size={6} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-2">14 días · sin tarjeta · sin compromiso</span>
              </div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight leading-[1.05] mb-3">
                Demo gratuita por <span className="underline-curve">2 semanas completas</span>.
              </h2>
              <p className="text-[15px] text-muted max-w-[600px]">
                Subimos tus primeras 10 propiedades por ti. Conectamos tu WhatsApp en 48h. Tami atiende a tus leads reales por 14 días. <strong className="text-ink">Si no convierte, no pagas un sol.</strong>
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-[13px] text-muted">
                <span className="inline-flex items-center gap-1.5"><AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={0} /> Sin tarjeta de crédito</span>
                <span className="inline-flex items-center gap-1.5"><AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={150} /> Activación en 48 horas</span>
                <span className="inline-flex items-center gap-1.5"><AnimatedCheck className="w-4 h-4" color="var(--primary)" delay={300} /> 0% comisión sobre cierres</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a href={APP_DEMO_URL} className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-2 text-white px-7 py-4 rounded-full font-bold text-[14px] transition shadow-cta whitespace-nowrap">
                Comenzar mis 14 días gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-[14px] text-ink border border-soft hover:border-primary-line hover:bg-primary-soft/40 transition whitespace-nowrap">
                <MessageCircle className="w-4 h-4 text-primary" /> Hablar con ventas
              </a>
              <span className="text-[11px] text-muted-2 text-center">+51 995 547 575</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
