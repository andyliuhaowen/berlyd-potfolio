import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Mojo() {
  return (
    <main>
      <Header logoOnly={true}></Header>
      <motion.div className="w-full" layoutId="mojo-image">
        <Image
          src="/mojo/main.png"
          alt="Mojo"
          height={1080}
          width={1920}
          layout="responsive"
        ></Image>
      </motion.div>
      <div className="text-2xl text-center mt-8">A delightful taste from Havana.</div>
      <div className="flex flex-row">
        <div className="">Summer 2020</div>
        <div className="">5 weeks</div>
        <div className="">Packaging Design for Drinks</div>
      </div>
    </main>
  );
}
