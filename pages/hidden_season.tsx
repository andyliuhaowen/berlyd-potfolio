/**
 * Made by Haowen Liu in 2021
 * Project page: Hidden Season.
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
import CaptionedImageList from "../components/Designs/CaptionedImageList";
import VerticalSpacing from "../components/Designs/VerticalSpacing";
import TextList from "../components/Designs/TextList";
import Collapse from "../components/Designs/Collapse";
import FrameAnimation from "../components/Designs/FrameAnimation";
import Head from "next/head";
import BottomNav from "../components/Designs/BottomNav";

export default function HiddenSeason() {
  return (
    <>
      <Head>
        <title>Hidden Season - Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-white">
        <LogoHeader name="hidden_season"></LogoHeader>
        <FullScreenImage
          image="/hidden_season/main_full"
          alt="Hidden season photo"
          width={Width.Full}
          height={Height.Free}
          imageHeight={1440}
          imageWidth={2560}
          layoutId="hidden_season-image"
        ></FullScreenImage>
        <TitleAndTagline
          title="Hidden Season"
          tagline="A memorable gift from The Palace Museum."
          color="green"
        ></TitleAndTagline>

        <ProjectBanner
          a="Summer 2020"
          b="9 Weeks"
          c="Packaging Design for the Cosmetics"
          bgColor="green"
          textColor="white"
        ></ProjectBanner>

        <FullScreenImage
          image="/hidden_season/render_1_full"
          alt="Render"
          height={Height.Free}
          width={Width.Full}
          imageHeight={2400}
          imageWidth={3840}
        ></FullScreenImage>

        <Title type="banner" color="green" bannerTextColor="white">
          Research
        </Title>

        <ImageAndText
          title="The Palace Museum"
          color="green"
          image="/hidden_season/palace_museum_full"
          alt="The Palace Museum"
          text={[
            "The Forbidden City is the Chinese imperial palace for over 500 years, and it is at the core of Beijing, China. In the city, there is a museum called The Palace Museum.  It is home to over 1.8 million pieces of art, mainly from the Ming and Qing dynasties. It is not only a museum but also a representation of Chinese culture and history.",
          ]}
          height={Height.Full}
          imageOnLeft={false}
        ></ImageAndText>

        <ImageAndText
          title="Makeup History"
          color="green"
          image="/hidden_season/makeup_full"
          alt="Makeup"
          text={[
            "China has a long history of doing makeup. It used to be one of the ways to show beauty and wealth. People take natural ingredients, like flowers, beeswax, and some other materials, mix them to build makeup.",
          ]}
          height={Height.Full}
          imageOnLeft={true}
        ></ImageAndText>

        <ThreeImageAndText
          title="Keywords"
          color="green"
          text={[
            "Traditional",
            "Natural",
            "Customizable",
            "Enjoyable",
            "Memorable",
          ]}
          imageOnLeft={false}
        >
          <div className="absolute top-0 left-0 w-2/3 h-2/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/three_1_half"
                alt="Chinese Makeup"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-2/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/three_2_half"
                alt="Chinese Makeup"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/three_3_full"
                alt="Chinese Makeup"
                layout="fill"
              ></Image>
            </div>
          </div>
        </ThreeImageAndText>

        <Title type="normal" color="green">
          What&apos;s inside the kit
        </Title>

        <CaptionedImageList
          images={[
            "/hidden_season/foundation_small",
            "/hidden_season/brush_small",
            "/hidden_season/eyeshadow_small",
            "/hidden_season/eyebrow_pencil_small",
            "/hidden_season/lipstick_small",
          ]}
          captions={[
            "1 foundation",
            "1 brush",
            "1 three-color eyeshadow",
            "1 eyebrow pencil",
            "1 lipstick",
          ]}
          height={Height.Medium}
          widthWide={5}
          widthNarrow={3}
        ></CaptionedImageList>

        <VerticalSpacing size="section" />
        <Title type="banner" color="green" bannerTextColor="white">
          Branding
        </Title>
        <ThreeImageAndText
          title="Persona"
          color="green"
          text={[
            "Vivian is a 26 years old office worker. She loves makeup and wears it every day. Vivian also enjoys traveling around the world and learning about other cultures. The Chinese culture also interests her, and she is always eager to try out traditional makeup and clothing.",
          ]}
          imageOnLeft={true}
        >
          <div className="absolute top-0 bottom-0 left-0 w-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/vivian_1_small"
                alt="Picture of Vivian"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 w-1/3 left-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/vivian_2_small"
                alt="Picture of Vivian"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-1/2">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/vivian_3_small"
                alt="Vivian Airport"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src="/hidden_season/vivian_4_small"
                alt="Vivian's makeup"
                layout="fill"
              ></Image>
            </div>
          </div>
        </ThreeImageAndText>

        <Title type="normal" color="green">
          Colors
        </Title>
        <FullScreenImage
          image="/hidden_season/color_full"
          alt="Color Palette"
          imageWidth={1810}
          imageHeight={693}
          height={Height.Free}
          width={Width.Padded}
        ></FullScreenImage>
        <Title type="normal" color="green">
          Brand Name
        </Title>
        <TextList
          text={[
            "1.Plain 素",
            "2.Color 颜",
            "3.Natural 素颜",
            "4.Nature 自然",
            "5.Ran 然",
            "6.Comfort 自在",
            "7.Free 自由",
            "8.Newborn 初生",
            "9.Fendai 粉黛",
            "10.Yinghua 迎花",
            "11.Yun 韵",
            "12.Lead White 铅白",
            "13.Dai 黛",
            "14.Pintang 品棠",
            "15.Sakura 海樱",
            "16.New Stone 石初",
            "17.Feiyan 绯烟",
            "18.Wan qing si 绾青丝",
            "19.Wan yin 绾殷",
            "20.Tuoyan 酡颜",
            "21.Xiangcha 湘茶",
            "22.Xiangfen 湘粉",
            "23.Season 季",
            "24.Hidden 藏",
            "25.Hidden Season 藏季",
            "26.Feigan 绯绀",
            "27.Dan 丹",
            "28.Su Fang 苏枋",
            "29.First Color 初釉",
            "30.Chujin 初瑾",
            "31.Xuandai 萱黛",
            "32.Pinky 蜜色",
            "33.Glaze 琉璃",
            "34.Secret 秘密",
            "35.Secret Color 秘色",
            "36.Lotus 藕荷",
            "37.Jing 京",
            "38.Forbidden 故宫",
            "39.Light 轻",
            "40.Qingyun 轻韵",
            "41.Sweet White 甜白",
            "42.Xiaoman 小满",
            "43.Jingzhe 惊蛰",
            "44.Bailu 白露",
          ]}
          accent={24}
          accentBgColor="hidden_season_accent"
          accentTextColor="black"
          caption=""
          sm={22}
          md={15}
          xl={11}
        ></TextList>

        <Title type="normal" color="green">
          Logo Lockup
        </Title>
        <FullScreenImage
          image="/hidden_season/lockup_full"
          alt="Logo Lockup"
          height={Height.Free}
          width={Width.Padded}
          imageHeight={644}
          imageWidth={1817}
        ></FullScreenImage>

        <Collapse title="More design process" color="green">
          <Title type="normal" color="green">
            Chinese Calligraphy
          </Title>
          <FullScreenImage
            image="/hidden_season/chinese_calligraphy_full"
            alt="Chinese Calligraphy"
            height={Height.Free}
            imageWidth={1823}
            imageHeight={626}
            width={Width.Padded}
          ></FullScreenImage>

          <Title type="normal" color="green">
            Typeface
          </Title>
          <FullScreenImage
            image="/hidden_season/typeface_full"
            alt="Typeface"
            height={Height.Free}
            width={Width.Padded}
            imageWidth={1780}
            imageHeight={320}
          ></FullScreenImage>

          <Title type="normal" color="green">
            Logo Ideation
          </Title>
          <FullScreenImage
            image="/hidden_season/logo_ideation_full"
            alt="Logo Ideation"
            height={Height.Free}
            width={Width.Padded}
            imageWidth={1813}
            imageHeight={1410}
          ></FullScreenImage>

          <Title type="normal" color="green">
            Logo Development
          </Title>
          <FullScreenImage
            image="/hidden_season/logo_devel_full"
            alt="Logo Development"
            height={Height.Free}
            width={Width.Padded}
            imageWidth={1791}
            imageHeight={642}
          ></FullScreenImage>
        </Collapse>

        <VerticalSpacing size="section" />
        <Title type="banner" color="green" bannerTextColor="white">
          Packaging
        </Title>
        <FullScreenImage
          image="/hidden_season/packaging_intro_full"
          alt="Packaging"
          height={Height.Free}
          width={Width.Full}
          imageHeight={1692}
          imageWidth={3008}
        ></FullScreenImage>

        <Title type="normal" color="green">
          Pattern Exploration
        </Title>
        <FullScreenImage
          image="/hidden_season/pattern_full"
          alt="Pattern"
          height={Height.Free}
          width={Width.Padded}
          imageHeight={519}
          imageWidth={1808}
        ></FullScreenImage>

        <ImageAndText
          title="Form"
          color="green"
          image="/hidden_season/form_1_full"
          alt="Form"
          text={[
            "The shape refers to traditional makeup containers and develops it to look more modern yet has cultural elements.",
          ]}
          height={Height.Free}
          imageHeight={687}
          imageWidth={1226}
          imageOnLeft={false}
        ></ImageAndText>
        <VerticalSpacing size="small" />
        <FullScreenImage
          image="/hidden_season/form_2_full"
          alt="Form"
          height={Height.Free}
          width={Width.Padded}
          imageHeight={359}
          imageWidth={1920}
        ></FullScreenImage>

        <Collapse title="More design process" color="green">
          <ImageAndText
            image="/hidden_season/proto_full"
            title="Direction 1 Origami"
            color="green"
            text={[
              "Pros",
              "- large surface for graphic design",
              "- have obvious characteristic",
              "- lightweight",
              "",
              "Cons",
              "- don’t have an inner structure",
              "- weak for transportation",
              "- folding complex box is not the ideal and efficient way of manufacturing",
            ]}
            imageOnLeft={true}
            alt="Origami prototype"
            height={Height.Free}
            imageHeight={818}
            imageWidth={1169}
          ></ImageAndText>

          <ThreeImageAndText
            title="Snuff Bottle"
            text={[
              "- used during the Qing dynasty to contain powered tobacco",
              "- a way to represent status and wealth",
              "- a way to greet friends and relatives",
              "",
              "material: glass (most common)",
              "- outside: clear glass",
              "- inside: frosted glass, painting",
            ]}
            color="green"
            imageOnLeft={false}
          >
            <div className="absolute top-0 bottom-0 left-0 w-1/3">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/snuff_1_half"
                  alt="Snuff bottle"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-2/3">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/snuff_2_half"
                  alt="Snuff bottle"
                  layout="fill"
                ></Image>
              </div>
            </div>
          </ThreeImageAndText>

          <ImageAndText
            title="Direction 2"
            text={[
              "Pros",
              "- unique shapes",
              "- can clearly see through the inside",
              "- individual brush good for sanitation",
              "",
              "Cons",
              "- top of the bottles are too narrow",
              "- too small for people to use",
              "- hard to put the brush back inside",
            ]}
            color="green"
            imageOnLeft={true}
            image="/hidden_season/direction_2_full"
            alt="Direction 2"
            height={Height.Free}
            imageHeight={2095}
            imageWidth={3840}
          ></ImageAndText>

          <ThreeImageAndText
            title="Porcelain"
            text={[
              "- Chinese invention",
              "- influential around the world",
              "",
              "Categories: red glaze porcelain, blue glaze porcelain, white and blue porcelain, white porcelain, enamel porcelain",
            ]}
            color="green"
            imageOnLeft={false}
          >
            <div className="absolute top-0 left-0 w-1/3 h-1/2">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/por_1_small"
                  alt="Porcelain"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="absolute top-0 w-1/3 left-1/3 h-1/2">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/por_2_small"
                  alt="Porcelain"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-1/2">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/por_3_small"
                  alt="Porcelain"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/por_4_small"
                  alt="Porcelain"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="absolute bottom-0 w-1/3 left-1/3 h-1/2">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/por_5_small"
                  alt="Porcelain"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2">
              <div className="absolute top-1 left-1 right-1 bottom-1">
                <Image
                  src="/hidden_season/por_6_small"
                  alt="Porcelain"
                  layout="fill"
                ></Image>
              </div>
            </div>
          </ThreeImageAndText>

          <ImageAndText
            title="Direction 3"
            text={[
              "Pros",
              "- space saving",
              "- portable",
              "- modern",
              "",
              "Cons",
              "- can’t represent tradition",
              "- will easily break when drop",
            ]}
            color="green"
            imageOnLeft={true}
            image="/hidden_season/direction_3_full"
            alt="Direction 3"
            height={Height.Free}
            imageWidth={3840}
            imageHeight={2095}
          ></ImageAndText>
        </Collapse>

        <ImageAndText
          title="Graphic Design"
          color="green"
          image="/hidden_season/graphic_1_full"
          alt="Graphic"
          text={[
            "Hidden Season is a makeup brand that is under The Palace Museum. It sells traditional Chinese makeup in both style and ingredients. Four seasons and traditional Chinese drawings are the main inspiration for graphic design and trying to bring it in a modern manner.",
          ]}
          height={Height.Free}
          imageHeight={544}
          imageWidth={1815}
          imageOnLeft={false}
        ></ImageAndText>
        <VerticalSpacing size="small" />
        <FullScreenImage
          image="/hidden_season/graphic_2_full"
          alt="Graphic"
          height={Height.Free}
          width={Width.Padded}
          imageHeight={280}
          imageWidth={1221}
        ></FullScreenImage>

        <Collapse title="More design process" color="green">
          <ImageAndText
            image="/hidden_season/graphic_ideation_full"
            alt="Graphic ideation"
            text={[
              "- wood exploration",
              "- color exploration",
              "- pattern exploration",
              "- strap orientation",
            ]}
            height={Height.Free}
            imageHeight={453}
            imageWidth={1030}
            title="Graphic Ideation"
            color="green"
            imageOnLeft={true}
          ></ImageAndText>

          <FullScreenImage
            image="/hidden_season/wood_1_full"
            alt="Graphic ideation"
            width={Width.Padded}
            height={Height.Free}
            imageWidth={1800}
            imageHeight={581}
          ></FullScreenImage>
          <FullScreenImage
            image="/hidden_season/wood_2_full"
            alt="Graphic ideation"
            width={Width.Padded}
            height={Height.Free}
            imageWidth={1808}
            imageHeight={360}
          ></FullScreenImage>
          <FullScreenImage
            image="/hidden_season/wood_3_full"
            alt="Graphic ideation"
            width={Width.Padded}
            height={Height.Free}
            imageWidth={1814}
            imageHeight={579}
          ></FullScreenImage>
          <FullScreenImage
            image="/hidden_season/wood_4_full"
            alt="Graphic ideation"
            width={Width.Padded}
            height={Height.Free}
            imageWidth={1660}
            imageHeight={428}
          ></FullScreenImage>
          <VerticalSpacing size="small" />
          <FullScreenImage
            image="/hidden_season/boxes_full"
            alt="Graphic ideation"
            width={Width.Padded}
            height={Height.Free}
            imageWidth={1858}
            imageHeight={1611}
          ></FullScreenImage>
        </Collapse>

        <ImageAndText
          image="/hidden_season/poster_1_full"
          alt="Promotional Poster"
          text={[
            "This poster is attempting to explain the idea of the hidden season that is associated with the product. Products are hidden from people in order to capture their attention and help them learn more about the product in question",
          ]}
          height={Height.Free}
          imageHeight={1525}
          imageWidth={4031}
          title="Promotional Poster"
          color="green"
          imageOnLeft={false}
        ></ImageAndText>
        <VerticalSpacing size="small" />
        <FullScreenImage
          image="/hidden_season/poster_2_full"
          alt="Promotional Poster"
          height={Height.Free}
          width={Width.Full}
          imageHeight={3928}
          imageWidth={5892}
        ></FullScreenImage>
        <VerticalSpacing size="small" />
        <FullScreenImage
          image="/hidden_season/poster_3_full"
          alt="Promotional Poster"
          height={Height.Free}
          width={Width.Full}
          imageHeight={3816}
          imageWidth={5724}
        ></FullScreenImage>

        <VerticalSpacing size="small" />
        <FrameAnimation
          frames={[
            "/hidden_season/animation_1_full",
            "/hidden_season/animation_2_full",
            "/hidden_season/animation_3_full",
            "/hidden_season/animation_4_full",
            "/hidden_season/animation_5_full",
            "/hidden_season/animation_6_full",
            "/hidden_season/animation_7_full",
          ]}
          frame_duration={0.5}
          imageWidth={2560}
          imageHeight={1600}
        ></FrameAnimation>

        <FullScreenImage
          image="/hidden_season/main_full"
          alt="Hidden season photo"
          width={Width.Full}
          height={Height.Free}
          imageHeight={1440}
          imageWidth={2560}
        ></FullScreenImage>

        <FullScreenImage
          image="/hidden_season/render_2_full"
          alt="Graphic"
          height={Height.Free}
          width={Width.Full}
          imageHeight={1600}
          imageWidth={2560}
        ></FullScreenImage>

        <FullScreenImage
          image="/hidden_season/render_1_full"
          alt="Render"
          height={Height.Free}
          width={Width.Full}
          imageHeight={2400}
          imageWidth={3840}
        ></FullScreenImage>

        <BottomNav
          leftName="Mojo"
          leftLink="/mojo"
          rightName="Chocolit"
          rightLink="/chocolit"
        ></BottomNav>
      </main>
    </>
  );
}
