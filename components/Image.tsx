/**
 * Made by Haowen Liu in 2021
 * This is a replacement for next/image using images optimized and on build time.
 *
 * Design is inspired by next/image.
 */

import React, { Fragment } from "react";

interface ImagePropsResponsive {
  src: string;
  alt: string;
  className?: string;
  layout: "responsive";
  height: number;
  width: number;
}

interface ImagePropsFill {
  src: string;
  alt: string;
  className?: string;
  layout: "fill";
}

const Image: React.FC<ImagePropsResponsive | ImagePropsFill> = (props) => {
  return (
    <Fragment>
      {props.layout === "responsive" && (
        <picture className="relative block overflow-hidden">
          <div
            className="block"
            style={{ paddingTop: `${(100 / props.width) * props.height}%` }}
          ></div>
          <source
            type="image/webp"
            srcSet={`${props.src}_2k.webp 2560w, ${props.src}_1080p.webp 1920w, ${props.src}_720p.webp 1280w`}
          ></source>
          <img
            srcSet={`${props.src}_2k.jpg 2560w, ${props.src}_1080p.jpg 1920w, ${props.src}_720p.jpg 1280w`}
            alt={props.alt}
            className={`${
              props.className ? props.className : ""
            } absolute top-0 left-0 bottom-0 right-0 m-auto block max-h-full min-h-full min-w-full max-w-full`}
            sizes="100vw"
            decoding="async"
          ></img>
        </picture>
      )}
      {props.layout === "fill" && (
        <picture className="flex h-full w-full overflow-hidden">
          <source
            type="image/webp"
            srcSet={`${props.src}_2k.webp 2560w, ${props.src}_1080p.webp 1920w, ${props.src}_720p.webp 1280w`}
          ></source>
          <img
            srcSet={`${props.src}_2k.jpg 2560w, ${props.src}_1080p.jpg 1920w, ${props.src}_720p.jpg 1280w`}
            alt={props.alt}
            className={`h-auto w-full object-cover object-center ${
              props.className ? props.className : ""
            }`}
            decoding="async"
          ></img>
        </picture>
      )}
    </Fragment>
  );
};

export default Image;
