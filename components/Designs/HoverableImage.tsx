/**
 * Made by Haowen Liu in 2021
 * Component for creating hoverable images.
 */

import { motion } from "framer-motion";
import Image from "../Image";

interface HoverableImageProps {
  image: string;
  imageHidden: string;
  caption: string;
}

const HoverableImage: React.FC<HoverableImageProps> = (props) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="s_font mx-0 mb-4 text-black md:mx-10 xl:mx-16">
        {props.caption}
      </div>
      <div className="relative flex-grow">
        <div className="absolute left-0 top-0 h-full w-full">
          <Image src={props.image} alt={props.caption} layout="fill"></Image>
        </div>
        <motion.div
          className="absolute left-0 top-0 h-full w-full bg-white"
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
};

export default HoverableImage;
