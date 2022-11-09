/**
 * Made by Haowen Liu in 2021
 * Component for creating a collapsable section.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState, PropsWithChildren } from "react";

interface CollapseProps {
  title: string;
  color: string;
}

const hoverVariants = {
  default: { scaleX: 0 },
  hovered: { scaleX: 1 },
};

const Collapse: React.FC<PropsWithChildren<CollapseProps>> = (props) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ height: "9rem" }}
      animate={{ height: show ? "auto" : "9rem" }}
      transition={{ type: "spring", duration: 1, bounce: 0.15 }}
      className={`${show ? "" : "overflow-hidden"} relative`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        animate={hover ? "hover" : "default"}
        variants={hoverVariants}
        className={`absolute top-8 bottom-4 left-0 w-full border-${props.color} origin-left border-t-2 border-b-2`}
      ></motion.div>
      <motion.div
        className={`sticky top-16 ml-10 inline-block h-7.5 w-7.5 origin-center cursor-pointer self-center md:h-9 md:w-9 xl:ml-16 ${
          show ? "mt-16" : ""
        }`}
        initial={{ transform: "rotate(0deg)" }}
        animate={{
          transform: show ? "rotate(45deg)" : "rotate(0deg)",
        }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        onClick={() => {
          setShow((origShow) => {
            return !origShow;
          });
        }}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={`h-7.5 md:h-9 text-${props.color} align-top`}
        ></FontAwesomeIcon>
      </motion.div>
      <div
        className={`relative top-16 inline-block self-center pl-6 align-top font-bold text-${props.color} m_font cursor-pointer leading-none md:leading-none`}
        onClick={() => {
          setShow((origShow) => !origShow);
        }}
      >
        {props.title}
      </div>
      <div
        className={`mx-20 overflow-auto pb-12 xl:mx-28 ${
          show ? "mt-12" : "mt-24"
        }`}
      >
        {props.children}
      </div>
    </motion.div>
  );
};

export default Collapse;
