import React from 'react'
import logo from '../assets/logo-black.svg';
import arrow from '../assets/arrow.png';

export const Why = () => {
  return (
    // Añadimos 'relative' para que las flechas se posicionen respecto a este contenedor
    <div className='relative flex flex-col items-center justify-center h-screen bg-[#F7F7F7] overflow-hidden'>
       
        {/* Flechas decorativas posicionadas absolutamente */}
        <img src={arrow} alt="arrow" className="absolute w-40 top-[180px] left-[calc(50%-40px)] transform -translate-x-1/2 rotate-[70deg] opacity-75" />
        <img src={arrow} alt="arrow" className="absolute w-52 bottom-16 left-[-60px] transform -rotate-[50deg] scale-x-[-1] opacity-75" />
        <img src={arrow} alt="arrow" className="absolute w-52 top-16 right-24 transform rotate-[180deg] scale-y-[-1] scale-x-[-1] opacity-75" />

       {/* Contenedor principal del contenido con z-index para estar por encima de las flechas */}
       <div className='flex flex-row items-start justify-center gap-24 text-center px-8 z-10'>
        <div className='flex flex-col items-start gap-2'>
            <span className='font-parkinsans text-4xl'>¡Hola! somos</span>
            <img src={logo} alt="Logo" className="w-[480px]" />
            <span className='font-parkinsans text-xl text-gray-500 uppercase max-w-md text-left'>“Somos especialistas en estrategias y automatizaciones para empresas”</span>
        </div>
        <div className='flex flex-col items-start justify-center gap-4 pt-2'>
            <span className='font-parkinsans tracking-widest text-2xl text-[#FF6A00]'>¿Por qué usar Startifai?</span>
            <ul className='list-disc list-inside text-left tracking-wide font-poppins font-light gap-3 flex flex-col'>
                <li>Responde consultas automáticamente 24/7.</li>
                <li>Agenda citas sin complicaciones.</li>
                <li>Sin conocimientos técnicos.</li>
                <li>Personalizá tu asistente sin dependencias.</li>
                <li>Ideal para emprendedores y PYMES.</li>
            </ul>
        </div>
        </div>
    </div>
  )
}
