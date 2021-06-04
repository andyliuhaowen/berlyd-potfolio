/**
 * Made by Haowen Liu in 2021
 * Component of a customly styled button.
 */

import Link from "next/link";

interface IButtonProps {
  text: string;
  href: string;
  color: string;
  secondaryColor: string;
}

export default function CustomButton(props: IButtonProps) {
  return (
    <Link href={props.href}>
      <div
        className={`border-${props.color} text-${props.color} hover:text-${props.secondaryColor} hover:bg-${props.color} transition-colors border-2 inline-block my-2 cursor-pointer`}
      >
        <div className="m-2 font-bold">{props.text}</div>
      </div>
    </Link>
  );
}
