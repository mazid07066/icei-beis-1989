import Image from "next/image";

const tracksLeft = [
  {
    title: "Electronics and Circuit Systems",
    items: [
      "Advanced Electronics",
      "Power Electronic Circuits and Devices",
      "Nanoelectronics and Nanosensors",
      "Embedded System Design",
    ],
  },
  {
    title: "Energy and Environment",
    items: [
      "Nuclear Energy and Engineering",
      "Renewable and Sustainable Energy Systems",
      "Radiation Science and Protection Techniques",
      "Environmental Science and Green Technologies",
    ],
  },
  {
    title: "Communication and Networking",
    items: [
      "Internet of Things (IoT)",
      "Wireless and Optical Communication Networks",
      "Antenna Design and Propagation",
      "Mobile Computing and Cloud Computing",
    ],
  },
];

const tracksRight = [
  {
    title: "Materials and Nanotechnology",
    items: [
      "Materials Science and Engineering",
      "Nanomaterials and Nanomechanics",
      "Smart Materials and Their Applications",
      "Sustainable and Recyclable Materials",
    ],
  },
  {
    title: "Biomedical and Interdisciplinary Topics",
    items: [
      "Biomedical Engineering",
      "Other Emerging and Related Topics",
    ],
  },
  {
    title: "Robotics and Intelligent Systems",
    items: [
      "Robotics, Automation, and Process Control",
      "Cyber-Physical System Architecture and Design",
      "Artificial Intelligence and Machine Learning",
    ],
  },
  {
    title: "Computing and Data Science",
    items: [
      "Information and Communication Technology",
      "Industrial Big Data and Analytics",
      "Theoretical and Computational Sciences",
    ],
  },
];

function TrackCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="soft-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white">
          ✓
        </div>
        <h3 className="text-xl font-bold text-red-700">{title}</h3>
      </div>

      <ul className="space-y-2 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CallForPapersPage() {
  return (
    <main className="bg-[#f4f6fb]">
      <section className="hero-pattern relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            ICEI 2026
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Call for Papers / Call for Abstracts
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-200 md:text-xl">
            Bangladesh Electronics and Informatics Society (BEIS) invites
            researchers, academicians, engineers, students, and professionals
            to submit original contributions to the International Conference on
            Electronics and Informatics 2026 (ICEI 2026).
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold text-cyan-300 md:text-2xl">
            Theme: Electronics and Informatics for Secure and Sustainable
            Bangladesh
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-3">
          <div className="soft-card p-6">
            <h2 className="text-2xl font-bold text-indigo-900">
              Important Dates
            </h2>
            <div className="section-title-line mt-4" />

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">
                  Conference Dates:
                </span>{" "}
                07-08 May 2026
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Abstract Submission Deadline:
                </span>{" "}
                31 March 2026
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Notification of Acceptance:
                </span>{" "}
                15 April 2026
              </p>
            </div>
          </div>

          <div className="soft-card p-6">
            <h2 className="text-2xl font-bold text-indigo-900">Venue</h2>
            <div className="section-title-line mt-4" />

            <div className="mt-6 space-y-4 text-slate-700">
              <p className="font-semibold text-slate-900">
                Atomic Energy Centre
              </p>
              <p>Shahbag, Dhaka</p>
            </div>
          </div>

          <div className="soft-card p-6">
            <h2 className="text-2xl font-bold text-indigo-900">
              Registration Fees
            </h2>
            <div className="section-title-line mt-4" />

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">
                  Professionals:
                </span>{" "}
                3000 BDT
              </p>
              <p>
                <span className="font-semibold text-slate-900">Students:</span>{" "}
                2000 BDT
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Foreign Participants:
                </span>{" "}
                100 USD
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 md:text-5xl">
              Conference Scope
            </h2>
            <div className="section-title-line mt-4" />

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              ICEI 2026 welcomes submissions in electronics, informatics,
              computing, energy, robotics, materials, communication,
              interdisciplinary applications, and emerging technological areas.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="grid gap-6">
              {tracksLeft.map((track) => (
                <TrackCard
                  key={track.title}
                  title={track.title}
                  items={track.items}
                />
              ))}
            </div>

            <div className="grid gap-6">
              {tracksRight.map((track) => (
                <TrackCard
                  key={track.title}
                  title={track.title}
                  items={track.items}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="soft-card p-8">
              <h2 className="text-3xl font-bold text-indigo-900">
                Submission Guidance
              </h2>
              <div className="section-title-line mt-4" />

              <div className="mt-6 space-y-5 text-slate-700">
                <p>
                  Authors are encouraged to submit abstracts and research
                  contributions aligned with the conference theme and scope.
                </p>
                <p>
                  Submissions should be original, relevant, and clearly written.
                  Detailed formatting rules, templates, and submission procedure
                  can be added here once finalized by the organizing committee.
                </p>
                
                
              </div>
            </div>

            <div className="soft-card p-8">
              <h2 className="text-3xl font-bold text-indigo-900">
                Committee / Contact
              </h2>
              <div className="section-title-line mt-4" />

              <div className="mt-6 space-y-5 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">
                    Convener, Organizing Committee
                  </p>
                  <p>Prof. Rezaul Karim Mazumder, PhD</p>
                  <p>
                    President, Bangladesh Electronics and Informatics Society
                  </p>
                  <p>Professor (Retd.), Dept. of EEE, University of Dhaka</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Secretary, Organizing Committee
                  </p>
                  <p>Mohammed Nazrul Islam Khan, PhD</p>
                  <p>
                    General Secretary, Bangladesh Electronics and Informatics
                    Society
                  </p>
                  <p>
                    Chief Scientific Officer, Bangladesh Atomic Energy
                    Commission
                  </p>
                  <p>Email: ni_khan77@yahoo.com</p>
                </div>

                <div className="border-t pt-4">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Website:
                    </span>{" "}
                    www.beisbd.org
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                    beisbd.info@gmail.com
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-slate-900">
                      Facebook:
                    </span>{" "}
                    https://www.facebook.com/beis1989/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 md:text-5xl">
              Conference Flyer
            </h2>
            <div className="section-title-line mt-4" />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              The official ICEI 2026 flyer is shown below for quick reference.
            </p>
          </div>

          <div className="soft-card overflow-hidden p-4">
            <div className="relative mx-auto max-w-4xl">
              <Image
                src="/images/icei2026-flyer.jpg"
                alt="ICEI 2026 conference flyer"
                width={1200}
                height={1600}
                className="h-auto w-full rounded-xl"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/images/icei2026-flyer.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
              >
                Open Flyer
              </a>

              <a
                href="/images/icei2026-flyer.jpg"
                download
                className="rounded-lg border border-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
              >
                Download Flyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}