/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontal list of top-captioned image.
 */

import CaptionedImage from "./CaptionedImage";

class ImageListProps {
  images: string[] = [];
  captions: string[] = [];
}

export default function CaptionedImageList(props: ImageListProps) {
  return (
    <div className="flex flex-row h-shortsection mx-12">
      {props.images.map((image, index) => (
        <div className="flex-grow mx-4" key={index}>
          <CaptionedImage
            image={image}
            caption={props.captions[index]}
          ></CaptionedImage>
        </div>
      ))}
    </div>
  );
}
