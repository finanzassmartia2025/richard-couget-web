"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-6xl mx-auto">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Sobre Richard
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight max-w-4xl">
            Una visión estructural
            <br />
            de las finanzas personales.
          </h2>

        </motion.div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 md:grid-cols-[1.20fr_0.80fr] gap-20">

          {/* TEXTO IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Durante años observé que muchos de los problemas financieros
              de las personas no nacían realmente del dinero.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Nacían del agotamiento mental, de la desorganización estructural,
              de la presión constante y de la dificultad de sostener decisiones
              en medio del caos cotidiano.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Con el tiempo entendí que las finanzas personales no podían abordarse
              únicamente desde números, presupuestos o fórmulas matemáticas.
              Detrás de cada decisión financiera existe una estructura emocional,
              mental y humana mucho más profunda.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Esa búsqueda dio origen al Método DAPA:
              una forma distinta de entender el dinero desde la claridad,
              la estructura y el diseño consciente de vida.
            </p>

          </motion.div>

          {/* TARJETAS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm">

              <h3 className="text-xl mb-4 text-white">
                Filosofía
              </h3>

              <p className="text-gray-500 leading-relaxed">
                El dinero no organiza una vida por sí solo.
                Amplifica la estructura que ya existe detrás de cada decisión.
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm">

              <h3 className="text-xl mb-4 text-white">
                Enfoque
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Finanzas personales desde la claridad,
                la estabilidad mental y la coherencia estructural.
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm">

              <h3 className="text-xl mb-4 text-white">
                Objetivo
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Ayudar a las personas a construir estructuras financieras
                más sostenibles, humanas y alineadas con la vida que desean vivir.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}