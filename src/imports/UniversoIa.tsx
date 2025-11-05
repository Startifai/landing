import svgPaths from "./svg-4ra3uwd3q1";
import imgShape from "figma:asset/c74cb80d01150cee3e8d3e4fd67dc8df7336bc91.png";
import imgShape1 from "figma:asset/a54e89351836c37d9e714e74644c64be54d3c638.png";
import imgShape2 from "figma:asset/7a2a927f0fd9a277bd50097ddde93718bd248a9f.png";
import imgShape3 from "figma:asset/97a16c6e19f2b23e47d64b6c8a34fb99f2752852.png";
import imgShape4 from "figma:asset/e8eb981e43a89ba7b06834c299e69ba5745cd127.png";
import imgShape5 from "figma:asset/26510468dba10b2d1a8938abf6a49bd31b3dc819.png";
import imgShape6 from "figma:asset/df3ccc5ad4b5087dfc4a0bbbacca7a918ddf909e.png";
import imgShape7 from "figma:asset/d6a844f2235ba771bcd50e7ab7483559e076c4e4.png";
import imgShape8 from "figma:asset/872171e564b0b9d3a9cc029aea7383e052a73ab7.png";

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Parkinsans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[48px] text-white uppercase w-full">Explora nuestras automatizaciones y selecciona la que más se ajuste a vos</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Tenés un mes de prueba sin costo para probarlo y que nos cuentes que te parecio. `}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-center text-nowrap whitespace-pre">Onboarding de ventas</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-center text-nowrap whitespace-pre">Onboarding de citas</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff6a00] box-border content-stretch flex gap-[10px] items-center px-[30px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Onboarding de atención</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-center text-nowrap whitespace-pre">Todas</p>
    </div>
  );
}

function TabsContainer() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Tabs Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function SubContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sub Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start pl-[80px] pr-[300px] py-[80px] relative w-full">
          <TextContainer />
          <TabsContainer />
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.34784549474716187)+(var(--transform-inner-height)*0.9375518560409546)))] items-center justify-center right-[-199.69px] top-1/2 translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.34784549474716187)+(var(--transform-inner-width)*0.9375518560409546)))]" style={{ "--transform-inner-width": "425.390625", "--transform-inner-height": "446" } as React.CSSProperties}>
            <div className="flex-none rotate-[20.356deg]">
              <div className="h-[446px] relative w-[425.405px]" data-name="Abstract Design">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426 446">
                  <path d={svgPaths.p362257b0} fill="var(--fill-0, #FF6A00)" id="Abstract Design" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hablar con el agente
      </p>
      <Icon />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[30px] relative w-full">
          <p className="basis-0 font-['Parkinsans:Medium',_sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[30px] text-white uppercase">Soluciones</p>
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        E-commerce
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon1 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container />
      <Button5 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Ankle-length</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$109.99</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer1 />
      <TextContainer2 />
    </div>
  );
}

function SubContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Onboading de ventas</p>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer2 />
      <SubContainer3 />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape} />
          </div>
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Womenswear
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon2 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container3 />
      <Button6 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Slim Fit</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$54.99</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer3 />
      <TextContainer4 />
    </div>
  );
}

function SubContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Onboarding de citas</p>
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer4 />
      <SubContainer5 />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape1} />
          </div>
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Womenswear
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon3 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container6 />
      <Button7 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Flowing skirt</p>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$89.99</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer5 />
      <TextContainer6 />
    </div>
  );
}

function SubContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Onboarding de atención</p>
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer6 />
      <SubContainer7 />
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape2} />
          </div>
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[2px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer1 />
      <Frame2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hablar con el agente
      </p>
      <Icon4 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[30px] relative w-full">
          <p className="basis-0 font-['Roboto:Medium',_sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[30px] text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            Asesorias
          </p>
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Todo el servicio
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon5 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container10 />
      <Button9 />
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Any face shape</p>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$69.99</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer7 />
      <TextContainer8 />
    </div>
  );
}

function SubContainer10() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Onboarding completo</p>
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer9 />
      <SubContainer10 />
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape3} />
          </div>
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Asesoria
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon6 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container13 />
      <Button10 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">One size fits all</p>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$24.99</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer9 />
      <TextContainer10 />
    </div>
  );
}

function SubContainer12() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Identidad de marca</p>
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer11 />
      <SubContainer12 />
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape4} />
          </div>
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Asesoria
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon7 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container16 />
      <Button11 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Any face shape</p>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$79.99</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer11 />
      <TextContainer12 />
    </div>
  );
}

function SubContainer14() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Marketing</p>
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer13 />
      <SubContainer14 />
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape5} />
          </div>
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[2px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer8 />
      <Frame1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Asesoria
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon8 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container20 />
      <Button12 />
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Roomy interior</p>
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$129.99</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer13 />
      <TextContainer14 />
    </div>
  );
}

function SubContainer16() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Estrategia modelo de negocio</p>
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer15 />
      <SubContainer16 />
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape6} />
          </div>
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hand Bag
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon9 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container23 />
      <Button13 />
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Compact size</p>
    </div>
  );
}

function TextContainer16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$79.99</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer15 />
      <TextContainer16 />
    </div>
  );
}

function SubContainer18() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">UX UI Producto</p>
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer17 />
      <SubContainer18 />
    </div>
  );
}

function Card7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape7} />
          </div>
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hand Bag
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empezar
      </p>
      <Icon10 />
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]" data-name="Shape">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]" data-name="Shape">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} id="Shape" stroke="var(--stroke-0, #FF6A00)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubContainer19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Sub Container">
      <Container26 />
      <Button14 />
    </div>
  );
}

function TextContainer17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">Spacious</p>
    </div>
  );
}

function TextContainer18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #4D4D4D)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">$49.99</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <TextContainer17 />
      <TextContainer18 />
    </div>
  );
}

function SubContainer20() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">Análisis flujo automatizaciones</p>
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer19 />
      <SubContainer20 />
    </div>
  );
}

function Card8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full" src={imgShape8} />
          </div>
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[2px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function SubContainer21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container9 />
      <Container19 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute left-1/2 rounded-[20px] top-[223px] translate-x-[-50%] w-[1596px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[1596px]">
        <SubContainer />
        <SubContainer21 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#000005] h-[126px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-[#000005] h-[18px] left-[1661px] top-[126px] w-[17px]" />
      <div className="absolute bg-[#000005] h-[18px] left-[1813px] top-[126px] w-[17px]" />
      <div className="absolute bg-[#000005] h-[18px] left-[398px] top-[126px] w-[17px]" />
      <div className="absolute bg-[#000005] left-[1594px] size-[18px] top-[126px]" />
      <div className="absolute bg-[#000005] left-[1537px] size-[17px] top-[144px]" />
      <div className="absolute bg-[#000005] left-[1465px] size-[18px] top-[126px]" />
      <div className="absolute bg-[#000005] left-[1203px] size-[18px] top-[126px]" />
      <div className="absolute bg-[#000005] left-[756px] size-[21px] top-[126px]" />
      <div className="absolute bg-[#000005] left-[712px] size-[18px] top-[126px]" />
      <div className="absolute bg-[#000005] left-[232px] size-[18px] top-[126px]" />
      <div className="absolute bg-[#000005] left-[69px] size-[18px] top-[147px]" />
      <div className="absolute bg-[#000005] left-[48px] size-[21px] top-[126px]" />
      <div className="absolute bg-[#000005] h-[17px] left-[1221px] top-[109px] w-[16px]" />
      <div className="absolute bg-[#000005] left-[585px] size-[17px] top-[109px]" />
      <div className="absolute bg-[#000005] h-[17px] left-[415px] top-[109px] w-[16px]" />
      <div className="absolute bg-[#000005] h-[18px] left-[1520px] top-[126px] w-[17px]" />
      <div className="absolute bg-[#000005] h-[17px] left-[1336px] top-[126px] w-[18px]" />
      <div className="absolute bg-[#000005] h-[17px] left-[1354px] top-[143px] w-[18px]" />
      <div className="absolute bg-[#000005] h-[17px] left-[380px] top-[143px] w-[18px]" />
      <div className="absolute bg-[#000005] h-[17px] left-[777px] top-[147px] w-[18px]" />
      <div className="absolute bg-[#000005] h-[18px] left-[977px] top-[126px] w-[17px]" />
      <div className="absolute bg-[#000005] left-[1629px] size-[17px] top-[109px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[31.622px] left-[56px] top-[47px] w-[191px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191 32">
        <g id="Group 3466047">
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

function AcentMdButton() {
  return (
    <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[10px] h-[45px] items-center justify-center left-[1633px] px-[24px] py-[12px] rounded-[90px] top-[36px] w-[119px]" data-name="Acent MD Button">
      <div aria-hidden="true" className="absolute border border-[#414147] border-solid inset-0 pointer-events-none rounded-[90px]" />
      <p className="font-['Parkinsans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.28px] whitespace-pre">Ingresar</p>
    </div>
  );
}

export default function UniversoIa() {
  return (
    <div className="bg-[#0e0e11] relative size-full" data-name="Universo IA">
      <Group />
      <Group1 />
      <div className="absolute bg-[rgba(255,255,255,0.1)] h-[48px] left-[769px] rounded-[60px] top-[33px] w-[416px]" />
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[964px] rounded-[60px] top-[33px] w-[223px]">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[60px] shadow-[0px_4px_34px_0px_rgba(255,255,255,0.15)]" />
      </div>
      <p className="absolute font-['Parkinsans:Regular',_sans-serif] font-normal leading-[normal] left-[872.5px] text-[16px] text-center text-white top-[46px] translate-x-[-50%] w-[183px]">Nosotros</p>
      <p className="absolute font-['Parkinsans:Regular',_sans-serif] font-normal leading-[normal] left-[1068.5px] text-[16px] text-center text-white top-[46px] translate-x-[-50%] w-[183px]">Universo IA</p>
      <Menu />
      <AcentMdButton />
      <Container30 />
    </div>
  );
}