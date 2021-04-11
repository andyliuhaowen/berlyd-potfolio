/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontal list of top-captioned image.
 *
 * This component is now only meant to work with 5 unimportant images,
 * and 2 important images.
 */

import CaptionedImage from "./CaptionedImage";
import { getRemHeight, Height } from "../../utils/global_types";

interface IImageListProps {
  images: string[];
  captions: string[];
  height: Height;
  textClass?: string;
  widthWide: number;
  widthNarrow: number;
}

export default function CaptionedImageList(props: IImageListProps) {
  let widthClass = "";
  switch (props.widthWide) {
    case 1:
      widthClass += "md:w-full";
      break;
    case 2:
      widthClass += "md:w-1/2";
      break;
    case 3:
      widthClass += "md:w-1/3";
      break;
    case 4:
      widthClass += "md:w-1/4";
    case 5:
      widthClass += "md:w-1/5";
  }
  switch (props.widthNarrow) {
    case 1:
      widthClass += " w-full";
      break;
    case 2:
      widthClass += " w-1/2";
      break;
    case 3:
      widthClass += " w-1/3";
      break;
    case 4:
      widthClass += " w-1/4";
    case 5:
      widthClass += " w-1/5";
  }

  return (
    // Margins are subtracted by 4 due to the below paddings.
    <div className="flex flex-wrap justify-center mx-6 -mt-8 xl:mx-12">
      {props.images.map((image, index) => (
        <div
          className={`${getRemHeight(props.height)} px-4 mt-8 ${widthClass}`}
          key={index}
        >
          <CaptionedImage
            key={index}
            image={image}
            caption={props.captions[index]}
            height={props.height}
            textClass={props.textClass}
          ></CaptionedImage>
        </div>
      ))}
    </div>
  );
}
