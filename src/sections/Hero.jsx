import React from 'react'
import robot from '../assets/robot.svg';
import {motion} from "framer-motion"



export const Hero = () => {
    const slidingVariants ={
  initial:{
    x:300,
  },
  animate:{
    x:"-100%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration: 40

    }
  },
};
    return (
        <div className="h-screen flex items-center justify-center bg-cover drop-shadow mt-[150px]">
            <div className='flex flex-row items-center justify-between w-full '>
                <motion.div className="slidingTextContainer" variants={slidingVariants} initial="initial" animate="animate">
                    Startifi
                </motion.div>
                <div className="text-center flex flex-col items-center justify-center px-16">
                    <h1 className="text-5xl font-bold uppercase bg-gradient-to-r from-[#000000] via-[#FF6A00] to-[#000005] text-transparent bg-clip-text">Automatizá tu atención</h1>
                    <h1 className="text-5xl font-bold uppercase bg-gradient-to-r from-[#000000] via-[#FF6A00] to-[#000005] text-transparent bg-clip-text"> con IA, en minutos.</h1>
                    <h4 className="text-black text-2xl mt-4 tracking-widest font-roboto-mono font-[300] leading-[42px]">Convertí más consultas en citas</h4>
                    <h4 className="text-black text-2xl mb-6 tracking-widest font-roboto-mono font-[300] leading-[42px]">sin escribir un solo mensaje.</h4>
                    <div>
                        <button className='bg-[#f57b52] text-white text-sm font-light py-2 px-12 rounded-full border border-[2px] h-12 border-white shadow-glow-white drop-shadow-lg'>
                            ¡Empeza gratis ahora!
                        </button>
                        <button className='bg-white text-[#f57b52] text-sm font-light py-2 px-14 rounded-full border border-[2px] h-12 border-[#f57b52] shadow-glow-white drop-shadow-lg ml-4'>
                            Ver como funciona
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-end">
                    <img src={robot} alt="Hero" className="h-screen" />
                </div>
            </div>

        </div>
    )
}
