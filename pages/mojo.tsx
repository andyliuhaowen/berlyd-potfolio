/**
 * Made by Haowen Liu in 2021
 * Project page: Mojo.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SectionHeader from "../components/Designs/SectionHeader";
import ProjectBanner from "../components/Designs/ProjectBanner";
import ImageAndText from "../components/Designs/ImageAndText";
import ThreeImageAndText from "../components/Designs/ThreeImageAndText";
import ImageList from "../components/Designs/CaptionedImageList";
import BannerHeader from "../components/Designs/BannerHeader";
import TextList from "../components/Designs/TextList";
import { Height } from "../utils/global_types";

export default function Mojo() {
  return (
    <main>
      <Header logoOnly={true}></Header>
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
      <ImageList
        images={[
          "/mojo/classic.jpg",
          "/mojo/colorful.jpg",
          "/mojo/passionate.jpg",
          "/mojo/free.jpg",
          "/mojo/fresh.jpg",
        ]}
        height={Height.Medium}
        captions={["Classic", "Colorful", "Passionate", "Free", "Fresh"]}
      ></ImageList>

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
          "30.Nuevo"
        ]}
        accent={7}
        accentColor="mojo_accent"
        caption="strong feeling when read"
      ></TextList>
    </main>
  );
}
