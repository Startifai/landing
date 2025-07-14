import React from 'react'
import controler from '../assets/controler.png'

export const Problems = () => {
    return (
        <div className='flex items-center flex-col h-screen bg-[#F7F7F7]'>
            <span className='text-white text-[100px] font-parkinsans font-[900]'>No sabias que lo necesitabas</span>
            <div className='flex flex-row items-center justify-center  mt-20 '>
                
                <div className='flex items-center justify-center w-2/5'>
                    <img src={controler} alt="Controler" className='w-full max-w-xs ml-5' />
                </div>
                <div className='flex flex-col justify-center w-3/5'>
                    <span className='text-5xl font-bold uppercase font-parkinsans max-w-[780px] tracking-widest bg-gradient-to-r from-[#FF6A00] to-[#994000] text-transparent bg-clip-text'>¿Tenés problemas para responder a tus clientes?</span>
                    <div className='flex flex-row justify-center mt-10 gap-3 tracking-widest text-[15px]'>
                        <span className=' bg-[#FF6A00] px-4 py-2 mx-3 w-full text-center rounded-full text-white font-parkinsans font-[200] '>Emprendedores</span>
                        <span className=' bg-[#FF6A00] px-4 py-2 mx-3 w-full text-center rounded-full text-white font-parkinsans font-[200]'>PYMES</span>
                        <span className=' bg-[#FF6A00] px-4 py-2 mx-3 w-full text-center rounded-full text-white font-parkinsans font-[200]'>Empresas</span>
                    </div>
                    <span className='text-[15px] font-parkinsans tracking-widest mt-10'>Si tu éxito tiene el costo de sacarte tiempo valioso </span>
                    <span className='text-[15px] font-parkinsans tracking-widest'>para hacer crecer tu negocio.</span>
                    <span className='text-[15px] font-parkinsans tracking-widest mt-10'>Lleva el control vos, <span className='text-[#FF6A00]'>probá nuestro producto gratis por un mes.</span></span>
                </div>
            </div>
        </div>
    )
}
