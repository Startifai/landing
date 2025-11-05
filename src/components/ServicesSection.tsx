import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  initialRotate: number;
  initialX: number;
  initialY: number;
}

function ServiceCard({ number, title, description, initialRotate, initialX, initialY }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [initialRotate, 0, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [initialX, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [initialY, 0, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotate, x, y }}
      className="bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.08)] min-h-[400px] flex flex-col"
    >
      <div className="mb-6">
        <span className="text-6xl font-['Roboto_Mono',_sans-serif]">{number}</span>
      </div>
      
      <h3 className="text-2xl mb-4 font-['Roboto_Mono',_sans-serif]">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed font-['Roboto_Mono',_sans-serif] text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export function ServicesSection() {
  const services = [
    {
      number: "1",
      title: "Sistema de Atención",
      description: "Automatizá tus conversaciones y atendé consultas en tiempo real con un asistente inteligente disponible 24/7. Responde preguntas frecuentes, envía información clave y deriva consultas sin que tengas que estar conectado.",
      initialRotate: -8,
      initialX: -100,
      initialY: 50
    },
    {
      number: "2",
      title: "Sistema de Citas",
      description: "Olvidate de coordinar turnos manualmente. Con este sistema, tus clientes reservan según tu disponibilidad, reciben recordatorios automáticos y vos mantenés tu agenda organizada sin esfuerzo.",
      initialRotate: 6,
      initialX: 50,
      initialY: -30
    },
    {
      number: "3",
      title: "Sistema con Soporte",
      description: "No tenés que configurar nada: lo hacemos todo por vos. Personalizamos los mensajes, automatizamos tu flujo de atención y dejamos el sistema funcionando según tu negocio. Simple, rápido y sin complicarte.",
      initialRotate: -12,
      initialX: -80,
      initialY: 80
    },
    {
      number: "4",
      title: "Asesoramiento Estratégico",
      description: "Te acompañamos a hacer crecer tu negocio con estrategia. Analizamos tu operación, detectamos oportunidades de mejora y te guiamos para escalar con procesos, tecnología y visión de crecimiento real.",
      initialRotate: 10,
      initialX: 120,
      initialY: -50
    }
  ];

  return (
    <section id="marketplace" className="relative bg-[#e8e8e8] py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 mb-2 font-['Roboto_Mono',_sans-serif] italic">
            Facilita tu trabajo
          </p>
          <h2 className="text-5xl lg:text-6xl font-['Roboto_Mono',_sans-serif]">
            Conoce nuestros servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              initialRotate={service.initialRotate}
              initialX={service.initialX}
              initialY={service.initialY}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto mt-32">
          <h2 className="text-5xl lg:text-6xl font-['Parkinsans',_sans-serif] font-medium uppercase tracking-[6px]">
            ¿A cual servicio te conectas?
          </h2>

          <button className="backdrop-blur-[27px] bg-[#f57b52] border border-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] h-[81px] px-12 rounded-[80px] text-white font-['Parkinsans',_sans-serif] text-2xl tracking-[2.4px] hover:bg-[#e56a42] transition-colors">
            Activa tu primer flow
          </button>
        </div>
      </div>
    </section>
  );
}
