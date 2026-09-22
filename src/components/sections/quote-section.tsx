import React from "react";
import { Container } from "@/components/ui/container";
import { Sparkles, Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section className="relative w-full bg-[#755036] py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Glow de iluminação ambiente sutil de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-r from-[#EDDCC8]/20 via-[#6E6D35]/35 to-[#EDDCC8]/20 blur-3xl rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge institucional */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDDCC8]/15 border border-[#EDDCC8]/25 text-[#EDDCC8] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-7 shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EDDCC8]" />
            <span>Posicionamento & Excelência</span>
          </div>

          {/* Ícone de Aspas Elegante */}
          <div className="mb-5 text-[#EDDCC8]/40">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 rotate-180 mx-auto" />
          </div>

          {/* Frase Impactante Principal */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFAF1] tracking-tight leading-[1.25] sm:leading-[1.2] font-sans mb-6">
            “Onde a credibilidade do seu negócio encontra o endereço que ele sempre mereceu.”
          </h2>

          {/* Subtítulo Complementar */}
          <p className="text-base sm:text-lg md:text-xl text-[#EDDCC8]/90 font-normal leading-relaxed max-w-2xl mb-8">
            Mais que um edifício corporativo e de saúde, o centro de conexão entre os profissionais e marcas mais respeitados de Ituiutaba.
          </p>

          {/* Divisor sofisticado com a marca */}
          <div className="flex items-center gap-4 w-full max-w-xs justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#EDDCC8]/40" />
            <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#EDDCC8]/80">
              Espaço VIP
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#EDDCC8]/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
