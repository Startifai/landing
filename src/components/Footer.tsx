import { MessageCircle, Mail, Linkedin, Instagram } from "lucide-react";
import svgPaths from "../imports/svg-km10h2kdna";

function StartifaiLogoWhite() {
  return (
    <svg className="h-[41px] w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 248 41">
      <g id="Group 3466048">
        <g id="Group 255">
          <g id="Startifai">
            <path d={svgPaths.p80aa2c0} fill="white" id="Vector" />
            <path d={svgPaths.p33a94c00} fill="white" id="Vector_2" />
            <path d={svgPaths.p30291300} fill="white" id="Vector_3" />
            <path d={svgPaths.p1ec41a80} fill="white" id="Vector_4" />
            <path d={svgPaths.p2d42cb00} fill="white" id="Vector_5" />
            <path d={svgPaths.p26b5d580} fill="white" id="Vector_6" />
            <path d={svgPaths.p3aa8a000} fill="white" id="Vector_7" />
          </g>
          <path d={svgPaths.p27a7d400} fill="white" id="Subtract" />
          <path d={svgPaths.p3aa2f80} fill="white" id="Subtract_2" />
        </g>
        <path d={svgPaths.p2d5db7b0} fill="#FF6A00" id="Subtract_3" />
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative text-black overflow-hidden z-20">
      {/* Sección blanca con cuadrícula - Menú completo */}
      <div 
        className="relative bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-16"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Columna izquierda - Links del menú */}
            <div className="space-y-6">
              <nav className="space-y-1">
                <a
                  href="#"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Nosotros
                </a>
                <a
                  href="#equipo"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Equipo
                </a>
                <a
                  href="#problema"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Problema
                </a>
                <a
                  href="#servicios"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Servicios
                </a>
                <a
                  href="#comunidad"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Comunidad
                </a>
                <a
                  href="#marketplace"
                  className="block px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  Tienda
                </a>
              </nav>
            </div>

            {/* Columna centro - Redes Sociales */}
            <div className="space-y-6">
              <h3 className="text-black mb-4 font-['Parkinsans',_sans-serif] font-medium text-[20px]">
                Redes Sociales
              </h3>
              <nav className="space-y-3">
                <a
                  href="https://linkedin.com/company/startifai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/startifai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://discord.gg/startifai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif] text-[18px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Discord</span>
                </a>
              </nav>
            </div>

            {/* Columna derecha - CTA Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-black mb-4 font-['Parkinsans',_sans-serif] font-medium text-[20px]">
                  ¿Tenés dudas?
                </h3>
                <p className="text-gray-600 text-sm mb-6 font-['Parkinsans',_sans-serif]">
                  Hablá con nuestro asistente virtual basado en IA y descubrí cómo podemos ayudarte a automatizar tu negocio.
                </p>
              </div>

              <div className="space-y-3">
                {/* Chat con IA - Botón naranja con efecto glass/neon */}
                <button 
                  onClick={() => {
                    const event = new CustomEvent('openChatbot');
                    window.dispatchEvent(event);
                  }}
                  className="w-full flex items-center gap-3 px-6 py-4 bg-[rgba(255,106,0,0.1)] backdrop-blur-sm hover:bg-[rgba(255,106,0,0.2)] border border-[#FF6A00] rounded-xl transition-all text-black font-['Parkinsans',_sans-serif] font-medium shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)]"
                >
                  <MessageCircle className="w-5 h-5 text-[#FF6A00]" />
                  <span>Starti responde dudas</span>
                </button>

                {/* Email - Consultas personalizadas */}
                <div className="space-y-2">
                  <a 
                    href="mailto:hola@startifai.com"
                    className="w-full flex items-center gap-3 px-6 py-4 bg-[rgba(0,0,0,0.03)] hover:bg-[rgba(0,0,0,0.08)] border border-gray-300 rounded-xl transition-all text-black font-['Parkinsans',_sans-serif]"
                  >
                    <Mail className="w-5 h-5 text-black" />
                    <span>Consultas y propuestas</span>
                  </a>
                  <p className="text-gray-500 text-xs px-2 font-['Parkinsans',_sans-serif]">
                    Te invitamos a escribirnos para conversar de temas personalizados fuera de nuestros servicios actuales
                  </p>
                </div>
              </div>

              {/* CTA Final */}
              <div className="pt-4">
                <button 
                  className="w-full px-6 py-4 bg-[#FF6A00] text-white rounded-xl font-['Parkinsans',_sans-serif] hover:bg-[#ff7a1a] transition-all shadow-[0_4px_20px_rgba(255,106,0,0.4)] hover:shadow-[0_6px_30px_rgba(255,106,0,0.6)] transform hover:scale-[1.02]"
                >
                  Crear cuenta gratis
                </button>
                <p className="text-center text-xs text-gray-500 mt-3 font-['Parkinsans',_sans-serif]">
                  30 días gratis • Sin tarjeta de crédito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra naranja final */}
      <div className="bg-[#ff6a00] h-[148px] w-full" />
    </footer>
  );
}
