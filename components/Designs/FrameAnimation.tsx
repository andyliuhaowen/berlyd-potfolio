import FullScreenImage from "./FullScreenImage";
import { useEffect, useState } from "react";

interface IFrameAnimationProps {
  frames: string[];
  frame_duration: number;
  imageHeight: number;
  imageWidth: number;
}

export default function FrameAnimation(props: IFrameAnimationProps) {
  const [frameNum, setFrameNum] = useState(0);
  const [increasing, setIncreasing] = useState(true);
  useEffect(() => {
    let int = setInterval(() => {
      if (increasing) {
        if (frameNum == props.frames.length - 1) {
          setIncreasing(false);
        } else {
          setFrameNum(frameNum + 1);
        }
      } else {
        if (frameNum == 0) {
          setIncreasing(true);
        } else {
          setFrameNum(frameNum - 1);
        }
      }
    }, props.frame_duration * 1000);

    return () => {
      if (int != undefined) {
        clearInterval(int);
      }
    };
  }, [frameNum, increasing]);
  return (
    <div
      className="relative h-auto"
      style={{ paddingTop: `${(100 / props.imageWidth) * props.imageHeight}%` }}
    >
      {props.frames.map((frame, index) => (
        <div
          className={`${
            index <= frameNum ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 right-0`}
          key={index}
        >
          <FullScreenImage
            image={frame}
            alt={`Frame ${index}`}
            height={props.imageHeight}
            width={props.imageWidth}
          ></FullScreenImage>
        </div>
      ))}
    </div>
  );
}
