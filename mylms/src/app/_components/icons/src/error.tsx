"use client"; // Add this at the top

import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIcon) {
  // Assuming this is the intended component name; likely a typo in your error message
  return (
    <BaseIcon {...props}>
      {/* SVG content for the error icon */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </BaseIcon>
  );
}

// import BaseIcon from "@/app/_components/icons/base-icon";
// import { SvgIcon } from "@/app/_components/icons/icon.types";

// export default function SvgIcon(props:SvgIcon) {
//   return (
//     <BaseIcon {...props}>
//       <path fillRule="evenodd" clipRule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"/><path d="M14.83 9.16992L9.17001 14.8299"/><path d="M14.83 14.8299L9.17001 9.16992"/>
//     </BaseIcon>
//   );
// }
