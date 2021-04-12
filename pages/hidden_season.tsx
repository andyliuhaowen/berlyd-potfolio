/**
 * Made by Haowen Liu in 2021
 * Project page: Hidden Season.
 */

import FullScreenImage from "../components/Designs/FullScreenImage";
import LogoHeader from "../components/Designs/LogoHeader";
import ProjectBanner from "../components/Designs/ProjectBanner";
import Title from "../components/Designs/Title";
import TitleAndTagline from "../components/Designs/TitleAndTagline";
import { Height, Width } from "../utils/global_types";

export default function HiddenSeason() {
  return (
    <main>
      <LogoHeader name="hidden_season"></LogoHeader>
      <FullScreenImage
        image="/hidden_season/main_full"
        alt="Hidden season photo"
        width={Width.Full}
        height={Height.Free}
        imageHeight={1600}
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
        color="green"
      ></ProjectBanner>

      <FullScreenImage
        image="/hidden_season/render_1_full"
        alt="Render"
        height={Height.Free}
        width={Width.Full}
        imageHeight={2400}
        imageWidth={3840}
      ></FullScreenImage>

      <Title type="banner" color="green">
        Research
      </Title>
    </main>
  );
}
