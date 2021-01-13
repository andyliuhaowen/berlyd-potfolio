/**
 * Made by Haowen Liu in 2021
 * Component for displaying a single project on landing page.
 */

import CustomButton from "../CustomButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

class LandingContentProps {
  name: string = "";
  title: string = "";
  tagline: string = "";
  desc: string = "";
  image: string = "";
  titleLong: boolean = false;
}

export default function LandingContent(props: LandingContentProps) {
  let textSize = "";
  if (props.titleLong) {
    textSize =
      "whitespace-normal text-8xl md:whitespace-nowrap md:text-9xl lg:text-40 xl:text-52";
  } else {
    textSize = "text-40 lg:text-48 xl:text-52 2xl:text-60 whitespace-nowrap";
  }
  return (
    <div className={`bg-${props.name}_bg h-screen relative flex items-center`}>
      <div className="flex w-full">
        <div className="flex flex-col items-center pl-0 md:w-7/20 lg:pl-28">
          <div className="h-full flex-col flex">
            <div
              className={
                `text-${props.name}_text font-yesteryear z-50 relative w-0 leading-none transform translate-x-16 md:transform-none ` +
                textSize
              }
            >
              {props.title}
            </div>
            <div className="flex-col flex-grow justify-center hidden md:flex">
              <div
                className={`text-${props.name}_text text-3xl xl:text-4xl 2xl:text-5xl mb-2`}
              >
                {props.tagline}
              </div>
              <div
                className={`text-${props.name}_text text-base 2xl:text-lg my-2 w-60 xl:w-64 2xl:w-80`}
              >
                {props.desc}
              </div>
              <div>
                <CustomButton
                  href={props.name}
                  text="View Project"
                  color={`${props.name}_text`}
                />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="mr-16 relative flex-grow h-65vh mt-8vh ml-16 md:ml-0"
          layoutId={`${props.name}-image`}
        >
          <Link href={props.name}>
            <Image
              src={props.image}
              alt={`${props.title} photo`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="cursor-pointer"
            ></Image>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
