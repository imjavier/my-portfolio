import React from 'react'
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div>
        <div>
            <p>Hola, soy</p>
            <h1>Javier Villarreal</h1>
            <h2>Desarrollador Backend intentando ser Full-Stack</h2>
            <button>Iniciar</button>
        </div>

        <div>
            <div>
                Image
                <Image src="/profile.PNG" alt="Profile Picture" width={200} height={200} />
            </div>
            <p>Alto, inteligente y apuesto</p>
        </div>
    </div>
  )
}
