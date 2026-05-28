import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">

      <article className="max-w-4xl mx-auto px-8 py-40">

        {/* BACK */}
        <Link
          href="/en#blog"
          className="text-[#C6A972] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <div className="mt-16 mb-24">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Reflection
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Managing money is not the same
            <br />
            as building a financial structure
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            Understanding this difference completely changes
            the way a person relates to their financial life.
          </p>

        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-300 text-[1.15rem] leading-[2.1]">

          <p>
            Understanding this difference completely changes
            the way a person relates to their financial life.
            It is another way of thinking about money.
          </p>

          <p>
            Almost anyone can manage money for a while:
            paying bills, controlling expenses,
            meeting obligations,
            saving something,
            or even investing occasionally.
          </p>

          <p>
            But a financial structure is something else.
            It is a system capable of sustaining your life
            even when the environment changes,
            when crises appear,
            uncertainty arises,
            or unexpected situations occur.
          </p>

          <p>
            Today, while driving,
            I saw graffiti that said:
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            “Focus on what matters most to you.”
          </p>

          <p>
            And that phrase made me stop mentally for a moment.
            Because I believe it hits especially hard
            when a person is not clear
            about what they want for their life
            or where they are heading.
          </p>

          <p>
            This idea does not only apply to daily life.
            It also applies to the way we design our lives
            and, consequently,
            our financial structure.
          </p>

          <p>
            In the end,
            money should be a tool
            in service of the life we want to build,
            not the center around which our existence revolves.
          </p>

          <p>
            That is why,
            when there is no conscious design
            of the lifestyle we want to sustain,
            nor a financial structure aligned with it,
            any unexpected event ends up disrupting everything.
          </p>

          <p>
            On the other hand,
            when there is a structure designed from that life vision,
            money begins to respond to a logic.
          </p>

          <p className="text-[#C6A972] text-3xl leading-relaxed font-light">
            Your logic.
          </p>

          <p>
            Then a real direction begins to exist.
          </p>

          <p>
            Decisions start becoming more rational,
            less dependent on impulse,
            comparison,
            or emotional states,
            and begin aligning
            with a clearer long-term vision.
          </p>

          <p>
            Yes,
            at first this may generate internal contradictions,
            because sustaining a plan often means
            renouncing immediate gratification
            or making difficult decisions.
          </p>

          <p>
            But when a person remains long enough
            in a consciously chosen direction,
            they experience deeper sensations,
            because it no longer remains only about financial growth,
            but also about achieving peace,
            coherence,
            and personal pride.
          </p>

          <p>
            Over time I understood
            that money is only a tool.
          </p>

          <p>
            First we earn it
            by exchanging life time for income,
            but later,
            with a clear structure,
            we can make money itself
            work for us.
          </p>

          <p>
            But even from this perspective,
            money is still not the final goal.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            You decide the goal.
          </p>

          <p>
            And perhaps that is why I insist so much
            on lifestyle design,
            because I understood
            that this is where everything else truly begins.
          </p>

          <p>
            Only afterwards come habits,
            expense control,
            saving,
            investing,
            and wealth building.
          </p>

        </div>

      </article>

    </main>
  );
}