/**
 * Made by Haowen Liu in 2021
 * Component for creating a logo-only header.
 */

import Link from "next/link";

interface LogoHeaderProps {
  name: string;
}

const LogoHeader: React.FC<LogoHeaderProps> = (props) => {
  return (
    <header className="absolute z-40 mt-4 hidden h-36 w-full items-center md:flex">
      <div className="ml-8 w-24 xl:ml-14">
        <Link href={`/#${props.name}`} passHref>
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
};

export default LogoHeader;
