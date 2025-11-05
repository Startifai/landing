import svgPaths from "../imports/svg-zn7dfo4mnq";
import svgPathsLogo from "../imports/svg-elacwyv93c";
import imgUnsplashAwc6FMwmcf4 from "figma:asset/c550be237aedfaf5b0c545ec0b392d84c812714c.png";
import imgP903 from "figma:asset/d72cf6c4fb680433990d0f4a5d906c8bda0d6679.png";

function StartifaiLogoWhite() {
  return (
    <svg className="block w-full h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 278">
      <g id="Group 3466048">
        <g id="Group 255">
          <g id="Startifai">
            <path d={svgPathsLogo.p21889900} fill="white" id="Vector" />
            <path d={svgPathsLogo.p189dce80} fill="white" id="Vector_2" />
            <path d={svgPathsLogo.p1cb91a80} fill="white" id="Vector_3" />
            <path d={svgPathsLogo.p39f20900} fill="white" id="Vector_4" />
            <path d={svgPathsLogo.p1bb39f80} fill="white" id="Vector_5" />
            <path d={svgPathsLogo.p39c7f200} fill="white" id="Vector_6" />
            <path d={svgPathsLogo.p1b756700} fill="white" id="Vector_7" />
          </g>
          <path d={svgPathsLogo.p7a68f40} fill="white" id="Subtract" />
          <path d={svgPathsLogo.p31905470} fill="white" id="Subtract_2" />
        </g>
        <path d={svgPathsLogo.p7f2880} fill="#FF6A00" id="Subtract_3" />
      </g>
    </svg>
  );
}

export function VisualParallaxSection() {
  return (
    <div className="relative w-full h-[2070px]" data-name="Visual">
      {/* Sticky Image Container - se queda fija mientras el contenido pasa por encima */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <div className="h-screen sticky top-0 w-full" data-name="unsplash:awc6FMwmcf4">
          <img alt="" className="absolute h-full w-full object-cover object-center" src={imgUnsplashAwc6FMwmcf4} />
        </div>
      </div>
      
      {/* Contenido que pasa por encima */}
      <div className="relative">
        <div className="h-[771px]" /> {/* Espacio para dejar ver la imagen */}
        
        {/* Gradient Transition con blur - punta a punta */}
        <div className="absolute h-[751px] left-0 top-[771px] w-full">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1929 751">
            <foreignObject height="841" width="2019" x="-45" y="-45">
              <div style={{ backdropFilter: "blur(22.5px)", clipPath: "url(#bgblur_0_28_114_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.pfbe00} data-figma-bg-blur-radius="45" fill="url(#paint0_linear_28_114)" id="Rectangle 632" />
            <defs>
              <clipPath id="bgblur_0_28_114_clip_path" transform="translate(45 45)">
                <path d={svgPaths.pfbe00} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_114" x1="964.5" x2="964.5" y1="0" y2="751">
                <stop stopColor="#1E1E1E" stopOpacity="0" />
                <stop offset="1" stopColor="#1E1E1E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Sección oscura con comunidad */}
        <div className="absolute bg-[#040407] h-[860px] left-0 rounded-[40px] top-[1210px] w-full" />
        
        <p className="absolute font-['Parkinsans',_sans-serif] h-[77px] left-[96px] text-[32px] text-white top-[1395px] tracking-[3.2px] uppercase w-[511px]">
          Nuestra comunidad
        </p>
        
        <p className="absolute font-['Parkinsans',_sans-serif] h-[104px] left-[99px] text-[24px] text-white top-[1483px] tracking-[0.72px] w-[1016px]">
          Sumate a nuestro servidor de Discord dónde subimos contenido diariamente y podes charlar con otros emprendedores sobre sus experiencias.
        </p>
        
        {/* Botón Discord */}
        <a 
          href="https://discord.gg/startifai" 
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[99px] top-[1605px] backdrop-blur-[5px] bg-[rgba(255,106,0,0.1)] border-2 border-[#FF6A00] px-8 py-4 rounded-[90px] hover:bg-[rgba(255,106,0,0.2)] transition-all shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] group"
        >
          <span className="font-['Parkinsans',_sans-serif] font-semibold text-[#FF6A00] text-[18px] tracking-[1.8px] group-hover:text-white transition-colors">
            Comunidad Discord
          </span>
        </a>
        
        {/* Logo Startifai grande */}
        <div className="absolute h-[278px] left-[73px] top-[1726px] w-[1679.14px]">
          <StartifaiLogoWhite />
        </div>
        
        {/* Imagen rotada decorativa */}
        <div className="absolute flex h-[calc(1px*((292.5*0.6180238127708435)+(277.4375*0.786159336566925)))] items-center justify-center left-[1568.23px] top-[1257.56px] w-[calc(1px*((277.4375*0.6180238127708435)+(292.5*0.786159336566925)))]">
          <div className="flex-none rotate-[321.828deg]">
            <div className="h-[277.45px] relative w-[292.51px]" data-name="p90 3">
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgP903} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
