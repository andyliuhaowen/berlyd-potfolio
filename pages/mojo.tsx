import Image from "next/image";
import { motion } from "framer-motion";

export default function Mojo() {
  return (
    <motion.div className="w-full" layoutId="mojo-image">
      <Image
        src="/mojo/main.png"
        alt="Mojo"
        height={1080}
        width={1920}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
