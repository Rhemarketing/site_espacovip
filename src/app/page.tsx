import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Cpu,
  Award,
  Users2,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mic,
  CalendarCheck,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site-data";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsappMessage
  )}`;

  return (
    <div className="relative min-h-screen bg-[#070A10] text-[#F8FAFC] flex flex-col">
      {/* Header / Navbar fixo com glassmorphism */}
      <Header />

      {/* Hero Section principal com duplo CTA e Key Highlights */}
      <HeroSection />

      {/* Preview estrutural para as seções das próximas etapas (com âncoras de navegação ativas) */}
      <div className="relative z-10 py-12 border-t border-white/5 bg-[#070A10]/50">
        <Container>
          {/* Seção âncora: O Espaço */}
          <section id="nosso-espaco" className="py-16 scroll-mt-24">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge variant="gold" size="md" icon={<Building2 className="w-3.5 h-3.5" />} className="mb-4">
                Estrutura & Arquitetura
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                O Espaço VIP Ituiutaba
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Ambientes projetados para unir requinte estético, isolamento acústico e total funcionalidade corporativa e médica.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#070A10] border border-[#C6A87D]/30 flex items-center justify-center text-[#C6A87D] mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">20 Salas Corporativas</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Metragens versáteis distribuídas em 2 andares planejados com lavabos e preparação para climatização.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#070A10] border border-[#C6A87D]/30 flex items-center justify-center text-[#C6A87D] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">3 Recepções Decoradas</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Salas de espera climatizadas e elegantes para proporcionar uma experiência acolhedora aos seus pacientes e clientes.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#070A10] border border-[#C6A87D]/30 flex items-center justify-center text-[#C6A87D] mb-4">
                  <Mic className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">Estúdio Vip Cast</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Estúdio próprio para criação de podcasts, videocasts, gravação de infoprodutos e lives institucionais em 4K.
                </p>
              </div>
            </div>
          </section>

          {/* Seção âncora: Tecnologia */}
          <section id="tecnologia" className="py-16 scroll-mt-24 border-t border-white/5">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge variant="tech" size="md" icon={<Cpu className="w-3.5 h-3.5" />} className="mb-4">
                Inovação & Segurança
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Portaria Digital & Face ID
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Segurança autônoma com controle de fluxo inteligente, QR Code dinâmico para visitantes e acesso 24h para condôminos.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-[#0EA5E9]/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#0EA5E9] font-semibold font-montserrat">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Segurança 24 horas por dia, 7 dias por semana</span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Reconhecimento Facial e Liberação Digital
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-light">
                  Seus clientes acessam o edifício com facilidade e modernidade através de totens digitais integrados com agendamentos.
                </p>
              </div>
              <Button href={whatsappUrl} isExternal variant="outline" size="md">
                Saber Mais
              </Button>
            </div>
          </section>

          {/* Seção âncora: Vantagens */}
          <section id="vantagens" className="py-16 scroll-mt-24 border-t border-white/5">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge variant="gold" size="md" icon={<Award className="w-3.5 h-3.5" />} className="mb-4">
                Benefícios Exclusivos
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Por que escolher o Espaço VIP?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Posicione sua clínica ou empresa no polo comercial mais conceituado de Ituiutaba.
              </p>
            </div>
          </section>

          {/* Seção âncora: Especialistas */}
          <section id="profissionais" className="py-16 scroll-mt-24 border-t border-white/5">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge variant="gold" size="md" icon={<Users2 className="w-3.5 h-3.5" />} className="mb-4">
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

          {/* Seção âncora: Localização */}
          <section id="localizacao" className="py-16 scroll-mt-24 border-t border-white/5">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <Badge variant="gold" size="md" icon={<MapPin className="w-3.5 h-3.5" />} className="mb-4">
                Endereço Nobre
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Localização Privilegiada em Ituiutaba
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                {siteConfig.contact.address.street}, {siteConfig.contact.address.number} — {siteConfig.contact.address.neighborhood}, {siteConfig.contact.address.city}-{siteConfig.contact.address.state}.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 border border-white/10 text-center flex flex-col items-center">
              <p className="text-sm text-slate-300 mb-6 max-w-xl">
                Venha conhecer pessoalmente o complexo e escolher a sala ideal para expandir seus negócios ou consultório.
              </p>
              <Button href={whatsappUrl} isExternal variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Falar com a Administração
              </Button>
            </div>
          </section>
        </Container>
      </div>

      {/* Footer simples de apoio da Etapa 1 */}
      <footer className="mt-auto border-t border-white/10 py-8 bg-[#070A10] text-center text-xs text-slate-500">
        <Container>
          <p>© {new Date().getFullYear()} Espaço VIP Ituiutaba. Todos os direitos reservados.</p>
          <p className="mt-1 text-slate-600">Edifício Corporativo e de Saúde • Ituiutaba - MG</p>
        </Container>
      </footer>
    </div>
  );
}
