import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

class HeaderProps {
  color: string = "";
}

export default function Header(props: HeaderProps) {
  return (
    <header className="absolute flex h-36 items-center mt-4 z-50 w-full">
      <div className="ml-10 xl:ml-16 w-16">
        <Image
          src="/logo.png"
          alt="Logo"
          height={128}
          width={128}
          layout="responsive"
        ></Image>
      </div>
      <div className="mr-10 xl:mr-16 ml-auto">
        <Fragment>
          <span className={`mr-2 text-${props.color}`}>
            <Link href="about">About</Link>
          </span>
          <span className={`m-2 text-${props.color}`}>
            <Link href="resume">Resume</Link>
          </span>
          <span className={`m-2 text-${props.color}`}>
            <Link href="fun">Fun</Link>
          </span>
          <span className={`ml-2 text-${props.color}`}>
            <Link href="contact">Contact</Link>
          </span>
        </Fragment>
      </div>
    </header>
  );
}
