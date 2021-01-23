/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontal list of top-captioned image.
 *
 * This component is now only meant to work with 5 unimportant images,
 * and 2 important images.
 */

import CaptionedImage from "./CaptionedImage";
import { getRemHeight, Height } from "../../utils/global_types";

class ImageListProps {
  images: string[] = [];
  captions: string[] = [];
  height: Height = Height.Medium;
  imageHeight?: number;
  imageWidth?: number;
  textClass?: string;
  imageIsImportant: boolean = true;
}

export default function CaptionedImageList(props: ImageListProps) {
  return (
    // Margins are substracted by 4 due to the below paddings.
    <div className="flex flex-wrap mx-6 xl:mx-12 h-auto justify-center -mt-8">
      {props.images.map((image, index) => (
        <div
          className={`${getRemHeight(props.height)} px-4 mt-8 ${
            props.imageIsImportant ? "w-full md:w-1/2" : "w-1/3 md:w-1/5"
          }`}
          key={index}
        >
          <CaptionedImage
            key={index}
            image={image}
            caption={props.captions[index]}
            height={props.height}
            imageHeight={props.imageHeight}
            imageWidth={props.imageWidth}
            textClass={props.textClass}
          ></CaptionedImage>
        </div>
      ))}
    </div>
  );
}
