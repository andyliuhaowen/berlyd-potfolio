/**
 * Made by Haowen Liu in 2021
 * Component for creating a title for content (normal or banner).
 */

import React from "react";

interface SectionHeaderProps {
  type: "normal" | "banner";
  color: "green" | "pink" | "black";
  bannerTextColor?: "black" | "white";
}

const Title: React.FC<SectionHeaderProps> = (props) => {
  return (
    <>
      {props.type === "normal" && (
        <div
          className={`mt-16 mb-12 font-bold mx-10 xl:mx-16 md:mt-20 md:mb-16 text-${props.color} m_font`}
        >
          {props.children}
        </div>
      )}
      {props.type === "banner" && (
        <div
          className={`font-bold px-10 xl:px-16 py-12 text-${props.bannerTextColor} bg-${props.color} l_font`}
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export default Title;
