/**
 * Made by Haowen Liu in 2021
 * Component for creating a top-captioned image.
 */

import Image from "../Image";
import { Height } from "../../utils/global_types";

class CaptionedImageProps {
  image: string = "";
  caption: string = "";
  height: Height = Height.Full;
  textClass?: string;
  className?: string;
}

export default function CaptionedImage(props: CaptionedImageProps) {
  return (
    <div className={`h-full w-full flex flex-col ${props.className}`}>
      <div
        className={`text-center text-black text-xl lg:text-2xl mb-4 ${
          props.textClass ?? ""
        }`}
      >
        {props.caption}
      </div>
      <div className="w-full relative flex-grow">
        {props.height !== Height.Free && (
          <Image src={props.image} alt={props.caption} layout="fill"></Image>
        )}
        {props.height === Height.Free && (
          <Image src={props.image} alt={props.caption} layout="fill"></Image>
        )}
      </div>
    </div>
  );
}
