import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { InfrastructureSection } from "@/components/sections/infrastructure-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users2,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site-data";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsappMessage
  )}`;

  return (
    <div className="relative min-h-screen bg-[#070A10] text-[#F8FAFC] flex flex-col selection:bg-[#C6A87D]/30 selection:text-white">
      {/* Header / Navbar fixo com glassmorphism */}
      <Header />

      {/* Hero Section principal com duplo CTA e Key Highlights */}
      <HeroSection />

      {/* ETAPA 2: Seção de Infraestrutura Completa (id="nosso-espaco") */}
      <InfrastructureSection />

      {/* ETAPA 2: Seção de Tecnologia & Inovação (id="tecnologia") */}
      <TechnologySection />

      {/* Âncoras e Prévias das Próximas Etapas */}
      <div className="relative z-10 py-12 border-t border-white/5 bg-[#070A10]/50">
        <Container>
          {/* Seção âncora: Vantagens (Etapa 3) */}
          <section id="vantagens" className="py-16 scroll-mt-24">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge
                variant="gold"
                size="md"
                icon={<Award className="w-3.5 h-3.5" />}
                className="mb-4"
              >
                Benefícios & Retorno
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Vantagens de Estar no Espaço VIP
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Posicione sua clínica ou empresa no polo comercial mais conceituado de Ituiutaba com redução de custos e alta autoridade.
              </p>
            </div>
          </section>

          {/* Seção âncora: Especialistas (Etapa 4) */}
          <section
            id="profissionais"
            className="py-16 scroll-mt-24 border-t border-white/5"
          >
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge
                variant="gold"
                size="md"
                icon={<Users2 className="w-3.5 h-3.5" />}
                className="mb-4"
              >
                Corpo Clínico & Corporativo
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Especialistas & Empresas no Espaço VIP
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Médicos, dentistas, psicólogos, advogados e consultores reunidos em um único endereço de referência.
              </p>
            </div>
          </section>

          {/* Seção âncora: Localização (Etapa 5) */}
          <section
            id="localizacao"
            className="py-16 scroll-mt-24 border-t border-white/5"
          >
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge
                variant="gold"
                size="md"
                icon={<MapPin className="w-3.5 h-3.5" />}
                className="mb-4"
              >
                Endereço Nobre
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Localização Privilegiada em Ituiutaba
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                {siteConfig.contact.address.street},{" "}
                {siteConfig.contact.address.number} —{" "}
                {siteConfig.contact.address.neighborhood},{" "}
                {siteConfig.contact.address.city}-
                {siteConfig.contact.address.state}.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 text-center flex flex-col items-center">
              <p className="text-sm text-slate-300 mb-6 max-w-xl">
                Venha conhecer pessoalmente o complexo e escolher a sala ideal
                para expandir seus negócios ou consultório.
              </p>
              <Button
                href={whatsappUrl}
                isExternal
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Falar com a Administração
              </Button>
            </div>
          </section>
        </Container>
      </div>

      {/* Footer base */}
      <footer className="mt-auto border-t border-white/10 py-10 bg-[#070A10] text-xs text-slate-500">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#C6A87D]" />
              <span className="font-heading font-bold text-slate-300">
                ESPAÇO VIP ITUIUTABA
              </span>
            </div>
            <p>© {new Date().getFullYear()} Todos os direitos reservados. Edifício Corporativo e de Saúde.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
