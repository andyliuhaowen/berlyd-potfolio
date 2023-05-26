/**
 * Made by Haowen Liu in 2021
 * Component for displaying a single project on landing page.
 */

import CustomButton from "../CustomButton";
import Image from "../Image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface LandingContentProps {
  name: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  titleLong: boolean;
  bgColor: string;
  textColor: string;
}

const LandingContent: React.FC<LandingContentProps> = (props) => {
  let textSize: string;
  if (props.titleLong) {
    textSize =
      "whitespace-normal text-20 md:whitespace-nowrap md:text-24 lg:text-24 xl:text-28 2xl:text-32";
  } else {
    textSize = "text-28 lg:text-32 xl:text-36 2xl:text-40 whitespace-nowrap";
  }
  return (
    <div className={`bg-${props.bgColor} relative flex h-screen items-center`}>
      <div className="flex w-full">
        <div className="flex flex-col items-center pl-10 md:w-7/20 lg:pl-40 xl:pl-48 2xl:pl-52">
          <div className="flex h-full flex-col">
            <div
              className={
                `text-${props.textColor} relative z-50 w-0 translate-x-16 font-caslon leading-tight md:transform-none md:leading-none ` +
                textSize
              }
            >
              {props.title}
            </div>
            <div className="hidden flex-grow flex-col justify-center md:flex">
              <div
                className={`text-${props.textColor} mb-2 text-3xl xl:text-4xl 2xl:text-5xl`}
              >
                {props.tagline}
              </div>
              <div
                className={`text-${props.textColor} my-2 w-60 text-base xl:w-64 2xl:w-80 2xl:text-lg`}
              >
                {props.desc}
              </div>
              <div className="mt-4">
                <CustomButton
                  href={props.name}
                  text="View Project"
                  color={props.textColor}
                  secondaryColor={props.bgColor}
                />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="relative mx-10 mt-8vh h-65vh flex-grow md:ml-0 xl:mx-16"
          layoutId={`${props.name}-image`}
        >
          <Link href={props.name} passHref>
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
              <Image
                src={props.image}
                alt={props.title}
                className="cursor-pointer"
                layout="fill"
              ></Image>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingContent;
