/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontally laid image and text.
 */

import { Height } from "../../utils/global_types";
import Image from "../Image";

interface IImageAndTextProps {
  image: string;
  title: string;
  color: string;
  alt: string;
  text: string[];
  imageOnLeft: boolean;
  height: Height;
  imageHeight?: number;
  imageWidth?: number;
}

export default function ImageAndText(props: IImageAndTextProps) {
  return (
    <div
      className={`mx-10 xl:mx-16 flex flex-col h-auto mt-16 md:mt-20 ${
        props.height === Height.Free
          ? ""
          : "lg:h-fullsection_lg xl:h-fullsection"
      } ${props.imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div
        className={`relative mb-16 lg:w-2/3 ${
          props.height === Height.Free ? "" : "h-fullsection_md"
        } lg:h-auto lg:mb-0`}
      >
        {props.height !== Height.Free && (
          <Image src={props.image} alt={props.alt} layout="fill"></Image>
        )}
        {props.height === Height.Free && (
          <div className="relative lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <Image
              src={props.image}
              alt={props.alt}
              layout="responsive"
              height={props.imageHeight}
              width={props.imageWidth}
            ></Image>
          </div>
        )}
      </div>
      <div
        className={`lg:w-1/3 ${props.imageOnLeft ? "lg:pl-16" : "lg:pr-16"}`}
      >
        <div className="flex flex-col">
          <div className={`mb-12 font-bold text-${props.color} m_font`}>
            {props.title}
          </div>
          <div className="my-auto">
            {props.text.map((line, index) => (
              <div key={index} className="text-black s_font">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
