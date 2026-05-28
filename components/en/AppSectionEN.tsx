"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AppSectionEN() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("emails")
      .insert([{ email }]);

    if (error) {
      setMessage("An error occurred. Please try again.");
    } else {
      setMessage("Access granted! Your download will begin shortly.");
      setEmail("");

      // AUTOMATIC DOWNLOAD
      window.location.href = "/finanzas-dapa-demo.zip";
    }

    setLoading(false);
  }

  return (
    <section
      id="app"
      className="py-40 px-8 border-t border-white/5"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            DAPA Finance
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Financial control
            <br />
            through structure.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            DAPA Finance is a desktop application designed
            to organize, analyze and visualize personal finances
            from a professional and structural perspective.
          </p>

          <div className="space-y-4 mb-10">

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Income and expense management
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Advanced wealth analysis
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Automatic financial indicators
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C6A972]" />
              <p className="text-gray-400">
                Professional PDF export
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-sm">

            <h3 className="text-2xl font-light mb-4">
              Download Free Windows Demo
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Windows · .zip · 45 MB
            </p>

            <p className="text-gray-500 mb-6">
              Enter your email address to access the download.
            </p>

            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              The application may display an initial Windows SmartScreen warning
              because it does not yet have a certified digital signature.
              This is normal for independent software distributed directly
              through the official website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 text-white outline-none"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#C6A972] text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Download"}
              </button>

            </div>

            {message && (
              <p className="text-sm text-gray-400 mt-6">
                {message}
              </p>
            )}

          </div>

        </motion.div>

        {/* APP LOGO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <img
            src="/dapa-logo.png"
            alt="DAPA Finance"
            className="max-w-[420px] object-contain"
          />

        </motion.div>

      </div>

    </section>
  );
}