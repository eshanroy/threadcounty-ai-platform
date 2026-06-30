import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTshirt,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <FaTshirt size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  ThreadCounty
                </h2>

                <p className="text-sm text-slate-500">
                  AI Fabric Analysis Platform
                </p>
              </div>
            </div>

            <p className="max-w-sm leading-7 text-slate-600">
              Analyze woven fabrics using Artificial Intelligence,
              Computer Vision, and Machine Learning to generate
              accurate textile inspection reports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="text-slate-600 transition hover:text-blue-600">
                Home
              </Link>

              <Link to="/upload" className="text-slate-600 transition hover:text-blue-600">
                Upload
              </Link>

              <Link to="/history" className="text-slate-600 transition hover:text-blue-600">
                History
              </Link>

              <Link to="/dashboard" className="text-slate-600 transition hover:text-blue-600">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Built With
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "FastAPI",
                "Supabase",
                "Tailwind CSS",
                "Python",
                "AI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-100 p-3 text-slate-600 transition hover:bg-blue-600 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-100 p-3 text-slate-600 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8 text-center text-slate-500">
          © {year} ThreadCounty • Built by Eshan Roy
        </div>
      </div>
    </footer>
  );
}

export default Footer;