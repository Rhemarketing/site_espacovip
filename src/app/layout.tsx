import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Fonte principal do corpo (Clean, Moderna e Corporativa)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Fonte de destaque sofisticada (Títulos e Branding)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

// Fonte secundária para badges e subtítulos modernos
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#070A10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://espacovipituiutaba.com.br"),
  title: {
    default: "Espaço VIP Ituiutaba | Edifício Corporativo e de Saúde",
    template: "%s | Espaço VIP Ituiutaba",
  },
  description:
    "O endereço de maior prestígio para seu consultório ou empresa em Ituiutaba. Salas de alto padrão, portaria digital inteligente, estúdio Vip Cast e localização privilegiada.",
  keywords: [
    "Espaço VIP Ituiutaba",
    "Edifício Corporativo Ituiutaba",
    "Consultórios em Ituiutaba",
    "Salas Comerciais Ituiutaba",
    "Clínicas Médicas Ituiutaba",
    "Vip Cast Podcast",
    "Portaria Digital Ituiutaba",
    "Locação de Salas Ituiutaba",
  ],
  authors: [{ name: "Espaço VIP Ituiutaba" }],
  creator: "Espaço VIP Ituiutaba",
  publisher: "Espaço VIP Ituiutaba",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://espacovipituiutaba.com.br",
    siteName: "Espaço VIP Ituiutaba",
    title: "Espaço VIP Ituiutaba | Edifício Corporativo e de Saúde",
    description:
      "O complexo corporativo e médico mais moderno e sofisticado de Ituiutaba. Salas comerciais, portaria digital e estúdio Vip Cast.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Espaço VIP Ituiutaba - Edifício Corporativo e de Saúde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espaço VIP Ituiutaba | Edifício Corporativo e de Saúde",
    description:
      "O endereço de maior prestígio para seu consultório ou empresa em Ituiutaba.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${playfair.variable} ${montserrat.variable} dark`}
    >
      <body className="min-h-screen bg-[#070A10] text-[#F8FAFC] antialiased selection:bg-[#C6A87D]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
