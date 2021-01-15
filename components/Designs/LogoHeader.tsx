import Image from "next/image";

export default function LogoHeader() {
  return (
    <header className="hidden absolute md:flex h-36 items-center mt-4 z-50 w-full">
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
    </header>
  );
}
