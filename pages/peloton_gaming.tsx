/**
 * Made by Haowen Liu in 2021
 * Project page: Peloton Gaming.
 */

import FullScreenImage from "../components/Designs/FullScreenImage";
import LogoHeader from "../components/Designs/LogoHeader";
import { Height, Width } from "../utils/global_types";

export default function PelotonGaming() {
  return (
    <main>
      <LogoHeader name="peloton_gaming"></LogoHeader>
      <FullScreenImage
        image="/peloton_gaming/main_full"
        alt="Peloton Gaming photo"
        width={Width.Full}
        height={Height.Free}
        imageHeight={1657}
        imageWidth={2560}
        layoutId="peloton_gaming-image"
      ></FullScreenImage>
    </main>
  );
}
