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
      className={`flex flex-col h-auto md:h-fullsection_md lg:h-fullsection mx-16 ${
        props.imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 h-fullsection_md md:h-auto relative mb-16 md:mb-0">
        <div className="relative h-full">
          <div className="absolute left-0 w-1/2 top-0 bottom-0">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src={props.image1}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                alt={props.alt1}
                priority={true}
              ></Image>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src={props.image2}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                alt={props.alt2}
                priority={true}
              ></Image>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-2/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image
                src={props.image3}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                alt={props.alt3}
                priority={true}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:w-1/2 flex flex-row items-center justify-center ${
          props.imageOnLeft ? "md:pl-16" : "md:pr-16"
        }`}
      >
        <div className="flex flex-col">
          {props.text.map((line, index) => (
            <div
              key={index}
              className="text-lg leading-loose lg:leading-loose lg:text-2xl"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
