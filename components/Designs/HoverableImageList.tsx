import { getRemHeight, Height } from "../../utils/global_types";
import HoverableImage from "./HoverableImage";

interface IHoverableImageListProps {
  images: string[];
  imagesHidden: string[];
  captions: string[];
  height: Height;
}

export default function HoverableImageList(props: IHoverableImageListProps) {
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
            imageHidden={props.imagesHidden[index]}
            caption={props.captions[index]}
          ></HoverableImage>
        </div>
      ))}
    </div>
  );
}
