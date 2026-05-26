"use client";

import { motion } from "framer-motion";

export default function BookSection() {
  return (
    <section
      id="book"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* IMAGEN LIBRO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <img
            src="/book.png"
            alt="Finanzas Personales Sin Caos"
            className="max-w-[420px] rounded-2xl shadow-2xl shadow-black/50"
          />

        </motion.div>

        {/* CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Libro
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Finanzas Personales
            <br />
            Sin Caos
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Una propuesta estructural para comprender las finanzas personales
            desde la claridad, el diseño consciente y la estabilidad sostenible.
          </p>

          <p className="text-gray-500 leading-relaxed mb-10">
            A través del Método DAPA,
            Richard Couget plantea una visión diferente sobre el dinero:
            no como un objetivo aislado,
            sino como un sistema diseñado para sostener la vida
            que realmente queremos vivir.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://www.amazon.com/dp/B0GT4VRYXX"
              target="_blank"
              className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Comprar en Amazon
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}