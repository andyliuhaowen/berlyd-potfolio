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
    <div className={`h-full w-full flex flex-col ${props.className ? props.className : ''}`}>
      {props.caption !== "" && (
        <div className={`text-black s_font mb-4 ${props.textClass ?? ""}`}>
          {props.caption}
        </div>
      )}
      <div className="relative flex-grow flex-shrink w-full min-h-0">
        <Image src={props.image} alt={props.caption} layout="fill"></Image>
      </div>
    </div>
  );
};

export default CaptionedImage;
