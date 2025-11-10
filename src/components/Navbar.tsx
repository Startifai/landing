import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { MessageCircle, Mail, X } from "lucide-react";
import svgPaths from "../imports/svg-u7nid2h4jw";

function LogoSvg() {
  return (
    <svg className="block h-8 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 191 32">
      <g id="Group 3466050">
        <g id="Group 255">
          <g id="Startifai">
            <path d={svgPaths.p2047f300} fill="white" id="Vector" />
            <path d={svgPaths.p2b301b00} fill="white" id="Vector_2" />
            <path d={svgPaths.p1b26f580} fill="white" id="Vector_3" />
            <path d={svgPaths.pcf25a40} fill="white" id="Vector_4" />
            <path d={svgPaths.p1ecfa980} fill="white" id="Vector_5" />
            <path d={svgPaths.p25ef1800} fill="white" id="Vector_6" />
            <path d={svgPaths.p2991f200} fill="white" id="Vector_7" />
          </g>
          <path d={svgPaths.p29636f00} fill="white" id="Subtract" />
          <path d={svgPaths.p3cf26800} fill="white" id="Subtract_2" />
        </g>
        <path d={svgPaths.p3e2daa80} fill="#FF6A00" id="Subtract_3" />
      </g>
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block ${className}`} fill="none" viewBox="0 0 45 45">
      <g id="menu">
        <path d="M7.03125 14.0625H37.9688" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M7.03125 22.5H37.9688" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M7.03125 30.9375H37.9688" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function MenuContent({ onClose }: { onClose: () => void }) {
  const menuSections = [
    { label: "Inicio", href: "#" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Equipo", href: "#equipo" },
    { label: "Problema", href: "#problema" },
    { label: "Servicios", href: "#servicios" },
    { label: "Experiencia Visual", href: "#visual" },
    { label: "Tienda", href: "#marketplace" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Hidden accessibility elements */}
      <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
      <SheetDescription className="sr-only">
        Navegación principal y opciones para contactar con el asistente virtual
      </SheetDescription>

      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#414147]">
        <h2 className="text-xl text-white font-['Parkinsans',_sans-serif] font-medium" aria-hidden="true">Menú</h2>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <nav className="space-y-1">
          {menuSections.map((section, index) => (
            <a
              key={index}
              href={section.href}
              onClick={onClose}
              className="block px-4 py-3 text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors font-['Parkinsans',_sans-serif]"
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-8 border-t border-[#414147]" />

        {/* CTA Section - Asistente Virtual */}
        <div className="space-y-6">
          <div>
            <h3 className="text-white mb-4 font-['Parkinsans',_sans-serif] font-medium">
              ¿Tenés dudas?
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-['Parkinsans',_sans-serif]">
              Hablá con nuestro asistente virtual basado en IA y descubrí cómo podemos ayudarte a automatizar tu negocio.
            </p>
          </div>

          <div className="space-y-3">
            {/* Chat con IA - Botón naranja con efecto glass/neon */}
            <button 
              onClick={() => {
                onClose();
                // Aquí se activaría el chatbot widget
                const event = new CustomEvent('openChatbot');
                window.dispatchEvent(event);
              }}
              className="w-full flex items-center gap-3 px-6 py-4 bg-[rgba(255,106,0,0.15)] backdrop-blur-sm hover:bg-[rgba(255,106,0,0.25)] border border-[#FF6A00] rounded-xl transition-all text-white font-['Parkinsans',_sans-serif] font-medium shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)]"
            >
              <MessageCircle className="w-5 h-5 text-[#FF6A00]" />
              <span>Starti responde dudas</span>
            </button>

            {/* Email - Consultas personalizadas */}
            <div className="space-y-2">
              <a 
                href="mailto:hola@startifai.com"
                className="w-full flex items-center gap-3 px-6 py-4 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[#414147] rounded-xl transition-all text-white font-['Parkinsans',_sans-serif]"
              >
                <Mail className="w-5 h-5" />
                <span>Consultas y propuestas</span>
              </a>
              <p className="text-gray-500 text-xs px-2 font-['Parkinsans',_sans-serif]">
                Te invitamos a escribirnos para conversar de temas personalizados fuera de nuestros servicios actuales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-[#414147] bg-[rgba(255,255,255,0.02)]">
        <a 
          href="https://app.startifai.com"
          className="w-full px-6 py-4 bg-[#FF6A00] text-white rounded-xl font-['Parkinsans',_sans-serif] hover:bg-[#ff7a1a] transition-all shadow-[0_4px_20px_rgba(255,106,0,0.4)] hover:shadow-[0_6px_30px_rgba(255,106,0,0.6)] transform hover:scale-[1.02]"
        >
          Crear cuenta gratis
        </a>
        <p className="text-center text-xs text-gray-500 mt-3 font-['Parkinsans',_sans-serif]">
          30 días gratis • Sin tarjeta de crédito
        </p>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"nosotros" | "universo">("nosotros");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Nosotros", value: "nosotros", href: "#features" },
    { label: "Universo IA", value: "universo", href: "#marketplace" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#000005]`}
      style={{ height: "80px" }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-14 h-full relative">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex items-center z-10">
            <LogoSvg />
          </a>

          {/* Desktop Navigation - Tabs centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center h-12">
            {/* Background pill */}
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-[60px]" />
            
            {/* Active tab indicator */}
            <div 
              className="absolute h-full rounded-[60px] bg-[rgba(255,255,255,0.2)] border-2 border-white shadow-[0px_4px_34px_0px_rgba(255,255,255,0.15)] transition-all duration-300"
              style={{
                width: "50%",
                left: activeTab === "nosotros" ? "0%" : "50%",
              }}
            />

            {/* Tab buttons */}
            <div className="relative flex h-full">
              {navLinks.map((link) => (
                <a
                  key={link.value}
                  href={link.href}
                  onClick={(e) => {
                    setActiveTab(link.value as "nosotros" | "universo");
                  }}
                  className="relative px-12 py-3 text-[16px] text-white font-['Parkinsans',_sans-serif] hover:opacity-80 transition-opacity flex items-center justify-center whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA + Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://app.startifai.com"
              className="relative backdrop-blur-[5px] bg-[rgba(255,255,255,0.05)] border border-[#414147] h-[45px] px-6 rounded-[90px] text-[14px] text-white font-['Parkinsans',_sans-serif] font-medium tracking-[0.28px] hover:bg-[rgba(255,255,255,0.1)] transition-colors inline-flex items-center"
            >
              Ingresar
            </a>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:opacity-80 transition-opacity">
                  <MenuIcon className="w-[45px] h-[45px]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 bg-[#000005] border-l border-[#414147] p-0">
                <MenuContent onClose={() => setMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:opacity-80 transition-opacity">
                  <MenuIcon className="w-10 h-10" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 bg-[#000005] border-l border-[#414147] p-0">
                <MenuContent onClose={() => setMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
