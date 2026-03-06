export default function Footer() {
  return (
    <footer className="bg-[#123d73] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg font-bold">
              International Conference on Electronics and Informatics 2026
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Organized by Bangladesh Electronics and Informatics Society (BEIS)
            </p>
          </div>

          <div className="text-sm text-slate-200 md:text-right">
            <p>Venue: Atomic Energy Centre, Shahbag, Dhaka</p>
            <p className="mt-2">Email: beisbd.info@gmail.com</p>
            <p className="mt-2">Website: www.beisbd.org</p>
            <p className="mt-2">Facebook: facebook.com/beis1989</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-slate-300">
          © 2026 BEIS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}