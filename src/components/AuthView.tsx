import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import svgPaths from "../imports/svg-tph6co75aj";
import imgUnion from "figma:asset/8d7de04731841ccfd1dc3c18c266f983519206f3.png";
import imgGoogleLogo1 from "figma:asset/8a54daf382c04d7f0feec453d1f216bf46155e68.png";
import { ForgotPasswordView } from "./ForgotPasswordView";

function StartifaiLogo() {
  return (
    <div className="h-[48.317px] w-[291.84px] mx-auto">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 49">
        <g id="Group 3466047">
          <g id="Group 255">
            <g id="Startifai">
              <path d={svgPaths.p3e3ba100} fill="white" id="Vector" />
              <path d={svgPaths.p2c803980} fill="white" id="Vector_2" />
              <path d={svgPaths.p1e808900} fill="white" id="Vector_3" />
              <path d={svgPaths.p3cd07340} fill="white" id="Vector_4" />
              <path d={svgPaths.p7e20c00} fill="white" id="Vector_5" />
              <path d={svgPaths.p3426bb00} fill="white" id="Vector_6" />
              <path d={svgPaths.p1c0b3600} fill="white" id="Vector_7" />
            </g>
            <path d={svgPaths.p2ce22980} fill="white" id="Subtract" />
            <path d={svgPaths.p1da65db0} fill="white" id="Subtract_2" />
          </g>
          <path d={svgPaths.p338bc700} fill="#FF6A00" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

interface AuthViewProps {
  onClose: () => void;
}

export function AuthView({ onClose }: AuthViewProps) {
  const [isRegistro, setIsRegistro] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleSubmit = () => {
    if (isRegistro) {
      console.log("Registro:", { email, password, acceptTerms });
    } else {
      console.log("Login:", { email, password });
    }
  };

  // Show forgot password view if requested
  if (showForgotPassword) {
    return <ForgotPasswordView onBack={() => setShowForgotPassword(false)} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-[#232323] overflow-hidden flex">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed right-8 top-8 z-50 text-white/60 hover:text-white transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Left Panel - Form Content */}
      <div className="relative z-10 w-full lg:w-[50%] xl:w-[715px] bg-[#121315] flex flex-col items-center justify-center min-h-screen py-20 px-8 overflow-y-auto">
        {/* Logo */}
        <div className="mb-[30px]">
          <StartifaiLogo />
        </div>

        {/* Welcome Text */}
        <p className="font-['Parkinsans',_sans-serif] text-[16px] text-center text-neutral-100 tracking-[1.6px] mb-[40px] max-w-[407px]">
          ¡Hola! Somos Startifai, te damos la bienvenida al universo AI.
        </p>

        {/* Tab Buttons */}
        <div className="relative w-[407px] max-w-full mb-[27px]">
          <div className="bg-[#161719] h-[54px] rounded-[60px] relative">
            <div 
              className="absolute bg-[#0e0e11] h-[54px] rounded-[60px] w-[206px] transition-transform duration-300 ease-out border border-[#4b4b4b]"
              style={{ 
                transform: isRegistro ? 'translateX(0)' : 'translateX(201px)',
              }}
            />
            <div className="relative h-full flex">
              <button
                onClick={() => setIsRegistro(true)}
                className="flex-1 font-['Roboto_Mono',_sans-serif] text-[14px] text-center text-white tracking-[1.4px] z-10"
              >
                Registro
              </button>
              <button
                onClick={() => setIsRegistro(false)}
                className="flex-1 font-['Roboto_Mono',_sans-serif] text-[14px] text-center text-white tracking-[1.4px] z-10"
              >
                Inicio sesión
              </button>
            </div>
          </div>
        </div>

        {/* Google Login Button */}
        <div className="w-[403px] max-w-full mb-[20px]">
          <button
            onClick={handleGoogleLogin}
            className="bg-[#232323] h-[57px] w-full rounded-[40px] border border-[#4b4b4b] hover:bg-[#2a2a2a] transition-colors relative flex items-center px-6"
          >
            <div className="size-[34px]">
              <img alt="Google" className="size-full object-cover" src={imgGoogleLogo1} />
            </div>
            <p className="font-['Roboto_Mono',_sans-serif] text-[14px] text-center text-white tracking-[1.4px] flex-1">
              Ingresar con Google
            </p>
          </button>
        </div>

        {/* Divider */}
        <div className="relative w-[403px] max-w-full mb-[25px] flex items-center">
          <div className="bg-[#232323] h-px flex-1" />
          <p className="font-['Roboto_Mono',_sans-serif] text-[14px] text-center text-white tracking-[1.4px] px-4">
            o
          </p>
          <div className="bg-[#232323] h-px flex-1" />
        </div>

        {/* Email Input */}
        <div className="w-[407px] max-w-full mb-[27px]">
          <p className="font-['Parkinsans',_sans-serif] text-[12px] text-neutral-100 tracking-[1.2px] mb-2">
            Correo electrónico
          </p>
          <div className="group relative">
            <div className="bg-[#232323] h-[52px] rounded-[40px] border border-[#4b4b4b] px-6 flex items-center transition-all duration-200 group-hover:bg-[#2d2d2d] has-[:focus]:border-[#fb7138] has-[:focus]:bg-[#232323]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@mail.com"
                className="bg-transparent w-full font-['Parkinsans',_sans-serif] text-[14px] text-white tracking-[1.4px] outline-none placeholder:text-[#afafaf] caret-[#fb7138]"
              />
            </div>
          </div>
        </div>

        {/* Password Input */}
        <div className="w-[407px] max-w-full mb-[15px]">
          <p className="font-['Parkinsans',_sans-serif] text-[12px] text-neutral-100 tracking-[1.2px] mb-2">
            Contraseña
          </p>
          <div className="group relative">
            <div className="bg-[#232323] h-[52px] rounded-[40px] border border-[#4b4b4b] px-6 flex items-center transition-all duration-200 group-hover:bg-[#2d2d2d] has-[:focus]:border-[#fb7138] has-[:focus]:bg-[#232323]">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="● ● ● ● ●"
                className="bg-transparent w-full font-['Parkinsans',_sans-serif] text-[14px] text-white tracking-[1.4px] outline-none placeholder:text-[#afafaf] caret-[#fb7138]"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-white hover:text-[#FF6A00] transition-colors ml-2"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Password Requirements */}
        {isRegistro && (
          <div className="w-[407px] max-w-full mb-[20px]">
            <p className="font-['Poppins',_sans-serif] text-[12px] text-[#aaaaaa] tracking-[0.12px]">
              Mínimo de 8 caracteres
            </p>
            <p className="font-['Poppins',_sans-serif] text-[12px] text-[#aaaaaa] tracking-[0.12px]">
              1 carácter especial (!"#$%&/()=?¡)
            </p>
          </div>
        )}

        {/* Terms Checkbox or Forgot Password */}
        {isRegistro ? (
          <div className="w-[407px] max-w-full mb-[30px] flex items-center">
            <div className="flex items-center justify-center p-[15px]">
              <button
                onClick={() => setAcceptTerms(!acceptTerms)}
                className="relative rounded-[2px] size-[18px] border border-white hover:border-[#FF6A00] transition-colors"
              >
                {acceptTerms && (
                  <div className="absolute inset-0 bg-[#FF6A00] rounded-[2px] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
            <p className="font-['Poppins',_sans-serif] text-[14px] text-white tracking-[0.14px]">
              <span>Acepto </span>
              <span className="text-[#fb7138] hover:underline cursor-pointer">términos y condiciones</span>
            </p>
          </div>
        ) : (
          <div className="w-[407px] max-w-full mb-[30px] flex items-center justify-center">
            <p className="font-['Poppins',_sans-serif] text-[14px] text-center text-white tracking-[0.14px]">
              <button 
                onClick={() => setShowForgotPassword(true)}
                className="text-[#fb7138] hover:underline cursor-pointer"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="w-[407px] max-w-full mb-[40px]">
          <button
            onClick={handleSubmit}
            disabled={isRegistro && !acceptTerms}
            className="bg-[#232323] h-[52px] w-full rounded-[90px] font-['Parkinsans',_sans-serif] font-medium text-[14px] text-center text-[#afafaf] tracking-[1.4px] hover:bg-[#FF6A00] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#232323] disabled:hover:text-[#afafaf]"
          >
            {isRegistro ? "Registrar cuenta" : "Ingresar"}
          </button>
        </div>
      </div>

      {/* Right Panel - Background Decorations */}
      <div className="hidden lg:block relative flex-1 bg-[#232323] overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute bg-[#fb7138] right-[20%] rounded-[40px] size-[300px] top-[15%] opacity-30" />
        <div className="absolute bg-[#ed521b] right-[45%] rounded-[40px] size-[300px] top-[45%] opacity-30" />
        <div className="absolute bg-[#121315] right-[20%] rounded-[40px] size-[300px] top-[45%]" />
        
        {/* Union Image */}
        <div className="absolute h-[1248px] right-[-100px] top-[-104px] w-[1233px] pointer-events-none opacity-20">
          <img alt="" className="block max-w-none size-full object-cover" src={imgUnion} />
        </div>
      </div>
    </div>
  );
}
