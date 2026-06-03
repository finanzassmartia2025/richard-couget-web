"use client";

import { motion } from "framer-motion";

export default function ConsultoriaContent() {
  return (
    <>
      {/* EL PROBLEMA */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
              El problema
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">
              El problema no siempre
              <br />
              es el dinero.
            </h2>

            <div className="space-y-8 text-gray-400 text-lg leading-relaxed">

              <p>
                Muchas personas llegan a un punto en el que sienten
                que trabajan mucho, ganan más que antes y, sin embargo,
                continúan experimentando estrés financiero.
              </p>

              <p>
                Otras logran ahorrar durante un tiempo,
                pero no consiguen sostenerlo.
              </p>

              <p>
                Algunas tienen buenos ingresos,
                pero carecen de claridad sobre hacia dónde se dirige
                realmente su dinero.
              </p>

              <p>
                Y otras simplemente sienten que,
                a pesar de todos sus esfuerzos,
                no logran construir estabilidad.
              </p>

              <p className="text-white text-2xl leading-relaxed pt-8">
                El problema rara vez es una única decisión.
              </p>

              <p className="text-[#C6A972] text-3xl font-light">
                Normalmente es una estructura
                que nunca fue diseñada conscientemente.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* MÉTODO DAPA */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >

            <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
              Método DAPA
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl  mb-12">
              ¿Qué es el Método DAPA?
            </h2>

            <div className="space-y-8 text-gray-400 text-lg leading-relaxed">

              <p>
                DAPA significa:
              </p>
            </div>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                letter: "D",
                title: "Diagnóstico",
                text: "Comprender tu situación actual con precisión.",
              },
              {
                letter: "A",
                title: "Análisis",
                text: "Identificar patrones, comportamientos y puntos críticos.",
              },
              {
                letter: "P",
                title: "Proyección",
                text: "Diseñar una estructura financiera alineada con tu estilo de vida y objetivos.",
              },
              {
                letter: "A",
                title: "Acción",
                text: "Implementar decisiones concretas y sostenibles en el tiempo.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-[2rem] p-10 bg-white/[0.02]"
              >

                <div className="flex items-center gap-6 mb-8">

                  <div className="w-16 h-16 rounded-full bg-[#C6A972] text-black flex items-center justify-center text-2xl font-semibold">
                    {item.letter}
                  </div>

                  <h3 className="text-3xl font-light">
                    {item.title}
                  </h3>

                </div>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

          <div className="max-w-4xl mt-16">

            <p className="text-gray-400 text-lg leading-relaxed">
              No se trata únicamente de números.
              Se trata de construir un sistema financiero
              capaz de sostener la vida que deseas vivir.
            </p>

          </div>

        </div>

      </section>

      {/* PARA QUIÉN */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
              Consultoría DAPA
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
              ¿Para quién está pensada
              <br />
              esta consultoría?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {[
                "Sienten que sus ingresos no se transforman en tranquilidad.",
                "Quieren ordenar sus finanzas de forma definitiva.",
                "Necesitan claridad para tomar decisiones importantes.",
                "Desean construir patrimonio sin perder calidad de vida.",
                "Buscan una metodología estructurada y personalizada.",
                "Quieren dejar de reaccionar financieramente y comenzar a actuar con dirección.",
              ].map((item, index) => (

                <div
                  key={index}
                  className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]"
                >
                  <p className="text-gray-300 leading-relaxed">
                    ✓ {item}
                  </p>
                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

     {/* QUÉ TRABAJAREMOS JUNTOS */}
<section className="py-40 px-8 border-t border-white/5">

  <div className="max-w-6xl mx-auto">

    <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
      Trabajo conjunto
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
      Qué trabajaremos juntos
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        "Diagnóstico financiero integral",
        "Organización de ingresos y gastos",
        "Diseño de estructura financiera personal",
        "Planificación de objetivos",
        "Estrategias de ahorro",
        "Reducción y gestión de deudas",
        "Construcción de patrimonio",
        "Planificación de inversiones",
        "Estabilidad emocional aplicada a las finanzas",
        "Diseño de vida y coherencia financiera",
      ].map((item, index) => (

        <div
          key={index}
          className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]"
        >
          <p className="text-gray-300">
            ✓ {item}
          </p>
        </div>

      ))}

    </div>

  </div>

</section>

{/* LO QUE RECIBIRÁS */}
<section className="py-40 px-8 border-t border-white/5">

  <div className="max-w-5xl mx-auto">

    <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
      Lo que recibirás
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
      Una hoja de ruta inicial
      <br />
      para comenzar.
    </h2>

    <div className="space-y-8">

      {[
        "Sesión individual personalizada",
        "Diagnóstico financiero estructural",
        "Identificación de puntos críticos",
        "Recomendaciones adaptadas a tu situación",
        "Hoja de ruta inicial",
        "Aplicación práctica del Método DAPA",
      ].map((item, index) => (

        <div
          key={index}
          className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]"
        >
          <p className="text-lg text-gray-300">
            ✓ {item}
          </p>
        </div>

      ))}

    </div>

  </div>

</section>

{/* SOBRE MÍ */}
<section className="py-40 px-8 border-t border-white/5">

  <div className="max-w-5xl mx-auto">

    <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
      Richard Couget
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">
      Primero la vida,
      <br />
      después el dinero.
    </h2>

    <div className="space-y-8 text-lg leading-relaxed text-gray-400">

      <p>
        Autor de <em>Finanzas Personales Sin Caos</em>.
      </p>

      <p>
        Creador del Método DAPA.
      </p>

      <p>
        Especialista en finanzas personales,
        estabilidad financiera y diseño estructural del dinero.
      </p>

      <p>
        Mi trabajo se centra en ayudar a las personas
        a construir sistemas financieros sostenibles,
        alineados con la vida que realmente desean vivir.
      </p>

    </div>

  </div>

</section>

{/* CTA FINAL */}
<section className="py-40 px-8 border-t border-white/5">

  <div className="max-w-5xl mx-auto text-center">

    <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
      Consultoría DAPA
    </p>

    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-10">
      La estabilidad financiera
      no comienza cuando ganas más dinero.
    </h2>

    <h2 className="text-4xl md:text-4xl font-light leading-tight mb-10">
      Comienza cuando construyes una estructura
      capaz de sostener tu vida.
    </h2>

    <a
        href="https://calendly.com/finanzassmartia2025/30min"
         target="_blank"
        rel="noopener noreferrer"
        className="bg-[#C6A972] text-black px-10 py-5 rounded-full font-medium hover:opacity-90 transition"
        >
         Agendar una reunión
    </a>

  </div>

</section> 
    </>
  );
}