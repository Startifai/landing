import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-206zo9k405";
import { img31 } from "../imports/svg-f1i2w";
import botImage from "figma:asset/85a6a6845e11f66bc5e59af5f64baa823010777a.png";

function StartifaiLogoBackground() {
  return (
    <div className="absolute h-[377.044px] left-1/2 -translate-x-1/2 top-[99px] w-[1866.58px] max-w-[90vw] opacity-[0.15]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1867 378">
        <g id="Group 256">
          <g id="Startifai">
            <path d={svgPaths.p2b7d6100} fill="#F7F7F7" id="Vector" />
            <path d={svgPaths.p614f300} fill="#F7F7F7" id="Vector_2" />
            <path d={svgPaths.p35befc00} fill="#F7F7F7" id="Vector_3" />
            <path d={svgPaths.p3cf7aff0} fill="#F7F7F7" id="Vector_4" />
            <path d={svgPaths.p98d9600} fill="#F7F7F7" id="Vector_5" />
            <path d={svgPaths.p3dcaa280} fill="#F7F7F7" id="Vector_6" />
            <path d={svgPaths.p11a44900} fill="#F7F7F7" id="Vector_7" />
          </g>
          <path d={svgPaths.p13c68f20} fill="#F7F7F7" id="Subtract" />
          <path d={svgPaths.p52f5800} fill="#F7F7F7" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup({ scrollProgress }: { scrollProgress: number }) {
  // Calculate transform based on scroll progress (0 to 1)
  const translateY = scrollProgress * 700; // Bot moves down 700px total - faster movement
  const opacity = Math.max(1 - scrollProgress * 1.8, 0); // Fade out faster as it scrolls
  
  return (
    <div 
      className="absolute right-0 top-0 pointer-events-none"
      style={{
        transform: `translateY(${translateY}px)`,
        opacity: opacity,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
      }}
    >
      <div className="relative h-[500px] lg:h-[700px] xl:h-[914.738px] w-[400px] lg:w-[600px] xl:w-[731.791px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex-none rotate-[180deg] scale-y-[-100%] scale-x-[-100%]">
            <div 
              className="h-[500px] lg:h-[700px] xl:h-[914.738px] w-[400px] lg:w-[600px] xl:w-[731.791px] relative" 
              style={{ 
                maskImage: `url('${img31}')`,
                WebkitMaskImage: `url('${img31}')`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            >
              <img
                alt="Startifai AI Robot"
                className="absolute inset-0 object-cover object-center size-full max-w-none"
                src={botImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="relative z-10 flex flex-col gap-[56px] items-start max-w-[753px] px-6 lg:px-0">
      {/* Text Content */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <h1 
          className="font-['Parkinsans',_sans-serif] font-semibold text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.2] lg:leading-[80px] tracking-[-3px] uppercase w-full"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #000005 43.75%, #FF6A00 56.25%, #000005 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Automatizá tu atención con IA, en minutos.
        </h1>
        
        <p className="font-['Roboto_Mono',_sans-serif] text-[20px] sm:text-[26px] lg:text-[32px] leading-[1.3] lg:leading-[42px] text-black tracking-[3.2px] max-w-[701px]">
          Auto-gestiona tu negocio y monetiza más consultas 24/7, fácil y perfecto.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-[8px] items-center w-full sm:w-auto">
        <a 
          href="https://app.startifai.com"
          className="backdrop-blur-[27px] bg-[#f57b52] h-[69px] px-[56px] rounded-[90px] border border-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] hover:bg-[#e56a42] transition-colors w-full sm:w-auto"
        >
          <p className="font-['Parkinsans',_sans-serif] font-semibold text-[18px] text-center text-white tracking-[1.8px] whitespace-nowrap">
            ¡Empeza gratis ahora!
          </p>
        </a>
        
        <button className="backdrop-blur-[27px] bg-[rgba(255,255,255,0.2)] h-[69px] px-[56px] rounded-[90px] border border-[#ff6a00] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] hover:bg-[rgba(255,255,255,0.3)] transition-colors w-full sm:w-auto">
          <p className="font-['Parkinsans',_sans-serif] font-semibold text-[18px] text-center text-[#ff6a00] tracking-[1.8px] whitespace-nowrap">
            Ver como funciona
          </p>
        </button>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        
        // Calculate scroll progress within this section (0 to 1)
        // The bot animation should happen in a shorter scroll distance
        const scrollStart = sectionTop - 80; // Account for navbar
        const scrollEnd = scrollStart + (window.innerHeight * 0.6); // Bot animation completes in 60% of viewport height
        
        const progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white overflow-visible" 
      style={{ 
        marginTop: "80px",
        // Extra height to allow bot to scroll down before content moves
        minHeight: "100vh"
      }}
    >
      {/* Sticky container that holds the visual content */}
      <div className="sticky top-[80px] h-screen overflow-hidden">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a0a0a0 1.5px, transparent 1.5px),
              linear-gradient(to bottom, #a0a0a0 1.5px, transparent 1.5px)
            `,
            backgroundSize: '150px 150px',
          }}
        />

        {/* Decorative Corner Squares - Top Left */}
        <div className="absolute left-[57px] top-[57px] w-[21px] h-[21px] bg-[#ff6a00] z-10" />
        
        {/* Decorative Corner Squares - Top Right */}
        <div className="absolute right-[57px] top-[57px] w-[21px] h-[21px] bg-[#ff6a00] z-10" />
        
        {/* Decorative Corner Squares - Bottom Left */}
        <div className="absolute left-[57px] bottom-[57px] w-[21px] h-[21px] bg-[#ff6a00] z-10" />
        
        {/* Decorative Corner Squares - Bottom Right */}
        <div className="absolute right-[57px] bottom-[57px] w-[21px] h-[21px] bg-[#ff6a00] z-10" />

        {/* Background Logo */}
        <StartifaiLogoBackground />
        
        {/* Masked Image - Right Side with scroll effect */}
        <MaskGroup scrollProgress={scrollProgress} />
        
        {/* Main Content - Centered on mobile, left-aligned on desktop */}
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-10 h-full">
          <div className="flex items-center justify-center lg:justify-start h-full py-12 lg:py-0">
            <div className="w-full lg:w-[60%] xl:w-[55%] lg:ml-[5%] xl:ml-[8%]">
              <ContentFrame />
            </div>
          </div>
        </div>

        {/* Bottom gradient blur */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[120px] lg:h-[200px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            backdropFilter: "blur(22.5px)",
          }}
        />
      </div>
    </section>
  );
}
