import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgRectangle726 from "figma:asset/6acd332c3f40bcadfec1e89e39e776009453867c.png";
import imgRectangle727 from "figma:asset/1547eb97a50f89b81916fd102e30c39d35b1f3bc.png";

function ScrollColorText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const text = "Si tu éxito tiene el costo de sacarte tiempo valioso para hacer crecer tu negocio. Lleva el control vos, probá nuestro producto gratis por un mes.";
  const words = text.split(" ");

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto text-center py-20">
      <p className="text-3xl lg:text-5xl font-['Parkinsans',_sans-serif] leading-relaxed">
        <span className="text-white/30 text-6xl mr-2">"</span>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
        <span className="text-white/30 text-6xl ml-2">"</span>
      </p>
    </div>
  );
}

function Word({ 
  children, 
  progress, 
  range 
}: { 
  children: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(255, 255, 255, 0.3)", "rgba(255, 106, 0, 1)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-2 transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
}

export function ProblemSection() {
  return (
    <section className="relative bg-[#1e1e1e] py-24 overflow-hidden">
      {/* Decorative pixel pattern */}
      <div className="absolute left-0 top-0 opacity-10">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="w-[30px] h-[30px] bg-white/5" />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Pills at Top */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <motion.div 
            className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center px-[16px] py-[12px] relative rounded-[40px] shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_44px_0px_rgba(255,106,0,0.5)]" />
            <p className="font-['Parkinsans',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">Emprendedores</p>
          </motion.div>
          
          <motion.div 
            className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center px-[29px] py-[12px] relative rounded-[40px] shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_44px_0px_rgba(255,106,0,0.5)]" />
            <p className="font-['Parkinsans',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">PYMES</p>
          </motion.div>
          
          <motion.div 
            className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center px-[16px] py-[12px] relative rounded-[40px] shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_44px_0px_rgba(255,106,0,0.5)]" />
            <p className="font-['Parkinsans',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">Empresas</p>
          </motion.div>
        </div>

        {/* Subtitle */}
        <p className="font-['Roboto_Mono',_sans-serif] leading-[42px] text-[24px] text-center text-white tracking-[2.4px] mb-12">
          ¿Tenés problemas para responder a tus clientes?
        </p>

        {/* Decorated Title */}
        <div className="flex flex-col items-center gap-0 mb-16">
          {/* First Line: No sabías + Image */}
          <div className="flex items-center gap-4 lg:gap-7 mb-0">
            <motion.h2 
              className="font-['Roboto_Mono',_sans-serif] font-bold text-[60px] lg:text-[100px] text-white tracking-[-8px] leading-[128px]"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              No sabias
            </motion.h2>
            
            <motion.div
              className="flex items-center justify-center shrink-0"
              animate={{ 
                rotate: [18.1, 28.1, 18.1],
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: "120px",
                height: "80px"
              }}
            >
              <div className="relative w-full h-full rounded-[20px]">
                <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
                  <div className="absolute bg-white inset-0 rounded-[20px]" />
                  <img 
                    alt="" 
                    className="absolute max-w-none object-cover rounded-[20px] size-full" 
                    src={imgRectangle726} 
                  />
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#ff6a00] border-solid inset-0 rounded-[20px]" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="font-['Roboto_Mono',_sans-serif] font-bold text-[60px] lg:text-[100px] text-white tracking-[-8px] leading-[128px]"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              que
            </motion.h2>
          </div>

          {/* Second Line: lo necesitabas + Image */}
          <div className="flex items-center gap-0">
            <motion.h2 
              className="font-['Roboto_Mono',_sans-serif] font-bold text-[60px] lg:text-[100px] text-white tracking-[-8px] leading-[128px]"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              lo necesitabas
            </motion.h2>
            
            <motion.div
              className="flex items-center justify-center shrink-0"
              animate={{ 
                rotate: [321.593, 311.593, 321.593],
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: "120px",
                height: "80px"
              }}
            >
              <div className="relative w-full h-full rounded-[20px]">
                <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
                  <div className="absolute bg-white inset-0 rounded-[20px]" />
                  <img 
                    alt="" 
                    className="absolute max-w-none object-cover rounded-[20px] size-full" 
                    src={imgRectangle727} 
                  />
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#ff6a00] border-solid inset-0 rounded-[20px]" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Color Changing Text */}
        <ScrollColorText />
      </div>

      {/* Bottom gradient blur */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(30,30,30,1) 100%)",
          backdropFilter: "blur(22.5px)",
        }}
      />
    </section>
  );
}
