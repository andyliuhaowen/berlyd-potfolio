/**
 * Made by Haowen Liu in 2021
 * Project page: Hidden Season.
 */

import FullScreenImage from "../components/Designs/FullScreenImage";
import LogoHeader from "../components/Designs/LogoHeader";
import { Height, Width } from "../utils/global_types";

export default function HiddenSeason() {
  return (
    <main>
      <LogoHeader></LogoHeader>
      <FullScreenImage
        image="/hidden_season/main_full"
        alt="Hidden season photo"
        width={Width.Full}
        height={Height.Free}
        imageHeight={1600}
        imageWidth={2560}
        layoutId="hidden_season-image"
      ></FullScreenImage>
    </main>
  );
}
