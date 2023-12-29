import React from "react";

import { Button, Img, List, Text } from "components";
import Accueil21440pxDesktopBlocimg from "components/Accueil21440pxDesktopBlocimg";
import Accueil21440pxDesktopFooter from "components/Accueil21440pxDesktopFooter";
import Accueil21440pxDesktopRalisationbloc from "components/Accueil21440pxDesktopRalisationbloc";
import Accueil21440pxDesktopRowimgFive from "components/Accueil21440pxDesktopRowimgFive";
import Accueil21440pxDesktopRownotrehistoireenTwo from "components/Accueil21440pxDesktopRownotrehistoireenTwo";

const Accueil21440pxdesktopPage = () => {
  const accueil21440PxDesktopRalisationblocPropList = [
    {},
    { realizationname: "roca team monaco", userimage: "images/img_img_3.png" },
    { realizationname: "Carmelha", userimage: "images/img_img_4.png" },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-orbitron sm:gap-10 md:gap-10 gap-[352px] items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <header className="bg-gray-50 border-b border-blue_gray-900_1e border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[108px] md:mt-0 my-5 w-[5%] md:w-full">
              <Img
                className="h-8 md:h-auto object-cover w-[97%]"
                src="images/img_emcpetit12.png"
                alt="emcpetitTwelve"
              />
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-start ml-10 md:ml-[0] md:mt-0 mt-6 w-auto md:w-full">
              <div className="flex flex-col gap-[21px] items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14"
                  >
                    Accueil
                  </Text>
                </div>
                <div className="bg-yellow-700 h-[3px] w-[68%]"></div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900_7f text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14Bluegray9007f"
                  >
                    a propos
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900_7f text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14Bluegray9007f"
                  >
                    Bureau d’études
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900_7f text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14Bluegray9007f"
                  >
                    Sécurisation
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900_7f text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14Bluegray9007f"
                  >
                    Services
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900_7f text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14Bluegray9007f"
                  >
                    Réalisations
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-blue_gray-900_7f text-sm uppercase w-auto"
                    size="txtOrbitronExtraBold14Bluegray9007f"
                  >
                    Actualités
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x cursor-pointer font-extrabold min-w-[96px] md:ml-[0] ml-[58px] mr-[108px] md:mt-0 my-4 text-center text-sm uppercase"
              shape="square"
              color="yellow_700"
              size="sm"
              variant="fill"
            >
              Contact
            </Button>
          </header>
          <div className="h-[952px] sm:h-[958px] md:px-5 relative w-full">
            <Img
              className="h-[952px] m-auto object-cover w-full"
              src="images/img_imgarrireplan.png"
              alt="imgarrireplan"
            />
            <div className="absolute bg-blue_gray-900_bf flex flex-col h-full inset-[0] items-start justify-center m-auto p-[104px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start ml-1 md:ml-[0] mt-[400px] w-[600px] md:w-full">
                <div className="flex sm:flex-col flex-row font-orbitron gap-4 items-center justify-start w-full">
                  <div className="bg-yellow-700 h-[7px] w-[7px]"></div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] sm:text-xl text-yellow-700 uppercase w-auto"
                    size="txtOrbitronBold24"
                  >
                    30 ans d’activité à monaco
                  </Text>
                </div>
                <Text
                  className="leading-[56.00px] max-w-[600px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-50 uppercase"
                  size="txtOrbitronBold40"
                >
                  <>L&#39;Art de la Couverture : Notre Monde en toiture</>
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[600px] md:max-w-full text-gray-50_b2 text-lg"
                  size="txtManropeMedium18"
                >
                  Aenean sed adipiscing diam donec adipiscing. Aenean euismod
                  elementum nisi quis eleifend quam. Lacus suspendisse faucibus
                  interdum posuere lorem.
                </Text>
              </div>
            </div>
          </div>
          <Accueil21440pxDesktopRowimgFive
            className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1224px] mt-[152px] mx-auto md:px-5 w-full"
            userimageone="images/img_img.png"
            securitytext="Notre Histoire en Quelques Tuiles"
            descriptiontext={
              <>
                Depuis 30 ans, EM Couverture s&#39;est taillé une réputation
                impeccable dans le monde des toits à Monaco. Nous avons
                réinventé la couverture, tout en gardant nos pieds (et nos
                tuiles) sur terre. Découvrez notre parcours unique et notre
                engagement envers l&#39;excellence.
              </>
            }
            facebookbutton="EN SAVOIR PLUS"
          />
          <div className="h-[631px] md:h-[752px] max-w-[1224px] mt-[152px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="h-[600px] mx-auto w-full">
                <Img
                  className="h-[600px] ml-auto my-auto object-cover w-[81%]"
                  src="images/img_imagearrireplan.png"
                  alt="imagearrireplan"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[67px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-start ml-3 md:ml-[0] w-[58%] md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-[17%] md:w-full">
                        <Img
                          className="h-8"
                          src="images/img_megaphone.svg"
                          alt="megaphone"
                        />
                        <Img
                          className="h-8"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                        <Text
                          className="leading-[56.00px] max-w-[624px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-50 uppercase"
                          size="txtOrbitronBold40"
                        >
                          <span className="text-gray-50 font-orbitron text-left font-bold">
                            Numéro 1 à{" "}
                          </span>
                          <span className="text-yellow-700 font-orbitron text-left font-bold">
                            monaco{" "}
                          </span>
                          <span className="text-gray-50 font-orbitron text-left font-bold">
                            et en région
                          </span>
                          <span className="text-yellow-700 font-orbitron text-left font-bold">
                            {" "}
                            PACA
                          </span>
                        </Text>
                        <Text
                          className="leading-[32.00px] text-gray-50_b2 text-lg"
                          size="txtManropeMedium18"
                        >
                          <>
                            Notre engagement envers l&#39;excellence, la
                            précision et la qualité nous a hissés au sommet de
                            l&#39;industrie de la couverture à Monaco. Nous
                            sommes fiers de notre statut de numéro 1, acquis
                            grâce à un travail acharné, un savoir-faire inégalé
                            et un sens de l&#39;innovation constant.
                            <br />
                            Lorsque vous choisissez notre entreprise, vous
                            choisissez une tradition de qualité et une
                            réputation qui ont résisté à l&#39;épreuve du temps.
                          </>
                        </Text>
                      </div>
                      <Button
                        className="border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x cursor-pointer font-extrabold min-w-[180px] text-center text-sm uppercase"
                        shape="square"
                        color="yellow_700"
                        size="sm"
                        variant="fill"
                      >
                        Prenons contact
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[42px] ml-auto mr-[154px] mt-[-11px] z-[1]"
                src="images/img_vector21.svg"
                alt="vectorTwentyOne"
              />
            </div>
            <Img
              className="absolute bottom-[2%] h-[447px] object-cover right-[8%] w-[24%]"
              src="images/img_castorpng1.png"
              alt="castorpngOne"
            />
          </div>
          <List
            className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1224px] mt-[121px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center uppercase w-full"
                size="txtOrbitronBold64"
              >
                +30
              </Text>
              <Text
                className="text-blue_gray-900_99 text-center text-lg w-full"
                size="txtManropeMedium18Bluegray90099"
              >
                Ans d’activité
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center uppercase w-full"
                size="txtOrbitronBold64"
              >
                +100
              </Text>
              <Text
                className="text-blue_gray-900_99 text-center text-lg w-full"
                size="txtManropeMedium18Bluegray90099"
              >
                Projets terminés
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center uppercase w-full"
                size="txtOrbitronBold64"
              >
                32
              </Text>
              <Text
                className="text-blue_gray-900_99 text-center text-lg w-full"
                size="txtManropeMedium18Bluegray90099"
              >
                Experts pour vous accompagner
              </Text>
            </div>
          </List>
          <div className="bg-gray-50 flex flex-col items-center justify-start mt-[152px] p-[88px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1264px] mx-auto my-4 w-full">
              <Text
                className="leading-[56.00px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center uppercase w-[64%] sm:w-full"
                size="txtOrbitronBold40Bluegray900"
              >
                Des Toits Qui Font la pluie et le beau temps
              </Text>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-[104px] w-full">
                <div className="h-[472px] relative w-[33%] md:w-full">
                  <Accueil21440pxDesktopBlocimg className="absolute bg-gray-600 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[96%]" />
                  <Button
                    className="absolute flex h-10 inset-y-[0] items-center justify-center left-[0] my-auto outline outline-[3px] outline-gray-50 rotate-[180deg] w-10"
                    shape="square"
                    color="blue_gray_900_7f"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                  </Button>
                </div>
                <Accueil21440pxDesktopBlocimg
                  className="bg-gray-600 flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full"
                  userimage="images/img_img_1.png"
                  charpentetext="zinguerie"
                />
                <div className="h-[472px] relative w-[33%] md:w-full">
                  <Accueil21440pxDesktopBlocimg
                    className="absolute bg-gray-600 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[96%]"
                    userimage="images/img_img_2.png"
                    charpentetext="Façades"
                  />
                  <Button
                    className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto outline outline-[3px] outline-gray-50 right-[0] w-10"
                    shape="square"
                    color="blue_gray_900_7f"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_arrowright.svg" alt="arrowright" />
                  </Button>
                </div>
              </div>
              <Button
                className="border-b-[3px] border-gray-50_1e border-solid border-t border-x cursor-pointer font-extrabold min-w-[250px] mt-[98px] text-center text-sm uppercase"
                shape="square"
                color="blue_gray_900"
                size="lg"
                variant="fill"
              >
                voir tous nos services
              </Button>
            </div>
          </div>
          <div className="h-[1418px] mt-[152px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-151.92px] ml-auto mr-[95px] w-[74%] z-[1]">
              <Text
                className="leading-[56.00px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center uppercase w-[77%] sm:w-full"
                size="txtOrbitronBold40Bluegray900"
              >
                Une construction unique au monde
              </Text>
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mt-8 w-1/2 md:w-full">
                <Text
                  className="text-blue_gray-900_b2 text-center text-lg"
                  size="txtManropeMedium18Bluegray900b2"
                >
                  Découvrez la villa Carmelha à Monaco 🇲🇨
                </Text>
                <Button
                  className="border-b-[3px] border-gray-50_1e border-solid border-t border-x cursor-pointer font-extrabold font-orbitron min-w-[162px] text-center text-sm uppercase"
                  shape="square"
                  color="blue_gray_900"
                  size="md"
                  variant="fill"
                >
                  voir le projet
                </Button>
              </div>
              <div className="h-[481px] md:h-[577px] mt-24 relative w-full">
                <Img
                  className="absolute h-[333px] object-cover right-[0] top-[1%] w-[31%]"
                  src="images/img_castorpng2.png"
                  alt="castorpngTwo"
                />
                <div className="absolute border-2 border-gray-50 border-solid h-[481px] inset-y-[0] left-[0] my-auto w-[82%] md:w-full">
                  <Img
                    className="h-[481px] m-auto object-cover w-full"
                    src="images/img_imgarrireplan.png"
                    alt="vidoarrireplan"
                  />
                  <div className="absolute bg-blue_gray-900_7f flex flex-col h-full inset-[0] items-center justify-center m-auto p-52 md:px-10 sm:px-5 w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      size="xl"
                      variant="outline"
                      color="lime_800_yellow_700"
                    >
                      <Img src="images/img_vector19.svg" alt="vectorNineteen" />
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[314px] mt-[104px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_frame.svg"
                    alt="Frame"
                  />
                }
                shape="square"
                color="blue_gray_900_1e"
                size="md"
                variant="outline"
              >
                <div className="font-extrabold text-center text-sm uppercase">
                  Voir notre chaine youtube
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-end mt-auto mx-auto pt-[108px] md:px-10 sm:px-5 px-[108px] w-full">
              <Text
                className="leading-[96.00px] mt-[259px] md:text-5xl text-[80px] text-blue_gray-900 text-center uppercase w-full"
                size="txtOrbitronExtraBold80"
              >
                <>
                  Maîtrisez l&#39;Art de la Couverture : Notre Savoir-faire en
                  Action
                </>
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-[200px] md:ml-[0] ml-[108px] md:px-5 w-[78%]"
          orientation="vertical"
        >
          {accueil21440PxDesktopRalisationblocPropList.map((props, index) => (
            <React.Fragment key={`Accueil21440pxDesktopRalisationbloc${index}`}>
              <Accueil21440pxDesktopRalisationbloc
                className="bg-gray-50 flex flex-col gap-2 h-[528px] md:h-auto items-start justify-start p-2 w-[392px] sm:w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
        <div className="flex flex-col items-center w-full">
          <div className="sm:h-[10056px] md:h-[11038px] h-[12956px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[9570px] inset-x-[0] items-center justify-start mx-auto py-[571px] top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group7.png')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[152px] items-center justify-start mb-[3684px] w-full">
                <div className="flex flex-col md:gap-10 gap-[152px] items-center justify-start w-[85%] md:w-full">
                  <Accueil21440pxDesktopRownotrehistoireenTwo className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1224px] w-full" />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Accueil21440pxDesktopRowimgFive className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1224px] w-full" />
                  </div>
                </div>
                <div className="md:h-[918px] h-[936px] relative w-full">
                  <div className="absolute h-[728px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[728px] m-auto object-cover w-full"
                      src="images/img_img_728x1440.png"
                      alt="img_Six"
                    />
                    <div className="absolute bg-gradient3  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[105px] md:px-10 sm:px-5 w-full">
                      <Img
                        className="h-[39px] mt-16 w-[114px]"
                        src="images/img_etoile.svg"
                        alt="etoile"
                      />
                      <Text
                        className="leading-[80.00px] mt-[21px] md:text-5xl text-[64px] text-gray-50 uppercase w-[49%] sm:w-full"
                        size="txtOrbitronBold64Gray50"
                      >
                        Ce que Pensent nos clients
                      </Text>
                      <Button
                        className="border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x cursor-pointer font-extrabold mb-[63px] min-w-[180px] ml-0.5 md:ml-[0] mt-12 text-center text-sm uppercase"
                        shape="square"
                        color="yellow_700"
                        size="sm"
                        variant="fill"
                      >
                        Prenons contact
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-6 h-full inset-y-[0] items-center justify-start my-auto right-[8%] w-[28%]">
                    <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-[392px] sm:w-full">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_rectangle34624391.png"
                        alt="rectangle346243"
                      />
                      <Text
                        className="text-gray-900 text-sm uppercase w-full"
                        size="txtOrbitronExtraBold14Gray900"
                      >
                        Clara dupont
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-gray-900_99"
                        size="txtManropeMedium16"
                      >
                        <>
                          J&#39;ai fait appel à l&#39;Entreprise Monégasque de
                          Couverture pour une réparation de toit et je suis ravi
                          du résultat. Leur équipe est compétente, efficace, et
                          l&#39;humour qu&#39;ils apportent à leur travail est
                          un vrai plus. Je les recommande vivement !
                        </>
                      </Text>
                    </div>
                    <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-[392px] sm:w-full">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_rectangle34624391_40x40.png"
                        alt="rectangle346243_One"
                      />
                      <Text
                        className="text-gray-900 text-sm uppercase w-full"
                        size="txtOrbitronExtraBold14Gray900"
                      >
                        françois dupuis
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-gray-900_99"
                        size="txtManropeMedium16"
                      >
                        <>
                          C&#39;est rare de trouver une entreprise qui peut
                          allier compétence technique et convivialité de cette
                          manière. Je les recommande vivement à tous ceux qui
                          ont besoin de services de couverture de premier ordre.
                        </>
                      </Text>
                    </div>
                    <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-[392px] sm:w-full">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_rectangle34624391_1.png"
                        alt="rectangle346243_Two"
                      />
                      <Text
                        className="text-gray-900 text-sm uppercase w-full"
                        size="txtOrbitronExtraBold14Gray900"
                      >
                        Aurélien lemarchand
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-gray-900_99"
                        size="txtManropeMedium16"
                      >
                        <>
                          C&#39;est un vrai plaisir de travailler avec eux.
                          Récemment, j&#39;ai eu besoin d&#39;une réparation de
                          toit en urgence, et ils ont réagi rapidement et avec
                          professionnalisme. Le résultat était impeccable, comme
                          toujours. Je recommande cette entreprise à tous ceux
                          qui recherchent des experts de la couverture avec une
                          touche d&#39;originalité.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col md:gap-10 gap-[106px] items-end justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[74%] md:w-full">
                        <Text
                          className="md:mt-0 mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center uppercase"
                          size="txtOrbitronBold40Bluegray900"
                        >
                          Ils parlent de nous
                        </Text>
                        <Img
                          className="h-10"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </div>
                      <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                        <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-3 w-full">
                          <Img
                            className="h-[120px] md:h-auto object-cover w-[120px]"
                            src="images/img_image63.png"
                            alt="imageSixtyThree"
                          />
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col items-center justify-end p-[34px] sm:px-5 w-full">
                          <Img
                            className="h-[75px] md:h-auto object-cover w-4/5"
                            src="images/img_image64.png"
                            alt="imageSixtyFour"
                          />
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col items-center justify-center p-[29px] sm:px-5 w-full">
                          <Img
                            className="h-[31px] md:h-auto my-[27px] object-cover w-full"
                            src="images/img_image65.png"
                            alt="imageSixtyFive"
                          />
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col items-center justify-end p-[41px] md:px-10 sm:px-5 w-full">
                          <Img
                            className="h-[61px] md:h-auto object-cover w-[77%]"
                            src="images/img_image66.png"
                            alt="imageSixtySix"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900 h-[504px] md:h-[656px] mt-[152px] relative w-full">
                    <Img
                      className="h-[504px] ml-auto my-auto object-cover w-[86%]"
                      src="images/img_imagearrireplan_504x1043.png"
                      alt="imagearrireplan_One"
                    />
                    <div className="absolute bg-gradient4  flex flex-col h-full inset-[0] items-start justify-center m-auto p-20 md:px-10 sm:px-5 w-full">
                      <Text
                        className="mt-[47px] sm:text-4xl md:text-[38px] text-[40px] text-gray-50 uppercase"
                        size="txtOrbitronBold40"
                      >
                        evaluez votre projet
                      </Text>
                      <Text
                        className="leading-[32.00px] mt-[25px] text-gray-50_b2 text-lg w-[59%] sm:w-full"
                        size="txtManropeMedium18"
                      >
                        Vous envisagez des travaux de couverture ou de toiture ?
                        Ne cherchez pas plus loin. Remplissez quelques détails,
                        cliquez, et nous vous enverrons rapidement un devis
                        personnalisé pour votre projet.
                      </Text>
                      <Button
                        className="border-b-[3px] border-blue_gray-900_1e border-solid border-t border-x cursor-pointer font-extrabold font-orbitron mb-11 min-w-[275px] mt-8 text-center text-sm uppercase"
                        shape="square"
                        color="yellow_700"
                        size="lg"
                        variant="fill"
                      >
                        Demande de devis en ligne
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[200px] w-full">
                    <div className="flex md:h-[696px] h-[808px] justify-end pt-28 relative w-[41%] md:w-full">
                      <Img
                        className="h-[496px] mt-auto mx-auto object-cover w-[496px]"
                        src="images/img_rectangle34624381.png"
                        alt="rectangle346243_Three"
                      />
                      <Img
                        className="absolute bottom-[0] h-[696px] inset-x-[0] mx-auto object-cover w-full"
                        src="images/img_adobestock628117056.png"
                        alt="adobestock62811"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-36 items-center justify-start w-1/2 md:w-full">
                      <Text
                        className="leading-[56.00px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 uppercase w-full"
                        size="txtOrbitronBold40Bluegray900"
                      >
                        <>Vos Interrogations Sous le Toit de l&#39;Humour</>
                      </Text>
                      <div className="flex flex-col gap-14 items-start justify-start w-auto md:w-full">
                        <div className="border-b border-blue_gray-900_1e border-solid flex flex-col gap-6 items-start justify-start pb-14 w-auto md:w-full">
                          <div className="flex md:flex-col flex-row font-orbitron gap-6 items-start justify-start w-[600px] md:w-full">
                            <Text
                              className="flex-1 leading-[32.00px] max-w-[536px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl uppercase"
                              size="txtOrbitronBold24Bluegray900"
                            >
                              Peut-on utiliser des tuiles de couverture pour
                              jouer au bowling sur le toit ?
                            </Text>
                            <Img
                              className="h-10 w-10"
                              src="images/img_.svg"
                              alt="Two"
                            />
                          </div>
                          <Text
                            className="leading-[32.00px] max-w-[600px] md:max-w-full text-blue_gray-900 text-lg"
                            size="txtManropeMedium18Bluegray900"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Pellentesque dignissim enim sit
                            amet venenatis urna cursus eget nunc.{" "}
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-900_1e border-solid flex flex-col items-start justify-start pb-14 w-auto md:w-full">
                          <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-[600px] md:w-full">
                            <Text
                              className="flex-1 leading-[40.00px] max-w-[536px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900_99 sm:text-xl uppercase"
                              size="txtOrbitronBold24Bluegray90099"
                            >
                              Puis-je inviter mes amis à faire du camping sur
                              mon toit ?
                            </Text>
                            <Img
                              className="h-10 w-10"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-14 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="border-b border-blue_gray-900_1e border-solid flex md:flex-1 flex-col items-start justify-start pb-14 w-auto md:w-full">
                            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-[600px] md:w-full">
                              <Text
                                className="flex-1 leading-[40.00px] max-w-[544px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900_99 sm:text-xl uppercase"
                                size="txtOrbitronBold24Bluegray90099"
                              >
                                Pouvez-vous me dire la meilleure blague de
                                couvreur que vous connaissiez ?
                              </Text>
                              <Img
                                className="h-10 w-10"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-[600px] md:w-full">
                              <Text
                                className="flex-1 leading-[40.00px] max-w-[544px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900_99 sm:text-xl uppercase"
                                size="txtOrbitronBold24Bluegray90099"
                              >
                                Les chats et les chiens ont-ils des cours de
                                danse sur les toits la nuit ?
                              </Text>
                              <Img
                                className="h-10 w-10"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[7641px] inset-x-[0] items-center justify-center mx-auto w-full"
              style={{ backgroundImage: "url('images/img_group7.png')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[200px] items-center justify-center mb-[5594px] mt-[651px] w-full">
                <div className="flex flex-col items-center justify-start w-[88%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[105px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-center w-3/5 md:w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center uppercase"
                        size="txtOrbitronBold40Bluegray900"
                      >
                        Ce qu’il se passe sur insta
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_frame_blue_gray_900.svg"
                        alt="frame"
                      />
                    </div>
                    <div className="md:h-[1228px] h-[289px] relative w-full">
                      <div className="absolute flex md:flex-col flex-row gap-6 h-full inset-[0] items-center justify-between m-auto w-auto">
                        <Img
                          className="h-[289px] sm:h-auto object-cover w-72 md:w-full"
                          src="images/img_rectangle34624367.png"
                          alt="rectangle346243_Four"
                        />
                        <Img
                          className="h-[289px] sm:h-auto object-cover w-[287px] md:w-full"
                          src="images/img_rectangle34624368.png"
                          alt="rectangle346243_Five"
                        />
                        <Img
                          className="h-[289px] sm:h-auto object-cover w-72 md:w-full"
                          src="images/img_rectangle34624369.png"
                          alt="rectangle346243_Six"
                        />
                        <Img
                          className="h-[289px] md:h-auto object-cover w-[289px]"
                          src="images/img_daassetconseils.png"
                          alt="daassetconseils"
                        />
                      </div>
                      <Button
                        className="absolute flex h-10 inset-y-[0] items-center justify-center left-[0] my-auto outline outline-[3px] outline-gray-50 rotate-[180deg] w-10"
                        shape="square"
                        color="blue_gray_900_7f"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="arrowleft_One"
                        />
                      </Button>
                      <Button
                        className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto outline outline-[3px] outline-gray-50 right-[0] w-10"
                        shape="square"
                        color="blue_gray_900_7f"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowright.svg"
                          alt="arrowright_One"
                        />
                      </Button>
                    </div>
                    <Button
                      className="cursor-pointer font-extrabold min-w-[319px] text-center text-sm uppercase"
                      shape="square"
                      color="blue_gray_900_1e"
                      size="lg"
                      variant="outline"
                    >
                      Rejoignez-nous sur instagram
                    </Button>
                  </div>
                </div>
                <Accueil21440pxDesktopFooter className="bg-gray-50 flex flex-col items-center justify-end pt-20 md:px-10 px-20 sm:px-5 w-full" />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil21440pxdesktopPage;
