/**
 * Made by Haowen Liu in 2021
 * Project page: Haru.
 */

import LogoHeader from "../components/Designs/LogoHeader";
import FullScreenImage from "../components/Designs/FullScreenImage";
import { Height, Width } from "../utils/global_types";

export default function Haru() {
  return (
    <main>
      <LogoHeader></LogoHeader>
      <FullScreenImage
        image="/haru/main_full"
        alt="Haru photo"
        height={Height.Free}
        width={Width.Full}
        layoutId="haru-image"
        imageHeight={1656}
        imageWidth={2560}
      ></FullScreenImage>
    </main>
  );
}
