import svgPaths from "./svg-206zo9k405";
import img32 from "figma:asset/1752197cb4ff8c65c2579b26bfaa5bbab30fb473.png";
import { img31 } from "./svg-k4cex";

function Group() {
  return (
    <div className="absolute h-[377.044px] left-0 top-[99px] w-[1866.58px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1867 378">
        <g id="Group 256">
          <g id="Startifai">
            <path d={svgPaths.p2b7d6100} fill="var(--fill-0, #F7F7F7)" id="Vector" />
            <path d={svgPaths.p614f300} fill="var(--fill-0, #F7F7F7)" id="Vector_2" />
            <path d={svgPaths.p35befc00} fill="var(--fill-0, #F7F7F7)" id="Vector_3" />
            <path d={svgPaths.p3cf7aff0} fill="var(--fill-0, #F7F7F7)" id="Vector_4" />
            <path d={svgPaths.p98d9600} fill="var(--fill-0, #F7F7F7)" id="Vector_5" />
            <path d={svgPaths.p3dcaa280} fill="var(--fill-0, #F7F7F7)" id="Vector_6" />
            <path d={svgPaths.p11a44900} fill="var(--fill-0, #F7F7F7)" id="Vector_7" />
          </g>
          <path d={svgPaths.p13c68f20} fill="var(--fill-0, #F7F7F7)" id="Subtract" />
          <path d={svgPaths.p52f5800} fill="var(--fill-0, #F7F7F7)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[1227.82px] top-0" data-name="Mask group">
      <div className="absolute flex h-[914.738px] items-center justify-center left-[1161.21px] top-[-69.74px] w-[731.791px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[914.738px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.988px_69.238px] mask-size-[665.806px_846px] relative w-[731.791px]" data-name="3 1" style={{ maskImage: `url('${img31}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img32} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-r font-['Parkinsans:SemiBold',_sans-serif] font-semibold from-[#000000] leading-[80px] min-w-full relative shrink-0 text-[60px] to-[#000005] tracking-[-3px] uppercase via-[#ff6a00] via-[56.25%] w-[min-content]" style={{ WebkitTextFillColor: "transparent" }}>
        Automatizá tu atención con IA, en minutos.
      </p>
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal h-[84px] leading-[42px] relative shrink-0 text-[32px] text-black tracking-[3.2px] w-[701px]">Convertí más consultas en citas sin escribir un solo mensaje.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[27px] backdrop-filter bg-[#f57b52] box-border content-stretch flex gap-[10px] h-[69px] items-center justify-center px-[56px] py-[20px] relative rounded-[90px] shrink-0 w-[352px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[90px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]" />
      <p className="font-['Parkinsans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">¡Empeza gratis ahora!</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="backdrop-blur-[27px] backdrop-filter bg-[rgba(255,255,255,0.2)] box-border content-stretch flex gap-[10px] h-[69px] items-center justify-center px-[56px] py-[20px] relative rounded-[90px] shrink-0 w-[314px]">
      <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[90px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]" />
      <p className="font-['Parkinsans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff6a00] text-[18px] text-center text-nowrap tracking-[1.8px] whitespace-pre">Ver como funciona</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[223px] top-[174px] w-[753px]">
      <Frame />
      <Frame3 />
    </div>
  );
}

export default function ContenidoInicio() {
  return (
    <div className="relative size-full" data-name="Contenido inicio">
      <Group />
      <MaskGroup />
      <Frame4 />
    </div>
  );
}