/**
 * Made by Haowen Liu in 2021
 * Component for creating a logo-only header.
 */

import Link from "next/link";

class LogoHeaderProps {
  name: string = "";
}

export default function LogoHeader(props: LogoHeaderProps) {
  return (
    <header className="absolute z-50 items-center hidden w-full mt-4 md:flex h-36">
      <div className="w-16 ml-10 xl:ml-16">
        <Link href={`/#${props.name}`}>
          <img
            src="/logo.png"
            alt="Logo"
            height={128}
            width={128}
            className="cursor-pointer"
          ></img>
        </Link>
      </div>
    </header>
  );
}
