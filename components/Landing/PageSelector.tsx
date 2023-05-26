/**
 * Made by Haowen Liu in 2021
 * Component of a page selector sidebar.
 */

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import styles from "../../styles/PageSelector.module.css";
import React from "react";

interface PageSelectorProps {
  page: number;
  setSection: (sec: number) => void;
}

const offsetMap = [5, 30, 38, 46, 71, 79, 87];
const mobileOffsetMap = [5, 17, 25, 33, 45, 53, 61];
const colorMap = [
  "#111921",
  "#035157",
  "#fffbf3",
  "#111921",
  "#fffbf3",
  "#f4d4d6",
  "#5f8db5",
];

const PageSelector: React.FC<PageSelectorProps> = (
  props: PageSelectorProps
) => {
  return (
    <motion.div
      className="fixed bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-0 lg:bottom-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-1/2"
      initial={false}
      animate={{ color: colorMap[props.page] }}
    >
      <motion.div
        initial={false}
        animate={{
          top: `${offsetMap[props.page] / 4}rem`,
          left: `${mobileOffsetMap[props.page] / 4}rem`,
        }}
        className={
          "absolute ml-0 flex h-5 w-5 items-center justify-center lg:ml-10 xl:ml-16 " +
          styles.dot
        }
      >
        <div className="relative h-3 w-3">
          <FontAwesomeIcon
            icon={faCircle}
            className="absolute left-0 top-0 h-full w-full"
          ></FontAwesomeIcon>
        </div>
      </motion.div>
      <div className="flex w-min flex-row lg:flex-col">
        <div className="mx-2 my-0 mb-8 lg:my-2 lg:ml-10 lg:mr-0 xl:ml-16">
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(0);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="mx-2 my-0 mb-8 flex flex-row lg:my-2 lg:ml-10 lg:mr-0 lg:flex-col xl:ml-16">
          <div className={"my-4 hidden text-sm lg:block"}>Packaging</div>
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(1);
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(2);
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(3);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="mx-2 my-0 mb-8 flex flex-row lg:my-2 lg:ml-10 lg:mr-0 lg:flex-col xl:ml-16">
          <div className={"my-4 hidden text-sm lg:block"}>Product</div>
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(4);
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(5);
              }}
            ></FontAwesomeIcon>
          </div>
          <div className="relative ml-3 mt-0 h-5 w-5 lg:ml-0 lg:mt-3">
            <FontAwesomeIcon
              icon={farCircle}
              className="absolute left-0 top-0 h-full w-full cursor-pointer"
              onClick={() => {
                props.setSection(6);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageSelector;
