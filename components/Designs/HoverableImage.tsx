/**
 * Made by Haowen Liu in 2021
 * Component for creating hoverable images.
 */

import { motion } from "framer-motion";
import Image from "../Image";

interface IHoverableImageProps {
  image: string;
  imageHidden: string;
  caption: string;
}

export default function HoverableImage(props: IHoverableImageProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mx-0 mb-4 text-black md:mx-10 xl:mx-16 s_font">
        {props.caption}
      </div>
      <div className="relative flex-grow">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={props.image} alt={props.caption} layout="fill"></Image>
        </div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={props.imageHidden}
            alt={props.caption}
            layout="fill"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
}
