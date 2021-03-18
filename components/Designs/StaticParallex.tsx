/**
 * Made by Haowen Liu in 2021
 *
 * Component for creating a static parallex effect between different images.
 *
 * Idea borrowed from https://stackoverflow.com/a/46918571 by UncaughtTypeError
 * licensed under CC BY-SA 3.0. By CC BY-SA 3.0, you may also use the following
 * code under CC BY-SA 3.0, which only has more limitations compared to the more
 * non-restrictive project license.
 */

import { Fragment } from "react";
import Image from "../Image";

class StaticParallexProps {
  images: string[] = [];
  alts: string[] = [];
  imageHeight: number = 0;
  imageWidth: number = 0;
}

export default function StaticParallex(props: StaticParallexProps) {
  return (
    <Fragment>
      {props.images.map((image, index) => (
        <div
          className="relative z-50 h-extralarge_md lg:h-extralarge_lg xl:h-extralarge"
          key={index}
        >
          <div
            className="absolute w-full h-full overflow-hidden"
            style={{ clip: "rect(0 auto auto 0)" }}
          >
            <div
              className="fixed top-0 w-full h-full"
              style={{ zIndex: -1, transform: "perspective(0px)" }}
            >
              <Image
                src={image}
                alt={props.alts[index]}
                layout="fill"
                height={props.imageHeight}
                width={props.imageWidth}
              ></Image>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
