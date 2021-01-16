import { getRemHeight, Height } from "../../utils/global_types";
import HoverableImage from "./HoverableImage";

class HoverableImageListProps {
  images: string[] = [];
  captions: string[] = [];
  hoveredTexts: string[][] = [];
  height: Height = Height.Full;
}

export default function HoverableImageList(props: HoverableImageListProps) {
  return (
    <div
      className={`h-auto md:${getRemHeight(
        props.height
      )} flex flex-col md:flex-row`}
    >
      {props.images.map((image, index) => (
        <div
          className={`flex-grow ${getRemHeight(
            props.height
          )} md:h-auto mb-8 mx-16 md:mb-0 md:mx-0`}
          key={index}
        >
          <HoverableImage
            image={image}
            caption={props.captions[index]}
            hoveredText={props.hoveredTexts[index]}
          ></HoverableImage>
        </div>
      ))}
    </div>
  );
}
