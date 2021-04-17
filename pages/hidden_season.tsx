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

export default function HiddenSeason() {
  return (
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
        What's inside the kit
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
          "1.Plain    素",
          "2.Color    颜",
          "3.Natural    素颜",
          "4.Nature    自然",
          "5.Ran    然",
          "6.Comfort    自在",
          "7.Free    自由",
          "8.Newborn    初生",
          "9.Fendai    粉黛",
          "10.Yinghua    迎花",
          "11.Yun    韵",
          "12.Lead White    铅白",
          "13.Dai    黛",
          "14.Pintang    品棠",
          "15.Sakura    海樱",
          "16.New Stone    石初",
          "17.Feiyan    绯烟",
          "18.Wan qing si    绾青丝",
          "19.Wan yin    绾殷",
          "20.Tuoyan    酡颜",
          "21.Xiangcha    湘茶",
          "22.Xiangfen    湘粉",
          "23.Season    季",
          "24.Hidden     藏",
          "25.Hidden Season    藏季",
          "26.Feigan     绯绀",
          "27.Dan     丹",
          "28.Su Fang     苏枋",
          "29.First Color     初釉",
          "30.Chujin     初瑾",
          "31.Xuandai     萱黛",
          "32.Pinky     蜜色",
          "33.Glaze     琉璃",
          "34.Secret    秘密",
          "35.Secret Color     秘色",
          "36.Lotus     藕荷",
          "37.Jing     京",
          "38.Forbidden     故宫",
          "39.Light     轻",
          "40.Qingyun     轻韵",
          "41.Sweet White     甜白",
          "42.Xiaoman     小满",
          "43.Jingzhe     惊蛰",
          "44.Bailu     白露",
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

      <Collapse title="More design process" color="green"></Collapse>

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
        <FullScreenImage
          image="/hidden_season/form_2_full"
          alt="Form"
          height={Height.Free}
          width={Width.Padded}
          imageHeight={359}
          imageWidth={1920}
        ></FullScreenImage>
      </Collapse>

      <ImageAndText
        title="Graphic Design"
        color="green"
        image="/hidden_season/graphic_1_full"
        alt="Graphic"
        text={[
          "Hidden Season is a makeup brand that is under The Palace Museum. It sells traditional Chinese makeup in both style and ingredients. Chinese culture is the main inspiration for graphic design and trying to bring it in a modern manner. ",
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

      <Collapse title="More design process" color="green"></Collapse>

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
    </main>
  );
}
