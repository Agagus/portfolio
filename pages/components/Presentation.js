import React from "react";
import image from "./../../Mi caricatura.png";
import Image from "next/image";
import Container from "./Container";

const Presentation = () => {
  return (
    <Container>
      <div className="flex flex-row items-center mt-4 mb-4 sm:mt-0">
        <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-col justify-center items-center">
          <div>
            <p className="font-mono text-lg mb-4 text-center">
              Hola! Mi nombre es
            </p>
            <h1 className="w-full font-andika text-7xl sm:text-6xl text-center">
              AGUSTINA ZANETTI
            </h1>
            <p className="font-mono text-lg mt-4 text-center">
              y soy FULL STACK DEVELOPER
            </p>
          </div>

          <div className="h-fit justify-center items-center">
            <Image
              className="h-72 w-72 rounded-full xl:w-3/6 xl:h-5/6 md:w-52 md:h-52 object-cover shadow-md shadow-cyan-950"
              src={image}
              alt="This is me"
            />
          </div>
        </div>
      </div>

      {/* <div class="grid grid-cols-2 justify-center pl-8">
          <div>
            <p class="font-mono text-lg mb-4">Hola! Soy Agustina y soy</p>
            <h1 class="w-full font-inspiration text-7xl tracking-wide">
              Full stack developer
            </h1>
          </div>
        </div>
        <div class="justify-center items-center">
          <Image
            class="rounded-full w-3/6 shadow-md shadow-cyan-950"
            src={image}
            alt="This is me"
          />
        </div> */}
    </Container>
  );
};

export default Presentation;
