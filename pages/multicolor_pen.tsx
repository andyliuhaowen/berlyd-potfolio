import Image from "next/image";
import { motion } from "framer-motion";

export default function Mojo() {
  return (
    <motion.div className="w-full" layoutId="multicolor_pen-image">
      <Image
        src="/multicolor_pen/main.jpg"
        alt="Multicolor Pen"
        height={1080}
        width={1920}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
