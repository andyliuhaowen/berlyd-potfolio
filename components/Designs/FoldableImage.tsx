/**
 * Made by Haowen Liu in 2021
 * Component for creating a two-piece foldable image.
 */

import Image from "../Image";

class FoldableImageProps {
  image1: string = "";
  image2: string = "";
  alt: string = "";
  imageHeight: number = 0;
  imageWidth: number = 0;
}

export default function FoldableImage(props: FoldableImageProps) {
  return (
    <div className="mx-10 xl:mx-16 flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image
          src={props.image1}
          alt={props.alt}
          layout="responsive"
          height={props.imageHeight}
          width={props.imageWidth}
        ></Image>
      </div>
      <div className="md:w-1/2">
        <Image
          src={props.image2}
          alt={props.alt}
          layout="responsive"
          height={props.imageHeight}
          width={props.imageWidth}
        ></Image>
      </div>
    </div>
  );
}
