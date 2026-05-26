import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodSection from "@/components/MethodSection";
import BookSection from "@/components/BookSection";
import AppSection from "@/components/AppSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div className="text-sm tracking-[0.25em] uppercase text-[#C6A972]">
            Richard Couget
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <a href="#home" className="hover:text-white transition">
              Inicio
            </a>

            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>

            <a href="#method" className="hover:text-white transition">
              Método DAPA
            </a>

            <a href="#book" className="hover:text-white transition">
              Libro
            </a>

            <a href="#app" className="hover:text-white transition">
              App
            </a>

            <a href="#blog" className="hover:text-white transition">
              Blog
            </a>

          </nav>

        </div>

      </header>

      <HeroSection />
      <AboutSection />
      <MethodSection />
      <BookSection />
      <AppSection />
      <BlogSection />
      <FooterSection />

    </main>
  );
}