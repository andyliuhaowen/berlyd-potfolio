import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

class CollapseProps {
  title: string = "";
}

const Collapse: React.FunctionComponent<CollapseProps> = (props) => {
  let [show, setShow] = useState(false);

  return (
    <>
      <motion.div
        className="flex flex-row items-center justify-center mt-12 mb-12 cursor-pointer md:mt-18 md:mb-16"
        onClick={() => {
          document.body.style.overflow = "hidden";
          setShow((origShow) => !origShow);
        }}
        layoutId="collapse_container"
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="inline h-6 mr-4"
        ></FontAwesomeIcon>
        <motion.div
          className="text-xl font-bold text-center md:text-2xl"
          layoutId="title_text"
        >
          {props.title}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {show && (
          <>
            <div className="fixed top-0 z-50 w-9/12 overflow-auto md:w-6/12 bg-green left-1/2 transform -translate-x-1/2">
              <motion.div
                className="w-full max-w-3xl overflow-auto max-w-96 bg-green"
                layoutId="collapse_container"
              >
                <motion.div
                  className="flex flex-row items-center justify-center mt-12 cursor-pointer md:mt-18"
                  onClick={() => {
                    document.body.style.overflow = "scroll";
                    setShow((origShow) => !origShow);
                  }}
                  layoutId="collapse_title"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="inline h-6 mr-4"
                  ></FontAwesomeIcon>
                  <motion.div
                    className="text-xl font-bold text-center md:text-2xl"
                    layoutId="title_text"
                  >
                    {props.title}
                  </motion.div>
                </motion.div>
                {props.children}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collapse;
