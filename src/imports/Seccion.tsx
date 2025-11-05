import imgCapturaDePantalla20251027ALaS2156581 from "figma:asset/705998d3e86b0fdada7934135d611a2e3f909d9f.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[913px] left-0 top-0 w-[1622px]" data-name="Captura de Pantalla 2025-10-27 a la(s) 21.56.58 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20251027ALaS2156581} />
      </div>
      <div className="absolute h-[769px] left-[154px] top-[72px] w-[657px]">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay className="absolute h-[106.24%] left-[-0.77%] max-w-none top-0 w-[101.54%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/971029717db917be4e4738fdfd8b39a8f672613d" />
          </video>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

export default function Seccion() {
  return (
    <div className="relative size-full" data-name="Sección">
      <Group1 />
    </div>
  );
}