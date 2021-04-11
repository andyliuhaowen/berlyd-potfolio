/**
 * Made by Haowen Liu in 2021
 * Component for laying out a three-image group with text side by side.
 */

import Image from "../Image";

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
      className={`mx-10 xl:mx-16 flex flex-col h-auto lg:h-fullsection_lg xl:h-fullsection ${
        props.imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="relative mb-16 lg:w-2/3 h-fullsection_md lg:h-auto lg:mb-0">
        <div className="relative h-full">
          <div className="absolute top-0 bottom-0 left-0 w-1/2">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image src={props.image1} alt={props.alt1} layout="fill"></Image>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-1/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image src={props.image2} alt={props.alt2} layout="fill"></Image>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3">
            <div className="absolute top-1 left-1 right-1 bottom-1">
              <Image src={props.image3} alt={props.alt3} layout="fill"></Image>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-1/3 flex flex-row items-center justify-center ${
          props.imageOnLeft ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <div className="flex flex-col">
          {props.text.map((line, index) => (
            <div
              key={index}
              className="text-xl leading-loose text-black xl:leading-loose xl:text-2xl"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
