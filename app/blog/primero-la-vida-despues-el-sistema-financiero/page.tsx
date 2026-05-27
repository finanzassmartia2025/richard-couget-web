import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">

      <article className="max-w-4xl mx-auto px-8 py-40">

        {/* VOLVER */}
        <Link
          href="/"
          className="text-[#C6A972] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition"
        >
          ← Volver
        </Link>

        {/* TITULO */}
        <div className="mt-16 mb-24">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Método DAPA
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Primero diseñamos la vida.
            <br />
            Después el sistema financiero.
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            La estabilidad financiera sostenible no comienza
            con hojas de cálculo, presupuestos o inversiones.
            Comienza cuando existe claridad sobre la vida
            que realmente deseamos construir.
          </p>

        </div>

        {/* CONTENIDO */}
        <div className="space-y-10 text-gray-300 text-[1.15rem] leading-[2.1]">

          <p>
            Construir una estabilidad financiera a partir principalmente de 
            aprender a administrar dinero no garantiza buenos resultados, al menos en la mayoría de las personas.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Ahorrar más, gastar menos, invertir mejor son herramientas que si 
            funcionan, siempre y cuando esten sincronizados dentro de una 
            estructura de vida y financiera conscientemente diseñada.
          </p>

          <p>
            Como herramientas aisladas,
            muchas veces pueden funcionar temporalmente.
            El problema está cuando intentamos sostenerlas
            durante años dentro de una vida agotadora,
            incoherente o estructuralmente desordenada.
          </p>

          <p className="text-white text-2xl leading-relaxed pt-10">
            Por eso, antes de tomar decisiones financieras aisladas,
            existe una pregunta mucho más importante:
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            ¿Para qué tipo de vida
            estamos organizando nuestras finanzas?
          </p>

          <p>
            Porque resulta extremadamente difícil construir sistemas financieros saludables
            alrededor de estilos de vida completamente desordenados,
            emocionalmente agotadores o incompatibles con nuestro bienestar.
          </p>

          <p>
            Y tarde o temprano,
            esa incoherencia termina pasando factura.
          </p>

          <p>
            Uno de los grandes problemas financieros modernos
            es que muchas personas diseñan primero sus obligaciones económicas
            y recién después intentan adaptar su vida a ellas.
          </p>

          <p>
            Adquieren responsabilidades permanentes.
            Aumentan constantemente su nivel de consumo.
            Construyen estructuras financieras rígidas.
            Y luego intentan sostener emocionalmente ese sistema durante años.
          </p>

          <p>
            El resultado suele ser el sentimiento de presión constante,
            agotamiento mental y una sensación permanente
            de dependencia financiera.
          </p>

          <p>
            No necesariamente porque falte dinero.
          </p>

          <p>
            Sino porque el sistema completo fue diseñado
            sin suficiente coherencia entre estilo de vida,
            energía personal, prioridades y capacidad real
            de sostenerlo en el tiempo.
          </p>

          <p>
            Muchas veces el sistema financiero moderno
            premia externamente estilos de vida
            que internamente son difíciles de sostener.
            Más ingresos, más consumo, más obligaciones y más velocidad.

          </p>

          <p>
            Pero aumentar ingresos no siempre aumenta estabilidad. En la mayoría de los casos, simplemente aumenta el tamaño de la estructura que debe sostenerse.

          </p>

          <p>
            Y cuando una vida requiere demasiada energía
            para mantenerse funcionando,
            el sistema financiero comienza lentamente a perder estabilidad
            incluso cuando los números parecen correctos.
          </p>

          <p>
            Por eso cada vez considero más importante
            invertir tiempo en diseñar primero una vida coherente
            antes de construir un sistema financiero complejo.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Definir prioridades.
            <br />
            Reducir fricción innecesaria.
            <br />
            Entender cuánta libertad realmente se necesita.
            <br />
            Cuánto estrés puede sostenerse.
            <br />
            Qué ritmo de vida resulta verdaderamente sostenible.
          </p>

          <p>
            Las finanzas personales no existen para sostener 
            únicamente tus obligaciones, existen para sostener 
            una vida con mayor bienestar y felicidad.
          </p>

          <p>
            Esta idea forma parte de una de las bases estructurales
            del Método DAPA.
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            Primero se diseña la vida.
            Después se construye un sistema financiero coherente con ella.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            No al revés.
          </p>

          <p>
            Cuando la estructura financiera contradice permanentemente la vida 
            que una persona necesita sostener, tarde o temprano aparece el 
            agotamiento. Y ningún sistema financiero funciona 
            correctamente cuando la vida detrás del sistema dejó de 
            ser sostenible.
          </p>

          <p>
            Durante años se instaló la idea de que la estabilidad financiera
            dependía únicamente de cuánto dinero una persona lograba acumular.
          </p>

          <p>
            Pero la verdadera estabilidad rara vez depende solamente de números. Depende de coherencia.
          </p>

          <p>
            Coherencia entre tiempo, energía, prioridades,
            estructura y estilo de vida.
          </p>

          <p className="text-white text-2xl leading-relaxed pt-10">
            El dinero puede sostener muchas cosas, pero difícilmente pueda sostener indefinidamente
            una vida no diseñada y en contradicción permanente con uno mismo.
          </p>

        </div>

      </article>

    </main>
  );
}