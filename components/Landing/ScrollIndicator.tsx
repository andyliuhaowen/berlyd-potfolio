import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
/**
 * Made by Haowen Liu in 2021
 * Component for creating a bumping scroll indicator.
 */

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8 bottom-16p lg:bottom-8p text-black">
      <motion.div
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
        }}
        className="relative h-full w-full"
        animate={{
          y: ["40%", "-40%"],
        }}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="w-full h-full absolute left-0 top-0"
        ></FontAwesomeIcon>
      </motion.div>
    </div>
  );
}
