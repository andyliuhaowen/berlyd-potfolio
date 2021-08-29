import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
/**
 * Made by Haowen Liu in 2021
 * Component for creating a bumping scroll indicator.
 */

import { motion } from "framer-motion";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute w-8 h-8 text-black left-1/2 transform -translate-x-1/2 bottom-16p lg:bottom-8p">
      <motion.div
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
        }}
        className="relative w-full h-full"
        animate={{
          y: ["40%", "-40%"],
        }}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="absolute top-0 left-0 w-full h-full"
        ></FontAwesomeIcon>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
