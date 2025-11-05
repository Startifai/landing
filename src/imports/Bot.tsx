import img32 from "figma:asset/1752197cb4ff8c65c2579b26bfaa5bbab30fb473.png";
import { img31 } from "./svg-f1i2w";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute flex h-[914.738px] items-center justify-center left-[-66.62px] top-[-69.74px] w-[731.791px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[914.738px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.988px_69.239px] mask-size-[665.806px_846px] relative w-[731.791px]" data-name="3 1" style={{ maskImage: `url('${img31}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img32} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[914.738px] items-center justify-center left-[-66.62px] top-[-69.74px] w-[731.791px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[914.738px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.988px_69.238px] mask-size-[665.806px_846px] relative w-[731.791px]" data-name="3 2" style={{ maskImage: `url('${img31}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bot() {
  return (
    <div className="relative size-full" data-name="Bot">
      <MaskGroup />
    </div>
  );
}