import Head from "next/head";
import React from "react";
import Container from "./components/Container";
import starWars from "../star-wars.png";
import Image from "next/image";

const projects = () => {
  return (
    <>
      <Head>
        <title>Agustina - Proyectos</title>
      </Head>
      <Container>
        <div className=" pb-16 md:p-12">
          <h3 className="text-center font-mono text-xl md:text-2xl">
            MIS PROYECTOS
          </h3>
          {/* (star-wars, pi, sole rubio, pf) */}
          <Image src={starWars} alt="Star-wars project" className=" py-2" />
          <Image src={starWars} alt="Star-wars project" className=" py-2" />
          <Image src={starWars} alt="Star-wars project" className=" py-2" />
        </div>
      </Container>
    </>
  );
};

export default projects;
