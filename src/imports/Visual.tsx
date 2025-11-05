import svgPaths from "./svg-4mixfy0ke5";
import imgUnsplashAwc6FMwmcf4 from "figma:asset/c550be237aedfaf5b0c545ec0b392d84c812714c.png";

export default function Visual() {
  return (
    <div className="relative size-full" data-name="Visual">
      <div className="absolute bottom-0 left-0 pointer-events-none top-0">
        <div className="h-[2411px] pointer-events-auto sticky top-0 w-[1929px]" data-name="unsplash:awc6FMwmcf4">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashAwc6FMwmcf4} />
        </div>
      </div>
      <div className="absolute bg-white h-[535px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-white h-[524px] left-0 top-[1887px] w-[1929px]" />
      <div className="absolute h-[751px] left-0 top-[1257px] w-[1929px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1929 751">
          <foreignObject height="841" width="2019" x="-45" y="-45">
            <div style={{ backdropFilter: "blur(22.5px)", clipPath: "url(#bgblur_0_28_114_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.pfbe00} data-figma-bg-blur-radius="45" fill="url(#paint0_linear_28_114)" id="Rectangle 632" />
          <defs>
            <clipPath id="bgblur_0_28_114_clip_path" transform="translate(45 45)">
              <path d={svgPaths.pfbe00} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_114" x1="964.5" x2="964.5" y1="0" y2="751">
              <stop stopColor="#1E1E1E" stopOpacity="0" />
              <stop offset="1" stopColor="#1E1E1E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}