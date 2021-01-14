/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontal list of top-captioned image.
 */

import CaptionedImage from "./CaptionedImage";
import { Height } from "../../utils/global_types";

class ImageListProps {
  images: string[] = [];
  captions: string[] = [];
  height: Height = Height.Medium;
  imageHeight?: number;
  imageWidth?: number;
  textClass?: string;
}

export default function CaptionedImageList(props: ImageListProps) {
  return (
    <div className={`flex flex-row mx-12 ${props.height.toString()}`}>
      {props.images.map((image, index) => (
        <div
          className="mx-4"
          style={{ width: `${100 / props.images.length}%` }}
          key={index}
        >
          <CaptionedImage
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
