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
import Image from "next/image";

class FullScreenImageProps {
  image: string = "";
  alt: string = "";
  height: Height = Height.Free;
  width: Width = Width.Padded;
  imageHeight?: number;
  imageWidth?: number;
  layoutId?: string;
}

export default function FullScreenImage(props: FullScreenImageProps) {
  return (
    <motion.div
      className={`relative ${getMarginForWidth(props.width)} ${getRemHeight(
        props.height
      )}`}
      layoutId={props.layoutId}
    >
      {props.height === Height.Free && (
        <Image
          src={props.image}
          alt={props.alt}
          height={props.imageHeight!}
          width={props.imageWidth!}
          layout="responsive"
          priority={true}
        ></Image>
      )}
      {props.height !== Height.Free && (
        <Image
          src={props.image}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority={true}
        ></Image>
      )}
    </motion.div>
  );
}
