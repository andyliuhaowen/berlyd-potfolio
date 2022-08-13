/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontally laid image and text.
 */

import { Height } from "../../utils/global_types";
import Image from "../Image";

interface ImageAndTextProps {
  image: string;
  title: string;
  color: string;
  alt: string;
  text: string[];
  imageOnLeft: boolean;
  height: Height;
  imageHeight: number;
  imageWidth: number;
}

const ImageAndText: React.FC<ImageAndTextProps> = (props) => {
  return (
    <div
      className={`mx-10 mt-28 flex h-auto flex-col md:mt-32 xl:mx-16 ${
        props.height === Height.Free
          ? ""
          : "lg:h-fullsection_lg xl:h-fullsection"
      } ${props.imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div
        className={`relative mb-16 lg:w-2/3 ${
          props.height === Height.Free ? "" : "h-fullsection_md"
        } lg:mb-0 lg:h-auto`}
      >
        {props.height !== Height.Free && (
          <Image src={props.image} alt={props.alt} layout="fill"></Image>
        )}
        {props.height === Height.Free && (
          <div className="relative lg:top-1/2 lg:-translate-y-1/2">
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
        className={`flex flex-col lg:w-1/3 ${
          props.imageOnLeft ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <div className={`mb-12 font-bold text-${props.color} m_font`}>
          {props.title}
        </div>
        <div className="flex flex-grow flex-col">
          <div className="my-auto">
            {props.text.map((line, index) => {
              if (line === "") {
                return (
                  <div key={index} className="s_font text-black">
                    &nbsp;
                  </div>
                );
              } else {
                return (
                  <div key={index} className="s_font text-black">
                    {line}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndText;
