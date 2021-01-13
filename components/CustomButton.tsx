/**
 * Made by Haowen Liu in 2021
 * Component of a customly styled button.
 */

import Link from "next/link";

class ButtonProps {
  text: string = "";
  href: string = "";
  color: string = "";
}

export default function CustomButton(props: ButtonProps) {
  return (
    <Link href={props.href}>
      <div
        className={`border-${props.color} text-${props.color} border inline-block my-2 cursor-pointer`}
      >
        <div className="m-1 font-bold">{props.text}</div>
      </div>
    </Link>
  );
}
