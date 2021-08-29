/**
 * Made by Haowen Liu in 2021
 * This is an replacement for next/image using images optimized and on build time.
 *
 * Design is inspired by next/image.
 */

import { Fragment } from "react";

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
        <picture className="block relative overflow-hidden">
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
            className={`${props.className} block absolute min-w-full min-h-full max-h-full max-w-full top-0 left-0 bottom-0 right-0 m-auto`}
            sizes="100vw"
            decoding="async"
          ></img>
        </picture>
      )}
      {props.layout === "fill" && (
        <picture className="h-full w-full flex overflow-hidden">
          <source
            type="image/webp"
            srcSet={`${props.src}_2k.webp 2560w, ${props.src}_1080p.webp 1920w, ${props.src}_720p.webp 1280w`}
          ></source>
          <img
            srcSet={`${props.src}_2k.jpg 2560w, ${props.src}_1080p.jpg 1920w, ${props.src}_720p.jpg 1280w`}
            alt={props.alt}
            className={`object-cover object-center h-auto w-full ${props.className}`}
            decoding="async"
          ></img>
        </picture>
      )}
    </Fragment>
  );
};

export default Image;
