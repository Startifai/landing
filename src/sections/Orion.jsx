import React from 'react'
import star from '../assets/star.png' // Asegúrate de tener esta imagen en tu carpeta de assets

export const Orion = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-white px-20'>
        <div className='flex flex-row items-start justify-center gap-16 w-full max-w-screen-xl'>
            
            {/* Columna Izquierda */}
            <div className='flex flex-col w-1/2 gap-8'>
                <div className='flex items-center'>
                    <div className='text-left'>
                        <span className='text-5xl font-bold uppercase font-parkinsans tracking-wider block'>¿Cómo funciona</span>
                        <span className='text-5xl font-bold uppercase font-parkinsans tracking-wider block'>la atención en</span>
                        <span className='text-5xl font-bold uppercase font-parkinsans tracking-wider block'>Startifai?</span>
                    </div>
                    <img src={star} alt="Star" className='w-32 h-32 ml-4' />
                </div>
                <div className='flex flex-col gap-4 text-lg font-poppins text-gray-700'>
                    <p>Con Startifai no estás solo:</p>
                    <p className='text-[#f57b52] font-medium'>Nuestro asistente inteligente, Orion, está disponible para ayudarte las 24 horas.</p>
                    <p>Orion te guiará paso a paso para resolver cualquier duda sobre la plataforma, tus citas, tus configuraciones o tus clientes.</p>
                </div>
            </div>

            {/* Columna Derecha */}
            <div className='flex flex-col w-1/2 gap-8 items-start'>
                <button className='bg-white text-[#f57b52] text-sm font-light py-3 px-8 rounded-full border border-[#f57b52] self-end'>
                    Conocer a Orion
                </button>
                <div className='flex flex-col gap-6 text-lg font-poppins text-gray-700 leading-relaxed'>
                    <p>Y no te preocupes: si hay algo que Orion no puede resolver, él mismo nos lo hará saber y nuestro equipo humano te contactará para asistirte directamente.</p>
                    <p>Además, si preferís hablar con una persona desde el principio, simplemente indicáselo a Orion y te derivará de inmediato con alguien de nuestro equipo.</p>
                </div>
            </div>

        </div>
    </div>
  )
}
