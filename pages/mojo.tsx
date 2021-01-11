import Image from 'next/image'

export default function Mojo() {
  return <div className="w-full">
    <Image src="/mojo.png" alt="Mojo" layout="fill"></Image>
  </div>;
}
