/**
 * Made by Haowen Liu in 2021
 * Component for laying out a full-width-sized image.
 */

import {
  getMarginForWidth,
  getRemHeight,
  Height,
  Width,
} from "../../utils/global_types";
import { motion } from "framer-motion";
import Image from "../Image";

interface FullScreenImageProps {
  image: string;
  alt: string;
  height: Height;
  width: Width;
  layoutId?: string;
  imageHeight: number;
  imageWidth: number;
}

const FullScreenImage: React.FC<FullScreenImageProps> = (props) => {
  return (
    <motion.div
      className={`relative ${getMarginForWidth(props.width)} ${getRemHeight(
        props.height
      )}`}
      layoutId={props.layoutId}
      key={props.layoutId}
    >
      {props.height === Height.Free && (
        <Image
          src={props.image}
          alt={props.alt}
          layout="responsive"
          height={props.imageHeight}
          width={props.imageWidth}
        ></Image>
      )}
      {props.height !== Height.Free && (
        <Image src={props.image} alt={props.alt} layout="fill"></Image>
      )}
    </motion.div>
  );
};

export default FullScreenImage;
