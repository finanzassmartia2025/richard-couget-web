"use client";

import { useState } from "react";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodSection from "@/components/MethodSection";
import BookSection from "@/components/BookSection";
import AppSection from "@/components/AppSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="text-sm tracking-[0.25em] uppercase text-[#C6A972]">
            Richard Couget
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <a href="#home" className="hover:text-white transition">
              Inicio
            </a>

            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>

            <a href="#method" className="hover:text-white transition">
              Método DAPA
            </a>

            <a href="#book" className="hover:text-white transition">
              Libro
            </a>

            <a href="#app" className="hover:text-white transition">
              App
            </a>

            <a href="#blog" className="hover:text-white transition">
              Blog
            </a>

            <a href="/consultoria" className="bg-[#C6A972] text-black px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
               Consultoría DAPA
            </a>

            {/* SELECTOR IDIOMA */}
            <div className="flex items-center gap-3 ml-6 text-xs tracking-[0.25em] uppercase">

              <a
                href="/"
                className="text-white hover:text-[#C6A972] transition"
              >
                ES
              </a>

              <span className="text-white/20">|</span>

              <a
                href="/en"
                className="text-white/50 hover:text-[#C6A972] transition"
              >
                EN
              </a>

            </div>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">

            <nav className="flex flex-col px-8 py-8 gap-6 text-gray-300">

              <a href="#home" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                Sobre mí
              </a>

              <a href="#method" onClick={() => setMenuOpen(false)}>
                Método DAPA
              </a>

              <a href="#book" onClick={() => setMenuOpen(false)}>
                Libro
              </a>

              <a href="#app" onClick={() => setMenuOpen(false)}>
                App
              </a>

              <a href="#blog" onClick={() => setMenuOpen(false)}>
                Blog
              </a>

              <a href="/consultoria" className="bg-[#C6A972] text-black px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
                Consultoría DAPA
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

      <HeroSection />
      <AboutSection />
      <MethodSection />
      <BookSection />
      <AppSection />
      <BlogSection />
      <FooterSection />

    </main>
  );
}