export default function Footer() {
  return (
    <footer className="bg-[#123d73] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Left Section */}
          <div>
            <p className="text-lg font-bold">
              International Conference on Electronics and Informatics 2026
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Organized by Bangladesh Electronics and Informatics Society (BEIS)
            </p>
          </div>

          {/* Right Section */}
          <div className="text-sm text-slate-200 md:text-right">

            <p>Venue: Atomic Energy Centre, Dhaka</p>

            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:beisbd.info@gmail.com"
                className="underline hover:text-cyan-300"
              >
                beisbd.info@gmail.com
              </a>
            </p>

            <p className="mt-2">
              <p>Contact:  +8801712627014</p>
            </p>
            

            <p className="mt-2">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/beis1989"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-300"
              >
                facebook.com/beis1989
              </a>
            </p>

          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-slate-300">
          © 2026 Bangladesh Electronics and Informatics Society (BEIS). All rights reserved.
        </div>
      </div>
    </footer>
  );
}