import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import svgPaths from "../imports/svg-zeewsl76go";
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

interface ResetPasswordViewProps {
  onSuccess: () => void;
}

export function ResetPasswordView({ onSuccess }: ResetPasswordViewProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Validaciones
  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[!"#$%&/()=?¡]/.test(password);
  const isValid = hasMinLength && hasSpecialChar;

  const handleSubmit = () => {
    if (!isValid) return;
    
    console.log("Nueva contraseña guardada");
    onSuccess();
  };

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
            Ingresa tu nueva contraseña
          </h1>
        </div>

        {/* Description */}
        <div className="w-[417px] max-w-full mb-[15px]">
          <p className="font-['Parkinsans',_sans-serif] text-[16px] text-white tracking-[0.16px] leading-[32px]">
            Ingresa tu nueva contraseña
          </p>
        </div>

        {/* Note */}
        <div className="w-[417px] max-w-full mb-[40px]">
          <p className="font-['Parkinsans',_sans-serif] text-[14px] text-[#afafaf] tracking-[0.14px] leading-[normal]">
            Verifica que la contraseña cumpla con los requerimientos de aceptación para poder continuar
          </p>
        </div>

        {/* Password Input */}
        <div className="w-[407px] max-w-full mb-[20px]">
          <p className="font-['Parkinsans',_sans-serif] text-[12px] text-neutral-100 tracking-[1.2px] mb-2">
            Contraseña
          </p>
          <div className="group relative">
            <div
              className={`bg-[#232323] h-[52px] rounded-[40px] border px-6 flex items-center transition-all duration-200 ${
                isFocused
                  ? "border-[#fb7138]"
                  : password
                  ? "border-white"
                  : "border-[#4b4b4b] group-hover:bg-[#2d2d2d]"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="● ● ● ● ●"
                className="bg-transparent flex-1 font-['Parkinsans',_sans-serif] font-light text-[14px] text-white tracking-[1.4px] outline-none placeholder:text-[#afafaf] caret-[#fb7138]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-3 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Validation Requirements */}
        <div className="w-[407px] max-w-full mb-[40px] space-y-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${
                hasMinLength
                  ? "bg-[#fb7138] border-[#fb7138]"
                  : "border-[#aaaaaa]"
              }`}
            >
              {hasMinLength && <Check className="w-3 h-3 text-white" />}
            </div>
            <p
              className={`font-['Parkinsans',_sans-serif] text-[12px] tracking-[0.12px] transition-colors duration-200 ${
                hasMinLength ? "text-[#fb7138]" : "text-[#aaaaaa]"
              }`}
            >
              Mínimo de 8 caracteres
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${
                hasSpecialChar
                  ? "bg-[#fb7138] border-[#fb7138]"
                  : "border-[#aaaaaa]"
              }`}
            >
              {hasSpecialChar && <Check className="w-3 h-3 text-white" />}
            </div>
            <p
              className={`font-['Parkinsans',_sans-serif] text-[12px] tracking-[0.12px] transition-colors duration-200 ${
                hasSpecialChar ? "text-[#fb7138]" : "text-[#aaaaaa]"
              }`}
            >
              1 carácter especial (!"#$%&/()=?¡)
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-[407px] max-w-full">
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`h-[52px] w-full rounded-[90px] font-['Parkinsans',_sans-serif] font-medium text-[14px] text-center tracking-[1.4px] transition-all duration-200 ${
              isValid
                ? "bg-[#fb7138] text-[#0e0e11] hover:bg-[#ff8050] active:bg-[#e55a20]"
                : "bg-[#121315] text-[#afafaf] cursor-not-allowed"
            }`}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
