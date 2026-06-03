"use client";

import { motion } from "framer-motion";

export default function HeroConsultoria() {
  return (

    <section className="min-h-screen flex items-center justify-center px-8 pt-32">

      <div className="max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-8"
        >
          Consultoría DAPA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light leading-tight mb-10"
        >
          Recupera el control
          <br />
          de tus finanzas personales
          <br />
          mediante una estructura
          diseñada para tu vida.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          La mayoría de las personas intenta resolver sus finanzas
          con más ingresos, más esfuerzo o más información.
          Mi experiencia me ha demostrado que el verdadero problema
          suele estar en otro lugar:
          la ausencia de una estructura financiera coherente
          con la vida que desean construir.
        </motion.p>

        <a
            href="https://calendly.com/finanzassmartia2025/30min"
         target="_blank"
         rel="noopener noreferrer"
         className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
        >
         Solicitar un Diagnóstico Financiero DAPA
        </a>

      </div>

    </section>
  );
}