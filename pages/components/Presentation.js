import React from "react";
import image from "./../../IMG_20230117_120817228.jpg";
import Image from "next/image";
import Container from "./Container";

const Presentation = () => {
  return (
    <Container>
      <div class="flex flex-row items-center">
        <div class="grid grid-cols-2 gap-4 justify-center">
          <div>
            <p class="font-mono text-lg mb-4">Hola! Soy Agustina y soy</p>
            <h1 class="w-full font-inspiration text-7xl tracking-wide">
              Full stack developer
            </h1>
          </div>
        <div class="justify-center items-center">
          <Image
                class="rounded-full w-3/6 shadow-md shadow-cyan-950"
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
