import { FaTshirt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8">

        <nav className="h-20 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
              <FaTshirt size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                ThreadCounty
              </h1>

              <p className="text-sm text-slate-500">
                AI Fabric Analysis Platform
              </p>
            </div>

          </div>

          {/* Navigation */}

          <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-semibold"
          : "hover:text-blue-600 transition"
      }
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/upload"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-semibold"
          : "hover:text-blue-600 transition"
      }
    >
      Upload
    </NavLink>
  </li>

  <li>
    <NavLink to="/history">
  History
</NavLink>
  </li>

  <li>
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-semibold"
          : "hover:text-blue-600 transition"
      }
    >
      Dashboard
    </NavLink>
  </li>

</ul>

          {/* Button */}

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
            Get Started
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;