/**
 * Laptop dashboard mockup — replicates the demo-app dashboard
 * with Lider data. Pure SVG/HTML/CSS, no images, no fonts deps.
 */

export function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Lid */}
      <div className="bg-[#1a1a1a] rounded-[1rem] p-2 shadow-laptop">
        <div className="bg-[#0a0a0a] rounded-[0.7rem] overflow-hidden aspect-[16/10]">
          <div className="bg-paper-2 h-7 flex items-center px-3 gap-2 border-b border-soft">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="flex-1 mx-3 h-4 bg-paper rounded-md flex items-center justify-center text-[9px] font-semibold text-muted-2 gap-1.5">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.84 10.74 9 12 5.16-1.26 9-6.5 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              hub.tamibot.com
            </div>
          </div>
          <div className="flex h-[calc(100%-1.75rem)] bg-paper">{children}</div>
        </div>
      </div>
      {/* Base shadow */}
      <div className="h-2 bg-gradient-to-b from-[#1a1a1a]/30 to-transparent rounded-b-2xl mx-8" />
    </div>
  );
}

export function DashboardScreen() {
  return (
    <LaptopFrame>
      {/* Sidebar */}
      <div className="w-[18%] border-r border-soft bg-paper-2 p-2 flex flex-col gap-0.5">
        <div className="px-2 py-1.5 mb-2">
          <div className="text-[8px] font-display font-extrabold tracking-tighter">tami<span className="text-accent">.</span></div>
        </div>
        {[
          { label: 'Dashboard', active: true },
          { label: 'Bandeja', badge: '3' },
          { label: 'Catálogo' },
          { label: 'Embudo' },
          { label: 'Supervisor' },
          { label: 'Asesores' },
        ].map((item, i) => (
          <div key={i} className={`px-2 py-1.5 rounded-md flex items-center justify-between text-[8px] font-bold ${item.active ? 'bg-accent text-white' : 'text-muted hover:bg-paper'}`}>
            <span>{item.label}</span>
            {item.badge && <span className={`text-[7px] font-black px-1 py-0.5 rounded-sm ${item.active ? 'bg-white/30 text-white' : 'bg-accent text-white'}`}>{item.badge}</span>}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="flex items-baseline justify-between mb-2.5">
          <div>
            <div className="text-[9px] text-muted-2 font-bold uppercase tracking-widest">Dashboard</div>
            <div className="text-[10px] font-semibold text-muted">Líder GC · OCT 2024 — MAY 2026</div>
          </div>
          <div className="flex gap-1">
            <span className="text-[7px] font-bold px-1.5 py-0.5 rounded bg-accent-soft text-accent">● LIVE</span>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { l: 'Vol. separado', v: '$450k', d: '+32%', dark: false },
            { l: 'Tasa cierre', v: '8.5%', d: 'Alta', dark: true },
            { l: 'Visitas', v: '312', d: '/845', dark: false },
            { l: 'CPL', v: '$18', d: '-12%', dark: false },
          ].map((k, i) => (
            <div key={i} className={`p-2 rounded-md border ${k.dark ? 'bg-accent text-white border-accent' : 'bg-paper border-soft'}`}>
              <div className={`text-[7px] font-bold uppercase tracking-widest ${k.dark ? 'text-white/70' : 'text-muted-2'}`}>{k.l}</div>
              <div className="text-sm font-display font-extrabold mt-0.5">{k.v}</div>
              <div className={`text-[7px] mt-0.5 font-semibold ${k.dark ? 'text-white/80' : 'text-accent'}`}>↑ {k.d}</div>
            </div>
          ))}
        </div>

        {/* Funnel + channels */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 bg-paper border border-soft rounded-md p-2">
            <div className="text-[8px] font-black uppercase tracking-widest text-ink mb-2">Embudo · live</div>
            {[
              { l: '1. Nuevos leads', n: 1407, w: 100, c: 'bg-paper-3' },
              { l: '2. Calificados', n: 845, w: 60, c: 'bg-accent/40' },
              { l: '3. Visitas', n: 312, w: 22, c: 'bg-accent/70' },
              { l: '4. Separaciones', n: 105, w: 8, c: 'bg-accent' },
            ].map((s, i) => (
              <div key={i} className="mb-1.5">
                <div className="flex justify-between text-[7px] font-bold mb-0.5">
                  <span className="text-muted-2">{s.l}</span>
                  <span className="text-ink tabular-nums">{s.n.toLocaleString()}</span>
                </div>
                <div className="h-1.5 rounded-r bg-paper-2 overflow-hidden">
                  <div className={`h-full ${s.c}`} style={{ width: `${s.w}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-paper border border-soft rounded-md p-2">
            <div className="text-[8px] font-black uppercase tracking-widest text-ink mb-2">Canal</div>
            {[
              { l: 'Facebook', v: 612, p: 62 },
              { l: 'Urbania', v: 287, p: 62 },
              { l: 'Instagram', v: 196, p: 54 },
              { l: 'Google', v: 180, p: 61 },
              { l: 'Adondevivir', v: 92, p: 55 },
            ].map((c, i) => (
              <div key={i} className="flex justify-between items-baseline text-[7px] font-semibold py-0.5">
                <span className="text-muted-2">{c.l}</span>
                <span className="flex gap-1 items-baseline">
                  <span className="text-muted-2 text-[6px]">{c.v}</span>
                  <span className="text-accent font-black">{c.p}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
}
