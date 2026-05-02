import { ReactNode } from 'react';

export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-[#0A0A1F] rounded-[2.6rem] p-1.5 shadow-mega ring-1 ring-black/10">
        <div className="bg-[#0A0A1F] rounded-[2.4rem] overflow-hidden relative aspect-[9/19.5] w-full">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function WhatsAppHeader({ contactName, status = 'En línea', avatar = '🤖' }: { contactName: string; status?: string; avatar?: string }) {
  return (
    <div className="bg-[#075E54] pt-9 pb-3 px-4 flex items-center gap-3 z-20 relative shrink-0">
      <svg className="w-5 h-5 text-white/80 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-lg shadow-sm relative">
        {avatar}
        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#075E54]" />
      </div>
      <div className="flex flex-col -space-y-0.5 flex-1">
        <span className="font-semibold text-white text-[13px] leading-tight">{contactName}</span>
        <span className="text-[10px] text-white/70 font-medium">{status}</span>
      </div>
      <div className="flex gap-3 text-white/70">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.58l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
      </div>
    </div>
  );
}

const wallpaperBg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7S14.866 4 11 4 4 7.134 4 11s3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23E5DDD5' fill-opacity='0.55' fill-rule='evenodd'/%3E%3C/svg%3E\")";

export function ChatArea({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex-1 px-3 py-3 space-y-2 overflow-y-auto"
      style={{ backgroundColor: '#E5DDD5', backgroundImage: wallpaperBg }}
    >
      {children}
    </div>
  );
}

type MsgProps = { side?: 'left' | 'right'; delay?: number; children: ReactNode; time?: string };
export function Bubble({ side = 'left', delay = 0, time, children }: MsgProps) {
  const isLeft = side === 'left';
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} msg-anim`} style={{ animationDelay: `${delay}ms` }}>
      <div className={`relative max-w-[82%] px-2.5 py-1.5 text-[11px] leading-snug shadow-sm ${
        isLeft
          ? 'bg-white text-gray-800 rounded-2xl rounded-tl-md'
          : 'bg-[#DCF8C6] text-gray-800 rounded-2xl rounded-tr-md'
      }`}>
        {children}
        {time && <span className="text-[8px] text-gray-400 ml-2 -mr-1 align-bottom">{time}</span>}
      </div>
    </div>
  );
}

export function TypingBubble({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex justify-end msg-anim" style={{ animationDelay: `${delay}ms` }}>
      <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-md px-3 py-2.5 flex gap-1 shadow-sm">
        <span className="typing-dot w-1.5 h-1.5 bg-gray-500 rounded-full" />
        <span className="typing-dot w-1.5 h-1.5 bg-gray-500 rounded-full" />
        <span className="typing-dot w-1.5 h-1.5 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
}

export function ChatInput() {
  return (
    <div className="bg-[#F0F2F5] px-3 py-2 flex items-center gap-2 z-10 shrink-0">
      <div className="flex-1 bg-white rounded-full px-3 py-2 text-[10px] text-gray-400 shadow-sm border border-gray-100 flex items-center gap-2">
        <span className="text-gray-300">😊</span>
        <span className="flex-1">Mensaje</span>
        <span className="text-gray-300">📎</span>
      </div>
      <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center text-white shrink-0">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l18 9-18 9 4-9z"/></svg>
      </div>
    </div>
  );
}

export function PdfAttachment({ name, size }: { name: string; size: string }) {
  return (
    <div className="flex items-center gap-2 bg-emerald-50/80 rounded-xl p-2 mb-1">
      <div className="bg-rose-100 text-rose-600 rounded-md p-1.5">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold text-gray-900 leading-tight">{name}</span>
        <span className="text-[9px] text-gray-500">{size} · PDF</span>
      </div>
    </div>
  );
}

export function PropertyCard({ project, district, area, price, badge }: {
  project: string; district: string; area: string; price: string; badge?: string;
}) {
  return (
    <div className="bg-white -m-1.5 mb-1 p-2 rounded-xl">
      <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 rounded-md mb-1.5 flex items-center justify-center text-2xl relative">
        🏢
        {badge && <span className="absolute top-1 right-1 bg-purple-600 text-white text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">{badge}</span>}
      </div>
      <div className="font-bold text-[10px] text-gray-900 leading-tight">{project}</div>
      <div className="text-[9px] text-gray-500 mt-0.5">📍 {district} · {area}</div>
      <div className="text-[10px] font-bold text-purple-600 mt-1">Desde {price}</div>
    </div>
  );
}
