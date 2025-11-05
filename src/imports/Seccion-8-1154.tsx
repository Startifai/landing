function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[913px] left-0 top-0 w-[843px]" data-name="Captura de Pantalla 2025-10-27 a la(s) 21.56.58 1" />
      <div className="absolute h-[769px] left-[93px] top-[72px] w-[657px]">
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