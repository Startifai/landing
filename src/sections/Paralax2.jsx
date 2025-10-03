import React from 'react'
import face from '../assets/face.png' // Asegúrate de tener esta imagen en tu carpeta de assets


export const Paralax2 = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute inset-0'>
        <img src={face} alt="Face" className='object-cover w-full h-full' />
      </div>
    </div>
  )
}
