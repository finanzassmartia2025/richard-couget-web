"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AppSection() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit() {

    if (!email) {
      setMessage("Por favor ingresa un correo válido.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("emails")
      .insert([{ email }]);

    if (error) {
      setMessage("Ocurrió un error. Inténtalo nuevamente.");
    } else {
      setMessage("¡Acceso habilitado! La descarga comenzará.");
      setEmail("");

      // DESCARGA AUTOMÁTICA
      window.location.href = "/finanzas-dapa-demo.exe";
    }

    setLoading(false);
  }

  return (
    <section
      id="app"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Finanzas DAPA
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Control financiero
            <br />
            con estructura.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Finanzas DAPA es una aplicación de escritorio diseñada
            para organizar, analizar y visualizar las finanzas personales
            desde una perspectiva profesional y estructural.
          </p>

          <div className="space-y-4 mb-10">

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Gestión de ingresos y gastos
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Análisis patrimonial avanzado
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Indicadores financieros automáticos
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Exportación profesional a PDF
              </p>
            </div>

          </div>

          {/* FORMULARIO */}
          <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-sm">

            <h3 className="text-2xl font-light mb-4">
              Descargar versión DEMO
            </h3>

            <p className="text-gray-500 mb-6">
              Ingresa tu correo electrónico para acceder a la descarga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 text-white outline-none"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Procesando..." : "Descargar"}
              </button>

            </div>

            {message && (
              <p className="text-sm text-gray-400 mt-6">
                {message}
              </p>
            )}

          </div>

        </motion.div>

        {/* LOGO APP */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <img
            src="/dapa-logo.png"
            alt="Finanzas DAPA"
            className="max-w-[420px] object-contain"
          />

        </motion.div>

      </div>

    </section>
  );
}