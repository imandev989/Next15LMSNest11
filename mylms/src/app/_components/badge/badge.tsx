import classNames from "classnames";
import { BadgePorps } from "./badge.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};

export const Badge: React.FC<BadgePorps> = ({
  variant,
  className,
  children,
  size = "tiny",
}: BadgePorps) => {
  const classes = classNames("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return <span className={classes}>{children}</span>;
};
