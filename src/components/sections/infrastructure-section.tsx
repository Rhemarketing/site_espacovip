import React from "react";
import Image from "next/image";
import {
  Building2,
  Armchair,
  Accessibility,
  Coffee,
  Wifi,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Shield,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { infrastructureItems, infrastructureStats, siteConfig } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Armchair,
  Accessibility,
  Coffee,
  Wifi,
  Sparkles,
};

export function InfrastructureSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar uma visita guiada para conhecer a infraestrutura do Espaço VIP Ituiutaba."
  )}`;

  return (
    <section id="nosso-espaco" className="relative py-24 sm:py-32 bg-[#070A10] overflow-hidden scroll-mt-20">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C6A87D]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0EA5E9]/5 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge
            variant="gold"
            size="md"
            icon={<Building2 className="w-3.5 h-3.5" />}
            className="mb-4"
          >
            Estrutura Corporativa de Alto Padrão
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6">
            Projetado para Unir Sofisticação, Conforto e{" "}
            <span className="text-gradient-gold">Funcionalidade</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Um ambiente pensado nos mínimos detalhes para valorizar o seu atendimento e oferecer a máxima comodidade aos seus clientes.
          </p>
        </div>

        {/* Banner Fotográfico da Recepção & Ambiente Nobre */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#C6A87D]/30 shadow-2xl p-2 sm:p-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#0D131F] group">
              <Image
                src="/images/reception-lounge.jpg"
                alt="Recepção principal e Lounge VIP climatizado do Espaço VIP Ituiutaba"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-[#070A10]/30 to-transparent" />

              {/* Informações sobrepostas na imagem */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <span className="text-xs font-montserrat uppercase tracking-wider text-[#C6A87D] font-bold block mb-1">
                    Hall & Salas de Espera
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    Recepções Climatizadas & Lounge de Boas-Vindas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 hidden sm:block">
                    Espaços projetados por arquitetos renomados para garantir uma primeira impressão impecável aos seus pacientes e clientes.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="emerald" size="sm" pulseDot>
                    Ambientes 100% Climatizados
                  </Badge>
                  <Button
                    href={whatsappUrl}
                    isExternal
                    variant="gold"
                    size="sm"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Agendar Visita
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de 6 Destaques de Infraestrutura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {infrastructureItems.map((item) => {
            const Icon = iconMap[item.iconName] || Building2;
            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#070A10] border border-[#C6A87D]/30 flex items-center justify-center text-[#C6A87D] shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C6A87D]">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.highlightTag && (
                      <span className="text-[11px] font-semibold font-montserrat tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#C6A87D]/10 text-[#E9DCBF] border border-[#C6A87D]/20">
                        {item.highlightTag}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-[#C6A87D] uppercase tracking-wider block mb-1 font-montserrat">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 font-heading group-hover:text-[#E9DCBF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Padrão Corporativo de Excelência</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de Estatísticas & Micro-CTA */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#C6A87D]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A87D]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold font-montserrat uppercase tracking-widest text-[#C6A87D] block mb-2">
                Excelência Estrutural
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
                Mais de 1.000m² dedicados à excelência em Ituiutaba
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                Descubra como o endereço certo eleva a percepção de valor do seu consultório ou empresa logo na primeira consulta.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="gold"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Conhecer Salas Disponíveis
                </Button>
                <div className="text-xs text-slate-400">
                  <span>Atendimento sem compromisso</span>
                </div>
              </div>
            </div>

            {/* Grid de Métricas */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              {infrastructureStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#070A10]/80 rounded-2xl p-5 border border-white/10 text-center flex flex-col justify-center min-w-[140px]"
                >
                  <span className="text-3xl sm:text-4xl font-bold font-heading text-gradient-gold block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block font-montserrat">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-400 font-light mt-0.5">
                    {stat.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
