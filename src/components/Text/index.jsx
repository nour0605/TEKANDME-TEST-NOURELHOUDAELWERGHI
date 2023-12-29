import React from "react";

const sizeClasses = {
  txtManropeMedium18Bluegray900b2: "font-manrope font-medium",
  txtOrbitronBold24: "font-bold font-orbitron",
  txtOrbitronBold40: "font-bold font-orbitron",
  txtOrbitronExtraBold14Gray900: "font-extrabold font-orbitron",
  txtOrbitronBold64: "font-bold font-orbitron",
  txtOrbitronBold20: "font-bold font-orbitron",
  txtOrbitronBold40Bluegray900: "font-bold font-orbitron",
  txtOrbitronBold64Gray50: "font-bold font-orbitron",
  txtManropeMedium18Bluegray900: "font-manrope font-medium",
  txtOrbitronBold24Gray50: "font-bold font-orbitron",
  txtManropeMedium16Gray50b2: "font-manrope font-medium",
  txtManropeMedium16Bluegray900b2: "font-manrope font-medium",
  txtManropeMedium18Bluegray90099: "font-manrope font-medium",
  txtOrbitronExtraBold14Bluegray9007f: "font-extrabold font-orbitron",
  txtOrbitronExtraBold80: "font-extrabold font-orbitron",
  txtManropeMedium16: "font-manrope font-medium",
  txtOrbitronBold24Bluegray90099: "font-bold font-orbitron",
  txtManropeMedium18: "font-manrope font-medium",
  txtOrbitronBold24Bluegray900: "font-bold font-orbitron",
  txtOrbitronExtraBold14: "font-extrabold font-orbitron",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
