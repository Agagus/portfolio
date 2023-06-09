import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <>
      <div className="w-full top-0 left-0 flex flex-col md:flex-row md:fixed justify-between">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setNavState(!navState)}
            className="inline-flex items-center self-center w-12 h-14 p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:border "
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <Link
            href="/"
            onClick={() => setNavState(false)}
            className="flex flex-col text-4xl w-32 font-inspiration md:w-44 md:pr-8 md:pt-6 md:flex"
          >
            <span className="p-2 pb-0 self-center">A</span>
            <span className="ml-9 p-2 pt-0 pr-6 self-center text-4xl border-solid border-2 border-b-current border-r-orange-950 border-t-0 border-l-0">
              Z
            </span>
          </Link>
        </div>
        {navState ? (
          <div className=" md:hidden items-center border-b border-opacity-10 border-b-amber-800">
            <ul className="flex flex-col items-center font-mono uppercase">
              <Link
                href="/"
                onClick={() => setNavState(!navState)}
                className="p-4"
              >
                Inicio
              </Link>
              <Link
                href="/about"
                onClick={() => setNavState(!navState)}
                className="p-4"
              >
                Sobre mi
              </Link>
              <Link
                href="/contact"
                onClick={() => setNavState(!navState)}
                className="p-4"
              >
                Contacto
              </Link>
              <Link
                href="/projects"
                onClick={() => setNavState(!navState)}
                className="p-4"
              >
                Mis proyectos
              </Link>
            </ul>
          </div>
        ) : (
          <div className="hidden md:w-full md:pt-6 md:flex md:justify-end">
            <ul className="flex flex-row justify-evenly items-center font-mono w-2/3">
              <Link
                href="/"
                className={
                  asPath === "/"
                    ? "border border-t-0 border-x-0 border-b-red-950"
                    : "hover:border hover:border-t-0 hover:border-x-0 hover:border-b-red-950 hover:border-opacity-80"
                }
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className={
                  asPath === "/about"
                    ? "border border-t-0 border-x-0 border-b-red-950"
                    : "hover:border hover:border-t-0 hover:border-x-0 hover:border-b-red-950 hover:border-opacity-80"
                }
              >
                Sobre mi
              </Link>
              <Link
                href="/contact"
                className={
                  asPath === "/contact"
                    ? "border border-t-0 border-x-0 border-b-red-950"
                    : "hover:border hover:border-t-0 hover:border-x-0 hover:border-b-red-950 hover:border-opacity-80"
                }
              >
                Contacto
              </Link>
              <Link
                href="/projects"
                className={
                  asPath === "/projects"
                    ? "border border-t-0 border-x-0 border-b-red-950"
                    : "hover:border hover:border-t-0 hover:border-x-0 hover:border-b-red-950 hover:border-opacity-80"
                }
              >
                Mis proyectos
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
