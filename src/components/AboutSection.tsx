import { motion } from "motion/react";
import svgPaths from "../imports/svg-epyy0agecz";
import imgRectangle34 from "figma:asset/957c821bd18486679d35b0a3d9366c1636fb09d2.png";

function StartiLogo() {
  return (
    <svg className="w-full h-auto" fill="none" viewBox="0 0 528 107">
      <g id="Group 258">
        <g id="Startifai">
          <path d={svgPaths.p50c6b80} fill="black" id="Vector" />
          <path d={svgPaths.p39787b80} fill="black" id="Vector_2" />
          <path d={svgPaths.p3b4f7400} fill="black" id="Vector_3" />
          <path d={svgPaths.p33a74d00} fill="black" id="Vector_4" />
          <path d={svgPaths.p18184080} fill="black" id="Vector_5" />
          <path d={svgPaths.p5482580} fill="black" id="Vector_6" />
          <path d={svgPaths.p28bde580} fill="black" id="Vector_7" />
        </g>
        <path d={svgPaths.p3b8a0b00} fill="black" id="Subtract" />
        <path d={svgPaths.p1fa6e180} fill="black" id="Subtract_2" />
      </g>
    </svg>
  );
}

export function AboutSection() {
  return (
    <section className="relative bg-[#f7f7f7] py-20 lg:py-32 overflow-hidden">
      {/* Decorative 3D Images */}
      <motion.div 
        className="absolute top-12 right-32 w-20 h-20 lg:w-40 lg:h-40 hidden lg:block"
        initial={{ opacity: 0, rotate: 256.795 }}
        whileInView={{ opacity: 1, rotate: 256.795 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img 
          src={imgRectangle34} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            transform: 'rotate(256.795deg)',
            filter: 'grayscale(100%) brightness(1.2) contrast(0.8)'
          }}
        />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-32 lg:h-32 hidden md:block"
        initial={{ opacity: 0, rotate: 326.477 }}
        whileInView={{ opacity: 1, rotate: 326.477 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img 
          src={imgRectangle34} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            transform: 'rotate(326.477deg)',
            filter: 'grayscale(100%) brightness(1.2) contrast(0.8)'
          }}
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-32 left-0 w-20 h-20 lg:w-36 lg:h-36 hidden lg:block"
        initial={{ opacity: 0, rotate: 98.108 }}
        whileInView={{ opacity: 1, rotate: 98.108 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img 
          src={imgRectangle34} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            transform: 'rotate(98.108deg)',
            filter: 'grayscale(100%) brightness(1.2) contrast(0.8)'
          }}
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Brand Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="font-['Parkinsans',_sans-serif] text-black mb-4 tracking-[4px]">
                ¡Hola! somos
              </p>
              <div className="max-w-md">
                <StartiLogo />
              </div>
            </div>
            
            <p className="font-['Parkinsans',_sans-serif] font-medium text-[#8e8f9a] tracking-[1.2px] uppercase max-w-md leading-relaxed">
              "Somos especialistas en estrategias y automatizaciones para empresas"
            </p>
          </motion.div>

          {/* Right Side - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-['Parkinsans',_sans-serif] font-semibold text-[#ff6a00] tracking-[3.2px]">
              ¿Por qué usar Startifai?
            </h2>
            
            <ul className="space-y-4 font-['Poppins',_sans-serif] text-black tracking-[1.2px]">
              <li className="flex items-start gap-3">
                <span className="text-[#ff6a00] mt-1">•</span>
                <span>Responde consultas automáticamente 24/7.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6a00] mt-1">•</span>
                <span>Agenda citas sin complicaciones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6a00] mt-1">•</span>
                <span>Sin conocimientos técnicos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6a00] mt-1">•</span>
                <span>Personalizá tu asistente sin dependencias.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff6a00] mt-1">•</span>
                <span>Ideal para emprendedores y PYMES.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
