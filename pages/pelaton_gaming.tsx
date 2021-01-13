/**
 * Made by Haowen Liu in 2021
 * Project page: Pelaton Gaming.
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function PelatonGaming() {
  return (
    <motion.div className="w-full" layoutId="pelaton_gaming-image">
      <Image
        src="/pelaton_gaming/main.png"
        alt="Pelaton Gaming"
        height={2485}
        width={3840}
        layout="responsive"
        priority={true}
      ></Image>
    </motion.div>
  );
}
