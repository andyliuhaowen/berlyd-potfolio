import Image from "next/image";
import { motion } from "framer-motion";

export default function Mojo() {
  return (
    <motion.div className="w-full" layoutId="hidden_season-image">
      <Image
        src="/hidden_season/main.png"
        alt="Hidden Season"
        height={1080}
        width={1920}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
