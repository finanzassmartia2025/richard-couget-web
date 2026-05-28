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
            When everything depends
            <br />
            on nothing going wrong
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            A fragile financial structure can appear stable
            until real life begins testing it.
          </p>

        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-300 text-[1.15rem] leading-[2.1]">

          <p>
            When I was a child and teenager,
            I learned about money simply by observing
            how my parents managed their personal finances.
          </p>

          <p>
            At that time,
            I believed a person had financial control
            simply because they paid their bills on time,
            made it to the end of the month,
            or even managed to save some money
            and go on vacation once a year.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            Today I think completely differently.
          </p>

          <p className="text-[#C6A972] text-3xl leading-relaxed font-light">
            I understood that this is not necessarily control.
            It is merely well-disguised financial survival.
          </p>

          <p>
            A person can earn well,
            save money,
            and even invest,
            while still living inside
            an extremely fragile structure.
          </p>

          <p>
            Unfortunately,
            I constantly see this
            in people I encounter daily
            and briefly speak with.
          </p>

          <p>
            Even people with good incomes,
            whose peace of mind depends entirely
            on nothing going wrong.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            No health problems appearing.
            <br />
            Not losing their job.
            <br />
            Their income not decreasing.
            <br />
            Or their expenses not increasing too much.
          </p>

          <p>
            And it hurts even more
            when I have this conversation
            with people living on minimum wage
            and without basic financial education.
          </p>

          <p>
            In fact,
            today I spoke with someone in that situation.
          </p>

          <p>
            Within my possibilities,
            I try sharing ideas,
            tools,
            or perspectives
            that may help them optimize their structure
            and reduce financial pressure.
          </p>

          <p className="text-[#C6A972] text-3xl leading-relaxed font-light">
            When a structure depends
            on everything going perfectly
            in order to survive,
            there is no real stability.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            There is only contained tension.
          </p>

          <p>
            That is why I believe
            personal finance should not be measured
            only by how much money you have,
            but by how resistant your financial structure is
            relative to the lifestyle you sustain.
          </p>

          <p>
            And although it may sound obvious,
            it is worth saying:
          </p>

          <p>
            Real life is not linear.
          </p>

          <p>
            Unexpected changes exist.
            Crises.
            Emotional exhaustion.
            Mistakes.
            Loss of income.
            And moments of uncertainty.
          </p>

          <p>
            Your financial system must be prepared
            to absorb part of that,
            so that an unexpected event
            does not completely destroy your stability.
          </p>

          <p>
            Personal experience
            and observing other people
            allowed me to understand
            that real change happens
            when someone begins building their structure
            from the foundation.
          </p>

          <p className="text-white text-2xl leading-relaxed">
            First by designing a lifestyle
            aligned with their current income.
          </p>

          <p>
            Then by making decisions
            aligned with that direction.
            Creating margin.
            Learning not to let emotions
            govern finances.
            Making money a tool within life,
            instead of making life depend entirely on money.
          </p>

          <p>
            That is when personal finance
            stops becoming a constant source of tension
            and begins transforming
            into economic and emotional stability.
          </p>

          <p>
            And perhaps this is one of the most important ideas
            I have learned throughout these years:
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            financial peace does not come
            from earning more money,
          </p>

          <p className="text-[#C6A972] text-4xl leading-relaxed font-light">
            but from building a structure
            capable of sustaining your life
            even when the environment changes.
          </p>

        </div>

      </article>

    </main>
  );
}