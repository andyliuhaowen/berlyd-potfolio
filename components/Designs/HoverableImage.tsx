/**
 * Made by Haowen Liu in 2021
 * Component for creating hoverable images.
 */

import { motion } from "framer-motion";
import Image from "../Image";

class HoverableImageProps {
  image: string = "";
  hoveredText: string[] = [];
  caption: string = "";
}

export default function HoverableImage(props: HoverableImageProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-4 text-2xl text-center text-black">
        {props.caption}
      </div>
      <div className="relative flex-grow">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={props.image} alt={props.caption} layout="fill"></Image>
        </div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
          <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-8 text-lg">
            {props.hoveredText.map((str, index) => (
              <div key={index} className="text-black text-base">
                {str}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
