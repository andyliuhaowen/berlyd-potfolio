/**
 * Made by Haowen Liu in 2021
 * Component for creating a logo-only header.
 */

import Image from "next/image";
import Link from "next/link";

export default function LogoHeader() {
  return (
    <header className="hidden absolute md:flex h-36 items-center mt-4 z-50 w-full">
      <div className="ml-10 xl:ml-16 w-16">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            height={128}
            width={128}
            layout="responsive"
            priority={true}
            className="cursor-pointer"
          ></Image>
        </Link>
      </div>
    </header>
  );
}
