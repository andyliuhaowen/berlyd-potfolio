/**
 * Made by Haowen Liu in 2021
 * Component for creating a title for content (normal or banner).
 */

import React from "react";

class SectionHeaderProps {
  type: "normal" | "banner" = "normal";
  color: "green" = "green";
}

export default function Title(
  props: React.PropsWithChildren<SectionHeaderProps>
) {
  return (
    <>
      {props.type === "normal" && (
        <div
          className={`mt-16 mb-12 text-3xl font-bold text-black md:text-4xl mx-10 xl:mx-16 md:mt-20 md:mb-16 text-${props.color}`}
        >
          {props.children}
        </div>
      )}
      {props.type === "banner" && (
        <div
          className={`mt-24 md:mt-36 text-4xl font-bold text-black px-10 xl:px-16 md:text-5xl py-12 text-white bg-${props.color}`}
        >
          {props.children}
        </div>
      )}
    </>
  );
}
