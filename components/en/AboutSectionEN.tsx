"use client";

import { motion } from "framer-motion";

export default function AboutSectionEN() {
  return (
    <section
      id="about"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            About Richard
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight max-w-4xl">
            A structural vision
            <br />
            of personal finance.
          </h2>

        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-[1.20fr_0.80fr] gap-20">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              For years I observed that many financial problems
              were not actually caused by money itself.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              They were born from mental exhaustion,
              structural disorganization,
              constant pressure
              and the difficulty of sustaining decisions
              in the middle of everyday chaos.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Over time I understood that personal finance
              could not be approached only through numbers,
              budgets or mathematical formulas.
              Behind every financial decision
              there is a much deeper emotional,
              mental and human structure.
            </p>

            <p className="text-gray-500 leading-relaxed">
              That search gave birth to Method DAPA:
              a different way of understanding money
              through clarity,
              structure
              and conscious life design.
            </p>

          </motion.div>

          {/* CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm">

              <h3 className="text-xl mb-4 text-white">
                Philosophy
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Money alone does not organize a life.
                It amplifies the structure already behind every decision.
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm">

              <h3 className="text-xl mb-4 text-white">
                Approach
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Personal finance through clarity,
                mental stability
                and structural coherence.
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] backdrop-blur-sm">

              <h3 className="text-xl mb-4 text-white">
                Objective
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Helping people build financial structures
                that are more sustainable,
                human
                and aligned with the life they truly want to live.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}