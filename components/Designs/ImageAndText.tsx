/**
 * Made by Haowen Liu in 2021
 * Component for creating a horizontally laid image and text.
 */

import Image from "../Image";

class ImageAndTextProps {
  image: string = "";
  alt: string = "";
  text: string[] = [];
  imageOnLeft: boolean = true;
}

export default function ImageAndText(props: ImageAndTextProps) {
  return (
    <div
      className={`mx-10 xl:mx-16 flex flex-col h-auto md:h-fullsection_md lg:h-fullsection ${
        props.imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 relative h-fullsection_md md:h-auto mb-16 md:mb-0">
        <Image src={props.image} alt={props.alt} layout="fill"></Image>
      </div>
      <div
        className={`md:w-1/2 flex flex-row items-center ${
          props.imageOnLeft ? "md:pl-16" : "md:pr-16"
        }`}
      >
        <div className="flex flex-col">
          {props.text.map((line, index) => (
            <div
              key={index}
              className="text-lg text-black leading-loose lg:text-2xl lg:leading-loose"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
