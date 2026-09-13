import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-6 py-10 md:px-12 md:py-12">
        {/*  MAIN FOOTER  */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          {/*  BRAND  */}
          <div className="text-center md:col-span-5 md:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div
                className="flex h-[24px] w-[24px] items-center justify-center
               rounded-md bg-gradient-to-tr from-[#EC4899] to-[#7C3AED] 
              text-[12px] font-bold text-white"
              >
                DS
              </div>

              <h2 className="text-[18px] font-bold text-slate-800">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-[280px] text-[9px] md:text-[12px] leading-4 text-slate-400 md:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center justify-center gap-4 text-[9px] md:text-[12px] font-semibold text-slate-500 md:justify-start">
              <a
                href="#"
                className="flex items-center gap-1.5 transition hover:text-slate-800"
              >
                <FaGithub size={10} />
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-1.5 transition hover:text-slate-800"
              >
                <FaTwitter size={10} />
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-1.5 transition hover:text-slate-800"
              >
                <FaLinkedinIn size={10} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* PRODUCT  */}
          <div className="hidden md:col-span-2 md:block text-[9px] md:text-[12px]">
            <h3 className="mb-3 text-[9px] md:text-[12px] font-bold uppercase text-slate-800">
              Product
            </h3>

            <ul className="space-y-2   text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/*  COMPANY */}
          <div className="hidden md:col-span-2 text-[9px] md:text-[12px] md:block">
            <h3 className="mb-3  font-bold uppercase text-slate-800">
              Company
            </h3>

            <ul className="space-y-2  text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/*  LEGAL */}
          <div className="hidden md:col-span-3 text-[9px] md:text-[12px] md:block">
            <h3 className="mb-3  font-bold uppercase text-slate-800">Legal</h3>

            <ul className="space-y-2  text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-700">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-700">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*  DIVIDER  */}
        <div className="mt-8 border-t border-slate-100 pt-5">
          {/* Bottom Footer */}
          <div className="flex flex-col items-center gap-3 text-[9px] md:text-[12px] text-slate-400 md:flex-row md:justify-between">
            {/* Copyright */}
            <p>© 2026 Dev Stack. All rights reserved.</p>

            {/* Legal Links */}
            <div className="flex gap-5 text-[9px] md:text-[12px]">
              <a href="#" className="transition hover:text-slate-700">
                Privacy
              </a>

              <a href="#" className="transition hover:text-slate-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
