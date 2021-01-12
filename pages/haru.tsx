import Image from "next/image";
import { motion } from "framer-motion";

export default function Mojo() {
  return (
    <motion.div className="w-full" layoutId="haru-image">
      <Image
        src="/haru/main.png"
        alt="Haru"
        height={1080}
        width={1920}
        layout="responsive"
      ></Image>
    </motion.div>
  );
}
