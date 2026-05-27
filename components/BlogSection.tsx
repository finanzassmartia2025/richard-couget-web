"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "El problema financiero no es matemático.",
    description:
      "Por qué muchas personas siguen sintiendo fragilidad financiera incluso aumentando sus ingresos.",
    slug: "problema-financiero-no-es-matematico",
  },

  {
    title: "Primero diseñamos la vida. Después el sistema financiero.",
    description:
      "La estabilidad financiera comienza mucho antes del ahorro o la inversión.",
    slug: "primero-la-vida-despues-el-sistema-financiero",
  },

  {
    title: "La relación entre agotamiento mental y desorden financiero.",
    description:
      "Cómo el cansancio emocional impacta directamente en las decisiones económicas.",
    slug: "agotamiento-mental-y-desorden-financiero",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Blog & Reflexiones
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10 max-w-4xl">
            Ideas sobre estructura financiera,
            claridad mental y estabilidad sostenible.
          </h2>

          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            Reflexiones, análisis y perspectivas sobre finanzas personales,
            psicología financiera y diseño consciente del estilo de vida.
          </p>

        </motion.div>

        {/* ARTÍCULOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {articles.map((article, index) => (

            <motion.a
              href={`/blog/${article.slug}`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
               duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-sm hover:border-[#C6A972]/30 transition group cursor-pointer block"
          >

              <div className="mb-10">

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C6A972] mb-8">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-light leading-snug mb-6 group-hover:text-[#C6A972] transition">
                  {article.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {article.description}
                </p>

              </div>

              <div className="text-sm text-[#C6A972] tracking-[0.2em] uppercase">
                Leer artículo
              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}