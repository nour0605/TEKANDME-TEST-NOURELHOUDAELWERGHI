import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", square: "rounded-none" };
const variants = {
  outline: {
    blue_gray_900_gray_800:
      "bg-gradient  lime_800_yellow_700_border outline outline-[2px]",
    blue_gray_900_1e:
      "border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x text-blue_gray-900",
  },
  fill: {
    gray_50_1e: "bg-gray-50_1e",
    gray_50: "bg-gray-50",
    blue_gray_900: "bg-blue_gray-900 text-gray-50",
    blue_gray_900_7f: "bg-blue_gray-900_7f",
    yellow_700: "bg-yellow-700 text-blue_gray-900",
  },
};
const sizes = {
  xs: "p-[7px]",
  sm: "px-2 py-[11px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900_gray_800",
    "blue_gray_900_1e",
    "gray_50_1e",
    "gray_50",
    "blue_gray_900",
    "blue_gray_900_7f",
    "yellow_700",
  ]),
};

export { Button };
