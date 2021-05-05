/**
 * Made by Haowen Liu in 2021
 * Component of the header of page.
 */

import Link from "next/link";
import { Fragment } from "react";

export default function Header() {
  return (
    <header className="absolute z-40 flex items-center w-full mt-4 h-36">
      <div className="w-24 ml-8 xl:ml-14">
        <Link href={`/#landing`}>
          <img
            src="/logo.png"
            alt="Logo"
            height={128}
            width={128}
            className="cursor-pointer"
          ></img>
        </Link>
      </div>
      <div className="ml-auto mr-10 text-black xl:mr-16">
        <Fragment>
          <span className={`mr-2`}>
            <Link href="/about.html">About</Link>
          </span>
          <span className={`m-2`}>
            <a href="/resume.png" target="_blank" rel="noreferrer noopener">
              Resume
            </a>
          </span>
        </Fragment>
      </div>
    </header>
  );
}
