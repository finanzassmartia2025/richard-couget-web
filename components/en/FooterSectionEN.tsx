"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FooterSectionEN() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleNewsletter() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("newsletter")
      .insert([{ email }]);

    if (error) {
      setMessage("An error occurred. Please try again.");
    } else {
      setMessage("Subscription completed successfully!");
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <footer className="py-32 px-8 border-t border-white/5">

      <div className="max-w-7xl mx-auto">

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            DAPA Newsletter
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
            Reflections on financial clarity
            <br />
            and sustainable stability.
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Subscribe to receive ideas, analysis and perspectives
            on personal finance, financial structure
            and conscious life design.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">

            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 text-white outline-none"
            />

            <button
              onClick={handleNewsletter}
              disabled={loading}
              className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Subscribe"}
            </button>

          </div>

          {message && (
            <p className="text-sm text-gray-400 mt-6">
              {message}
            </p>
          )}

        </motion.div>

        {/* FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">

          {/* BRAND */}
          <div>

            <h3 className="text-2xl font-light mb-6">
              Richard Couget
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Method DAPA —
              Personal finance through structure,
              clarity and conscious life design.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <h4 className="text-white mb-6 uppercase tracking-[0.2em] text-sm">
              Navigation
            </h4>

            <div className="flex flex-col gap-4 text-gray-500">

              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#method" className="hover:text-white transition">
                Method DAPA
              </a>

              <a href="#book" className="hover:text-white transition">
                Book
              </a>

              <a href="#app" className="hover:text-white transition">
                App
              </a>

              <a href="#blog" className="hover:text-white transition">
                Blog
              </a>

            </div>

          </div>

          {/* CONTACT & SOCIAL */}
          <div>

            <h4 className="text-white mb-6 uppercase tracking-[0.2em] text-sm">
              Contact & Social
            </h4>

            <div className="flex flex-col gap-4 text-gray-500">

              <a
                href="mailto:finanzassmartia2025@gmail.com"
                className="hover:text-white transition"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/richard-couget-finanzas-dapa"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/finanzassmartia/"
                target="_blank"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@FinanzasSmartIA"
                target="_blank"
                className="hover:text-white transition"
              >
                YouTube
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581786155088"
                target="_blank"
                className="hover:text-white transition"
              >
                Facebook
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 mt-16 pt-8 text-gray-600 text-sm text-center">

          © 2026 Richard Couget | Method DAPA. All rights reserved.

        </div>

      </div>

    </footer>
  );
}