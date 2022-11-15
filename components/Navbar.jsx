import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <div className="absolute w-full px-5 lg:px-10 py-7">
        <div className="flex items-center relative">
          <div className="mr-16">
            <img src="images/logo.svg" altc="logo" />
          </div>
          <button className="ml-auto" onClick={() => setMenu(!menu)}>
            <img src="/images/icon-menu.svg" />
          </button>
          <div
            className={`fixed z-2 w-full h-full top-0 left-0 bg-black/50 transition-all duration-300 ${
              menu ? "block" : "hidden"
            }`}
          ></div>
          <div
            className={`py-24 px-5 fixed z-3 bg-white w-4/6 h-full top-0 transition-all duration-300 ${
              menu ? "right-0" : "-right-full"
            }`}
          >
            <button
              className="absolute top-7 right-5"
              onClick={() => setMenu(!menu)}
            >
              <img src="/images/icon-close-menu.svg" />
            </button>
            <ul className="space-y-5 font-bold items-center lg:space-x-5 text-secondary lg:flex">
              <li>Features</li>
              <li>Company</li>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div className="lg:ml-auto text-sm text-secondary text-center font-bold">
              <Link href="#" className="block py-5 lg:inline-block lg:mr-10">
                Login
              </Link>
              <Link
                href="#"
                className="block rounded-xl lg:inline-block py-3 px-6 border-2 border-secondary lg:rounded-lg"
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
