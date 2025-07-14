import React from 'react'
import conect from '../assets/conect.png'

export const Activate = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-[#FFFFFF]'>
            <div className='flex flex-row items-center justify-center gap-10'>
                <div className='flex flex-col w-1/2  items-center justify-center'>
                    <img src={conect} alt="Conect" />

                </div>
                <div className='flex flex-col w-1/2 mx-4 p-5 gap-10'>
                    <span className='text-5xl leading-relaxed font-bold uppercase font-parkinsans tracking-widest bg-gradient-to-r from-[#FF6A00] to-[#994000] text-transparent bg-clip-text'>¿A cual servicio <br />te conectas?</span>
                    <button className='font-semibold tracking-wider bg-[#f57b52] text-white text-sm font-light py-2 px-12 rounded-full w-2/4 border border-[2px] h-12 border-white shadow-glow-white drop-shadow-lg'>
                        Activa tu primer flow
                    </button>
                </div>
            </div>
        </div>
    )
}
