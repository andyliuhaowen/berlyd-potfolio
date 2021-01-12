import Image from "next/image";
import { motion } from "framer-motion";

export default function Mojo() {
  return (
    <motion.div className="w-full" layoutId="pelaton_gaming-image">
      <Image
        src="/pelaton_gaming/main.png"
        alt="Pelaton Gaming"
        height={1080}
        width={1920}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
