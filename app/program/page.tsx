"use client";

import { useMemo, useState } from "react";

type ProgramSession = {
  id: string;
  day: "Day 1" | "Day 2";
  date: string;
  time: string;
  title: string;
  track: string;
  venue: string;
  type:
    | "Ceremony"
    | "Plenary"
    | "Technical"
    | "Poster"
    | "Break"
    | "Dinner"
    | "Meeting";
  detailFile?: string;
  chairs?: string[];
  invited?: string;
  notes?: string;
};

const fullProgramPdf = "/files/program/icei2026-conference-program.pdf";

const sessions: ProgramSession[] = [
  {
    id: "registration",
    day: "Day 1",
    date: "07 May 2026",
    time: "09:00 – 10:00",
    title: "Registration and Reception",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Ceremony",
    notes: "Participant registration and reception desk opening.",
  },
  {
    id: "inaugural",
    day: "Day 1",
    date: "07 May 2026",
    time: "10:00 – 11:00",
    title: "Inaugural Ceremony",
    track: "General",
    venue: "Auditorium",
    type: "Ceremony",
    detailFile: "/files/program/session-01-plenary.pdf",
    notes:
      "Opening ceremony including recitation, welcome address, guest addresses, chair address, chief guest address and vote of thanks.",
  },
  {
    id: "refreshment",
    day: "Day 1",
    date: "07 May 2026",
    time: "11:00 – 11:30",
    title: "Refreshment",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Break",
  },
  {
    id: "session-01-plenary",
    day: "Day 1",
    date: "07 May 2026",
    time: "11:30 – 13:00",
    title: "Session I: Plenary-I",
    track: "Plenary",
    venue: "Auditorium",
    type: "Plenary",
    detailFile: "/files/program/session-01-plenary.pdf",
    chairs: [
      "Prof. Rezaul Karim Mazumder, PhD",
      "Prof. S. M. Mostafa Al Mamun, PhD",
    ],
    invited:
      "PL-01: Lead-free Perovskite-inspired Solar Cells for Future Photovoltaics; PL-02: Semiconductor Packaging as an entry point for Bangladesh into semiconductor manufacturing.",
  },
  {
    id: "lunch-day1",
    day: "Day 1",
    date: "07 May 2026",
    time: "13:00 – 14:00",
    title: "Prayer and Lunch Break",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Break",
  },
  {
    id: "session-02-ict",
    day: "Day 1",
    date: "07 May 2026",
    time: "14:00 – 15:30",
    title: "Session II: Information and Communication Technology",
    track: "ICT",
    venue: "Classroom",
    type: "Technical",
    detailFile: "/files/program/session-02-ict.pdf",
    chairs: [
      "Prof. Md. Abdur Razzaque, PhD",
      "Prof. Md. Azad Hossain, PhD",
    ],
    invited:
      "IL-01: Responsible AI: A Framework for Ethical Intelligent Systems",
  },
  {
    id: "session-03-tcs",
    day: "Day 1",
    date: "07 May 2026",
    time: "14:00 – 15:30",
    title: "Session III: Theoretical and Computational Science",
    track: "TCS",
    venue: "Auditorium",
    type: "Technical",
    detailFile: "/files/program/session-03-tcs.pdf",
    chairs: [
      "Prof. Md. Ismail Jabiullah, PhD",
      "Abu Zafur Ziauddin Ahmed, PhD",
    ],
    invited:
      "IL-02: Electronic Band Structure and the Electronic Ground States of Solids",
  },
  {
    id: "poster-session",
    day: "Day 1",
    date: "07 May 2026",
    time: "15:30 – 17:00",
    title: "Poster Session: Poster Presentation",
    track: "Poster",
    venue: "AECD Premises",
    type: "Poster",
    detailFile: "/files/program/poster-session.pdf",
    notes:
      "Poster presentations are listed in the dedicated poster-session PDF.",
  },
  {
    id: "session-04-nere",
    day: "Day 1",
    date: "07 May 2026",
    time: "17:00 – 18:30",
    title: "Session IV: Nuclear Energy and Reactor Engineering",
    track: "NERE",
    venue: "Auditorium",
    type: "Technical",
    detailFile: "/files/program/session-04-nere.pdf",
    chairs: [
      "Prof. Md. Mamunur Rashid, PhD",
      "Mohammad Mizanur Rahman, PhD",
    ],
    invited:
      "IL-03: Nuclear in Everyday Life: From Misconception to Clean Energy Future",
  },
  {
    id: "session-05-ecs",
    day: "Day 1",
    date: "07 May 2026",
    time: "17:00 – 18:30",
    title: "Session V: Electronics and Circuit Systems",
    track: "ECS",
    venue: "Classroom",
    type: "Technical",
    detailFile: "/files/program/session-05-ecs.pdf",
    chairs: ["Prof. Habibur Rahman, PhD", "Md. Anzan-uz-Zaman, PhD"],
    invited:
      "IL-04: The Future of Semiconductors: Device Innovation Driving the AI Revolution",
  },
  {
    id: "dinner",
    day: "Day 1",
    date: "07 May 2026",
    time: "19:30 – 21:30",
    title: "Dinner",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Dinner",
  },
  {
    id: "session-06-eshrp",
    day: "Day 2",
    date: "08 May 2026",
    time: "09:30 – 11:00",
    title: "Session VI: Environmental Science & Health and Radiation Physics",
    track: "ESHRP",
    venue: "Auditorium",
    type: "Technical",
    detailFile: "/files/program/session-06-eshrp.pdf",
    chairs: ["Yeasmin Nahar Jolly, PhD", "A.K.M. Mizanur Rahman, PhD"],
    invited:
      "IL-05: Reducing Climate Mitigation Costs through Renewable & Modern Nuclear Technology",
  },
  {
    id: "session-07-ms",
    day: "Day 2",
    date: "08 May 2026",
    time: "09:30 – 11:00",
    title: "Session VII: Materials Science",
    track: "MS",
    venue: "Classroom",
    type: "Technical",
    detailFile: "/files/program/session-07-ms.pdf",
    chairs: [
      "Prof. A. K. M. Akther Hossain, PhD",
      "Prof. Md. Mahbubur Rahman Bhuiyan, PhD",
    ],
    invited:
      "IL-06: MXenes: Emerging Frontiers in Advanced 2D Materials and Their Multifunctional Applications",
  },
  {
    id: "session-08-bme",
    day: "Day 2",
    date: "08 May 2026",
    time: "11:15 – 12:45",
    title: "Session VIII: Biomedical Engineering",
    track: "BME",
    venue: "Auditorium",
    type: "Technical",
    detailFile: "/files/program/session-08-bme.pdf",
    chairs: [
      "Prof. Abu Sayem Koral, PhD",
      "Prof. Muhammad Abdul Kadir, PhD",
    ],
    invited:
      "IL-07: Advanced Diagnosis of Cartilage Damage in Knee Joint by Applying AI in AE Technique",
  },
  {
    id: "session-09-nt",
    day: "Day 2",
    date: "08 May 2026",
    time: "11:15 – 12:45",
    title: "Session IX: Nanotechnology",
    track: "NT",
    venue: "Classroom",
    type: "Technical",
    detailFile: "/files/program/session-09-nt.pdf",
    chairs: [
      "Engr. Sheikh Manjura Hoque, PhD",
      "Prof. Imtiaz Ahmed, PhD",
    ],
    invited:
      "IL-08: Orthoferrite Perovskites for Advanced Electrochemical Energy Storage Applications",
  },
  {
    id: "lunch-day2",
    day: "Day 2",
    date: "08 May 2026",
    time: "12:45 – 14:30",
    title: "Prayer and Lunch Break",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Break",
  },
  {
    id: "session-10-rai",
    day: "Day 2",
    date: "08 May 2026",
    time: "14:30 – 16:00",
    title: "Session X: Robotics and Artificial Intelligence",
    track: "RAI",
    venue: "Auditorium",
    type: "Technical",
    detailFile: "/files/program/session-10-rai.pdf",
    chairs: ["Shamim Ahmed Deowan, PhD", "Asief Javed, PhD"],
    invited:
      "IL-09: From Innovation to Responsibility: Building Trustworthy and Human-Centric AI for Sustainable Digital Futures",
  },
  {
    id: "session-11-rge",
    day: "Day 2",
    date: "08 May 2026",
    time: "14:30 – 16:00",
    title: "Session XI: Renewable and Green Energy",
    track: "RGE",
    venue: "Classroom",
    type: "Technical",
    detailFile: "/files/program/session-11-rge.pdf",
    chairs: [
      "Prof. Engr. Muhibul Haque Bhuyan, PhD",
      "Shameem Ahmad, PhD",
    ],
    invited:
      "IL-10: Progress, Challenges, and Opportunities of Renewable Energies in Bangladesh",
  },
  {
    id: "closing",
    day: "Day 2",
    date: "08 May 2026",
    time: "16:30 – 17:30",
    title: "Closing and Award Ceremony",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Ceremony",
  },
  {
    id: "agm",
    day: "Day 2",
    date: "08 May 2026",
    time: "17:30 – 18:00",
    title: "Annual General Meeting (AGM)",
    track: "General",
    venue: "Atomic Energy Centre, Dhaka",
    type: "Meeting",
  },
];

const dayFilters = ["All", "Day 1", "Day 2"];

const typeFilters = [
  "All",
  "Ceremony",
  "Plenary",
  "Technical",
  "Poster",
  "Break",
  "Dinner",
  "Meeting",
];

const trackFilters = [
  "All",
  "General",
  "Plenary",
  "ICT",
  "TCS",
  "NERE",
  "ECS",
  "ESHRP",
  "MS",
  "BME",
  "NT",
  "RAI",
  "RGE",
  "Poster",
];

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? "bg-indigo-700 text-white"
          : "border border-slate-300 bg-white text-slate-700 hover:bg-indigo-50"
      }`}
    >
      {label}
    </button>
  );
}

function SessionCard({ session }: { session: ProgramSession }) {
  const detailsLink = session.detailFile ?? fullProgramPdf;

  return (
    <article className="soft-card p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            {session.day} · {session.date}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-indigo-900">
            {session.title}
          </h2>
        </div>

        <span className="w-fit rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
          {session.type}
        </span>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
        <p>
          <span className="font-semibold text-slate-950">Time:</span>
          <br />
          {session.time}
        </p>

        <p>
          <span className="font-semibold text-slate-950">Venue:</span>
          <br />
          {session.venue}
        </p>

        <p>
          <span className="font-semibold text-slate-950">Track:</span>
          <br />
          {session.track}
        </p>
      </div>

      {session.chairs && (
        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-950">Chair(s)</p>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {session.chairs.map((chair) => (
              <li key={chair}>{chair}</li>
            ))}
          </ul>
        </div>
      )}

      {session.invited && (
        <div className="mt-5 rounded-xl border-l-4 border-cyan-500 bg-cyan-50 p-4 text-sm leading-7 text-slate-700">
          <span className="font-semibold text-slate-950">
            Invited / Featured:
          </span>{" "}
          {session.invited}
        </div>
      )}

      {session.notes && (
        <p className="mt-5 text-sm leading-7 text-slate-600">
          {session.notes}
        </p>
      )}

<div className="mt-6 flex flex-wrap gap-3">

  {/* Show only if specific session PDF exists */}
  {session.detailFile && (
    <a
      href={session.detailFile}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-indigo-700 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
    >
      Open Details
    </a>
  )}

  {/* Always show full PDF */}
  <a
    href={fullProgramPdf}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-indigo-700 px-5 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
  >
    Full PDF
  </a>
</div>
    </article>
  );
}

export default function ProgramPage() {
  const [day, setDay] = useState("All");
  const [type, setType] = useState("All");
  const [track, setTrack] = useState("All");
  const [query, setQuery] = useState("");

  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      const matchesDay = day === "All" || session.day === day;
      const matchesType = type === "All" || session.type === type;
      const matchesTrack = track === "All" || session.track === track;

      const q = query.toLowerCase();

      const matchesQuery =
        !q ||
        session.title.toLowerCase().includes(q) ||
        session.track.toLowerCase().includes(q) ||
        session.venue.toLowerCase().includes(q) ||
        session.time.toLowerCase().includes(q) ||
        session.chairs?.some((chair) => chair.toLowerCase().includes(q)) ||
        session.invited?.toLowerCase().includes(q) ||
        session.notes?.toLowerCase().includes(q);

      return matchesDay && matchesType && matchesTrack && matchesQuery;
    });
  }, [day, type, track, query]);

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
            Explore the ICEI2026 schedule by day, session type, track, venue,
            speaker, chair, or keyword. Timings are in Bangladesh Standard Time.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="soft-card p-5 text-center">
              <p className="text-3xl font-extrabold text-indigo-900">2</p>
              <p className="mt-1 text-sm text-slate-600">Conference Days</p>
            </div>

            <div className="soft-card p-5 text-center">
              <p className="text-3xl font-extrabold text-indigo-900">11</p>
              <p className="mt-1 text-sm text-slate-600">Technical Sessions</p>
            </div>

            <div className="soft-card p-5 text-center">
              <p className="text-3xl font-extrabold text-indigo-900">10</p>
              <p className="mt-1 text-sm text-slate-600">Invited Lectures</p>
            </div>

            <div className="soft-card p-5 text-center">
              <p className="text-3xl font-extrabold text-indigo-900">1</p>
              <p className="mt-1 text-sm text-slate-600">Poster Session</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="soft-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-indigo-900">
              Filter Program
            </h2>

            <div className="section-title-line mt-4" />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by session, track, chair, venue, or invited lecture..."
              className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-700"
            />

            <div className="mt-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Day
              </p>

              <div className="flex flex-wrap gap-3">
                {dayFilters.map((item) => (
                  <FilterButton
                    key={item}
                    label={item}
                    active={day === item}
                    onClick={() => setDay(item)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Session Type
              </p>

              <div className="flex flex-wrap gap-3">
                {typeFilters.map((item) => (
                  <FilterButton
                    key={item}
                    label={item}
                    active={type === item}
                    onClick={() => setType(item)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Track
              </p>

              <div className="flex flex-wrap gap-3">
                {trackFilters.map((item) => (
                  <FilterButton
                    key={item}
                    label={item}
                    active={track === item}
                    onClick={() => setTrack(item)}
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              Showing {filteredSessions.length} session(s).
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {filteredSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <div className="soft-card mt-10 p-8 text-center text-slate-600">
              No sessions match the selected filters.
            </div>
          )}

          <div className="soft-card mt-10 p-6">
            <h2 className="text-2xl font-bold text-indigo-900">
              Official Full Program PDF
            </h2>

            <p className="mt-4 text-slate-600">
              Use this file to view or download the complete conference program.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={fullProgramPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-800"
              >
                Open Full PDF
              </a>

              <a
                href={fullProgramPdf}
                download
                className="rounded-lg border border-indigo-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-indigo-700 transition hover:bg-indigo-50"
              >
                Download Full PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}