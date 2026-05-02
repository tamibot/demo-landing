type Testimonial = {
  quote: string;
  metric?: string;
  name: string;
  role: string;
  company: string;
  category: string;
  avatarSeed: string;
};

const data: Testimonial[] = [
  {
    quote: "El primer lanzamiento con Tami atendió 1,807 leads en 5 días. El equipo solo cerró las visitas calientes — pasamos del caos a tener pipeline real, no excel.",
    metric: "+32% volumen separado",
    name: "Carlos Mendoza",
    role: "Gerente Comercial",
    company: "Desarrolladora · Lima",
    category: "Desarrolladora",
    avatarSeed: "carlos-m",
  },
  {
    quote: "El primer mes filtró 847 leads basura que antes drenaban a mi asistente comercial. Ahora ella trabaja casos especiales y Tami atiende el resto 24/7.",
    metric: "30-40% interacción",
    name: "Andrea Salazar",
    role: "Directora de Ventas",
    company: "Inmobiliaria mediana · Lima",
    category: "Inmobiliaria",
    avatarSeed: "andrea-s",
  },
  {
    quote: "Antes perdía leads de noche y fines de semana. Tami responde en 15 segundos a cualquier hora y agenda visitas. Cerré 3 propiedades extra el mes pasado.",
    metric: "+20% citas agendadas",
    name: "Diego Vargas",
    role: "Agente Senior",
    company: "Brokerage · Surco",
    category: "Agente",
    avatarSeed: "diego-v",
  },
];

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-paper border border-soft rounded-3xl p-7 lg:p-8 shadow-card flex flex-col h-full">
      <svg className="w-7 h-6 text-primary mb-5" viewBox="0 0 32 24" fill="currentColor" aria-hidden>
        <path d="M0 24V12C0 5.4 4.8 0.8 12 0L13 4C8.4 4.6 5.6 7.4 5.6 12H12V24H0ZM18.4 24V12C18.4 5.4 23.2 0.8 30.4 0L31.4 4C26.8 4.6 24 7.4 24 12H30.4V24H18.4Z"/>
      </svg>
      <p className="text-[17px] leading-relaxed text-ink-2 mb-6 flex-1">
        "{t.quote}"
      </p>
      {t.metric && (
        <div className="inline-flex items-center gap-1.5 bg-primary-soft text-primary-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-6 self-start">
          <span className="w-1 h-1 rounded-full bg-primary" /> {t.metric}
        </div>
      )}
      <div className="flex items-center gap-3 pt-5 border-t border-soft">
        <img
          src={`https://api.dicebear.com/9.x/personas/svg?seed=${t.avatarSeed}&backgroundColor=FAF5FF,F0FDFA`}
          alt={t.name}
          className="w-11 h-11 rounded-full border border-soft"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold leading-tight">{t.name}</div>
          <div className="text-[12px] text-muted leading-tight mt-0.5">{t.role} · {t.company}</div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-2 px-2 py-1 bg-paper-2 rounded">
          {t.category}
        </span>
      </div>
    </article>
  );
}

export function TestimonialsGrid() {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {data.map(t => <TestimonialCard key={t.name} t={t} />)}
    </div>
  );
}
