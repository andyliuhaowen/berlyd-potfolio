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

class FullScreenImageProps {
  image: string = "";
  alt: string = "";
  height: Height = Height.Free;
  width: Width = Width.Padded;
  layoutId?: string;
  imageHeight?: number;
  imageWidth?: number;
}

export default function FullScreenImage(props: FullScreenImageProps) {
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
          height={props.imageHeight!}
          width={props.imageWidth!}
        ></Image>
      )}
      {props.height !== Height.Free && (
        <Image src={props.image} alt={props.alt} layout="fill"></Image>
      )}
    </motion.div>
  );
}
