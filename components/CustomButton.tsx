/**
 * Made by Haowen Liu in 2021
 * Component of a custom-styled button.
 */

import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  color: string;
  secondaryColor: string;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <Link href={props.href} passHref>
      <div
        className={`border-${props.color} text-${props.color} hover:text-${props.secondaryColor} hover:bg-${props.color} transition-colors border-2 inline-block my-2 cursor-pointer`}
      >
        <div className="m-2 font-bold">{props.text}</div>
      </div>
    </Link>
  );
};

export default CustomButton;
