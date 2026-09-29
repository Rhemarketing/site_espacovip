import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecionando para Instagram...",
  robots: {
    index: false,
    follow: false,
  },
};

const INSTAGRAM_URL = "https://www.instagram.com/hermanofreitas";

export default function HermanoPage() {
  redirect(INSTAGRAM_URL);
}
