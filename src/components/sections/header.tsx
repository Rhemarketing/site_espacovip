"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Building, ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-data";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: "O Espaço", href: "#nosso-espaco" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Especialistas", href: "#profissionais" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao redimensionar tela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Travar scroll do body quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsappMessage
  )}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#070A10]/85 backdrop-blur-xl border-b border-[#C6A87D]/20 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A87D] rounded-lg"
            aria-label="Espaço VIP Ituiutaba - Início"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#121A2B] to-[#070A10] border border-[#C6A87D]/40 flex items-center justify-center text-[#C6A87D] shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C6A87D]">
              <Building className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#070A10]" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#E9DCBF] transition-colors">
                  ESPAÇO <span className="text-gradient-gold">VIP</span>
                </span>
              </div>
              <span className="text-[10px] font-montserrat font-medium tracking-[0.2em] text-[#C6A87D]/90 uppercase -mt-0.5">
                Ituiutaba • MG
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#121A2B]/70 border border-white/10 backdrop-blur-md shadow-inner"
            aria-label="Navegação Principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-[#E9DCBF] transition-colors rounded-full hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Ações Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={whatsappUrl}
              isExternal
              variant="gold"
              size="sm"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Quero uma Sala
            </Button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href={whatsappUrl}
              isExternal
              variant="gold"
              size="sm"
              className="text-xs px-3 py-1.5 sm:px-4 sm:py-2"
            >
              Salas
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#121A2B] border border-white/10 text-slate-200 hover:text-[#C6A87D] hover:border-[#C6A87D]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A87D]"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#C6A87D]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu Mobile Drawer / Dropdown */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[65px] bg-[#070A10]/95 backdrop-blur-2xl border-b border-[#C6A87D]/30 transition-all duration-300 ease-in-out shadow-2xl overflow-hidden",
          isMobileMenuOpen
            ? "max-h-[85vh] opacity-100 py-6"
            : "max-h-0 opacity-0 py-0 pointer-events-none border-transparent"
        )}
      >
        <Container>
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A87D] font-montserrat px-3">
              Navegação
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-[#121A2B] border border-transparent hover:border-white/10 transition-all"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C6A87D] opacity-60" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Button
                href={whatsappUrl}
                isExternal
                variant="gold"
                size="lg"
                className="w-full justify-center"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quero uma Sala no Espaço VIP
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 py-2">
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Atendimento via WhatsApp: {siteConfig.contact.whatsappFormatted}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
