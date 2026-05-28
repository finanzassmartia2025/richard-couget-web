"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    title: "The Financial Problem Is Not Mathematical",
    description:
      "Most modern financial problems are not born solely from a lack of information.",
    slug: "the-financial-problem-is-not-mathematical",
  },

  {
    title: "First We Design Life. Then the Financial System.",
    description:
      "Financial stability begins long before saving or investing.",
    slug: "first-life-then-the-financial-system",
  },

  {
    title:
      "Managing Money Is Not the Same as Building a Financial Structure",
    description:
      "Money should respond to a logic aligned with the life you want to build.",
    slug: "managing-money-is-not-building-a-financial-structure",
  },

  {
    title:
      "When Everything Depends on Nothing Going Wrong",
    description:
      "True financial stability depends on how resilient your structure really is.",
    slug: "when-everything-depends-on-nothing-going-wrong",
  },
];

export default function BlogSectionEN() {
  return (
    <section
      id="blog"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Articles
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
            Ideas about structure,
            <br />
            clarity and financial stability.
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {articles.map((article, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <Link href={`/en/blog/${article.slug}`}>

                <div className="group border border-white/10 rounded-3xl p-10 bg-white/[0.02] backdrop-blur-sm hover:border-[#C6A972]/40 hover:bg-white/[0.04] transition duration-500 h-full flex flex-col justify-between">

                  <div>

                    <p className="text-[#C6A972] text-sm tracking-[0.2em] uppercase mb-6">
                      Method DAPA
                    </p>

                    <h3 className="text-3xl font-light leading-tight mb-6 group-hover:text-[#C6A972] transition">

                      {article.title}

                    </h3>

                    <p className="text-gray-500 leading-relaxed text-lg">

                      {article.description}

                    </p>

                  </div>

                  <div className="mt-12">

                    <span className="text-sm tracking-[0.2em] uppercase text-white/60 group-hover:text-[#C6A972] transition">
                      Read article →
                    </span>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}