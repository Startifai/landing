/**
 * EmailTemplateReference - Componente visual de referencia del email
 * Este componente muestra cómo se vería el email que recibe el usuario
 * En producción, este email sería generado por el backend y enviado vía SMTP
 */

import svgPaths from "../imports/svg-5fo0kvy9mm";
import imgLinkedInCover31 from "figma:asset/c552b080440ff621f0ae18ae4dc6cb1214c12f25.png";

function StartifaiLogo() {
  return (
    <div className="h-[58.277px] w-[352px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 59">
        <g id="Group 3466047">
          <g id="Group 255">
            <g id="Startifai">
              <path d={svgPaths.p328c1500} fill="white" id="Vector" />
              <path d={svgPaths.p335d4100} fill="white" id="Vector_2" />
              <path d={svgPaths.p344f89f0} fill="white" id="Vector_3" />
              <path d={svgPaths.p4ad0800} fill="white" id="Vector_4" />
              <path d={svgPaths.p1fab2f80} fill="white" id="Vector_5" />
              <path d={svgPaths.p16c40a80} fill="white" id="Vector_6" />
              <path d={svgPaths.pa4c0b00} fill="white" id="Vector_7" />
            </g>
            <path d={svgPaths.p288b4e00} fill="white" id="Subtract" />
            <path d={svgPaths.p14d50100} fill="white" id="Subtract_2" />
          </g>
          <path d={svgPaths.p2cd9a380} fill="#FF6A00" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

export function EmailTemplateReference() {
  return (
    <div className="bg-white w-full max-w-[600px] mx-auto p-8 font-['Parkinsans',_sans-serif]">
      {/* Header with cover image */}
      <div className="w-full h-[188px] mb-8 overflow-hidden rounded-lg">
        <img
          alt=""
          className="w-full h-full object-cover"
          src={imgLinkedInCover31}
        />
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <StartifaiLogo />
      </div>

      {/* Email Content */}
      <div className="text-center space-y-6">
        {/* Welcome Title */}
        <h1 className="font-['Roboto_Mono',_sans-serif] font-bold text-[24px] text-[#2b2c2c] tracking-[0.24px]">
          ¡Te damos la bienvenida a Startifai!
        </h1>

        {/* Main Text */}
        <p className="font-['Parkinsans',_sans-serif] text-[16px] text-[#2b2c2c] tracking-[0.16px] leading-relaxed">
          A continuación, necesitarás validar tu cuenta haciendo clic en el botón. 
          Serás redirigido a la aplicación para completar los últimos detalles de tu registro.
        </p>

        {/* Link section */}
        <p className="font-['Parkinsans',_sans-serif] font-semibold text-[16px] text-[#2b2c2c] tracking-[0.16px] mt-8">
          Link de validación de cuenta:
        </p>

        {/* CTA Button */}
        <div className="flex justify-center my-8">
          <button className="bg-[#ffa36a] hover:bg-[#ff8e4d] transition-colors px-8 py-3 rounded-[60px] font-['Parkinsans',_sans-serif] font-semibold text-[16px] text-[#1e1e1e] tracking-[0.16px]">
            Validar cuenta
          </button>
        </div>

        {/* Closing Text */}
        <p className="font-['Parkinsans',_sans-serif] text-[16px] text-[#2b2c2c] tracking-[0.16px] leading-relaxed mt-8">
          Estamos felices que seas parte de esta familia Megapixer, termina el proceso 
          que tenemos mucho para compartir con vos...
        </p>

        {/* Signature */}
        <div className="mt-8 text-left">
          <p className="font-['Parkinsans',_sans-serif] text-[16px] text-[#2b2c2c] tracking-[0.16px] leading-[32px]">
            ¡Te esperamos!
          </p>
          <p className="font-['Parkinsans',_sans-serif] text-[16px] text-[#2b2c2c] tracking-[0.16px] leading-[32px]">
            <span>Equipo </span>
            <span className="font-semibold">Startifai</span>
          </p>
        </div>
      </div>
    </div>
  );
}
