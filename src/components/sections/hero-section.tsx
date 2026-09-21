"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MessageCircle, Users } from "lucide-react";

const SALAS_IMAGES = [
  "/images/salas/1.jpg",
  "/images/salas/2.jpg",
  "/images/salas/3 (1).png",
  "/images/salas/4.jpg",
];

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
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] bg-[#755036] py-16 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center">
      {/* SLIDESHOW DE IMAGENS */}
      {/* Mobile/Tablet: ocupa todo o fundo com 50% de opacidade na imagem ativa */}
      {/* Desktop (lg): posicionado no lado direito */}
      <div className="absolute inset-0 lg:left-[45%] lg:w-[55%] pointer-events-none overflow-hidden z-0">
        {SALAS_IMAGES.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-50 lg:opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Sala comercial Espaço VIP ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          );
        })}
      </div>

      {/* OVERLAY DEGRADÊ NO DESKTOP */}
      {/* 100% de opacidade de #755036 até 50% da largura, diminuindo suavemente até 0% no lado direito */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block z-[1]"
        style={{
          background:
            "linear-gradient(to right, #755036 0%, #755036 50%, rgba(117, 80, 54, 0) 100%)",
        }}
      />

      {/* CONTEÚDO PRINCIPAL (TÍTULO, DESCRIÇÃO E BOTÕES) */}
      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-2xl">
          {/* Título: "SALAS COMERCIAIS" */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFAF1] font-sans leading-[1.1] mb-5">
            <span className="block sm:inline">SALAS</span>{" "}
            <span className="block sm:inline">COMERCIAIS</span>
          </h1>

          {/* Descrição */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#EDDCC8] font-medium tracking-wide mb-8 sm:mb-10 max-w-xl">
            Conforto, tecnologia e segurança
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 w-full sm:w-auto">
            {/* Botão Reservar Sala */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFFAF1] text-[#755036] font-bold text-base shadow-xl shadow-black/20 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-[#755036]" />
              <span>Reservar Sala</span>
            </a>

            {/* Botão Profissionais */}
            <Link
              href="#profissionais"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border-2 border-[#FFFAF1] text-[#FFFAF1] bg-transparent font-semibold text-base hover:bg-[#FFFAF1] hover:text-[#755036] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              <span>Profissionais</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
