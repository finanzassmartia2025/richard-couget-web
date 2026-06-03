"use client";

import { motion } from "framer-motion";

export default function HeroSectionEN() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 pt-32"
    >

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] mb-6 text-sm">
            Richard Couget | Method DAPA
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            First the life,
            <br />
            then the money.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Personal finance through structure,
            clarity and conscious life design.
          </p>

          <div className="flex flex-wrap gap-4">

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C6A972] text-black px-12 py-4 rounded-full font-medium"
            >

              <a
                href="https://www.amazon.com/dp/B0GY12QP7M"
                target="_blank"
                className="bg-[#C6A972] text-black px-8 py-4 rounded-full text-sm tracking-wide hover:opacity-90 transition"
              >
                Buy Book
              </a>

            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/20 px-8 py-4 rounded-full"
            >

              <a
                href="#app">

                Download App FREE
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-12 py-4 rounded-full font-medium"
              >
                <a href="/en/consulting">
                DAPA Consulting
                </a>
              </motion.button>

          </div>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >

          <img
            src="/richard.png"
            alt="Richard Couget"
            className="max-h-[1200px] object-contain scale-150"
          />

        </motion.div>

      </div>

    </section>
  );
}