import svgPaths from "./svg-zn7dfo4mnq";
import imgUnsplashAwc6FMwmcf4 from "figma:asset/c550be237aedfaf5b0c545ec0b392d84c812714c.png";

export default function Visual() {
  return (
    <div className="relative size-full" data-name="Visual">
      <div className="absolute bottom-0 h-[calc(100%+31px)] left-0 pointer-events-none top-[-31px]">
        <div className="h-[1671px] pointer-events-auto sticky top-0 w-[1929px]" data-name="unsplash:awc6FMwmcf4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[173.16%] left-0 max-w-none top-[-28.05%] w-full" src={imgUnsplashAwc6FMwmcf4} />
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[80px] left-0 top-[-31px] w-[1929px]" />
      <div className="absolute bg-white h-[239px] left-0 top-[1401px] w-[1929px]" />
      <div className="absolute h-[751px] left-0 top-[771px] w-[1929px]">
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