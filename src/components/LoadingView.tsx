import imgStarIcon from "figma:asset/aca181e60c5096f33afd48d4d2f2daa36b82d84e.png";

export function LoadingView() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Backdrop blur overlay - translucent dimmer */}
      <div className="absolute inset-0 backdrop-blur-[4px] bg-[rgba(0,0,0,0.6)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Animated Logo with Circles */}
        <div className="relative w-[324px] h-[303px] mb-12">
          {/* Central Star Icon - Fixed */}
          <div className="absolute left-[58.62px] top-[48px] size-[207px] z-10">
            <img
              alt=""
              className="w-full h-full object-contain"
              src={imgStarIcon}
            />
          </div>

          {/* Rotating circles container */}
          <div className="absolute left-0 top-0 w-[307.584px] h-[277.355px] animate-spin" style={{ animationDuration: '4s' }}>
            {/* Left side circles */}
            <div className="absolute h-[112.357px] left-0 top-[165px] w-[87.357px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 113">
                <g id="Frame 632668">
                  <circle cx="20.4981" cy="20.4981" fill="#271311" id="Ellipse 1149" r="14.5" transform="rotate(43.3975 20.4981 20.4981)" />
                  <circle cx="27.7442" cy="41.295" fill="#431C13" id="Ellipse 1148" r="14.5" transform="rotate(43.3975 27.7442 41.295)" />
                  <circle cx="38.8223" cy="60.9492" fill="#7C2E16" id="Ellipse 1147" r="14.5" transform="rotate(43.3975 38.8223 60.9492)" />
                  <circle cx="52.4886" cy="78.7884" fill="#ED521B" id="Ellipse 1145" r="14.5" transform="rotate(13.3975 52.4886 78.7884)" />
                  <circle cx="69.3187" cy="94.3188" fill="#FB7138" id="Ellipse 1143" r="14.5" transform="rotate(-16.6025 69.3187 94.3188)" />
                </g>
              </svg>
            </div>

            {/* Right side circles */}
            <div className="absolute h-[106.587px] left-[210.63px] top-0 w-[96.959px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 107">
                <g id="Frame 632669">
                  <circle cx="76.6898" cy="86.3173" fill="#271311" id="Ellipse 1150" r="14.5" transform="rotate(-143.713 76.6898 86.3173)" />
                  <circle cx="66.928" cy="66.5761" fill="#431C13" id="Ellipse 1151" r="14.5" transform="rotate(-143.713 66.928 66.5761)" />
                  <circle cx="53.5023" cy="48.4443" fill="#7C2E16" id="Ellipse 1152" r="14.5" transform="rotate(-143.713 53.5023 48.4443)" />
                  <circle cx="37.7329" cy="32.4347" fill="#ED521B" id="Ellipse 1153" r="14.5" transform="rotate(-173.713 37.7329 32.4347)" />
                  <circle cx="19.107" cy="19.107" fill="#FB7138" id="Ellipse 1154" r="14.5" transform="rotate(156.287 19.107 19.107)" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-['Roboto_Mono',_sans-serif] font-bold text-[32px] text-center text-white tracking-[0.32px] mb-4 max-w-[499px]">
          Te estamos enviando el correo electrónico
        </h1>

        {/* Subtitle */}
        <p className="font-['Parkinsans',_sans-serif] text-[18px] text-center text-white tracking-[0.18px] leading-[32px]">
          Verifica tu correo
        </p>
      </div>
    </div>
  );
}
