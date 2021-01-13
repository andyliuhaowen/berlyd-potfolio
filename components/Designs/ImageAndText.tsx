/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontally laid image and text.
 */

import Image from "next/image";

class ImageAndTextProps {
  image: string = "";
  alt: string = "";
  text: string[] = [];
  imageOnLeft: boolean = true;
}

export default function ImageAndText(props: ImageAndTextProps) {
  return (
    <div
      className={`flex h-fullsection ${
        props.imageOnLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-1/2 relative">
        <div
          className={`absolute top-0 bottom-0 ${
            props.imageOnLeft ? "right-0 left-16" : "right-16 left-0"
          }`}
        >
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={props.alt}
          ></Image>
        </div>
      </div>
      <div className="w-1/2 flex flex-row items-center p-16">
        <div className="flex flex-col">
          {props.text.map((line, index) => (
            <div key={index} className="text-2xl leading-loose">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
