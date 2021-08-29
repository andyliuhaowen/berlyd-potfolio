/**
 * Made by Haowen Liu in 2021
 * Component for laying out a grid of captioned images as a process showcase.
 */

import Image from "../Image";

interface ProcessGalleryProps {
  images: string[];
  captions: string[];
  imageHeight: number;
  imageWidth: number;
}

const ProcessGallery: React.FC<ProcessGalleryProps> = (props) => {
  return (
    <div
      className={`justify-between mx-10 xl:mx-16 grid grid-cols-4 grid-flow-row gap-8 mt-8`}
    >
      {props.images.map((image, index) => (
        <div key={index} className="flex flex-col s_font">
          <Image
            src={image}
            alt={`Process ${index}`}
            layout="responsive"
            height={props.imageHeight}
            width={props.imageWidth}
          ></Image>
          <div>{props.captions[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default ProcessGallery;
