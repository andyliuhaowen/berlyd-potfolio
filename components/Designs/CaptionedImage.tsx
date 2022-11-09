/**
 * Made by Haowen Liu in 2021
 * Component for creating a top-captioned image.
 */

import Image from "../Image";
import { Height } from "../../utils/global_types";

interface CaptionedImageProps {
  image: string;
  caption: string;
  height: Height;
  textClass?: string;
  className?: string;
}

const CaptionedImage: React.FC<CaptionedImageProps> = (props) => {
  return (
    <div
      className={`flex h-full w-full flex-col ${
        props.className ? props.className : ""
      }`}
    >
      {props.caption !== "" && (
        <div className={`s_font mb-4 text-black ${props.textClass ?? ""}`}>
          {props.caption}
        </div>
      )}
      <div className="relative min-h-0 w-full flex-shrink flex-grow">
        <Image src={props.image} alt={props.caption} layout="fill"></Image>
      </div>
    </div>
  );
};

export default CaptionedImage;
