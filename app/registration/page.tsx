export default function RegistrationPage() {
  return (
    <main className="bg-[#f4f6fb]">
      <section className="hero-pattern relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            ICEI2026
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Registration
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-200 md:text-xl">
            Online registration for the International Conference on Electronics
            and Informatics 2026 is now CLOSED.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="soft-card p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-900">
              Registration Announcement
            </h2>
            <div className="section-title-line mt-4" />

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Dear Author(s), Delegate(s), and Participant(s),
              </p>

              <p>
                Greetings from the International Conference on Electronics and
                Informatics 2026 (ICEI2026).
              </p>

              <p>
                It is our immense pleasure to inform you that Bangladesh
                Electronics and Informatics Society is going to organize
                ICEI2026 at Atomic Energy Centre, Dhaka during{" "}
                <span className="font-semibold text-slate-900">
                  07–08 May 2026
                </span>.
              </p>

              <p>
                The detailed final program schedule is available on the
                conference website. We are looking forward to seeing you at the
                International Conference on Electronics and Informatics 2026.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="text-lg font-semibold text-slate-900">
                Online registration will remain open until:
              </p>
              <p className="mt-2 text-3xl font-extrabold text-indigo-900">
                05 May 2026
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://forms.gle/73SXsefhor5X1Xv58"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
              >
                Register Online
              </a>

              <a
                href="/program"
                className="rounded-lg border border-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
              >
                View Program Schedule
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="soft-card p-6">
              <h3 className="text-xl font-bold text-indigo-900">
                Conference Date
              </h3>
              <p className="mt-4 text-slate-700">07–08 May 2026</p>
            </div>

            <div className="soft-card p-6">
              <h3 className="text-xl font-bold text-indigo-900">
                Venue
              </h3>
              <p className="mt-4 text-slate-700">
                Atomic Energy Centre, Dhaka
              </p>
            </div>

            <div className="soft-card p-6">
              <h3 className="text-xl font-bold text-indigo-900">
                Registration Deadline
              </h3>
              <p className="mt-4 text-slate-700">05 May 2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}