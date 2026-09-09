import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecionando para WhatsApp...",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_URL =
  "https://wa.me/5534996932413?text=Quero%20ativar%20meu%20%2ACupom%20de%20desconto%2A%2C%20aqui%20na%20%2AClinica%20Campos%2A%21";

export default function CamposPage() {
  redirect(WHATSAPP_URL);
}
