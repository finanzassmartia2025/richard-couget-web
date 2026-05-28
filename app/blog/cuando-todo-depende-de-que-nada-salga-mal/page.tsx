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
            Cuando todo depende
            <br />
            de que nada salga mal
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            Una estructura financiera frágil puede parecer estable
            hasta que la vida real comienza a ponerla a prueba.
          </p>

        </div>

        {/* CONTENIDO */}
        <div className="space-y-10 text-gray-300 text-[1.15rem] leading-[2.1]">

          <p>
            Cuando era niño/adolescente crecí educándome sobre el dinero
            simplemente observando cómo mis padres manejaban sus finanzas personales.
          </p>

          <p>
            En ese momento creía que una persona tenía control financiero
            simplemente porque pagaba sus cuentas a tiempo,
            llegaba a fin de mes
            o incluso lograba ahorrar algo de dinero
            y salir de vacaciones una vez al año.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Hoy pienso completamente distinto.
          </p>

          <p className="text-[#C6A972] text-3xl leading-relaxed font-light">
            Entendí que eso no necesariamente es control,
            es apenas supervivencia financiera bien maquillada.
          </p>

          <p>
            Una persona puede ganar bien,
            ahorrar
            e incluso invertir
            y aun así vivir dentro de una estructura extremadamente frágil.
          </p>

          <p>
            Lamentablemente lo veo permanentemente
            en personas con las que me cruzo a diario
            y converso brevemente.
          </p>

          <p>
            Incluso personas con buenos ingresos,
            pero cuya tranquilidad depende de que nada salga mal.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Que no aparezca un problema de salud.
            <br />
            Que no pierdan el trabajo.
            <br />
            Que no caigan sus ingresos.
            <br />
            O que no aumente demasiado su nivel de gasto.
          </p>

          <p>
            Y me duele aún más cuando esta conversación
            la tengo con personas que viven con un salario mínimo
            y sin educación financiera básica.
          </p>

          <p>
            De hecho,
            hoy mismo hablé con una persona en esa situación.
          </p>

          <p>
            Dentro de mis posibilidades,
            intento compartirles alguna idea,
            herramienta o enfoque
            que les permita optimizar su estructura
            y reducir presión financiera.
          </p>

          <p className="text-[#C6A972] text-3xl leading-relaxed font-light">
            Cuando una estructura depende
            de que todo salga perfecto para sostenerse,
            entonces no existe estabilidad.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Existe tensión contenida.
          </p>

          <p>
            Por eso creo que las finanzas personales
            no deberían medirse solamente
            por cuánto dinero tienes,
            sino por qué tan resistente es tu estructura financiera
            frente al estilo de vida que sostienes.
          </p>

          <p>
            Y aunque parezca obvio,
            vale la pena decirlo:
          </p>

          <p>
            La vida real no es lineal.
          </p>

          <p>
            Existen cambios inesperados,
            crisis,
            desgaste emocional,
            errores,
            pérdida de ingresos
            y momentos de incertidumbre.
          </p>

          <p>
            Tu sistema financiero tiene que estar preparado
            para absorber parte de eso,
            de forma tal que un imprevisto
            no destruya completamente tu estabilidad.
          </p>

          <p>
            La experiencia propia
            y la observación de otras personas
            me permitieron entender
            que el verdadero cambio ocurre
            cuando alguien comienza a construir su estructura desde la base.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Primero diseñando un estilo de vida
            coherente con sus ingresos actuales.
          </p>

          <p>
            Luego tomando decisiones alineadas con esa dirección.
            Generando margen.
            Aprendiendo a que las emociones
            no gobiernen sus finanzas.
            Haciendo que el dinero sea una herramienta dentro de su vida
            y no que toda su vida dependa únicamente de él.
          </p>

          <p>
            Es ahí donde las finanzas personales
            dejan de convertirse
            en una fuente constante de tensión
            y comienzan a transformarse
            en estabilidad económica y emocional.
          </p>

          <p>
            Y quizás esta sea una de las ideas
            más importantes que aprendí en todos estos años:
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            la tranquilidad financiera
            no se da cuando ganas más dinero,
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            sino cuando construyes una estructura
            capaz de sostener tu vida
            incluso cuando el entorno cambia.
          </p>

        </div>

      </article>

    </main>
  );
}