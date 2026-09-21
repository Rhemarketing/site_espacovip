import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-[#755036] py-3 sm:py-5 px-4 flex items-center justify-center shadow-md">
      <Link
        href="/"
        className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
        aria-label="Espaço VIP - Início"
      >
        <Image
          src="/images/logo-primaria.png"
          alt="Espaço VIP"
          width={1248}
          height={199}
          priority
          className="h-6 sm:h-11 md:h-12 w-auto object-contain"
        />
      </Link>
    </header>
  );
}
