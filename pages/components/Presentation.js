import React from 'react'
import image from "./../../IMG_20230117_120817228.jpg"
import Image from 'next/image'

const Presentation = () => {
  return (
    <div class="p-4 sm:ml-64 grid grid-cols-1 sm:grid-cols-2">
    {/* <div class="flex justify-end w-screen h-auto items-center"> */}
        <div class="flex flex-col justify-center">
            <h1 class="font-inspiration text-9xl">Full stack</h1>
            <h2 class="font-mono text-5xl">developer</h2>
        </div>
        <div>
            <Image class="rounded-full" src={image} alt="This is me"/>
        </div>
    </div>
  )
}

export default Presentation