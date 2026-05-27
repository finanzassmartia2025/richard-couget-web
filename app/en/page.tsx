export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-8">

      <div className="max-w-4xl text-center">

        <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-8">
          English Version
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
          Richard Couget
          <br />
          Method DAPA
        </h1>

        <p className="text-gray-400 text-xl leading-relaxed mb-12">
          Personal finance through structure,
          clarity and conscious life design.
        </p>

        <a
          href="/"
          className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
        >
          Volver al sitio en Español
        </a>

      </div>

    </main>
  );
}