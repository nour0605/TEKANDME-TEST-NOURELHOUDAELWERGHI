import React from "react";

import { Button, Img, Text } from "components";

const Accueil21440pxDesktopRownotrehistoireenTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="leading-[56.00px] max-w-[592px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 uppercase"
              size="txtOrbitronBold40Bluegray900"
            >
              {props?.textone}
            </Text>
            <Text
              className="leading-[32.00px] max-w-[592px] md:max-w-full text-blue_gray-900_b2 text-lg"
              size="txtManropeMedium18Bluegray900b2"
            >
              {props?.texttwo}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-extrabold font-orbitron min-w-[172px] text-center text-sm uppercase"
            shape="square"
            color="blue_gray_900_1e"
            size="lg"
            variant="outline"
          >
            {props?.buttonone}
          </Button>
        </div>
        <Img
          className="h-[504px] md:h-auto object-cover w-[504px] sm:w-full"
          src="images/img_img_504x504.png"
          alt="img_Four"
        />
      </div>
    </>
  );
};

Accueil21440pxDesktopRownotrehistoireenTwo.defaultProps = {
  textone: "Un bureau d’études innovant",
  texttwo: (
    <>
      Derrière chaque toit exceptionnel se cache une équipe de cerveaux
      brillants. Notre bureau d&#39;études est l&#39;endroit où l&#39;innovation
      et la précision se marient pour créer des toits qui défient les
      conventions. Nous faisons des calculs pour que vous n&#39;ayez pas à le
      faire !
    </>
  ),
  buttonone: "EN SAVOIR PLUS",
};

export default Accueil21440pxDesktopRownotrehistoireenTwo;
