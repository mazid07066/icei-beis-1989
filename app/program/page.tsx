export default function ProgramPage() {
  return (
    <main className="bg-[#f4f6fb]">
      <section className="hero-pattern relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            ICEI2026
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Conference Program
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-200 md:text-xl">
            The official program schedule of the International Conference on
            Electronics and Informatics 2026 is available below.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="soft-card p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-900">
              Official Schedule
            </h2>
            <div className="section-title-line mt-4" />

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Participants, authors, guests, and committee members are requested
              to follow the official conference program schedule.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/files/icei2026-conference-program.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
              >
                Open Program PDF
              </a>

              <a
                href="/files/icei2026-conference-program.pdf"
                download
                className="rounded-lg border border-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
              >
                Download Program PDF
              </a>
            </div>
          </div>

          <div className="mt-10 soft-card overflow-hidden p-4">
            <iframe
              src="/files/icei2026-conference-program.pdf"
              title="ICEI2026 Conference Program PDF"
              className="h-[700px] w-full rounded-xl border"
            />
          </div>
        </div>
      </section>
    </main>
  );
}