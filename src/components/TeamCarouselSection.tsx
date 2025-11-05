import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useAnimationFrame } from "motion/react";
import { useRef, useState } from "react";
import gridPattern from "figma:asset/beadf17e2b948906b9f8803ae1ddae2cd6109d74.png";

export function TeamCarouselSection() {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);

  useAnimationFrame(() => {
    rotationRef.current += 0.2;
    setRotation(rotationRef.current);
  });

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjE2NDIxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 0
    },
    {
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTU0OTk2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 36
    },
    {
      image: "https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjE1NzEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 72
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjM0NjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 108
    },
    {
      image: "https://images.unsplash.com/photo-1698986668651-295fda8e61bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE1NjA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 144
    },
    {
      image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2MTgyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 180
    },
    {
      image: "https://images.unsplash.com/photo-1665700301987-b2a5f789f6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2NTY0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 216
    },
    {
      image: "https://images.unsplash.com/photo-1488510065224-1cb40f9c9f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMHBlcnNvbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzYxNjE2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 252
    },
    {
      image: "https://images.unsplash.com/photo-1758691737644-ef8be18256c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZm91bmRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTY2ODQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 288
    },
    {
      image: "https://images.unsplash.com/photo-1759096202112-95a3b43ff9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheGVkJTIwcGVyc29uJTIwc21pbGluZ3xlbnwxfHx8fDE3NjE2Njg3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      angle: 324
    }
  ];

  return (
    <section className="relative bg-[#f5f5f5] pt-12 pb-32 overflow-hidden">
      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${gridPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.6
        }}
      />
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="relative min-h-[800px] flex items-center justify-center">
          {/* Small Text Top */}
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-20">
            <h3 className="font-['Parkinsans',_sans-serif] text-black tracking-[8px]" style={{ fontSize: '80px', fontWeight: 700, lineHeight: '1' }}>
              Crea bots,
            </h3>
          </div>

          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <h2 
              className="font-['Roboto_Mono',_monospace] text-[#ffb77e] text-center select-none"
              style={{
                fontSize: 'clamp(100px, 15vw, 300px)',
                fontWeight: 700,
                letterSpacing: '-24px',
                lineHeight: '238px'
              }}
            >
              Empleados<br />perfectos
            </h2>
          </div>

          {/* Rotating Carousel */}
          <div className="relative w-full max-w-[1000px] h-[600px] z-10 flex items-center justify-center">
            <div className="relative w-full h-full">
              {teamMembers.map((member, index) => {
                const currentAngle = member.angle + rotation;
                const radius = 380;
                const x = Math.cos((currentAngle * Math.PI) / 180) * radius;
                const y = Math.sin((currentAngle * Math.PI) / 180) * radius * 0.35;
                
                // Calculate scale based on y position
                // Cards at back (negative y) are smaller (0.75)
                // Cards at front (positive y) are normal size (1.0)
                const normalizedY = y / (radius * 0.35);
                const scale = 0.75 + (normalizedY * 0.25);
                
                // Calculate z-index based on y position
                const zIndex = Math.round(50 + y);
                
                // Fixed rotation for all cards
                const cardRotation = 350.872;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${cardRotation}deg) scale(${scale})`,
                      zIndex: zIndex,
                      width: 193.295,
                      height: 255.732
                    }}
                  >
                    <motion.div
                      className="w-full h-full rounded-[30px] overflow-hidden shadow-2xl cursor-pointer bg-white border-[3px] border-[#ff6a00] border-solid"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={`Team member ${index + 1}`}
                        className="w-full h-full object-cover rounded-[27px]"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
