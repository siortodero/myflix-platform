import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import cns from "classnames";
import { FC } from "react";

export interface IconProps extends FontAwesomeIconProps {}

const Icon: FC<IconProps> = ({ icon, className, ...rest }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={cns(["text-white", className])}
      {...rest}
    />
  );
};

export default Icon;
