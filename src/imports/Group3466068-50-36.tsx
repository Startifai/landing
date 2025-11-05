import imgPngtreeStar3DIconRenderPngImage61722451 from "figma:asset/a6d894576e36649a9e753368ea23ca095eab9b62.png";

function Frame() {
  return (
    <div className="absolute h-[112.357px] left-0 top-[165px] w-[87.357px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 113">
        <g id="Frame 632668">
          <circle cx="20.4981" cy="20.4981" fill="var(--fill-0, #271311)" id="Ellipse 1149" r="14.5" transform="rotate(43.3975 20.4981 20.4981)" />
          <circle cx="27.7442" cy="41.295" fill="var(--fill-0, #431C13)" id="Ellipse 1148" r="14.5" transform="rotate(43.3975 27.7442 41.295)" />
          <circle cx="38.8223" cy="60.9492" fill="var(--fill-0, #7C2E16)" id="Ellipse 1147" r="14.5" transform="rotate(43.3975 38.8223 60.9492)" />
          <circle cx="52.4886" cy="78.7884" fill="var(--fill-0, #ED521B)" id="Ellipse 1145" r="14.5" transform="rotate(13.3975 52.4886 78.7884)" />
          <circle cx="69.3187" cy="94.3188" fill="var(--fill-0, #FB7138)" id="Ellipse 1143" r="14.5" transform="rotate(-16.6025 69.3187 94.3188)" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[106.587px] left-[210.63px] top-0 w-[96.959px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 107">
        <g id="Frame 632669">
          <circle cx="76.6898" cy="86.3173" fill="var(--fill-0, #271311)" id="Ellipse 1150" r="14.5" transform="rotate(-143.713 76.6898 86.3173)" />
          <circle cx="66.928" cy="66.5761" fill="var(--fill-0, #431C13)" id="Ellipse 1151" r="14.5" transform="rotate(-143.713 66.928 66.5761)" />
          <circle cx="53.5023" cy="48.4443" fill="var(--fill-0, #7C2E16)" id="Ellipse 1152" r="14.5" transform="rotate(-143.713 53.5023 48.4443)" />
          <circle cx="37.7329" cy="32.4347" fill="var(--fill-0, #ED521B)" id="Ellipse 1153" r="14.5" transform="rotate(-173.713 37.7329 32.4347)" />
          <circle cx="19.107" cy="19.107" fill="var(--fill-0, #FB7138)" id="Ellipse 1154" r="14.5" transform="rotate(156.287 19.107 19.107)" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[277.355px] left-0 top-0 w-[307.584px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute left-[58.62px] size-[207px] top-[48px]" data-name="pngtree-star-3d-icon-render-png-image_6172245 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPngtreeStar3DIconRenderPngImage61722451} />
      </div>
      <Frame2 />
    </div>
  );
}