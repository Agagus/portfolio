import Head from "next/head";
import React from "react";
import Container from "./components/Container";
import starWars from "../star-wars.png";
import countries from "../pi-countries.png";
import soleRubio from "../Soledad.png";
import Image from "next/image";
import Link from "next/link";
//https://challenge-front-alpha.vercel.app/
const projects = () => {
  return (
    <>
      <Head>
        <title>Agustina - Proyectos</title>
      </Head>
      <Container>
        <div className=" pb-16 md:p-12 flex flex-col md:justify-center items-center">
          <h3 className="text-center font-mono text-xl md:hidden">
            MIS PROYECTOS
          </h3>
          <div className="sm:grid sm:grid-cols-2 md:gap-8 gap-4 max-w-4xl">
            {/* (star-wars, pi, sole rubio, pf) */}
            <Link href="https://solerubio.com.ar/" target="_blank">
              <Image
                src={soleRubio}
                alt="Sole Rubio project"
                className="py-2 sm:py-0 transition-all duration-500 hover:scale-105 hover:cursor-pointer"
              />
              <p className="text-center text-sm pb-2 sm:pt-2">Web Sole Rubio</p>
            </Link>
            <Link href="https://pi-vzqn.vercel.app/" target="_blank">
              <Image
                src={countries}
                alt="Countries project"
                className="py-2 sm:py-0 transition-all duration-500 hover:scale-105 hover:cursor-pointer"
              />
              <p className="text-center text-sm pb-2 sm:pt-2">App países</p>
            </Link>
            {/* <Link
              href="https://challenge-front-alpha.vercel.app/"
              target="_blank"
            >
              <Image
                src={starWars}
                alt="Star-wars project"
                className="py-2 sm:py-0 transition-all duration-500 hover:scale-105 hover:cursor-pointer"
              />
              <p className="text-center text-sm pb-2 sm:pt-2">
                Start-wars battle app
              </p>
            </Link> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default projects;
