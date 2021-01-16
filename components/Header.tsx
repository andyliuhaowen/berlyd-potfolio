/**
 * Made by Haowen Liu in 2021
 * Component of the header of page.
 */

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Header() {
  return (
    <header className="absolute flex h-36 items-center mt-4 z-50 w-full">
      <div className="ml-10 xl:ml-16 w-16">
        <Image
          src="/logo.png"
          alt="Logo"
          height={128}
          width={128}
          layout="responsive"
          priority={true}
        ></Image>
      </div>
      <div className="mr-10 xl:mr-16 ml-auto">
        <Fragment>
          <span className={`mr-2`}>
            <Link href="about">About</Link>
          </span>
          <span className={`m-2`}>
            <Link href="resume">Resume</Link>
          </span>
          <span className={`m-2`}>
            <Link href="fun">Fun</Link>
          </span>
          <span className={`ml-2`}>
            <Link href="contact">Contact</Link>
          </span>
        </Fragment>
      </div>
    </header>
  );
}
