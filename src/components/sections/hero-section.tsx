"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const SALAS_IMAGES = [
  "/images/salas/1.jpg",
  "/images/salas/2.jpg",
  "/images/salas/3 (1).png",
  "/images/salas/4.jpg",
];

function WhatsAppIcon({
  className = "w-6 h-6 sm:w-5 sm:h-5 shrink-0",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.888 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SALAS_IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = `https://wa.me/5534998730044?text=${encodeURIComponent(
    "Olá! Gostaria de mais informações para reservar uma sala no Espaço VIP."
  )}`;

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] bg-[#FFFAF1] pb-14 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center">
      {/* ======================================================== */}
      {/* VERSÃO MOBILE: Imagens em 5:4 no topo com degradê vertical */}
      {/* ======================================================== */}
      <div className="absolute top-0 left-0 right-0 w-full aspect-[5/4] pointer-events-none overflow-hidden lg:hidden z-0">
        {SALAS_IMAGES.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={`mobile-${src}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-50" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Sala comercial Espaço VIP ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Degradê no Mobile: de baixo (100% opacidade #FFFAF1) para cima (0% opacidade) */}
      <div
        className="absolute top-0 left-0 right-0 aspect-[5/4] pointer-events-none lg:hidden z-[1]"
        style={{
          background:
            "linear-gradient(to top, #FFFAF1 0%, rgba(255, 250, 241, 0) 100%)",
        }}
      />

      {/* ======================================================== */}
      {/* VERSÃO DESKTOP: Imagens no lado direito com degradê horizontal */}
      {/* ======================================================== */}
      <div className="absolute inset-0 lg:left-[45%] lg:w-[55%] pointer-events-none overflow-hidden hidden lg:block z-0">
        {SALAS_IMAGES.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={`desktop-${src}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Sala comercial Espaço VIP ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="55vw"
              />
            </div>
          );
        })}
      </div>

      {/* Degradê no Desktop: 100% opacidade até 50% de largura, reduzindo até 0% no lado direito */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block z-[1]"
        style={{
          background:
            "linear-gradient(to right, #FFFAF1 0%, #FFFAF1 50%, rgba(255, 250, 241, 0) 100%)",
        }}
      />

      {/* ======================================================== */}
      {/* CONTEÚDO PRINCIPAL (TÍTULO, DESCRIÇÃO E BOTÕES) */}
      {/* ======================================================== */}
      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-2xl mx-auto sm:mx-0">
          {/* Título: "SALAS COMERCIAIS" com brilho sutil atrás */}
          <div className="relative inline-block">
            {/* Brilho sutil iluminando atrás do título para aumentar o contraste com o background */}
            <div
              className="absolute -inset-3 sm:-inset-6 bg-[#FFFAF1]/85 rounded-full blur-2xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <h1 className="relative text-[52px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#755036] font-sans leading-[1.05] mb-4 sm:mb-5 drop-shadow-[0_2px_14px_rgba(255,250,241,0.9)]">
              <span className="block sm:inline">SALAS</span>{" "}
              <span className="block sm:inline">COMERCIAIS</span>
            </h1>
          </div>

          {/* Descrição: reduzida em 0.8x (text-[19px] no mobile, sm:text-base md:text-xl) */}
          <p className="text-[19px] sm:text-base md:text-xl text-[#755036]/85 font-medium tracking-wide mb-8 sm:mb-10 max-w-xl leading-snug">
            Conforto, tecnologia e segurança
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* Botão Reservar Sala: 75% da largura da tela no mobile (w-[75vw]), sm:w-auto no desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[75vw] sm:w-auto inline-flex items-center justify-center gap-2.5 px-3 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#6E6D35] text-[#FFFAF1] font-semibold text-lg sm:text-base shadow-lg shadow-[#6E6D35]/25 hover:bg-[#5b5a2c] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-6 h-6 sm:w-5 sm:h-5 shrink-0" />
              <span>Reservar Sala</span>
            </a>

            {/* Botão Profissionais: 75% da largura da tela no mobile (w-[75vw]), sm:w-auto no desktop */}
            <Link
              href="#profissionais"
              className="w-[75vw] sm:w-auto inline-flex items-center justify-center px-3 py-3.5 sm:px-8 sm:py-4 rounded-xl border-2 border-[#fff7f1] text-[#755036] bg-[#FFFAF1] font-semibold text-lg sm:text-base hover:bg-[#755036] hover:text-[#FFFAF1] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              <span>Profissionais</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
