import React from "react";

import { Button, Img, Text } from "components";

const Accueil21440pxDesktopRalisationbloc = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-80 md:h-auto object-cover w-full"
              alt="img"
              src={props?.userimage}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end justify-end p-4 w-full">
          <Text
            className="text-gray-900 text-xl uppercase w-full"
            size="txtOrbitronBold20"
          >
            {props?.realizationname}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-blue_gray-900_b2"
            size="txtManropeMedium16Bluegray900b2"
          >
            {props?.descriptiontext}
          </Text>
          <Button
            className="!text-blue_gray-900 border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x cursor-pointer font-extrabold font-orbitron h-10 min-w-[129px] text-center text-sm uppercase"
            shape="square"
            color="gray_50"
            size="sm"
            variant="fill"
          >
            {props?.moreinfobutton}
          </Button>
        </div>
      </div>
    </>
  );
};

Accueil21440pxDesktopRalisationbloc.defaultProps = {
  userimage: "images/img_img_320x376.png",
  realizationname: "Nom de la réalisation",
  descriptiontext:
    "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
  moreinfobutton: "Plus d’infos",
};

export default Accueil21440pxDesktopRalisationbloc;
