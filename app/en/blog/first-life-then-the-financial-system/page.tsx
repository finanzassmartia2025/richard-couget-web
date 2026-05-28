import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">

      <article className="max-w-4xl mx-auto px-8 py-40">

        {/* BACK */}
        <Link
          href="/en/#blog"
          className="text-[#C6A972] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <div className="mt-16 mb-24">

          <p className="text-[#C6A972] uppercase tracking-[0.3em] text-sm mb-6">
            Method DAPA
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            First We Design Life.
            <br />
            Then the Financial System.
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            Sustainable financial stability does not begin
            with spreadsheets, budgets or investments.
            It begins with clarity about the life
            we truly want to build.
          </p>

        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-300 text-[1.15rem] leading-[2.1]">

          <p>
            Building financial stability primarily through learning
            how to manage money does not guarantee good results,
            at least not for most people.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Saving more, spending less and investing better
            are useful tools — but only when they are synchronized
            within a consciously designed life
            and financial structure.
          </p>

          <p>
            As isolated tools,
            they may work temporarily.
            The problem appears when we try to sustain them
            for years inside an exhausting,
            incoherent or structurally disorganized life.
          </p>

          <p className="text-white text-2xl leading-relaxed pt-10">
            That is why, before making isolated financial decisions,
            there is a far more important question:
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            What kind of life
            are we organizing our finances for?
          </p>

          <p>
            Because it becomes extremely difficult
            to build healthy financial systems
            around lifestyles that are emotionally exhausting,
            structurally chaotic
            or incompatible with our well-being.
          </p>

          <p>
            And sooner or later,
            that incoherence always carries a cost.
          </p>

          <p>
            One of the biggest modern financial problems
            is that many people first design their economic obligations
            and only afterward try to adapt their lives to them.
          </p>

          <p>
            They acquire permanent responsibilities.
            Constantly increase consumption.
            Build rigid financial structures.
            And then attempt to emotionally sustain that system
            for years.
          </p>

          <p>
            The result is often a constant feeling of pressure,
            mental exhaustion
            and a permanent sense of financial dependence.
          </p>

          <p>
            Not necessarily because money is lacking.
          </p>

          <p>
            But because the entire system was designed
            without enough coherence between lifestyle,
            personal energy, priorities
            and the real capacity to sustain it over time.
          </p>

          <p>
            Many times, the modern financial system
            externally rewards lifestyles
            that are internally difficult to sustain.
            More income, more consumption,
            more obligations and more speed.
          </p>

          <p>
            But increasing income does not always increase stability.
            In many cases,
            it simply increases the size of the structure
            that must be sustained.
          </p>

          <p>
            And when a life requires too much energy
            just to keep functioning,
            the financial system slowly begins to lose stability
            even when the numbers still appear correct.
          </p>

          <p>
            That is why I increasingly believe
            it is more important to first design
            a coherent life
            before building a complex financial system.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Define priorities.
            <br />
            Reduce unnecessary friction.
            <br />
            Understand how much freedom is truly needed.
            <br />
            How much stress can realistically be sustained.
            <br />
            And what pace of life is genuinely sustainable.
          </p>

          <p>
            Personal finance should not exist
            merely to sustain obligations.
            It should exist to sustain
            a life with greater well-being and fulfillment.
          </p>

          <p>
            This idea became one of the structural foundations
            behind Method DAPA.
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            First we design life.
            Then we build a financial system
            aligned with it.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Not the other way around.
          </p>

          <p>
            When a financial structure permanently contradicts
            the life a person actually needs to sustain,
            exhaustion eventually appears.
            And no financial system works properly
            when the life behind it
            is no longer sustainable.
          </p>

          <p>
            For years,
            people believed that financial stability
            depended only on how much money someone accumulated.
          </p>

          <p>
            But true stability rarely depends only on numbers.
            It depends on coherence.
          </p>

          <p>
            Coherence between time,
            energy,
            priorities,
            structure
            and lifestyle.
          </p>

          <p className="text-white text-2xl leading-relaxed pt-10">
            Money can sustain many things,
            but it can hardly sustain indefinitely
            a life that was never consciously designed
            and remains in permanent contradiction with oneself.
          </p>

        </div>

      </article>

    </main>
  );
}