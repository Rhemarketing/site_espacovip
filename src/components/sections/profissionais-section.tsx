import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MapPin, ArrowRight } from "lucide-react";

export interface Professional {
  id: string;
  name: string;
  role: string;
  category: string;
  room: string;
  floor: string;
  image: string;
  phone: string;
  whatsappMessage: string;
  slug: string;
  tags: string[];
}

const PROFESSIONALS_DATA: Professional[] = [
  {
    id: "dra-camila-duarte",
    name: "Dra. Camila Duarte",
    role: "Médica Dermatologista",
    category: "Saúde & Estética",
    room: "Sala 204",
    floor: "2º Andar",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá Dra. Camila! Gostaria de agendar uma consulta dermatológica no Espaço VIP.",
    slug: "dra-camila-duarte",
    tags: ["Dermatologia", "Harmonização", "Laser"],
  },
  {
    id: "instituto-sorriso-vip",
    name: "Instituto Sorriso VIP",
    role: "Odontologia & Reabilitação",
    category: "Saúde & Odontologia",
    room: "Sala 301",
    floor: "3º Andar",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação odontológica no Instituto Sorriso VIP.",
    slug: "instituto-sorriso-vip",
    tags: ["Implantes Guiados", "Lentes Resina", "Invisalign"],
  },
  {
    id: "dr-marcelo-pimentel",
    name: "Dr. Marcelo Pimentel",
    role: "Psicólogo Clínico",
    category: "Saúde Mental",
    room: "Sala 208",
    floor: "2º Andar",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá Dr. Marcelo! Gostaria de agendar uma consulta psicológica no Espaço VIP.",
    slug: "dr-marcelo-pimentel",
    tags: ["Terapia Cognitiva", "Ansiedade", "Alta Performance"],
  },
  {
    id: "silveira-associados",
    name: "Silveira & Associados",
    role: "Advocacia Empresarial",
    category: "Corporativo & Jurídico",
    room: "Sala 105",
    floor: "1º Andar",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá! Gostaria de uma consultoria com a Silveira & Associados Advocacia.",
    slug: "silveira-associados",
    tags: ["Direito Tributário", "Agronegócio", "Contratos"],
  },
  {
    id: "dra-juliana-vasconcelos",
    name: "Dra. Juliana Vasconcelos",
    role: "Nutrologia & Longevidade",
    category: "Saúde & Nutrição",
    room: "Sala 305",
    floor: "3º Andar",
    image:
      "https://images.unsplash.com/photo-1594824813629-a78b53298ec6?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá Dra. Juliana! Gostaria de agendar uma consulta de nutrologia no Espaço VIP.",
    slug: "dra-juliana-vasconcelos",
    tags: ["Nutrologia", "Metabolismo", "Emagrecimento"],
  },
  {
    id: "studio-forma-arquitetura",
    name: "Studio Forma Arquitetura",
    role: "Arquitetura & Interiores",
    category: "Design & Projetos",
    room: "Sala 102",
    floor: "1º Andar",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá! Gostaria de solicitar um orçamento com o Studio Forma Arquitetura.",
    slug: "studio-forma-arquitetura",
    tags: ["Corporativo", "Interiores", "Consultoria"],
  },
  {
    id: "apex-gestao-contabil",
    name: "Apex Gestão Contábil",
    role: "Inteligência Fiscal & BPO",
    category: "Finanças & Negócios",
    room: "Sala 210",
    floor: "2º Andar",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá Apex Contábil! Gostaria de conhecer os serviços contábeis no Espaço VIP.",
    slug: "apex-gestao-contabil",
    tags: ["BPO Financeiro", "Planejamento Fiscal", "Auditoria"],
  },
  {
    id: "dr-roberto-mendes",
    name: "Dr. Roberto Mendes",
    role: "Ortopedia & Traumatologia",
    category: "Saúde & Medicina",
    room: "Sala 308",
    floor: "3º Andar",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    phone: "5534998730044",
    whatsappMessage:
      "Olá Dr. Roberto! Gostaria de agendar uma consulta ortopédica no Espaço VIP.",
    slug: "dr-roberto-mendes",
    tags: ["Ortopedia", "Medicina Esportiva", "Joelho & Coluna"],
  },
];

function WhatsAppIcon({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.888 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ProfessionalsSection() {
  return (
    <section
      id="profissionais"
      className="relative w-full bg-[#FFFAF1] py-14 sm:py-20 md:py-24 scroll-mt-10 overflow-hidden"
    >
      <Container>
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#755036]/10 text-[#755036] border border-[#755036]/20 mb-3.5">
            Corpo Clínico & Corporativo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#755036] font-sans mb-3 sm:mb-4 leading-tight">
            Profissionais & Empresas no Espaço VIP
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#755036]/80 leading-relaxed font-normal max-w-2xl">
            Conheça os especialistas e negócios de referência que atendem no complexo comercial e médico mais moderno de Ituiutaba.
          </p>
        </div>

        {/* Grade de Cards: 2 cards por linha no Mobile e quantos der no Desktop (4 por linha) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {PROFESSIONALS_DATA.map((item) => {
            const whatsappUrl = `https://wa.me/${item.phone}?text=${encodeURIComponent(
              item.whatsappMessage
            )}`;

            return (
              <div
                key={item.id}
                className="group relative bg-[#FFFFFF] rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-3.5 border border-[#EDDCC8] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Parte Superior: Foto em maior parte, Nome, Especialidade e Tags */}
                <div>
                  {/* Foto com destaque visual principal (aspect 4/5) */}
                  <div className="relative w-full aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-[#EDDCC8]/30 mb-2 sm:mb-2.5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge da Sala e Andar sobre a foto */}
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#755036]/85 backdrop-blur-xs text-[#FFFAF1] text-[10px] sm:text-xs font-semibold shadow-xs">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFFAF1]" />
                      <span>{item.room}</span>
                    </div>
                  </div>

                  {/* Nome do Profissional / Empresa */}
                  <h3 className="font-bold text-xs sm:text-sm md:text-base text-[#755036] font-sans leading-tight line-clamp-1 group-hover:text-[#5a3c26] transition-colors">
                    {item.name}
                  </h3>

                  {/* Especialidade / Subtítulo */}
                  <p className="text-[10px] sm:text-xs font-medium text-[#6E6D35] line-clamp-1 mt-0.5 mb-1.5">
                    {item.role}
                  </p>

                  {/* Tags com as áreas e serviços */}
                  <div className="flex flex-wrap gap-1 mb-2.5 sm:mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#755036] bg-[#EDDCC8]/50 px-1.5 py-0.5 rounded sm:rounded-md leading-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Parte Inferior: 2 Botões ("Contato" WhatsApp e "Saber mais") */}
                <div className="mt-auto pt-2 sm:pt-2.5 border-t border-[#EDDCC8]/60 flex flex-col gap-1.5">
                  {/* Botão 1: Contato (WhatsApp) */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 rounded-lg bg-[#6E6D35] hover:bg-[#5b5a2c] text-[#FFFAF1] text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-200 shadow-xs active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Contato</span>
                  </a>

                  {/* Botão 2: Saber mais */}
                  <Link
                    href={`/profissionais/${item.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1 py-1.5 sm:py-2 px-2 rounded-lg border border-[#755036]/30 hover:border-[#755036] bg-[#FFFAF1] hover:bg-[#755036] text-[#755036] hover:text-[#FFFAF1] text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>Saber mais</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
