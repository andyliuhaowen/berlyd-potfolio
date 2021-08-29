/**
 * Made by Haowen Liu in 2021
 * Component for creating navigations at the bottom.
 */

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";

interface BottomNav {
  leftName: string;
  leftLink: string;
  rightName: string;
  rightLink: string;
}

const BottomNav: React.FC<BottomNav> = (props) => {
  const router = useRouter();
  return (
    <div className="flex p-16">
      {props.leftName !== "" && (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            router.push(props.leftLink);
          }}
        >
          <div className="relative w-12 h-12 text-black">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="absolute top-0 left-0 w-full h-full"
            ></FontAwesomeIcon>
          </div>
          <div className="ml-4 font-bold text-black s_font">
            {props.leftName}
          </div>
        </div>
      )}
      {props.rightName !== "" && (
        <div
          className="flex items-center ml-auto cursor-pointer"
          onClick={() => {
            router.push(props.rightLink);
          }}
        >
          <div className="mr-4 font-bold text-black s_font">
            {props.rightName}
          </div>
          <div className="relative w-12 h-12 text-black">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="absolute top-0 left-0 w-full h-full"
            ></FontAwesomeIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
