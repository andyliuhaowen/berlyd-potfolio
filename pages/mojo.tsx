/**
 * Made by Haowen Liu in 2021
 * Project page: Mojo.
 */

import Head from "next/head";
import BannerHeader from "../components/Designs/BannerHeader";
import CaptionedImageList from "../components/Designs/CaptionedImageList";
import Collapse from "../components/Designs/Collapse";
import FoldableImage from "../components/Designs/FoldableImage";
import FullScreenImage from "../components/Designs/FullScreenImage";
import HoverableImageList from "../components/Designs/HoverableImageList";
import ImageAndText from "../components/Designs/ImageAndText";
import LogoHeader from "../components/Designs/LogoHeader";
import ProjectBanner from "../components/Designs/ProjectBanner";
import SectionHeader from "../components/Designs/SectionHeader";
import StaticParallex from "../components/Designs/StaticParallex";
import TextList from "../components/Designs/TextList";
import ThreeImageAndText from "../components/Designs/ThreeImageAndText";
import { Height, Width } from "../utils/global_types";

export default function Mojo() {
  return (
    <>
      <Head>
        <title>Berly Dai Portfolio</title>
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
        <SectionHeader>A delightful taste from Havana.</SectionHeader>
        <ProjectBanner
          a="Summer 2020"
          b="5 weeks"
          c="Packaging Design for Drinks"
          color="mojo_bg"
        ></ProjectBanner>

        <SectionHeader>About Mojito</SectionHeader>
        <ImageAndText
          image="/mojo/about_mojito_half"
          alt="Picture of Mojito"
          text={[
            "- a kind of cocktail",
            "- birthplace: Havana, Cuba",
            "- ingredients: white rum, sugar, lime juice, soda water, mint",
            "- popular summer drink",
            "- virgin mojito / norjito (non-alcohol version)",
          ]}
          imageOnLeft={false}
        ></ImageAndText>

        <SectionHeader>Havana</SectionHeader>
        <ImageAndText
          image="/mojo/havana_half"
          alt="Picture of Havana"
          text={[
            "Havana is the capital city of Cuba. The Spanish founded this city in the 16th century. It is the largest city with the most population. Contemporary Havana can essentially be described as three cities in one: Old Havana, Vedado, and the newer suburban districts. All those cities have totally different architectural styles in them.",
          ]}
          imageOnLeft={true}
        ></ImageAndText>

        <SectionHeader>Target Audience</SectionHeader>
        <ThreeImageAndText
          image1="/mojo/target_1_small"
          alt1="Picture of Natasha"
          image2="/mojo/target_2_small"
          alt2="Picture of partying people"
          image3="/mojo/target_3_small"
          alt3="Picture of suitcase"
          imageOnLeft={false}
          text={[
            "Natasha is a party girl. She enjoys the summer most and loves to hang out with friends. She has friends all over the world and loves to visit them when she is free.",
          ]}
        ></ThreeImageAndText>

        <SectionHeader>Keywords</SectionHeader>
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
          imageIsImportant={false}
        ></CaptionedImageList>

        <BannerHeader color="mojo_bg">Branding</BannerHeader>

        <SectionHeader>Brand Name</SectionHeader>
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
          accentBgColor="mojo_bg"
          caption="strong, simple"
        ></TextList>

        <SectionHeader>Lockup</SectionHeader>
        <FullScreenImage
          image="/mojo/lockup_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Logo lockup"
          imageHeight={980}
          imageWidth={2560}
        ></FullScreenImage>

        <Collapse title="More ideation details">
          <div className="mt-24 md:mt-36">
            <CaptionedImageList
              images={["/mojo/ingredients_half", "/mojo/font_half"]}
              captions={["Fresh Ingredients Study", "Typeface"]}
              height={Height.Free}
              textClass="font-bold text-2xl md:text-3xl mb-8"
              imageIsImportant={true}
            ></CaptionedImageList>
          </div>

          <SectionHeader>Logo Ideations</SectionHeader>
          <FoldableImage
            image1="/mojo/logo_ideation_1_half"
            image2="/mojo/logo_ideation_2_half"
            alt="Logo ideation"
            imageHeight={468}
            imageWidth={1280}
          ></FoldableImage>

          <SectionHeader>Logos</SectionHeader>
          <FullScreenImage
            image="/mojo/logos_full"
            width={Width.Padded}
            height={Height.Free}
            alt="Logos"
            imageHeight={1440}
            imageWidth={2560}
          ></FullScreenImage>
        </Collapse>

        <SectionHeader>Colors</SectionHeader>
        <FullScreenImage
          image="/mojo/colors_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Colors"
          imageWidth={2560}
          imageHeight={800}
        ></FullScreenImage>

        <BannerHeader color="mojo_bg">Packaging</BannerHeader>
        <FullScreenImage
          image="/mojo/packaging_intro_full"
          width={Width.Full}
          height={Height.Full}
          alt="Picture of Havana"
        ></FullScreenImage>

        <SectionHeader>Architecture Study</SectionHeader>
        <FullScreenImage
          image="/mojo/architecture_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Architecture"
          imageWidth={2560}
          imageHeight={653}
        ></FullScreenImage>

        <SectionHeader>Packaging Ideations</SectionHeader>
        <FullScreenImage
          image="/mojo/packaging_ideations_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Packaging Ideations"
          imageHeight={1341}
          imageWidth={2560}
        ></FullScreenImage>

        <SectionHeader>Inspiration</SectionHeader>
        <FullScreenImage
          image="/mojo/car_bottle_full"
          width={Width.Padded}
          height={Height.Free}
          alt="Car and bottle"
          imageHeight={1135}
          imageWidth={2560}
        ></FullScreenImage>

        <SectionHeader>Development</SectionHeader>

        <FullScreenImage
          image="/mojo/bottle_devel_full"
          width={Width.Full}
          height={Height.Free}
          alt="Bottle development"
          imageHeight={1086}
          imageWidth={2560}
        ></FullScreenImage>

        <div className="m-16"></div>

        <FullScreenImage
          image="/mojo/bottle_color_full"
          width={Width.Full}
          height={Height.Free}
          alt="Bottle color"
          imageHeight={922}
          imageWidth={2560}
        ></FullScreenImage>

        <SectionHeader>Label</SectionHeader>
        <FullScreenImage
          image="/mojo/label_full"
          alt="Mojo label"
          width={Width.ExtraPadded}
          height={Height.Free}
          imageHeight={1347}
          imageWidth={2560}
        ></FullScreenImage>

        <SectionHeader>Flavors</SectionHeader>

        <HoverableImageList
          images={[
            "/mojo/flavor_pic_1_half",
            "/mojo/flavor_pic_2_half",
            "/mojo/flavor_pic_3_half",
          ]}
          captions={["Rose Mojito", "Mango Mojito", "Mint Mojito"]}
          hoveredTexts={[
            [
              "- mint",
              "- sparkling rose / soda water",
              "- lime juice",
              "- silver rum",
              "- simple syrup",
              "(sugar, water, dried rose petals)",
            ],
            [
              "- mint",
              "- soda water",
              "- lime juice",
              "- silver rum",
              "- simple syrup",
              "(sugar, water, mango juice)",
            ],
            [
              "- mint",
              "- soda water",
              "- lime juice",
              "- white rum",
              "- sugar",
            ],
          ]}
          height={Height.Full}
        ></HoverableImageList>

        <StaticParallex
          images={[
            "/mojo/flavor_1_full",
            "/mojo/flavor_2_full",
            "/mojo/flavor_3_full",
          ]}
          alts={["Mojo render", "Mojo render", "Mojo render"]}
          imageHeight={1440}
          imageWidth={2560}
        ></StaticParallex>

        <FullScreenImage
          image="/mojo/render_1_full"
          alt="Render 1"
          width={Width.Full}
          height={Height.Free}
          imageHeight={1440}
          imageWidth={2560}
        ></FullScreenImage>
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
    </>
  );
}
