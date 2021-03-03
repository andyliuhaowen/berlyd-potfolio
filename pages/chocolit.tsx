/**
 * Made by Haowen Liu in 2021
 * Project page: Chocolit.
 */

import FullScreenImage from "../components/Designs/FullScreenImage";
import LogoHeader from "../components/Designs/LogoHeader";
import { Height, Width } from "../utils/global_types";

export default function Chocolit() {
  return (
    <main>
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
    </main>
  );
}
