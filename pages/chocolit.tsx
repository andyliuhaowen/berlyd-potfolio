/**
 * Made by Haowen Liu in 2021
 * Project page: Chocolit.
 */

import FullScreenImage from "../components/Designs/FullScreenImage";
import ImageAndText from "../components/Designs/ImageAndText";
import LogoHeader from "../components/Designs/LogoHeader";
import ProjectBanner from "../components/Designs/ProjectBanner";
import ThreeImageAndText from "../components/Designs/ThreeImageAndText";
import Title from "../components/Designs/Title";
import TitleAndTagline from "../components/Designs/TitleAndTagline";
import { Height, Width } from "../utils/global_types";
import Image from "../components/Image";
import VerticalSpacing from "../components/Designs/VerticalSpacing";
import Collapse from "../components/Designs/Collapse";
import ProcessGallery from "../components/Designs/ProcessGallery";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import BottomNav from "../components/Designs/BottomNav";
import styles from "../styles/ChocolitAnimation.module.css";

export default function Chocolit() {
  return (
    <main className="bg-white">
      <LogoHeader name="chocolit"></LogoHeader>
      <FullScreenImage
        image="/chocolit/main_full"
        alt="Chocolit photo"
        layoutId="chocolit-image"
        height={Height.Free}
        width={Width.Full}
        imageHeight={1440}
        imageWidth={2560}
      ></FullScreenImage>

      <TitleAndTagline
        title="Chocolit"
        tagline="A playful and tasty kit for adults."
        color="black"
      ></TitleAndTagline>

      <ProjectBanner
        a="Fall 2020"
        b="14 weeks"
        c="Sustainability design for consumer packaged goods"
        bgColor="pink"
        textColor="black"
      ></ProjectBanner>

      <FullScreenImage
        image="/chocolit/render_1_full"
        alt="Chocolit render"
        width={Width.Full}
        height={Height.Free}
        imageWidth={1920}
        imageHeight={1080}
      ></FullScreenImage>

      <Title type="banner" color="pink" bannerTextColor="black">
        Research
      </Title>

      <Title type="normal" color="black">
        Focus
      </Title>

      <div className="mx-10 s_font xl:mx-16">
        Combine the taste and play together to create a delightful daily life.
      </div>

      <ThreeImageAndText
        title="Target User"
        color="black"
        text={[
          "Millennials",
          "Ages: 24-39",
          "- 72.1 million Americans are Millennials, the largest group in 2019",
          "- 35% of the workforce are Millennials in the U.S., the largest generation in the labor force",
        ]}
        imageOnLeft={false}
      >
        <div className="absolute top-0 bottom-0 left-0 w-1/3">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/target_user_1_half"
              alt="Target user"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-2/3">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/target_user_2_half"
              alt="Target user"
              layout="fill"
            ></Image>
          </div>
        </div>
      </ThreeImageAndText>

      <ThreeImageAndText
        title="Stress"
        color="black"
        text={[
          "44% of millennials feel stressed, all or most of the time due to financial concerns, family welfare, and career expectations.",
        ]}
        imageOnLeft={true}
      >
        <div className="relative flex items-center w-full h-full">
          <ResponsiveContainer height="100%" width="100%">
            <PieChart>
              <Pie
                dataKey="value"
                data={[
                  { name: "Stressed", value: 44 },
                  { name: "Others", value: 56 },
                ]}
              >
                <Cell key={0} fill="#E59AA4" />
                <Cell key={1} fill="#F4D4D6" />
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ThreeImageAndText>

      <ImageAndText
        title="Surprise Reduces Stress"
        color="black"
        text={[
          "The brain finds unexpected pleasures more rewarding than expected ones.",
        ]}
        image="/chocolit/surprise_half"
        alt="Surprise"
        height={Height.Free}
        imageHeight={409}
        imageWidth={538}
        imageOnLeft={false}
      ></ImageAndText>

      <Title type="normal" color="black">
        Competitive Market
      </Title>

      <FullScreenImage
        image="/chocolit/competitive_full"
        alt="Competitive market"
        width={Width.Padded}
        height={Height.Free}
        imageWidth={1637}
        imageHeight={599}
      ></FullScreenImage>

      <VerticalSpacing size="section"></VerticalSpacing>
      <Title type="banner" color="pink" bannerTextColor="black">
        Benchmark Product Study
      </Title>
      <Title type="normal" color="black">
        Kinder Tear Down
      </Title>
      <ProcessGallery
        images={[
          "/chocolit/process_1_small",
          "/chocolit/process_2_small",
          "/chocolit/process_3_small",
          "/chocolit/process_4_small",
          "/chocolit/process_5_small",
          "/chocolit/process_6_small",
          "/chocolit/process_7_small",
          "/chocolit/process_8_small",
        ]}
        captions={[
          "open up the box",
          "take out the egg",
          "open the egg",
          "two half eggs",
          "open one half",
          "play with toy",
          "open the other half",
          "enjoy the chocolate",
        ]}
        imageHeight={1083}
        imageWidth={2000}
      ></ProcessGallery>

      <ImageAndText
        title="What We Learned"
        color="black"
        text={[
          "Pros",
          "- easy to open",
          "- fun to play with toy",
          "- a surprise inside",
          "- intuitive app",

          "Cons",
          "- one-time play toy",
        ]}
        image="/chocolit/learned_full"
        alt="Display of kinder packaging"
        height={Height.Free}
        imageHeight={3024}
        imageWidth={4032}
        imageOnLeft={false}
      ></ImageAndText>

      <Collapse title="Sustainability research" color="black">
        <div className="relative overflow-y-hidden">
          <FullScreenImage
            image="/chocolit/sus_full"
            alt="Sustainability"
            height={Height.Free}
            width={Width.Padded}
            imageHeight={1019}
            imageWidth={1811}
          ></FullScreenImage>
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white opacity-80 ${styles.top_animation}`}
          ></div>
          <div
            className={`absolute top-0 left-0 right-0 bg-white opacity-80 ${styles.bot_animation}`}
          ></div>
          <div
            className={`absolute transform -translate-x-1/2 left-1/2 top-1/5 m_font ${styles.caption1}`}
          >
            <img
              src="/arrow_up.svg"
              className="relative w-6 my-4 transform -translate-x-1/2 left-1/2"
            ></img>
            <div>many virgin materials involved in the process</div>
          </div>
          <div
            className={`absolute transform -translate-x-1/2 m_font ${styles.caption2}`}
            style={{ top: "70%", left: "57.2%" }}
          >
            <img
              src="/arrow_up.svg"
              className="relative w-6 my-4 transform -translate-x-1/2 left-1/2"
            ></img>
            <div>long-distance transportation</div>
          </div>
          <div
            className={`absolute transform -translate-x-1/2 m_font ${styles.caption3}`}
            style={{ bottom: "30%", left: "57.2%" }}
          >
            <div>short lifespan</div>
            <img
              src="/arrow_down.svg"
              className="relative w-6 my-4 transform -translate-x-1/2 left-1/2"
            ></img>
          </div>
          <div
            className={`absolute transform -translate-x-1/2 m_font ${styles.caption4}`}
            style={{ bottom: "8%", left: "57.2%" }}
          >
            <div>parts are too small to recycle</div>
            <img
              src="/arrow_down.svg"
              className="relative w-6 my-4 transform -translate-x-1/2 left-1/2"
            ></img>
          </div>
        </div>
      </Collapse>

      <ThreeImageAndText
        title="Design Goals"
        color="black"
        text={[
          "Sustainability",
          "1. reduce virgin material",
          "2. reduce transportation impact",
          "3. prolong toy’s life span",
          "4. optimize end of life",
          "",
          "Social",
          "1. health",
          "2. aesthetic",
        ]}
        imageOnLeft={false}
      >
        <div className="absolute top-0 left-0 right-0 h-1/3">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/design_goals_1_half"
              alt="Design goals"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-1/3 h-1/3">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/design_goals_2_half"
              alt="Design goals"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/design_goals_3_half"
              alt="Design goals"
              layout="fill"
            ></Image>
          </div>
        </div>
      </ThreeImageAndText>

      <ThreeImageAndText
        title="Health"
        color="black"
        text={[
          "Mental Health",
          "- surprise reduce stress",
          "",
          "Body Health",
          "- dark chocolate (70% of cocoa or more) is better for human health",
        ]}
        imageOnLeft={true}
      >
        <div className="absolute top-0 bottom-0 left-0 w-1/2">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/health_1_half"
              alt="Health"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-1/2">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/health_2_half"
              alt="Health"
              layout="fill"
            ></Image>
          </div>
        </div>
      </ThreeImageAndText>

      <ThreeImageAndText
        title="Aesthetic"
        color="black"
        text={["Sophisticated", "Neutral"]}
        imageOnLeft={false}
      >
        <div className="absolute top-0 bottom-0 left-0 w-2/5">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/aesthetic_1_half"
              alt="Aesthetic"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 w-2/5 left-2/5">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/aesthetic_2_half"
              alt="Aesthetic"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-1/5">
          <div className="absolute top-1 left-1 right-1 bottom-1">
            <Image
              src="/chocolit/aesthetic_3_small"
              alt="Aesthetic"
              layout="fill"
            ></Image>
          </div>
        </div>
      </ThreeImageAndText>

      <VerticalSpacing size="small" />

      <FullScreenImage
        image="/chocolit/breakdown_full"
        alt="Product breakdown"
        height={Height.Free}
        width={Width.Full}
        imageHeight={8665}
        imageWidth={6601}
      ></FullScreenImage>

      <FullScreenImage
        image="/chocolit/sustainability_full"
        alt="Sustainability"
        width={Width.Full}
        height={Height.Free}
        imageWidth={6601}
        imageHeight={10200}
      ></FullScreenImage>

      <FullScreenImage
        image="/chocolit/pic_1_full"
        alt="Product picture"
        height={Height.Free}
        width={Width.Full}
        imageHeight={1536}
        imageWidth={2048}
      ></FullScreenImage>
      <FullScreenImage
        image="/chocolit/pic_2_full"
        alt="Product picture"
        height={Height.Free}
        width={Width.Full}
        imageHeight={3024}
        imageWidth={4032}
      ></FullScreenImage>
      <FullScreenImage
        image="/chocolit/pic_3_full"
        alt="Product breakdown"
        height={Height.Free}
        width={Width.Full}
        imageHeight={3024}
        imageWidth={4032}
      ></FullScreenImage>

      <BottomNav
        leftName="Hidden Season"
        leftLink="hidden_season"
        rightName="Peloton Gaming"
        rightLink="https://www.berlyd.com/projects/pelotongaming"
      ></BottomNav>
    </main>
  );
}
