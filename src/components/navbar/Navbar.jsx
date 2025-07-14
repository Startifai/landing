import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';

export const Navbar = () => {
    const [pixelsRow1, setPixelsRow1] = useState([]);
    const [pixelsRow2, setPixelsRow2] = useState([]);

    useEffect(() => {
        const updatePixels = () => {
            const pixelSize = 18;
            const screenWidth = window.innerWidth;
            const pixelCount = Math.floor(screenWidth / pixelSize);
            
            const newPixels1 = new Array(pixelCount).fill(false);
            const newPixels2 = new Array(pixelCount).fill(false);

            // Generar patrón para la primera fila (blanca)
            for (let i = 0; i < pixelCount; i++) {
                if (Math.random() < 0.17) {
                    newPixels1[i] = true;
                    i++; 
                }
            }
            
            // Generar patrón para la segunda fila (gris)
            for (let i = 0; i < pixelCount; i++) {
                if (Math.random() < 0.17) {
                    newPixels2[i] = true;
                    i++;
                }
            }

            setPixelsRow1(newPixels1);
            setPixelsRow2(newPixels2);
        };

        updatePixels();
        window.addEventListener('resize', updatePixels);

        return () => window.removeEventListener('resize', updatePixels);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="bg-navbar-gray">
                <div className="flex items-center p-4">
                    <div className="px-16">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <div className="bg-[#606063] rounded-full flex items-center flex-center">
                            <a
                                href="#nosotros"
                                className="text-white text-sm font-light py-2 px-12 rounded-full border border-[2px] border-white shadow-glow-white"
                            >
                                Nosotros
                            </a>
                            <a
                                href="#universo-ia"
                                className="text-gray-300 text-sm font-light py-2 px-14"
                            >
                                Universo IA
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fila 1: Píxeles blancos (agujeros) */}
                <div className="flex w-full" style={{ height: '18px' }}>
                    {pixelsRow1.map((isVisible, index) => (
                        <div
                            key={index}
                            className={isVisible ? 'bg-white' : 'bg-transparent'}
                            style={{ width: '18px', height: '18px' }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Fila 2: Píxeles grises (goteo) */}
            <div className="flex w-full bg-transparent" style={{ height: '18px' }}>
                {pixelsRow2.map((isVisible, index) => (
                    <div
                        key={index}
                        className={isVisible ? 'bg-navbar-gray' : 'bg-transparent'}
                        style={{ width: '18px', height: '18px' }}
                    ></div>
                ))}
            </div>
        </nav>
    );
};
