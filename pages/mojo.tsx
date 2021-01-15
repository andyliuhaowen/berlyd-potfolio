/**
 * Made by Haowen Liu in 2021
 * Project page: Mojo.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../components/Designs/SectionHeader";
import ProjectBanner from "../components/Designs/ProjectBanner";
import ImageAndText from "../components/Designs/ImageAndText";
import ThreeImageAndText from "../components/Designs/ThreeImageAndText";
import BannerHeader from "../components/Designs/BannerHeader";
import TextList from "../components/Designs/TextList";
import { Height } from "../utils/global_types";
import FoldableImage from "../components/Designs/FoldableImage";
import LogoHeader from "../components/Designs/LogoHeader";
import CaptionedImageList from "../components/Designs/CaptionedImageList";

export default function Mojo() {
  return (
    <main>
      <LogoHeader></LogoHeader>
      <motion.div className="w-full" layoutId="mojo-image">
        <Image
          src="/mojo/main.png"
          alt="Mojo"
          height={4501}
          width={8001}
          layout="responsive"
          priority={true}
        ></Image>
      </motion.div>

      <SectionHeader>A delightful taste from Havana.</SectionHeader>
      <ProjectBanner
        a="Summer 2020"
        b="5 weeks"
        c="Packaging Design for Drinks"
        color="mojo_bg"
      ></ProjectBanner>

      <SectionHeader>About Mojito</SectionHeader>
      <ImageAndText
        image="/mojo/about_mojito.jpg"
        alt="Picture of Mojito"
        text={[
          "- a kind of coocktail",
          "- birthplace: Havana, Cuba",
          "- ingredients: white rum, sugar, lime juice, soda water, mint",
          "- popular summer drink",
          "- virgin mojito / norjito (non-alcohol version)",
        ]}
        imageOnLeft={false}
      ></ImageAndText>

      <SectionHeader>Havana</SectionHeader>
      <ImageAndText
        image="/mojo/havana.jpg"
        alt="Picture of Havana"
        text={[
          "Havana is the capital city of Cuba. The Spanish founded this city in the 16th century. It is the largest city with the most population. Contemporary Havana can essentially be described as three cities in one: Old Havana, Vedado, and the newer subur-ban districts. All those cities have totally different architectural styles in them.",
        ]}
        imageOnLeft={true}
      ></ImageAndText>

      <SectionHeader>Target Audience</SectionHeader>
      <ThreeImageAndText
        image1="/mojo/target_1.jpg"
        alt1="Picture of Natasha"
        image2="/mojo/target_2.png"
        alt2="Picture of partying people"
        image3="/mojo/target_3.jpg"
        alt3="Picture of suitcase"
        imageOnLeft={false}
        text={[
          "Natasha is a party girl. She enjoys the summer most and loves to hang out with friends. She has friends all over the world and loves to visit them when she is free.",
        ]}
      ></ThreeImageAndText>

      <SectionHeader>Keywords</SectionHeader>
      <CaptionedImageList
        images={[
          "/mojo/classic.jpg",
          "/mojo/colorful.jpg",
          "/mojo/passionate.jpg",
          "/mojo/free.jpg",
          "/mojo/fresh.jpg",
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
        accentTextColor="mojo_text"
        accentBgColor="mojo_bg"
        caption="strong, simple"
      ></TextList>

      <div className="mt-24 md:mt-36">
        <CaptionedImageList
          images={["/mojo/ingredients.png", "/mojo/font.png"]}
          captions={["Fresh Ingredients Study", "Typeface"]}
          height={Height.Free}
          imageHeight={1600}
          imageWidth={4004}
          textClass="font-bold text-2xl md:text-3xl mb-8"
          imageIsImportant={true}
        ></CaptionedImageList>
      </div>

      <SectionHeader>Logo Ideations</SectionHeader>
      <FoldableImage
        image1="/mojo/logo_ideation_1.png"
        image2="/mojo/logo_ideation_2.png"
        alt="Logo ideation"
        imageHeight={1250}
        imageWidth={3417}
      ></FoldableImage>

      <SectionHeader>Logos</SectionHeader>
      <div className="mx-16">
        <Image
          src="/mojo/logos.png"
          height={4501}
          width={8001}
          alt="Logos"
          layout="responsive"
          priority={true}
        ></Image>
      </div>

      <SectionHeader>Lockup</SectionHeader>

      <SectionHeader>Colors</SectionHeader>
      <div className="mx-16">
        <Image
          src="/mojo/colors.png"
          height={2184}
          width={6992}
          alt="Logos"
          layout="responsive"
          priority={true}
        ></Image>
      </div>

      <BannerHeader color="mojo_bg">Packaging</BannerHeader>
    </main>
  );
}
