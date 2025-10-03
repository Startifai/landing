import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.svg';
import fondo from '../assets/paralax.png';

export const Paralax = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Transformación para el efecto parallax del fondo
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Transformación para la altura del blur que sube gradualmente
  const blurHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
        ref={ref}
        className='relative flex flex-col items-center justify-center h-screen text-white overflow-hidden'
    >
        {/* Logo que permanece visible */}
        <motion.img 
            src={logo} 
            alt="Logo" 
            className="w-3/4 max-w-2xl z-20"
        />

        {/* Imagen de fondo con parallax */}
        <motion.div 
            className='absolute inset-0 z-0 bg-cover bg-center'
            style={{ 
                backgroundImage: `url(${fondo})`,
                y: yBg
            }}
        />

        {/* Capa de desenfoque que sube gradualmente */}
        <motion.div 
            className='absolute bottom-0 left-0 right-0 z-10 backdrop-blur-lg'
            style={{ 
                height: blurHeight,
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.55), transparent)'
            }}
        />
    </div>
  )
}
