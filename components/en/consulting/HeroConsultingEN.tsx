"use client";

import { motion } from "framer-motion";

export default function HeroConsultingEN() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32">

      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            DAPA Consulting
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Regain control of your personal finances
            <br />
            through a structure designed for your life.
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-4xl mx-auto mb-16">
            Most people try to solve their finances with more income,
            more effort, or more information.
            <br />
            My experience has shown that the real problem often lies elsewhere:
            the absence of a financial structure aligned with the life they want to build.
          </p>

          <a
            href="https://calendly.com/finanzassmartia2025/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C6A972] text-black px-10 py-5 rounded-full font-medium hover:opacity-90 transition"
          >
            Request a DAPA Financial Assessment
          </a>

        </motion.div>

      </div>

    </section>
  );
}