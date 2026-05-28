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
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">

        <div className="max-w-7xl mx-auto">

          {/* TOP BAR */}
          <div className="px-6 md:px-8 py-5 flex items-center justify-between">

            <div className="text-sm tracking-[0.25em] uppercase text-[#C6A972]">
              Richard Couget
            </div>

            {/* SELECTOR IDIOMA */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase">

              <a
                href="/"
                className="text-white hover:text-[#C6A972] transition"
              >
                ES
              </a>

              <span className="text-white/20">|</span>

              <a
                href="/en"
                className="text-white/50 hover:text-[#C6A972] transition"
              >
                EN
              </a>

            </div>

          </div>

          {/* NAV */}
          <nav className="overflow-x-auto scrollbar-hide border-t border-white/5">

            <div className="flex items-center gap-8 px-6 md:px-8 py-4 text-sm text-gray-300 min-w-max">

              <a href="#home" className="hover:text-white transition whitespace-nowrap">
                Inicio
              </a>

              <a href="#about" className="hover:text-white transition whitespace-nowrap">
                Sobre mí
              </a>

              <a href="#method" className="hover:text-white transition whitespace-nowrap">
                Método DAPA
              </a>

              <a href="#book" className="hover:text-white transition whitespace-nowrap">
                Libro
              </a>

              <a href="#app" className="hover:text-white transition whitespace-nowrap">
                App
              </a>

              <a href="#blog" className="hover:text-white transition whitespace-nowrap">
                Blog
              </a>

            </div>

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