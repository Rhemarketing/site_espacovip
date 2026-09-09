/**
 * Definições de Tipos - Espaço VIP Ituiutaba
 * Complexo Corporativo, Médico & Estúdio Vip Cast
 */

export type SpecialtyCategory =
  | "medicina"
  | "odontologia"
  | "psicologia"
  | "fisioterapia"
  | "estetica"
  | "juridico"
  | "contabil"
  | "tecnologia"
  | "consultoria"
  | "outro";

export interface Professional {
  id: string;
  name: string;
  specialty: string;
  category: SpecialtyCategory;
  councilRegistration?: string; // CRM, CRO, CRP, OAB, etc.
  roomNumber: string;
  floor: string;
  bio?: string;
  avatarUrl: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  website?: string;
  services?: string[];
  isHighlighted?: boolean;
}

export type FeatureCategory =
  | "tecnologia"
  | "seguranca"
  | "conforto"
  | "exclusividade"
  | "sustentabilidade"
  | "estudio";

export interface Feature {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  badge?: string;
  imageUrl?: string;
  category: FeatureCategory;
  stats?: {
    value: string;
    label: string;
  };
}

export type SpaceUnitType =
  | "consultorio"
  | "escritorio"
  | "sala_comercial"
  | "estudio_vipcast"
  | "auditorio";

export type SpaceStatus = "disponivel" | "reservada" | "sob_consulta";

export interface SpaceUnit {
  id: string;
  name: string;
  type: SpaceUnitType;
  areaM2: number;
  floor: string;
  status: SpaceStatus;
  description: string;
  highlights: string[];
  images: string[];
  pricing?: {
    type: "locacao" | "venda" | "diaria" | "hora";
    valueFormatted?: string;
    isUnderConsultation: boolean;
  };
  ctaText?: string;
}

export interface VipCastStudioInfo {
  id: string;
  title: string;
  tagline: string;
  description: string;
  equipment: string[];
  differentials: string[];
  formatsSupported: string[]; // Podcasts, Videocasts, Webinars, Gravação de Cursos
  images: string[];
  bookingWhatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrClinic?: string;
  avatarUrl?: string;
  content: string;
  rating: number; // 1 a 5
  roomOrSpecialty?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: "geral" | "locacao" | "vipcast" | "portaria" | "estacionamento";
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  isButton?: boolean;
  isExternal?: boolean;
}

export interface AddressInfo {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  reference?: string;
  googleMapsEmbedUrl?: string;
  googleMapsDirectUrl?: string;
}

export interface ContactInfo {
  address: AddressInfo;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  defaultWhatsappMessage: string;
  email: string;
  scheduleHours: {
    reception: string;
    digitalAccess: string;
    parking: string;
  };
  socials: {
    instagram?: string;
    instagramHandle?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface SiteConfig {
  name: string;
  tradeName: string;
  tagline: string;
  description: string;
  url: string;
  keywords: string[];
  ogImage: string;
  contact: ContactInfo;
}
