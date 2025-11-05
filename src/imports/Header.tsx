import svgPaths from "./svg-u7nid2h4jw";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#000005] h-[126px] left-0 top-0 w-[1920px]" />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[1808px] size-[45px] top-[35px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="menu">
          <path d="M7.03125 14.0625H37.9688" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M7.03125 22.5H37.9688" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M7.03125 30.9375H37.9688" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[31.622px] left-[56px] top-[47px] w-[191px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191 32">
        <g id="Group 3466050">
          <g id="Group 255">
            <g id="Startifai">
              <path d={svgPaths.p2047f300} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p2b301b00} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p1b26f580} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.pcf25a40} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p1ecfa980} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p25ef1800} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p2991f200} fill="var(--fill-0, white)" id="Vector_7" />
            </g>
            <path d={svgPaths.p29636f00} fill="var(--fill-0, white)" id="Subtract" />
            <path d={svgPaths.p3cf26800} fill="var(--fill-0, white)" id="Subtract_2" />
          </g>
          <path d={svgPaths.p3e2daa80} fill="var(--fill-0, #FF6A00)" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function AcentMdButton() {
  return (
    <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[10px] h-[45px] items-center justify-center left-[1633px] px-[24px] py-[12px] rounded-[90px] top-[36px] w-[119px]" data-name="Acent MD Button">
      <div aria-hidden="true" className="absolute border border-[#414147] border-solid inset-0 pointer-events-none rounded-[90px]" />
      <p className="font-['Parkinsans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.28px] whitespace-pre">Ingresar</p>
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="Header">
      <Group />
      <div className="absolute bg-[rgba(255,255,255,0.1)] h-[48px] left-[769px] rounded-[60px] top-[33px] w-[416px]" />
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[769px] rounded-[60px] top-[33px] w-[208px]">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[60px] shadow-[0px_4px_34px_0px_rgba(255,255,255,0.15)]" />
      </div>
      <p className="absolute font-['Parkinsans:Regular',_sans-serif] font-normal leading-[normal] left-[872.5px] text-[16px] text-center text-white top-[46px] translate-x-[-50%] w-[183px]">Nosotros</p>
      <p className="absolute font-['Parkinsans:Regular',_sans-serif] font-normal leading-[normal] left-[1068.5px] text-[16px] text-center text-white top-[46px] translate-x-[-50%] w-[183px]">Universo IA</p>
      <Menu />
      <Group1 />
      <AcentMdButton />
    </div>
  );
}