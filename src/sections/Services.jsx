import React from 'react'

const servicesData = [
    {
        title: 'Sistema de atención',
        description: [
            'Automatizá la forma en que respondés consultas y agendás citas con un asistente inteligente disponible 24/7.',
            'Configurás una vez y el sistema se encarga de atender a tus clientes, responder preguntas frecuentes y organizar tu agenda, todo desde un solo lugar y sin complicaciones.'
        ]
    },
    {
        title: 'Sistema de citas',
        description: [
            'Gestioná tus turnos de forma automática con un sistema simple y personalizado. Tus clientes reservan según tu disponibilidad, reciben confirmaciones al instante y vos te olvidás del ida y vuelta para agendar.',
            'Ideal para profesionales y emprendedores.'
        ]
    },
    {
        title: 'Sistema con soporte',
        description: [
            'Nos encargamos de todo por vos: configuramos el sistema, personalizamos tus respuestas y dejamos tu canal de atención y citas listo para usar.',
            'Vos solo nos decís cómo trabajás, y nosotros lo hacemos realidad en minutos, sin complicaciones.'
        ]
    }
];

export const Services = () => {
    return (
        <div className='flex items-center flex-col h-screen w-full bg-[#FFFFFF] justify-center'>
            <div>
                <span className='text-5xl tracking-widest font-medium uppercase font-parkinsans max-w-[780px]'>Nuestros servicios</span>
            </div>
            <div className='flex items-center w-full px-20 justify-center mt-10'>
                <span className='text-lg tracking-widest font-normal uppercase font-parkinsans text-center leading-relaxed'>Actualmente brindamos tres servicios completos para que puedas mejorar tu atención, próximamente saldrán nuevos sistemas para que ademas de tener un buen servicios factures a otro nivel.</span>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-14 mt-10 px-20'>
                    {servicesData.map((service, index) => (
                        <div key={index} className='flex flex-col text-center bg-[#F7F7F7] p-7 rounded-lg shadow-lg'>
                            <span className='uppercase font-parkinsans tracking-widest font-normal text-xl'>{service.title}</span>
                            <div className='mt-6 text-gray-700 text-base leading-loose text-left'>
                                <p>{service.description[0]}</p>
                                <p className='mt-6'>{service.description[1]}</p>
                            </div>
                            <div className="flex-grow" /> {/* Spacer */}
                            <div className='mt-8'>
                                <button className='bg-white text-[#f57b52] text-sm font-semibold py-3 px-8 rounded-full border border-[#f57b52]'>Quiero saber más</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
