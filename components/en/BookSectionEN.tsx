"use client";

import { motion } from "framer-motion";

export default function BookSectionEN() {
  return (
    <section
      id="book"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* BOOK IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <img
            src="/book-en.png"
            alt="Personal Finance Without Chaos"
            className="max-w-[420px] rounded-2xl shadow-2xl shadow-black/50"
          />

        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Book
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Personal Finance
            <br />
            Without Chaos
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            A structural approach to understanding personal finance
            through clarity, conscious design
            and sustainable long-term stability.
          </p>

          <p className="text-gray-500 leading-relaxed mb-10">
            Through Method DAPA,
            Richard Couget presents a different perspective on money:
            not as an isolated goal,
            but as a system intentionally designed
            to support the life we truly want to live.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://www.amazon.com/dp/B0GY12QP7M"
              target="_blank"
              className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Buy on Amazon
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}