import Link from "next/link";
import React from "react";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";

const SideBar = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
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

      <div className="w-full pr-8 pt-6 flex justify-between">
        <Link href="/" className="flex flex-col text-4xl w-48 font-inspiration">
          <span className="p-2 pb-0 self-center">A</span>
          <span className="ml-9 p-2 pt-0 pr-6 self-center text-4xl border-solid border-2 border-b-current border-r-gray-900 border-t-0 border-l-0">
            Z
          </span>
        </Link>

        <ul className="flex flex-row justify-end font-mono">
          <li className="p-4">Sobre mi</li>
          <li className="p-4">Contacto</li>
          <li className="p-4">Mis proyectos</li>
        </ul>
      </div>

      {/* <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 opacity-30 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex flex-col text-5xl items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3 p-2 self-start font-inspiration">
                  Agustina
                </span>
                <span className="ml-3 p-2 pr-6 font-inspiration border-solid border-2 border-b-current border-r-current border-t-0 border-l-0">
                  Zanetti
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="flex items-center mt-16 p-2 font-mono text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Sobre mi</span>
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="flex items-center p-2 font-mono text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Contáctame</span>
              </Link>
            </li>
            <li>
              <Link
                href="projects"
                className="flex items-center p-2 font-mono text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Mis proyectos</span>
              </Link>
            </li>
            <li>
              <a
                href="https://wa.link/w9i7cb"
                target="_blank"
                className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Agagus"
                target="_blank"
                className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
              >
                <VscGithubAlt />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/agustina-zanetti-4b7a67204/"
                target="_blank"
                className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </aside> */}
    </div>
  );
};

export default SideBar;
