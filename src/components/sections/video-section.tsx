import React from "react";
import { Container } from "@/components/ui/container";

export function VideoSection() {
  return (
    <section className="relative w-full bg-[#755036] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <Container>
        {/* Título visível apenas no Mobile (acima do vídeo) */}
        <h2 className="lg:hidden text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FFFAF1] font-sans text-center mb-6 sm:mb-8">
          CONHEÇA NOSSO ESPAÇO
        </h2>

        {/* Layout em Grid no Desktop: Vídeo à esquerda e Título + Descrição à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
          {/* Lado Esquerdo: Vídeo do YouTube Responsivo (Aspect 16:9) */}
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-[#EDDCC8]/20 bg-black/50">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Vídeo Institucional - Espaço VIP"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Lado Direito no Desktop: Título e Descrição */}
          <div className="flex flex-col text-center lg:text-left justify-center">
            {/* Título visível no Desktop (à direita, alinhado junto da descrição) */}
            <h2 className="hidden lg:block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFAF1] font-sans leading-[1.15] mb-5">
              CONHEÇA NOSSO ESPAÇO
            </h2>

            {/* Breve Descrição */}
            <p className="text-base sm:text-lg lg:text-xl text-[#EDDCC8] leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Estrutura inteligente e modular projetada para consultórios e empresas que exigem excelência, tecnologia e sofisticação no centro de Ituiutaba.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
