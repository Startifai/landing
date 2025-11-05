import svgPaths from "./svg-h7pjajqoez";
import imgRectangle689 from "figma:asset/3e23d288f1f4ad862433d9c71cf0528790d440f4.png";

function Group() {
  return (
    <div className="absolute h-[80.317px] left-[115px] top-[500px] w-[485.122px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 486 81">
        <g id="Group 3466047">
          <g id="Group 255">
            <g id="Startifai">
              <path d={svgPaths.p2dbb8700} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p35cf7b00} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p34ffa300} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p33752e00} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p27b0d500} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p34181200} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p1916da00} fill="var(--fill-0, white)" id="Vector_7" />
            </g>
            <path d={svgPaths.p26fe9200} fill="var(--fill-0, white)" id="Subtract" />
            <path d={svgPaths.p22029d80} fill="var(--fill-0, white)" id="Subtract_2" />
          </g>
          <path d={svgPaths.p204ae500} fill="var(--fill-0, #FF6A00)" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#232323] relative size-full" data-name="44">
      <div className="absolute flex flex-col font-['Roboto_Mono:Bold',_sans-serif] font-bold justify-center leading-[0] left-[1117px] text-[32px] text-white top-[367px] tracking-[0.32px] translate-y-[-50%] w-[417px]">
        <p className="leading-[normal]">Verifica tu correo</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[calc(50%+157px)] not-italic text-[16px] text-white top-[428px] tracking-[0.16px] translate-y-[-50%] w-[417px]">
        <p className="leading-[32px]">Ingresa tu correo para validar tu identidad</p>
      </div>
      <div className="absolute flex flex-col font-['Parkinsans:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%+157px)] text-[#afafaf] text-[14px] top-[472px] tracking-[0.14px] translate-y-[-50%] w-[417px]">
        <p className="leading-[normal]">{`A continuación te llegara un mail para que puedas ingresar tu nueva contraseña. `}</p>
      </div>
      <div className="absolute h-[1080px] left-0 top-[11px] w-[715px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#121315] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle689} />
        </div>
      </div>
      <Group />
      <div className="absolute bg-[#232323] h-[52px] left-[1117px] rounded-[40px] top-[573px] w-[407px]">
        <div aria-hidden="true" className="absolute border border-[#fb7138] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </div>
      <p className="absolute font-['Parkinsans:Regular',_sans-serif] font-normal h-[17px] leading-[normal] left-[1127px] text-[12px] text-neutral-100 top-[548px] tracking-[1.2px] w-[156px]">Correo electrónico</p>
      <p className="absolute font-['Parkinsans:Light',_sans-serif] font-light h-[20px] leading-[normal] left-[1141px] text-[#afafaf] text-[14px] top-[589px] tracking-[1.4px] w-[171px]">
        <span className="text-[#fb7138]">|</span>
        <span>{` ejemplo@mail.com`}</span>
      </p>
      <div className="absolute bg-[#121315] h-[52px] left-[1117px] rounded-[90px] top-[657px] w-[407px]" />
      <p className="absolute font-['Parkinsans:Medium',_sans-serif] font-medium h-[20px] leading-[normal] left-[1320.5px] text-[#afafaf] text-[14px] text-center top-[673px] tracking-[1.4px] translate-x-[-50%] w-[257px]">Enviar mail</p>
    </div>
  );
}