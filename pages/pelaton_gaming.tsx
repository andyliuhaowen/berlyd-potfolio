/**
 * Made by Haowen Liu in 2021
 * Project page: Pelaton Gaming.
 */

import FullScreenImage from "../components/Designs/FullScreenImage";
import LogoHeader from "../components/Designs/LogoHeader";
import { Height, Width } from "../utils/global_types";

export default function PelatonGaming() {
  return (
    <main>
      <LogoHeader name="pelaton_gaming"></LogoHeader>
      <FullScreenImage
        image="/pelaton_gaming/main_full"
        alt="Pelaton Gaming photo"
        width={Width.Full}
        height={Height.Free}
        imageHeight={1657}
        imageWidth={2560}
        layoutId="pelaton_gaming-image"
      ></FullScreenImage>
    </main>
  );
}
