import React from 'react'
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] w-full flex-col-reverse items-center justify-center gap-10 bg-[#08192c] px-6 font-montserrat text-white md:flex-row md:justify-between md:px-20">
        <div className="flex w-full flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left">
            <p className="text-sm font-light uppercase tracking-[0.3em] text-gray-300">Hola, soy</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">Javier Villarreal</h1>
            <h2 className="text-lg font-light text-gray-300 sm:text-xl">Desarrollador Backend intentando ser Full-Stack</h2>
            <button className="mt-4 w-fit rounded-lg bg-[#B5742A] px-8 py-3 font-semibold text-white transition duration-200 ease-in-out hover:bg-[#A86625] hover:scale-105">Ver experiencia</button>
        </div> 

        <div className="flex w-full flex-col items-center gap-4 md:w-1/2 md:items-end">
            <div >
                <Image src="/profile-v2.PNG" alt="Profile Picture Javier Villarreal" width={420} height={420} className="w-64 rounded-2xl object-cover sm:w-80 md:w-[420px]" />
            </div>
        </div>
    </div>
  )
}
