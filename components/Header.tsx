/**
 * Made by Haowen Liu in 2021
 * Component of the header of page.
 */

import Link from "next/link";
import { Fragment } from "react";

export default function Header() {
  return (
    <header className="absolute z-50 flex items-center w-full mt-4 h-36">
      <div className="w-16 ml-10 xl:ml-16">
        <img
          src="/logo.png"
          alt="Logo"
          height={128}
          width={128}
        ></img>
      </div>
      <div className="ml-auto mr-10 text-black xl:mr-16">
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
