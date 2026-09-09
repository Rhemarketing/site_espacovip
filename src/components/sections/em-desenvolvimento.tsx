import React from "react";
import { Sparkles, MessageCircle, MapPin, Building2, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-data";

export function EmDesenvolvimento() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de mais informações sobre o Espaço VIP."
  )}`;

  return (
    <div className="relative min-h-screen bg-[#070A10] text-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden px-4 selection:bg-[#C6A87D]/30 selection:text-white">
      {/* Luzes e Efeitos de Fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C6A87D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid sutil decorativo */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C6A87D 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {/* Logotipo / Ícone do Edifício */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C6A87D]/20 via-[#C6A87D]/10 to-transparent border border-[#C6A87D]/30 flex items-center justify-center shadow-xl shadow-[#C6A87D]/5 mb-6 backdrop-blur-md">
          <Building2 className="w-8 h-8 text-[#C6A87D]" />
        </div>

        {/* Badge Elegante */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A87D]/10 border border-[#C6A87D]/25 text-[#E6CBA3] text-xs font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A87D]" />
          <span>Em Desenvolvimento</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight mb-4">
          Espaço <span className="bg-gradient-to-r from-[#F0DFC4] via-[#C6A87D] to-[#98784E] bg-clip-text text-transparent">VIP</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8 max-w-md">
          Estamos preparando uma experiência digital inovadora para você. Em breve, nosso novo site estará no ar.
        </p>

        {/* Card Informativo com Botão de Contato */}
        <div className="w-full bg-[#0E1525]/70 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/50 mb-8 flex flex-col items-center gap-5">
          <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-[#C6A87D]" />
            <span>Atendimento comercial em funcionamento</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C6A87D] via-[#D4B98D] to-[#B39366] text-[#070A10] font-semibold text-sm shadow-lg shadow-[#C6A87D]/20 hover:shadow-[#C6A87D]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Rodapé / Localização */}
        <div className="flex items-center gap-2 text-slate-400 text-xs font-light">
          <MapPin className="w-3.5 h-3.5 text-[#C6A87D]" />
          <span>Ituiutaba — MG</span>
        </div>
      </div>
    </div>
  );
}
