/**
 * Made by Haowen Liu in 2021
 * Component for laying out a three-image group with text side by side.
 */

import { PropsWithChildren } from "react";

interface ImageAndTextProps {
  title: string;
  color: string;
  text: string[];
  imageOnLeft: boolean;
}

const ThreeImageAndText: React.FC<PropsWithChildren<ImageAndTextProps>> = (
  props
) => {
  return (
    <div
      className={`mx-10 mt-28 flex h-auto flex-col md:mt-32 lg:h-fullsection_lg xl:mx-16 xl:h-fullsection ${
        props.imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="relative mb-16 h-fullsection_md lg:mb-0 lg:h-auto lg:w-2/3">
        <div className="relative h-full">{props.children}</div>
      </div>
      <div
        className={`flex flex-col lg:w-1/3 ${
          props.imageOnLeft ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <div className={`mb-12 font-bold text-${props.color} m_font`}>
          {props.title}
        </div>
        <div className="flex flex-grow flex-col">
          <div className="my-auto">
            {props.text.map((line, index) => {
              if (line === "") {
                return (
                  <div key={index} className="s_font text-black">
                    &nbsp;
                  </div>
                );
              } else {
                return (
                  <div key={index} className="s_font text-black">
                    {line}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeImageAndText;
