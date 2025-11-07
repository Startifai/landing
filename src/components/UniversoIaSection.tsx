import { useState } from "react";
import svgPaths from "../imports/svg-4ra3uwd3q1";
import imgShape from "figma:asset/c74cb80d01150cee3e8d3e4fd67dc8df7336bc91.png";
import imgShape1 from "figma:asset/a54e89351836c37d9e714e74644c64be54d3c638.png";
import imgShape2 from "figma:asset/7a2a927f0fd9a277bd50097ddde93718bd248a9f.png";
import imgShape3 from "figma:asset/97a16c6e19f2b23e47d64b6c8a34fb99f2752852.png";
import imgShape4 from "figma:asset/e8eb981e43a89ba7b06834c299e69ba5745cd127.png";
import imgShape5 from "figma:asset/26510468dba10b2d1a8938abf6a49bd31b3dc819.png";
import imgShape6 from "figma:asset/df3ccc5ad4b5087dfc4a0bbbacca7a918ddf909e.png";
import imgShape7 from "figma:asset/d6a844f2235ba771bcd50e7ab7483559e076c4e4.png";
import imgShape8 from "figma:asset/872171e564b0b9d3a9cc029aea7383e052a73ab7.png";

// Componente de botón con decoraciones
function ActionButton({ text, href = "#" }: { text: string; href?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    if (text === "Empezar") {
      e.preventDefault();
      window.location.href = "https://www.app.startifai.com";
    }
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className="bg-[#1f1f1f] box-border content-stretch flex gap-[4px] items-start px-[24px] py-[18px] relative rounded-[12px] shrink-0 hover:bg-[#2a2a2a] transition-colors group cursor-pointer"
    >
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-700 inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="white" fillRule="evenodd" />
        </svg>
      </div>
      {/* Decorative corners */}
      <div className="absolute h-[16.499px] left-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p98bbde0} stroke="#FF6A00" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.499px] items-center justify-center right-[0.5px] top-[0.5px] w-[16.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p98bbde0} stroke="#FF6A00" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[16.499px] relative w-[16.5px]">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} stroke="#FF6A00" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5px] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "16.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[16.499px] relative w-[16.5px]">
            <div className="absolute bottom-0 left-[-3.03%] right-0 top-[-3.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p3cef1900} stroke="#FF6A00" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

// Tarjeta de producto/servicio
function ServiceCard({ 
  title, 
  category, 
  price, 
  fit, 
  image 
}: { 
  title: string; 
  category: string; 
  price: string; 
  fit: string; 
  image: string;
}) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-dashed border-neutral-800 inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[30px] relative w-full">
          <div className="h-[386px] relative rounded-tl-[50px] rounded-tr-[50px] shrink-0 w-full overflow-hidden group">
            <img 
              alt={title} 
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[50px] rounded-tr-[50px] size-full transition-transform duration-500 group-hover:scale-110" 
              src={image} 
            />
          </div>
          
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[10px] relative rounded-[100px] shrink-0">
                <div aria-hidden="true" className="absolute border border-dashed border-neutral-800 inset-0 pointer-events-none rounded-[100px]" />
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {category}
                </p>
              </div>
              <ActionButton text="Empezar" />
            </div>
            
            <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
              <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">{title}</p>
              
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Fit</p>
                  <div className="relative shrink-0 size-[4px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                      <circle cx="2" cy="2" fill="#4D4D4D" r="2" />
                    </svg>
                  </div>
                  <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">{fit}</p>
                </div>
                
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-nowrap whitespace-pre">Price</p>
                  <div className="relative shrink-0 size-[4px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                      <circle cx="2" cy="2" fill="#4D4D4D" r="2" />
                    </svg>
                  </div>
                  <p className="font-['Roboto_Mono:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#cccccc] text-[20px] text-nowrap whitespace-pre">{price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UniversoIaSection() {
  const [activeTab, setActiveTab] = useState<string>("todas");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionsServices = [
    { title: "Onboarding de ventas", category: "E-commerce", price: "$109.99", fit: "Ankle-length", image: imgShape },
    { title: "Onboarding de citas", category: "Womenswear", price: "$54.99", fit: "Slim Fit", image: imgShape1 },
    { title: "Onboarding de atención", category: "Womenswear", price: "$89.99", fit: "Flowing skirt", image: imgShape2 },
  ];

  const advisoryServices = [
    { title: "Onboarding completo", category: "Todo el servicio", price: "$69.99", fit: "Any face shape", image: imgShape3 },
    { title: "Identidad de marca", category: "Asesoria", price: "$24.99", fit: "One size fits all", image: imgShape4 },
    { title: "Marketing", category: "Asesoria", price: "$79.99", fit: "Any face shape", image: imgShape5 },
  ];

  const otherServices = [
    { title: "Estrategia modelo de negocio", category: "Asesoria", price: "$129.99", fit: "Roomy interior", image: imgShape6 },
    { title: "UX UI Producto", category: "Hand Bag", price: "$79.99", fit: "Compact size", image: imgShape7 },
    { title: "Análisis flujo automatizaciones", category: "Hand Bag", price: "$49.99", fit: "Spacious", image: imgShape8 },
  ];

  return (
    <div className="relative w-full bg-[#0e0e11] py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-[#000005] h-[18px] left-[1661px] top-[126px] w-[17px]" />
        <div className="absolute bg-[#000005] h-[18px] left-[1813px] top-[126px] w-[17px]" />
        <div className="absolute bg-[#000005] h-[18px] left-[398px] top-[126px] w-[17px]" />
        <div className="absolute bg-[#000005] left-[1594px] size-[18px] top-[126px]" />
        <div className="absolute bg-[#000005] left-[1537px] size-[17px] top-[144px]" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1596px] mx-auto px-4">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] border-2 border-dashed border-neutral-800">
          {/* Header Section */}
          <div className="relative shrink-0 w-full border-b-2 border-dashed border-neutral-800">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col gap-[50px] items-start pl-[80px] pr-[300px] py-[80px] relative w-full">
                <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
                  <p className="font-['Parkinsans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[48px] text-white uppercase w-full">
                    Explora nuestras automatizaciones y selecciona la que más se ajuste a vos
                  </p>
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Tenés un mes de prueba sin costo para probarlo y que nos cuentes que te pareció.
                  </p>
                </div>
                
                {/* Tabs */}
                <div className="content-stretch flex gap-[14px] items-center relative shrink-0 flex-wrap">
                  <div 
                    onClick={() => handleTabClick("ventas")}
                    className={`box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0 transition-colors cursor-pointer ${
                      activeTab === "ventas" ? "bg-[#ff6a00]" : "hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {activeTab !== "ventas" && <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />}
                    <p className={`font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-center text-nowrap whitespace-pre ${
                      activeTab === "ventas" ? "text-white" : "text-[#b3b3b2]"
                    }`}>Onboarding de ventas</p>
                  </div>
                  <div 
                    onClick={() => handleTabClick("citas")}
                    className={`box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0 transition-colors cursor-pointer ${
                      activeTab === "citas" ? "bg-[#ff6a00]" : "hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {activeTab !== "citas" && <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />}
                    <p className={`font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-center text-nowrap whitespace-pre ${
                      activeTab === "citas" ? "text-white" : "text-[#b3b3b2]"
                    }`}>Onboarding de citas</p>
                  </div>
                  <div 
                    onClick={() => handleTabClick("atencion")}
                    className={`box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0 transition-colors cursor-pointer ${
                      activeTab === "atencion" ? "bg-[#ff6a00]" : "hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {activeTab !== "atencion" && <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />}
                    <p className={`font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-center text-nowrap whitespace-pre ${
                      activeTab === "atencion" ? "text-white" : "text-[#b3b3b2]"
                    }`}>Onboarding de atención</p>
                  </div>
                  <div 
                    onClick={() => handleTabClick("todas")}
                    className={`box-border content-stretch flex gap-[10px] items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0 transition-colors cursor-pointer ${
                      activeTab === "todas" ? "bg-[#ff6a00]" : "hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {activeTab !== "todas" && <div aria-hidden="true" className="absolute border border-[#333333] border-dashed inset-0 pointer-events-none rounded-[12px]" />}
                    <p className={`font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-center text-nowrap whitespace-pre ${
                      activeTab === "todas" ? "text-white" : "text-[#b3b3b2]"
                    }`}>Todas</p>
                  </div>
                </div>

                {/* Abstract Design */}
                <div className="absolute flex h-[calc(1px*((425.390625*0.34784549474716187)+(446*0.9375518560409546)))] items-center justify-center right-[-199.69px] top-1/2 translate-y-[-50%] w-[calc(1px*((446*0.34784549474716187)+(425.390625*0.9375518560409546)))]">
                  <div className="flex-none rotate-[20.356deg]">
                    <div className="h-[446px] relative w-[425.405px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426 446">
                        <path d={svgPaths.p362257b0} fill="#FF6A00" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Soluciones Section */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full border-b-2 border-dashed border-neutral-800">
                <div className="box-border content-stretch flex items-center justify-between p-[30px] relative w-full">
                  <p className="basis-0 font-['Parkinsans:Medium',_sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[30px] text-white uppercase">Soluciones</p>
                  <ActionButton text="Hablar con el agente" />
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex items-start relative shrink-0 w-full border-b-2 border-dashed border-neutral-800">
              {solutionsServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Asesorías Section */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full border-b-2 border-dashed border-neutral-800">
                <div className="box-border content-stretch flex items-center justify-between p-[30px] relative w-full">
                  <p className="basis-0 font-['Roboto:Medium',_sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[30px] text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Asesorias
                  </p>
                  <ActionButton text="Hablar con el agente" />
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex items-start relative shrink-0 w-full border-b-2 border-dashed border-neutral-800">
              {advisoryServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Otros Servicios Section */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              {otherServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
