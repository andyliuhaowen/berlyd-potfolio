import Image from "next/image";
import { motion } from "framer-motion";

export default function Mojo() {
  return (
    <motion.div className="w-full" layoutId="chocolit-image">
      <Image
        src="/chocolit/main.png"
        alt="Chocolit"
        height={1080}
        width={1920}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
