/**
 * Made by Haowen Liu in 2021
 * Component for creating a top-captioned image.
 */

import Image from "next/image";

class CaptionedImageProps {
  image: string = "";
  caption: string = "";
}

export default function CaptionedImage(props: CaptionedImageProps) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="text-center text-2xl mb-4">{props.caption}</div>
      <div className="w-full relative flex-grow">
        <Image
          src={props.image}
          alt={props.caption}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        ></Image>
      </div>
    </div>
  );
}
