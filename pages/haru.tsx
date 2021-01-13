/**
 * Made by Haowen Liu in 2021
 * Project page: Haru.
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function Haru() {
  return (
    <motion.div className="w-full" layoutId="haru-image">
      <Image
        src="/haru/main.png"
        alt="Haru"
        height={3300}
        width={5100}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
