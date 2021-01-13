/**
 * Made by Haowen Liu in 2021
 * Project page: Hidden Season.
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function HiddenSeason() {
  return (
    <motion.div className="w-full" layoutId="hidden_season-image">
      <Image
        src="/hidden_season/main.png"
        alt="Hidden Season"
        height={1600}
        width={2560}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
