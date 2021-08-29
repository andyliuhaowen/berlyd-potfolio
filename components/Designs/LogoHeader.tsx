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
    <header className="absolute z-40 items-center hidden w-full mt-4 md:flex h-36">
      <div className="w-24 ml-8 xl:ml-14">
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
