import React from "react";

import { Button, Img, Text } from "components";

const Accueil21440pxDesktopFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-start justify-start w-[96%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-[63%] md:w-full">
              <Img
                className="h-[54px] md:h-auto object-cover w-[15%]"
                src="images/img_emcpetit12.png"
                alt="emcpetitTwelve_One"
              />
              <Text
                className="leading-[56.00px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 uppercase w-full"
                size="txtOrbitronBold40Bluegray900"
              >
                {props?.prenezrendezvouOne}
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[129px] w-auto">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto"
                size="txtOrbitronExtraBold14"
              >
                {props?.navigation}
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-auto">
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.accueil}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.apropos}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.bureaudtudes}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.travaux}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.actualits}
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[84px] w-auto">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto"
                size="txtOrbitronExtraBold14"
              >
                {props?.services}
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-auto">
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.charpenteThree}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.couverture}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.zinguerie}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-900_99"
                    size="txtManropeMedium16"
                  >
                    {props?.faades}
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <ul className="flex md:flex-1 flex-col items-start justify-start mb-[47px] w-[38%] md:w-full">
              <li>
                <div className="flex flex-row gap-3 items-start justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_frame_blue_gray_900_24x24.svg"
                    alt="frame_One"
                  />
                  <Text
                    className="text-base text-blue_gray-900_b2 w-auto"
                    size="txtManropeMedium16Bluegray900b2"
                  >
                    {props?.p1ruebelrespiro}
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start mt-[30px] sm:w-full">
                  <Button
                    className="border-b-[3px] border-blue_gray-900_1e border-l border-r-2 border-solid border-t cursor-pointer flex items-center justify-center min-w-[212px]"
                    leftIcon={
                      <Img
                        className="h-6"
                        src="images/img_frame_24x24.svg"
                        alt="Frame"
                      />
                    }
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    <div className="!text-blue_gray-900 font-extrabold font-orbitron text-left text-sm uppercase">
                      {props?.p377935020twentytwo}
                    </div>
                  </Button>
                  <Button
                    className="border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x cursor-pointer font-extrabold font-orbitron min-w-[170px] text-center text-sm uppercase"
                    shape="square"
                    color="yellow_700"
                    size="lg"
                    variant="fill"
                  >
                    {props?.treContact}
                  </Button>
                </div>
              </li>
              <li>
                <Text
                  className="mt-[106px] text-base text-blue_gray-900_b2"
                  size="txtManropeMedium16Bluegray900b2"
                >
                  {props?.language}
                </Text>
              </li>
            </ul>
            <Img
              className="md:flex-1 h-[212px] sm:h-auto md:ml-[0] ml-[98px] md:mt-0 mt-[68px] object-cover w-[19%] md:w-full"
              src="images/img_castorpng2_212x230.png"
              alt="castorpngTwo_One"
            />
            <Img
              className="h-6 mb-12 md:ml-[0] ml-[264px] md:mt-0 mt-52 w-[168px]"
              src="images/img_rseaux.svg"
              alt="rseaux"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Accueil21440pxDesktopFooter.defaultProps = {
  prenezrendezvouOne: "prenez rendez-vous dès maintenant",
  navigation: "Navigation",
  accueil: "Accueil",
  apropos: "A propos",
  bureaudtudes: "Bureau d’études",
  travaux: "Travaux",
  actualits: "Actualités",
  services: "Services",
  charpenteThree: "Charpente",
  couverture: "Couverture",
  zinguerie: "Zinguerie",
  faades: "Façades",
  p1ruebelrespiro: "1 rue Bel Respiro - 98000 Monaco",
  p377935020twentytwo: "+377 93 50 20 22",
  treContact: "Être contacté",
  language: "© 2023, tous droits réservés. Développé par Tendances.Group ",
};

export default Accueil21440pxDesktopFooter;
