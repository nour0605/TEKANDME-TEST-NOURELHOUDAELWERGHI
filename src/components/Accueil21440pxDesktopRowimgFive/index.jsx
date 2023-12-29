import React from "react";

import { Button, Img, Text } from "components";

const Accueil21440pxDesktopRowimgFive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[504px] relative w-[504px] sm:w-full">
          <Img
            className="h-[504px] m-auto object-cover w-[504px]"
            alt="img_Five"
            src={props?.userimageone}
          />
          {!!props?.userimagetwo ? (
            <Img
              className="absolute h-36 inset-[0] justify-center m-auto object-cover w-[58%]"
              alt="imageSixtyNine"
              src={props?.userimagetwo}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 uppercase w-full"
              size="txtOrbitronBold40Bluegray900"
            >
              {props?.securitytext}
            </Text>
            <Text
              className="leading-[32.00px] max-w-[592px] md:max-w-full text-blue_gray-900_b2 text-lg"
              size="txtManropeMedium18Bluegray900b2"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-extrabold font-orbitron min-w-[206px] text-center text-sm uppercase"
            shape="square"
            color="blue_gray_900_1e"
            size="lg"
            variant="outline"
          >
            {props?.facebookbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

Accueil21440pxDesktopRowimgFive.defaultProps = {
  userimageone: "images/img_img_5.png",
  securitytext: "Inline sécurité",
  descriptiontext:
    "Massa eget egestas purus viverra. Nisi scelerisque eu ultrices vitae. Orci eu lobortis elementum nibh tellus molestie nunc non. Ultrices in iaculis nunc sed augue lacus viverra. Consequat semper viverra nam libero justo laoreet sit. Nibh praesent tristique magna sit amet. Vulputate enim nulla aliquet porttitor. Dui nunc mattis enim ut tellus elementum sagittis.",
  facebookbutton: "Voir sur facebook",
};

export default Accueil21440pxDesktopRowimgFive;
