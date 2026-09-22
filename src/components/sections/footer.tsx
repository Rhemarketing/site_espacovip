import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-data";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const PROFESSIONALS_DIRECTORY = [
  { name: "Dra. Camila Duarte", specialty: "Dermatologia & Estética", room: "Sala 204" },
  { name: "Instituto Sorriso VIP", specialty: "Odontologia & Implantes", room: "Sala 301" },
  { name: "Dr. Marcelo Pimentel", specialty: "Psicologia Clínica", room: "Sala 208" },
  { name: "Silveira & Associados", specialty: "Direito Empresarial & Tributário", room: "Sala 105" },
  { name: "Dra. Juliana Vasconcelos", specialty: "Nutrologia & Longevidade", room: "Sala 305" },
  { name: "Studio Forma Arquitetura", specialty: "Arquitetura & Interiores", room: "Sala 102" },
  { name: "Apex Gestão Contábil", specialty: "Inteligência Fiscal & BPO", room: "Sala 210" },
  { name: "Dr. Roberto Mendes", specialty: "Ortopedia & Traumatologia", room: "Sala 308" },
  { name: "Dra. Renata Takahashi", specialty: "Oftalmologia & Cirurgia", room: "Sala 201" },
  { name: "Dr. Henrique Alencar", specialty: "Cardiologia Clínica", room: "Sala 205" },
  { name: "Harmonie Clínica de Estética", specialty: "Biomedicina & Laser", room: "Sala 303" },
  { name: "Dr. Bruno Castanheiro", specialty: "Cirurgia Plástica", room: "Sala 306" },
  { name: "Andrade & Castro Consultoria", specialty: "Planejamento Financeiro", room: "Sala 108" },
  { name: "Dra. Fernanda Prado", specialty: "Ginecologia & Obstetrícia", room: "Sala 202" },
  { name: "LabVip Análises Clínicas", specialty: "Diagnósticos Laboratoriais", room: "Sala 101" },
  { name: "Dr. Thiago Rezende", specialty: "Endocrinologia & Metabologia", room: "Sala 207" },
  { name: "Vivace Fisioterapia", specialty: "Reabilitação & Ergonomia", room: "Sala 304" },
  { name: "Dra. Larissa Fontes", specialty: "Pediatria & Alergologia", room: "Sala 206" },
  { name: "Prime Tech Soluções", specialty: "Tecnologia & Inovação", room: "Sala 106" },
  { name: "Dra. Beatriz Faria", specialty: "Fonoaudiologia Clínica", room: "Sala 209" },
];

function WhatsAppIcon({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.888 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsappMessage
  )}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Edifício Espaço VIP, ${siteConfig.contact.address.street}, ${siteConfig.contact.address.number}, ${siteConfig.contact.address.city} - MG`
  )}`;

  return (
    <footer className="w-full bg-[#3F2A1C] text-[#FFFAF1] pt-16 sm:pt-20 pb-12 border-t border-[#EDDCC8]/20 relative overflow-hidden">
      <Container>
        {/* ======================================================== */}
        {/* PARTE 1: DIRETÓRIO DE 20 PROFISSIONAIS & EMPRESAS        */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-18">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-[#EDDCC8]/15 mb-8">
            <div>
              <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#EDDCC8]/15 text-[#EDDCC8] border border-[#EDDCC8]/20 mb-2">
                Edifício Espaço VIP
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFFAF1] tracking-tight font-sans">
                Diretório de Profissionais & Empresas
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#EDDCC8]/70 max-w-md">
              Especialistas, clínicas de excelência e marcas corporativas atuando no edifício comercial de referência em Ituiutaba.
            </p>
          </div>

          {/* Grade com os 20 profissionais fictícios (4 colunas no Desktop, 2 colunas no Mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {PROFESSIONALS_DIRECTORY.map((prof, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center p-2.5 sm:p-3 rounded-xl bg-[#2E1E14]/70 border border-[#EDDCC8]/10 hover:border-[#EDDCC8]/30 hover:bg-[#2E1E14] transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <span className="font-semibold text-xs sm:text-sm text-[#FFFAF1] line-clamp-1 group-hover:text-[#EDDCC8] transition-colors">
                    {prof.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#EDDCC8]/80 bg-[#EDDCC8]/10 px-1.5 py-0.5 rounded shrink-0">
                    {prof.room}
                  </span>
                </div>
                <span className="text-[11px] text-[#EDDCC8]/60 line-clamp-1">
                  {prof.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PARTE 2: INFORMAÇÕES INSTITUCIONAIS & CONTATOS           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#EDDCC8]/15">
          {/* Coluna 1: Logo & Apresentação */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo-primaria.png"
                alt="Espaço VIP"
                width={1248}
                height={199}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#EDDCC8]/80 leading-relaxed mb-4">
              Complexo corporativo, médico e estúdio de podcast de alta tecnologia no coração comercial de Ituiutaba, MG.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#EDDCC8]/70">
              <Clock className="w-3.5 h-3.5 text-[#EDDCC8]" />
              <span>Portaria com Face ID 24h</span>
            </div>
          </div>

          {/* Coluna 2: Endereço do Edifício */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#EDDCC8] mb-4">
              Endereço
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FFFAF1]/90 mb-3">
              <MapPin className="w-4 h-4 text-[#EDDCC8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#FFFAF1]">Edifício Espaço VIP</p>
                <p className="text-[#EDDCC8]/80">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.number}
                </p>
                <p className="text-[#EDDCC8]/80">
                  {siteConfig.contact.address.neighborhood} • {siteConfig.contact.address.city} - {siteConfig.contact.address.state}
                </p>
                <p className="text-[#EDDCC8]/60 text-[11px] mt-0.5">
                  CEP {siteConfig.contact.address.zipCode}
                </p>
              </div>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#EDDCC8] hover:text-[#FFFAF1] hover:underline transition-colors"
            >
              <span>Como chegar no Google Maps</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Coluna 3: WhatsApp & Telefone */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#EDDCC8] mb-4">
              Atendimento Direto
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#6E6D35] hover:bg-[#5b5a2c] text-[#FFFAF1] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.contact.phoneFormatted}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#EDDCC8]/90 hover:text-[#FFFAF1] px-1 py-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#EDDCC8]" />
                <span>Telefone: {siteConfig.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais (Instagram) */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#EDDCC8] mb-4">
              Redes Sociais
            </h4>
            <p className="text-xs sm:text-sm text-[#EDDCC8]/80 mb-3.5">
              Acompanhe novidades, eventos e profissionais em nosso Instagram oficial:
            </p>
            <a
              href={siteConfig.contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#EDDCC8]/15 hover:bg-[#EDDCC8]/25 text-[#FFFAF1] border border-[#EDDCC8]/25 text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4 text-[#EDDCC8]" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">{siteConfig.contact.socials.instagramHandle}</span>
                <span className="text-[10px] text-[#EDDCC8]/70">Seguir no Instagram</span>
              </div>
            </a>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PARTE 3: COPYRIGHT & RODAPÉ FINAL                        */}
        {/* ======================================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDDCC8]/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Edifício Espaço VIP. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right text-[11px]">
            Ituiutaba • Minas Gerais • Brasil
          </p>
        </div>
      </Container>
    </footer>
  );
}
