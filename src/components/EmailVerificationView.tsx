import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-bixbdy2oyv";
import imgRectangle689 from "figma:asset/3e23d288f1f4ad862433d9c71cf0528790d440f4.png";

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

interface EmailVerificationViewProps {
  email: string;
  onBackToLogin: () => void;
  onEmailVerified?: () => void;
}

export function EmailVerificationView({ email, onBackToLogin, onEmailVerified }: EmailVerificationViewProps) {
  const [countdown, setCountdown] = useState(108); // 1:48 in seconds
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    if (canResend) {
      console.log("Reenviar email");
      setCountdown(108);
      setCanResend(false);
    }
  };

  // Calculate progress percentage (0 to 100)
  const progressPercentage = ((108 - countdown) / 108) * 100;

  return (
    <div className="relative w-full min-h-screen bg-[#232323] overflow-hidden flex">
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

      {/* Right Panel - Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-screen py-20 px-8">
        {/* Title */}
        <div className="w-[417px] max-w-full mb-[20px]">
          <h1 className="font-['Roboto_Mono',_sans-serif] font-bold text-[32px] text-white tracking-[0.32px]">
            Verifica tu correo
          </h1>
        </div>

        {/* Description */}
        <div className="w-[417px] max-w-full mb-[15px]">
          <p className="font-['Parkinsans',_sans-serif] text-[18px] text-white tracking-[0.18px] leading-[32px]">
            <span>Revisa </span>
            <span className="font-['Parkinsans',_sans-serif] font-semibold">{email}</span>
            <span> para verificar tu cuenta y continuar con el registro</span>
          </p>
        </div>

        {/* Note */}
        <div className="w-[417px] max-w-full mb-[40px]">
          <p className="font-['Parkinsans',_sans-serif] text-[14px] text-[#afafaf] tracking-[0.14px] leading-[normal]">
            Recuerda revisar la seccion de correo no deseado/spam.
          </p>
        </div>

        {/* Resend Button */}
        <div className="w-[417px] max-w-full mb-[20px]">
          <div className="relative">
            <button
              onClick={handleResend}
              disabled={!canResend}
              className="relative w-full h-[52px] rounded-[130px] border border-[#fb7138] font-['Parkinsans',_sans-serif] text-[16px] text-white tracking-[0.16px] hover:bg-[rgba(251,113,56,0.1)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center"
            >
              {/* Progress bar background */}
              {!canResend && (
                <div 
                  className="absolute inset-0 bg-[rgba(251,113,56,0.15)] rounded-[130px] transition-all duration-1000 ease-linear origin-left"
                  style={{ 
                    width: `${progressPercentage}%`,
                  }}
                />
              )}
              
              {/* Button text */}
              <span className="relative z-10">
                {canResend ? "Reenviar mail" : `Reenviar mail en ${formatTime(countdown)}`}
              </span>
            </button>
          </div>
        </div>

        {/* Simulated Email Link - For Demo */}
        {onEmailVerified && (
          <div className="w-[417px] max-w-full mb-[20px]">
            <div className="bg-[#121315] border border-[#fb7138]/30 rounded-[12px] p-4">
              <p className="font-['Parkinsans',_sans-serif] text-[12px] text-[#afafaf] mb-3 text-center">
                Para efectos de demostración, simula hacer clic en el botón del email:
              </p>
              <button
                onClick={onEmailVerified}
                className="w-full h-[44px] rounded-[60px] bg-[#fb7138] font-['Parkinsans',_sans-serif] text-[14px] text-[#0e0e11] tracking-[0.14px] hover:bg-[#ff8050] transition-colors"
              >
                Validar cuenta
              </button>
            </div>
          </div>
        )}

        {/* Back to Login */}
        <div className="w-[417px] max-w-full">
          <button
            onClick={onBackToLogin}
            className="w-full py-3 font-['Parkinsans',_sans-serif] text-[16px] text-[#fb7138] text-center tracking-[0.16px] hover:underline transition-all"
          >
            Ir a iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
