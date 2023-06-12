import React from "react";
import image from "./../../Mi caricatura.png";
import Image from "next/image";
import Container from "./Container";
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from "next/link";

const Presentation = () => {
  return (
    <Container>
      <div className="pb-12 sm:grid sm:grid-cols-2 gap-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="font-mono text-lg mb-4">Hola! Mi nombre es</p>
          <h1 className="w-full text-center font-nunito text-6xl sm:text-6xl">
            AGUSTINA ZANETTI
          </h1>
          <p className="font-mono text-lg mt-4">
            y soy <strong>FULL STACK DEVELOPER</strong>
          </p>
          <Link
            className="hidden sm:inline-flex sm:w-fit items-center font-mono border text-sm transition-all duration-500 border-yellow-900 px-4 py-2 m-8 rounded-md hover:bg-yellow-900 hover:bg-opacity-10"
            href="/about"
          >
            Mas de mi <RiArrowDropRightLine className="ml-1" />
          </Link>
        </div>

        <div className="h-fit flex justify-center items-center">
          <Image
            className="h-72 w-72 rounded-full md:w-80 md:h-80 object-cover shadow-md shadow-amber-900"
            src={image}
            alt="This is me"
          />
        </div>
        <Link
          className="inline-flex items-center font-mono border border-yellow-900 px-4 py-2 m-8 rounded-md transition-all duration-500 sm:hidden hover:bg-yellow-900 hover:bg-opacity-10"
          href="/about"
        >
          Mas de mi <RiArrowDropRightLine className="ml-1" />
        </Link>
      </div>
    </Container>
  );
};

export default Presentation;
