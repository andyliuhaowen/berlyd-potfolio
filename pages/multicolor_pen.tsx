/**
 * Made by Haowen Liu in 2021
 * Project page: Multicolor Pen.
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function MulticolorPen() {
  return (
    <motion.div className="w-full" layoutId="multicolor_pen-image">
      <Image
        src="/multicolor_pen/main.jpg"
        alt="Multicolor Pen"
        height={8851}
        width={10800}
        layout="responsive"
        priority={true}
      ></Image>
    </motion.div>
  );
}
