import { ArrowRight, Check, MessageCircle, Smartphone, Zap, BarChart3, Users, Calendar, FileText, Search } from 'lucide-react';

const APP_DEMO_URL = 'https://tamibot.github.io/demo-app/';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-400 text-white text-center py-2 text-xs font-bold tracking-wide">
        🧪 DEMO LANDING — Datos sembrados de Líder Grupo Constructor · Probar el portal: <a className="underline ml-1" href={APP_DEMO_URL} target="_blank" rel="noreferrer">app demo →</a>
      </div>

      <Nav />
      <Hero />
      <Stats />
      <ProcessFlow />
      <ChannelsSection />
      <Features />
      <CRMs />
      <Pricing />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-black gradient-text">TamiBot</a>
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-700">
          <a href="#features">Funciones</a>
          <a href="#crms">Integraciones</a>
          <a href="#pricing">Precios</a>
          <a href={APP_DEMO_URL} target="_blank" rel="noreferrer" className="text-purple-600">Probar Portal →</a>
        </div>
        <a href={APP_DEMO_URL} target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition">
          Demo Portal
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-lavender pt-20 pb-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full text-xs font-bold text-purple-700 mb-6 shadow-sm">
            🏗️ Sector Inmobiliario · Demo con Líder Grupo Constructor
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-[1.05]">
            <span className="gradient-text">¡Hola!</span><br />
            <span className="text-gray-900">Soy Tami</span>
          </h1>
          <p className="text-xl text-gray-700 mb-2 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            La mejor vendedora virtual de WhatsApp
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-md">
            Atiendo, califico y agendo visitas 24/7. Tu equipo cierra. Probada con +2.6M leads inmobiliarios en LATAM.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={APP_DEMO_URL} target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-full font-bold inline-flex items-center gap-2 shadow-xl shadow-purple-200 transition">
              Ver portal con datos de Líder
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="border-2 border-gray-200 hover:border-purple-200 px-7 py-3.5 rounded-full font-bold inline-flex items-center gap-2 transition">
              Ver precios
            </a>
          </div>
        </div>
        <TamiAvatar />
      </div>
    </section>
  );
}

function TamiAvatar() {
  return (
    <div className="relative flex justify-center">
      <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center text-9xl">
        👩🏻‍💼
      </div>
      <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-2xl shadow-xl">
        <MessageCircle className="w-6 h-6" />
      </div>
      <div className="absolute bottom-8 -left-8 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-[10px] font-bold text-gray-400 uppercase">Tasa Respuesta</div>
        <div className="text-sm font-black">Inmediata</div>
      </div>
      <div className="absolute top-12 -right-12 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-[10px] font-bold text-gray-400 uppercase">Productividad</div>
        <div className="text-sm font-black">x4 vs humano</div>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: '70%', label: 'leads', desc: 'contactan fuera de horario laboral', icon: '😴', dark: false },
    { value: '1-2%', label: 'responde', desc: 'los demás dejan en visto', icon: '🤡', dark: false },
    { value: '+10', label: 'días', desc: 'venta larga, no se realiza seguimiento constante', icon: '🥺', dark: false },
    { value: '92%', label: 'descartado', desc: 'después del día 3. El 65% compró otro producto', icon: '💸', dark: true },
  ];
  return (
    <section className="py-20 bg-lavender px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="gradient-text">Pierdes oportunidades</span> por una<br />mala gestión comercial
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className={`p-6 rounded-3xl ${s.dark ? 'bg-gray-900 text-white' : 'bg-white'} shadow-sm`}>
              <div className="text-5xl font-black mb-2">{s.value}</div>
              <div className="font-bold text-lg mb-2">{s.label}</div>
              <div className={`text-sm ${s.dark ? 'text-gray-300' : 'text-gray-500'} mb-3`}>{s.desc}</div>
              <span className="text-2xl">{s.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessFlow() {
  const steps = [
    { n: 1, title: 'Captura el lead', desc: 'De todo canal de ingreso', icon: '📥' },
    { n: 2, title: 'Contacta', desc: 'Inicia conversación', icon: '💬' },
    { n: 3, title: 'Información y dudas', desc: 'Seguimiento y filtro', icon: '🔍' },
    { n: 4, title: 'Deriva con asesores', desc: 'Optimiza tu tiempo', icon: '🤝' },
  ];
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="gradient-text">Automatiza tu atención</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-lavender p-8 rounded-3xl">
              <div className="text-5xl mb-4">{s.icon}</div>
              <div className="text-sm font-bold text-purple-600 mb-2">PASO {s.n}</div>
              <h3 className="text-xl font-black mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChannelsSection() {
  return (
    <section className="py-20 bg-lavender px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          <span className="gradient-text">Expertos en conversión</span> a venta
        </h2>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          Conectamos todos los canales de captación de leads inmobiliarios.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-3xl mx-auto mb-12">
          {['Instagram', 'WhatsApp', 'Facebook', 'TikTok', 'Google', 'Web'].map((c) => (
            <div key={c} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-2">{c === 'Instagram' ? '📸' : c === 'WhatsApp' ? '💬' : c === 'Facebook' ? '📘' : c === 'TikTok' ? '🎵' : c === 'Google' ? '🔍' : '🌐'}</div>
              <div className="text-sm font-bold">{c}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-2xl font-black gradient-text">x7 más interacción</div>
          <div className="text-2xl font-black gradient-text">70% más barato</div>
          <div className="text-2xl font-black gradient-text">x3 más conversión</div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Disponibilidad 24/7', desc: 'Resuelve dudas al instante mientras descansas. Filtra a los verdaderamente interesados.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Olvídate de tareas manuales', desc: 'Guarda contactos, da seguimiento, deriva entre asesores. Yo me encargo de todo.' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Agendamiento automático', desc: 'Visitas a piloto + recordatorios pre/post visita. Reduce no-show ~30%.' },
    { icon: <Search className="w-6 h-6" />, title: 'Buscador inteligente', desc: 'Cuando no tienes inventario, busco en Urbania, Adondevivir y Nexo automáticamente.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Embudo en tiempo real', desc: 'Trazabilidad completa: leads, calificados, visitas, separaciones.' },
    { icon: <Users className="w-6 h-6" />, title: 'Múltiples vendedores', desc: 'Distribución equitativa automática + supervisor en vivo con badge GERENTE.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Cotizador instantáneo', desc: 'PDF profesional con tu branding + cálculo de financiamiento Mivivienda/BCP.' },
    { icon: '🎯', title: 'Captación de propiedades', desc: 'Si llega un propietario diciendo "quiero vender", Tami lo perfila antes de la visita técnica.' },
  ];
  return (
    <section id="features" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="gradient-text">Tu próxima vendedora</span> del mes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-3xl bg-lavender">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-4">
                {typeof f.icon === 'string' ? <span className="text-2xl">{f.icon}</span> : f.icon}
              </div>
              <h3 className="font-black text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CRMs() {
  const crms = ['Sperant', 'EVOLTA', 'TokkoBroker', 'Bitrix24', 'HubSpot', 'PlanOK', 'Salesforce', 'Zoho', 'Microsoft 365'];
  const portals = ['Urbania', 'Adondevivir', 'Nexo Inmobiliario'];
  return (
    <section id="crms" className="py-20 bg-lavender px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="gradient-text">No cambies tu CRM</span>
        </h2>
        <p className="text-center text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
          Tami se conecta con lo que ya usas. Cero migración.
        </p>
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
          <div className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4 text-center">CRMs Soportados</div>
          <div className="flex flex-wrap justify-center gap-3">
            {crms.map((c) => (
              <span key={c} className="bg-lavender px-5 py-2.5 rounded-full text-sm font-bold">{c}</span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4 text-center">Portales Públicos (búsqueda externa)</div>
          <div className="flex flex-wrap justify-center gap-3">
            {portals.map((p) => (
              <span key={p} className="bg-lavender px-5 py-2.5 rounded-full text-sm font-bold">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="gradient-text">Lo mismo que un asesor</span><br />pero con un equipo entero
        </h2>
        <p className="text-center text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
          Demo gratis 14 días · 0% comisión sobre tus cierres
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            emoji="🤝"
            title="Agente Inmobiliario"
            price="$350"
            badge=""
            desc="Para agentes independientes y portafolios medianos"
            features={[
              'Hasta 1,500 leads/mes',
              'Máximo 10 propiedades',
              'Sync Urbania, Adondevivir, Nexo',
              'CRM (Sperant, Evolta, TokkoBroker)',
              'Panel Omnicanal Básico',
            ]}
            cta="Comenzar"
            primary={false}
          />
          <PricingCard
            emoji="🏗️"
            title="Desarrollo y Escala"
            price="$500"
            iva="+ IGV"
            badge="Más Solicitado"
            desc="Para constructoras, desarrolladoras e inmobiliarias"
            features={[
              'Todo lo del plan Agente, más:',
              'Leads y propiedades ilimitados',
              'Módulo Proyectos Nuevos',
              'Reglas de Asignación Avanzadas',
              'Panel Supervisor Multiusuario',
              'Envíos Masivos + Mensajes Directos',
              'Seguimiento Automático configurable',
            ]}
            cta="Comenzar"
            primary={true}
          />
        </div>
        <div className="mt-12 text-center max-w-2xl mx-auto bg-lavender rounded-3xl p-6">
          <p className="text-sm text-gray-600">
            ⚠️ <b>Costos extras (cliente paga directo a Meta):</b> WhatsApp API saliente $0.0703/lead · Bloque 500 leads adicionales $50 · Contrato mínimo 6 meses
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ emoji, title, price, iva, badge, desc, features, cta, primary }: any) {
  return (
    <div className={`relative rounded-[2.5rem] p-10 ${primary ? 'border-2 border-purple-600 shadow-2xl shadow-purple-200/50' : 'border border-gray-200 shadow-xl'}`}>
      {badge && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-[2.4rem] uppercase tracking-wider">{badge}</div>
      )}
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-6">{desc}</p>
      <div className="mb-8 pb-8 border-b border-gray-100">
        <span className="text-5xl font-black">{price}</span>
        <span className="text-gray-400 text-sm font-medium ml-2">{iva || ''} USD/mes</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm font-semibold">
            <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href={APP_DEMO_URL} target="_blank" rel="noreferrer" className={`block text-center w-full py-4 rounded-full font-bold transition ${primary ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-300' : 'bg-purple-50 hover:bg-purple-100 text-purple-700'}`}>
        {cta}
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-black gradient-text mb-3">TamiBot</div>
          <p className="text-sm text-gray-400">Agentes IA para Bienes Raíces. Probado con +2.6M leads en LATAM.</p>
        </div>
        <div>
          <div className="font-bold mb-3">Producto</div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#features">Funciones</a></li>
            <li><a href="#crms">Integraciones</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href={APP_DEMO_URL} target="_blank" rel="noreferrer">Probar Portal</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">Cliente Demo</div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="https://lider.com.pe" target="_blank" rel="noreferrer">Líder Grupo Constructor</a></li>
            <li>9 proyectos</li>
            <li>Lima + Arequipa</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">Contacto</div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>+51 995 547 575</li>
            <li>mvelascoo@tamibot.com</li>
            <li><a href="https://tamibot.com" target="_blank" rel="noreferrer">tamibot.com (producción)</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        🧪 Esta es una <b>demo en GitHub Pages</b> · Datos sembrados de Líder Grupo Constructor para fines demostrativos · Sin afectar producción
      </div>
    </footer>
  );
}
