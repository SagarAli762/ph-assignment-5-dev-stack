const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-[24px] w-[24px] items-center justify-center rounded-md bg-gradient-to-tr from-[#EC4899] to-[#7C3AED] text-[9px] font-bold text-white md:h-[32px] md:w-[32px] md:text-[14px]">
              DS
            </div>

            <h2 className="text-[11px] font-bold text-slate-800 md:text-[20px]">
              Dev <span className="text-pink-500">Stack</span>
            </h2>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="navbar-end flex gap-2 md:gap-5">
          <a className="btn btn-sm rounded-full text-[9px] md:btn-md md:text-[14px]">
            Sign In
          </a>

          <a className="btn btn-sm rounded-full bg-gradient-to-tr from-[#EC4899] to-[#7C3AED] text-[9px] text-white hover:opacity-90 md:btn-md md:text-[14px]">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
