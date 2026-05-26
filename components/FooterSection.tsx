"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="py-32 px-8 border-t border-white/5">

      <div className="max-w-7xl mx-auto">

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Newsletter DAPA
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
            Reflexiones sobre claridad financiera
            <br />
            y estabilidad sostenible.
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Suscríbete para recibir ideas, análisis y perspectivas
            sobre finanzas personales, estructura financiera y diseño consciente.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">

            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 text-white outline-none"
            />

            <button className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition">
              Suscribirme
            </button>

          </div>

        </motion.div>

        {/* FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">

          {/* MARCA */}
          <div>

            <h3 className="text-2xl font-light mb-6">
              Richard Couget
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Método DAPA —
              Finanzas personales desde la estructura,
              la claridad y el diseño consciente.
            </p>

          </div>

          {/* NAVEGACIÓN */}
          <div>

            <h4 className="text-white mb-6 uppercase tracking-[0.2em] text-sm">
              Navegación
            </h4>

            <div className="flex flex-col gap-4 text-gray-500">

              <a href="#" className="hover:text-white transition">
                Inicio
              </a>

              <a href="#" className="hover:text-white transition">
                Sobre mí
              </a>

              <a href="#" className="hover:text-white transition">
                Método DAPA
              </a>

              <a href="#" className="hover:text-white transition">
                Libro
              </a>

              <a href="#" className="hover:text-white transition">
                App
              </a>

              <a href="#" className="hover:text-white transition">
                Blog
              </a>

            </div>

          </div>

          {/* REDES */}
          <div>

            <h4 className="text-white mb-6 uppercase tracking-[0.2em] text-sm">
              Contacto & Redes
            </h4>

            <div className="flex flex-col gap-4 text-gray-500">

              <a
                href="mailto:finanzassmartia2025@gmail.com"
                className="hover:text-white transition"
              >
                Correo
              </a>

              <a
                href="https://www.linkedin.com/in/richard-couget-finanzas-dapa"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/finanzassmartia/"
                target="_blank"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@FinanzasSmartIA"
                target="_blank"
                className="hover:text-white transition"
              >
                YouTube
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581786155088"
                target="_blank"
                className="hover:text-white transition"
              >
                Facebook
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 mt-16 pt-8 text-gray-600 text-sm text-center">

          © 2026 Richard Couget | Método DAPA. Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}