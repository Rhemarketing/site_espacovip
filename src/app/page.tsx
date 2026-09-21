import { headers } from "next/headers";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { EmDesenvolvimento } from "@/components/sections/em-desenvolvimento";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ preview?: string }> | { preview?: string };
}) {
  const headersList = await headers();
  const host = (
    headersList.get("x-forwarded-host") ||
    headersList.get("host") ||
    ""
  ).toLowerCase();

  const resolvedParams =
    searchParams instanceof Promise ? await searchParams : searchParams;
  const isExplicitPreview =
    resolvedParams?.preview === "true" || resolvedParams?.preview === "1";
  const isExplicitMaintenance =
    resolvedParams?.preview === "false" || resolvedParams?.preview === "0";

  // Identifica domínios de desenvolvimento / teste (localhost e Easypanel)
  const isPreviewHost =
    !isExplicitMaintenance &&
    (host.includes("localhost") ||
      host.includes("127.0.0.1") ||
      host.includes("easypanel.host") ||
      isExplicitPreview);

  // Em produção com domínio público, exibe a tela "Em Desenvolvimento"
  if (!isPreviewHost) {
    return <EmDesenvolvimento />;
  }

  return (
    <div className="min-h-screen bg-[#755036] flex flex-col selection:bg-[#FFFAF1]/30 selection:text-white">
      {/* Header com logo primária centralizada */}
      <Header />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <HeroSection />

        {/* Âncora para a futura seção Profissionais */}
        <div id="profissionais" className="scroll-mt-10" />
      </main>
    </div>
  );
}
