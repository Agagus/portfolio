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
import Container from "./components/Container";

const About = () => {
  return (
    <>
      <Head>
        <title>Agustina - Sobre mi</title>
      </Head>
      <Container>
        <p className="font-inspiration text-7xl m-8">
          Te cuento un poco mas de mi
        </p>
        <div className="p-4 sm: grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-around">
            <p className="font-andika">
              Mi primer acercamiento al mundo tech fue durante la cursada de la
              carrera de licenciatura en biotecnología, donde aprendí la base de
              Python
            </p>
            <p className="font-andika">
              Fue en marzo de 2022 que decidí dedicarme de lleno a capacitarme
              en este enorme universo IT
            </p>
            <p className="font-andika">
              Finalmente en enero de 2023 (después de 4 arduos meses y mas de
              800 horas codeando) finalicé mi primer bootcamp en Soy Henry y hoy
              puedo decir que soy desarolladora FULL STACK
            </p>
            <p className="font-andika">
              Soy una persona amante de la naturaleza, amable, con actitud
              positiva, que disfruta del aprendizaje continuo y de las cosas
              simples de la vida.
            </p>
          </div>
          <div>
            <p className="mb-5 font-mono text-xl">Mis tech-skills</p>
            <div className="grid w-fit h-fit grid-cols-4 grid-rows-2 gap-2 ">
              {/* JavaScript, Next, ReactJs, HTML, CSS, NodeJs, Express, PostgreSQL */}
              <Image
                src={image}
                alt="Javascript"
                className="hover:rotate-[360deg] duration-300"
              />
              <Image
                src={react}
                alt="React"
                className="hover:rotate-[360deg] duration-300"
              />
              <Image
                src={html}
                alt="html"
                className="hover:rotate-[360deg] duration-300"
              />
              <Image
                src={css}
                alt="css"
                className="hover:rotate-[360deg] duration-300"
              />
              <Image
                src={next}
                alt="next"
                className="hover:rotate-[360deg] duration-300"
              />
              <Image
                src={node}
                alt="node"
                className="self-center hover:opacity-90"
              />
              <Image
                src={postgres}
                alt="postgres"
                className="hover:rotate-[360deg] duration-300"
              />
              <Image
                src={express}
                alt="express"
                className="self-center bg-white rounded-md opacity-30 hover:opacity-40"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
