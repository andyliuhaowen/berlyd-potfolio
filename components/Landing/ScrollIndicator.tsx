/**
 * Made by Haowen Liu in 2021
 * Component for creating a bumping scroll indicator.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute left-1/2 bottom-16p h-8 w-8 -translate-x-1/2 text-black lg:bottom-8p">
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
          className="absolute top-0 left-0 h-full w-full"
        ></FontAwesomeIcon>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
