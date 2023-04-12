import Image from 'next/image'
import React from 'react'
import image from "../public/JavaScript-logo.png"
import react from "../public/react-1-logo.png"
import html from "../public/HTML.png"
import css from "../public/CSS3_logo.svg.png"
import node from "../public/node-logo.png"
import express from "../public/expressjs-logo.png"
import postgres from "../public/postgresql-logo.png"
import next from "../public/nextjs-logo.png"

const About = () => {
  return (
    <div class="p-4 sm:ml-64 grid grid-colst-1 ">
        <p class="font-inspiration text-7xl m-8">Te cuento un poco mas de mi</p>
        <div class="p-4 sm: grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p class="font-andika">Mi primer acercamiento al mundo tech fue durante la cursada de la carrera de licenciatura en biotecnología, donde aprendí la base de Python</p>
              <p class="font-andika">Fue en marzo de 2022 que decidí dedicarme de lleno a capacitarme en este enorme universo IT</p>
              <p class="font-andika">Finalmente en enero de 2023 finalicé mi primer bootcamp en Soy Henry y hoy puedo decir que soy desarolladora FULL STACK</p>
            </div>
            <div>
              <p class="mb-5 font-mono text-xl">Mis tech-skills</p>
              <div class="grid w-fit h-fit grid-cols-4 grid-rows-2 gap-2 ">
                {/* JavaScript, Next, ReactJs, HTML, CSS, NodeJs, Express, PostgreSQL */}
                <Image src={image} alt="Javascript"
                />
                <Image src={react} alt="React"
                />
                <Image src={html} alt="html"
                />
                <Image src={css} alt="css"
                />
                <Image src={next} alt="next"
                />
                <Image src={node} alt="node" class="self-center"
                />
                <Image src={express} alt="express"
                class="self-center"
                />
                <Image src={postgres} alt="postgres"
                />
              </div>
            </div>

        </div>
    </div>
  )
}

export default About