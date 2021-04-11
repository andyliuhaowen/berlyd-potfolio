/**
 * Made by Haowen Liu in 2021
 * Component for creating a top-captioned image.
 */

import Image from "../Image";
import { Height } from "../../utils/global_types";

interface ICaptionedImageProps {
  image: string;
  caption: string;
  height: Height;
  textClass?: string;
  className?: string;
}

export default function CaptionedImage(props: ICaptionedImageProps) {
  return (
    <div className={`h-full w-full flex flex-col ${props.className}`}>
      {props.caption !== "" && (
        <div
          className={`text-black text-xl xl:text-2xl mb-4 ${
            props.textClass ?? ""
          }`}
        >
          {props.caption}
        </div>
      )}
      <div className="relative flex-grow flex-shrink w-full min-h-0">
        <Image src={props.image} alt={props.caption} layout="fill"></Image>
      </div>
    </div>
  );
}
