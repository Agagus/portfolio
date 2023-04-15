import React from 'react'
import image from "./../../IMG_20230117_120817228.jpg"
import Image from 'next/image'

const Presentation = () => {
  return (
    <div class="p-4 sm:ml-64 grid grid-cols-1 sm:grid-cols-2 h-screen justify-center">
    {/* <div class="flex justify-end w-screen h-auto items-center"> */}
        <div class="flex flex-col justify-center pl-8">
            <p class="font-mono text-lg mb-4">Hola! Soy Agustina y soy</p>
            <h1 class="w-full font-inspiration text-7xl drop-shadow-xl tracking-wide">Full stack developer</h1>
            {/* <h2 class="font-mono text-5xl">developer</h2> */}
        </div>
        <div class="flex justify-center items-center">
            <Image class="rounded-full w-3/6 shadow-md shadow-cyan-950" src={image} alt="This is me"/>
        </div>
    </div>
  )
}

export default Presentation