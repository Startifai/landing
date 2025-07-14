import React from 'react'
import pixelBottom from '../assets/pixel-bottom.svg'
import pixelTop1 from '../assets/pixel-top1.svg'
import pixelTop2 from '../assets/pixel-top2.svg'

export const Comunity = () => {

    return (
        <div className='flex items-center flex-row h-screen bg-[#F7F7F7]'>
            <div className='flex flex-col w-1/2 items-center justify-center gap-10 px-20'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <span>Nuestra comunidad</span>
                    <span>Sumate a nuestro servidor de Discord dónde subimos contenido diariamente y podes charlar con otros emprendedores sobre sus experiencias. </span>

                </div>
                <div>
                    <img src={pixelBottom} alt="Pixel Bottom" className='w-full' />

                </div>

            </div>
            <div className='flex flex-col w-1/2 items-center justify-center gap-10 px-20'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <img src={pixelTop1} alt="Pixel Top 1" className='w-full' />
                    <img src={pixelTop2} alt="Pixel Top 2" className='w-full' />

                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <span>¡Sumate a nuestra comunidad!</span>
                    <button className='bg-white text-[#f57b52] text-sm font-semibold py-3 px-8 rounded-full border border-[#f57b52]'>Quiero saber más</button>


                </div>

            </div>
        </div>
    )
}
