/**
 * Made by Haowen Liu in 2021
 * Component for creating hoverable images.
 */

import { motion } from "framer-motion";
import Image from "next/image";

class HoverableImageProps {
  image: string = "";
  hoveredText: string[] = [];
  caption: string = "";
}

export default function HoverableImage(props: HoverableImageProps) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="text-center text-2xl mb-4">{props.caption}</div>
      <div className="flex-grow relative">
        <Image
          src={props.image}
          alt={props.caption}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        ></Image>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="bg-white opacity-50 absolute left-0 top-0 w-full h-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-8 text-lg">
            {props.hoveredText.map((str, index) => (
              <div key={index}>{str}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
