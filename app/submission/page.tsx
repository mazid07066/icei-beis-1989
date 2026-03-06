export default function SubmissionPage() {
  return (
    <main className="bg-[#f4f6fb]">
      <section className="hero-pattern relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            ICEI 2026
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Submission Details
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-200 md:text-xl">
            Authors are requested to prepare their papers using the official
            template and submit through the official Google Form submission
            portal. Registration will be handled separately after submission
            and review stages.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="soft-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Step 1
              </p>
              <h2 className="mt-3 text-2xl font-bold text-indigo-900">
                Prepare Your Paper
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Use the official ICEI 2026 submission template while preparing
                your paper or abstract.
              </p>

              <a
                href="https://docs.google.com/document/d/1U-rohP4OASsQCLBlug-iLHwD4te3GeLKFJPXMsqqjGE/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg border border-indigo-700 px-5 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
              >
                Open Template
              </a>
            </div>

            <div className="soft-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Step 2
              </p>
              <h2 className="mt-3 text-2xl font-bold text-indigo-900">
                Submit Through Form
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Complete the official submission form carefully and upload or
                provide all required information accurately.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeIQq3tH3ElGgOOSXKEKSZLUn2OZvT-AY2UEK-tEX3l2aPS7Q/viewform?fbclid=IwY2xjawQXbU1leHRuA2FlbQIxMABicmlkETFPclI3Yk9tYXQ3RENlRjRKc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs2eXrNaLtotBdu-F3sFCEds1_CoCFui-1kr-kJHP0ar0TTMCIrPQOeM4yzA_aem_tXoqB5uH3WAfpekV255QLg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
              >
                Submit Paper
              </a>
            </div>

            <div className="soft-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Step 3
              </p>
              <h2 className="mt-3 text-2xl font-bold text-indigo-900">
                Wait for Notification
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                After submission, authors should wait for the official review
                decision and acceptance notification from the conference team.
              </p>

              <a
                href="/registration"
                className="mt-6 inline-block rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-700 transition hover:bg-slate-50"
              >
                Registration Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="soft-card p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-900">
              Important Notes for Authors
            </h2>
            <div className="section-title-line mt-4" />

            <ul className="mt-8 space-y-4 text-slate-700">
              <li>Prepare your paper using the official submission template.</li>
              <li>Submit through the official Google Form only.</li>
              <li>Ensure author names, affiliation, and contact details are accurate.</li>
              <li>Monitor your email regularly for conference updates.</li>
              <li>Registration will be opened separately after the review stage.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="soft-card p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-900">
              Useful Links
            </h2>
            <div className="section-title-line mt-4" />

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeIQq3tH3ElGgOOSXKEKSZLUn2OZvT-AY2UEK-tEX3l2aPS7Q/viewform?fbclid=IwY2xjawQXbU1leHRuA2FlbQIxMABicmlkETFPclI3Yk9tYXQ3RENlRjRKc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs2eXrNaLtotBdu-F3sFCEds1_CoCFui-1kr-kJHP0ar0TTMCIrPQOeM4yzA_aem_tXoqB5uH3WAfpekV255QLg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
              >
                Submission Form
              </a>

              <a
                href="https://docs.google.com/document/d/1U-rohP4OASsQCLBlug-iLHwD4te3GeLKFJPXMsqqjGE/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
              >
                Submission Template
              </a>

              <a
                href="/call-for-papers"
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-700 transition hover:bg-slate-50"
              >
                Call for Papers
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}