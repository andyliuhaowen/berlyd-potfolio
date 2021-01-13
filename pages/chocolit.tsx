/**
 * Made by Haowen Liu in 2021
 * Project page: Chocolit.
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function Chocolit() {
  return (
    <motion.div className="w-full" layoutId="chocolit-image">
      <Image
        src="/chocolit/main.png"
        alt="Chocolit"
        height={4501}
        width={8001}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
