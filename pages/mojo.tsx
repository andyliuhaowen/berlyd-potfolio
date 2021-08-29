/**
 * Made by Haowen Liu in 2021
 * Project page: Mojo.
 */

import Head from "next/head";
import CaptionedImageList from "../components/Designs/CaptionedImageList";
import Collapse from "../components/Designs/Collapse";
import FoldableImage from "../components/Designs/FoldableImage";
import FullScreenImage from "../components/Designs/FullScreenImage";
import HoverableImageList from "../components/Designs/HoverableImageList";
import ImageAndText from "../components/Designs/ImageAndText";
import LogoHeader from "../components/Designs/LogoHeader";
import ProjectBanner from "../components/Designs/ProjectBanner";
import Title from "../components/Designs/Title";
import StaticParallex from "../components/Designs/StaticParallex";
import TextList from "../components/Designs/TextList";
import TitleAndTagline from "../components/Designs/TitleAndTagline";
import ThreeImageAndText from "../components/Designs/ThreeImageAndText";
import { Height, Width } from "../utils/global_types";
import VerticalSpacing from "../components/Designs/VerticalSpacing";
import Image from "../components/Image";
import BottomNav from "../components/Designs/BottomNav";

const Mojo: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mojo - Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-white">
        <LogoHeader name="mojo"></LogoHeader>
        <FullScreenImage
          image="/mojo/main_full"
          alt="Mojo photo"
          height={Height.Free}
          width={Width.Full}
          layoutId="mojo-image"
          imageWidth={2560}
          imageHeight={1440}
        ></FullScreenImage>

        <TitleAndTagline
          title="Mojo Mojito"
          tagline="A delightful taste from Havana."
          color="green"
        ></TitleAndTagline>

        <ProjectBanner
          a="Summer 2020"
          b="5 Weeks"
          c="Packaging Design for Drinks"
          bgColor="green"
          textColor="white"
        ></ProjectBanner>

        <FullScreenImage
          image="/mojo/render_1_full"
          alt="Render 1"
          width={Width.Full}
          height={Height.Free}
          imageHeight={1440}
          imageWidth={2560}
        ></FullScreenImage>

        <Title type="banner" color="green" bannerTextColor="white">
          Research
        </Title>

        <ImageAndText
          image="/mojo/about_mojito_half"
          title="About Mojito"
          color="green"
          alt="Picture of Mojito"
          text={[
            "- a kind of cocktail",
            "- birthplace: Havana, Cuba",
            "- ingredients: white rum, sugar, lime juice, soda water, mint",
            "- popular summer drink",
            "- virgin mojito / norjito (non-alcohol version)",
          ]}
          height={Height.Full}
          imageOnLeft={false}
          imageWidth={3910}
          imageHeight={5167}
        ></ImageAndText>

        <ImageAndText
          title="Havana"
          color="green"
          image="/mojo/havana_half"
          alt="Picture of Havana"
          text={[
            "Havana is the capital city of Cuba. The Spanish founded this city in the 16th century. It is the largest city with the most population. Contemporary Havana can essentially be described as three cities in one: Old Havana, Vedado, and the newer suburban districts. All those cities have totally different architectural styles in them.",
          ]}
          height={Height.Full}
          imageOnLeft={true}
          imageWidth={1900}
          imageHeight={1266}
        ></ImageAndText>

        <ThreeImageAndText
          title="Target Audience"
          color="green"
          imageOnLeft={false}
          text={[
            "Natasha is a party girl. She enjoys the summer most and loves to hang out with friends. She has friends all over the world and loves to visit them when she is free.",
          ]}
        >
          <div className="absolute top-0 bottom-0 left-0 w-1/2">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/mojo/target_1_small"
                alt="Picture of Natasha"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/mojo/target_2_small"
                alt="Picture of partying people"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/mojo/target_3_small"
                alt="Picture of suitcase"
                layout="fill"
              ></Image>
            </div>
          </div>
        </ThreeImageAndText>

        <Title type="normal" color="green">
          Keywords
        </Title>
        <CaptionedImageList
          images={[
            "/mojo/classic_xsmall",
            "/mojo/colorful_xsmall",
            "/mojo/passionate_xsmall",
            "/mojo/free_xsmall",
            "/mojo/fresh_xsmall",
          ]}
          height={Height.Medium}
          captions={["Classic", "Colorful", "Passionate", "Free", "Fresh"]}
          widthWide={5}
          widthNarrow={3}
        ></CaptionedImageList>

        <VerticalSpacing size="section" />
        <Title type="banner" color="green" bannerTextColor="white">
          Branding
        </Title>

        <Title type="normal" color="green">
          Brand Name
        </Title>
        <TextList
          text={[
            "1.Monoto",
            "2.Monor",
            "3.Toto",
            "4.Tot",
            "5.Fremoto",
            "6.Fomoto",
            "7.Moji",
            "8.Mojo",
            "9.Mono",
            "10.Normo",
            "11.Jitos",
            "12.Softo",
            "13.Sofi",
            "14.Soto",
            "15.Fresi",
            "16.Froto",
            "17.Frosi",
            "18.Geji",
            "19.Momo",
            "20.Sizmo",
            "21.Sizzy",
            "22.Monojo",
            "23.Camo",
            "24.Calmo",
            "25.Somoji",
            "26.Jotoo",
            "27.Verano",
            "28.Fresco",
            "29.Fresca",
            "30.Nuevo",
          ]}
          accent={7}
          accentTextColor="black"
          accentBgColor="mojo_accent"
          caption=""
          sm={10}
          md={6}
          xl={5}
        ></TextList>

        <Title type="normal" color="green">
          Lockup
        </Title>
        <FullScreenImage
          image="/mojo/lockup_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Logo lockup"
          imageHeight={649}
          imageWidth={1810}
        ></FullScreenImage>

        <Collapse title="More ideation details" color="green">
          <CaptionedImageList
            images={["/mojo/ingredients_half", "/mojo/font_half"]}
            captions={["Fresh Ingredients", "Typeface"]}
            height={Height.Free}
            textClass="font-bold mb-8 text-green m_font"
            widthNarrow={1}
            widthWide={2}
          ></CaptionedImageList>

          <Title type="normal" color="green">
            Logo Ideations
          </Title>
          <FoldableImage
            image1="/mojo/logo_ideation_1_half"
            image2="/mojo/logo_ideation_2_half"
            alt="Logo ideation"
            imageHeight={468}
            imageWidth={1280}
          ></FoldableImage>

          <Title type="normal" color="green">
            Logos
          </Title>
          <FullScreenImage
            image="/mojo/logos_full"
            width={Width.Padded}
            height={Height.Free}
            alt="Logos"
            imageHeight={1440}
            imageWidth={2560}
          ></FullScreenImage>
        </Collapse>

        <Title type="normal" color="green">
          Colors
        </Title>
        <FullScreenImage
          image="/mojo/colors_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Colors"
          imageWidth={2560}
          imageHeight={800}
        ></FullScreenImage>

        <VerticalSpacing size="section" />
        <Title type="banner" color="green" bannerTextColor="white">
          Packaging
        </Title>
        <FullScreenImage
          image="/mojo/packaging_intro_full"
          width={Width.Full}
          height={Height.Free}
          alt="Packaging"
          imageHeight={1692}
          imageWidth={3008}
        ></FullScreenImage>

        <ImageAndText
          image="/mojo/architecture_full"
          title="Architecture Study"
          color="green"
          text={[
            "To give the drink a feeling of Havana. I look into the iconic buildings of Havana as inspiration. I want consumers to feel like they are in Havana when they drink the mojito.",
          ]}
          height={Height.Free}
          alt="Architecture"
          imageWidth={2560}
          imageHeight={653}
          imageOnLeft={false}
        ></ImageAndText>

        <Title type="normal" color="green">
          Packaging Ideations
        </Title>
        <FullScreenImage
          image="/mojo/packaging_ideations_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Packaging Ideations"
          imageHeight={956}
          imageWidth={1813}
        ></FullScreenImage>

        <ImageAndText
          title="Inspiration"
          color="green"
          image="/mojo/car_bottle_full"
          height={Height.Free}
          alt="Car and bottle"
          imageHeight={688}
          imageWidth={1171}
          imageOnLeft={false}
          text={[
            "-bulky",
            "-classic",
            "-strong",
            "The shape of the classic car inspired the bottle. Vintage vehicles are popular in Havana, and people see them as the icon for the city. Incorporating this iconic feeling into the bottle would help people have a better feel for the town.",
          ]}
        ></ImageAndText>

        <Title type="normal" color="green">
          Development
        </Title>

        <FullScreenImage
          image="/mojo/bottle_devel_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Bottle development"
          imageHeight={892}
          imageWidth={1808}
        ></FullScreenImage>

        <div className="m-16"></div>

        <FullScreenImage
          image="/mojo/bottle_color_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Bottle color"
          imageHeight={882}
          imageWidth={1814}
        ></FullScreenImage>

        <ImageAndText
          title="Label"
          color="green"
          image="/mojo/label_full"
          alt="Mojo label"
          height={Height.Free}
          imageHeight={727}
          imageWidth={1238}
          imageOnLeft={false}
          text={[
            "The label is comply with depend on the US alcohol selling regulations and PDP studies of real-life products.",
          ]}
        ></ImageAndText>

        <Title type="normal" color="green">
          Flavors
        </Title>

        <HoverableImageList
          images={[
            "/mojo/flavor_pic_1_half",
            "/mojo/flavor_pic_2_half",
            "/mojo/flavor_pic_3_half",
          ]}
          imagesHidden={[
            "/mojo/flavor_pic_1_render_half",
            "/mojo/flavor_pic_2_render_half",
            "/mojo/flavor_pic_3_render_half",
          ]}
          captions={["Rose Mojito", "Mango Mojito", "Mint Mojito"]}
          height={Height.Full}
        ></HoverableImageList>

        <StaticParallex
          images={[
            "/mojo/flavor_1_full",
            "/mojo/flavor_2_full",
            "/mojo/flavor_3_full",
          ]}
          alts={["Mojo render", "Mojo render", "Mojo render"]}
        ></StaticParallex>

        <FullScreenImage
          image="/mojo/render_2_full"
          alt="Render 2"
          width={Width.Full}
          height={Height.Free}
          imageHeight={1440}
          imageWidth={2560}
        ></FullScreenImage>
        <FullScreenImage
          image="/mojo/render_3_full"
          alt="Render 3"
          width={Width.Full}
          height={Height.Free}
          imageHeight={1438}
          imageWidth={2560}
        ></FullScreenImage>
      </main>
      <BottomNav
        leftName=""
        leftLink=""
        rightName="Hidden Season"
        rightLink="/hidden_season"
      />
    </>
  );
};

export default Mojo;
