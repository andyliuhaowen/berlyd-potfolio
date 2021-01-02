import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
  return (
    <header className="absolute flex h-24 items-center mx-4 mt-4" style={{ width: 'calc(100vw - 2rem)' }}>
      <div className="m-4 w-16"><Image src="/logo.png" alt="Logo" height={128} width={128} layout="responsive"></Image></div>
      <div className="m-6 ml-auto">
        <span className="m-2">
          <Link href="about">About</Link>
        </span>
        <span className="m-2">
          <Link href="resume">Resume</Link>
        </span>
        <span className="m-2">
          <Link href="fun">Fun</Link>
        </span>
        <span className="m-2">
          <Link href="contact">Contact</Link>
        </span>
      </div>
    </header>
  )
}
