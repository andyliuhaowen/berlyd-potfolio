/**
 * Made by Haowen Liu in 2021
 * Component for creating a title for content (normal or banner).
 */

import React, { PropsWithChildren } from "react";

interface SectionHeaderProps {
  type: "normal" | "banner";
  color: "green" | "pink" | "black";
  bannerTextColor?: "black" | "white";
}

const Title: React.FC<PropsWithChildren<SectionHeaderProps>> = (props) => {
  return (
    <>
      {props.type === "normal" && (
        <div
          className={`mx-10 mt-16 mb-12 font-bold md:mt-20 md:mb-16 xl:mx-16 text-${props.color} m_font`}
        >
          {props.children}
        </div>
      )}
      {props.type === "banner" && (
        <div
          className={`px-10 py-12 font-bold xl:px-16 text-${props.bannerTextColor} bg-${props.color} l_font`}
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export default Title;
