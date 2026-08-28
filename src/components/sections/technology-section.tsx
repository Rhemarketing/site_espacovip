"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  ScanFace,
  Fingerprint,
  QrCode,
  ShieldCheck,
  Clock,
  Smartphone,
  Mic,
  Video,
  Radio,
  Globe2,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { accessLayers, vipCastInfo, siteConfig } from "@/data/site-data";
import { cn } from "@/lib/utils";

const layerIcons: Record<string, React.ElementType> = {
  ScanFace,
  Fingerprint,
  QrCode,
};

export function TechnologySection() {
  const [activeLayer, setActiveLayer] = useState<string>("face-id");

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a Portaria Digital e as condições para gravação no Estúdio Vip Cast."
  )}`;

  const selectedLayerData =
    accessLayers.find((layer) => layer.id === activeLayer) || accessLayers[0];

  return (
    <section
      id="tecnologia"
      className="relative py-24 sm:py-32 bg-[#070A10] overflow-hidden scroll-mt-20 border-t border-white/5"
    >
      {/* Luzes de ambientação tecnológica (Cyan e Gold) */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0EA5E9]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C6A87D]/10 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge
            variant="tech"
            size="md"
            icon={<Cpu className="w-3.5 h-3.5" />}
            className="mb-4"
          >
            Inovação & Segurança Digital
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6">
            Tecnologia Inteligente que Otimiza sua{" "}
            <span className="text-gradient-gold">Rotina</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Elimine burocracias com controle de acesso autônomo e potencialize sua autoridade digital com nosso ecossistema audiovisual.
          </p>
        </div>

        {/* BLOCO 1: Portaria Digital Inteligente */}
        <div className="mb-20">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#0EA5E9]/20 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] font-montserrat mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Portaria Autônoma de 3 Camadas</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Portaria Digital & Controle de Acesso 24/7
                </h3>
                <p className="text-sm text-slate-300 font-light mt-1 max-w-2xl">
                  Segurança moderna sem chaves físicas. Conforto total para profissionais e atendimento ágil para pacientes.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant="emerald" size="sm" pulseDot>
                  Operação 24/7 Ativa
                </Badge>
              </div>
            </div>

            {/* Abas Interativas das 3 Camadas de Acesso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {accessLayers.map((layer) => {
                const Icon = layerIcons[layer.iconName] || ScanFace;
                const isSelected = activeLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={cn(
                      "text-left p-5 rounded-2xl transition-all duration-300 border cursor-pointer",
                      isSelected
                        ? "bg-[#121A2B] border-[#0EA5E9] shadow-lg shadow-[#0EA5E9]/10"
                        : "bg-[#070A10]/60 border-white/10 hover:border-white/20 hover:bg-[#121A2B]/50"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                          isSelected
                            ? "bg-[#0EA5E9]/20 text-[#38BDF8]"
                            : "bg-[#070A10] text-slate-400"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={cn(
                          "text-[10px] uppercase tracking-wider font-semibold font-montserrat px-2 py-0.5 rounded",
                          isSelected
                            ? "bg-[#0EA5E9]/10 text-[#38BDF8]"
                            : "bg-white/5 text-slate-400"
                        )}
                      >
                        {layer.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 font-heading">
                      {layer.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-light">
                      {layer.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detalhe da Camada Selecionada */}
            <div className="bg-[#070A10]/80 rounded-2xl p-6 sm:p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#0EA5E9]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9] font-montserrat">
                    Camada Selecionada: {selectedLayerData.name}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
                  {selectedLayerData.tagline}
                </h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {selectedLayerData.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedLayerData.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300 bg-[#121A2B] p-3 rounded-xl border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-[#121A2B] to-[#070A10] border border-[#0EA5E9]/30 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/40 flex items-center justify-center text-[#38BDF8] mb-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white font-montserrat block mb-1">
                  Totem Inteligente & App
                </span>
                <p className="text-xs text-slate-400 font-light mb-4">
                  Libere o acesso de visitantes remotamente em tempo real.
                </p>
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="emerald"
                  size="sm"
                  className="w-full justify-center"
                >
                  Ver Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO 2: Estúdio Vip Cast */}
        <div className="mb-20">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#C6A87D]/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Imagem do Estúdio */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#070A10] border border-[#C6A87D]/30 shadow-2xl group">
                  <Image
                    src="/images/vipcast-studio.jpg"
                    alt="Estúdio Vip Cast para podcasts e videocasts no Espaço VIP Ituiutaba"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/80 via-transparent to-transparent" />

                  {/* Badge de gravação ativa */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" size="sm" pulseDot>
                      Estúdio On-Air 4K
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#C6A87D] block font-montserrat">
                        Produção Audiovisual
                      </span>
                      <h4 className="text-white text-base font-bold font-heading">
                        Vip Cast Ituiutaba
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-[#070A10]/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                      <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                      <span>Transmissão Live</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações do Estúdio */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A87D]/10 border border-[#C6A87D]/30 text-[#E9DCBF] text-xs font-semibold uppercase font-montserrat mb-4">
                  <Mic className="w-3.5 h-3.5 text-[#C6A87D]" />
                  <span>Estúdio de Podcasts & Conteúdo Digital</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                  Grave Podcasts e Construa{" "}
                  <span className="text-gradient-gold">Autoridade Digital</span>
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {vipCastInfo.description}
                </p>

                {/* Formatos suportados */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {vipCastInfo.formatsSupported.map((format, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300 bg-[#070A10]/80 px-3 py-2 rounded-xl border border-white/5"
                    >
                      <Video className="w-3.5 h-3.5 text-[#C6A87D] shrink-0" />
                      <span>{format}</span>
                    </div>
                  ))}
                </div>

                {/* Tag promocional de condômino */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#C6A87D]/15 via-[#C6A87D]/5 to-transparent border border-[#C6A87D]/30 mb-6 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#E9DCBF] block">
                      Vantagem Exclusiva para Condôminos
                    </span>
                    <span className="text-[11px] text-slate-400 font-light">
                      Condições e pacotes promocionais para profissionais residentes no complexo.
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href={whatsappUrl}
                    isExternal
                    variant="gold"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Agendar Horário no Vip Cast
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO 3: HotSite Individual & Presença Digital */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A87D] font-montserrat mb-3">
                <Globe2 className="w-4 h-4" />
                <span>Presença Digital e Captação</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
                HotSite Individual para Cada Profissional Residente
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mb-6">
                Ao integrar o Espaço VIP, você ganha uma página exclusiva dentro do portal oficial com foto profissional,
                especialidades, convênios atendidos, horário de agendamento e link direto para captação no WhatsApp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Indexação no Google (SEO)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Link da Bio e Redes Sociais</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Mais Pacientes e Clientes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="p-5 rounded-2xl bg-[#070A10] border border-[#C6A87D]/30 w-full max-w-xs text-center">
                <span className="text-[11px] font-bold font-montserrat text-[#C6A87D] uppercase tracking-wider block mb-1">
                  Exemplo de URL
                </span>
                <code className="text-xs font-mono text-slate-300 block mb-4 bg-[#121A2B] p-2 rounded-lg border border-white/5">
                  espacovip.com/dr-seu-nome
                </code>
                <Button
                  href="#profissionais"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Ver Especialistas Cadastrados
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
