import React from "react";

import { Button, Img, Text } from "components";

const Accueil21440pxDesktopBlocimg = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[472px] relative w-full">
          <Img
            className="h-[472px] m-auto object-cover w-full"
            alt="img_One"
            src={props?.userimage}
          />
          <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="square"
              color="gray_50_1e"
              size="xs"
              variant="fill"
            >
              <Img className="h-6" src="images/img_home.svg" alt="home" />
            </Button>
            <Text
              className="mt-64 text-2xl md:text-[22px] text-gray-50 sm:text-xl uppercase"
              size="txtOrbitronBold24Gray50"
            >
              {props?.charpentetext}
            </Text>
            <Text
              className="leading-[24.00px] mb-2 mt-4 text-base text-gray-50_b2 w-full"
              size="txtManropeMedium16Gray50b2"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Accueil21440pxDesktopBlocimg.defaultProps = {
  userimage: "images/img_img_472x392.png",
  charpentetext: "Charpente",
  descriptiontext:
    "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
};

export default Accueil21440pxDesktopBlocimg;
