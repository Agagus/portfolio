import React from "react";
import Head from "next/head";
import Container from "./components/Container";
import Form from "./components/Form";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const ContactMe = () => {
  return (
    <Container>
      <Head>
        <title>Agustina - Contáctame</title>
      </Head>
      <div className="p-4 justify-center grid md:grid-cols-2">
        <div className="flex flex-col justify-center font-nunito p-8 text-md md:text-base">
          <h4 className=" font-mono">
            Si querés conocerme y agendar una entrevista podes completar el
            siguiente formulario y cuánto antes me comunico con vos.
          </h4>
          <h4 className="font-mono">
            También podes comunicarte a través de mis redes.
          </h4>
          {/* <h5>Tambien te dejo mis redes</h5> */}
          <div className="flex flex-col items-center mt-8 font">
            <Link
              href="https://github.com/Agagus"
              target="_blank"
              className=" w-fit flex flex-row gap-4 items-center"
            >
              <VscGithubAlt /> /Agagus
            </Link>
            <Link
              href="https://wa.link/w9i7cb"
              target="_blank"
              className=" w-fit flex flex-row gap-4 items-center"
            >
              <AiOutlineWhatsApp /> +54 9 1121838240
            </Link>
            <Link
              href="mailto:agus.zanett@gmail.com"
              target="_blank"
              className=" w-fit flex flex-row gap-4 items-center"
            >
              <FiMail /> agus.zanetti4@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/agustina-zanetti-4b7a67204/"
              target="_blank"
              className=" w-fit flex flex-row gap-4 items-center"
            >
              <AiFillLinkedin />
              Agustina Zanetti
            </Link>
          </div>
        </div>
        <Form />
      </div>
    </Container>
  );
};

export default ContactMe;
