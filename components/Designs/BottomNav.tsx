import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";

interface IBottomNav {
  leftName: string;
  leftLink: string;
  rightName: string;
  rightLink: string;
}

export default function BottomNav(props: IBottomNav) {
  const router = useRouter();
  return (
    <div className="flex p-16">
      {props.leftName !== "" && (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            if (props.leftLink.indexOf("http") === 0) {
              router.push(props.leftLink);
            } else {
              router.push(props.leftLink + ".html");
            }
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
            if (props.rightLink.indexOf("http") === 0) {
              router.push(props.rightLink);
            } else {
              router.push(props.rightLink + ".html");
            }
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
}
