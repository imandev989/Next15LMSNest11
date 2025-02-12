import { Loading } from "../loading";
import { ButtonProps } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<string, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<string, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDiabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "sending data ....",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`btn-${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );

  return (
    <button type={type} disabled={isDiabled} {...rest} className={classes}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
