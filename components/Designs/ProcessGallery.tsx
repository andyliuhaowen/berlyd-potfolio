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
      className={`mx-10 mt-8 grid grid-flow-row grid-cols-4 justify-between gap-8 xl:mx-16`}
    >
      {props.images.map((image, index) => (
        <div key={index} className="s_font flex flex-col">
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
