import {
  SiteConfig,
  Feature,
  SpaceUnit,
  VipCastStudioInfo,
  FaqItem,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Espaço VIP Ituiutaba",
  tradeName: "Edifício Espaço VIP",
  tagline: "Complexo Corporativo, Médico & Estúdio Vip Cast",
  description:
    "O centro de excelência corporativa e médica em Ituiutaba. Estrutura inteligente com portaria digital, salas de alto padrão e localização nobre.",
  url: "https://espacovipituiutaba.com.br",
  keywords: [
    "Espaço VIP Ituiutaba",
    "Salas Comerciais",
    "Consultórios Médicos",
    "Vip Cast Podcast",
    "Portaria Digital",
    "Edifício Corporativo",
  ],
  ogImage: "/images/og-image.jpg",
  contact: {
    address: {
      street: "Rua 20",
      number: "1234",
      neighborhood: "Centro",
      city: "Ituiutaba",
      state: "MG",
      zipCode: "38300-000",
      reference: "Próximo aos principais centros comerciais e médicos da cidade",
    },
    phone: "34999999999",
    phoneFormatted: "(34) 99999-9999",
    whatsapp: "5534999999999",
    whatsappFormatted: "(34) 99999-9999",
    defaultWhatsappMessage:
      "Olá! Gostaria de saber mais sobre as salas e serviços do Espaço VIP Ituiutaba.",
    email: "contato@espacovipituiutaba.com.br",
    scheduleHours: {
      reception: "Segunda a Sexta: 07:00 às 19:00 | Sábado: 08:00 às 12:00",
      digitalAccess: "24 horas por dia, 7 dias por semana (com biometria/facial)",
      parking: "Estacionamento com acesso facilitado",
    },
    socials: {
      instagram: "https://instagram.com/espacovipituiutaba",
      facebook: "https://facebook.com/espacovipituiutaba",
      youtube: "https://youtube.com/@espacovipituiutaba",
    },
  },
};

export const mainFeatures: Feature[] = [
  {
    id: "portaria-digital",
    title: "Portaria Digital 24h",
    subtitle: "Acesso Autônomo e Seguro",
    description:
      "Sistema biométrico e reconhecimento facial com liberação via QR Code para visitantes e clientes com total agilidade.",
    iconName: "ShieldCheck",
    badge: "Tecnologia",
    category: "tecnologia",
    stats: {
      value: "24/7",
      label: "Acesso Seguro",
    },
  },
  {
    id: "vip-cast-studio",
    title: "Estúdio Vip Cast",
    subtitle: "Produção Audiovisual Completa",
    description:
      "Estúdio acústico profissional equipado com microfones broadcast, iluminação de cinema e gravação multicâmera 4K.",
    iconName: "Mic",
    badge: "Exclusivo",
    category: "estudio",
    stats: {
      value: "4K HDR",
      label: "Qualidade de Gravação",
    },
  },
  {
    id: "salas-premium",
    title: "Salas & Consultórios Sob Medida",
    subtitle: "Arquitetura e Conforto",
    description:
      "Plantas flexíveis adaptáveis para consultórios médicos, odontológicos, escritórios de advocacia e empresas de tecnologia.",
    iconName: "Building2",
    badge: "Alto Padrão",
    category: "conforto",
    stats: {
      value: "100%",
      label: "Personalizável",
    },
  },
  {
    id: "polo-networking",
    title: "Polo Médico e Corporativo",
    subtitle: "Sinergia Profissional",
    description:
      "Ecossistema seleto que estimula networking qualificado entre profissionais da saúde, direito, finanças e inovação.",
    iconName: "Users",
    badge: "Comunidade VIP",
    category: "exclusividade",
    stats: {
      value: "+40",
      label: "Profissionais e Empresas",
    },
  },
];

export const vipCastInfo: VipCastStudioInfo = {
  id: "vip-cast-ituiutaba",
  title: "Estúdio Vip Cast Ituiutaba",
  tagline: "O estúdio de gravação mais moderno do Triângulo Mineiro",
  description:
    "Grave seus podcasts, videocasts, entrevistas institucionais e aulas online em um ambiente com tratamento acústico de ponta e tecnologia de ponta.",
  equipment: [
    "Câmeras 4K Sony com lentes cinematográficas",
    "Microfones Shure SM7B e Rode Procaster",
    "Mesa de som e interface Rodecaster Pro II",
    "Iluminação profissional RGB e Keylights dimerizáveis",
    "Cenários modulares com LED personalizável",
    "Operador técnico e edição pós-produção disponíveis",
  ],
  differentials: [
    "Isolamento acústico com laudos técnicos",
    "Transmissão ao vivo simultânea (YouTube, Instagram, LinkedIn)",
    "Climatização silenciosa inverter",
    "Ambiente lounge e camarim de apoio",
  ],
  formatsSupported: [
    "Podcasts & Videocasts",
    "Entrevistas Corporativas & Lançamentos",
    "Gravação de Cursos e Treinamentos",
    "Webinars & Lives Profissionais",
  ],
  images: ["/images/vipcast/studio-1.jpg", "/images/vipcast/studio-2.jpg"],
  bookingWhatsappMessage:
    "Olá! Gostaria de agendar um horário para gravação no Estúdio Vip Cast.",
};

export const sampleSpaces: SpaceUnit[] = [
  {
    id: "sala-301",
    name: "Consultório Executivo Premium - Sala 301",
    type: "consultorio",
    areaM2: 45,
    floor: "3º Andar",
    status: "disponivel",
    description:
      "Amplo consultório com vista panorâmica, recepção privativa, lavabo duplo e infraestrutura pronta para ar-condicionado e equipamentos de saúde.",
    highlights: [
      "Piso em porcelanato acetinado",
      "Ponto de água e esgoto adicional",
      "Iluminação LED linear instalada",
      "1 vaga de garagem privativa inclusa",
    ],
    images: ["/images/spaces/sala-301-1.jpg"],
    pricing: {
      type: "locacao",
      isUnderConsultation: true,
    },
  },
  {
    id: "sala-402",
    name: "Sala Corporativa Dupla - Sala 402",
    type: "sala_comercial",
    areaM2: 68,
    floor: "4º Andar",
    status: "disponivel",
    description:
      "Espaço corporativo amplo ideal para escritórios de advocacia, tecnologia ou clínicas multidisciplinares.",
    highlights: [
      "Layout aberto com possibilidade de divisórias",
      "2 lavabos privativos",
      "Copa integrada",
      "2 vagas de garagem privativas",
    ],
    images: ["/images/spaces/sala-402-1.jpg"],
    pricing: {
      type: "locacao",
      isUnderConsultation: true,
    },
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Como funciona o acesso à portaria digital?",
    answer:
      "Os condôminos e profissionais cadastrados possuem acesso 24h via reconhecimento facial ou biometria. Para clientes e pacientes, o acesso é liberado via totem digital com QR Code emitido previamente ou recepção inteligente.",
    category: "portaria",
  },
  {
    id: "faq-2",
    question: "Como posso agendar o Estúdio Vip Cast?",
    answer:
      "O agendamento do Estúdio Vip Cast pode ser realizado por diárias ou pacotes de horas diretamente pelo WhatsApp da administração do Espaço VIP, com opções incluindo ou não operador e edição.",
    category: "vipcast",
  },
  {
    id: "faq-3",
    question: "Quais tipos de profissionais e empresas atuam no Espaço VIP?",
    answer:
      "O complexo abriga médicos de diversas especialidades, dentistas, psicólogos, clínicas de estética avançada, escritórios de advocacia, contabilidade e empresas de inovação.",
    category: "geral",
  },
  {
    id: "faq-4",
    question: "Existem opções de salas disponíveis para locação imediata?",
    answer:
      "Sim, temos unidades disponíveis com metragens variadas (de 35m² a 150m²), preparadas tanto para consultórios da área da saúde quanto para escritórios corporativos. Entre em contato conosco para agendar uma visita guiada.",
    category: "locacao",
  },
];
