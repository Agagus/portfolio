import Image from "next/image";
import Head from "next/head";
import React from "react";
import image from "../public/JavaScript-logo.png";
import react from "../public/react-1-logo.png";
import html from "../public/HTML.png";
import css from "../public/CSS3_logo.svg.png";
import node from "../public/node-logo.png";
import express from "../public/expressjs-logo.png";
import postgres from "../public/postgresql-logo.png";
import next from "../public/nextjs-logo.png";
import { useState } from "react";
import Link from "next/link";
import Container from "./components/Container";
import { SlLocationPin } from "react-icons/sl";

const About = () => {
  const [skills, setSkills] = useState(false);

  return (
    <Container>
      <Head>
        <title>Agustina - Sobre mi</title>
      </Head>
      <div className="self-center pb-12">
        {/* <p className="font-mono text-5xl drop-shadow-[0px_2px_2px_rgb(123,72,47)] m-8">
          Te cuento un poco mas de mi
        </p> */}
        <div className="h-full grid grid-cols-1 justify-items-center items-center md:grid-cols-2 gap-8">
          <div className="flex flex-col self-start justify-center text-center p-2 w-11/12 shadow-xl shadow-[rgba(123,72,47,0.175)] drop-shadow-md rounded-lg">
            <p className="font-nunito">
              Soy una persona <strong>amante de la naturaleza</strong>, amable,
              entusiasta y 100% <strong>optimista</strong>, que disfruta del
              aprendizaje continuo y de las cosas simples de la vida.
            </p>
            <p className="font-nunito">
              Mi primer acercamiento al mundo tech fue durante la cursada de la
              carrera de licenciatura en biotecnología, donde aprendí la base de
              Python.
            </p>
            <p className="font-nunito">
              Fue en marzo de 2022 que decidí dedicarme de lleno a capacitarme
              en este enorme universo IT.
            </p>
            <p className="font-nunito">
              Finalmente en enero de 2023 (después de 4 arduos meses y mas de
              800 horas codeando) finalicé mi primer bootcamp en Soy Henry y hoy
              puedo decir que soy
            </p>
            <p>
              <strong className=" font-mono">desarolladora FULL STACK!</strong>
            </p>
            <p className="font-mono pt-8 flex flex-row gap-2 md:gap-4 justify-center">
              <SlLocationPin />
              Buenos Aires, ARGENTINA
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-sm">
            <p
              onClick={() => setSkills(!skills)}
              className="mb-5 font-mono text-xl text-center border border-yellow-900 px-4 py-2 m-8 rounded-md transition-all duration-500 hover:cursor-pointer hover:bg-yellow-900 hover:bg-opacity-10"
            >
              Mis tech-skills
            </p>
            <Link className="font-mono underline" href="/contact">
              Contactame
            </Link>

            {skills && (
              <>
                <div className="grid w-9/12 pt-4 grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 sm:w-full sm:gap-2 gap-8 transition-all">
                  <Image
                    src={image}
                    alt="Javascript"
                    className="hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={react}
                    alt="React"
                    className="hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={html}
                    alt="html"
                    className="hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={css}
                    alt="css"
                    className="hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={next}
                    alt="next"
                    className="hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={node}
                    alt="node"
                    className="self-center hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={postgres}
                    alt="postgres"
                    className="hover:animate-[spin_1s_ease-in]"
                  />
                  <Image
                    src={express}
                    alt="express"
                    className="self-center bg-white rounded-md opacity-30 hover:animate-[spin_1s_ease-in]"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
