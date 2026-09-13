//import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <div className="flex h-[24px] md:h-[32px] w-[24px] md:w-[32px] items-center justify-center rounded-md bg-gradient-to-tr from-[#EC4899] to-[#7C3AED] text-[9px] md:text-[14px] font-bold text-white">
            DS
          </div>

          <h2 className="text-[11px] md:text-[20px] font-bold text-slate-800">
            Dev <span className="text-pink-500">Stack</span>
          </h2>
        </div>
      </div>
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
      <div className="navbar-end flex gap-5">
        <a className="btn btn-sm md:btn rounded-full text-[9px] md:text-[14px]">
          Sign In
        </a>
        <a className="btn btn-sm md:btn btn-secondary rounded-full text-[9px] md:text-[14px]">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
