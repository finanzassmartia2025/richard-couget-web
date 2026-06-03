"use client";

import { motion } from "framer-motion";

export default function ConsultingContentEN() {
  return (
    <>
      {/* THE PROBLEM */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
              The Problem
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">
              The problem is not always
              <br />
              money.
            </h2>

            <div className="space-y-8 text-gray-400 text-lg leading-relaxed">

              <p>
                Many people reach a point where they feel they work hard,
                earn more than before, and yet continue to experience
                financial stress.
              </p>

              <p>
                Others manage to save money for a while,
                but cannot sustain it.
              </p>

              <p>
                Some have good incomes,
                but lack clarity about where their money
                is actually going.
              </p>

              <p>
                And others simply feel that,
                despite all their efforts,
                they cannot build lasting stability.
              </p>

              <p className="text-white text-2xl leading-relaxed pt-8">
                The problem is rarely a single decision.
              </p>

              <p className="text-[#C6A972] text-3xl font-light">
                More often, it is a structure
                that was never consciously designed.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* DAPA METHOD */}
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
              DAPA Method
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mb-12">
              What is the DAPA Method?
            </h2>

            <p className="text-gray-400 text-lg">
              DAPA stands for:
            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                letter: "D",
                title: "Diagnosis",
                text: "Understand your current financial situation with clarity and precision.",
              },
              {
                letter: "A",
                title: "Analysis",
                text: "Identify patterns, behaviors, and critical financial factors.",
              },
              {
                letter: "P",
                title: "Projection",
                text: "Design a financial structure aligned with your lifestyle and goals.",
              },
              {
                letter: "A",
                title: "Action",
                text: "Implement sustainable decisions that can be maintained over time.",
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
              This is not only about numbers.
              It is about building a financial system capable
              of supporting the life you truly want to live.
            </p>

          </div>

        </div>

      </section>

      {/* WHO IS IT FOR */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            DAPA Consulting
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
            Who is this consulting
            <br />
            designed for?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              "People whose income does not translate into peace of mind.",
              "People who want to organize their finances permanently.",
              "People who need clarity to make important decisions.",
              "People who want to build wealth without sacrificing quality of life.",
              "People looking for a structured and personalized methodology.",
              "People who want to stop reacting financially and start acting with direction.",
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

        </div>

      </section>

      {/* WHAT WE WILL WORK ON */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-6xl mx-auto">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Working Together
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
            What we will work on together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              "Comprehensive financial diagnosis",
              "Income and expense organization",
              "Personal financial structure design",
              "Goal planning",
              "Savings strategies",
              "Debt reduction and management",
              "Wealth building",
              "Investment planning",
              "Emotional stability applied to finances",
              "Life design and financial alignment",
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

      {/* WHAT YOU WILL RECEIVE */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            What You Will Receive
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
            An initial roadmap
            <br />
            to move forward.
          </h2>

          <div className="space-y-8">

            {[
              "Personalized one-on-one session",
              "Structural financial diagnosis",
              "Identification of critical areas",
              "Recommendations tailored to your situation",
              "Initial roadmap",
              "Practical application of the DAPA Method",
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

      {/* ABOUT ME */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Richard Couget
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">
            First life,
            <br />
            then money.
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-400">

            <p>
              Author of <em>Personal Finance Without Chaos</em>.
            </p>

            <p>
              Creator of the DAPA Method.
            </p>

            <p>
              Specialist in personal finance,
              financial stability and structural financial design.
            </p>

            <p>
              My work focuses on helping people build sustainable financial systems
              aligned with the life they truly want to live.
            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-8 border-t border-white/5">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            DAPA Consulting
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-10">
            Financial stability
            does not begin when you earn more money.
          </h2>

          <h2 className="text-4xl md:text-4xl font-light leading-tight mb-10">
            It begins when you build a structure
            capable of supporting your life.
          </h2>

          <a
            href="https://calendly.com/finanzassmartia2025/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C6A972] text-black px-10 py-5 rounded-full font-medium hover:opacity-90 transition"
          >
            Book a Consultation
          </a>

        </div>

      </section>
    </>
  );
}