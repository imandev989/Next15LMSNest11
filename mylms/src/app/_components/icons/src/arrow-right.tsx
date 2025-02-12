import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M19.99 11.9805H5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.987 5.98828L19.998 12.0003L13.987 18.0123" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}