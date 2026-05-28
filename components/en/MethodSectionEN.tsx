"use client";

import { motion } from "framer-motion";

const steps = [
  {
    letter: "D",
    title: "Diagnosis",
    description:
      "Understand your current financial reality with clarity and without self-deception.",
  },
  {
    letter: "A",
    title: "Analysis",
    description:
      "Interpret how your personal financial system truly operates.",
  },
  {
    letter: "P",
    title: "Projection",
    description:
      "Consciously design the lifestyle you want to build and the financial structure required to sustain it.",
  },
  {
    letter: "A",
    title: "Action",
    description:
      "Implement sustainable decisions aligned with real long-term objectives.",
  },
];

export default function MethodSectionEN() {
  return (
    <section
      id="method"
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
            Method DAPA
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mb-10">
            A structural methodology
            <br />
            for building financial stability.
          </h2>

          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            Method DAPA organizes personal finance
            as a consciously designed system,
            aligned with the life each person truly wants to sustain.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-[2rem] p-10 bg-white/[0.02] backdrop-blur-sm hover:border-[#C6A972]/30 transition"
            >

              <div className="flex items-center gap-6 mb-8">

                <div className="w-16 h-16 rounded-full bg-[#C6A972] text-black flex items-center justify-center text-2xl font-semibold">
                  {step.letter}
                </div>

                <h3 className="text-3xl font-light">
                  {step.title}
                </h3>

              </div>

              <p className="text-gray-500 leading-relaxed text-lg">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}