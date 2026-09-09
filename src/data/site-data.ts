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
    "O centro de excelência corporativa e médica em Ituiutaba. Estrutura inteligente com 20 salas, 3 recepções, portaria digital com Face ID e estúdio Vip Cast.",
  url: "https://espacovipituiutaba.com.br",
  keywords: [
    "Espaço VIP Ituiutaba",
    "Salas Comerciais Ituiutaba",
    "Consultórios Médicos Ituiutaba",
    "Vip Cast Podcast",
    "Portaria Digital Face ID",
    "Edifício Corporativo Ituiutaba",
  ],
  ogImage: "/images/hero-building.jpg",
  contact: {
    address: {
      street: "Rua 20",
      number: "1234",
      neighborhood: "Centro",
      city: "Ituiutaba",
      state: "MG",
      zipCode: "38300-000",
      reference: "Localização nobre e estratégica no coração comercial da cidade",
    },
    phone: "3498730044",
    phoneFormatted: "(34) 9873-0044",
    whatsapp: "553498730044",
    whatsappFormatted: "+55 34 9873-0044",
    defaultWhatsappMessage:
      "Olá! Gostaria de saber mais sobre as salas e serviços do Espaço VIP Ituiutaba.",
    email: "contato@espacovipituiutaba.com.br",
    scheduleHours: {
      reception: "Segunda a Sexta: 07:00 às 19:00 | Sábado: 08:00 às 12:00",
      digitalAccess: "24 horas por dia, 7 dias por semana (com Face ID e biometria)",
      parking: "Estacionamento com acesso facilitado",
    },
    socials: {
      instagram: "https://instagram.com/espacovipituiutaba",
      instagramHandle: "@espacovipituiutaba",
      facebook: "https://facebook.com/espacovipituiutaba",
      youtube: "https://youtube.com/@espacovipituiutaba",
    },
  },
};

export interface InfrastructureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  highlightTag?: string;
}

export const infrastructureItems: InfrastructureItem[] = [
  {
    id: "salas-andares",
    title: "20 Salas em 2 Andares",
    category: "Espaço Modular",
    description:
      "Plantas inteligentes e modulares preparadas para consultórios médicos, clínicas de estética, escritórios de advocacia, consultoria e empresas.",
    iconName: "Building2",
    highlightTag: "Alta Flexibilidade",
  },
  {
    id: "recepcoes-climatizadas",
    title: "3 Recepções Climatizadas",
    category: "Conforto & Acolhimento",
    description:
      "Salas de espera amplas e decoradas que eliminam a sensação de espera fria, oferecendo atendimento humanizado e acolhedor aos seus clientes.",
    iconName: "Armchair",
    highlightTag: "Lounge VIP",
  },
  {
    id: "acessibilidade-pcd",
    title: "Acessibilidade Plena (Normas PCD)",
    category: "Inclusão & Conformidade",
    description:
      "Banheiros adaptados, portas dimensionadas e corredores amplos garantindo acesso seguro e confortável a todos os pacientes e visitantes.",
    iconName: "Accessibility",
    highlightTag: "100% Acessível",
  },
  {
    id: "copa-cozinha",
    title: "Copa e Cozinha Completa",
    category: "Conveniência Exclusiva",
    description:
      "Espaço reservado e equipado para refeições, café e momentos de descompressão e networking exclusivo entre os condôminos.",
    iconName: "Coffee",
    highlightTag: "Uso dos Condôminos",
  },
  {
    id: "climatizacao-conectividade",
    title: "Climatização & Conectividade",
    category: "Infraestrutura Técnica",
    description:
      "Ambientes 100% climatizados e infraestrutura de internet de alta velocidade em fibra óptica redundante para operação ininterrupta.",
    iconName: "Wifi",
    highlightTag: "Fibra Redundante",
  },
  {
    id: "marketing-sensorial",
    title: "Marketing Sensorial & Visual",
    category: "Experiência de Marca",
    description:
      "Identidade olfativa exclusiva com aroma de prestígio e iluminação arquitetônica indireta que ativam gatilhos imediatos de bem-estar.",
    iconName: "Sparkles",
    highlightTag: "Ambiente Nobre",
  },
];

export const infrastructureStats = [
  { value: "20", label: "Salas Exclusivas", subtext: "Modulares e prontas" },
  { value: "02", label: "Andares Corporativos", subtext: "Distribuição funcional" },
  { value: "03", label: "Recepções Decoradas", subtext: "Climatizadas e confortáveis" },
  { value: "+1.000m²", label: "Área Total", subtext: "Dedicada ao seu sucesso" },
];

export interface TechLayer {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
}

export const accessLayers: TechLayer[] = [
  {
    id: "face-id",
    name: "Face ID Inteligente",
    badge: "Reconhecimento Facial",
    tagline: "Acesso em menos de 1 segundo",
    description:
      "Algoritmo biométrico avançado que reconhece profissionais e equipes cadastradas com máxima precisão, sem toque e com total segurança.",
    iconName: "ScanFace",
    features: [
      "Reconhecimento sem contato físico",
      "Leitura ultra-rápida mesmo com pouca luz",
      "Controle individual de permissões por sala",
    ],
  },
  {
    id: "biometria",
    name: "Biometria Digital",
    badge: "Alta Confiabilidade",
    tagline: "Elimine chaves e tags físicas",
    description:
      "Acesso seguro por impressão digital integrado ao sistema de segurança central, eliminando perdas de chaves ou esquecimento de cartões.",
    iconName: "Fingerprint",
    features: [
      "Sem necessidade de chaves mecânicas",
      "Registro de auditoria em tempo real",
      "Operação redundante 24/7",
    ],
  },
  {
    id: "qr-code",
    name: "QR Code para Clientes",
    badge: "Convite via WhatsApp",
    tagline: "Recepção ágil e sem filas",
    description:
      "Gere links com QR Code de acesso temporário e envie para seu paciente ou cliente antes da consulta para entrada imediata pelo totem.",
    iconName: "QrCode",
    features: [
      "Envio direto pelo WhatsApp com 1 clique",
      "Validade e horário programados",
      "Notificação instantânea quando o cliente chega",
    ],
  },
];

export const vipCastInfo: VipCastStudioInfo = {
  id: "vip-cast-ituiutaba",
  title: "Estúdio Vip Cast Ituiutaba",
  tagline: "O estúdio de gravação mais moderno do Triângulo Mineiro",
  description:
    "Ambiente acústico profissional de alto nível, projetado para que profissionais da saúde, advogados, consultores e marcas gravem conteúdos de altíssima autoridade digital.",
  equipment: [
    "Câmeras 4K Sony com lentes cinematográficas",
    "Microfones broadcast Shure SM7B e Rode",
    "Mesa de som e interface de áudio Rodecaster Pro II",
    "Iluminação profissional dimerizável em LED e RGB",
    "Cenários modulares com LED e painel acústico em madeira",
    "Suporte de operador técnico e pós-produção",
  ],
  differentials: [
    "Isolamento acústico com laudos técnicos",
    "Transmissão ao vivo simultânea (YouTube, Instagram, LinkedIn)",
    "Climatização silenciosa inverter",
    "Condições e descontos exclusivos para condôminos do Espaço VIP",
  ],
  formatsSupported: [
    "Podcasts & Videocasts",
    "Entrevistas Corporativas & Lançamentos",
    "Gravação de Cursos e Treinamentos",
    "Reels, Shorts e Pílulas de Conteúdo",
  ],
  images: ["/images/vipcast-studio.jpg"],
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
      "O agendamento do Estúdio Vip Cast pode ser realizado por diárias ou pacotes de horas diretamente pelo WhatsApp da administração do Espaço VIP, com opções incluindo ou não operador e edição. Condôminos têm tarifas especiais.",
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
      "Sim, temos unidades disponíveis com metragens variadas, preparadas tanto para consultórios da área da saúde quanto para escritórios corporativos. Entre em contato conosco para agendar uma visita guiada.",
    category: "locacao",
  },
];
