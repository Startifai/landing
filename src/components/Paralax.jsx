import React from 'react'
import logo from '../assets/logo.svg';
import fondo from '../assets/paralax.png';

export const Paralax = () => {
  return (
    <div 
        className='flex flex-col items-center justify-center h-screen bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${fondo})` }}
    >
        <img src={logo} alt="Logo" className="w-2/4 mx-auto mt-10 mb-5 animate-bounce" />
    </div>
  )
}
