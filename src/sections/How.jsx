import React from 'react'
import human from '../assets/human.png'

export const How = () => {
  return (
    <div className='h-screen flex flex-row w-full items-center justify-center bg-gray-100'>
        <div className='flex flex-row w-full max-w-screen-lg gap-5'>
        <div className='flex flex-col w-1/2'>
        <span className='text-5xl font-bold uppercase font-parkinsans tracking-widest bg-gradient-to-r from-[#FF6A00] to-[#994000] text-transparent bg-clip-text'>ASÍ DE SIMPLE ES EMPEZAR</span>
        <ul className='list-disc list-inside text-left mt-8 tracking-wide font-poppins font-light gap-3 flex flex-col'>
            <li>Registrate con los datos de tu negocio.</li>
            <li>Conectá tu WhatsApp o Instagram.</li>
            <li>Activá tu chatbot personalizado.</li>
            <li>Empezá a recibir consultas y agendar citas automáticamente.</li>
        </ul>
        <button className='mt-10 bg-white text-[#f57b52] text-sm font-light w-1/2 rounded-full border border-[2px] h-12 border-[#f57b52] shadow-glow-white drop-shadow-lg ml-4'>Ver como funciona</button>
        </div>
        <div className='relative w-1/2 flex flex-col items-center justify-center'>
            <img src={human} alt="Human" className='w-full  rounded-[40px]' />

        </div>
        </div>
    </div>
  )
}
