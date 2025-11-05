import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import svgPaths from "../imports/svg-bbp1nierjz";
import imgRectangle689 from "figma:asset/3e23d288f1f4ad862433d9c71cf0528790d440f4.png";
import { LoadingView } from "./LoadingView";
import { EmailVerificationView } from "./EmailVerificationView";
import { ResetPasswordView } from "./ResetPasswordView";

function StartifaiLogo() {
  return (
    <div className="h-[80.317px] w-[485.123px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 486 81">
        <g id="Group 3466047">
          <g id="Group 255">
            <g id="Startifai">
              <path d={svgPaths.p2dbb8700} fill="white" id="Vector" />
              <path d={svgPaths.p35cf7b00} fill="white" id="Vector_2" />
              <path d={svgPaths.p34ffa300} fill="white" id="Vector_3" />
              <path d={svgPaths.p33752e00} fill="white" id="Vector_4" />
              <path d={svgPaths.p27b0d500} fill="white" id="Vector_5" />
              <path d={svgPaths.p34181200} fill="white" id="Vector_6" />
              <path d={svgPaths.p1916da00} fill="white" id="Vector_7" />
            </g>
            <path d={svgPaths.p26fe9200} fill="white" id="Subtract" />
            <path d={svgPaths.p22029d80} fill="white" id="Subtract_2" />
          </g>
          <path d={svgPaths.p204ae500} fill="#FF6A00" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

interface ForgotPasswordViewProps {
  onBack: () => void;
}

export function ForgotPasswordView({ onBack }: ForgotPasswordViewProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isValidEmail = email.includes('@');

  const handleSubmit = () => {
    if (!isValidEmail) return;
    
    console.log("Enviar email de recuperación:", email);
    setIsLoading(true);
    
    // Simular envío de email
    setTimeout(() => {
      setIsLoading(false);
      setShowVerification(true);
    }, 3000);
  };

  // Show reset password view (after email verification)
  if (showResetPassword) {
    return (
      <ResetPasswordView
        onSuccess={() => {
          console.log("Contraseña restablecida con éxito");
          onBack(); // Volver al login
        }}
      />
    );
  }

  // Show verification view
  if (showVerification) {
    return (
      <EmailVerificationView
        email={email}
        onBackToLogin={onBack}
        onEmailVerified={() => setShowResetPassword(true)}
      />
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[#232323] overflow-hidden flex">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50">
          <LoadingView />
        </div>
      )}
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed left-8 top-8 z-50 text-white/60 hover:text-white transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="font-['Poppins',_sans-serif] text-[14px]">Volver</span>
      </button>

      {/* Left Panel - Logo and Background */}
      <div className="relative w-full lg:w-[50%] xl:w-[715px] bg-[#121315] flex items-center justify-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#121315] inset-0" />
          <img 
            alt="" 
            className="absolute max-w-none object-center object-cover size-full opacity-40" 
            src={imgRectangle689} 
          />
        </div>
        <div className="relative z-10">
          <StartifaiLogo />
        </div>
      </div>

      {/* Right Panel - Form Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-screen py-20 px-8">
        {/* Title */}
        <div className="w-[417px] max-w-full mb-[20px]">
          <h1 className="font-['Roboto_Mono',_sans-serif] font-bold text-[32px] text-white tracking-[0.32px]">
            Verifica tu correo
          </h1>
        </div>

        {/* Subtitle */}
        <div className="w-[417px] max-w-full mb-[15px]">
          <p className="font-['Poppins',_sans-serif] text-[16px] text-white tracking-[0.16px] leading-[32px]">
            Ingresa tu correo para validar tu identidad
          </p>
        </div>

        {/* Description */}
        <div className="w-[417px] max-w-full mb-[40px]">
          <p className="font-['Parkinsans',_sans-serif] text-[14px] text-[#afafaf] tracking-[0.14px] leading-[normal]">
            A continuación te llegara un mail para que puedas ingresar tu nueva contraseña.
          </p>
        </div>

        {/* Email Input */}
        <div className="w-[407px] max-w-full mb-[27px]">
          <p className="font-['Parkinsans',_sans-serif] text-[12px] text-neutral-100 tracking-[1.2px] mb-2">
            Correo electrónico
          </p>
          <div className="group relative">
            <div 
              className={`bg-[#232323] h-[52px] rounded-[40px] border px-6 flex items-center transition-all duration-200 ${
                isFocused 
                  ? 'border-[#fb7138]' 
                  : email 
                    ? 'border-white' 
                    : 'border-[#4b4b4b] group-hover:bg-[#2d2d2d]'
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="ejemplo@mail.com"
                className="bg-transparent w-full font-['Parkinsans',_sans-serif] font-light text-[14px] text-white tracking-[1.4px] outline-none placeholder:text-[#afafaf] caret-[#fb7138]"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-[407px] max-w-full">
          <button
            onClick={handleSubmit}
            disabled={!isValidEmail}
            className={`h-[52px] w-full rounded-[90px] font-['Parkinsans',_sans-serif] font-medium text-[14px] text-center tracking-[1.4px] transition-all duration-200 ${
              isValidEmail
                ? 'bg-[#fb7138] text-[#0e0e11] hover:bg-[#ff8050] active:bg-[#e55a20]'
                : 'bg-[#121315] text-[#afafaf] cursor-not-allowed'
            }`}
          >
            Enviar mail
          </button>
        </div>
      </div>
    </div>
  );
}
