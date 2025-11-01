import React from 'react';
import logo from '../assets/logo.svg'; // Asegúrate de tener el logo blanco aquí

const footerData = [
    {
        title: 'Empresa',
        links: ['Inicio', 'Nosotros', 'Como funciona', 'Para quien', 'Servicios', 'Comunidad', 'Soporte']
    },
    {
        title: 'Accesos',
        links: ['Documentación', 'Marketplace', 'Blog', 'Discord']
    },
    {
        title: 'Canales',
        links: ['LinkedIn', 'Instagram']
    }
];

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300 font-poppins py-20 px-28">
        <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
                <img src={logo} alt="Startifai Logo" className="h-9" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {footerData.map((column) => (
                    <div key={column.title}>
                        <h3 className="uppercase tracking-[0.2em] text-sm text-gray-500 font-semibold mb-6">
                            {column.title}
                        </h3>
                        <ul className="space-y-4">
                            {column.links.map((link) => (
                                <li key={link}>
                                    <a href="/home" className="hover:text-white transition-colors duration-300 text-base font-light">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}
