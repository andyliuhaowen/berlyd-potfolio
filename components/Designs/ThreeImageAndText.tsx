/**
 * Made by Haowen Liu in 2021
 * Component for laying out a three-image group with text side by side.
 */

import Image from "next/image";

class ImageAndTextProps {
  image1: string = "";
  alt1: string = "";
  image2: string = "";
  alt2: string = "";
  image3: string = "";
  alt3: string = "";
  text: string[] = [];
  imageOnLeft: boolean = true;
}

export default function ThreeImageAndText(props: ImageAndTextProps) {
  return (
    <div
      className={`h-fullsection flex ${
        props.imageOnLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-1/2 relative">
        <div
          className={`relative h-full ${props.imageOnLeft ? "ml-16" : "mr-16"}`}
        >
          <div className="absolute left-0 w-1/2 top-0 bottom-0">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src={props.image1}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={props.alt1}
              ></Image>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src={props.image2}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={props.alt2}
              ></Image>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-2/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src={props.image3}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={props.alt3}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-row items-center justify-center p-16">
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
