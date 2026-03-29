import Image from "next/image";
import CountdownBox from "@/components/CountdownBox";
import InfoCard from "@/components/InfoCard";

const organizingCommittee = [
  "Convener: Prof. Rezaul Karim Mazumder, PhD (DU)",
  "Secretary: Mohammed Nazrul Islam Khan, PhD (BAEC)",
  "Prof. A. K. M. Akther Hossain, PhD (BUET)",
  "Prof. S. M. Mostafa Al Mamun, PhD (DU)",
  "Prof. Md. Ismail Jabiullah, PhD (DIU)",
  "Md. Abdullah Al Mamun, PhD (AECD)",
  "Engr. Rimi Rashid, PhD (AECD)",
  "Md. Rabiul Hassan (NPCBL)",
  "Harinarayan Das, PhD (AECD)",
  "Prof. Md. Mamunur Rashid, PhD (IUS)",
  "Engr. Abdur Rab (AECD)",
  "Prof. Mohammad Jahangir Alam, PhD (BUET)",
  "Prof. Habibur Rahman, PhD (DU)",
  "Prof. Engr. Muhibul Haque Bhuyan, PhD (AIUB)",
  "Engr. Mohamima Begum (AECD)",
  "Hose Ara Begum, PhD (BCSIR)",
  "Prof. Md. Azad Hossain, PhD (CUET)",
  "Mohammad Kamrul Hoque Bhuiyan, PhD (NCTB)",
  "Shovan Kumar Kundu, PhD (AIUB)",
  "Engr. Sabiha Sattar (AECD)",
  "Mazid Ishtique Ahmed (ADUST)",
];

const advisoryCommittee = [
  "Prof. ABM Badruzzaman, PhD (VC, BUET)",
  "Prof. Md. Maksud Helali, PhD (VC, KUET)",
  "Prof. S M Abdur Razzak, PhD (VC, RUET)",
  "Prof. Mahmud Abdul Matin Bhuiyan, PhD (VC, CUET)",
  "Prof. Mohammad Zoynal Abedin, PhD (VC, DUET)",
  "Prof. Saiful Islam, PhD (VC, AIUB)",
  "Yeasmin Nahar Jolly, PhD (AECD)",
  "Prof. Farruq Ahmed, PhD (IUB)",
  "Prof. M. Lutfar Rahman, PhD (DIU)",
  "Prof. Ichihiko Toyoda, PhD (Japan)",
  "Prof. Peter Robinson, PhD (Australia)",
  "Prof. Hidekazu Tanaka, PhD (Japan)",
  "Prof. Mohammad Abdur Rashid, PhD (New Zealand)",
  "Prof. Mohammad Tariqul Islam, PhD (Malaysia)",
  "Prof. Akhtaruzzaman, PhD (Saudi Arabia)",
  "Prof. Mayeen Uddin Khandaker, PhD (Malaysia)",
];

function CommitteeCard({
  title,
  members,
}: {
  title: string;
  members: string[];
}) {
  return (
    <div className="soft-card h-full p-8">
      <h2 className="text-2xl font-bold text-indigo-900 md:text-3xl">
        {title}
      </h2>
      <div className="section-title-line mt-4" />

      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700 md:text-base">
        {members.map((member) => (
          <li key={member} className="border-b border-slate-100 pb-2 last:border-b-0">
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero-pattern relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-10 md:pt-20">
          <div className="mx-auto max-w-6xl text-center">
  <h1 className="mx-auto max-w-6xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
    International Conference on Electronics and Informatics 2026
  </h1>

  <p className="mt-4 text-2xl font-bold text-cyan-400 md:text-4xl">
    ICEI2026
  </p>

  <CountdownBox />

  <div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row">
    <Image
      src="/images/beis-logo.jpg"
      alt="Bangladesh Electronics and Informatics Society logo"
      width={110}
      height={110}
      className="rounded-full bg-white/80 p-1 shadow-lg"
    />

    <div className="text-center md:text-left">
      <p className="text-lg font-semibold text-white md:text-2xl">
        Bangladesh Electronics and Informatics Society (BEIS)
      </p>
      <p className="mt-1 text-sm uppercase tracking-[0.25em] text-cyan-300">
        Organizer of ICEI2026
      </p>
    </div>
  </div>

  <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-200 md:text-2xl">
    Theme: Electronics and Informatics for Secure and Sustainable
    Bangladesh
  </p>

  <div className="mt-10 space-y-3 text-center">
    <p className="text-2xl font-bold text-white md:text-4xl">
      07–08 May 2026
    </p>
    <p className="text-lg font-medium text-gray-200 md:text-2xl">
      Atomic Energy Centre, Dhaka
    </p>
  </div>

  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeIQq3tH3ElGgOOSXKEKSZLUn2OZvT-AY2UEK-tEX3l2aPS7Q/viewform?fbclid=IwY2xjawQXbU1leHRuA2FlbQIxMABicmlkETFPclI3Yk9tYXQ3RENlRjRKc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs2eXrNaLtotBdu-F3sFCEds1_CoCFui-1kr-kJHP0ar0TTMCIrPQOeM4yzA_aem_tXoqB5uH3WAfpekV255QLg"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-cyan-400 px-8 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-cyan-300"
    >
      Submit Paper
    </a>

    <a
      href="/submission"
      className="rounded-lg border border-white/40 bg-white/10 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
    >
      Submission Details
    </a>
  </div>
</div>


        </div>
      </section>

      <section className="bg-[#f4f6fb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2">
          <div className="soft-card p-8">
            <h2 className="text-3xl font-bold text-indigo-900">
              About ICEI2026
            </h2>
            <div className="section-title-line mt-4" />

            <div className="mt-8 space-y-6 text-[17px] leading-8 text-slate-600">
              <p>
                The International Conference on Electronics and Informatics 2026
                (ICEI2026) is organized by the Bangladesh Electronics and
                Informatics Society (BEIS), a non-profit professional society
                dedicated to education, research, innovation, and collaboration
                in electronics, information technology, telecommunication, and
                related fields.
              </p>

              <p>
                ICEI2026 will bring together researchers, academicians,
                practicing engineers, students, industry professionals, and
                policymakers to share knowledge, present emerging research, and
                promote practical technological solutions for national
                development.
              </p>

              <div className="border-l-4 border-pink-500 pl-5 font-medium text-slate-700">
                Theme: Electronics and Informatics for Secure and Sustainable
                Bangladesh
              </div>

              <p>
                The conference will feature research presentations, technical
                discussions, networking opportunities, and interdisciplinary
                collaboration across electronics, energy, computing, intelligent
                systems, materials, communications, and data science.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-block rounded-lg bg-pink-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-pink-700"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <InfoCard icon="📅" title="Important Dates">
              <p>
                <span className="font-semibold text-slate-900">
                  Abstract Submission Deadline:
                </span>{" "}
                10 April 2026
              </p>
              <p className="mt-3">
                <span className="font-semibold text-slate-900">
                  Notification of Acceptance:
                </span>{" "}
                20 April 2026
              </p>
              <p className="mt-3">
                <span className="font-semibold text-slate-900">
                  Conference Dates:
                </span>{" "}
                07–08 May 2026
              </p>
            </InfoCard>

            <InfoCard icon="📍" title="Venue">
              <p>Atomic Energy Centre, Dhaka</p>
              
            </InfoCard>

            <InfoCard icon="💳" title="Registration Fees">
              <p>
                <span className="font-semibold text-slate-900">
                  Professionals:
                </span>{" "}
                3000 BDT
              </p>
              <p className="mt-3">
                <span className="font-semibold text-slate-900">Students:</span>{" "}
                2000 BDT
              </p>
              <p className="mt-3">
                <span className="font-semibold text-slate-900">
                  Foreign Participants:
                </span>{" "}
                100 USD
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-indigo-900 md:text-5xl">
        Conference Committees
      </h2>
      <div className="mx-auto mt-4 section-title-line" />
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        ICEI2026 is supported by distinguished academicians, researchers,
        professionals, and experts from Bangladesh and abroad.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      <CommitteeCard
        title="Organizing Committee"
        members={organizingCommittee}
      />

      <CommitteeCard
        title="Advisory Committee"
        members={advisoryCommittee}
      />
    </div>
  </div>
</section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-indigo-900">
              Venue and Contact
            </h2>
            <div className="section-title-line mt-4" />

            <div className="mt-8 space-y-5 text-[17px] leading-8 text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Venue:</span>{" "}
                Atomic Energy Centre, Dhaka
              </p>
              
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                beisbd.info@gmail.com
              </p>
              <p className="mt-2">
                
  <span className="font-semibold text-slate-900">Facebook:</span>{" "}
  <a
    href="https://www.facebook.com/beis1989/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-700 underline hover:text-indigo-900"
  >
    https://www.facebook.com/beis1989/
  </a>
</p>
            </div>
          </div>

          <div className="soft-card overflow-hidden p-2">
            <a
              href="https://maps.app.goo.gl/ab2jzVKxhXBMfbmk7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src="https://maps.google.com/maps?q=Atomic%20Energy%20Centre%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atomic Energy Centre Dhaka Map"
              ></iframe>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}