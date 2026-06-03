"use client";

import { useState } from "react";

import HeroConsultoria from "@/components/consultoria/HeroConsultoria";
import ConsultoriaContent from "@/components/consultoria/ConsultoriaContent";

export default function ConsultoriaPage() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <a
            href="/"
            className="text-sm tracking-[0.25em] uppercase text-[#C6A972]"
          >
            Richard Couget
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <a href="/" className="hover:text-white transition">
              Volver
            </a>

            <a
              href="https://calendly.com/finanzassmartia2025/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A972]"
            >
              Agendar reunión
            </a>

            <div className="flex items-center gap-3 ml-6 text-xs tracking-[0.25em] uppercase">

              <a href="/" className="text-white">
                ES
              </a>

              <span className="text-white/20">|</span>

              <a href="/en/consulting" className="text-white/50">
                EN
              </a>

            </div>

          </nav>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">

            <nav className="flex flex-col px-8 py-8 gap-6 text-gray-300">

            <a href="/" className="hover:text-white transition">
              Volver
            </a>

            <a
              href="https://calendly.com/finanzassmartia2025/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A972]"
            >
              Agendar reunión
            </a>

              <div className="flex items-center gap-3 pt-4 text-xs tracking-[0.25em] uppercase">

                <a
                  href="/"
                  className="text-white"
                >
                  ES
                </a>

                <span className="text-white/20">|</span>

                <a
                  href="/en"
                  className="text-white/50"
                >
                  EN
                </a>

              </div>

            </nav>

          </div>

        )}

      </header>

      <HeroConsultoria />
      <ConsultoriaContent />

    </main>
  );
}