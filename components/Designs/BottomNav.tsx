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
          className="flex cursor-pointer items-center"
          onClick={() => {
            router.push(props.leftLink);
          }}
        >
          <div className="relative h-12 w-12 text-black">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="absolute left-0 top-0 h-full w-full"
            ></FontAwesomeIcon>
          </div>
          <div className="s_font ml-4 font-bold text-black">
            {props.leftName}
          </div>
        </div>
      )}
      {props.rightName !== "" && (
        <div
          className="ml-auto flex cursor-pointer items-center"
          onClick={() => {
            router.push(props.rightLink);
          }}
        >
          <div className="s_font mr-4 font-bold text-black">
            {props.rightName}
          </div>
          <div className="relative h-12 w-12 text-black">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="absolute left-0 top-0 h-full w-full"
            ></FontAwesomeIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
