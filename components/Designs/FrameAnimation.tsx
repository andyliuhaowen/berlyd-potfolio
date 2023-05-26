/**
 * Made by Haowen Liu in 2021
 * Component for creating an animation out of image frames.
 */

import FullScreenImage from "./FullScreenImage";
import { useEffect, useState } from "react";
import { Height, Width } from "../../utils/global_types";

interface FrameAnimationProps {
  frames: string[];
  frameDuration: number;
  imageHeight: number;
  imageWidth: number;
}

const FrameAnimation: React.FC<FrameAnimationProps> = (props) => {
  const [frameNum, setFrameNum] = useState(0);
  const [increasing, setIncreasing] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (increasing) {
        if (frameNum === props.frames.length - 1) {
          setIncreasing(false);
        } else {
          setFrameNum(frameNum + 1);
        }
      } else {
        if (frameNum === 0) {
          setIncreasing(true);
        } else {
          setFrameNum(frameNum - 1);
        }
      }
    }, props.frameDuration * 1000);

    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [frameNum, increasing, props.frameDuration, props.frames.length]);
  return (
    <div
      className="relative h-auto"
      style={{ paddingTop: `${(100 / props.imageWidth) * props.imageHeight}%` }}
    >
      {props.frames.map((frame, index) => (
        <div
          className={`${
            index <= frameNum ? "opacity-100" : "opacity-0"
          } absolute left-0 right-0 top-0`}
          key={index}
        >
          <FullScreenImage
            image={frame}
            alt={`Frame ${index}`}
            imageHeight={props.imageHeight}
            imageWidth={props.imageWidth}
            width={Width.Full}
            height={Height.Free}
          ></FullScreenImage>
        </div>
      ))}
    </div>
  );
};

export default FrameAnimation;
