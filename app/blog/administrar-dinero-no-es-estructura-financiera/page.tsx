import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">

      <article className="max-w-4xl mx-auto px-8 py-40">

        {/* VOLVER */}
        <Link
          href="/#blog"
          className="text-[#C6A972] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition"
        >
          ← Volver
        </Link>

        {/* TITULO */}
        <div className="mt-16 mb-24">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Reflexión
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Administrar dinero no es lo mismo
            <br />
            que construir una estructura financiera
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            Entender esta diferencia cambia por completo
            la forma en la que una persona se relaciona
            con su vida económica.
          </p>

        </div>

        {/* CONTENIDO */}
        <div className="space-y-10 text-gray-300 text-[1.15rem] leading-[2.1]">

          <p>
            Entender esta diferencia cambia por completo la forma
            en la que una persona se relaciona con su vida económica.
            Es otra manera de pensar el dinero.
          </p>

          <p>
            Administrar dinero puede hacerlo casi cualquiera durante un tiempo:
            pagar cuentas, controlar gastos, cumplir obligaciones,
            ahorrar algo o incluso invertir ocasionalmente.
          </p>

          <p>
            Pero una estructura financiera es otra cosa.
            Es un sistema capaz de sostener tu vida incluso
            cuando el entorno cambia,
            cuando aparecen crisis,
            incertidumbre o situaciones inesperadas.
          </p>

          <p>
            Hoy, mientras manejaba,
            vi un grafiti que decía:
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            “Pon foco en lo que más te importa”.
          </p>

          <p>
            Y esa frase me hizo detenerme mentalmente por un momento.
            Porque creo que golpea especialmente
            cuando una persona no tiene claro qué quiere para su vida
            ni hacia dónde se dirige.
          </p>

          <p>
            Esta idea no solo aplica para el día a día.
            También aplica para la forma en la que diseñamos nuestra vida
            y, por consecuencia, nuestra estructura financiera.
          </p>

          <p>
            Al final,
            el dinero debe ser una herramienta
            al servicio de la vida que queremos construir,
            no el centro alrededor del cual gira nuestra existencia.
          </p>

          <p>
            Por eso,
            cuando no existe un diseño consciente del estilo de vida
            que queremos sostener,
            ni una estructura financiera coherente con él,
            cualquier imprevisto termina desordenándolo todo.
          </p>

          <p>
            En cambio,
            cuando existe una estructura pensada desde ese diseño de vida,
            el dinero empieza a responder a una lógica.
          </p>

          <p className="text-[#C6A972] text-3xl leading-relaxed font-light">
            Tu lógica.
          </p>

          <p>
            Entonces ahora sí comenzará a existir una dirección
            hacia la que te diriges.
          </p>

          <p>
            Las decisiones comienzan a ser racionales
            sin depender tanto del impulso,
            de la comparación
            o del momento emocional,
            y empiezan a alinearse
            con una visión más clara de futuro.
          </p>

          <p>
            Sí,
            al principio eso puede generar contradicciones internas,
            porque muchas veces sostener un plan
            implica renunciar a gratificaciones inmediatas
            o tomar decisiones difíciles.
          </p>

          <p>
            Pero cuando una persona permanece el tiempo suficiente
            en una dirección elegida conscientemente,
            experimenta sensaciones más profundas,
            porque no queda solo en el simple crecimiento financiero,
            sino que también alcanza tranquilidad,
            coherencia y orgullo personal.
          </p>

          <p>
            Con el tiempo entendí que el dinero
            es solamente una herramienta.
          </p>

          <p>
            Primero lo conseguimos entregando tiempo de vida
            a cambio de ingresos,
            pero después,
            con una estructura clara y definida,
            podemos hacer que el propio dinero
            también trabaje para nosotros.
          </p>

          <p>
            Pero incluso desde este enfoque,
            el dinero sigue sin ser el objetivo final.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            El objetivo lo decides tú.
          </p>

          <p>
            Y quizás por eso insisto tanto
            en el diseño del estilo de vida,
            porque entendí que ahí comienza realmente todo lo demás.
          </p>

          <p>
            Recién después aparecen los hábitos,
            el control de gastos,
            el ahorro,
            las inversiones
            y la construcción patrimonial.
          </p>

        </div>

      </article>

    </main>
  );
}