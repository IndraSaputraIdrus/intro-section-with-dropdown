import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "../data/navLinks";
import DropdownItem from "./DropdownItem";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <div className="absolute w-full px-5 lg:px-10 py-7">
        {" "}
        <div className="flex items-center relative">
          <div className="mr-16">
            <img src="images/logo.svg" altc="logo" />
          </div>
          <button className="ml-auto lg:hidden" onClick={() => setMenu(!menu)}>
            <img src="/images/icon-menu.svg" />
          </button>
          <div
            className={`lg:hidden fixed z-2 w-full h-full top-0 left-0 bg-black/50 transition-all duration-300 ${
              menu ? "block" : "hidden"
            }`}
          ></div>
          <div
            className={`lg:static lg:flex lg:w-full py-24 lg:p-0 px-5 fixed z-3 bg-white w-4/6 h-full lg:h-auto top-0 transition-all duration-300 ${
              menu ? "right-0" : "-right-full"
            }`}
          >
            <button
              className="absolute top-7 right-5 lg:hidden"
              onClick={() => setMenu(!menu)}
            >
              <img src="/images/icon-close-menu.svg" />
            </button>

            <ul className="space-y-5 font-bold items-center lg:space-x-7 lg:space-y-0 text-secondary lg:flex">
              {navLinks.map((link) => (
                <NavLink key={link.id} {...link}>
                  <ul className="px-5 my-8 space-y-5">
                    {link.dropdown &&
                      link.dropdown.map((item) => (
                        <li
                          key={item.text}
                          className="flex items-center justify-start text-sm"
                        >
                          <DropdownItem {...item} />
                        </li>
                      ))}
                  </ul>
                </NavLink>
              ))}
            </ul>

            <div className="lg:ml-auto text-sm text-secondary text-center lg:text-start font-bold">
              <Link
                href="#"
                className="block py-5 lg:inline-block lg:mr-10 hover:text-slate-900"
              >
                Login
              </Link>
              <Link
                href="#"
                className="block rounded-xl lg:inline-block py-3 px-6 border-2 border-secondary hover:text-slate-900 hover:border-slate-900"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
