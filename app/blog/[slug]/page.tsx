const articles = {
  "problema-financiero-no-es-matematico": {
    title: "El problema financiero rara vez es solo matemático.",
    content: `
Muchas personas creen que mejorar sus finanzas depende exclusivamente de ganar más dinero.

Sin embargo, gran parte de la fragilidad financiera moderna proviene de sistemas de vida mal estructurados, agotamiento mental y decisiones sostenidas bajo estrés constante.

El dinero no funciona aislado de la vida.

Y cuando la estructura personal se deteriora, las decisiones financieras también comienzan a deteriorarse.
    `,
  },

  "primero-la-vida-despues-el-sistema-financiero": {
    title: "Primero diseñamos la vida. Después el sistema financiero.",
    content: `
La estabilidad financiera sostenible no comienza con inversiones.

Comienza entendiendo qué tipo de vida queremos sostener.

El sistema financiero personal debería ser consecuencia de un diseño consciente de vida y no un mecanismo de supervivencia improvisado.
    `,
  },

  "agotamiento-mental-y-desorden-financiero": {
    title: "La relación entre agotamiento mental y desorden financiero.",
    content: `
El cansancio emocional reduce la capacidad de análisis, planificación y autocontrol.

Muchas malas decisiones financieras no nacen de ignorancia técnica, sino de agotamiento psicológico acumulado.

Comprender esto cambia completamente la forma de abordar las finanzas personales.
    `,
  },
};

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {

  const article =
    articles[params.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Artículo no encontrado.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-32">

      <div className="max-w-4xl mx-auto">

        <a
          href="/"
          className="text-[#C6A972] mb-12 inline-block"
        >
          ← Volver al inicio
        </a>

        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-16">
          {article.title}
        </h1>

        <div className="text-gray-400 text-xl leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

      </div>

    </main>
  );
}