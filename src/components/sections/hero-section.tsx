import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Mic,
  MapPin,
  CheckCircle2,
  CalendarCheck,
  Users2,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site-data";

interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  tag: string;
}

const keyHighlights: HighlightCardProps[] = [
  {
    icon: Building2,
    title: "20 Salas Exclusivas",
    subtitle: "2 andares planejados para saúde e negócios",
    tag: "Plantas Flexíveis",
  },
  {
    icon: ShieldCheck,
    title: "Portaria Digital 24/7",
    subtitle: "Face ID, biometria e recepção automatizada",
    tag: "Alta Tecnologia",
  },
  {
    icon: Mic,
    title: "Estúdio Vip Cast",
    subtitle: "Gravação profissional de podcasts e videocasts",
    tag: "Audiovisual 4K",
  },
  {
    icon: MapPin,
    title: "Localização Nobre",
    subtitle: "Ponto nobre e estratégico no centro da cidade",
    tag: "Fácil Acesso",
  },
];

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar uma visita e conhecer as salas disponíveis no Espaço VIP Ituiutaba."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Luz ambiente e gradientes de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#C6A87D]/20 via-[#C6A87D]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#0EA5E9]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#10B981]/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto & Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge de Destaque Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#C6A87D]/30 mb-6 gold-glow animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#C6A87D]" />
              <span className="text-xs font-semibold tracking-wide uppercase text-[#E9DCBF] font-montserrat">
                O Centro de Negócios e Saúde Mais Moderno de Ituiutaba
              </span>
            </div>

            {/* H1 Principal com Gradiente Dourado */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.15] mb-6 text-white">
              Eleve o Padrão do Seu Atendimento em um{" "}
              <span className="block text-gradient-gold">
                Endereço de Prestígio
              </span>
            </h1>

            {/* Subtítulo persuasivo */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-8">
              Estrutura corporativa inteligente com <strong>20 salas</strong>, <strong>3 amplas recepções</strong>,
              controle de acesso por <strong>Face ID</strong> e <strong>estúdio Vip Cast</strong>. O cenário ideal para
              médicos, especialistas e empresas que valorizam sofisticação e resultados.
            </p>

            {/* Duplo CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href={whatsappUrl}
                isExternal
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto justify-center"
              >
                Agendar Visita / Quero meu Espaço
              </Button>

              <Button
                href="#profissionais"
                variant="outline"
                size="lg"
                leftIcon={<Users2 className="w-4 h-4 text-[#C6A87D]" />}
                className="w-full sm:w-auto justify-center"
              >
                Conhecer Especialistas
              </Button>
            </div>

            {/* Trust Proof / Micro Informações */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 w-full text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Salas prontas para consultórios e escritórios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Atendimento exclusivo com hora marcada</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Mockup de Arquitetura & Cards Flutuantes */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura de Vidro e Brilho */}
              <div className="relative rounded-3xl p-2 sm:p-3 glass-panel border border-[#C6A87D]/30 gold-border-glow shadow-2xl overflow-hidden group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#0D131F]">
                  <Image
                    src="/images/hero-building.jpg"
                    alt="Fachada imponente do Edifício Espaço VIP Ituiutaba"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente de overlay sofisticado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-[#070A10]/20 to-transparent" />

                  {/* Legenda do Edifício no rodapé da foto */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-montserrat uppercase tracking-wider text-[#C6A87D] font-bold block">
                        Complexo Corporativo & Médico
                      </span>
                      <h4 className="text-white text-base font-bold font-heading drop-shadow">
                        Edifício Espaço VIP
                      </h4>
                    </div>
                    <Badge variant="emerald" size="sm" pulseDot>
                      Acesso Ativo
                    </Badge>
                  </div>
                </div>

                {/* Badge Flutuante 1 (Top Right): Portaria Digital */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-[#10B981]/40 shadow-xl backdrop-blur-xl animate-float-slow">
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase font-montserrat">
                      Portaria 24h
                    </span>
                    <span className="text-xs font-bold text-white">
                      Face ID & Totem
                    </span>
                  </div>
                </div>

                {/* Badge Flutuante 2 (Bottom Left): Estúdio Vip Cast */}
                <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-[#C6A87D]/40 shadow-xl backdrop-blur-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#C6A87D]/15 border border-[#C6A87D]/30 flex items-center justify-center text-[#C6A87D]">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase font-montserrat">
                      Exclusividade
                    </span>
                    <span className="text-xs font-bold text-white">
                      Estúdio Vip Cast 4K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de 4 Micro-Cards (Key Highlights) */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#070A10] border border-[#C6A87D]/30 flex items-center justify-center text-[#C6A87D]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="gold" size="sm">
                      {item.tag}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Indicador sutil de rolagem */}
      <div className="flex justify-center mt-12">
        <a
          href="#nosso-espaco"
          className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-[#C6A87D] transition-colors group"
          aria-label="Rolar para a seção O Espaço"
        >
          <span className="tracking-widest uppercase text-[10px] font-montserrat opacity-75">
            Descubra o Complexo
          </span>
          <ChevronDown className="w-4 h-4 text-[#C6A87D] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
