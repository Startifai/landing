import imgRectangle726 from "figma:asset/6acd332c3f40bcadfec1e89e39e776009453867c.png";
import imgRectangle727 from "figma:asset/1547eb97a50f89b81916fd102e30c39d35b1f3bc.png";

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center px-[16px] py-[12px] relative rounded-[40px] shrink-0 w-[200px]">
      <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_44px_0px_rgba(255,106,0,0.5)]" />
      <p className="font-['Parkinsans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">Emprendedores</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center px-[29px] py-[12px] relative rounded-[40px] shrink-0 w-[125px]">
      <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_44px_0px_rgba(255,106,0,0.5)]" />
      <p className="font-['Parkinsans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">PYMES</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center px-[16px] py-[12px] relative rounded-[40px] shrink-0 w-[136px]">
      <div aria-hidden="true" className="absolute border border-[#ff6a00] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_44px_0px_rgba(255,106,0,0.5)]" />
      <p className="font-['Parkinsans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[1.8px] whitespace-pre">Empresas</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame3 />
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal h-[84px] leading-[42px] relative shrink-0 text-[24px] text-center text-white tracking-[2.4px] w-full">¿Tenés problemas para responder a tus clientes?</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto_Mono:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[100px] text-center text-white tracking-[-8px] w-[484px]">
        <p className="leading-[128px]">No sabias</p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.3106759488582611)+(var(--transform-inner-height)*0.950515866279602)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.3106759488582611)+(var(--transform-inner-width)*0.950515866279602)))]" style={{ "--transform-inner-width": "168.15625", "--transform-inner-height": "111.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[18.1deg]">
          <div className="h-[111.828px] pointer-events-none relative rounded-[20px] w-[168.157px]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
              <div className="absolute bg-white inset-0 rounded-[20px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgRectangle726} />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#ff6a00] border-solid inset-0 rounded-[20px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto_Mono:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[100px] text-white tracking-[-8px] w-[168px]">
        <p className="leading-[128px]">que</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto_Mono:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[100px] text-center text-white tracking-[-8px] w-[740px]">
        <p className="leading-[128px]">lo necesitabas</p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.6212413311004639)+(var(--transform-inner-height)*0.7836192846298218)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.6212413311004639)+(var(--transform-inner-width)*0.7836192846298218)))]" style={{ "--transform-inner-width": "156.328125", "--transform-inner-height": "103.953125" } as React.CSSProperties}>
        <div className="flex-none rotate-[321.593deg]">
          <div className="h-[103.967px] pointer-events-none relative rounded-[20px] w-[156.336px]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
              <div className="absolute bg-white inset-0 rounded-[20px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgRectangle727} />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#ff6a00] border-solid inset-0 rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[928.096px]">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-center left-[462px] top-[149px] w-[1064px]">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

export default function Seccion() {
  return (
    <div className="bg-[#0e0e11] relative size-full" data-name="Sección">
      <Frame8 />
    </div>
  );
}